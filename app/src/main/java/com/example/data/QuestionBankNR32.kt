package com.example.data

import com.example.model.Question

object QuestionBankNR32 {
    val questions: List<Question> = listOf(
        Question(
            id = 1,
            materia = "NR-32",
            subtopico = "Perfurocortantes",
            dificuldade = "média",
            enunciado = "De acordo com a Norma Regulamentadora nº 32 (NR-32 - Segurança e Saúde no Trabalho em Serviços de Saúde), em relação aos materiais perfurocortantes, assinale a conduta que é expressamente VEDADA aos trabalhadores e empregadores:",
            alternativas = mapOf(
                "A" to "O descarte imediato do perfurocortante após o uso em recipiente rígido.",
                "B" to "O reencape e a desconexão manual de agulhas após a realização de procedimentos.",
                "C" to "A substituição de recipientes coletores quando atingirem 2/3 de sua capacidade total.",
                "D" to "A utilização de dispositivos de segurança integrados em seringas e agulhas.",
                "E" to "A capacitação contínua dos trabalhadores sobre os riscos biológicos de perfurações."
            ),
            resposta_correta = "B",
            comentario = "O item 32.2.4.15 da NR-32 estabelece taxativamente que 'São vedados o reencape e a desconexão manual de agulhas'. Essa é uma das proibições mais cobradas pela banca Consulplan para a área hospitalar.",
            referencia = "NR-32, item 32.2.4.15"
        ),
        Question(
            id = 2,
            materia = "NR-32",
            subtopico = "Vacinação",
            dificuldade = "fácil",
            enunciado = "A NR-32 estabelece que a todo trabalhador dos serviços de saúde deve ser fornecido, gratuitamente, programa de imunização ativa. Quais são as vacinas expressamente previstas como obrigatórias no texto da NR-32?",
            alternativas = mapOf(
                "A" to "Apenas Febre Amarela e BCG.",
                "B" to "Tétano, Difteria, Hepatite B e as estabelecidas no PCMSO.",
                "C" to "Apenas Tríplice Viral e Influenza anual.",
                "D" to "Hepatite C e Tétano exclusivamente.",
                "E" to "Varicela e Febre Tifoide obrigatoriamente para todos os setores."
            ),
            resposta_correta = "B",
            comentario = "Conforme o item 32.2.4.17.1 da NR-32: 'A todo trabalhador dos serviços de saúde deve ser fornecido, gratuitamente, programa de imunização ativa contra tétano, difteria, hepatite B e os estabelecidos no PCMSO'. Lembrar que não existe vacina para Hepatite C!",
            referencia = "NR-32, item 32.2.4.17.1"
        ),
        Question(
            id = 3,
            materia = "NR-32",
            subtopico = "Adornos e Vestimenta",
            dificuldade = "fácil",
            enunciado = "Na Fundação Hospital de Clínicas Gaspar Vianna (FHCGV), o Técnico em Segurança do Trabalho orienta a equipe de enfermagem sobre os preceitos da NR-32 quanto ao uso de adornos e calçados. Segundo a referida norma, é correto afirmar:",
            alternativas = mapOf(
                "A" to "O uso de adornos é permitido desde que sejam higienizados com álcool 70% a cada troca de plantão.",
                "B" to "É vedado o uso de adornos e o uso de calçados abertos a todos os trabalhadores dos serviços de saúde sujeitos a riscos biológicos.",
                "C" to "Alianças de casamento e pequenos brincos são expressamente permitidos em todas as áreas críticas.",
                "D" to "Calçados abertos são permitidos na enfermaria, desde que o profissional esteja usando meias de algodão grossas.",
                "E" to "A proibição de adornos aplica-se apenas aos médicos cirurgiões no centro cirúrgico."
            ),
            resposta_correta = "B",
            comentario = "O item 32.2.4.5 da NR-32 determina que: 'O empregador deve vedar: b) o uso de adornos e o manuseio de lentes de contato nos postos de trabalho; e) o uso de calçados abertos'.",
            referencia = "NR-32, item 32.2.4.5"
        ),
        Question(
            id = 4,
            materia = "NR-32",
            subtopico = "Risco Químico",
            dificuldade = "difícil",
            enunciado = "Em relação aos quimioterápicos antineoplásicos tratados na NR-32, assinale a afirmativa correta sobre as condições ambientais de preparo:",
            alternativas = mapOf(
                "A" to "Devem ser preparados em bancada aberta com exaustão geral diluidora.",
                "B" to "A preparação deve ser realizada exclusivamente em Cabine de Segurança Biológica (CSB) Classe II B2, que elimine 100% do ar para o exterior.",
                "C" to "Qualquer profissional do hospital pode preparar quimioterápicos desde que use máscara cirúrgica tripla.",
                "D" to "A sobra de medicamentos quimioterápicos pode ser descartada na rede de esgoto comum após diluição em soro.",
                "E" to "Mulheres gestantes podem manipular quimioterápicos se utilizarem luva de procedimento dupla."
            ),
            resposta_correta = "B",
            comentario = "Conforme a NR-32 (item 32.3.9.4.2), a preparação de quimioterápicos antineoplásicos deve ser realizada em CSB Classe II Tipo B2, dotada de filtro HEPA, com exaustão de 100% do ar para o exterior. Gestantes e nutrizes são expressamente afastadas dessas atividades.",
            referencia = "NR-32, item 32.3.9.4.2"
        ),
        Question(
            id = 5,
            materia = "NR-32",
            subtopico = "Risco Biológico",
            dificuldade = "média",
            enunciado = "A NR-32 classifica os agentes biológicos em quatro classes de risco (1 a 4). Um agente patogênico que causa doenças humanas graves, propaga-se facilmente na coletividade e para o qual NÃO existe profilaxia ou tratamento eficaz enquadra-se na:",
            alternativas = mapOf(
                "A" to "Classe de risco 1.",
                "B" to "Classe de risco 2.",
                "C" to "Classe de risco 3.",
                "D" to "Classe de risco 4.",
                "E" to "Classe de risco zero."
            ),
            resposta_correta = "D",
            comentario = "A Classe de Risco 4 engloba agentes com elevado risco individual e comunitário, patógenos de alta gravidade sem profilaxia ou tratamento eficaz conhecido (ex.: vírus Ebola).",
            referencia = "NR-32, Anexo I (Classificação dos Agentes Biológicos)"
        ),
        Question(
            id = 6,
            materia = "NR-32",
            subtopico = "Radiações Ionizantes",
            dificuldade = "média",
            enunciado = "No setor de hemodinâmica e radiologia do hospital FHCGV, os trabalhadores expostos a radiações ionizantes devem contar com medidas de proteção estabelecidas pela NR-32. Assinale a afirmativa correta:",
            alternativas = mapOf(
                "A" to "O dosímetro individual de monitorização externa deve ser compartilhado pela equipe do mesmo turno.",
                "B" to "Toda trabalhadora com gravidez confirmada deve ser imediatamente afastada das atividades com radiações ionizantes, sendo remanejada para local seguro.",
                "C" to "O uso de avental de chumbo dispensa a presença do biombo protetor em exames radiológicos.",
                "D" to "A leitura do dosímetro individual deve ocorrer anualmente pelo serviço de engenharia clínica.",
                "E" to "Trabalhadores menores de 21 anos podem atuar no setor desde que autorizados pelo médico do trabalho."
            ),
            resposta_correta = "B",
            comentario = "Item 32.4.4: 'Toda trabalhadora com gravidez confirmada deve ser afastada das atividades com radiações ionizantes, devendo ser remanejada para atividade compatível com seu nível de formação'.",
            referencia = "NR-32, item 32.4.4"
        ),
        Question(
            id = 7,
            materia = "NR-32",
            subtopico = "Resíduos em Serviços de Saúde",
            dificuldade = "fácil",
            enunciado = "Conforme o item da NR-32 que trata dos resíduos, os recipientes coletores para resíduos perfurocortantes devem ser preenchidos até que nível de sua capacidade?",
            alternativas = mapOf(
                "A" to "Até 100% de sua capacidade, nivelando com a borda do recipiente.",
                "B" to "Até o limite máximo indicado pela linha pontilhada desenhada no próprio recipiente coletor.",
                "C" to "Até a metade (50%) sob qualquer hipótese.",
                "D" to "Não há limite técnico, podendo ser compactados com as mãos protegidas.",
                "E" to "Até que ocorra transbordamento mínimo de agulhas e seringas."
            ),
            resposta_correta = "B",
            comentario = "De acordo com o item 32.5.3.1 da NR-32, os recipientes para perfurocortantes devem ter seu limite máximo de enchimento localizado 5 cm abaixo do bocal ou respeitar a linha de indicação de nível máximo impresso pelo fabricante.",
            referencia = "NR-32, item 32.5.3.1"
        ),
        Question(
            id = 8,
            materia = "NR-32",
            subtopico = "Alimentação e Consumo",
            dificuldade = "fácil",
            enunciado = "A NR-32 estabelece regras estritas quanto ao consumo de alimentos e bebidas nos postos de assistência e laboratórios hospitalares. A regra geral da norma é:",
            alternativas = mapOf(
                "A" to "Permitir o consumo de café e água desde que em garrafas térmicas fechadas.",
                "B" to "Vedar expressamente o ato de comer, beber, fumar e conservar alimentos nos postos de trabalho e locais onde haja risco biológico.",
                "C" to "Autorizar lanches rápidos na bancada do posto de enfermagem durante plantões noturnos.",
                "D" to "Permitir guardar alimentos de funcionários na geladeira destinada a guarda de vacinas e medicamentos biológicos.",
                "E" to "Proibir o consumo de alimentos apenas nas salas de isolamento e UTI."
            ),
            resposta_correta = "B",
            comentario = "O item 32.2.4.5, alínea 'a', da NR-32 estabelece a proibição expressa de consumir alimentos e bebidas nos postos de trabalho, além de guardar alimentos em refrigeradores destinados a medicamentos e espécimes biológicos.",
            referencia = "NR-32, item 32.2.4.5, 'a'"
        ),
        Question(
            id = 9,
            materia = "NR-32",
            subtopico = "Lavanderia Hospitalar",
            dificuldade = "média",
            enunciado = "Quanto à lavanderia dos serviços de saúde, a NR-32 prevê uma divisão física e operacional crucial para a biossegurança dos trabalhadores. Trata-se da separação entre:",
            alternativas = mapOf(
                "A" to "Área de costura e área de passagem de vapor.",
                "B" to "Área suja (recebimento, classificação e lavagem) e área limpa (secagem, calandragem e dobra), com barreira física.",
                "C" to "Área de detergentes e área de desinfetantes líquidos.",
                "D" to "Área de uniformes de médicos e área de roupas de cama de enfermarias.",
                "E" to "Área de secagem natural e área de lavagem a seco automatizada."
            ),
            resposta_correta = "B",
            comentario = "A lavanderia hospitalar possui duas áreas fundamentais: a área suja (onde ocorre a triagem e manuseio de roupas infectadas com risco biológico) e a área limpa, separadas por barreira física e máquina de lavar com dupla abertura (tipo barreira sanitária).",
            referencia = "NR-32, item 32.7"
        ),
        Question(
            id = 10,
            materia = "NR-32",
            subtopico = "Risco Biológico",
            dificuldade = "difícil",
            enunciado = "Em caso de ocorrência de acidente com material biológico e perfurocortante envolvendo um trabalhador da FHCGV, a conduta técnica de biossegurança imediata preconizada pelas diretrizes da NR-32 e Ministério da Saúde consiste em:",
            alternativas = mapOf(
                "A" to "Espremer vigorosamente o local do ferimento para drenar o sangue residual.",
                "B" to "Lavar exaustivamente o local com água corrente e sabão, encaminhar para atendimento médico imediato e emitir a CAT.",
                "C" to "Aplicar hipoclorito de sódio puro diretamente sobre a ferida para cauterização.",
                "D" to "Aguardar 72 horas para verificar se o profissional manifesta sintomas antes de registrar o fato.",
                "E" to "Orientar o trabalhador a tomar antibiótico de amplo espectro por conta própria."
            ),
            resposta_correta = "B",
            comentario = "Após exposição perfurocortante a material biológico, a primeira conduta é a lavagem imediata com água e sabão (sem espremer para evitar dilaceração tecidual), avaliação de quimioprofilaxia antirretroviral (idealmente nas primeiras 2h), sorologia e emissão tempestiva da CAT.",
            referencia = "NR-32, item 32.2.4.16 e Protocolos do MS"
        ),
        Question(
            id = 11,
            materia = "NR-32",
            subtopico = "Risco Químico",
            dificuldade = "média",
            enunciado = "No que concerne aos gases medicinais segundo a NR-32, os cilindros de oxigênio e outros gases comprimidos instalados em áreas hospitalares devem:",
            alternativas = mapOf(
                "A" to "Ser mantidos soltos para facilitar a rápida locomoção em caso de emergência.",
                "B" to "Estar devidamente fixados por correntes ou suportes adequados, em posição vertical e longe de fontes de calor.",
                "C" to "Permanecer deitados na horizontal sob a bancada do posto de enfermagem.",
                "D" to "Ser lubrificados nas válvulas com graxas e óleos derivados de petróleo.",
                "E" to "Ficar expostos à luz solar direta para evitar congelamento da saída reguladora."
            ),
            resposta_correta = "B",
            comentario = "Os cilindros de gases medicinais devem permanecer sempre na vertical, fixados com correntes ou abraçadeiras, para evitar quedas catastróficas. Jamais usar óleos/graxas em válvulas de O2 pelo risco gravíssimo de explosão por combustão espontânea.",
            referencia = "NR-32, item 32.3.7"
        ),
        Question(
            id = 12,
            materia = "NR-32",
            subtopico = "Perfurocortantes",
            dificuldade = "média",
            enunciado = "A Portaria MTE nº 485/2005 (e suas atualizações normativas na NR-32) instituiu o Plano de Prevenção de Riscos de Acidentes com Materiais Perfurocortantes. Esse plano deve obrigatoriamente ser elaborado por comissão constituída por representantes:",
            alternativas = mapOf(
                "A" to "Exclusivamente do conselho regional de medicina.",
                "B" to "Do SESMT, da CIPA e dos trabalhadores com atuação direta na assistência à saúde.",
                "C" to "Apenas dos fabricantes de insumos hospitalares e seringas.",
                "D" to "Da diretoria administrativa sem necessidade de técnicos de segurança.",
                "E" to "Do sindicato patronal unicamente."
            ),
            resposta_correta = "B",
            comentario = "A comissão para implantação do plano de perfurocortantes com dispositivo de segurança deve ser paritária e multiprofissional, contando com SESMT, CIPA e profissionais da ponta que utilizam o material.",
            referencia = "NR-32, Anexo III (Plano de Prevenção de Acidentes com Perfurocortantes)"
        )
    )
}
