package com.example

import com.example.data.QuestionBank
import org.junit.Assert.assertEquals
import org.junit.Assert.assertNotNull
import org.junit.Assert.assertTrue
import org.junit.Test
import org.junit.runner.RunWith
import org.robolectric.RobolectricTestRunner
import org.robolectric.annotation.Config

@RunWith(RobolectricTestRunner::class)
@Config(sdk = [36])
class SimuladoDataTest {

    @Test
    fun testTotalQuestionsCount() {
        val total = QuestionBank.allQuestions.size
        assertEquals("Total questions should be 1000", 1000, total)
    }

    @Test
    fun testSimuladoCompletoStructure() {
        val simulado1 = QuestionBank.getSimuladoCompleto(0)
        assertEquals("Full exam must contain 50 questions", 50, simulado1.size)

        for (q in simulado1) {
            assertNotNull(q.enunciado)
            assertTrue("Enunciado should not be empty", q.enunciado.isNotBlank())
            assertEquals("Should have 5 alternatives", 5, q.alternativas.size)
            assertTrue("Resposta correta must be A, B, C, D, or E", q.resposta_correta in listOf("A", "B", "C", "D", "E"))
            assertTrue("Comentário must not be blank", q.comentario.isNotBlank())
        }
    }

    @Test
    fun testThematicExamCount() {
        val thematicNR32 = QuestionBank.getThematicExam("NR-32 (Serviços de Saúde)")
        assertEquals("Thematic exam must contain 30 questions", 30, thematicNR32.size)
    }

    @Test
    fun testSearchQuestions() {
        val results = QuestionBank.searchQuestions("perfurocortantes")
        assertTrue("Search should return questions for perfurocortantes", results.isNotEmpty())
    }
}
