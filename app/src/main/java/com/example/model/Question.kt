package com.example.model

data class Question(
    val id: Int,
    val materia: String,
    val subtopico: String = "",
    val dificuldade: String = "média", // fácil, média, difícil
    val enunciado: String,
    val alternativas: Map<String, String>, // "A" -> "...", "B" -> "...", etc.
    val resposta_correta: String, // "A", "B", "C", "D", "E"
    val comentario: String,
    val referencia: String
)

enum class ExamType {
    FULL_SIMULADO,
    THEMATIC_EXAM,
    WRONG_QUESTIONS_REVIEW
}

data class ExamResult(
    val id: String,
    val examTitle: String,
    val examType: ExamType,
    val timestamp: Long,
    val totalQuestions: Int,
    val correctCount: Int,
    val wrongCount: Int,
    val unansweredCount: Int,
    val percentage: Float,
    val timeSpentSeconds: Long,
    val subjectBreakdown: Map<String, SubjectScore>
)

data class SubjectScore(
    val total: Int,
    val correct: Int,
    val percentage: Float
)
