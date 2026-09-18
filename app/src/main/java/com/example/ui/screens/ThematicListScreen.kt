package com.example.ui.screens

import androidx.compose.foundation.background
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
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Book
import androidx.compose.material.icons.filled.LocalHospital
import androidx.compose.material.icons.filled.PlayArrow
import androidx.compose.material.icons.filled.Star
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
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
import androidx.compose.ui.graphics.Color
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
import com.example.ui.viewmodel.UiState

data class ThematicSubjectItem(
    val name: String,
    val subtitle: String,
    val badge: String,
    val isHighPriority: Boolean = false
)

@Composable
fun ThematicListScreen(
    uiState: UiState,
    onBackClick: () -> Unit,
    onStartThematic: (String) -> Unit
) {
    val thematicSubjects = listOf(
        ThematicSubjectItem(
            name = "NR-32 (Serviços de Saúde)",
            subtitle = "Risco biológico, perfurocortantes, quimioterápicos, vacinação e radiação",
            badge = "PRIORIDADE MÁXIMA",
            isHighPriority = true
        ),
        ThematicSubjectItem(
            name = "Língua Portuguesa",
            subtitle = "Interpretação, crase, concordância, regência, conectivos e pontuação",
            badge = "10 QUESTÕES NA PROVA",
            isHighPriority = true
        ),
        ThematicSubjectItem(
            name = "Legislação do SUS",
            subtitle = "CF Arts. 196-200, Lei 8.080/90, Lei 8.142/90 e Saúde do Trabalhador",
            badge = "ALTA FREQUÊNCIA",
            isHighPriority = true
        ),
        ThematicSubjectItem(
            name = "NR-01 (GRO/PGR)",
            subtitle = "Gerenciamento de Riscos, Inventário, Plano de Ação e Direito de Recusa",
            badge = "BASE DE SST"
        ),
        ThematicSubjectItem(
            name = "Resíduos de Saúde (RDC 222)",
            subtitle = "Grupos A, B, C, D, E, segregação, acondicionamento e PGRSS hospitalar",
            badge = "FOCO HOSPITALAR",
            isHighPriority = true
        ),
        ThematicSubjectItem(
            name = "NR-06 (EPI)",
            subtitle = "Certificado de Aprovação (CA), deveres do empregador e hierarquia de controle",
            badge = "ESSENCIAL"
        ),
        ThematicSubjectItem(
            name = "NR-07 (PCMSO)",
            subtitle = "Exames médicos ocupacionais, ASO, periodicidade e prontuários",
            badge = "MÉDICO OCUPACIONAL"
        ),
        ThematicSubjectItem(
            name = "NR-15 (Insalubridade)",
            subtitle = "Graus de insalubridade e Anexo 14 (Agentes Biológicos hospitalares)",
            badge = "FREQUENTE"
        ),
        ThematicSubjectItem(
            name = "NR-17 (Ergonomia)",
            subtitle = "AET, transporte manual de cargas e movimentação de leitos/pacientes",
            badge = "ERGONOMIA"
        ),
        ThematicSubjectItem(
            name = "NR-05 (CIPA)",
            subtitle = "Composição, estabilidade provisória do cipeiro, mandato e SIPAT",
            badge = "COMISSÃO INTERNA"
        ),
        ThematicSubjectItem(
            name = "Legislação Previdenciária",
            subtitle = "CAT, auxílio por incapacidade temporária B91, estabilidade 12 meses e PPP",
            badge = "DIREITOS PREVIDENCIÁRIOS"
        ),
        ThematicSubjectItem(
            name = "NR-09 (Exposição Ocupacional)",
            subtitle = "Níveis de ação, avaliação quantitativa e qualitativa ambiental",
            badge = "AGENTES AMBIENTAIS"
        ),
        ThematicSubjectItem(
            name = "NR-23 (Incêndio)",
            subtitle = "Classes de fogo A/B/C/D/K, extintores hospitalares e rotas de fuga",
            badge = "EMERGÊNCIA"
        ),
        ThematicSubjectItem(
            name = "NR-24 (Condições Sanitárias)",
            subtitle = "Vestiários com armários duplos e instalações hidrossanitárias",
            badge = "CONFORTO"
        ),
        ThematicSubjectItem(
            name = "NR-35 (Trabalho em Altura)",
            subtitle = "Requisitos acima de 2m, ancoragem, SPIQ e capacitação",
            badge = "SEGURANÇA EM ALTURA"
        ),
        ThematicSubjectItem(
            name = "Higiene Ocupacional",
            subtitle = "Antecipação, Reconhecimento, Avaliação e Controle de riscos",
            badge = "METODOLOGIA"
        ),
        ThematicSubjectItem(
            name = "Outros (Mapa de Riscos e Acidentes)",
            subtitle = "Cores do mapa de riscos, investigação e metodologia de causas",
            badge = "GESTÃO DE ACIDENTES"
        )
    )

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(MaterialTheme.colorScheme.background)
    ) {
        AppHeader(
            title = "Estudo por Matéria",
            subtitle = "15 Provas Temáticas • 30 Questões • Modo Estudo",
            showBackButton = true,
            onBackClick = onBackClick
        )

        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .navigationBarsPadding(),
            contentPadding = PaddingValues(16.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            item {
                Text(
                    text = "Selecione uma matéria para praticar questões focadas com gabarito comentado imediato e referências legais:",
                    style = MaterialTheme.typography.bodySmall.copy(
                        color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.75f),
                        lineHeight = 18.sp
                    ),
                    modifier = Modifier.padding(horizontal = 4.dp, vertical = 2.dp)
                )
            }

            items(thematicSubjects) { item ->
                Card(
                    modifier = Modifier
                        .fillMaxWidth()
                        .testTag("thematic_card_${item.name.take(6)}"),
                    shape = RoundedCornerShape(14.dp),
                    colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
                    elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
                ) {
                    Column(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(16.dp)
                    ) {
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Box(
                                modifier = Modifier
                                    .size(38.dp)
                                    .clip(CircleShape)
                                    .background(
                                        if (item.isHighPriority) SafetyOrange.copy(alpha = 0.15f)
                                        else TealPrimary.copy(alpha = 0.12f)
                                    ),
                                contentAlignment = Alignment.Center
                            ) {
                                Icon(
                                    imageVector = if (item.isHighPriority) Icons.Default.Star else Icons.Default.Book,
                                    contentDescription = null,
                                    tint = if (item.isHighPriority) SafetyOrange else TealPrimary,
                                    modifier = Modifier.size(20.dp)
                                )
                            }

                            Spacer(modifier = Modifier.width(12.dp))

                            Column(modifier = Modifier.weight(1f)) {
                                Text(
                                    text = item.name,
                                    style = MaterialTheme.typography.titleSmall.copy(
                                        fontWeight = FontWeight.Bold,
                                        color = MaterialTheme.colorScheme.onSurface
                                    )
                                )

                                Surface(
                                    shape = RoundedCornerShape(6.dp),
                                    color = if (item.isHighPriority) SafetyOrange.copy(alpha = 0.15f)
                                    else TealPrimary.copy(alpha = 0.1f),
                                    modifier = Modifier.padding(top = 2.dp)
                                ) {
                                    Text(
                                        text = item.badge,
                                        style = MaterialTheme.typography.labelSmall.copy(
                                            color = if (item.isHighPriority) SafetyOrange else TealPrimaryDark,
                                            fontWeight = FontWeight.Bold,
                                            fontSize = 9.sp
                                        ),
                                        modifier = Modifier.padding(horizontal = 6.dp, vertical = 2.dp)
                                    )
                                }
                            }
                        }

                        Spacer(modifier = Modifier.height(8.dp))

                        Text(
                            text = item.subtitle,
                            style = MaterialTheme.typography.bodySmall.copy(
                                color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.7f),
                                fontSize = 12.sp
                            )
                        )

                        Spacer(modifier = Modifier.height(12.dp))

                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween,
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Text(
                                text = "30 questões • Sem cronômetro",
                                style = MaterialTheme.typography.labelSmall.copy(
                                    color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.6f)
                                )
                            )

                            Button(
                                onClick = { onStartThematic(item.name) },
                                colors = ButtonDefaults.buttonColors(
                                    containerColor = if (item.isHighPriority) SafetyOrange else TealPrimary
                                ),
                                shape = RoundedCornerShape(8.dp),
                                contentPadding = PaddingValues(horizontal = 14.dp, vertical = 6.dp)
                            ) {
                                Icon(
                                    imageVector = Icons.Default.PlayArrow,
                                    contentDescription = "Praticar",
                                    modifier = Modifier.size(16.dp)
                                )
                                Spacer(modifier = Modifier.width(4.dp))
                                Text("Praticar", fontSize = 12.sp)
                            }
                        }
                    }
                }
            }

            item {
                Spacer(modifier = Modifier.height(16.dp))
            }
        }
    }
}
