package com.example.data

import com.example.model.Question

object QuestionBankHealthAndLaw {
    val questions: List<Question> = listOf(
        // LEGISLAÇÃO DO SUS
        Question(
            id = 201,
            materia = "Legislação do SUS",
            subtopico = "Constituição Federal",
            dificuldade = "fácil",
            enunciado = "De acordo com o Artigo 196 da Constituição Federal de 1988, a saúde é:",
            alternativas = mapOf(
                "A" to "Direito exclusivo dos contribuintes da seguridade social que comprovam vínculo celetista.",
                "B" to "Direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas que visem à redução do risco de doença e de outros agravos.",
                "C" to "Responsabilidade subsidiária do poder público, cabendo prioritariamente à iniciativa privada filantrópica.",
                "D" to "Faculdade do cidadão, que poderá optar por renúncia tácita de assistência médica hospitalar.",
                "E" to "Serviço público remunerado mediante coparticipação tarifária direta dos usuários do SUS."
            ),
            resposta_correta = "B",
            comentario = "O Art. 196 da CF/88 é a base doutrinária do SUS: 'A saúde é direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas que visem à redução do risco de doença e de outros agravos e ao acesso universal e igualitário às ações e serviços para sua promoção, proteção e recuperação'.",
            referencia = "CF/88, Art. 196"
        ),
        Question(
            id = 202,
            materia = "Legislação do SUS",
            subtopico = "Lei 8.080/90",
            dificuldade = "média",
            enunciado = "Nos termos da Lei Orgânica da Saúde (Lei nº 8.080/1990), o conjunto de ações que proporcionam o conhecimento, a detecção ou prevenção de qualquer mudança nos fatores determinantes e condicionantes de saúde individual ou coletiva, com a finalidade de recomendar e adotar as medidas de prevenção e controle das doenças ou agravos, conceitua a:",
            alternativas = mapOf(
                "A" to "Vigilância Sanitária.",
                "B" to "Vigilância Epidemiológica.",
                "C" to "Saúde do Trabalhador restrita à área previdenciária.",
                "D" to "Auditoria Médica Hospitalar.",
                "E" to "Atenção Terciária Especializada."
            ),
            resposta_correta = "B",
            comentario = "A Lei nº 8.080/90, em seu Art. 6º, § 2º, define expressamente que: 'Entende-se por vigilância epidemiológica um conjunto de ações que proporcionam o conhecimento, a detecção ou prevenção de qualquer mudança nos fatores determinantes e condicionantes de saúde individual ou coletiva...'. A Vigilância Sanitária (§ 1º) foca no controle de bens de consumo, prestação de serviços e ambiente.",
            referencia = "Lei 8.080/90, Art. 6º, § 2º"
        ),
        Question(
            id = 203,
            materia = "Legislação do SUS",
            subtopico = "Saúde do Trabalhador no SUS",
            dificuldade = "média",
            enunciado = "Segundo a Lei nº 8.080/1990, inclui-se no campo de atuação do Sistema Único de Saúde (SUS) a execução de ações voltadas para a Saúde do Trabalhador. Dentre as atribuições explícitas da Saúde do Trabalhador no SUS, destaca-se:",
            alternativas = mapOf(
                "A" to "A assistência ao trabalhador vítima de acidentes de trabalho ou portador de doença profissional e do trabalho, bem como a avaliação e fiscalização dos locais de trabalho.",
                "B" to "A definição exclusiva dos valores monetários de aposentadorias por invalidez paga pelo INSS.",
                "C" to "A emissão do laudo pericial para contratação de planos de saúde privados pelas empresas.",
                "D" to "A fixação de tabelas de reajuste salarial das categorias profissionais da área da saúde.",
                "E" to "A homologação judicial de demissões sem justa causa com reintegração."
            ),
            resposta_correta = "A",
            comentario = "O Art. 6º, § 3º da Lei 8.080/90 traz a definição e o campo da Saúde do Trabalhador no SUS, englobando assistência ao acidentado, vigilância epidemiológica dos agravos ocupacionais e fiscalização dos ambientes de trabalho.",
            referencia = "Lei 8.080/90, Art. 6º, § 3º"
        ),
        Question(
            id = 204,
            materia = "Legislação do SUS",
            subtopico = "Lei 8.142/90",
            dificuldade = "fácil",
            enunciado = "A Lei nº 8.142/1990 dispõe sobre a participação da comunidade na gestão do SUS. Ela define as duas instâncias colegiadas fundamentais de participação social em cada esfera de governo, que são:",
            alternativas = mapOf(
                "A" to "A Diretoria Executiva do Hospital e a Procuradoria-Geral do Estado.",
                "B" to "A Conferência de Saúde e o Conselho de Saúde.",
                "C" to "O Sindicato dos Servidores e a Associação Médica Brasileira.",
                "D" to "A CIPA Hospitalar e a Agência Nacional de Vigilância Sanitária (ANVISA).",
                "E" to "O Colegiado de Enfermagem e o Conselho Tutelar Regional."
            ),
            resposta_correta = "B",
            comentario = "O Art. 1º da Lei nº 8.142/90 institui que o SUS contará, em cada esfera de governo, sem prejuízo das funções do Poder Legislativo, com a Conferência de Saúde (a cada 4 anos) e o Conselho de Saúde (permanente e deliberativo, com 50% de representação paritária de usuários).",
            referencia = "Lei 8.142/90, Art. 1º"
        ),

        // RESÍDUOS DE SERVIÇOS DE SAÚDE (RDC 222/2018 ANVISA)
        Question(
            id = 205,
            materia = "Resíduos de Saúde (RDC 222)",
            subtopico = "Classificação de Grupos",
            dificuldade = "fácil",
            enunciado = "A Resolução RDC nº 222/2018 da ANVISA regulamenta as Boas Práticas de Gerenciamento dos Resíduos de Serviços de Saúde (RSS). Segundo a classificação normativa, os materiais perfurocortantes ou escarificantes (como agulhas, lâminas de bisturi e ampolas de vidro) pertencem ao:",
            alternativas = mapOf(
                "A" to "Grupo A.",
                "B" to "Grupo B.",
                "C" to "Grupo C.",
                "D" to "Grupo D.",
                "E" to "Grupo E."
            ),
            resposta_correta = "E",
            comentario = "Classificação RDC 222/2018: Grupo A (Biológico/Infectante); Grupo B (Químico); Grupo C (Rejeitos Radioativos); Grupo D (Resíduos Comuns/Recicláveis); Grupo E (Perfurocortantes e escarificantes).",
            referencia = "RDC ANVISA nº 222/2018, Art. 5º"
        ),
        Question(
            id = 206,
            materia = "Resíduos de Saúde (RDC 222)",
            subtopico = "Acondicionamento de RSS",
            dificuldade = "média",
            enunciado = "De acordo com a RDC 222/2018, os resíduos do Grupo A (biológicos infectantes, como bolsas de sangue e culturas microbianas) devem ser acondicionados em sacos plásticos com as seguintes características:",
            alternativas = mapOf(
                "A" to "Sacos pretos transparentes com símbolo de material reciclável.",
                "B" to "Sacos brancos leitosos, resistentes a ruptura e vazamento, identificados com o símbolo internacional de risco biológico.",
                "C" to "Caixas de papelão comuns sem impermeabilização interna.",
                "D" to "Sacos azuis de polietileno sem fecho mecânico hermético.",
                "E" to "Latões metálicos perfurados para permitir secagem espontânea."
            ),
            resposta_correta = "B",
            comentario = "Os resíduos do Grupo A devem ser acondicionados em sacos brancos leitosos impermeáveis, preenchidos até 2/3 de sua capacidade, com fechamento seguro e exibindo o símbolo de substância infectante com rótulo indelével.",
            referencia = "RDC ANVISA nº 222/2018, Capítulo IV"
        ),
        Question(
            id = 207,
            materia = "Resíduos de Saúde (RDC 222)",
            subtopico = "PGRSS",
            dificuldade = "média",
            enunciado = "O Plano de Gerenciamento de Resíduos de Serviços de Saúde (PGRSS) é documento técnico obrigatório para hospitais e clínicas. As etapas de manejo dos RSS contempladas no PGRSS seguem a ordem correta em:",
            alternativas = mapOf(
                "A" to "Segregação -> Acondicionamento -> Identificação -> Transporte Interno -> Armazenamento Temporário/Externo -> Tratamento/Disposição Final.",
                "B" to "Disposição Final -> Transporte Externo -> Segregação -> Triagem Manual na Enfermaria.",
                "C" to "Incineração Geral -> Lavagem -> Acondicionamento em caixas de feira -> Aterro sanitário.",
                "D" to "Armazenamento único sem separação -> Venda direta para cooperativas de reciclagem.",
                "E" to "Despejo em esgoto sanitário comum -> Tratamento químico diluidor."
            ),
            resposta_correta = "A",
            comentario = "O manejo de RSS inicia impreterivelmente na fonte com a SEGREGAÇÃO no momento e local de sua geração, seguido por acondicionamento em recipiente próprio, identificação por simbologia, transporte interno até abrigo temporário/externo e destinação ambientalmente adequada.",
            referencia = "RDC ANVISA nº 222/2018, Art. 4º"
        ),

        // LEGISLAÇÃO PREVIDENCIÁRIA
        Question(
            id = 208,
            materia = "Legislação Previdenciária",
            subtopico = "CAT (Comunicação de Acidente de Trabalho)",
            dificuldade = "fácil",
            enunciado = "Nos termos da Lei nº 8.213/1991 (Planos de Benefícios da Previdência Social), a empresa deve comunicar o acidente do trabalho à Previdência Social até:",
            alternativas = mapOf(
                "A" to "O primeiro dia útil seguinte ao da ocorrência e, em caso de morte, de imediato à autoridade competente.",
                "B" to "30 (trinta) dias após o retorno do trabalhador ao trabalho.",
                "C" to "O quinto dia útil do mês subsequente ao evento acidentário.",
                "D" to "O final do ano civil, mediante inclusão no balanço anual do SESMT.",
                "E" to "72 horas da alta hospitalar do acidentado."
            ),
            resposta_correta = "A",
            comentario = "Art. 22 da Lei 8.213/91: 'A empresa ou o empregador doméstico deverão comunicar o acidente do trabalho à Previdência Social até o primeiro dia útil seguinte ao da ocorrência e, em caso de morte, de imediato, à autoridade competente, sob pena de multa variável...'.",
            referencia = "Lei 8.213/91, Art. 22"
        ),
        Question(
            id = 209,
            materia = "Legislação Previdenciária",
            subtopico = "Estabilidade Acidentária",
            dificuldade = "média",
            enunciado = "Conforme o Artigo 118 da Lei nº 8.213/1991 e a Súmula nº 378 do Tribunal Superior do Trabalho (TST), o segurado que sofreu acidente do trabalho tem garantida a manutenção do seu contrato de trabalho na empresa, pelo prazo mínimo de:",
            alternativas = mapOf(
                "A" to "6 (seis) meses após a ocorrência do acidente.",
                "B" to "12 (doze) meses após a cessação do auxílio por incapacidade temporária acidentário (antigo auxílio-doença acidentário B91).",
                "C" to "24 (vinte e quatro) meses contados a partir da data de emissão da CAT.",
                "D" to "5 (cinco) anos, se tiver sequela estética comprovada.",
                "E" to "Tempo indeterminado, convertendo-se automaticamente em estabilidade de servidor público estatutário."
            ),
            resposta_correta = "B",
            comentario = "Art. 118 da Lei 8.213/91: 'O segurado que sofreu acidente do trabalho tem garantida, pelo prazo mínimo de doze meses, a manutenção do seu contrato de trabalho na empresa, após a cessação do auxílio-doença acidentário, independentemente de percepção de auxílio-acidente'.",
            referencia = "Lei 8.213/91, Art. 118 e Súmula 378 TST"
        ),
        Question(
            id = 210,
            materia = "Legislação Previdenciária",
            subtopico = "PPP e LTCAT",
            dificuldade = "difícil",
            enunciado = "O Perfil Profissiográfico Previdenciário (PPP) é o histórico-laboral individual do trabalhador que presta serviços exposto a agentes nocivos. O documento técnico legal que serve de base obrigatória para o preenchimento dos dados ambientais do PPP é o:",
            alternativas = mapOf(
                "A" to "LTCAT (Laudo Técnico das Condições Ambientais do Trabalho), elaborado por Médico do Trabalho ou Engenheiro de Segurança do Trabalho.",
                "B" to "Relatório trimestral de compras de medicamentos da farmácia hospitalar.",
                "C" to "Livro de presença diária do ponto biométrico do empregado.",
                "D" to "Diploma de graduação do colaborador homologado pelo MEC.",
                "E" to "Contrato de trabalho registrado no sindicato da categoria."
            ),
            resposta_correta = "A",
            comentario = "O Art. 58 da Lei 8.213/91 exige que a comprovação da efetiva exposição do segurado aos agentes nocivos será feita mediante formulário (PPP), emitido com base em Laudo Técnico de Condições Ambientais do Trabalho (LTCAT) expedido por médico do trabalho ou engenheiro de segurança do trabalho.",
            referencia = "Lei 8.213/91, Art. 58, § 1º"
        ),

        // HIGIENE OCUPACIONAL
        Question(
            id = 211,
            materia = "Higiene Ocupacional",
            subtopico = "Fases da Higiene Ocupacional",
            dificuldade = "fácil",
            enunciado = "A Higiene Ocupacional dedica-se à preservação da saúde e integridade física dos trabalhadores em função dos riscos do ambiente. A metodologia clássica da Higiene Ocupacional desenvolve-se rigorosamente em quatro etapas sucessivas, que são:",
            alternativas = mapOf(
                "A" to "Antecipação, Reconhecimento, Avaliação e Controle dos riscos ambientais.",
                "B" to "Demissão, Substituição, Treinamento e Notificação judicial.",
                "C" to "Indenização, Aplicação de Multa, Exame Admissional e Reciclagem.",
                "D" to "Fiscalização, Lacração de setor, Compra de EPIs e Aposentadoria.",
                "E" to "Inspeção sanitária, Desinfecção química, Curativo e Descarte."
            ),
            resposta_correta = "A",
            comentario = "As quatro etapas canônicas da Higiene Ocupacional (adotadas pela ACGIH, ABHO e Fundacentro) são: 1. Antecipação (em projetos/novas instalações); 2. Reconhecimento (identificação dos agentes in loco); 3. Avaliação (quantitativa/qualitativa); e 4. Controle (medidas para neutralizar ou eliminar).",
            referencia = "Higiene Ocupacional - Fundacentro / ABHO"
        ),

        // OUTROS (MAPA DE RISCOS, SINALIZAÇÃO, ACIDENTES)
        Question(
            id = 212,
            materia = "Outros",
            subtopico = "Mapa de Riscos",
            dificuldade = "fácil",
            enunciado = "No Mapa de Riscos Ocupacionais, amplamente utilizado nas instituições de saúde e elaborado pela CIPA com apoio do SESMT, as cores Verde, Vermelho e Marrom representam, respectivamente, os seguintes grupos de riscos:",
            alternativas = mapOf(
                "A" to "Físicos, Químicos e Biológicos.",
                "B" to "Biológicos, Mecânicos e Ergonômicos.",
                "C" to "Químicos, Físicos e de Acidentes.",
                "D" to "Ergonômicos, de Acidentes e Radiações.",
                "E" to "Psicossociais, Elétricos e Térmicos."
            ),
            resposta_correta = "A",
            comentario = "Cores padronizadas do Mapa de Riscos: Grupo 1 (Verde) = Riscos Físicos; Grupo 2 (Vermelho) = Riscos Químicos; Grupo 3 (Marrom) = Riscos Biológicos; Grupo 4 (Amarelo) = Riscos Ergonômicos; Grupo 5 (Azul) = Riscos Mecânicos/Acidentes.",
            referencia = "Portaria DNSST nº 25/1994 e NR-05"
        ),
        Question(
            id = 213,
            materia = "Outros",
            subtopico = "Investigação de Acidentes",
            dificuldade = "média",
            enunciado = "Durante a investigação e análise de um acidente de trabalho hospitalar com perfurocortante, o Técnico de Segurança do Trabalho utiliza o método da 'Árvore de Causas'. O princípio técnico basilar desse método preconiza que:",
            alternativas = mapOf(
                "A" to "O acidente decorre de uma causalidade múltipla (pluricausal), devendo-se identificar a rede de fatores antecedentes e desvios sem buscar um único culpado individual.",
                "B" to "Todo acidente hospitalar é culpa exclusiva e unilateral da distração do empregado (ato inseguro puro).",
                "C" to "A investigação deve ser finalizada imediatamente assim que o funcionário assinar o pedido de desculpas à chefia.",
                "D" to "Somente fatores meteorológicos e ambientais externos explicam acidentes ocupacionais.",
                "E" to "As causas raízes de um acidente com perfurocortante não possuem relação com o fornecimento de dispositivos de segurança."
            ),
            resposta_correta = "A",
            comentario = "O método da Árvore de Causas e as boas práticas de investigação de acidentes descartam o anacrônico conceito punitivo de 'culpabilização individual/ato inseguro'. A análise é sistêmica, identificando variações organizacionais, equipamentos, processos e formação que culminaram no evento.",
            referencia = "Manual de Análise de Acidentes de Trabalho - MTE"
        )
    )
}
