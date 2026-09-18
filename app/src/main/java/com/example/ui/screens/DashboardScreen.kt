package com.example.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.navigationBarsPadding
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Assignment
import androidx.compose.material.icons.filled.AutoGraph
import androidx.compose.material.icons.filled.ErrorOutline
import androidx.compose.material.icons.filled.History
import androidx.compose.material.icons.filled.LocalHospital
import androidx.compose.material.icons.filled.MenuBook
import androidx.compose.material.icons.filled.Search
import androidx.compose.material.icons.filled.Security
import androidx.compose.material.icons.filled.Timer
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.ui.components.AppHeader
import com.example.ui.theme.SafetyGreen
import com.example.ui.theme.SafetyOrange
import com.example.ui.theme.SafetyRed
import com.example.ui.theme.TealPrimary
import com.example.ui.theme.TealPrimaryDark
import com.example.ui.theme.TealPrimaryLight
import com.example.ui.viewmodel.Screen
import com.example.ui.viewmodel.UiState

@Composable
fun DashboardScreen(
    uiState: UiState,
    onNavigate: (Screen) -> Unit
) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(MaterialTheme.colorScheme.background)
    ) {
        AppHeader(
            title = "Simulado TST FHCGV",
            subtitle = "Preparatório Completo - Banca Consulplan"
        )

        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .navigationBarsPadding(),
            contentPadding = PaddingValues(16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            // Hero Institution Banner
            item {
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(16.dp),
                    colors = CardDefaults.cardColors(
                        containerColor = TealPrimaryDark
                    ),
                    elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
                ) {
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(16.dp),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Box(
                            modifier = Modifier
                                .size(48.dp)
                                .clip(CircleShape)
                                .background(TealPrimaryLight.copy(alpha = 0.25f)),
                            contentAlignment = Alignment.Center
                        ) {
                            Icon(
                                imageVector = Icons.Default.LocalHospital,
                                contentDescription = "FHCGV",
                                tint = Color.White,
                                modifier = Modifier.size(28.dp)
                            )
                        }

                        Spacer(modifier = Modifier.width(14.dp))

                        Column(modifier = Modifier.weight(1f)) {
                            Text(
                                text = "FHCGV - Concurso TST",
                                style = MaterialTheme.typography.titleMedium.copy(
                                    fontWeight = FontWeight.Bold,
                                    color = Color.White
                                )
                            )
                            Text(
                                text = "Fundação Hospital de Clínicas Gaspar Vianna (PA)",
                                style = MaterialTheme.typography.bodySmall.copy(
                                    color = Color.White.copy(alpha = 0.85f)
                                )
                            )
                            Spacer(modifier = Modifier.height(4.dp))
                            Text(
                                text = "Banca Instituto Consulplan • 1000 Questões Focadas",
                                style = MaterialTheme.typography.labelSmall.copy(
                                    color = TealPrimaryLight,
                                    fontWeight = FontWeight.SemiBold
                                )
                            )
                        }
                    }
                }
            }

            // Quick Stats Row
            item {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(10.dp)
                ) {
                    StatBox(
                        title = "Respondidas",
                        value = "${uiState.totalAnswered}",
                        icon = Icons.Default.Assignment,
                        color = TealPrimary,
                        modifier = Modifier.weight(1f)
                    )
                    StatBox(
                        title = "Aproveitamento",
                        value = if (uiState.totalAnswered > 0) "%.1f%%".format(uiState.overallAccuracy) else "0.0%",
                        icon = Icons.Default.AutoGraph,
                        color = SafetyGreen,
                        modifier = Modifier.weight(1f)
                    )
                    StatBox(
                        title = "Caderno Erros",
                        value = "${uiState.wrongQuestionsCount}",
                        icon = Icons.Default.ErrorOutline,
                        color = if (uiState.wrongQuestionsCount > 0) SafetyRed else Color.Gray,
                        modifier = Modifier.weight(1f),
                        onClick = { onNavigate(Screen.CADERNO_ERROS) }
                    )
                }
            }

            // Quick Access Section Title
            item {
                Text(
                    text = "Módulos de Preparação",
                    style = MaterialTheme.typography.titleMedium.copy(
                        fontWeight = FontWeight.Bold,
                        color = MaterialTheme.colorScheme.onBackground
                    ),
                    modifier = Modifier.padding(start = 4.dp, top = 4.dp)
                )
            }

            // Card 1: 10 Simulados Completos
            item {
                ActionCard(
                    title = "Iniciar Simulado Completo",
                    subtitle = "10 Provas Completas estilo Consulplan com 50 questões, 3 horas e cronômetro real.",
                    badge = "10 PROVAS",
                    icon = Icons.Default.Timer,
                    gradientColors = listOf(Color(0xFF006D77), Color(0xFF1B4965)),
                    testTag = "card_simulado_completo",
                    onClick = { onNavigate(Screen.SIMULADOS_LIST) }
                )
            }

            // Card 2: Estudar por Matéria (15 Provas Temáticas)
            item {
                ActionCard(
                    title = "Estudar por Matéria",
                    subtitle = "15 Provas Temáticas focadas: NR-32 (Prioridade), NR-01, Português, SUS, RDC 222...",
                    badge = "15 TEMAS",
                    icon = Icons.Default.MenuBook,
                    gradientColors = listOf(Color(0xFF2A9D8F), Color(0xFF264653)),
                    testTag = "card_estudar_materia",
                    onClick = { onNavigate(Screen.THEMATIC_LIST) }
                )
            }

            // Card 3: Ver Meu Desempenho
            item {
                ActionCard(
                    title = "Ver Meu Desempenho",
                    subtitle = "Gráficos de aproveitamento, taxa de acerto por disciplina e diagnóstico de pontos fracos.",
                    badge = "ESTATÍSTICAS",
                    icon = Icons.Default.AutoGraph,
                    gradientColors = listOf(Color(0xFF3D5A80), Color(0xFF293241)),
                    testTag = "card_ver_desempenho",
                    onClick = { onNavigate(Screen.PERFORMANCE) }
                )
            }

            // Card 4: Revisar Questões Erradas (Caderno de Erros)
            item {
                ActionCard(
                    title = "Revisar Questões Erradas",
                    subtitle = "Caderno de erros inteligente. Refaça apenas as questões que errou com comentários detalhados.",
                    badge = "${uiState.wrongQuestionsCount} PENDENTES",
                    badgeColor = if (uiState.wrongQuestionsCount > 0) SafetyRed else Color.Gray,
                    icon = Icons.Default.ErrorOutline,
                    gradientColors = listOf(Color(0xFFE76F51), Color(0xFFB23A22)),
                    testTag = "card_caderno_erros",
                    onClick = { onNavigate(Screen.CADERNO_ERROS) }
                )
            }

            // Card 5: Ranking e Histórico de Provas
            item {
                ActionCard(
                    title = "Ranking & Histórico de Provas",
                    subtitle = "Veja todos os simulados finalizados, tempo gasto, pontuações e gabaritos comentados.",
                    badge = "${uiState.examResults.size} FEITOS",
                    icon = Icons.Default.History,
                    gradientColors = listOf(Color(0xFF4A4E69), Color(0xFF22223B)),
                    testTag = "card_ranking_historico",
                    onClick = { onNavigate(Screen.PERFORMANCE) }
                )
            }

            // Card 6: Buscador de Questões e Legislação
            item {
                ActionCard(
                    title = "Buscador de Questões & NR",
                    subtitle = "Pesquise por termos como 'perfurocortantes', 'RDC 222', 'PGR', 'insalubridade' ou artigos de lei.",
                    badge = "1000 QUESTÕES",
                    icon = Icons.Default.Search,
                    gradientColors = listOf(Color(0xFF588157), Color(0xFF3A5A40)),
                    testTag = "card_buscar_questoes",
                    onClick = { onNavigate(Screen.SEARCH_QUESTIONS) }
                )
            }

            item {
                Spacer(modifier = Modifier.height(16.dp))
            }
        }
    }
}

@Composable
fun StatBox(
    title: String,
    value: String,
    icon: ImageVector,
    color: Color,
    modifier: Modifier = Modifier,
    onClick: (() -> Unit)? = null
) {
    Card(
        modifier = modifier
            .clip(RoundedCornerShape(12.dp))
            .then(if (onClick != null) Modifier.clickable { onClick() } else Modifier),
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
        elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(10.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Icon(
                imageVector = icon,
                contentDescription = title,
                tint = color,
                modifier = Modifier.size(22.dp)
            )
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = value,
                style = MaterialTheme.typography.titleMedium.copy(
                    fontWeight = FontWeight.Bold,
                    color = color
                )
            )
            Text(
                text = title,
                style = MaterialTheme.typography.labelSmall.copy(
                    color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.7f),
                    fontSize = 11.sp
                ),
                maxLines = 1
            )
        }
    }
}

@Composable
fun ActionCard(
    title: String,
    subtitle: String,
    badge: String,
    icon: ImageVector,
    gradientColors: List<Color>,
    testTag: String,
    badgeColor: Color = Color.White.copy(alpha = 0.25f),
    onClick: () -> Unit
) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(16.dp))
            .clickable { onClick() }
            .testTag(testTag),
        colors = CardDefaults.cardColors(containerColor = gradientColors.first()),
        elevation = CardDefaults.cardElevation(defaultElevation = 3.dp)
    ) {
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .background(Brush.horizontalGradient(gradientColors))
                .padding(18.dp)
        ) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Box(
                    modifier = Modifier
                        .size(46.dp)
                        .clip(CircleShape)
                        .background(Color.White.copy(alpha = 0.2f)),
                    contentAlignment = Alignment.Center
                ) {
                    Icon(
                        imageVector = icon,
                        contentDescription = title,
                        tint = Color.White,
                        modifier = Modifier.size(26.dp)
                    )
                }

                Spacer(modifier = Modifier.width(14.dp))

                Column(modifier = Modifier.weight(1f)) {
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.SpaceBetween,
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        Text(
                            text = title,
                            style = MaterialTheme.typography.titleMedium.copy(
                                fontWeight = FontWeight.Bold,
                                color = Color.White
                            ),
                            modifier = Modifier.weight(1f)
                        )

                        Surface(
                            shape = RoundedCornerShape(12.dp),
                            color = badgeColor,
                            modifier = Modifier.padding(start = 6.dp)
                        ) {
                            Text(
                                text = badge,
                                style = MaterialTheme.typography.labelSmall.copy(
                                    fontWeight = FontWeight.Bold,
                                    color = Color.White,
                                    fontSize = 10.sp
                                ),
                                modifier = Modifier.padding(horizontal = 8.dp, vertical = 3.dp)
                            )
                        }
                    }

                    Spacer(modifier = Modifier.height(4.dp))

                    Text(
                        text = subtitle,
                        style = MaterialTheme.typography.bodySmall.copy(
                            color = Color.White.copy(alpha = 0.88f),
                            fontSize = 12.sp,
                            lineHeight = 16.sp
                        )
                    )
                }
            }
        }
    }
}
