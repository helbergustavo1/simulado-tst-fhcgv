package com.example.ui.viewmodel

import android.app.Application
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.viewModelScope
import com.example.data.ExamRepository
import com.example.data.QuestionBank
import com.example.model.ExamResult
import com.example.model.ExamType
import com.example.model.Question
import com.example.model.SubjectScore
import kotlinx.coroutines.Job
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import java.util.UUID

enum class Screen {
    DASHBOARD,
    SIMULADOS_LIST,
    THEMATIC_LIST,
    ACTIVE_EXAM,
    EXAM_RESULT,
    REVIEW_EXAM,
    CADERNO_ERROS,
    PERFORMANCE,
    SEARCH_QUESTIONS
}

data class UiState(
    val currentScreen: Screen = Screen.DASHBOARD,
    // Active exam state
    val examTitle: String = "",
    val examType: ExamType = ExamType.FULL_SIMULADO,
    val activeQuestions: List<Question> = emptyList(),
    val currentQuestionIndex: Int = 0,
    val userAnswers: Map<Int, String> = emptyMap(), // questionId -> option
    val markedForReview: Set<Int> = emptySet(), // questionId
    val timeRemainingSeconds: Long = 10800L, // 3 hours = 10800s
    val initialTimeLimitSeconds: Long = 10800L,
    val isTimerRunning: Boolean = false,
    val showImmediateAnswer: Boolean = false,
    val isExamFinished: Boolean = false,

    // Last completed result & review state
    val lastResult: ExamResult? = null,
    val reviewQuestions: List<Question> = emptyList(),
    val reviewUserAnswers: Map<Int, String> = emptyMap(),

    // Results history & Caderno de erros
    val examResults: List<ExamResult> = emptyList(),
    val wrongQuestions: List<Question> = emptyList(),
    val wrongQuestionsCount: Int = 0,
    val selectedMateriaFilter: String? = null,

    // Stats
    val totalAnswered: Int = 0,
    val overallAccuracy: Float = 0f,
    val subjectStats: Map<String, SubjectScore> = emptyMap(),

    // Search
    val searchQuery: String = "",
    val searchResults: List<Question> = emptyList()
)

class MainViewModel(application: Application) : AndroidViewModel(application) {
    private val repository = ExamRepository(application)

    private val _uiState = MutableStateFlow(UiState())
    val uiState: StateFlow<UiState> = _uiState.asStateFlow()

    private var timerJob: Job? = null

    init {
        loadSavedData()
    }

    private fun loadSavedData() {
        val results = repository.getExamResults()
        val wrongIds = repository.getWrongQuestionIds()
        val wrongQuestions = QuestionBank.getQuestionsByIds(wrongIds.toList())

        // Calculate global statistics
        var totalAnswered = 0
        var totalCorrect = 0
        val subjectTotals = mutableMapOf<String, Pair<Int, Int>>() // total, correct

        for (res in results) {
            totalAnswered += (res.correctCount + res.wrongCount)
            totalCorrect += res.correctCount
            for ((subject, score) in res.subjectBreakdown) {
                val cur = subjectTotals.getOrDefault(subject, Pair(0, 0))
                subjectTotals[subject] = Pair(cur.first + score.total, cur.second + score.correct)
            }
        }

        val subjectStatsMap = subjectTotals.mapValues { (_, pair) ->
            SubjectScore(
                total = pair.first,
                correct = pair.second,
                percentage = if (pair.first > 0) (pair.second.toFloat() / pair.first) * 100f else 0f
            )
        }

        val overallAccuracy = if (totalAnswered > 0) {
            (totalCorrect.toFloat() / totalAnswered) * 100f
        } else 0f

        _uiState.update {
            it.copy(
                examResults = results,
                wrongQuestions = wrongQuestions,
                wrongQuestionsCount = wrongIds.size,
                totalAnswered = totalAnswered,
                overallAccuracy = overallAccuracy,
                subjectStats = subjectStatsMap
            )
        }
    }

    fun navigateTo(screen: Screen) {
        _uiState.update { it.copy(currentScreen = screen) }
    }

    // Start one of the 10 Simulados Completos (1 to 10)
    fun startSimuladoCompleto(examNumber: Int) {
        val questions = QuestionBank.getSimuladoCompleto(examNumber - 1)
        val timeLimit = 3 * 3600L // 3 hours (180 min)
        startExamSession(
            title = "Simulado Completo $examNumber (Estilo Consulplan)",
            type = ExamType.FULL_SIMULADO,
            questions = questions,
            timeLimitSeconds = timeLimit,
            immediateAnswer = false
        )
    }

    // Start one of the 15 Provas Temáticas (30 questions each)
    fun startThematicExam(subject: String) {
        val questions = QuestionBank.getThematicExam(subject)
        startExamSession(
            title = "Prova Temática: $subject",
            type = ExamType.THEMATIC_EXAM,
            questions = questions,
            timeLimitSeconds = 0L, // No strict countdown timer for study mode
            immediateAnswer = true
        )
    }

    // Start Caderno de Erros review quiz
    fun startWrongQuestionsQuiz() {
        val questions = _uiState.value.wrongQuestions
        if (questions.isEmpty()) return
        startExamSession(
            title = "Revisão: Caderno de Questões Erradas",
            type = ExamType.WRONG_QUESTIONS_REVIEW,
            questions = questions,
            timeLimitSeconds = 0L,
            immediateAnswer = true
        )
    }

    private fun startExamSession(
        title: String,
        type: ExamType,
        questions: List<Question>,
        timeLimitSeconds: Long,
        immediateAnswer: Boolean
    ) {
        timerJob?.cancel()

        _uiState.update {
            it.copy(
                currentScreen = Screen.ACTIVE_EXAM,
                examTitle = title,
                examType = type,
                activeQuestions = questions,
                currentQuestionIndex = 0,
                userAnswers = emptyMap(),
                markedForReview = emptySet(),
                timeRemainingSeconds = timeLimitSeconds,
                initialTimeLimitSeconds = timeLimitSeconds,
                isTimerRunning = timeLimitSeconds > 0,
                showImmediateAnswer = immediateAnswer,
                isExamFinished = false
            )
        }

        if (timeLimitSeconds > 0) {
            startTimer()
        }
    }

    private fun startTimer() {
        timerJob?.cancel()
        timerJob = viewModelScope.launch {
            while (_uiState.value.timeRemainingSeconds > 0 && _uiState.value.isTimerRunning) {
                delay(1000)
                _uiState.update {
                    val nextSec = it.timeRemainingSeconds - 1
                    if (nextSec <= 0) {
                        it.copy(timeRemainingSeconds = 0, isTimerRunning = false)
                    } else {
                        it.copy(timeRemainingSeconds = nextSec)
                    }
                }
                if (_uiState.value.timeRemainingSeconds <= 0) {
                    finishExam()
                    break
                }
            }
        }
    }

    fun toggleTimerPause() {
        val currentRunning = _uiState.value.isTimerRunning
        _uiState.update { it.copy(isTimerRunning = !currentRunning) }
        if (!currentRunning && _uiState.value.timeRemainingSeconds > 0) {
            startTimer()
        } else {
            timerJob?.cancel()
        }
    }

    fun selectAnswer(questionId: Int, optionKey: String) {
        val updated = _uiState.value.userAnswers.toMutableMap()
        updated[questionId] = optionKey
        _uiState.update { it.copy(userAnswers = updated) }
    }

    fun toggleMarkForReview(questionId: Int) {
        val current = _uiState.value.markedForReview.toMutableSet()
        if (current.contains(questionId)) {
            current.remove(questionId)
        } else {
            current.add(questionId)
        }
        _uiState.update { it.copy(markedForReview = current) }
    }

    fun goToQuestion(index: Int) {
        if (index in _uiState.value.activeQuestions.indices) {
            _uiState.update { it.copy(currentQuestionIndex = index) }
        }
    }

    fun nextQuestion() {
        val next = _uiState.value.currentQuestionIndex + 1
        if (next < _uiState.value.activeQuestions.size) {
            _uiState.update { it.copy(currentQuestionIndex = next) }
        }
    }

    fun prevQuestion() {
        val prev = _uiState.value.currentQuestionIndex - 1
        if (prev >= 0) {
            _uiState.update { it.copy(currentQuestionIndex = prev) }
        }
    }

    fun finishExam() {
        timerJob?.cancel()
        val questions = _uiState.value.activeQuestions
        val answers = _uiState.value.userAnswers

        var correctCount = 0
        var wrongCount = 0
        var unansweredCount = 0
        val wrongIdsToSave = mutableListOf<Int>()

        val subjectMap = mutableMapOf<String, Pair<Int, Int>>() // total, correct

        for (q in questions) {
            val userChoice = answers[q.id]
            val sub = q.materia
            val cur = subjectMap.getOrDefault(sub, Pair(0, 0))

            if (userChoice == null) {
                unansweredCount++
                subjectMap[sub] = Pair(cur.first + 1, cur.second)
            } else if (userChoice.equals(q.resposta_correta, ignoreCase = true)) {
                correctCount++
                subjectMap[sub] = Pair(cur.first + 1, cur.second + 1)
                // If in wrong questions review, remove this solved question
                if (_uiState.value.examType == ExamType.WRONG_QUESTIONS_REVIEW) {
                    repository.removeWrongQuestion(q.id)
                }
            } else {
                wrongCount++
                wrongIdsToSave.add(q.id)
                subjectMap[sub] = Pair(cur.first + 1, cur.second)
            }
        }

        // Add wrong questions to Caderno de Erros
        if (_uiState.value.examType != ExamType.WRONG_QUESTIONS_REVIEW && wrongIdsToSave.isNotEmpty()) {
            repository.addWrongQuestions(wrongIdsToSave)
        }

        val percentage = if (questions.isNotEmpty()) {
            (correctCount.toFloat() / questions.size) * 100f
        } else 0f

        val timeSpent = if (_uiState.value.initialTimeLimitSeconds > 0) {
            _uiState.value.initialTimeLimitSeconds - _uiState.value.timeRemainingSeconds
        } else 0L

        val breakdown = subjectMap.mapValues { (_, pair) ->
            SubjectScore(
                total = pair.first,
                correct = pair.second,
                percentage = if (pair.first > 0) (pair.second.toFloat() / pair.first) * 100f else 0f
            )
        }

        val result = ExamResult(
            id = UUID.randomUUID().toString(),
            examTitle = _uiState.value.examTitle,
            examType = _uiState.value.examType,
            timestamp = System.currentTimeMillis(),
            totalQuestions = questions.size,
            correctCount = correctCount,
            wrongCount = wrongCount,
            unansweredCount = unansweredCount,
            percentage = percentage,
            timeSpentSeconds = timeSpent,
            subjectBreakdown = breakdown
        )

        repository.saveExamResult(result)

        _uiState.update {
            it.copy(
                currentScreen = Screen.EXAM_RESULT,
                isExamFinished = true,
                isTimerRunning = false,
                lastResult = result,
                reviewQuestions = questions,
                reviewUserAnswers = answers
            )
        }

        loadSavedData()
    }

    fun openReviewExam(questions: List<Question>, userAnswers: Map<Int, String>) {
        _uiState.update {
            it.copy(
                currentScreen = Screen.REVIEW_EXAM,
                reviewQuestions = questions,
                reviewUserAnswers = userAnswers,
                currentQuestionIndex = 0
            )
        }
    }

    fun removeQuestionFromCaderno(questionId: Int) {
        repository.removeWrongQuestion(questionId)
        loadSavedData()
    }

    fun updateSearchQuery(query: String) {
        val results = QuestionBank.searchQuestions(query)
        _uiState.update {
            it.copy(
                searchQuery = query,
                searchResults = results
            )
        }
    }

    fun filterCadernoByMateria(materia: String?) {
        _uiState.update { it.copy(selectedMateriaFilter = materia) }
    }
}
