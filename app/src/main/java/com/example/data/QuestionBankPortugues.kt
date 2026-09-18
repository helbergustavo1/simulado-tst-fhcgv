package com.example.data

import com.example.model.Question

object QuestionBankPortugues {
    val questions: List<Question> = listOf(
        Question(
            id = 301,
            materia = "Língua Portuguesa",
            subtopico = "Crase",
            dificuldade = "média",
            enunciado = "Analise o emprego do acento indicativo de crase nas seguintes orações elaboradas no contexto hospitalar:\nI. O técnico de segurança dirigiu-se à enfermaria central.\nII. Os procedimentos foram explicados à todos os colaboradores.\nIII. A equipe prestou atendimento à domicílio durante o plantão.\nIV. O coordenador fez referência à médica plantonista com elogios.\n\nO acento grave indicador de crase está empregado CORRETAMENTE apenas em:",
            alternativas = mapOf(
                "A" to "I e IV.",
                "B" to "II e III.",
                "C" to "I, II e IV.",
                "D" to "II, III e IV.",
                "E" to "I e III."
            ),
            resposta_correta = "A",
            comentario = "I: Correto ('dirigiu-se a + a enfermaria' = à). II: Incorreto (não ocorre crase antes de pronome indefinido 'todos' nem antes de palavra masculina/plural). III: Incorreto (não ocorre crase antes de palavra masculina como 'domicílio'). IV: Correto ('fez referência a + a médica' = à). Logo, apenas I e IV estão corretas.",
            referencia = "Gramática Normativa da Língua Portuguesa - Regência e Crase (Banca Consulplan)"
        ),
        Question(
            id = 302,
            materia = "Língua Portuguesa",
            subtopico = "Concordância verbal e nominal",
            dificuldade = "média",
            enunciado = "Assinale a alternativa em que a concordância verbal está de acordo com a norma-padrão da língua portuguesa:",
            alternativas = mapOf(
                "A" to "Houveram muitos acidentes no setor de lavanderia no mês anterior.",
                "B" to "Fazem três anos que o hospital FHCGV implantou o novo protocolo de perfurocortantes.",
                "C" to "Mais de um trabalhador recusou-se a realizar a tarefa sem os devidos EPIs.",
                "D" to "Precisam-se de novos técnicos em segurança do trabalho com urgência.",
                "E" to "Devem haver medidas imediatas de prevenção contra incêndio na enfermaria."
            ),
            resposta_correta = "C",
            comentario = "Em 'Mais de um trabalhador recusou-se', a concordância com a expressão 'mais de um' faz-se no singular com o numeral. 'Houveram' e 'Fazem' (tempo decorrido) e 'Devem haver' (locução com verbo haver no sentido de existir) são impessoais e devem ficar no singular (Houve, Faz, Deve haver). Em D, 'Precisa-se de' não admite plural pois 'de novos técnicos' é objeto indireto e a partícula 'se' é índice de indeterminação do sujeito.",
            referencia = "Sintaxe de Concordância Verbal - Estilo Consulplan"
        ),
        Question(
            id = 303,
            materia = "Língua Portuguesa",
            subtopico = "Regência",
            dificuldade = "média",
            enunciado = "No que tange à regência verbal, assinale a oração redigida em estrita conformidade com a norma culta:",
            alternativas = mapOf(
                "A" to "O técnico assistiu o paciente que necessitava de auxílio no leito.",
                "B" to "Todos os servidores aspiram o cargo de chefia do setor de segurança.",
                "C" to "A direção do hospital preferiu investir em segurança do que pagar multas trabalhistas.",
                "D" to "O engenheiro lembrou do relatório de inspeção no almoxarifado.",
                "E" to "Os colaboradores obedeceram as ordens da comissão eleitoral da CIPA."
            ),
            resposta_correta = "A",
            comentario = "O verbo 'assistir' no sentido de dar assistência, prestar socorro/cuidado é transitivo direto (assistiu o paciente). No sentido de ver/presenciar rege preposição 'a'. Já 'aspirar' (almejar) exige preposição 'a' (aspiram ao cargo). O verbo 'preferir' não aceita 'do que' (prefere A a B). 'Lembrar-se' pronominal exige 'de', mas sem pronome não usa preposição. 'Obedecer' exige preposição 'a' (obedeceram às ordens).",
            referencia = "Regência Verbal e Transitividade - Estilo Consulplan"
        ),
        Question(
            id = 304,
            materia = "Língua Portuguesa",
            subtopico = "Pontuação",
            dificuldade = "fácil",
            enunciado = "Assinale a alternativa em que a pontuação está plenamente adequada às regras da norma-padrão:",
            alternativas = mapOf(
                "A" to "Os trabalhadores da saúde, executaram com louvor o treinamento da NR-32.",
                "B" to "Durante o plantão noturno os enfermeiros, e os médicos atenderam os pacientes.",
                "C" to "Embora houvesse escassez de recursos, a comissão de segurança priorizou a compra de dispositivos retráteis.",
                "D" to "O diretor afirmou que, todos os acidentes com perfurocortantes devem ser notificados.",
                "E" to "No hospital, de clínicas, o setor de farmácia, recebeu novos medicamentos."
            ),
            resposta_correta = "C",
            comentario = "Em C, a oração subordinada adverbial concessiva antecipada ('Embora houvesse escassez de recursos') está corretamente isolada por vírgula da oração principal. Nas outras alternativas há separação indevida de sujeito e predicado ou de conjunção integrante.",
            referencia = "Emprego dos Sinais de Pontuação - Consulplan"
        ),
        Question(
            id = 305,
            materia = "Língua Portuguesa",
            subtopico = "Conectivos/Conjunções",
            dificuldade = "média",
            enunciado = "Considere a frase: 'O hospital disponibilizou novos coletores de descarte; NÃO OBSTANTE, alguns profissionais continuaram descartando resíduos inadequadamente.'\nO conectivo em destaque expressa relação semântica de:",
            alternativas = mapOf(
                "A" to "Causa e efeito.",
                "B" to "Oposição / Contraste (Adversidade).",
                "C" to "Finalidade teleológica.",
                "D" to "Conclusão lógica.",
                "E" to "Condição necessária."
            ),
            resposta_correta = "B",
            comentario = "'Não obstante', assim como 'contudo', 'todavia', 'no entanto' e 'entretanto', atua como conjunção coordenativa adversativa, indicando oposição ou quebra de expectativa entre as proposições.",
            referencia = "Semântica dos Conectivos - Banca Consulplan"
        ),
        Question(
            id = 306,
            materia = "Língua Portuguesa",
            subtopico = "Interpretação de texto",
            dificuldade = "média",
            enunciado = "Leia o excerto a seguir:\n'A cultura de segurança em uma instituição hospitalar não é fruto de normas impositivas, mas sim de um processo contínuo de conscientização participativa. Onde o erro é punido de forma cega, a subnotificação floresce; onde o desvio é investigado para aperfeiçoar processos, a proteção se consolida.'\n\nInfere-se primordialmente do texto que:",
            alternativas = mapOf(
                "A" to "A aplicação de punições severas imediatas é a única maneira eficaz de erradicar erros hospitalares.",
                "B" to "A subnotificação de ocorrências é combatida quando se adota uma abordagem preventiva e pedagógica focada na melhoria contínua dos processos.",
                "C" to "Normas regulamentadoras não possuem qualquer relevância para a segurança hospitalar.",
                "D" to "Erros individuais em hospitais devem ser ignorados para manter a harmonia no ambiente de trabalho.",
                "E" to "A participação dos trabalhadores é desnecessária quando a direção impõe protocolos rígidos."
            ),
            resposta_correta = "B",
            comentario = "O texto contrapõe a cultura punitiva (que gera medo e subnotificação) à cultura justa e educativa de melhoria contínua dos processos, que é a verdadeira base da consolidação da segurança.",
            referencia = "Compreensão e Interpretação Textual - Consulplan"
        )
    )
}
