package com.example

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.BackHandler
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.lifecycle.viewmodel.compose.viewModel
import com.example.ui.screens.ActiveExamScreen
import com.example.ui.screens.CadernoErrosScreen
import com.example.ui.screens.DashboardScreen
import com.example.ui.screens.ExamResultScreen
import com.example.ui.screens.PerformanceScreen
import com.example.ui.screens.ReviewExamScreen
import com.example.ui.screens.SearchQuestionsScreen
import com.example.ui.screens.SimuladosListScreen
import com.example.ui.screens.ThematicListScreen
import com.example.ui.theme.MyApplicationTheme
import com.example.ui.viewmodel.MainViewModel
import com.example.ui.viewmodel.Screen

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            MyApplicationTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    AppNavigation()
                }
            }
        }
    }
}

@Composable
fun AppNavigation(viewModel: MainViewModel = viewModel()) {
    val uiState by viewModel.uiState.collectAsState()

    // Handle back button smoothly
    BackHandler(enabled = uiState.currentScreen != Screen.DASHBOARD) {
        when (uiState.currentScreen) {
            Screen.REVIEW_EXAM -> viewModel.navigateTo(Screen.EXAM_RESULT)
            Screen.EXAM_RESULT -> viewModel.navigateTo(Screen.DASHBOARD)
            Screen.ACTIVE_EXAM -> viewModel.navigateTo(Screen.DASHBOARD)
            else -> viewModel.navigateTo(Screen.DASHBOARD)
        }
    }

    when (uiState.currentScreen) {
        Screen.DASHBOARD -> {
            DashboardScreen(
                uiState = uiState,
                onNavigate = { screen -> viewModel.navigateTo(screen) }
            )
        }
        Screen.SIMULADOS_LIST -> {
            SimuladosListScreen(
                uiState = uiState,
                onBackClick = { viewModel.navigateTo(Screen.DASHBOARD) },
                onStartExam = { examNumber -> viewModel.startSimuladoCompleto(examNumber) }
            )
        }
        Screen.THEMATIC_LIST -> {
            ThematicListScreen(
                uiState = uiState,
                onBackClick = { viewModel.navigateTo(Screen.DASHBOARD) },
                onStartThematic = { subject -> viewModel.startThematicExam(subject) }
            )
        }
        Screen.ACTIVE_EXAM -> {
            ActiveExamScreen(
                uiState = uiState,
                viewModel = viewModel,
                onBackClick = { viewModel.navigateTo(Screen.DASHBOARD) }
            )
        }
        Screen.EXAM_RESULT -> {
            ExamResultScreen(
                uiState = uiState,
                onNavigate = { screen -> viewModel.navigateTo(screen) },
                onOpenReview = {
                    viewModel.openReviewExam(
                        uiState.reviewQuestions,
                        uiState.reviewUserAnswers
                    )
                }
            )
        }
        Screen.REVIEW_EXAM -> {
            ReviewExamScreen(
                questions = uiState.reviewQuestions,
                userAnswers = uiState.reviewUserAnswers,
                onBackClick = { viewModel.navigateTo(Screen.EXAM_RESULT) }
            )
        }
        Screen.CADERNO_ERROS -> {
            CadernoErrosScreen(
                uiState = uiState,
                viewModel = viewModel,
                onBackClick = { viewModel.navigateTo(Screen.DASHBOARD) },
                onStartReviewQuiz = { viewModel.startWrongQuestionsQuiz() }
            )
        }
        Screen.PERFORMANCE -> {
            PerformanceScreen(
                uiState = uiState,
                onBackClick = { viewModel.navigateTo(Screen.DASHBOARD) }
            )
        }
        Screen.SEARCH_QUESTIONS -> {
            SearchQuestionsScreen(
                uiState = uiState,
                viewModel = viewModel,
                onBackClick = { viewModel.navigateTo(Screen.DASHBOARD) }
            )
        }
    }
}

