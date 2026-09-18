package com.example.data

import com.example.model.Question

object QuestionBankSafetyNRs {
    val questions: List<Question> = listOf(
        // NR-01
        Question(
            id = 101,
            materia = "NR-01",
            subtopico = "GRO e PGR",
            dificuldade = "média",
            enunciado = "A Norma Regulamentadora nº 01 (NR-01) estabelece as diretrizes para o Gerenciamento de Riscos Ocupacionais (GRO) e o Programa de Gerenciamento de Riscos (PGR). O PGR deve contemplar, no mínimo, dois documentos estruturais essenciais. Quais são eles?",
            alternativas = mapOf(
                "A" to "O Laudo Técnico das Condições Ambientais de Trabalho (LTCAT) e o Perfil Profissiográfico Previdenciário (PPP).",
                "B" to "O Inventário de Riscos Ocupacionais e o Plano de Ação.",
                "C" to "O Relatório Anual do PCMSO e a Análise Ergonômica do Trabalho (AET).",
                "D" to "O Mapa de Risco Setorial e a Folha de Pagamento com adicional de insalubridade.",
                "E" to "O Livro de Atas da CIPA e o Certificado de Aprovação de todos os EPIs."
            ),
            resposta_correta = "B",
            comentario = "Conforme o item 1.5.3.1 da NR-01: 'O PGR deve ser composto, no mínimo, por dois documentos: a) Inventário de Riscos; e b) Plano de Ação'. O PGR é a espinha dorsal da gestão de SST moderna.",
            referencia = "NR-01, item 1.5.3.1"
        ),
        Question(
            id = 102,
            materia = "NR-01",
            subtopico = "Direito de Recusa",
            dificuldade = "fácil",
            enunciado = "O empregado de um serviço de saúde depara-se com uma situação de trabalho onde há risco grave e iminente para sua vida ou integridade física. De acordo com a NR-01, esse trabalhador possui o direito de:",
            alternativas = mapOf(
                "A" to "Interromper suas atividades de trabalho comunicando imediatamente ao seu superior hierárquico (Direito de Recusa).",
                "B" to "Abandonar em definitivo a instituição e requerer indenização judicial automática sem aviso prévio.",
                "C" to "Exigir o pagamento de 40% de adicional de periculosidade para continuar executando a tarefa de risco.",
                "D" to "Recusar-se a trabalhar somente se acompanhado do presidente do sindicato de sua categoria.",
                "E" to "Assinar um termo de renúncia de responsabilidade e prosseguir sem as proteções."
            ),
            resposta_correta = "A",
            comentario = "O item 1.4.3 da NR-01 garante o 'Direito de Recusa': o trabalhador poderá interromper suas atividades quando constatar uma situação de trabalho onde, a seu ver, envolva um risco grave e iminente para a sua vida e saúde, informando imediatamente ao seu superior.",
            referencia = "NR-01, item 1.4.3"
        ),
        Question(
            id = 103,
            materia = "NR-01",
            subtopico = "eSocial",
            dificuldade = "difícil",
            enunciado = "No sistema de escrituração digital das obrigações fiscais, previdenciárias e trabalhistas (eSocial), o evento S-2240 é de responsabilidade técnica de SST e destina-se a informar:",
            alternativas = mapOf(
                "A" to "A Comunicação de Acidente de Trabalho (CAT).",
                "B" to "O Monitoramento da Saúde do Trabalhador e os exames do ASO.",
                "C" to "As Condições Ambientais do Trabalho - Fatores de Risco para fins de aposentadoria especial.",
                "D" to "O cadastro de dependentes e beneficiários de pensão por morte.",
                "E" to "A demissão e rescisão contratual com homologação sindical."
            ),
            resposta_correta = "C",
            comentario = "No eSocial: S-2210 é a CAT; S-2220 é o Monitoramento da Saúde do Trabalhador (ASO); e S-2240 é o evento que registra as Condições Ambientais de Trabalho - Agentes Nocivos (Fatores de Risco).",
            referencia = "Manual de Orientação do eSocial (MOS) / NR-01"
        ),

        // NR-06
        Question(
            id = 104,
            materia = "NR-06",
            subtopico = "Certificado de Aprovação (CA)",
            dificuldade = "fácil",
            enunciado = "Segundo a NR-06 (Equipamentos de Proteção Individual - EPI), todo EPI, seja de fabricação nacional ou importado, só poderá ser posto à venda ou utilizado com a indicação do:",
            alternativas = mapOf(
                "A" to "Selo de Qualidade Total emitido pela CIPA da empresa compradora.",
                "B" to "Certificado de Aprovação (CA) válido, expedido pelo órgão nacional competente em matéria de segurança e saúde no trabalho.",
                "C" to "Registro no Conselho Regional de Enfermagem ou Medicina.",
                "D" to "Termo de Garantia Vitalícia assinado pelo fornecedor logístico.",
                "E" to "Visto prévio do fiscal de vigilância sanitária municipal."
            ),
            resposta_correta = "B",
            comentario = "O item 6.7.1 da NR-06 estabelece que o EPI, de fabricação nacional ou importado, só poderá ser posto à venda ou utilizado com a indicação do Certificado de Aprovação - CA, expedido pelo órgão nacional competente.",
            referencia = "NR-06, item 6.7.1"
        ),
        Question(
            id = 105,
            materia = "NR-06",
            subtopico = "Hierarquia de Controle",
            dificuldade = "média",
            enunciado = "A NR-06 e a NR-01 determinam uma rigorosa ordem de prioridade na adoção das medidas de proteção para eliminação e controle dos riscos ocupacionais. Assinale a sequência correta dessa hierarquia:",
            alternativas = mapOf(
                "A" to "1º Fornecimento de EPI -> 2º Medidas Administrativas -> 3º Medidas de Proteção Coletiva (EPC).",
                "B" to "1º Eliminação dos fatores de risco -> 2º Proteção Coletiva (EPC) -> 3º Medidas Administrativas -> 4º Proteção Individual (EPI).",
                "C" to "1º Pagamento de adicionais salariais -> 2º Medidas de Proteção Individual (EPI) -> 3º Exames médicos periódicos.",
                "D" to "1º Treinamento individual -> 2º Entrega de EPI descartável -> 3º Eliminação na fonte.",
                "E" to "1º Revezamento de equipes -> 2º EPI com CA -> 3º Manutenção corretiva de máquinas."
            ),
            resposta_correta = "B",
            comentario = "A hierarquia de controle (item 1.5.5.1.2 da NR-01 e item 6.5.1 da NR-06) prioriza: 1º Eliminação; 2º Substituição/Controle de Engenharia (EPC); 3º Medidas Administrativas; e 4º EPI somente quando as anteriores forem inviáveis ou insuficientes.",
            referencia = "NR-01 item 1.5.5.1.2 / NR-06 item 6.5.1"
        ),

        // NR-07
        Question(
            id = 106,
            materia = "NR-07",
            subtopico = "Exames Obrigatórios e ASO",
            dificuldade = "média",
            enunciado = "De acordo com a nova redação da NR-07 (Programa de Controle Médico de Saúde Ocupacional - PCMSO), o exame médico de retorno ao trabalho deve ser realizado antes que o empregado reassuma suas funções, quando esteve ausente por período igual ou superior a:",
            alternativas = mapOf(
                "A" to "10 (dez) dias, por motivo de licença prêmio.",
                "B" to "30 (trinta) dias, por motivo de doença ou acidente, de natureza ocupacional ou não.",
                "C" to "60 (sessenta) dias, independentemente da causa do afastamento.",
                "D" to "15 (quinze) dias, exclusivamente para afastamentos com CAT emitida.",
                "E" to "90 (noventa) dias, nos termos da CLT."
            ),
            resposta_correta = "B",
            comentario = "O item 7.5.9 da NR-07 dispõe que: 'O exame de retorno ao trabalho deve ser realizado antes que o empregado reassuma suas funções, quando ausente por período igual ou superior a 30 dias por motivo de doença ou acidente, de natureza ocupacional ou não'.",
            referencia = "NR-07, item 7.5.9"
        ),
        Question(
            id = 107,
            materia = "NR-07",
            subtopico = "ASO",
            dificuldade = "fácil",
            enunciado = "O Atestado de Saúde Ocupacional (ASO) é o documento emitido pelo médico do trabalho após a realização de cada exame médico ocupacional. Conforme a NR-07, a primeira via do ASO deve:",
            alternativas = mapOf(
                "A" to "Ser entregue obrigatoriamente ao trabalhador, mediante recibo na segunda via.",
                "B" to "Ficar arquivada na Delegacia Regional do Trabalho em meio impresso.",
                "C" to "Ser enviada para o sindicato da categoria profissional sem ciência do trabalhador.",
                "D" to "Ser retida pela empresa sem cópia para o colaborador.",
                "E" to "Ser mantida exclusivamente em cofre lacrado na diretoria médica."
            ),
            resposta_correta = "A",
            comentario = "Segundo a NR-07 (item 7.5.19.1), a primeira via do ASO deve ser arquivada no local de trabalho do empregado, inclusive frente de trabalho ou canteiro de obras, e a segunda via deve ser obrigatoriamente entregue ao trabalhador, mediante recibo.",
            referencia = "NR-07, item 7.5.19.1"
        ),

        // NR-09
        Question(
            id = 108,
            materia = "NR-09",
            subtopico = "Níveis de Ação",
            dificuldade = "difícil",
            enunciado = "Na avaliação das exposições ocupacionais a agentes físicos, químicos e biológicos segundo a NR-09, o 'Nível de Ação' para agentes químicos corresponde a:",
            alternativas = mapOf(
                "A" to "10% do limite de tolerância legal.",
                "B" to "Metade (50%) do limite de tolerância estabelecido na NR-15.",
                "C" to "80% da dose diária admitida pela Fundacentro.",
                "D" to "100% do limite de tolerância, momento em que se inicia a ação corretiva.",
                "E" to "Ao dobro do limite máximo tolerável em jornada ordinária."
            ),
            resposta_correta = "B",
            comentario = "O nível de ação para agentes químicos é o valor a partir do qual devem ser iniciadas medidas preventivas periódicas (monitoramento e controle), fixado em 50% do limite de tolerância previsto na NR-15 ou ACGIH.",
            referencia = "NR-09 / Fundacentro NHO"
        ),

        // NR-15
        Question(
            id = 109,
            materia = "NR-15",
            subtopico = "Anexo 14 - Agentes Biológicos",
            dificuldade = "média",
            enunciado = "No ambiente hospitalar da FHCVG, o Técnico em Segurança do Trabalho avalia as atividades com insalubridade por agentes biológicos com base no Anexo 14 da NR-15. O contato permanente com pacientes em isolamento por doenças infectocontagiosas enseja insalubridade de grau:",
            alternativas = mapOf(
                "A" to "Mínimo (10% sobre o salário-mínimo).",
                "B" to "Médio (20% sobre o salário-mínimo).",
                "C" to "Máximo (40% sobre o salário-mínimo).",
                "D" to "Especial (50% sobre a remuneração total).",
                "E" to "Inexistente, quando o hospital fornece máscara N95."
            ),
            resposta_correta = "C",
            comentario = "O Anexo 14 da NR-15 estipula Insalubridade de Grau Máximo (40%) para trabalho ou operações, em contato permanente com: pacientes em isolamento por doenças infecto-contagiosas, bem como objetos de seu uso, não previamente esterilizados. Outros pacientes em enfermarias comuns geram grau médio (20%).",
            referencia = "NR-15, Anexo 14"
        ),

        // NR-17
        Question(
            id = 110,
            materia = "NR-17",
            subtopico = "Ergonomia Hospitalar",
            dificuldade = "média",
            enunciado = "A NR-17 estabelece que o transporte manual de pacientes nos hospitais deve contar com recursos que minimizem a sobrecarga biomecânica da equipe de enfermagem. São medidas preconizadas pela norma:",
            alternativas = mapOf(
                "A" to "Incentivar que apenas um profissional levante pacientes com peso superior a 80 kg para agilizar o atendimento.",
                "B" to "Uso de tecnologias assistivas como pranchas de transferência, lençóis de deslizamento, guinchos elevadores mecânicos e leitos ajustáveis.",
                "C" to "Proibir o uso de cadeiras de rodas e macas com rodízios para evitar quedas acidentais.",
                "D" to "Determinar que apenas médicos realizem a transferência postural em Unidade de Terapia Intensiva.",
                "E" to "Exigir o uso contínuo de cintas lombares abdominais no lugar da Análise Ergonômica do Trabalho."
            ),
            resposta_correta = "B",
            comentario = "A NR-17 e as boas práticas de ergonomia hospitalar exigem o uso de equipamentos auxiliares mecânicos e transferidores (passantes, pranchas, guinchos) e leitos com regulagem de altura, reduzindo substancialmente as lesões musculoesqueléticas (DORT/LER) na coluna dos profissionais.",
            referencia = "NR-17, itens 17.4 e 17.5"
        ),

        // NR-23
        Question(
            id = 111,
            materia = "NR-23",
            subtopico = "Classes de Fogo e Extintores",
            dificuldade = "fácil",
            enunciado = "Em um hospital, ocorre um princípio de incêndio em um quadro elétrico energizado na subestação do gerador. De acordo com a classificação das chamas e a NR-23, qual é a classe do incêndio e o agente extintor mais recomendado?",
            alternativas = mapOf(
                "A" to "Classe A; extintor de água pressurizada com jato pleno.",
                "B" to "Classe B; extintor de espuma mecânica líquida.",
                "C" to "Classe C; extintor de Gás Carbônico (CO2) ou Pó Químico Seco.",
                "D" to "Classe D; extintor de pó especial para metais pirofóricos.",
                "E" to "Classe K; extintor com acetato de potássio diluído em água."
            ),
            resposta_correta = "C",
            comentario = "A Classe C abrange incêndios envolvendo equipamentos elétricos energizados. O extintor de CO2 é ideal por não ser condutor de eletricidade e não deixar resíduos que danifiquem os circuitos eletrônicos.",
            referencia = "NR-23 e Instruções Técnicas do Corpo de Bombeiros"
        ),

        // NR-05
        Question(
            id = 112,
            materia = "NR-05",
            subtopico = "CIPA e Estabilidade",
            dificuldade = "média",
            enunciado = "Sobre a Comissão Interna de Prevenção de Acidentes e Assédio (CIPA) regida pela NR-05, no que tange ao mandato e à garantia de emprego (estabilidade) dos membros eleitos pelos empregados, é correto afirmar:",
            alternativas = mapOf(
                "A" to "O mandato é de 2 anos, sem estabilidade para membros suplentes.",
                "B" to "O mandato é de 1 ano, sendo vedada a dispensa arbitrária do empregado eleito desde o registro da candidatura até 1 ano após o final de seu mandato.",
                "C" to "A estabilidade provisória aplica-se exclusivamente ao Presidente indicado pelo empregador.",
                "D" to "Membros da CIPA podem ser demitidos sem justa causa a qualquer momento mediante pagamento de multa de 10%.",
                "E" to "O mandato do cipeiro é por prazo indeterminado enquanto mantiver contrato de trabalho ativo."
            ),
            resposta_correta = "B",
            comentario = "Conforme a Constituição Federal (ADCT, art. 10, II, 'a') e a NR-05 (item 5.4.12), é vedada a dispensa arbitrária ou sem justa causa do empregado eleito para cargo de direção da CIPA, desde o registro de sua candidatura até um ano após o final de seu mandato.",
            referencia = "NR-05, item 5.4.12 e ADCT art. 10, II, 'a'"
        ),

        // NR-35
        Question(
            id = 113,
            materia = "NR-35",
            subtopico = "Trabalho em Altura",
            dificuldade = "fácil",
            enunciado = "Conforme o campo de aplicação da Norma Regulamentadora nº 35 (NR-35), considera-se trabalho em altura toda atividade executada acima de:",
            alternativas = mapOf(
                "A" to "1,50 m (um metro e cinquenta centímetros) do nível inferior, onde haja risco de queda.",
                "B" to "2,00 m (dois metros) do nível inferior, onde haja risco de queda.",
                "C" to "2,50 m (dois metros e cinquenta centímetros), com uso de escada simples.",
                "D" to "3,00 m (três metros) para serviços industriais e de limpeza de fachadas.",
                "E" to "4,00 m (quatro metros) exclusivamente em canteiros de obras hospitalares."
            ),
            resposta_correta = "B",
            comentario = "Item 35.1.2 da NR-35: 'Considera-se trabalho em altura toda atividade executada acima de 2,00 m (dois metros) do nível inferior, onde haja risco de queda'.",
            referencia = "NR-35, item 35.1.2"
        ),

        // NR-24
        Question(
            id = 114,
            materia = "NR-24",
            subtopico = "Condições Sanitárias e Vestiários",
            dificuldade = "média",
            enunciado = "Nos termos da NR-24 (Condições Sanitárias e de Conforto nos Locais de Trabalho), em estabelecimentos de saúde como a FHCGV onde os profissionais utilizam uniformes ou vestimentas específicas de proteção biológica, os vestiários devem dispor de:",
            alternativas = mapOf(
                "A" to "Armários simples compartilhados por no mínimo quatro funcionários simultâneos.",
                "B" to "Armários duplos ou armários com compartimentos estanques para separação da roupa comum da roupa contaminada de trabalho.",
                "C" to "Cabides coletivos em área aberta no corredor de circulação externa.",
                "D" to "Sacolas plásticas transparentes guardadas no próprio posto de enfermagem.",
                "E" to "Apenas chuveiro com água fria sem necessidade de armários individuais."
            ),
            resposta_correta = "B",
            comentario = "O item 24.3.4 da NR-24 e a NR-32 determinam que para atividades que demandem troca e desinfecção de roupas com exposição a agentes biológicos/químicos, os armários devem ser com compartimentos duplos, permitindo isolar a roupa de uso comum da vestimenta de trabalho.",
            referencia = "NR-24, item 24.3.4 / NR-32 item 32.2.4.6"
        )
    )
}
