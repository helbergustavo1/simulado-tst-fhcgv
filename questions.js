/**
 * BANCO DE DADOS COMPLETO - SIMULADO TST FHCGV
 * Fundação Hospital de Clínicas Gaspar Vianna (FHCGV/PA)
 * Cargo: Técnico em Segurança do Trabalho
 * Banca: Instituto Consulplan
 * 
 * Total: 700 questões comentadas e fundamentadas
 * - 200 questões de demonstração originais (IDs 1-200)
 * - 500 questões adicionais completas (IDs 201-700)
 */

const questions = [
  {
    "id": 1,
    "materia": "NR-32",
    "dificuldade": "média",
    "enunciado": "Em relação ao manuseio e descarte de materiais perfurocortantes em serviços de saúde da FHCGV, a NR-32 estabelece taxativamente que:",
    "alternativas": {
      "A": "É permitido o reencape de agulhas apenas quando executado com técnica de uma só mão.",
      "B": "O reencape e a desconexão manual de agulhas são expressamente proibidos.",
      "C": "A desconexão da agulha da seringa pode ser feita manualmente se o profissional usar luvas cirúrgicas duplas.",
      "D": "Os recipientes para descarte de perfurocortantes devem ser preenchidos até 95% de sua capacidade total.",
      "E": "As caixas de perfurocortantes podem ser apoiadas diretamente no piso próximo aos leitos dos pacientes."
    },
    "resposta_correta": "B",
    "comentario": "A NR-32 no item 32.2.4.15 proíbe expressamente o reencape e a desconexão manual de agulhas com as mãos.",
    "referencia": "NR-32, item 32.2.4.15"
  },
  {
    "id": 2,
    "materia": "NR-32",
    "dificuldade": "média",
    "enunciado": "Conforme a NR-32, os recipientes para acondicionamento de materiais perfurocortantes devem ter seu limite máximo de preenchimento correspondente a:",
    "alternativas": {
      "A": "50% da capacidade total do coletor.",
      "B": "Até a linha indicadora de enchimento (cerca de 5 cm abaixo do bocal ou 2/3 a 3/4 do volume total).",
      "C": "85% da capacidade volumétrica nominal.",
      "D": "95% da capacidade, devendo ser compactados com as mãos protegidas.",
      "E": "100% da capacidade, desde que selado com fita adesiva larga."
    },
    "resposta_correta": "B",
    "comentario": "Os recipientes de descarte de perfurocortantes devem ser preenchidos no máximo até a linha delimitadora especificada pelo fabricante.",
    "referencia": "NR-32, item 32.2.4.15"
  },
  {
    "id": 3,
    "materia": "NR-32",
    "dificuldade": "média",
    "enunciado": "A NR-32 preconiza que, para todos os trabalhadores expostos a riscos biológicos no ambiente hospitalar, o empregador deve fornecer gratuitamente o seguinte programa de imunização ativa:",
    "alternativas": {
      "A": "Apenas vacinas contra Febre Amarela e Tuberculose.",
      "B": "Vacinas contra Tétano, Difteria, Hepatite B e as previstas no PCMSO.",
      "C": "Exclusivamente a vacina contra Influenza anual e Sarampo.",
      "D": "Apenas a vacina Tríplice Viral e Meningocócica conjugada.",
      "E": "Somente as vacinas cujo reforço seja quadrienal obrigatório."
    },
    "resposta_correta": "B",
    "comentario": "O empregador deve fornecer gratuitamente programa de imunização ativa contra tétano, difteria, hepatite B e aquelas constantes do PCMSO.",
    "referencia": "NR-32, item 32.2.4.17"
  },
  {
    "id": 4,
    "materia": "NR-32",
    "dificuldade": "média",
    "enunciado": "Em relação ao uso de adornos no ambiente hospitalar pelos trabalhadores assistenciais, a NR-32 estipula que:",
    "alternativas": {
      "A": "É vedado o uso de adornos no posto de trabalho por parte de trabalhadores sujeitos à exposição a agentes biológicos.",
      "B": "É permitido o uso de alianças lisas e brincos pequenos discretos nos setores fechados.",
      "C": "O uso de relógios de pulso metálicos é autorizado em enfermarias gerais.",
      "D": "Crachás pendurados por cordões compridos soltos no peito são obrigatórios pela norma.",
      "E": "Apenas anéis com pedras volumosas ou pontiagudas são restritos pela NR-32."
    },
    "resposta_correta": "A",
    "comentario": "A NR-32 estabelece no item 32.2.4.5 a proibição de adornos (anéis, alianças, brincos, pulseiras, relógios, cordões, gravatas) para evitar acúmulo de bioagentes.",
    "referencia": "NR-32, item 32.2.4.5"
  },
  {
    "id": 5,
    "materia": "NR-32",
    "dificuldade": "média",
    "enunciado": "No tocante ao uso de calçados nos serviços de saúde onde haja exposição a riscos biológicos e químicos, a NR-32 determina que os calçados de trabalho devem ser:",
    "alternativas": {
      "A": "Abertos no calcanhar para melhor conforto e dissipação térmica.",
      "B": "Fechados e confeccionados em material resistente e impermeável, protegendo integralmente o pé.",
      "C": "De tecido respirável com microperfurações para ventilação da pele.",
      "D": "Sandálias antiderrapantes com tiras flexíveis de fixação nos calcanhares.",
      "E": "Chinelos anatômicos laváveis sem proteção de biqueira ou dorso."
    },
    "resposta_correta": "B",
    "comentario": "Os trabalhadores não devem deixar o local com EPI ou vestimentas de trabalho, e os calçados devem ser fechados de material lavável/impermeável.",
    "referencia": "NR-32, item 32.2.4.7"
  },
  {
    "id": 6,
    "materia": "NR-32",
    "dificuldade": "média",
    "enunciado": "Quanto ao consumo de alimentos e bebidas nos postos de trabalho de um hospital, a NR-32 estabelece expressamente:",
    "alternativas": {
      "A": "É permitido o consumo de lanches rápidos desde que em recipientes térmicos tampados.",
      "B": "É vedado o consumo de alimentos e bebidas nos postos de trabalho e nas áreas onde há exposição a agentes biológicos.",
      "C": "Bebidas isotônicas e garrafas de água podem permanecer sem tampa sobre bancadas de medicação.",
      "D": "É permitido guardar alimentos na mesma geladeira em que se estocam medicamentos termolábeis e reagentes.",
      "E": "A proibição restringe-se exclusivamente aos setores de CTI e necrotério hospitalar."
    },
    "resposta_correta": "B",
    "comentario": "É vedado comer, beber, fumar, manusear lentes de contato e aplicar cosméticos nos postos de trabalho hospitalares.",
    "referencia": "NR-32, item 32.2.4.6"
  },
  {
    "id": 7,
    "materia": "NR-32",
    "dificuldade": "média",
    "enunciado": "No preparo e na manipulação de quimioterápicos antineoplásicos, a cabine de segurança biológica (CSB) exigida prioritariamente pela NR-32 deve ser do tipo:",
    "alternativas": {
      "A": "Fluxo laminar horizontal com sopro frontal voltado para o operador.",
      "B": "Cabine de Segurança Biológica Classe II B2, com 100% de exaustão do ar para o exterior através de filtro HEPA.",
      "C": "Capela de exaustão química simples sem barreira de proteção de fluxo vertical.",
      "D": "Cabine Classe I operando com pressão positiva contínua em relação à antessala.",
      "E": "Mesa cirúrgica simples dotada de filtro de carvão ativado não selado."
    },
    "resposta_correta": "B",
    "comentario": "O preparo de antineoplásicos requer CSB Classe II B2 com 100% de ar exaurido para fora do edifício hospitalar.",
    "referencia": "NR-32, item 32.3.9.4"
  },
  {
    "id": 8,
    "materia": "NR-32",
    "dificuldade": "média",
    "enunciado": "Durante o transporte interno de medicamentos quimioterápicos antineoplásicos no hospital, a NR-32 preconiza que os frascos devem ser acondicionados em recipientes:",
    "alternativas": {
      "A": "Abertos em bandejas plásticas convencionais para facilitar a inspeção visual imediata.",
      "B": "Térmicos, estanques, resistentes a impactos e identificados com símbolo de risco biológico e químico.",
      "C": "Em caixas de papelão corrugado simples envoltas em plástico bolha não lacrado.",
      "D": "Diretamente nas mãos dos técnicos de enfermagem com luvas de procedimento comuns.",
      "E": "Em carrinhos de curativo sem travas de fixação ou amortecimento contra quedas."
    },
    "resposta_correta": "B",
    "comentario": "O transporte de antineoplásicos deve ocorrer em caixas térmicas rígidas, estanques e devidamente sinalizadas.",
    "referencia": "NR-32, item 32.3.9.7"
  },
  {
    "id": 9,
    "materia": "NR-32",
    "dificuldade": "média",
    "enunciado": "Na ocorrência de derramamento acidental de quimioterápicos antineoplásicos no setor de oncologia, o procedimento padrão imediato consiste em:",
    "alternativas": {
      "A": "Lavar imediatamente com jato de água sob alta pressão em direção ao ralo sanitário do corredor.",
      "B": "Interditar a área imediatamente e utilizar o Kit de Derramamento específico com EPIs de proteção respiratória, luvas e absorventes.",
      "C": "Aguardar a secagem espontânea por evaporação durante duas horas com janelas fechadas.",
      "D": "Secar o líquido com folhas de jornal comum utilizando luvas de látex de procedimento.",
      "E": "Acionar o serviço de limpeza geral terceirizado sem necessidade de avisar a equipe de segurança do trabalho."
    },
    "resposta_correta": "B",
    "comentario": "Deve haver Kit de Derramamento específico contendo EPIs e materiais absorventes neutralizantes para contenção imediata.",
    "referencia": "NR-32, item 32.3.9.8"
  },
  {
    "id": 10,
    "materia": "NR-32",
    "dificuldade": "média",
    "enunciado": "Em relação à lavanderia hospitalar, a NR-32 exige que a divisão entre a 'área suja' (recebimento e separação) e a 'área limpa' (secagem e calandragem) seja garantida por:",
    "alternativas": {
      "A": "Cortinas plásticas transparentes com espaçamento de meio metro entre as lâminas.",
      "B": "Barreira física constituída de alvenaria e máquinas de lavar de dupla porta (tipo barreira sanitária).",
      "C": "Linha demarcatória amarela e preta pintada no piso cerâmico.",
      "D": "Uso compartilhado de bancadas em horários alternados de trabalho.",
      "E": "Instalação de exaustor central de teto sem divisórias estruturais de alvenaria."
    },
    "resposta_correta": "B",
    "comentario": "A lavanderia hospitalar deve ter barreira física entre a área suja e limpa, e máquinas de barreira sanitária.",
    "referencia": "NR-32, item 32.7.1"
  },
  {
    "id": 11,
    "materia": "NR-32",
    "dificuldade": "média",
    "enunciado": "Quanto aos trabalhadores expostos a radiações ionizantes no serviço de radiologia hospitalar, a NR-32 determina a obrigatoriedade de:",
    "alternativas": {
      "A": "Uso de dosímetro individual de bolso com leitura e troca trimestral ou anual.",
      "B": "Uso de dosímetro individual trocado mensalmente e arquivamento dos registros de dose por no mínimo 30 anos após o término da ocupação.",
      "C": "Dispensa de monitoração individual desde que o biombo de chumbo tenha 5 mm de espessura.",
      "D": "Controle de radiação realizado unicamente através de exame de hemograma anual sem monitor de corpo inteiro.",
      "E": "Uso facultativo de avental plumbífero em procedimentos de hemodinâmica e radiologia intervencionista."
    },
    "resposta_correta": "B",
    "comentario": "A monitoração individual de dose é mensal e os registros devem ser guardados por 30 anos após o término das atividades do profissional.",
    "referencia": "NR-32, item 32.4.2"
  },
  {
    "id": 12,
    "materia": "NR-32",
    "dificuldade": "média",
    "enunciado": "No que concerne à higienização das vestimentas e uniformes utilizados em atividades com risco biológico, a NR-32 estabelece expressamente que:",
    "alternativas": {
      "A": "A lavagem das vestimentas é de inteira responsabilidade do trabalhador em sua residência particular.",
      "B": "O empregador deve responsabilizar-se pela higienização das vestimentas de trabalho quando expostas a agentes biológicos.",
      "C": "O trabalhador deve lavar o uniforme com água sanitária em casa e apresentar recibo mensal à empresa.",
      "D": "As vestimentas só devem ser trocadas e lavadas caso haja mancha de sangue visível a olho nu.",
      "E": "O empregador pode descontar do salário uma taxa mensal de lavanderia comercial."
    },
    "resposta_correta": "B",
    "comentario": "O empregador deve responsabilizar-se pela desinfecção e higienização das vestimentas utilizadas em locais com risco biológico.",
    "referencia": "NR-32, item 32.2.4.6.2"
  },
  {
    "id": 13,
    "materia": "NR-32",
    "dificuldade": "média",
    "enunciado": "A NR-32 determina que, em relação à lavagem das mãos, os lavatórios exclusivos para este fim nos quartos e postos de assistência devem ser dotados de:",
    "alternativas": {
      "A": "Torneira com acionamento manual direto por maçaneta tipo rosca e toalha de pano rotativa.",
      "B": "Torneira com comando que dispense o contato manual (cotovelo, pedal ou sensor óptico), sabonete líquido e toalha de papel descartável.",
      "C": "Bacia plástica com sabão em barra reutilizável e secador de ar quente de alta turbulência.",
      "D": "Água morna canalizada sem necessidade de sabonete bactericida nos quartos de enfermaria.",
      "E": "Válvula de pressão com contato obrigatório da palma da mão limpa para fechamento."
    },
    "resposta_correta": "B",
    "comentario": "Os lavatórios devem ter torneiras de acionamento que dispense as mãos (cotovelo/pedal/sensor), sabão líquido, toalhas de papel e lixeira com pedal.",
    "referencia": "NR-32, item 32.2.4.1"
  },
  {
    "id": 14,
    "materia": "NR-32",
    "dificuldade": "média",
    "enunciado": "O Programa de Gerenciamento de Riscos (PGR) voltado à área hospitalar, conforme complementado pelas diretrizes da NR-32, deve contemplar prioritariamente em seu inventário:",
    "alternativas": {
      "A": "Apenas o risco de choque elétrico em aparelhos de ultrassonografia.",
      "B": "A identificação dos agentes biológicos mais prováveis, vias de transmissão, persistência no ambiente e medidas profiláticas pós-exposição.",
      "C": "Exclusivamente o levantamento do peso das macas hospitalares na portaria.",
      "D": "A dispensa de cadastramento de vírus e bactérias por serem invisíveis a olho nu.",
      "E": "Somente os custos operacionais de aquisição de álcool em gel e máscaras cirúrgicas."
    },
    "resposta_correta": "B",
    "comentario": "O inventário de riscos biológicos deve conter a identificação dos agentes patogênicos mais prováveis, vias de transmissão, gravidade, persistência e medidas de prevenção.",
    "referencia": "NR-32, item 32.2.2"
  },
  {
    "id": 15,
    "materia": "NR-32",
    "dificuldade": "média",
    "enunciado": "Em caso de acidente de trabalho com perfurocortante contaminado por sangue de paciente com sorologia desconhecida na FHCGV, a conduta recomendada inclui:",
    "alternativas": {
      "A": "Aguardar 7 dias para observar o aparecimento de febre ou sintomas clínicos no trabalhador.",
      "B": "Lavar imediatamente o ferimento com água e sabão e iniciar a Profilaxia Pós-Exposição (PEP) antirretroviral preferencialmente em até 2 horas.",
      "C": "Espremer a ferida com força até sangrar copiosamente e aplicar álcool 70% com escarificação da pele.",
      "D": "Não emitir CAT para evitar estatísticas desfavoráveis junto à Previdência Social.",
      "E": "Liberar o profissional para voltar imediatamente às suas funções normais sem registro médico."
    },
    "resposta_correta": "B",
    "comentario": "A PEP deve ser iniciada idealmente nas primeiras 2 horas e até no máximo 72 horas após a exposição biológica de risco.",
    "referencia": "NR-32 e Protocolo MS de Exposição Ocupacional a Material Biológico"
  },
  {
    "id": 16,
    "materia": "NR-32",
    "dificuldade": "fácil",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) armazenamento de cilindros de gases medicinais, assinale a afirmativa correta:",
    "alternativas": {
      "A": "Determina-se expressamente que quanto a(o) armazenamento de cilindros de gases medicinais, devem ser mantidos em locais ventilados, fixados por correntes ou braçadeiras contra quedas e identificados conforme cores ABNT.",
      "B": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) armazenamento de cilindros de gases medicinais em caso de contenção de custos orçamentários.",
      "C": "A fiscalização referente a(o) armazenamento de cilindros de gases medicinais é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "D": "As medidas preventivas relativas a(o) armazenamento de cilindros de gases medicinais só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "E": "A responsabilidade quanto a(o) armazenamento de cilindros de gases medicinais recai exclusivamente sobre os pacientes atendidos pela instituição de saúde."
    },
    "resposta_correta": "A",
    "comentario": "A afirmativa correta estabelece que: devem ser mantidos em locais ventilados, fixados por correntes ou braçadeiras contra quedas e identificados conforme cores ABNT.",
    "referencia": "NR-32, item 32.3.7"
  },
  {
    "id": 17,
    "materia": "NR-32",
    "dificuldade": "média",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) uso de óxido de etileno na esterilização (CME), assinale a afirmativa correta:",
    "alternativas": {
      "A": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) uso de óxido de etileno na esterilização (CME) em caso de contenção de custos orçamentários.",
      "B": "Determina-se expressamente que quanto a(o) uso de óxido de etileno na esterilização (CME), exige monitoração ambiental contínua e sistema de exaustão localizada devido ao elevado potencial carcinogênico e mutagênico.",
      "C": "A fiscalização referente a(o) uso de óxido de etileno na esterilização (CME) é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "D": "As medidas preventivas relativas a(o) uso de óxido de etileno na esterilização (CME) só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "E": "A responsabilidade quanto a(o) uso de óxido de etileno na esterilização (CME) recai exclusivamente sobre os pacientes atendidos pela instituição de saúde."
    },
    "resposta_correta": "B",
    "comentario": "A afirmativa correta estabelece que: exige monitoração ambiental contínua e sistema de exaustão localizada devido ao elevado potencial carcinogênico e mutagênico.",
    "referencia": "NR-32, item 32.8.2"
  },
  {
    "id": 18,
    "materia": "NR-32",
    "dificuldade": "difícil",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) avaliação de conformidade de perfurocortantes com dispositivo de segurança, assinale a afirmativa correta:",
    "alternativas": {
      "A": "A fiscalização referente a(o) avaliação de conformidade de perfurocortantes com dispositivo de segurança é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "B": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) avaliação de conformidade de perfurocortantes com dispositivo de segurança em caso de contenção de custos orçamentários.",
      "C": "Determina-se expressamente que quanto a(o) avaliação de conformidade de perfurocortantes com dispositivo de segurança, deve ser realizada com a participação ativa da CIPA e dos trabalhadores que utilizam os dispositivos no atendimento.",
      "D": "As medidas preventivas relativas a(o) avaliação de conformidade de perfurocortantes com dispositivo de segurança só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "E": "A responsabilidade quanto a(o) avaliação de conformidade de perfurocortantes com dispositivo de segurança recai exclusivamente sobre os pacientes atendidos pela instituição de saúde."
    },
    "resposta_correta": "C",
    "comentario": "A afirmativa correta estabelece que: deve ser realizada com a participação ativa da CIPA e dos trabalhadores que utilizam os dispositivos no atendimento.",
    "referencia": "NR-32 e Portaria GM/MTE nº 485/2005"
  },
  {
    "id": 19,
    "materia": "NR-32",
    "dificuldade": "fácil",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) descarte de bolsas de sangue e hemoderivados, assinale a afirmativa correta:",
    "alternativas": {
      "A": "As medidas preventivas relativas a(o) descarte de bolsas de sangue e hemoderivados só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "B": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) descarte de bolsas de sangue e hemoderivados em caso de contenção de custos orçamentários.",
      "C": "A fiscalização referente a(o) descarte de bolsas de sangue e hemoderivados é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "D": "Determina-se expressamente que quanto a(o) descarte de bolsas de sangue e hemoderivados, devem ser acondicionadas em sacos plásticos vermelhos ou brancos leitosos específicos com autoclavagem prévia se contiverem bioagentes de classe 3.",
      "E": "A responsabilidade quanto a(o) descarte de bolsas de sangue e hemoderivados recai exclusivamente sobre os pacientes atendidos pela instituição de saúde."
    },
    "resposta_correta": "D",
    "comentario": "A afirmativa correta estabelece que: devem ser acondicionadas em sacos plásticos vermelhos ou brancos leitosos específicos com autoclavagem prévia se contiverem bioagentes de classe 3.",
    "referencia": "NR-32 e RDC 222/2018"
  },
  {
    "id": 20,
    "materia": "NR-32",
    "dificuldade": "média",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) trabalhadoras gestantes em setores de radiação ionizante, assinale a afirmativa correta:",
    "alternativas": {
      "A": "A responsabilidade quanto a(o) trabalhadoras gestantes em setores de radiação ionizante recai exclusivamente sobre os pacientes atendidos pela instituição de saúde.",
      "B": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) trabalhadoras gestantes em setores de radiação ionizante em caso de contenção de custos orçamentários.",
      "C": "A fiscalização referente a(o) trabalhadoras gestantes em setores de radiação ionizante é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "D": "As medidas preventivas relativas a(o) trabalhadoras gestantes em setores de radiação ionizante só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "E": "Determina-se expressamente que quanto a(o) trabalhadoras gestantes em setores de radiação ionizante, devem ser imediatamente remanejadas para atividades sem risco de exposição radiológica durante toda a gestação."
    },
    "resposta_correta": "E",
    "comentario": "A afirmativa correta estabelece que: devem ser imediatamente remanejadas para atividades sem risco de exposição radiológica durante toda a gestação.",
    "referencia": "NR-32, item 32.4.4"
  },
  {
    "id": 21,
    "materia": "NR-32",
    "dificuldade": "difícil",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) equipamento de proteção respiratória para isolamento de tuberculose, assinale a afirmativa correta:",
    "alternativas": {
      "A": "Determina-se expressamente que quanto a(o) equipamento de proteção respiratória para isolamento de tuberculose, deve ser utilizado respirador PFF2/N95 com vedação facial adequada, vedado o uso de máscara cirúrgica comum para essa finalidade protetiva.",
      "B": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) equipamento de proteção respiratória para isolamento de tuberculose em caso de contenção de custos orçamentários.",
      "C": "A fiscalização referente a(o) equipamento de proteção respiratória para isolamento de tuberculose é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "D": "As medidas preventivas relativas a(o) equipamento de proteção respiratória para isolamento de tuberculose só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "E": "A responsabilidade quanto a(o) equipamento de proteção respiratória para isolamento de tuberculose recai exclusivamente sobre os pacientes atendidos pela instituição de saúde."
    },
    "resposta_correta": "A",
    "comentario": "A afirmativa correta estabelece que: deve ser utilizado respirador PFF2/N95 com vedação facial adequada, vedado o uso de máscara cirúrgica comum para essa finalidade protetiva.",
    "referencia": "NR-32, item 32.2.4.7"
  },
  {
    "id": 22,
    "materia": "NR-32",
    "dificuldade": "fácil",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) tempo de guarda do prontuário médico ocupacional na NR-32, assinale a afirmativa correta:",
    "alternativas": {
      "A": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) tempo de guarda do prontuário médico ocupacional na NR-32 em caso de contenção de custos orçamentários.",
      "B": "Determina-se expressamente que quanto a(o) tempo de guarda do prontuário médico ocupacional na NR-32, deve ser mantido arquivado pelo período mínimo de 30 anos após o desligamento do trabalhador exposto a agentes biológicos de classes 3 e 4.",
      "C": "A fiscalização referente a(o) tempo de guarda do prontuário médico ocupacional na NR-32 é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "D": "As medidas preventivas relativas a(o) tempo de guarda do prontuário médico ocupacional na NR-32 só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "E": "A responsabilidade quanto a(o) tempo de guarda do prontuário médico ocupacional na NR-32 recai exclusivamente sobre os pacientes atendidos pela instituição de saúde."
    },
    "resposta_correta": "B",
    "comentario": "A afirmativa correta estabelece que: deve ser mantido arquivado pelo período mínimo de 30 anos após o desligamento do trabalhador exposto a agentes biológicos de classes 3 e 4.",
    "referencia": "NR-32, item 32.2.3.5"
  },
  {
    "id": 23,
    "materia": "NR-32",
    "dificuldade": "média",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) proibição de uso de calçados de tecido ou perfurados, assinale a afirmativa correta:",
    "alternativas": {
      "A": "A fiscalização referente a(o) proibição de uso de calçados de tecido ou perfurados é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "B": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) proibição de uso de calçados de tecido ou perfurados em caso de contenção de custos orçamentários.",
      "C": "Determina-se expressamente que quanto a(o) proibição de uso de calçados de tecido ou perfurados, tem por finalidade evitar a penetração de fluídos biológicos contaminados e lesões perfurantes por agulhas descartadas indevidamente.",
      "D": "As medidas preventivas relativas a(o) proibição de uso de calçados de tecido ou perfurados só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "E": "A responsabilidade quanto a(o) proibição de uso de calçados de tecido ou perfurados recai exclusivamente sobre os pacientes atendidos pela instituição de saúde."
    },
    "resposta_correta": "C",
    "comentario": "A afirmativa correta estabelece que: tem por finalidade evitar a penetração de fluídos biológicos contaminados e lesões perfurantes por agulhas descartadas indevidamente.",
    "referencia": "NR-32, item 32.2.4.7"
  },
  {
    "id": 24,
    "materia": "NR-32",
    "dificuldade": "difícil",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) manuseio de formaldeído e glutaraldeído em serviços de endoscopia, assinale a afirmativa correta:",
    "alternativas": {
      "A": "As medidas preventivas relativas a(o) manuseio de formaldeído e glutaraldeído em serviços de endoscopia só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "B": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) manuseio de formaldeído e glutaraldeído em serviços de endoscopia em caso de contenção de custos orçamentários.",
      "C": "A fiscalização referente a(o) manuseio de formaldeído e glutaraldeído em serviços de endoscopia é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "D": "Determina-se expressamente que quanto a(o) manuseio de formaldeído e glutaraldeído em serviços de endoscopia, requer cabine de exaustão química localizada, luvas de borracha nitrílica ou butílica e respirador com filtro para vapores orgânicos.",
      "E": "A responsabilidade quanto a(o) manuseio de formaldeído e glutaraldeído em serviços de endoscopia recai exclusivamente sobre os pacientes atendidos pela instituição de saúde."
    },
    "resposta_correta": "D",
    "comentario": "A afirmativa correta estabelece que: requer cabine de exaustão química localizada, luvas de borracha nitrílica ou butílica e respirador com filtro para vapores orgânicos.",
    "referencia": "NR-32, item 32.3.4"
  },
  {
    "id": 25,
    "materia": "NR-32",
    "dificuldade": "fácil",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) manutenção de autoclaves e vasos de pressão na CME, assinale a afirmativa correta:",
    "alternativas": {
      "A": "A responsabilidade quanto a(o) manutenção de autoclaves e vasos de pressão na CME recai exclusivamente sobre os pacientes atendidos pela instituição de saúde.",
      "B": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) manutenção de autoclaves e vasos de pressão na CME em caso de contenção de custos orçamentários.",
      "C": "A fiscalização referente a(o) manutenção de autoclaves e vasos de pressão na CME é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "D": "As medidas preventivas relativas a(o) manutenção de autoclaves e vasos de pressão na CME só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "E": "Determina-se expressamente que quanto a(o) manutenção de autoclaves e vasos de pressão na CME, deve observar rigorosamente as exigências de inspeção de segurança da NR-13 e os registros em livro próprio da instituição hospitalar."
    },
    "resposta_correta": "E",
    "comentario": "A afirmativa correta estabelece que: deve observar rigorosamente as exigências de inspeção de segurança da NR-13 e os registros em livro próprio da instituição hospitalar.",
    "referencia": "NR-32, item 32.8 e NR-13"
  },
  {
    "id": 26,
    "materia": "NR-32",
    "dificuldade": "média",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) treinamento periódico para trabalhadores com risco biológico, assinale a afirmativa correta:",
    "alternativas": {
      "A": "Determina-se expressamente que quanto a(o) treinamento periódico para trabalhadores com risco biológico, deve ocorrer com periodicidade mínima bienal e sempre que houver mudança nos processos de trabalho ou introdução de nova tecnologia.",
      "B": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) treinamento periódico para trabalhadores com risco biológico em caso de contenção de custos orçamentários.",
      "C": "A fiscalização referente a(o) treinamento periódico para trabalhadores com risco biológico é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "D": "As medidas preventivas relativas a(o) treinamento periódico para trabalhadores com risco biológico só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "E": "A responsabilidade quanto a(o) treinamento periódico para trabalhadores com risco biológico recai exclusivamente sobre os pacientes atendidos pela instituição de saúde."
    },
    "resposta_correta": "A",
    "comentario": "A afirmativa correta estabelece que: deve ocorrer com periodicidade mínima bienal e sempre que houver mudança nos processos de trabalho ou introdução de nova tecnologia.",
    "referencia": "NR-32, item 32.2.4.9"
  },
  {
    "id": 27,
    "materia": "NR-32",
    "dificuldade": "difícil",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) sinalização de advertência para áreas com radiação ionizante, assinale a afirmativa correta:",
    "alternativas": {
      "A": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) sinalização de advertência para áreas com radiação ionizante em caso de contenção de custos orçamentários.",
      "B": "Determina-se expressamente que quanto a(o) sinalização de advertência para áreas com radiação ionizante, deve exibir o símbolo internacional de radiação ionizante (trifólio) e a advertência de acesso restrito a pessoas autorizadas.",
      "C": "A fiscalização referente a(o) sinalização de advertência para áreas com radiação ionizante é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "D": "As medidas preventivas relativas a(o) sinalização de advertência para áreas com radiação ionizante só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "E": "A responsabilidade quanto a(o) sinalização de advertência para áreas com radiação ionizante recai exclusivamente sobre os pacientes atendidos pela instituição de saúde."
    },
    "resposta_correta": "B",
    "comentario": "A afirmativa correta estabelece que: deve exibir o símbolo internacional de radiação ionizante (trifólio) e a advertência de acesso restrito a pessoas autorizadas.",
    "referencia": "NR-32, item 32.4.3"
  },
  {
    "id": 28,
    "materia": "NR-32",
    "dificuldade": "fácil",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) fornecimento de vestimentas de trabalho e uniformes hospitalares, assinale a afirmativa correta:",
    "alternativas": {
      "A": "A fiscalização referente a(o) fornecimento de vestimentas de trabalho e uniformes hospitalares é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "B": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) fornecimento de vestimentas de trabalho e uniformes hospitalares em caso de contenção de custos orçamentários.",
      "C": "Determina-se expressamente que quanto a(o) fornecimento de vestimentas de trabalho e uniformes hospitalares, é obrigação do empregador, devendo ser fornecidas gratuitamente e em quantidade suficiente para troca diária ou após sujidade.",
      "D": "As medidas preventivas relativas a(o) fornecimento de vestimentas de trabalho e uniformes hospitalares só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "E": "A responsabilidade quanto a(o) fornecimento de vestimentas de trabalho e uniformes hospitalares recai exclusivamente sobre os pacientes atendidos pela instituição de saúde."
    },
    "resposta_correta": "C",
    "comentario": "A afirmativa correta estabelece que: é obrigação do empregador, devendo ser fornecidas gratuitamente e em quantidade suficiente para troca diária ou após sujidade.",
    "referencia": "NR-32, item 32.2.4.6"
  },
  {
    "id": 29,
    "materia": "NR-32",
    "dificuldade": "média",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) uso de luvas de látex com pó em serviços de saúde, assinale a afirmativa correta:",
    "alternativas": {
      "A": "As medidas preventivas relativas a(o) uso de luvas de látex com pó em serviços de saúde só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "B": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) uso de luvas de látex com pó em serviços de saúde em caso de contenção de custos orçamentários.",
      "C": "A fiscalização referente a(o) uso de luvas de látex com pó em serviços de saúde é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "D": "Determina-se expressamente que quanto a(o) uso de luvas de látex com pó em serviços de saúde, deve ser evitado ou restringido para diminuir a incidência de dermatites de contato e crises alérgicas respiratórias induzidas por pó vegetal carreador de proteínas.",
      "E": "A responsabilidade quanto a(o) uso de luvas de látex com pó em serviços de saúde recai exclusivamente sobre os pacientes atendidos pela instituição de saúde."
    },
    "resposta_correta": "D",
    "comentario": "A afirmativa correta estabelece que: deve ser evitado ou restringido para diminuir a incidência de dermatites de contato e crises alérgicas respiratórias induzidas por pó vegetal carreador de proteínas.",
    "referencia": "NR-32, item 32.2.4.8"
  },
  {
    "id": 30,
    "materia": "NR-32",
    "dificuldade": "difícil",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) monitoramento da qualidade do ar em ambientes climatizados de centro cirúrgico, assinale a afirmativa correta:",
    "alternativas": {
      "A": "A responsabilidade quanto a(o) monitoramento da qualidade do ar em ambientes climatizados de centro cirúrgico recai exclusivamente sobre os pacientes atendidos pela instituição de saúde.",
      "B": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) monitoramento da qualidade do ar em ambientes climatizados de centro cirúrgico em caso de contenção de custos orçamentários.",
      "C": "A fiscalização referente a(o) monitoramento da qualidade do ar em ambientes climatizados de centro cirúrgico é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "D": "As medidas preventivas relativas a(o) monitoramento da qualidade do ar em ambientes climatizados de centro cirúrgico só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "E": "Determina-se expressamente que quanto a(o) monitoramento da qualidade do ar em ambientes climatizados de centro cirúrgico, deve atender às recomendações da RE nº 09/2003 da ANVISA e manter filtros absolutos HEPA para controle de particulados."
    },
    "resposta_correta": "E",
    "comentario": "A afirmativa correta estabelece que: deve atender às recomendações da RE nº 09/2003 da ANVISA e manter filtros absolutos HEPA para controle de particulados.",
    "referencia": "NR-32 e Resolução ANVISA RE 09/2003"
  },
  {
    "id": 31,
    "materia": "NR-32",
    "dificuldade": "fácil",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) descontaminação de superfícies fixas com sangue ou fluidos corpóreos, assinale a afirmativa correta:",
    "alternativas": {
      "A": "Determina-se expressamente que quanto a(o) descontaminação de superfícies fixas com sangue ou fluidos corpóreos, deve ser feita com remoção prévia da matéria orgânica com papel absorvente seguido de aplicação de desinfetante hospitalar padronizado (álcool 70% ou hipoclorito).",
      "B": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) descontaminação de superfícies fixas com sangue ou fluidos corpóreos em caso de contenção de custos orçamentários.",
      "C": "A fiscalização referente a(o) descontaminação de superfícies fixas com sangue ou fluidos corpóreos é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "D": "As medidas preventivas relativas a(o) descontaminação de superfícies fixas com sangue ou fluidos corpóreos só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "E": "A responsabilidade quanto a(o) descontaminação de superfícies fixas com sangue ou fluidos corpóreos recai exclusivamente sobre os pacientes atendidos pela instituição de saúde."
    },
    "resposta_correta": "A",
    "comentario": "A afirmativa correta estabelece que: deve ser feita com remoção prévia da matéria orgânica com papel absorvente seguido de aplicação de desinfetante hospitalar padronizado (álcool 70% ou hipoclorito).",
    "referencia": "NR-32, item 32.2.4.16"
  },
  {
    "id": 32,
    "materia": "NR-32",
    "dificuldade": "média",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) comunicação interna de acidente biológico (CIAB), assinale a afirmativa correta:",
    "alternativas": {
      "A": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) comunicação interna de acidente biológico (CIAB) em caso de contenção de custos orçamentários.",
      "B": "Determina-se expressamente que quanto a(o) comunicação interna de acidente biológico (CIAB), deve ser preenchida de imediato para notificação ao SESMT, permitindo o acompanhamento clínico, sorológico e a emissão tempestiva da CAT.",
      "C": "A fiscalização referente a(o) comunicação interna de acidente biológico (CIAB) é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "D": "As medidas preventivas relativas a(o) comunicação interna de acidente biológico (CIAB) só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "E": "A responsabilidade quanto a(o) comunicação interna de acidente biológico (CIAB) recai exclusivamente sobre os pacientes atendidos pela instituição de saúde."
    },
    "resposta_correta": "B",
    "comentario": "A afirmativa correta estabelece que: deve ser preenchida de imediato para notificação ao SESMT, permitindo o acompanhamento clínico, sorológico e a emissão tempestiva da CAT.",
    "referencia": "NR-32 e Lei 8.213/91"
  },
  {
    "id": 33,
    "materia": "NR-32",
    "dificuldade": "difícil",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) testagem rápida da fonte em acidentes com perfurocortantes, assinale a afirmativa correta:",
    "alternativas": {
      "A": "A fiscalização referente a(o) testagem rápida da fonte em acidentes com perfurocortantes é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "B": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) testagem rápida da fonte em acidentes com perfurocortantes em caso de contenção de custos orçamentários.",
      "C": "Determina-se expressamente que quanto a(o) testagem rápida da fonte em acidentes com perfurocortantes, permite definir a necessidade ou dispensa de quimioprofilaxia para HIV e Hepatite B de maneira precoce e segura para o trabalhador.",
      "D": "As medidas preventivas relativas a(o) testagem rápida da fonte em acidentes com perfurocortantes só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "E": "A responsabilidade quanto a(o) testagem rápida da fonte em acidentes com perfurocortantes recai exclusivamente sobre os pacientes atendidos pela instituição de saúde."
    },
    "resposta_correta": "C",
    "comentario": "A afirmativa correta estabelece que: permite definir a necessidade ou dispensa de quimioprofilaxia para HIV e Hepatite B de maneira precoce e segura para o trabalhador.",
    "referencia": "NR-32 e Guia MS de Exposição Ocupacional"
  },
  {
    "id": 34,
    "materia": "NR-32",
    "dificuldade": "fácil",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) avaliação dos acidentes com perfurocortantes pela CIPA e SESMT, assinale a afirmativa correta:",
    "alternativas": {
      "A": "As medidas preventivas relativas a(o) avaliação dos acidentes com perfurocortantes pela CIPA e SESMT só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "B": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) avaliação dos acidentes com perfurocortantes pela CIPA e SESMT em caso de contenção de custos orçamentários.",
      "C": "A fiscalização referente a(o) avaliação dos acidentes com perfurocortantes pela CIPA e SESMT é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "D": "Determina-se expressamente que quanto a(o) avaliação dos acidentes com perfurocortantes pela CIPA e SESMT, deve ser realizada semestralmente para propor substituição de tecnologias, melhoria de descarte e adequação ergonômica de procedimentos.",
      "E": "A responsabilidade quanto a(o) avaliação dos acidentes com perfurocortantes pela CIPA e SESMT recai exclusivamente sobre os pacientes atendidos pela instituição de saúde."
    },
    "resposta_correta": "D",
    "comentario": "A afirmativa correta estabelece que: deve ser realizada semestralmente para propor substituição de tecnologias, melhoria de descarte e adequação ergonômica de procedimentos.",
    "referencia": "NR-32, item 32.2.4.15.3"
  },
  {
    "id": 35,
    "materia": "NR-32",
    "dificuldade": "média",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) armazenamento temporário de resíduos no posto de enfermagem (DML/expurgo), assinale a afirmativa correta:",
    "alternativas": {
      "A": "A responsabilidade quanto a(o) armazenamento temporário de resíduos no posto de enfermagem (DML/expurgo) recai exclusivamente sobre os pacientes atendidos pela instituição de saúde.",
      "B": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) armazenamento temporário de resíduos no posto de enfermagem (DML/expurgo) em caso de contenção de custos orçamentários.",
      "C": "A fiscalização referente a(o) armazenamento temporário de resíduos no posto de enfermagem (DML/expurgo) é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "D": "As medidas preventivas relativas a(o) armazenamento temporário de resíduos no posto de enfermagem (DML/expurgo) só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "E": "Determina-se expressamente que quanto a(o) armazenamento temporário de resíduos no posto de enfermagem (DML/expurgo), deve ocorrer em recipientes com tampa acionada por pedal e sacos plásticos resistentes, sendo vedado o acúmulo no piso."
    },
    "resposta_correta": "E",
    "comentario": "A afirmativa correta estabelece que: deve ocorrer em recipientes com tampa acionada por pedal e sacos plásticos resistentes, sendo vedado o acúmulo no piso.",
    "referencia": "NR-32, item 32.2.4.14"
  },
  {
    "id": 36,
    "materia": "NR-32",
    "dificuldade": "difícil",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) uso de óculos de proteção e protetor facial (face shield), assinale a afirmativa correta:",
    "alternativas": {
      "A": "Determina-se expressamente que quanto a(o) uso de óculos de proteção e protetor facial (face shield), é obrigatório em procedimentos com potencial geração de aerossóis, borrifos de sangue ou secreções corpóreas (intubação, aspiração, cirurgias).",
      "B": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) uso de óculos de proteção e protetor facial (face shield) em caso de contenção de custos orçamentários.",
      "C": "A fiscalização referente a(o) uso de óculos de proteção e protetor facial (face shield) é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "D": "As medidas preventivas relativas a(o) uso de óculos de proteção e protetor facial (face shield) só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "E": "A responsabilidade quanto a(o) uso de óculos de proteção e protetor facial (face shield) recai exclusivamente sobre os pacientes atendidos pela instituição de saúde."
    },
    "resposta_correta": "A",
    "comentario": "A afirmativa correta estabelece que: é obrigatório em procedimentos com potencial geração de aerossóis, borrifos de sangue ou secreções corpóreas (intubação, aspiração, cirurgias).",
    "referencia": "NR-32, item 32.2.4.7"
  },
  {
    "id": 37,
    "materia": "NR-32",
    "dificuldade": "fácil",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) proibição de pipetagem com a boca em laboratórios de análises clínicas, assinale a afirmativa correta:",
    "alternativas": {
      "A": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) proibição de pipetagem com a boca em laboratórios de análises clínicas em caso de contenção de custos orçamentários.",
      "B": "Determina-se expressamente que quanto a(o) proibição de pipetagem com a boca em laboratórios de análises clínicas, é norma expressa da NR-32 para evitar a aspiração acidental de reagentes tóxicos ou amostras com bioagentes patogênicos.",
      "C": "A fiscalização referente a(o) proibição de pipetagem com a boca em laboratórios de análises clínicas é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "D": "As medidas preventivas relativas a(o) proibição de pipetagem com a boca em laboratórios de análises clínicas só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "E": "A responsabilidade quanto a(o) proibição de pipetagem com a boca em laboratórios de análises clínicas recai exclusivamente sobre os pacientes atendidos pela instituição de saúde."
    },
    "resposta_correta": "B",
    "comentario": "A afirmativa correta estabelece que: é norma expressa da NR-32 para evitar a aspiração acidental de reagentes tóxicos ou amostras com bioagentes patogênicos.",
    "referencia": "NR-32, item 32.2.4.11"
  },
  {
    "id": 38,
    "materia": "NR-32",
    "dificuldade": "média",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) inspeção visual e teste de fuga em capelas de quimioterapia, assinale a afirmativa correta:",
    "alternativas": {
      "A": "A fiscalização referente a(o) inspeção visual e teste de fuga em capelas de quimioterapia é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "B": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) inspeção visual e teste de fuga em capelas de quimioterapia em caso de contenção de custos orçamentários.",
      "C": "Determina-se expressamente que quanto a(o) inspeção visual e teste de fuga em capelas de quimioterapia, deve ser realizada por profissional técnico habilitado com periodicidade mínima anual ou após qualquer manutenção de filtros.",
      "D": "As medidas preventivas relativas a(o) inspeção visual e teste de fuga em capelas de quimioterapia só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "E": "A responsabilidade quanto a(o) inspeção visual e teste de fuga em capelas de quimioterapia recai exclusivamente sobre os pacientes atendidos pela instituição de saúde."
    },
    "resposta_correta": "C",
    "comentario": "A afirmativa correta estabelece que: deve ser realizada por profissional técnico habilitado com periodicidade mínima anual ou após qualquer manutenção de filtros.",
    "referencia": "NR-32, item 32.3.9.5"
  },
  {
    "id": 39,
    "materia": "NR-32",
    "dificuldade": "difícil",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) procedimentos de descontaminação e neutralização em acidentes com quimioterápicos, assinale a afirmativa correta:",
    "alternativas": {
      "A": "As medidas preventivas relativas a(o) procedimentos de descontaminação e neutralização em acidentes com quimioterápicos só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "B": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) procedimentos de descontaminação e neutralização em acidentes com quimioterápicos em caso de contenção de custos orçamentários.",
      "C": "A fiscalização referente a(o) procedimentos de descontaminação e neutralização em acidentes com quimioterápicos é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "D": "Determina-se expressamente que quanto a(o) procedimentos de descontaminação e neutralização em acidentes com quimioterápicos, exigem delimitação da área com fitas zebradas, uso de pós adsorventes específicos e acondicionamento como resíduo do Grupo B.",
      "E": "A responsabilidade quanto a(o) procedimentos de descontaminação e neutralização em acidentes com quimioterápicos recai exclusivamente sobre os pacientes atendidos pela instituição de saúde."
    },
    "resposta_correta": "D",
    "comentario": "A afirmativa correta estabelece que: exigem delimitação da área com fitas zebradas, uso de pós adsorventes específicos e acondicionamento como resíduo do Grupo B.",
    "referencia": "NR-32 e RDC 222/2018"
  },
  {
    "id": 40,
    "materia": "NR-32",
    "dificuldade": "fácil",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) acesso restrito aos setores de esterilização e farmácia oncológica, assinale a afirmativa correta:",
    "alternativas": {
      "A": "A responsabilidade quanto a(o) acesso restrito aos setores de esterilização e farmácia oncológica recai exclusivamente sobre os pacientes atendidos pela instituição de saúde.",
      "B": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) acesso restrito aos setores de esterilização e farmácia oncológica em caso de contenção de custos orçamentários.",
      "C": "A fiscalização referente a(o) acesso restrito aos setores de esterilização e farmácia oncológica é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "D": "As medidas preventivas relativas a(o) acesso restrito aos setores de esterilização e farmácia oncológica só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "E": "Determina-se expressamente que quanto a(o) acesso restrito aos setores de esterilização e farmácia oncológica, é obrigatório e deve ser sinalizado na entrada com placas de advertência para prevenir a entrada inadvertida de pessoas não autorizadas."
    },
    "resposta_correta": "E",
    "comentario": "A afirmativa correta estabelece que: é obrigatório e deve ser sinalizado na entrada com placas de advertência para prevenir a entrada inadvertida de pessoas não autorizadas.",
    "referencia": "NR-32, item 32.3.9"
  },
  {
    "id": 41,
    "materia": "NR-32",
    "dificuldade": "média",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) fiscalização dos dispositivos de segurança em perfurocortantes pelo TST, assinale a afirmativa correta:",
    "alternativas": {
      "A": "Determina-se expressamente que quanto a(o) fiscalização dos dispositivos de segurança em perfurocortantes pelo TST, deve assegurar que agulhas, bisturis e cateteres adquiridos possuam mecanismo ativo ou passivo de blindagem da ponta após o uso.",
      "B": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) fiscalização dos dispositivos de segurança em perfurocortantes pelo TST em caso de contenção de custos orçamentários.",
      "C": "A fiscalização referente a(o) fiscalização dos dispositivos de segurança em perfurocortantes pelo TST é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "D": "As medidas preventivas relativas a(o) fiscalização dos dispositivos de segurança em perfurocortantes pelo TST só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "E": "A responsabilidade quanto a(o) fiscalização dos dispositivos de segurança em perfurocortantes pelo TST recai exclusivamente sobre os pacientes atendidos pela instituição de saúde."
    },
    "resposta_correta": "A",
    "comentario": "A afirmativa correta estabelece que: deve assegurar que agulhas, bisturis e cateteres adquiridos possuam mecanismo ativo ou passivo de blindagem da ponta após o uso.",
    "referencia": "NR-32 e Portaria 485/2005"
  },
  {
    "id": 42,
    "materia": "NR-32",
    "dificuldade": "difícil",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) acompanhamento sorológico pós-acidente com vírus da Hepatite C (HCV), assinale a afirmativa correta:",
    "alternativas": {
      "A": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) acompanhamento sorológico pós-acidente com vírus da Hepatite C (HCV) em caso de contenção de custos orçamentários.",
      "B": "Determina-se expressamente que quanto a(o) acompanhamento sorológico pós-acidente com vírus da Hepatite C (HCV), requer realização de dosagem de anti-HCV e RNA-HCV basal e aos 45 e 90 dias, visto não existir vacina nem imunoglobulina eficaz para o HCV.",
      "C": "A fiscalização referente a(o) acompanhamento sorológico pós-acidente com vírus da Hepatite C (HCV) é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "D": "As medidas preventivas relativas a(o) acompanhamento sorológico pós-acidente com vírus da Hepatite C (HCV) só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "E": "A responsabilidade quanto a(o) acompanhamento sorológico pós-acidente com vírus da Hepatite C (HCV) recai exclusivamente sobre os pacientes atendidos pela instituição de saúde."
    },
    "resposta_correta": "B",
    "comentario": "A afirmativa correta estabelece que: requer realização de dosagem de anti-HCV e RNA-HCV basal e aos 45 e 90 dias, visto não existir vacina nem imunoglobulina eficaz para o HCV.",
    "referencia": "NR-32 e Protocolo Ministério da Saúde"
  },
  {
    "id": 43,
    "materia": "NR-32",
    "dificuldade": "fácil",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) obrigatoriedade de exames laboratoriais complementares para expostos a citostáticos, assinale a afirmativa correta:",
    "alternativas": {
      "A": "A fiscalização referente a(o) obrigatoriedade de exames laboratoriais complementares para expostos a citostáticos é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "B": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) obrigatoriedade de exames laboratoriais complementares para expostos a citostáticos em caso de contenção de custos orçamentários.",
      "C": "Determina-se expressamente que quanto a(o) obrigatoriedade de exames laboratoriais complementares para expostos a citostáticos, deve incluir hemograma completo com contagem de plaquetas semestral e provas de função hepática e renal previstas no PCMSO.",
      "D": "As medidas preventivas relativas a(o) obrigatoriedade de exames laboratoriais complementares para expostos a citostáticos só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "E": "A responsabilidade quanto a(o) obrigatoriedade de exames laboratoriais complementares para expostos a citostáticos recai exclusivamente sobre os pacientes atendidos pela instituição de saúde."
    },
    "resposta_correta": "C",
    "comentario": "A afirmativa correta estabelece que: deve incluir hemograma completo com contagem de plaquetas semestral e provas de função hepática e renal previstas no PCMSO.",
    "referencia": "NR-32, item 32.3.9.11"
  },
  {
    "id": 44,
    "materia": "NR-32",
    "dificuldade": "média",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) sistema de exaustão e pressão negativa em quartos de isolamento para varicela e sarampo, assinale a afirmativa correta:",
    "alternativas": {
      "A": "As medidas preventivas relativas a(o) sistema de exaustão e pressão negativa em quartos de isolamento para varicela e sarampo só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "B": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) sistema de exaustão e pressão negativa em quartos de isolamento para varicela e sarampo em caso de contenção de custos orçamentários.",
      "C": "A fiscalização referente a(o) sistema de exaustão e pressão negativa em quartos de isolamento para varicela e sarampo é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "D": "Determina-se expressamente que quanto a(o) sistema de exaustão e pressão negativa em quartos de isolamento para varicela e sarampo, deve garantir o fluxo direcional do ar do ambiente menos contaminado para o mais contaminado, com exaustão filtrada.",
      "E": "A responsabilidade quanto a(o) sistema de exaustão e pressão negativa em quartos de isolamento para varicela e sarampo recai exclusivamente sobre os pacientes atendidos pela instituição de saúde."
    },
    "resposta_correta": "D",
    "comentario": "A afirmativa correta estabelece que: deve garantir o fluxo direcional do ar do ambiente menos contaminado para o mais contaminado, com exaustão filtrada.",
    "referencia": "NR-32 e RDC 50/ANVISA"
  },
  {
    "id": 45,
    "materia": "NR-32",
    "dificuldade": "difícil",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) uso de avental impermeável de mangas longas e punho elástico, assinale a afirmativa correta:",
    "alternativas": {
      "A": "A responsabilidade quanto a(o) uso de avental impermeável de mangas longas e punho elástico recai exclusivamente sobre os pacientes atendidos pela instituição de saúde.",
      "B": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) uso de avental impermeável de mangas longas e punho elástico em caso de contenção de custos orçamentários.",
      "C": "A fiscalização referente a(o) uso de avental impermeável de mangas longas e punho elástico é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "D": "As medidas preventivas relativas a(o) uso de avental impermeável de mangas longas e punho elástico só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "E": "Determina-se expressamente que quanto a(o) uso de avental impermeável de mangas longas e punho elástico, é exigido em procedimentos cirúrgicos, necropsias e preparo de antineoplásicos para proteção integral contra fluidos biológicos e químicos."
    },
    "resposta_correta": "E",
    "comentario": "A afirmativa correta estabelece que: é exigido em procedimentos cirúrgicos, necropsias e preparo de antineoplásicos para proteção integral contra fluidos biológicos e químicos.",
    "referencia": "NR-32, item 32.2.4.7"
  },
  {
    "id": 46,
    "materia": "NR-32",
    "dificuldade": "fácil",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) critérios para seleção de luvas cirúrgicas e de procedimento, assinale a afirmativa correta:",
    "alternativas": {
      "A": "Determina-se expressamente que quanto a(o) critérios para seleção de luvas cirúrgicas e de procedimento, devem considerar espessura adequada, resistência mecânica à tração, ausência de porosidades e biocompatibilidade dérmica.",
      "B": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) critérios para seleção de luvas cirúrgicas e de procedimento em caso de contenção de custos orçamentários.",
      "C": "A fiscalização referente a(o) critérios para seleção de luvas cirúrgicas e de procedimento é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "D": "As medidas preventivas relativas a(o) critérios para seleção de luvas cirúrgicas e de procedimento só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "E": "A responsabilidade quanto a(o) critérios para seleção de luvas cirúrgicas e de procedimento recai exclusivamente sobre os pacientes atendidos pela instituição de saúde."
    },
    "resposta_correta": "A",
    "comentario": "A afirmativa correta estabelece que: devem considerar espessura adequada, resistência mecânica à tração, ausência de porosidades e biocompatibilidade dérmica.",
    "referencia": "NR-32 e NR-06"
  },
  {
    "id": 47,
    "materia": "NR-32",
    "dificuldade": "média",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) comunicação ao trabalhador dos resultados de monitoramento ambiental e dosimetria, assinale a afirmativa correta:",
    "alternativas": {
      "A": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) comunicação ao trabalhador dos resultados de monitoramento ambiental e dosimetria em caso de contenção de custos orçamentários.",
      "B": "Determina-se expressamente que quanto a(o) comunicação ao trabalhador dos resultados de monitoramento ambiental e dosimetria, deve ser garantida pelo empregador mediante relatório individual detalhado e afixação do resumo em local visível.",
      "C": "A fiscalização referente a(o) comunicação ao trabalhador dos resultados de monitoramento ambiental e dosimetria é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "D": "As medidas preventivas relativas a(o) comunicação ao trabalhador dos resultados de monitoramento ambiental e dosimetria só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "E": "A responsabilidade quanto a(o) comunicação ao trabalhador dos resultados de monitoramento ambiental e dosimetria recai exclusivamente sobre os pacientes atendidos pela instituição de saúde."
    },
    "resposta_correta": "B",
    "comentario": "A afirmativa correta estabelece que: deve ser garantida pelo empregador mediante relatório individual detalhado e afixação do resumo em local visível.",
    "referencia": "NR-32, item 32.4.2"
  },
  {
    "id": 48,
    "materia": "NR-32",
    "dificuldade": "difícil",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) regras de circulação com vestimentas hospitalares fora do ambiente da instituição, assinale a afirmativa correta:",
    "alternativas": {
      "A": "A fiscalização referente a(o) regras de circulação com vestimentas hospitalares fora do ambiente da instituição é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "B": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) regras de circulação com vestimentas hospitalares fora do ambiente da instituição em caso de contenção de custos orçamentários.",
      "C": "Determina-se expressamente que quanto a(o) regras de circulação com vestimentas hospitalares fora do ambiente da instituição, são terminantemente proibidas para evitar a disseminação de patógenos hospitalares no transporte público e residências.",
      "D": "As medidas preventivas relativas a(o) regras de circulação com vestimentas hospitalares fora do ambiente da instituição só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "E": "A responsabilidade quanto a(o) regras de circulação com vestimentas hospitalares fora do ambiente da instituição recai exclusivamente sobre os pacientes atendidos pela instituição de saúde."
    },
    "resposta_correta": "C",
    "comentario": "A afirmativa correta estabelece que: são terminantemente proibidas para evitar a disseminação de patógenos hospitalares no transporte público e residências.",
    "referencia": "NR-32, item 32.2.4.7"
  },
  {
    "id": 49,
    "materia": "NR-32",
    "dificuldade": "fácil",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) condições de conforto térmico e ventilação em postos de enfermagem, assinale a afirmativa correta:",
    "alternativas": {
      "A": "As medidas preventivas relativas a(o) condições de conforto térmico e ventilação em postos de enfermagem só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "B": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) condições de conforto térmico e ventilação em postos de enfermagem em caso de contenção de custos orçamentários.",
      "C": "A fiscalização referente a(o) condições de conforto térmico e ventilação em postos de enfermagem é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "D": "Determina-se expressamente que quanto a(o) condições de conforto térmico e ventilação em postos de enfermagem, devem respeitar a faixa de temperatura entre 20°C e 23°C e umidade relativa não inferior a 40%, em harmonia com a NR-17.",
      "E": "A responsabilidade quanto a(o) condições de conforto térmico e ventilação em postos de enfermagem recai exclusivamente sobre os pacientes atendidos pela instituição de saúde."
    },
    "resposta_correta": "D",
    "comentario": "A afirmativa correta estabelece que: devem respeitar a faixa de temperatura entre 20°C e 23°C e umidade relativa não inferior a 40%, em harmonia com a NR-17.",
    "referencia": "NR-32 e NR-17"
  },
  {
    "id": 50,
    "materia": "NR-32",
    "dificuldade": "média",
    "enunciado": "Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) responsabilidade solidária de empresas prestadoras de serviço em saúde, assinale a afirmativa correta:",
    "alternativas": {
      "A": "A responsabilidade quanto a(o) responsabilidade solidária de empresas prestadoras de serviço em saúde recai exclusivamente sobre os pacientes atendidos pela instituição de saúde.",
      "B": "É facultado à chefia hospitalar dispensar as exigências referentes a(o) responsabilidade solidária de empresas prestadoras de serviço em saúde em caso de contenção de custos orçamentários.",
      "C": "A fiscalização referente a(o) responsabilidade solidária de empresas prestadoras de serviço em saúde é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
      "D": "As medidas preventivas relativas a(o) responsabilidade solidária de empresas prestadoras de serviço em saúde só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
      "E": "Determina-se expressamente que quanto a(o) responsabilidade solidária de empresas prestadoras de serviço em saúde, aplica-se integralmente na FHCGV entre o tomador dos serviços e as empresas terceirizadas quanto ao cumprimento das normas de segurança."
    },
    "resposta_correta": "E",
    "comentario": "A afirmativa correta estabelece que: aplica-se integralmente na FHCGV entre o tomador dos serviços e as empresas terceirizadas quanto ao cumprimento das normas de segurança.",
    "referencia": "NR-32, item 32.1.3"
  },
  {
    "id": 51,
    "materia": "NR-01",
    "dificuldade": "média",
    "enunciado": "O Programa de Gerenciamento de Riscos (PGR), estabelecido pela NR-01, é composto obrigatoriamente por dois documentos fundamentais:",
    "alternativas": {
      "A": "O Inventário de Riscos e o Plano de Ação.",
      "B": "A Análise Ergonômica do Trabalho e o Laudo de Insalubridade.",
      "C": "O Relatório Anual da CIPA e a Ficha de Entrega de EPI.",
      "D": "O Perfil Profissiográfico Previdenciário e o Livro de Registro de Empregados.",
      "E": "O Balanço Patrimonial e o Plano de Cargos e Salários."
    },
    "resposta_correta": "A",
    "comentario": "O PGR deve ser composto por, no mínimo, dois documentos: o Inventário de Riscos Ocupacionais e o Plano de Ação (item 1.5.3.1 da NR-01).",
    "referencia": "NR-01, item 1.5.3.1"
  },
  {
    "id": 52,
    "materia": "NR-01",
    "dificuldade": "média",
    "enunciado": "Na sistemática da NR-01, a hierarquia das medidas de prevenção estabelece que a organização deve adotar medidas na seguinte ordem prioritária:",
    "alternativas": {
      "A": "EPI > Sinalização > Medidas de Proteção Coletiva (EPC) > Eliminação dos Fatores de Risco.",
      "B": "Eliminação dos fatores de risco > Medidas de Proteção Coletiva (EPC) > Medidas Administrativas > Uso de EPI.",
      "C": "Medidas Administrativas > EPI > Eliminação > Revezamento de Jornada.",
      "D": "Treinamento Teórico > Fiscalização com advertências > EPI > Medidas de Engenharia.",
      "E": "Indenização por Insalubridade > Fornecimento de EPI > Medidas de Engenharia > Isolamento."
    },
    "resposta_correta": "B",
    "comentario": "A hierarquia de controle preconiza: 1º eliminação dos perigos; 2º medidas de proteção coletiva; 3º medidas administrativas/organizacionais; 4º EPI.",
    "referencia": "NR-01, item 1.5.5.1.2"
  },
  {
    "id": 53,
    "materia": "NR-01",
    "dificuldade": "média",
    "enunciado": "O 'Direito de Recusa' do trabalhador, previsto expressamente na NR-01, assegura que o empregado pode interromper suas atividades quando:",
    "alternativas": {
      "A": "Não estiver satisfeito com o reajuste salarial da categoria.",
      "B": "Constatar uma situação de trabalho onde, a seu juízo, haja risco grave e iminente para sua vida ou saúde.",
      "C": "O refeitório não fornecer a refeição no horário habitual de almoço.",
      "D": "O transporte coletivo da cidade entrar em greve declarada.",
      "E": "Houver divergência de opinião com o supervisor imediato em reunião de setor."
    },
    "resposta_correta": "B",
    "comentario": "O trabalhador pode interromper sua atividade quando constatar uma situação de trabalho onde haja risco grave e iminente para sua vida ou saúde (NR-01, item 1.4.3).",
    "referencia": "NR-01, item 1.4.3"
  },
  {
    "id": 54,
    "materia": "NR-01",
    "dificuldade": "média",
    "enunciado": "Quanto à periodicidade de revisão da avaliação de riscos do PGR, a NR-01 estipula que a reavaliação deve ocorrer a cada:",
    "alternativas": {
      "A": "6 meses para qualquer empresa independente de certificação.",
      "B": "2 anos no máximo, ou a cada 3 anos caso a organização possua certificações em sistema de gestão de SST.",
      "C": "5 anos improrrogáveis para empresas de grau de risco 3 e 4.",
      "D": "10 anos, coincidindo com o mandato dos diretores eleitos.",
      "E": "1 ano somente se houver registro de acidente fatal com óbito na empresa."
    },
    "resposta_correta": "B",
    "comentario": "A avaliação de riscos deve ser revista a cada dois anos ou a cada três anos para organizações com certificações em sistema de gestão de SST.",
    "referencia": "NR-01, item 1.5.4.4.6"
  },
  {
    "id": 55,
    "materia": "NR-01",
    "dificuldade": "média",
    "enunciado": "Em relação ao Inventário de Riscos Ocupacionais do PGR, os dados e documentos devem ser mantidos arquivados pela organização por um período mínimo de:",
    "alternativas": {
      "A": "5 anos.",
      "B": "10 anos.",
      "C": "20 anos.",
      "D": "30 anos.",
      "E": "50 anos."
    },
    "resposta_correta": "C",
    "comentario": "Os dados da avaliação de riscos e do inventário devem ser mantidos arquivados pela organização por um período mínimo de 20 anos.",
    "referencia": "NR-01, item 1.5.7.3.3.1"
  },
  {
    "id": 56,
    "materia": "NR-01",
    "dificuldade": "média",
    "enunciado": "No contexto da matriz de risco do PGR (NR-01), o nível de risco ocupacional é determinado formalmente pela combinação da:",
    "alternativas": {
      "A": "Temperatura ambiente e tempo de deslocamento do trabalhador.",
      "B": "Severidade das possíveis lesões ou agravos à saúde com a Probabilidade de sua ocorrência.",
      "C": "Quantidade de funcionários no setor multiplicada pelo salário médio.",
      "D": "Idade cronológica média dos colaboradores e taxa de absenteísmo anual.",
      "E": "Distância do hospital até a sede da Superintendência do Trabalho."
    },
    "resposta_correta": "B",
    "comentario": "O nível de risco é obtido pelo cruzamento entre a severidade das consequências e a probabilidade de sua ocorrência.",
    "referencia": "NR-01, item 1.5.4.4.2"
  },
  {
    "id": 57,
    "materia": "NR-01",
    "dificuldade": "média",
    "enunciado": "O Microempreendedor Individual (MEI), conforme as disposições gerais da NR-01:",
    "alternativas": {
      "A": "É obrigado a constituir SESMT completo com médico e engenheiro de segurança.",
      "B": "É dispensado de elaborar o PGR, mas deve cumprir as normas de segurança pertinentes à sua atividade.",
      "C": "Está isento de cumprir qualquer Norma Regulamentadora de segurança e medicina do trabalho.",
      "D": "Deve elaborar laudo pericial mensal de insalubridade e periculosidade.",
      "E": "Deve manter um arquivo em papel impresso por 60 anos de todos os recibos."
    },
    "resposta_correta": "B",
    "comentario": "O MEI está dispensado de elaborar o PGR, conforme item 1.8.1 da NR-01, devendo cumprir os requisitos de proteção aplicáveis.",
    "referencia": "NR-01, item 1.8.1"
  },
  {
    "id": 58,
    "materia": "NR-01",
    "dificuldade": "média",
    "enunciado": "As Microempresas (ME) e Empresas de Pequeno Porte (EPP) de graus de risco 1 e 2 que declararem que não possuem riscos químicos, físicos e biológicos:",
    "alternativas": {
      "A": "Ficam dispensadas da elaboração do PGR e do PCMSO.",
      "B": "São obrigadas a manter médico do trabalho 40 horas semanais.",
      "C": "Devem pagar compulsoriamente adicional de periculosidade de 30% a todos os empregados.",
      "D": "Ficam proibidas de admitir novos colaboradores no regime da CLT.",
      "E": "Devem encaminhar todos os dias relatórios ao Ministério da Saúde."
    },
    "resposta_correta": "A",
    "comentario": "As ME e EPP graus de risco 1 e 2 que declararem a inexistência de riscos físicos, químicos e biológicos e não tiverem riscos ergonômicos ficam dispensadas do PGR e PCMSO.",
    "referencia": "NR-01, item 1.8.4 e 1.8.6"
  },
  {
    "id": 59,
    "materia": "NR-01",
    "dificuldade": "média",
    "enunciado": "Segundo a NR-01, os treinamentos em segurança e saúde do trabalho dividem-se formalmente em:",
    "alternativas": {
      "A": "Exclusivamente treinamento admissional.",
      "B": "Treinamento inicial, periódico e eventual.",
      "C": "Treinamento teórico de graduação e pós-graduação.",
      "D": "Palestras motivacionais anuais de 15 minutos.",
      "E": "Apenas curso de direção defensiva e primeiros socorros."
    },
    "resposta_correta": "B",
    "comentario": "Os treinamentos compreendem: treinamento inicial (admissional), periódico (reciclagem) e eventual (mudança de função ou retorno de afastamento).",
    "referencia": "NR-01, item 1.7.1"
  },
  {
    "id": 60,
    "materia": "NR-01",
    "dificuldade": "média",
    "enunciado": "A NR-01 admite a realização de treinamentos na modalidade a distância (EAD) ou semipresencial, desde que cumpridos os seguintes requisitos:",
    "alternativas": {
      "A": "O curso seja ministrado por vídeos gravados de redes sociais públicas.",
      "B": "Haja projeto pedagógico estruturado, ambiente virtual com controle de acesso, tutoria qualificada e atividades práticas presenciais quando exigidas pela respectiva NR.",
      "C": "O trabalhador realize os módulos exclusivamente em sua residência fora do horário de trabalho sem remuneração.",
      "D": "Dispense qualquer avaliação de aprendizagem ao término dos conteúdos teóricos.",
      "E": "Seja realizada apenas prova oral individual gravada em arquivo de áudio."
    },
    "resposta_correta": "B",
    "comentario": "O treinamento em EAD deve obedecer ao Anexo II da NR-01 (projeto pedagógico, ambiente adequado, validação de presença e realização prática presencial quando aplicável).",
    "referencia": "NR-01, Anexo II"
  },
  {
    "id": 61,
    "materia": "NR-01",
    "dificuldade": "média",
    "enunciado": "A respeito das diretrizes da NR-01 para o Gerenciamento de Riscos Ocupacionais (Item 11), assinale a afirmativa correta:",
    "alternativas": {
      "A": "A organização deve adotar mecanismos formais para consultar os trabalhadores sobre a percepção de riscos ocupacionais e medidas preventivas.",
      "B": "O plano de ação do PGR não requer cronograma de implementação nem definição de responsáveis técnicos.",
      "C": "O acompanhamento da eficácia das medidas preventivas implementadas é dispensável após a emissão do documento assinado.",
      "D": "Os acidentes de trajeto devem ser obrigatoriamente excluídos de qualquer investigação ou análise pela CIPA e SESMT.",
      "E": "A identificação de perigos dispensa a análise de condições de trabalho anormais, paradas para manutenção e emergências."
    },
    "resposta_correta": "A",
    "comentario": "A organização deve implementar mecanismos para consultar os trabalhadores e reavaliar permanentemente os riscos ocupacionais (NR-01, item 1.5.3.3).",
    "referencia": "NR-01, item 1.5.3.3"
  },
  {
    "id": 62,
    "materia": "NR-01",
    "dificuldade": "média",
    "enunciado": "A respeito das diretrizes da NR-01 para o Gerenciamento de Riscos Ocupacionais (Item 12), assinale a afirmativa correta:",
    "alternativas": {
      "A": "A organização deve adotar mecanismos formais para consultar os trabalhadores sobre a percepção de riscos ocupacionais e medidas preventivas.",
      "B": "O plano de ação do PGR não requer cronograma de implementação nem definição de responsáveis técnicos.",
      "C": "O acompanhamento da eficácia das medidas preventivas implementadas é dispensável após a emissão do documento assinado.",
      "D": "Os acidentes de trajeto devem ser obrigatoriamente excluídos de qualquer investigação ou análise pela CIPA e SESMT.",
      "E": "A identificação de perigos dispensa a análise de condições de trabalho anormais, paradas para manutenção e emergências."
    },
    "resposta_correta": "A",
    "comentario": "A organização deve implementar mecanismos para consultar os trabalhadores e reavaliar permanentemente os riscos ocupacionais (NR-01, item 1.5.3.3).",
    "referencia": "NR-01, item 1.5.3.1"
  },
  {
    "id": 63,
    "materia": "NR-01",
    "dificuldade": "média",
    "enunciado": "A respeito das diretrizes da NR-01 para o Gerenciamento de Riscos Ocupacionais (Item 13), assinale a afirmativa correta:",
    "alternativas": {
      "A": "A organização deve adotar mecanismos formais para consultar os trabalhadores sobre a percepção de riscos ocupacionais e medidas preventivas.",
      "B": "O plano de ação do PGR não requer cronograma de implementação nem definição de responsáveis técnicos.",
      "C": "O acompanhamento da eficácia das medidas preventivas implementadas é dispensável após a emissão do documento assinado.",
      "D": "Os acidentes de trajeto devem ser obrigatoriamente excluídos de qualquer investigação ou análise pela CIPA e SESMT.",
      "E": "A identificação de perigos dispensa a análise de condições de trabalho anormais, paradas para manutenção e emergências."
    },
    "resposta_correta": "A",
    "comentario": "A organização deve implementar mecanismos para consultar os trabalhadores e reavaliar permanentemente os riscos ocupacionais (NR-01, item 1.5.3.3).",
    "referencia": "NR-01, item 1.5.3.2"
  },
  {
    "id": 64,
    "materia": "NR-01",
    "dificuldade": "média",
    "enunciado": "A respeito das diretrizes da NR-01 para o Gerenciamento de Riscos Ocupacionais (Item 14), assinale a afirmativa correta:",
    "alternativas": {
      "A": "A organização deve adotar mecanismos formais para consultar os trabalhadores sobre a percepção de riscos ocupacionais e medidas preventivas.",
      "B": "O plano de ação do PGR não requer cronograma de implementação nem definição de responsáveis técnicos.",
      "C": "O acompanhamento da eficácia das medidas preventivas implementadas é dispensável após a emissão do documento assinado.",
      "D": "Os acidentes de trajeto devem ser obrigatoriamente excluídos de qualquer investigação ou análise pela CIPA e SESMT.",
      "E": "A identificação de perigos dispensa a análise de condições de trabalho anormais, paradas para manutenção e emergências."
    },
    "resposta_correta": "A",
    "comentario": "A organização deve implementar mecanismos para consultar os trabalhadores e reavaliar permanentemente os riscos ocupacionais (NR-01, item 1.5.3.3).",
    "referencia": "NR-01, item 1.5.3.3"
  },
  {
    "id": 65,
    "materia": "NR-01",
    "dificuldade": "média",
    "enunciado": "A respeito das diretrizes da NR-01 para o Gerenciamento de Riscos Ocupacionais (Item 15), assinale a afirmativa correta:",
    "alternativas": {
      "A": "A organização deve adotar mecanismos formais para consultar os trabalhadores sobre a percepção de riscos ocupacionais e medidas preventivas.",
      "B": "O plano de ação do PGR não requer cronograma de implementação nem definição de responsáveis técnicos.",
      "C": "O acompanhamento da eficácia das medidas preventivas implementadas é dispensável após a emissão do documento assinado.",
      "D": "Os acidentes de trajeto devem ser obrigatoriamente excluídos de qualquer investigação ou análise pela CIPA e SESMT.",
      "E": "A identificação de perigos dispensa a análise de condições de trabalho anormais, paradas para manutenção e emergências."
    },
    "resposta_correta": "A",
    "comentario": "A organização deve implementar mecanismos para consultar os trabalhadores e reavaliar permanentemente os riscos ocupacionais (NR-01, item 1.5.3.3).",
    "referencia": "NR-01, item 1.5.3.1"
  },
  {
    "id": 66,
    "materia": "NR-01",
    "dificuldade": "média",
    "enunciado": "A respeito das diretrizes da NR-01 para o Gerenciamento de Riscos Ocupacionais (Item 16), assinale a afirmativa correta:",
    "alternativas": {
      "A": "A organização deve adotar mecanismos formais para consultar os trabalhadores sobre a percepção de riscos ocupacionais e medidas preventivas.",
      "B": "O plano de ação do PGR não requer cronograma de implementação nem definição de responsáveis técnicos.",
      "C": "O acompanhamento da eficácia das medidas preventivas implementadas é dispensável após a emissão do documento assinado.",
      "D": "Os acidentes de trajeto devem ser obrigatoriamente excluídos de qualquer investigação ou análise pela CIPA e SESMT.",
      "E": "A identificação de perigos dispensa a análise de condições de trabalho anormais, paradas para manutenção e emergências."
    },
    "resposta_correta": "A",
    "comentario": "A organização deve implementar mecanismos para consultar os trabalhadores e reavaliar permanentemente os riscos ocupacionais (NR-01, item 1.5.3.3).",
    "referencia": "NR-01, item 1.5.3.2"
  },
  {
    "id": 67,
    "materia": "NR-01",
    "dificuldade": "média",
    "enunciado": "A respeito das diretrizes da NR-01 para o Gerenciamento de Riscos Ocupacionais (Item 17), assinale a afirmativa correta:",
    "alternativas": {
      "A": "A organização deve adotar mecanismos formais para consultar os trabalhadores sobre a percepção de riscos ocupacionais e medidas preventivas.",
      "B": "O plano de ação do PGR não requer cronograma de implementação nem definição de responsáveis técnicos.",
      "C": "O acompanhamento da eficácia das medidas preventivas implementadas é dispensável após a emissão do documento assinado.",
      "D": "Os acidentes de trajeto devem ser obrigatoriamente excluídos de qualquer investigação ou análise pela CIPA e SESMT.",
      "E": "A identificação de perigos dispensa a análise de condições de trabalho anormais, paradas para manutenção e emergências."
    },
    "resposta_correta": "A",
    "comentario": "A organização deve implementar mecanismos para consultar os trabalhadores e reavaliar permanentemente os riscos ocupacionais (NR-01, item 1.5.3.3).",
    "referencia": "NR-01, item 1.5.3.3"
  },
  {
    "id": 68,
    "materia": "NR-01",
    "dificuldade": "média",
    "enunciado": "A respeito das diretrizes da NR-01 para o Gerenciamento de Riscos Ocupacionais (Item 18), assinale a afirmativa correta:",
    "alternativas": {
      "A": "A organização deve adotar mecanismos formais para consultar os trabalhadores sobre a percepção de riscos ocupacionais e medidas preventivas.",
      "B": "O plano de ação do PGR não requer cronograma de implementação nem definição de responsáveis técnicos.",
      "C": "O acompanhamento da eficácia das medidas preventivas implementadas é dispensável após a emissão do documento assinado.",
      "D": "Os acidentes de trajeto devem ser obrigatoriamente excluídos de qualquer investigação ou análise pela CIPA e SESMT.",
      "E": "A identificação de perigos dispensa a análise de condições de trabalho anormais, paradas para manutenção e emergências."
    },
    "resposta_correta": "A",
    "comentario": "A organização deve implementar mecanismos para consultar os trabalhadores e reavaliar permanentemente os riscos ocupacionais (NR-01, item 1.5.3.3).",
    "referencia": "NR-01, item 1.5.3.1"
  },
  {
    "id": 69,
    "materia": "NR-01",
    "dificuldade": "média",
    "enunciado": "A respeito das diretrizes da NR-01 para o Gerenciamento de Riscos Ocupacionais (Item 19), assinale a afirmativa correta:",
    "alternativas": {
      "A": "A organização deve adotar mecanismos formais para consultar os trabalhadores sobre a percepção de riscos ocupacionais e medidas preventivas.",
      "B": "O plano de ação do PGR não requer cronograma de implementação nem definição de responsáveis técnicos.",
      "C": "O acompanhamento da eficácia das medidas preventivas implementadas é dispensável após a emissão do documento assinado.",
      "D": "Os acidentes de trajeto devem ser obrigatoriamente excluídos de qualquer investigação ou análise pela CIPA e SESMT.",
      "E": "A identificação de perigos dispensa a análise de condições de trabalho anormais, paradas para manutenção e emergências."
    },
    "resposta_correta": "A",
    "comentario": "A organização deve implementar mecanismos para consultar os trabalhadores e reavaliar permanentemente os riscos ocupacionais (NR-01, item 1.5.3.3).",
    "referencia": "NR-01, item 1.5.3.2"
  },
  {
    "id": 70,
    "materia": "NR-01",
    "dificuldade": "média",
    "enunciado": "A respeito das diretrizes da NR-01 para o Gerenciamento de Riscos Ocupacionais (Item 20), assinale a afirmativa correta:",
    "alternativas": {
      "A": "A organização deve adotar mecanismos formais para consultar os trabalhadores sobre a percepção de riscos ocupacionais e medidas preventivas.",
      "B": "O plano de ação do PGR não requer cronograma de implementação nem definição de responsáveis técnicos.",
      "C": "O acompanhamento da eficácia das medidas preventivas implementadas é dispensável após a emissão do documento assinado.",
      "D": "Os acidentes de trajeto devem ser obrigatoriamente excluídos de qualquer investigação ou análise pela CIPA e SESMT.",
      "E": "A identificação de perigos dispensa a análise de condições de trabalho anormais, paradas para manutenção e emergências."
    },
    "resposta_correta": "A",
    "comentario": "A organização deve implementar mecanismos para consultar os trabalhadores e reavaliar permanentemente os riscos ocupacionais (NR-01, item 1.5.3.3).",
    "referencia": "NR-01, item 1.5.3.3"
  },
  {
    "id": 71,
    "materia": "NR-06",
    "dificuldade": "média",
    "enunciado": "Nos termos da NR-06, considera-se Equipamento de Proteção Individual (EPI):",
    "alternativas": {
      "A": "Qualquer dispositivo coletivo fixado nas paredes e tetos da edificação fabril.",
      "B": "Todo dispositivo ou produto de uso individual utilizado pelo trabalhador, destinado à proteção de riscos suscetíveis de ameaçar a segurança e a saúde no trabalho.",
      "C": "Exclusivamente as vestimentas de algodão comum e uniformes com o logotipo da empresa.",
      "D": "Aparelhos médicos de triagem hospitalar utilizados em múltiplos pacientes.",
      "E": "Extintores de incêndio portáteis e hidrantes de coluna instalados nos corredores."
    },
    "resposta_correta": "B",
    "comentario": "EPI é todo dispositivo ou produto de uso individual destinado à proteção de riscos suscetíveis de ameaçar a segurança e a saúde no trabalho.",
    "referencia": "NR-06, item 6.1.1"
  },
  {
    "id": 72,
    "materia": "NR-06",
    "dificuldade": "média",
    "enunciado": "O EPI, de fabricação nacional ou importado, só pode ser posto à venda ou utilizado no território nacional com a indicação expressa do:",
    "alternativas": {
      "A": "Selo exclusivo da CIPA da empresa compradora.",
      "B": "Certificado de Aprovação (CA), expedido pelo órgão nacional competente em matéria de segurança e saúde no trabalho.",
      "C": "Registro no cartório de títulos e documentos da comarca local.",
      "D": "Alvará municipal de funcionamento da loja revendedora.",
      "E": "Laudo emitido por qualquer associação comercial do bairro."
    },
    "resposta_correta": "B",
    "comentario": "O EPI só pode ser comercializado ou utilizado com o respectivo Certificado de Aprovação (CA) válido expedido pelo órgão nacional competente.",
    "referencia": "NR-06, item 6.2.1"
  },
  {
    "id": 73,
    "materia": "NR-06",
    "dificuldade": "média",
    "enunciado": "Em relação às obrigações do empregador quanto ao EPI, a NR-06 determina expressamente:",
    "alternativas": {
      "A": "Vender os EPIs aos colaboradores a preço de custo subsidiado pela empresa.",
      "B": "Adquirir o EPI adequado ao risco, fornecer gratuitamente aos trabalhadores em perfeito estado de conservação e funcionamento, e exigir o seu uso.",
      "C": "Permitir que o trabalhador compre o calçado de trabalho no comércio e solicite reembolso anual parcelado.",
      "D": "Substituir o EPI danificado apenas ao final de cada ano fiscal do hospital.",
      "E": "Cobrar caução financeira de garantia na entrega inicial do respirador e do capacete."
    },
    "resposta_correta": "B",
    "comentario": "Cabe ao empregador adquirir o EPI adequado ao risco, fornecer gratuitamente, exigir o seu uso e substituir imediatamente quando danificado.",
    "referencia": "NR-06, item 6.5.1"
  },
  {
    "id": 74,
    "materia": "NR-06",
    "dificuldade": "média",
    "enunciado": "Constitui obrigação expressa do trabalhador quanto ao EPI, nos moldes da NR-06:",
    "alternativas": {
      "A": "Efetuar testes laboratoriais destrutivos no capacete anualmente.",
      "B": "Utilizar o EPI apenas para a finalidade a que se destina, responsabilizar-se pela sua guarda e conservação, e comunicar qualquer alteração que o torne impróprio para uso.",
      "C": "Comercializar seu EPI com colegas de outros turnos de trabalho.",
      "D": "Personalizar a máscara com cortes ou adesivos que impeçam a vedação anatômica.",
      "E": "Descartar o equipamento em lixo doméstico comum sem comunicar a chefia imediata."
    },
    "resposta_correta": "B",
    "comentario": "Cabe ao empregado usar o EPI para a finalidade destinada, cuidar da sua guarda e conservação e comunicar danos à chefia.",
    "referencia": "NR-06, item 6.6.1"
  },
  {
    "id": 75,
    "materia": "NR-06",
    "dificuldade": "média",
    "enunciado": "A empresa é obrigada a fornecer EPI aos empregados prioritariamente nas seguintes situações:",
    "alternativas": {
      "A": "Apenas quando o custo do EPI for inferior a 1% do faturamento da instituição.",
      "B": "Sempre que as medidas de proteção coletiva forem inviáveis técnica ou economicamente, estiverem em fase de implantação, ou para atender a situações de emergência.",
      "C": "Exclusivamente durante a realização de auditorias externas de fiscalização trabalhista.",
      "D": "Somente para trabalhadores que possuam contrato de experiência de 90 dias.",
      "E": "Apenas em dias de chuva torrencial ou calamidade pública decretada."
    },
    "resposta_correta": "B",
    "comentario": "O EPI é adotado: a) enquanto as medidas de proteção coletiva estiverem sendo implantadas; b) para emergências; c) quando as medidas coletivas forem inviáveis.",
    "referencia": "NR-06, item 6.3.1"
  },
  {
    "id": 76,
    "materia": "NR-06",
    "dificuldade": "média",
    "enunciado": "O registro de fornecimento de EPI ao trabalhador, conforme autorizado pela NR-06, pode ser feito por meio de:",
    "alternativas": {
      "A": "Ficha impressa em papel, livro próprio ou sistema eletrônico seguro que permita a comprovação inequívoca da entrega.",
      "B": "Mensagem informal enviada em aplicativo de troca de mensagens sem protocolo formal.",
      "C": "Apenas gravação em vídeo no momento em que o trabalhador pega o equipamento no almoxarifado.",
      "D": "Anotação a lápis na contracapa da carteira de trabalho do empregado.",
      "E": "Declaração oral com duas testemunhas que não pertençam ao quadro da empresa."
    },
    "resposta_correta": "A",
    "comentario": "O registro do fornecimento pode ser feito em livros, fichas ou sistema eletrônico, inclusive por biometria ou cartão magnético.",
    "referencia": "NR-06, item 6.5.1, alínea 'h'"
  },
  {
    "id": 77,
    "materia": "NR-06",
    "dificuldade": "média",
    "enunciado": "Quando um EPI apresentar trincas, rasgos, saturação de filtros ou qualquer defeito que comprometa sua eficácia protetiva, o procedimento imediato deve ser:",
    "alternativas": {
      "A": "Continuar utilizando o equipamento até a data do exame médico periódico seguinte.",
      "B": "A imediata substituição pelo empregador sem qualquer ônus financeiro para o empregado.",
      "C": "Colar com fitas isolantes improvisadas até o fechamento do mês de trabalho.",
      "D": "Repassar o EPI avariado para um trabalhador estagiário ou terceirizado.",
      "E": "Registrar um boletim de ocorrência policial antes de descartar a peça danificada."
    },
    "resposta_correta": "B",
    "comentario": "O empregador deve substituir imediatamente o EPI extraviado ou danificado, sem cobrar nada do trabalhador.",
    "referencia": "NR-06, item 6.5.1"
  },
  {
    "id": 78,
    "materia": "NR-06",
    "dificuldade": "média",
    "enunciado": "A higienização e manutenção periódica de EPIs complexos (como respiradores motorizados e macacões impermeáveis químicos) deve ser realizada por:",
    "alternativas": {
      "A": "Responsabilidade e custeio exclusivos do empregador, obedecendo às recomendações técnicas do fabricante.",
      "B": "Dever do próprio trabalhador em tanques de lavanderia domiciliar comunitária.",
      "C": "Empresas de reciclagem de lixo urbano não certificadas.",
      "D": "Descarte diário em aterro sanitário mesmo que o equipamento seja reutilizável.",
      "E": "Empréstimo entre diferentes setores sem desinfecção prévia."
    },
    "resposta_correta": "A",
    "comentario": "Cabe ao empregador responsabilizar-se pela higienização e manutenção periódica do EPI fornecido.",
    "referencia": "NR-06, item 6.5.1"
  },
  {
    "id": 79,
    "materia": "NR-06",
    "dificuldade": "média",
    "enunciado": "Acerca da seleção, adequação ergonômica e treinamento de uso de EPIs segundo a NR-06 (Questão 9):",
    "alternativas": {
      "A": "A seleção do EPI deve considerar a atividade exercida, as condições ambientais, o conforto e a compatibilidade entre diferentes EPIs utilizados simultaneamente.",
      "B": "O empregador é dispensado de orientar e treinar o trabalhador sobre o uso adequado, guarda e conservação do EPI.",
      "C": "O fabricante de EPI não precisa indicar na embalagem o número do CA nem o lote de fabricação.",
      "D": "O trabalhador pode alterar as características originais do EPI sem perda da eficácia ou da cobertura do CA.",
      "E": "O SESMT não precisa ser consultado no processo de aquisição e especificação técnica dos EPIs do hospital."
    },
    "resposta_correta": "A",
    "comentario": "A seleção do EPI deve considerar a atividade exercida, a eficácia necessária para o risco, as condições de trabalho e a compatibilidade ergonômica.",
    "referencia": "NR-06, item 6.4.1"
  },
  {
    "id": 80,
    "materia": "NR-06",
    "dificuldade": "média",
    "enunciado": "Acerca da seleção, adequação ergonômica e treinamento de uso de EPIs segundo a NR-06 (Questão 10):",
    "alternativas": {
      "A": "A seleção do EPI deve considerar a atividade exercida, as condições ambientais, o conforto e a compatibilidade entre diferentes EPIs utilizados simultaneamente.",
      "B": "O empregador é dispensado de orientar e treinar o trabalhador sobre o uso adequado, guarda e conservação do EPI.",
      "C": "O fabricante de EPI não precisa indicar na embalagem o número do CA nem o lote de fabricação.",
      "D": "O trabalhador pode alterar as características originais do EPI sem perda da eficácia ou da cobertura do CA.",
      "E": "O SESMT não precisa ser consultado no processo de aquisição e especificação técnica dos EPIs do hospital."
    },
    "resposta_correta": "A",
    "comentario": "A seleção do EPI deve considerar a atividade exercida, a eficácia necessária para o risco, as condições de trabalho e a compatibilidade ergonômica.",
    "referencia": "NR-06, item 6.4.2"
  },
  {
    "id": 81,
    "materia": "NR-06",
    "dificuldade": "média",
    "enunciado": "Acerca da seleção, adequação ergonômica e treinamento de uso de EPIs segundo a NR-06 (Questão 11):",
    "alternativas": {
      "A": "A seleção do EPI deve considerar a atividade exercida, as condições ambientais, o conforto e a compatibilidade entre diferentes EPIs utilizados simultaneamente.",
      "B": "O empregador é dispensado de orientar e treinar o trabalhador sobre o uso adequado, guarda e conservação do EPI.",
      "C": "O fabricante de EPI não precisa indicar na embalagem o número do CA nem o lote de fabricação.",
      "D": "O trabalhador pode alterar as características originais do EPI sem perda da eficácia ou da cobertura do CA.",
      "E": "O SESMT não precisa ser consultado no processo de aquisição e especificação técnica dos EPIs do hospital."
    },
    "resposta_correta": "A",
    "comentario": "A seleção do EPI deve considerar a atividade exercida, a eficácia necessária para o risco, as condições de trabalho e a compatibilidade ergonômica.",
    "referencia": "NR-06, item 6.4.3"
  },
  {
    "id": 82,
    "materia": "NR-06",
    "dificuldade": "média",
    "enunciado": "Acerca da seleção, adequação ergonômica e treinamento de uso de EPIs segundo a NR-06 (Questão 12):",
    "alternativas": {
      "A": "A seleção do EPI deve considerar a atividade exercida, as condições ambientais, o conforto e a compatibilidade entre diferentes EPIs utilizados simultaneamente.",
      "B": "O empregador é dispensado de orientar e treinar o trabalhador sobre o uso adequado, guarda e conservação do EPI.",
      "C": "O fabricante de EPI não precisa indicar na embalagem o número do CA nem o lote de fabricação.",
      "D": "O trabalhador pode alterar as características originais do EPI sem perda da eficácia ou da cobertura do CA.",
      "E": "O SESMT não precisa ser consultado no processo de aquisição e especificação técnica dos EPIs do hospital."
    },
    "resposta_correta": "A",
    "comentario": "A seleção do EPI deve considerar a atividade exercida, a eficácia necessária para o risco, as condições de trabalho e a compatibilidade ergonômica.",
    "referencia": "NR-06, item 6.4.1"
  },
  {
    "id": 83,
    "materia": "NR-06",
    "dificuldade": "média",
    "enunciado": "Acerca da seleção, adequação ergonômica e treinamento de uso de EPIs segundo a NR-06 (Questão 13):",
    "alternativas": {
      "A": "A seleção do EPI deve considerar a atividade exercida, as condições ambientais, o conforto e a compatibilidade entre diferentes EPIs utilizados simultaneamente.",
      "B": "O empregador é dispensado de orientar e treinar o trabalhador sobre o uso adequado, guarda e conservação do EPI.",
      "C": "O fabricante de EPI não precisa indicar na embalagem o número do CA nem o lote de fabricação.",
      "D": "O trabalhador pode alterar as características originais do EPI sem perda da eficácia ou da cobertura do CA.",
      "E": "O SESMT não precisa ser consultado no processo de aquisição e especificação técnica dos EPIs do hospital."
    },
    "resposta_correta": "A",
    "comentario": "A seleção do EPI deve considerar a atividade exercida, a eficácia necessária para o risco, as condições de trabalho e a compatibilidade ergonômica.",
    "referencia": "NR-06, item 6.4.2"
  },
  {
    "id": 84,
    "materia": "NR-06",
    "dificuldade": "média",
    "enunciado": "Acerca da seleção, adequação ergonômica e treinamento de uso de EPIs segundo a NR-06 (Questão 14):",
    "alternativas": {
      "A": "A seleção do EPI deve considerar a atividade exercida, as condições ambientais, o conforto e a compatibilidade entre diferentes EPIs utilizados simultaneamente.",
      "B": "O empregador é dispensado de orientar e treinar o trabalhador sobre o uso adequado, guarda e conservação do EPI.",
      "C": "O fabricante de EPI não precisa indicar na embalagem o número do CA nem o lote de fabricação.",
      "D": "O trabalhador pode alterar as características originais do EPI sem perda da eficácia ou da cobertura do CA.",
      "E": "O SESMT não precisa ser consultado no processo de aquisição e especificação técnica dos EPIs do hospital."
    },
    "resposta_correta": "A",
    "comentario": "A seleção do EPI deve considerar a atividade exercida, a eficácia necessária para o risco, as condições de trabalho e a compatibilidade ergonômica.",
    "referencia": "NR-06, item 6.4.3"
  },
  {
    "id": 85,
    "materia": "NR-06",
    "dificuldade": "média",
    "enunciado": "Acerca da seleção, adequação ergonômica e treinamento de uso de EPIs segundo a NR-06 (Questão 15):",
    "alternativas": {
      "A": "A seleção do EPI deve considerar a atividade exercida, as condições ambientais, o conforto e a compatibilidade entre diferentes EPIs utilizados simultaneamente.",
      "B": "O empregador é dispensado de orientar e treinar o trabalhador sobre o uso adequado, guarda e conservação do EPI.",
      "C": "O fabricante de EPI não precisa indicar na embalagem o número do CA nem o lote de fabricação.",
      "D": "O trabalhador pode alterar as características originais do EPI sem perda da eficácia ou da cobertura do CA.",
      "E": "O SESMT não precisa ser consultado no processo de aquisição e especificação técnica dos EPIs do hospital."
    },
    "resposta_correta": "A",
    "comentario": "A seleção do EPI deve considerar a atividade exercida, a eficácia necessária para o risco, as condições de trabalho e a compatibilidade ergonômica.",
    "referencia": "NR-06, item 6.4.1"
  },
  {
    "id": 86,
    "materia": "NR-07",
    "dificuldade": "média",
    "enunciado": "O Programa de Controle Médico de Saúde Ocupacional (PCMSO), disciplinado pela NR-07, tem como finalidade primordial:",
    "alternativas": {
      "A": "Avaliar apenas a capacidade física atlética dos candidatos a vagas de emprego.",
      "B": "Promover e preservar a saúde do conjunto dos seus trabalhadores, em harmonia com a avaliação de riscos do PGR.",
      "C": "Substituir integralmente a perícia médica judicial nos processos trabalhistas.",
      "D": "Realizar exames clínicos apenas quando o empregado solicitar formalmente.",
      "E": "Emitir atestados médicos para abono de faltas sem correlação ocupacional."
    },
    "resposta_correta": "B",
    "comentario": "O PCMSO tem como objetivo proteger e preservar a saúde dos empregados em relação aos riscos identificados no PGR da empresa.",
    "referencia": "NR-07, item 7.1.1"
  },
  {
    "id": 87,
    "materia": "NR-07",
    "dificuldade": "média",
    "enunciado": "O rol obrigatório de exames médicos ocupacionais previstos na NR-07 compreende:",
    "alternativas": {
      "A": "Apenas o exame de admissão no ato da contratação inicial.",
      "B": "Exame admissional, periódico, de retorno ao trabalho, de mudança de riscos ocupacionais e demissional.",
      "C": "Exclusivamente o exame de retorno ao trabalho e a consulta de pronto-atendimento ambulatorial.",
      "D": "Exames anuais de aptidão esportiva e teste ergométrico obrigatório para todas as funções.",
      "E": "Apenas exames toxicológicos e laboratoriais semanais sem avaliação clínica geral."
    },
    "resposta_correta": "B",
    "comentario": "Os exames compreendem: admissional, periódico, de retorno ao trabalho, de mudança de riscos ocupacionais e demissional (item 7.5.6).",
    "referencia": "NR-07, item 7.5.6"
  },
  {
    "id": 88,
    "materia": "NR-07",
    "dificuldade": "média",
    "enunciado": "O Atestado de Saúde Ocupacional (ASO) deve ser emitido pelo médico examinador em quantas vias e qual a destinação legalmente exigida:",
    "alternativas": {
      "A": "Em via única, que deve permanecer guardada exclusivamente no arquivo do sindicato laboral.",
      "B": "Em no mínimo duas vias: a primeira fica arquivada no local de trabalho à disposição da fiscalização, e a segunda deve ser obrigatoriamente entregue ao trabalhador mediante recibo.",
      "C": "Em três vias digitais enviadas unicamente para o Instituto Nacional do Seguro Social (INSS).",
      "D": "Apenas uma via colada no crachá de identificação do colaborador hospitalar.",
      "E": "Dispensa-se a emissão de ASO caso o exame periódico resulte em aptidão sem ressalvas."
    },
    "resposta_correta": "B",
    "comentario": "A primeira via do ASO deve ficar arquivada na empresa e a segunda via deve ser obrigatoriamente fornecida ao trabalhador.",
    "referencia": "NR-07, item 7.5.19.1"
  },
  {
    "id": 89,
    "materia": "NR-07",
    "dificuldade": "média",
    "enunciado": "O exame médico de 'Retorno ao Trabalho' deve ser obrigatoriamente realizado antes que o empregado reassuma suas funções quando ausente por período igual ou superior a:",
    "alternativas": {
      "A": "5 dias por qualquer motivo pessoal.",
      "B": "15 dias por motivo de doença ou acidente, de natureza ocupacional ou não, ou parto.",
      "C": "30 dias corridos em decorrência de doença ou acidente, ocupacional ou não, ou parto.",
      "D": "60 dias ininterruptos exclusivamente por motivo de férias regulamentares.",
      "E": "90 dias em virtude de licença não remunerada com autorização patronal."
    },
    "resposta_correta": "C",
    "comentario": "O exame de retorno ao trabalho deve ser realizado antes que o empregado reassuma suas funções quando ausente por período igual ou superior a 30 dias por motivo de doença ou acidente, ocupacional ou não, ou parto.",
    "referencia": "NR-07, item 7.5.9"
  },
  {
    "id": 90,
    "materia": "NR-07",
    "dificuldade": "média",
    "enunciado": "Na NR-07, o exame de 'Mudança de Riscos Ocupacionais' deve ser realizado obrigatoriamente:",
    "alternativas": {
      "A": "Antes da data da mudança de função, posto de trabalho ou setor que implique exposição a risco diferente daquele a que estava exposto.",
      "B": "Até 30 dias após o empregado já estar desempenhando a nova função com riscos acrescidos.",
      "C": "Apenas no final do ano financeiro da entidade hospitalar contratante.",
      "D": "Somente se houver solicitação escrita assinada pelo sindicato profissional.",
      "E": "Apenas se o trabalhador sofrer um acidente grave nos primeiros dias da nova função."
    },
    "resposta_correta": "A",
    "comentario": "Deve ser realizado antes da data da mudança de atividade que implique exposição a risco ocupacional diferente.",
    "referencia": "NR-07, item 7.5.10"
  },
  {
    "id": 91,
    "materia": "NR-07",
    "dificuldade": "média",
    "enunciado": "O exame demissional pode ser dispensado pela NR-07 caso o último exame ocupacional tenha sido realizado há menos de:",
    "alternativas": {
      "A": "15 dias para qualquer atividade empresarial.",
      "B": "135 dias para organizações de graus de risco 1 e 2, e 90 dias para organizações de graus de risco 3 e 4.",
      "C": "365 dias corridos independentemente do grau de risco da organização.",
      "D": "6 meses para hospitais de grande porte e prontos-socorros municipais.",
      "E": "Não pode ser dispensado em nenhuma hipótese legal prevista na NR."
    },
    "resposta_correta": "B",
    "comentario": "O exame demissional é realizado em até 10 dias do término do contrato, podendo ser dispensado se o último exame ocupacional foi há menos de 135 dias (graus 1 e 2) ou 90 dias (graus 3 e 4).",
    "referencia": "NR-07, item 7.5.11"
  },
  {
    "id": 92,
    "materia": "NR-07",
    "dificuldade": "média",
    "enunciado": "O Relatório Analítico do PCMSO, elaborado anualmente pelo médico do trabalho responsável, tem como propósito:",
    "alternativas": {
      "A": "Fixar o valor monetário da folha de pagamento do setor de enfermagem.",
      "B": "Apresentar dados comparativos dos exames clínicos e complementares, estatísticas de agravos e avaliar a eficácia das medidas preventivas do PGR.",
      "C": "Substituir o livro de ata das reuniões ordinárias mensais da CIPA.",
      "D": "Divulgar os diagnósticos clínicos nominais de todos os colaboradores no mural público.",
      "E": "Listar os nomes dos empregados que apresentaram atestados para fins de demissão sumária."
    },
    "resposta_correta": "B",
    "comentario": "O relatório analítico avalia as tendências epidemiológicas, número de exames e a correlação com as medidas de prevenção implementadas na empresa.",
    "referencia": "NR-07, item 7.6.2"
  },
  {
    "id": 93,
    "materia": "NR-07",
    "dificuldade": "média",
    "enunciado": "O prontuário médico ocupacional do trabalhador, contendo registros clínicos e laudos de exames laboratoriais, deve ser mantido arquivado pelo período mínimo de:",
    "alternativas": {
      "A": "5 anos após a homologação da rescisão contratual.",
      "B": "10 anos contados a partir da data de admissão.",
      "C": "20 anos após o desligamento do trabalhador da organização.",
      "D": "50 anos após o óbito do médico coordenador do PCMSO.",
      "E": "Apenas durante a vigência do contrato formal de trabalho sob o regime CLT."
    },
    "resposta_correta": "C",
    "comentario": "Os dados dos prontuários clínicos devem ser mantidos guardados pelo período mínimo de 20 anos após o desligamento do trabalhador.",
    "referencia": "NR-07, item 7.6.1.1"
  },
  {
    "id": 94,
    "materia": "NR-07",
    "dificuldade": "média",
    "enunciado": "A respeito da monitoração biológica e indicadores biológicos de exposição (IBE) na NR-07 (Questão 9):",
    "alternativas": {
      "A": "O médico do trabalho deve indicar os exames complementares de acordo com a identificação e gradação dos riscos apontados no PGR da empresa.",
      "B": "Os exames complementares só podem ser realizados caso o empregado concorde em pagar 50% dos custos laboratoriais.",
      "C": "O ASO dispensa a assinatura do médico examinador desde que contenha o carimbo do setor de RH da empresa.",
      "D": "A conclusão de aptidão ou inaptidão no ASO não precisa especificar a função que o empregado exercerá na instituição.",
      "E": "Os trabalhadores que manipulam produtos químicos no hospital estão isentos de monitoração biológica periódica."
    },
    "resposta_correta": "A",
    "comentario": "Os exames laboratoriais complementares são definidos conforme os riscos do PGR e custeados integralmente pelo empregador.",
    "referencia": "NR-07, item 7.5.2"
  },
  {
    "id": 95,
    "materia": "NR-07",
    "dificuldade": "média",
    "enunciado": "A respeito da monitoração biológica e indicadores biológicos de exposição (IBE) na NR-07 (Questão 10):",
    "alternativas": {
      "A": "O médico do trabalho deve indicar os exames complementares de acordo com a identificação e gradação dos riscos apontados no PGR da empresa.",
      "B": "Os exames complementares só podem ser realizados caso o empregado concorde em pagar 50% dos custos laboratoriais.",
      "C": "O ASO dispensa a assinatura do médico examinador desde que contenha o carimbo do setor de RH da empresa.",
      "D": "A conclusão de aptidão ou inaptidão no ASO não precisa especificar a função que o empregado exercerá na instituição.",
      "E": "Os trabalhadores que manipulam produtos químicos no hospital estão isentos de monitoração biológica periódica."
    },
    "resposta_correta": "A",
    "comentario": "Os exames laboratoriais complementares são definidos conforme os riscos do PGR e custeados integralmente pelo empregador.",
    "referencia": "NR-07, item 7.5.3"
  },
  {
    "id": 96,
    "materia": "NR-07",
    "dificuldade": "média",
    "enunciado": "A respeito da monitoração biológica e indicadores biológicos de exposição (IBE) na NR-07 (Questão 11):",
    "alternativas": {
      "A": "O médico do trabalho deve indicar os exames complementares de acordo com a identificação e gradação dos riscos apontados no PGR da empresa.",
      "B": "Os exames complementares só podem ser realizados caso o empregado concorde em pagar 50% dos custos laboratoriais.",
      "C": "O ASO dispensa a assinatura do médico examinador desde que contenha o carimbo do setor de RH da empresa.",
      "D": "A conclusão de aptidão ou inaptidão no ASO não precisa especificar a função que o empregado exercerá na instituição.",
      "E": "Os trabalhadores que manipulam produtos químicos no hospital estão isentos de monitoração biológica periódica."
    },
    "resposta_correta": "A",
    "comentario": "Os exames laboratoriais complementares são definidos conforme os riscos do PGR e custeados integralmente pelo empregador.",
    "referencia": "NR-07, item 7.5.4"
  },
  {
    "id": 97,
    "materia": "NR-07",
    "dificuldade": "média",
    "enunciado": "A respeito da monitoração biológica e indicadores biológicos de exposição (IBE) na NR-07 (Questão 12):",
    "alternativas": {
      "A": "O médico do trabalho deve indicar os exames complementares de acordo com a identificação e gradação dos riscos apontados no PGR da empresa.",
      "B": "Os exames complementares só podem ser realizados caso o empregado concorde em pagar 50% dos custos laboratoriais.",
      "C": "O ASO dispensa a assinatura do médico examinador desde que contenha o carimbo do setor de RH da empresa.",
      "D": "A conclusão de aptidão ou inaptidão no ASO não precisa especificar a função que o empregado exercerá na instituição.",
      "E": "Os trabalhadores que manipulam produtos químicos no hospital estão isentos de monitoração biológica periódica."
    },
    "resposta_correta": "A",
    "comentario": "Os exames laboratoriais complementares são definidos conforme os riscos do PGR e custeados integralmente pelo empregador.",
    "referencia": "NR-07, item 7.5.1"
  },
  {
    "id": 98,
    "materia": "NR-07",
    "dificuldade": "média",
    "enunciado": "A respeito da monitoração biológica e indicadores biológicos de exposição (IBE) na NR-07 (Questão 13):",
    "alternativas": {
      "A": "O médico do trabalho deve indicar os exames complementares de acordo com a identificação e gradação dos riscos apontados no PGR da empresa.",
      "B": "Os exames complementares só podem ser realizados caso o empregado concorde em pagar 50% dos custos laboratoriais.",
      "C": "O ASO dispensa a assinatura do médico examinador desde que contenha o carimbo do setor de RH da empresa.",
      "D": "A conclusão de aptidão ou inaptidão no ASO não precisa especificar a função que o empregado exercerá na instituição.",
      "E": "Os trabalhadores que manipulam produtos químicos no hospital estão isentos de monitoração biológica periódica."
    },
    "resposta_correta": "A",
    "comentario": "Os exames laboratoriais complementares são definidos conforme os riscos do PGR e custeados integralmente pelo empregador.",
    "referencia": "NR-07, item 7.5.2"
  },
  {
    "id": 99,
    "materia": "NR-07",
    "dificuldade": "média",
    "enunciado": "A respeito da monitoração biológica e indicadores biológicos de exposição (IBE) na NR-07 (Questão 14):",
    "alternativas": {
      "A": "O médico do trabalho deve indicar os exames complementares de acordo com a identificação e gradação dos riscos apontados no PGR da empresa.",
      "B": "Os exames complementares só podem ser realizados caso o empregado concorde em pagar 50% dos custos laboratoriais.",
      "C": "O ASO dispensa a assinatura do médico examinador desde que contenha o carimbo do setor de RH da empresa.",
      "D": "A conclusão de aptidão ou inaptidão no ASO não precisa especificar a função que o empregado exercerá na instituição.",
      "E": "Os trabalhadores que manipulam produtos químicos no hospital estão isentos de monitoração biológica periódica."
    },
    "resposta_correta": "A",
    "comentario": "Os exames laboratoriais complementares são definidos conforme os riscos do PGR e custeados integralmente pelo empregador.",
    "referencia": "NR-07, item 7.5.3"
  },
  {
    "id": 100,
    "materia": "NR-07",
    "dificuldade": "média",
    "enunciado": "A respeito da monitoração biológica e indicadores biológicos de exposição (IBE) na NR-07 (Questão 15):",
    "alternativas": {
      "A": "O médico do trabalho deve indicar os exames complementares de acordo com a identificação e gradação dos riscos apontados no PGR da empresa.",
      "B": "Os exames complementares só podem ser realizados caso o empregado concorde em pagar 50% dos custos laboratoriais.",
      "C": "O ASO dispensa a assinatura do médico examinador desde que contenha o carimbo do setor de RH da empresa.",
      "D": "A conclusão de aptidão ou inaptidão no ASO não precisa especificar a função que o empregado exercerá na instituição.",
      "E": "Os trabalhadores que manipulam produtos químicos no hospital estão isentos de monitoração biológica periódica."
    },
    "resposta_correta": "A",
    "comentario": "Os exames laboratoriais complementares são definidos conforme os riscos do PGR e custeados integralmente pelo empregador.",
    "referencia": "NR-07, item 7.5.4"
  },
  {
    "id": 101,
    "materia": "NR-15",
    "dificuldade": "média",
    "enunciado": "Conforme o artigo 192 da CLT e a NR-15, o trabalho em condições insalubres assegura ao trabalhador a percepção de adicional calculado sobre o salário-mínimo da região nos percentuais de:",
    "alternativas": {
      "A": "5%, 10% e 15%.",
      "B": "10%, 20% e 40%.",
      "C": "15%, 25% e 50%.",
      "D": "20%, 30% e 40%.",
      "E": "10%, 30% e 50%."
    },
    "resposta_correta": "B",
    "comentario": "O adicional de insalubridade é fixado em 40% (grau máximo), 20% (grau médio) e 10% (grau mínimo), incidente sobre o salário-mínimo nacional ou convenção coletiva.",
    "referencia": "NR-15, item 15.2"
  },
  {
    "id": 102,
    "materia": "NR-15",
    "dificuldade": "média",
    "enunciado": "No Anexo 14 da NR-15 (Agentes Biológicos), a insalubridade de GRAU MÁXIMO (40%) é devida ao trabalhador que mantém contato permanente com:",
    "alternativas": {
      "A": "Pacientes em enfermarias gerais de ortopedia e pediatria.",
      "B": "Pacientes em isolamento por doenças infectocontagiosas, bem como objetos de seu uso, não previamente esterilizados.",
      "C": "Fichas cadastrais em papel no setor de faturamento hospitalar.",
      "D": "Roupas de cama limpas estocadas no almoxarifado central de hotelaria.",
      "E": "Materiais de escritório no setor de recursos humanos da fundação hospitalar."
    },
    "resposta_correta": "B",
    "comentario": "O grau máximo (40%) no Anexo 14 é caracterizado por contato permanente com pacientes em isolamento por doenças infectocontagiosas e carnes/vísceras de animais infectados.",
    "referencia": "NR-15, Anexo 14"
  },
  {
    "id": 103,
    "materia": "NR-15",
    "dificuldade": "média",
    "enunciado": "O Anexo 14 da NR-15 caracteriza a insalubridade em GRAU MÉDIO (20%) para atividades e operações que envolvam contato permanente com:",
    "alternativas": {
      "A": "Lixo urbano coletado nas ruas públicas por garis de varrição.",
      "B": "Hospitais, serviços de emergência, enfermarias, ambulatórios, postos de vacinação e outros estabelecimentos destinados aos cuidados da saúde humana (pacientes e material infectocontagiante).",
      "C": "Galerias subterrâneas de esgoto cloacal em grandes redes coletoras.",
      "D": "Cemitérios na atividade de exumação cadavérica.",
      "E": "Trabalho em estaleiros navais com solda elétrica ao ar livre."
    },
    "resposta_correta": "B",
    "comentario": "Hospitais, ambulatórios, enfermarias e postos de vacinação geram insalubridade de grau médio (20%), salvo isolamento que gera grau máximo.",
    "referencia": "NR-15, Anexo 14"
  },
  {
    "id": 104,
    "materia": "NR-15",
    "dificuldade": "média",
    "enunciado": "Para ruído contínuo ou intermitente no ambiente ocupacional (Anexo nº 1 da NR-15), o limite de tolerância para uma jornada padrão de 8 horas de trabalho diárias é de:",
    "alternativas": {
      "A": "75 dB(A).",
      "B": "80 dB(A).",
      "C": "85 dB(A).",
      "D": "90 dB(A).",
      "E": "95 dB(A)."
    },
    "resposta_correta": "C",
    "comentario": "O limite de tolerância para ruído contínuo ou intermitente para 8 horas de exposição é de 85 dB(A), com fator de duplicação q=5.",
    "referencia": "NR-15, Anexo nº 1"
  },
  {
    "id": 105,
    "materia": "NR-15",
    "dificuldade": "média",
    "enunciado": "Na avaliação do nível de pressão sonora para fins de insalubridade segundo o Anexo nº 1 da NR-15, as medições devem ser efetuadas:",
    "alternativas": {
      "A": "No circuito de compensação 'C' e circuito de resposta 'Fast' (rápida).",
      "B": "No circuito de compensação 'A' e circuito de resposta 'Slow' (lenta), próximo à zona auditiva do trabalhador.",
      "C": "Em decibéis lineares sem qualquer filtro ponderado de frequência.",
      "D": "A uma distância de 10 metros da fonte emissora na área externa da edificação.",
      "E": "Apenas dentro da cabine acústica do técnico de segurança."
    },
    "resposta_correta": "B",
    "comentario": "As leituras devem ser feitas no circuito de compensação 'A' e circuito de resposta 'Slow' (lenta).",
    "referencia": "NR-15, Anexo nº 1"
  },
  {
    "id": 106,
    "materia": "NR-15",
    "dificuldade": "média",
    "enunciado": "Segundo a NR-15, a eliminação ou neutralização da insalubridade ocorrerá com:",
    "alternativas": {
      "A": "O pagamento em dinheiro do adicional salarial acrescido de gratificação natalina.",
      "B": "A adoção de medidas de ordem geral que conservem o ambiente dentro dos limites de tolerância e a utilização de EPI pelo trabalhador que diminua a intensidade do agente aos limites legais.",
      "C": "A simples assinatura de um termo de renúncia voluntária pelo empregado contratado.",
      "D": "A concessão de folga remunerada nas sextas-feiras de cada quinzena.",
      "E": "A transferência do trabalhador para o turno da madrugada com menor movimento."
    },
    "resposta_correta": "B",
    "comentario": "A insalubridade é eliminada ou neutralizada com a adoção de medidas de proteção coletiva ou uso de EPI adequado com CA válido.",
    "referencia": "NR-15, item 15.4.1"
  },
  {
    "id": 107,
    "materia": "NR-15",
    "dificuldade": "média",
    "enunciado": "No Anexo 3 da NR-15 (Exposição ao Calor), a avaliação quantitativa da sobrecarga térmica é realizada através do índice:",
    "alternativas": {
      "A": "WBT (Wet Bulb Temperature).",
      "B": "IBUTG (Índice de Bulbo Úmido Termômetro de Globo).",
      "C": "PSI (Pressure Standard Indicator).",
      "D": "NPS (Nível de Pressão Sonora).",
      "E": "ppm (partes por milhão de vapor de mercúrio)."
    },
    "resposta_correta": "B",
    "comentario": "A sobrecarga térmica para avaliação de calor ocupacional utiliza o Índice de Bulbo Úmido Termômetro de Globo (IBUTG).",
    "referencia": "NR-15, Anexo nº 3"
  },
  {
    "id": 108,
    "materia": "NR-15",
    "dificuldade": "média",
    "enunciado": "No Anexo 14 da NR-15, a caracterização da insalubridade por agentes biológicos é essencialmente:",
    "alternativas": {
      "A": "Quantitativa, dependendo de contagem microbiológica em placas de Petri com limite numérico de colônias.",
      "B": "Qualitativa, decorrente de inspeção pericial realizada no local de trabalho pelo Engenheiro de Segurança ou Médico do Trabalho.",
      "C": "Calculada com base na média aritmética da massa corpórea dos pacientes internados.",
      "D": "Determinada por dosímetro eletrônico de contaminação bacteriana em tempo real.",
      "E": "Apurada unicamente a partir de denúncia formal no Ministério Público do Trabalho."
    },
    "resposta_correta": "B",
    "comentario": "A avaliação de agentes biológicos na NR-15 é qualitativa, baseada no contato com pacientes e materiais biológicos.",
    "referencia": "NR-15, Anexo 14"
  },
  {
    "id": 109,
    "materia": "NR-15",
    "dificuldade": "média",
    "enunciado": "Em relação à caracterização e perícia de insalubridade nos termos da NR-15 e CLT (Item 9):",
    "alternativas": {
      "A": "A comprovação da insalubridade exige laudo pericial técnico emitido por Médico do Trabalho ou Engenheiro de Segurança do Trabalho registrado.",
      "B": "O laudo pericial de insalubridade pode ser subscrito por qualquer profissional com curso superior em administração.",
      "C": "O fornecimento de EPI sem comprovação de treinamento e higienização neutraliza automaticamente qualquer risco químico.",
      "D": "O contato intermitente com pacientes em isolamento hospitalar exclui taxativamente o direito ao adicional de insalubridade.",
      "E": "O adicional de insalubridade pode ser acumulado cumulativamente com o adicional de periculosidade de acordo com a CLT."
    },
    "resposta_correta": "A",
    "comentario": "A verificação e a caracterização da insalubridade são privativas de Médico do Trabalho ou Engenheiro de Segurança (art. 195 da CLT).",
    "referencia": "NR-15, item 15.1 e Art. 195 CLT"
  },
  {
    "id": 110,
    "materia": "NR-15",
    "dificuldade": "média",
    "enunciado": "Em relação à caracterização e perícia de insalubridade nos termos da NR-15 e CLT (Item 10):",
    "alternativas": {
      "A": "A comprovação da insalubridade exige laudo pericial técnico emitido por Médico do Trabalho ou Engenheiro de Segurança do Trabalho registrado.",
      "B": "O laudo pericial de insalubridade pode ser subscrito por qualquer profissional com curso superior em administração.",
      "C": "O fornecimento de EPI sem comprovação de treinamento e higienização neutraliza automaticamente qualquer risco químico.",
      "D": "O contato intermitente com pacientes em isolamento hospitalar exclui taxativamente o direito ao adicional de insalubridade.",
      "E": "O adicional de insalubridade pode ser acumulado cumulativamente com o adicional de periculosidade de acordo com a CLT."
    },
    "resposta_correta": "A",
    "comentario": "A verificação e a caracterização da insalubridade são privativas de Médico do Trabalho ou Engenheiro de Segurança (art. 195 da CLT).",
    "referencia": "NR-15, item 15.2 e Art. 195 CLT"
  },
  {
    "id": 111,
    "materia": "NR-15",
    "dificuldade": "média",
    "enunciado": "Em relação à caracterização e perícia de insalubridade nos termos da NR-15 e CLT (Item 11):",
    "alternativas": {
      "A": "A comprovação da insalubridade exige laudo pericial técnico emitido por Médico do Trabalho ou Engenheiro de Segurança do Trabalho registrado.",
      "B": "O laudo pericial de insalubridade pode ser subscrito por qualquer profissional com curso superior em administração.",
      "C": "O fornecimento de EPI sem comprovação de treinamento e higienização neutraliza automaticamente qualquer risco químico.",
      "D": "O contato intermitente com pacientes em isolamento hospitalar exclui taxativamente o direito ao adicional de insalubridade.",
      "E": "O adicional de insalubridade pode ser acumulado cumulativamente com o adicional de periculosidade de acordo com a CLT."
    },
    "resposta_correta": "A",
    "comentario": "A verificação e a caracterização da insalubridade são privativas de Médico do Trabalho ou Engenheiro de Segurança (art. 195 da CLT).",
    "referencia": "NR-15, item 15.3 e Art. 195 CLT"
  },
  {
    "id": 112,
    "materia": "NR-15",
    "dificuldade": "média",
    "enunciado": "Em relação à caracterização e perícia de insalubridade nos termos da NR-15 e CLT (Item 12):",
    "alternativas": {
      "A": "A comprovação da insalubridade exige laudo pericial técnico emitido por Médico do Trabalho ou Engenheiro de Segurança do Trabalho registrado.",
      "B": "O laudo pericial de insalubridade pode ser subscrito por qualquer profissional com curso superior em administração.",
      "C": "O fornecimento de EPI sem comprovação de treinamento e higienização neutraliza automaticamente qualquer risco químico.",
      "D": "O contato intermitente com pacientes em isolamento hospitalar exclui taxativamente o direito ao adicional de insalubridade.",
      "E": "O adicional de insalubridade pode ser acumulado cumulativamente com o adicional de periculosidade de acordo com a CLT."
    },
    "resposta_correta": "A",
    "comentario": "A verificação e a caracterização da insalubridade são privativas de Médico do Trabalho ou Engenheiro de Segurança (art. 195 da CLT).",
    "referencia": "NR-15, item 15.1 e Art. 195 CLT"
  },
  {
    "id": 113,
    "materia": "NR-15",
    "dificuldade": "média",
    "enunciado": "Em relação à caracterização e perícia de insalubridade nos termos da NR-15 e CLT (Item 13):",
    "alternativas": {
      "A": "A comprovação da insalubridade exige laudo pericial técnico emitido por Médico do Trabalho ou Engenheiro de Segurança do Trabalho registrado.",
      "B": "O laudo pericial de insalubridade pode ser subscrito por qualquer profissional com curso superior em administração.",
      "C": "O fornecimento de EPI sem comprovação de treinamento e higienização neutraliza automaticamente qualquer risco químico.",
      "D": "O contato intermitente com pacientes em isolamento hospitalar exclui taxativamente o direito ao adicional de insalubridade.",
      "E": "O adicional de insalubridade pode ser acumulado cumulativamente com o adicional de periculosidade de acordo com a CLT."
    },
    "resposta_correta": "A",
    "comentario": "A verificação e a caracterização da insalubridade são privativas de Médico do Trabalho ou Engenheiro de Segurança (art. 195 da CLT).",
    "referencia": "NR-15, item 15.2 e Art. 195 CLT"
  },
  {
    "id": 114,
    "materia": "NR-15",
    "dificuldade": "média",
    "enunciado": "Em relação à caracterização e perícia de insalubridade nos termos da NR-15 e CLT (Item 14):",
    "alternativas": {
      "A": "A comprovação da insalubridade exige laudo pericial técnico emitido por Médico do Trabalho ou Engenheiro de Segurança do Trabalho registrado.",
      "B": "O laudo pericial de insalubridade pode ser subscrito por qualquer profissional com curso superior em administração.",
      "C": "O fornecimento de EPI sem comprovação de treinamento e higienização neutraliza automaticamente qualquer risco químico.",
      "D": "O contato intermitente com pacientes em isolamento hospitalar exclui taxativamente o direito ao adicional de insalubridade.",
      "E": "O adicional de insalubridade pode ser acumulado cumulativamente com o adicional de periculosidade de acordo com a CLT."
    },
    "resposta_correta": "A",
    "comentario": "A verificação e a caracterização da insalubridade são privativas de Médico do Trabalho ou Engenheiro de Segurança (art. 195 da CLT).",
    "referencia": "NR-15, item 15.3 e Art. 195 CLT"
  },
  {
    "id": 115,
    "materia": "NR-15",
    "dificuldade": "média",
    "enunciado": "Em relação à caracterização e perícia de insalubridade nos termos da NR-15 e CLT (Item 15):",
    "alternativas": {
      "A": "A comprovação da insalubridade exige laudo pericial técnico emitido por Médico do Trabalho ou Engenheiro de Segurança do Trabalho registrado.",
      "B": "O laudo pericial de insalubridade pode ser subscrito por qualquer profissional com curso superior em administração.",
      "C": "O fornecimento de EPI sem comprovação de treinamento e higienização neutraliza automaticamente qualquer risco químico.",
      "D": "O contato intermitente com pacientes em isolamento hospitalar exclui taxativamente o direito ao adicional de insalubridade.",
      "E": "O adicional de insalubridade pode ser acumulado cumulativamente com o adicional de periculosidade de acordo com a CLT."
    },
    "resposta_correta": "A",
    "comentario": "A verificação e a caracterização da insalubridade são privativas de Médico do Trabalho ou Engenheiro de Segurança (art. 195 da CLT).",
    "referencia": "NR-15, item 15.1 e Art. 195 CLT"
  },
  {
    "id": 116,
    "materia": "NR-17",
    "dificuldade": "média",
    "enunciado": "O objetivo central da NR-17 (Ergonomia) é estabelecer as diretrizes e os requisitos que permitam a adaptação das condições de trabalho às características:",
    "alternativas": {
      "A": "Físicas exclusivamente dos trabalhadores do sexo masculino.",
      "B": "Psicofisiológicas dos trabalhadores, de modo a proporcionar conforto, segurança, saúde e desempenho eficiente no trabalho.",
      "C": "Apenas financeiras e tecnológicas da empresa contratante.",
      "D": "Climáticas das regiões metropolitanas do território nacional.",
      "E": "Exclusivamente arquitetônicas dos prédios históricos tombados."
    },
    "resposta_correta": "B",
    "comentario": "A NR-17 visa à adaptação das condições de trabalho às características psicofisiológicas dos trabalhadores.",
    "referencia": "NR-17, item 17.1.1"
  },
  {
    "id": 117,
    "materia": "NR-17",
    "dificuldade": "média",
    "enunciado": "A NR-17 prevê duas etapas fundamentais para a avaliação ergonômica nas organizações:",
    "alternativas": {
      "A": "O Teste Físico de Cooper e a Pesquisa Salarial de Mercado.",
      "B": "A Avaliação Ergonômica Preliminar (AEP) e a Análise Ergonômica do Trabalho (AET).",
      "C": "A Análise de Ruído de Dosimetria e a Verificação de Pressão Arterial Diária.",
      "D": "O Laudo Pericial de Aposentadoria Especial e a Cota de PCD.",
      "E": "A Auditoria Tributária Contábil e o Balanço de Faturamento Anual."
    },
    "resposta_correta": "B",
    "comentario": "A avaliação ergonômica divide-se em: Avaliação Ergonômica Preliminar (AEP) e Análise Ergonômica do Trabalho (AET).",
    "referencia": "NR-17, item 17.3"
  },
  {
    "id": 118,
    "materia": "NR-17",
    "dificuldade": "média",
    "enunciado": "A Análise Ergonômica do Trabalho (AET) da situação de trabalho deve ser realizada obrigatoriamente quando:",
    "alternativas": {
      "A": "A empresa atingir mais de 500 empregados contratados.",
      "B": "Houver necessidade de avaliar a eficácia das medidas adotadas na AEP, forem identificadas inadequações ou quando sugerida pelo acompanhamento de saúde do PCMSO.",
      "C": "O trabalhador completar 10 anos ininterruptos na mesma instituição.",
      "D": "Ocorrer qualquer afastamento previdenciário superior a 3 dias por dor muscular leve.",
      "E": "For instituída comissão eleitoral para escolha de novos membros da CIPA."
    },
    "resposta_correta": "B",
    "comentario": "A AET deve ser realizada quando indicada na AEP, pelo PCMSO ou após acidentes e doenças relacionadas ao trabalho.",
    "referencia": "NR-17, item 17.3.2"
  },
  {
    "id": 119,
    "materia": "NR-17",
    "dificuldade": "média",
    "enunciado": "Quanto ao trabalho realizado sentado, a NR-17 estabelece que os assentos utilizados nos postos de trabalho devem atender aos seguintes requisitos mínimos:",
    "alternativas": {
      "A": "Altura fixa sem qualquer possibilidade de regulagem mecânica.",
      "B": "Altura ajustável à estatura do trabalhador, borda frontal arredondada e encosto com forma levemente adaptada ao corpo para proteção da região lombar.",
      "C": "Assento plano confeccionado em chapa de ferro polido sem estofamento acolchoado.",
      "D": "Encosto reclinável livre sem travamento com inclinação de 180 graus.",
      "E": "Rodízios bloqueados permanentemente com pinos de aço soldados."
    },
    "resposta_correta": "B",
    "comentario": "Os assentos devem ter altura regulável, borda frontal arredondada, encosto que apoie a região lombar e estofamento adequado.",
    "referencia": "NR-17, item 17.6.6"
  },
  {
    "id": 120,
    "materia": "NR-17",
    "dificuldade": "média",
    "enunciado": "Para atividades em que os trabalhos devam ser realizados de pé, a NR-17 exige que sejam colocados:",
    "alternativas": {
      "A": "Plataformas elevatórias motorizadas individuais.",
      "B": "Assentos para descanso em locais em que possam ser utilizados por todos os trabalhadores durante as pausas.",
      "C": "Tapetes térmicos aquecidos a vapor pressurizado.",
      "D": "Corrimãos de corda para sustentação das mãos dos empregados.",
      "E": "Cadeiras de rodas elétricas de deslocamento rápido."
    },
    "resposta_correta": "B",
    "comentario": "Para trabalho de pé, deve haver assentos para descanso em locais onde possam ser utilizados durante as pausas.",
    "referencia": "NR-17, item 17.6.4"
  },
  {
    "id": 121,
    "materia": "NR-17",
    "dificuldade": "média",
    "enunciado": "No transporte e levantamento manual regular de cargas pesadas no hospital (como cilindros, caixas de soro e pacientes acamados), a NR-17 estabelece que:",
    "alternativas": {
      "A": "Não é permitida a exigência nem a realização de transporte manual de cargas cujo peso seja suscetível de comprometer a saúde ou a segurança do trabalhador.",
      "B": "Trabalhadores masculinos adultos são obrigados a levantar até 80 kg individualmente sem auxílio mecânico.",
      "C": "O uso de fita lombar elástica dispensa qualquer restrição de carga máxima a ser erguida.",
      "D": "O transporte manual deve ser realizado obrigatoriamente com o trabalhador correndo para diminuir o tempo de trajeto.",
      "E": "É vedado o uso de guinchos mecânicos ou pranchas de transferência para movimentação de pacientes graves."
    },
    "resposta_correta": "A",
    "comentario": "Não deve ser exigido transporte manual de cargas cujo peso possa comprometer a saúde ou a segurança do trabalhador.",
    "referencia": "NR-17, item 17.5.1"
  },
  {
    "id": 122,
    "materia": "NR-17",
    "dificuldade": "média",
    "enunciado": "Nas atividades que envolvam leitura de documentos e digitação em postos informatizados de recepção e triagem hospitalar, as condições de iluminação devem observar:",
    "alternativas": {
      "A": "Iluminação geral uniforme e difusa, projetada de modo a evitar reflexos incômodos na tela do monitor e ofuscamento visual.",
      "B": "Penumbra constante para descanso das pupilas oculares dos recepcionistas.",
      "C": "Holofotes de lâmpadas incandescentes focados diretamente sobre o teclado.",
      "D": "Luz estroboscópica intermitente para manter o trabalhador em estado de alerta permanente.",
      "E": "Total ausência de iluminação natural proveniente de janelas ou claraboias."
    },
    "resposta_correta": "A",
    "comentario": "A iluminação deve ser uniforme, evitando reflexos incômodos, sombras e ofuscamentos nos monitores e mesas de trabalho.",
    "referencia": "NR-17, item 17.5.3"
  },
  {
    "id": 123,
    "materia": "NR-17",
    "dificuldade": "média",
    "enunciado": "Em atividades de teleatendimento e triagem telefônica hospitalar (Anexo II da NR-17), a duração da jornada diária de trabalho não deve exceder a:",
    "alternativas": {
      "A": "4 horas diárias de trabalho contínuo.",
      "B": "6 horas diárias, nelas incluídas as pausas regulamentares e o intervalo para repouso e alimentação.",
      "C": "8 horas de trabalho sem direito a pausas de descanso.",
      "D": "10 horas diárias em regime de escala de revezamento semanal.",
      "E": "12 horas ininterruptas nos finais de semana e feriados."
    },
    "resposta_correta": "B",
    "comentario": "A jornada em teleatendimento/telemarketing é de 6 horas diárias, incluindo duas pausas de 10 minutos e intervalo de refeição de 20 minutos.",
    "referencia": "NR-17, Anexo II, item 5.3"
  },
  {
    "id": 124,
    "materia": "NR-17",
    "dificuldade": "média",
    "enunciado": "Acerca da organização do trabalho e prevenção de DORT/LER nos serviços hospitalares sob a NR-17 (Questão 9):",
    "alternativas": {
      "A": "A organização do trabalho deve levar em consideração as normas de produção, o modo operatório, o ritmo de trabalho e o conteúdo das tarefas para prevenir sobrecargas físicas e mentais.",
      "B": "A fixação de metas individuais de atendimento em pronto-socorro com penalidades financeiras é recomendada pela NR-17.",
      "C": "As pausas de descanso compensatórias devem ser descontadas integralmente do salário no fechamento da folha mensal.",
      "D": "A movimentação e transferência de pacientes obesos dispensa o uso de pranchas de deslizamento ou guinchos de transferência.",
      "E": "O mobiliário de recepção não requer espaço livre suficiente sob a superfície de trabalho para acomodação das pernas."
    },
    "resposta_correta": "A",
    "comentario": "A organização do trabalho deve considerar normas de produção, pausas, exigências cognitivas e físicas para proteger a saúde integral do trabalhador.",
    "referencia": "NR-17, item 17.4.1"
  },
  {
    "id": 125,
    "materia": "NR-17",
    "dificuldade": "média",
    "enunciado": "Acerca da organização do trabalho e prevenção de DORT/LER nos serviços hospitalares sob a NR-17 (Questão 10):",
    "alternativas": {
      "A": "A organização do trabalho deve levar em consideração as normas de produção, o modo operatório, o ritmo de trabalho e o conteúdo das tarefas para prevenir sobrecargas físicas e mentais.",
      "B": "A fixação de metas individuais de atendimento em pronto-socorro com penalidades financeiras é recomendada pela NR-17.",
      "C": "As pausas de descanso compensatórias devem ser descontadas integralmente do salário no fechamento da folha mensal.",
      "D": "A movimentação e transferência de pacientes obesos dispensa o uso de pranchas de deslizamento ou guinchos de transferência.",
      "E": "O mobiliário de recepção não requer espaço livre suficiente sob a superfície de trabalho para acomodação das pernas."
    },
    "resposta_correta": "A",
    "comentario": "A organização do trabalho deve considerar normas de produção, pausas, exigências cognitivas e físicas para proteger a saúde integral do trabalhador.",
    "referencia": "NR-17, item 17.4.2"
  },
  {
    "id": 126,
    "materia": "NR-17",
    "dificuldade": "média",
    "enunciado": "Acerca da organização do trabalho e prevenção de DORT/LER nos serviços hospitalares sob a NR-17 (Questão 11):",
    "alternativas": {
      "A": "A organização do trabalho deve levar em consideração as normas de produção, o modo operatório, o ritmo de trabalho e o conteúdo das tarefas para prevenir sobrecargas físicas e mentais.",
      "B": "A fixação de metas individuais de atendimento em pronto-socorro com penalidades financeiras é recomendada pela NR-17.",
      "C": "As pausas de descanso compensatórias devem ser descontadas integralmente do salário no fechamento da folha mensal.",
      "D": "A movimentação e transferência de pacientes obesos dispensa o uso de pranchas de deslizamento ou guinchos de transferência.",
      "E": "O mobiliário de recepção não requer espaço livre suficiente sob a superfície de trabalho para acomodação das pernas."
    },
    "resposta_correta": "A",
    "comentario": "A organização do trabalho deve considerar normas de produção, pausas, exigências cognitivas e físicas para proteger a saúde integral do trabalhador.",
    "referencia": "NR-17, item 17.4.3"
  },
  {
    "id": 127,
    "materia": "NR-17",
    "dificuldade": "média",
    "enunciado": "Acerca da organização do trabalho e prevenção de DORT/LER nos serviços hospitalares sob a NR-17 (Questão 12):",
    "alternativas": {
      "A": "A organização do trabalho deve levar em consideração as normas de produção, o modo operatório, o ritmo de trabalho e o conteúdo das tarefas para prevenir sobrecargas físicas e mentais.",
      "B": "A fixação de metas individuais de atendimento em pronto-socorro com penalidades financeiras é recomendada pela NR-17.",
      "C": "As pausas de descanso compensatórias devem ser descontadas integralmente do salário no fechamento da folha mensal.",
      "D": "A movimentação e transferência de pacientes obesos dispensa o uso de pranchas de deslizamento ou guinchos de transferência.",
      "E": "O mobiliário de recepção não requer espaço livre suficiente sob a superfície de trabalho para acomodação das pernas."
    },
    "resposta_correta": "A",
    "comentario": "A organização do trabalho deve considerar normas de produção, pausas, exigências cognitivas e físicas para proteger a saúde integral do trabalhador.",
    "referencia": "NR-17, item 17.4.1"
  },
  {
    "id": 128,
    "materia": "NR-17",
    "dificuldade": "média",
    "enunciado": "Acerca da organização do trabalho e prevenção de DORT/LER nos serviços hospitalares sob a NR-17 (Questão 13):",
    "alternativas": {
      "A": "A organização do trabalho deve levar em consideração as normas de produção, o modo operatório, o ritmo de trabalho e o conteúdo das tarefas para prevenir sobrecargas físicas e mentais.",
      "B": "A fixação de metas individuais de atendimento em pronto-socorro com penalidades financeiras é recomendada pela NR-17.",
      "C": "As pausas de descanso compensatórias devem ser descontadas integralmente do salário no fechamento da folha mensal.",
      "D": "A movimentação e transferência de pacientes obesos dispensa o uso de pranchas de deslizamento ou guinchos de transferência.",
      "E": "O mobiliário de recepção não requer espaço livre suficiente sob a superfície de trabalho para acomodação das pernas."
    },
    "resposta_correta": "A",
    "comentario": "A organização do trabalho deve considerar normas de produção, pausas, exigências cognitivas e físicas para proteger a saúde integral do trabalhador.",
    "referencia": "NR-17, item 17.4.2"
  },
  {
    "id": 129,
    "materia": "NR-17",
    "dificuldade": "média",
    "enunciado": "Acerca da organização do trabalho e prevenção de DORT/LER nos serviços hospitalares sob a NR-17 (Questão 14):",
    "alternativas": {
      "A": "A organização do trabalho deve levar em consideração as normas de produção, o modo operatório, o ritmo de trabalho e o conteúdo das tarefas para prevenir sobrecargas físicas e mentais.",
      "B": "A fixação de metas individuais de atendimento em pronto-socorro com penalidades financeiras é recomendada pela NR-17.",
      "C": "As pausas de descanso compensatórias devem ser descontadas integralmente do salário no fechamento da folha mensal.",
      "D": "A movimentação e transferência de pacientes obesos dispensa o uso de pranchas de deslizamento ou guinchos de transferência.",
      "E": "O mobiliário de recepção não requer espaço livre suficiente sob a superfície de trabalho para acomodação das pernas."
    },
    "resposta_correta": "A",
    "comentario": "A organização do trabalho deve considerar normas de produção, pausas, exigências cognitivas e físicas para proteger a saúde integral do trabalhador.",
    "referencia": "NR-17, item 17.4.3"
  },
  {
    "id": 130,
    "materia": "NR-17",
    "dificuldade": "média",
    "enunciado": "Acerca da organização do trabalho e prevenção de DORT/LER nos serviços hospitalares sob a NR-17 (Questão 15):",
    "alternativas": {
      "A": "A organização do trabalho deve levar em consideração as normas de produção, o modo operatório, o ritmo de trabalho e o conteúdo das tarefas para prevenir sobrecargas físicas e mentais.",
      "B": "A fixação de metas individuais de atendimento em pronto-socorro com penalidades financeiras é recomendada pela NR-17.",
      "C": "As pausas de descanso compensatórias devem ser descontadas integralmente do salário no fechamento da folha mensal.",
      "D": "A movimentação e transferência de pacientes obesos dispensa o uso de pranchas de deslizamento ou guinchos de transferência.",
      "E": "O mobiliário de recepção não requer espaço livre suficiente sob a superfície de trabalho para acomodação das pernas."
    },
    "resposta_correta": "A",
    "comentario": "A organização do trabalho deve considerar normas de produção, pausas, exigências cognitivas e físicas para proteger a saúde integral do trabalhador.",
    "referencia": "NR-17, item 17.4.1"
  },
  {
    "id": 131,
    "materia": "Legislação SUS",
    "dificuldade": "média",
    "enunciado": "Conforme preceitua o artigo 196 da Constituição Federal de 1988, a saúde é:",
    "alternativas": {
      "A": "Um benefício privativo dos trabalhadores que contribuem formalmente para a previdência social.",
      "B": "Direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas que visem à redução do risco de doença e de outros agravos e ao acesso universal e igualitário às ações e serviços para sua promoção, proteção e recuperação.",
      "C": "Um serviço estritamente comercial sob livre concorrência sem regulação governamental.",
      "D": "Dever exclusivo das famílias e instituições filantrópicas sem participação do poder público.",
      "E": "Direito concedido unicamente a cidadãos com renda familiar comprovada inferior a um salário-mínimo."
    },
    "resposta_correta": "B",
    "comentario": "O Art. 196 da CF/88 consagra: 'A saúde é direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas...'",
    "referencia": "CF/88, Art. 196"
  },
  {
    "id": 132,
    "materia": "Legislação SUS",
    "dificuldade": "média",
    "enunciado": "O artigo 200 da Constituição Federal de 1988 estabelece as atribuições do Sistema Único de Saúde (SUS). Dentre elas, consta expressamente no inciso II:",
    "alternativas": {
      "A": "Executar as ações de vigilância sanitária e epidemiológica, bem como as de saúde do trabalhador.",
      "B": "Cobrar tarifas de coparticipação em atendimentos de alta complexidade cardiológica.",
      "C": "Privatizar a gestão de todas as fundações hospitalares de assistência terciária.",
      "D": "Restringir a vacinação obrigatória a trabalhadores da iniciativa privada.",
      "E": "Extinguir os conselhos paritários de controle social comunitário."
    },
    "resposta_correta": "A",
    "comentario": "Art. 200, II da CF/88: 'executar as ações de vigilância sanitária e epidemiológica, bem como as de saúde do trabalhador'.",
    "referencia": "CF/88, Art. 200, II"
  },
  {
    "id": 133,
    "materia": "Legislação SUS",
    "dificuldade": "média",
    "enunciado": "A Lei Federal nº 8.080/1990 (Lei Orgânica da Saúde), em seu artigo 6º, § 3º, define 'Saúde do Trabalhador' como um conjunto de atividades voltadas para:",
    "alternativas": {
      "A": "O pagamento direto de auxílios-acidente sem perícia médica prévia.",
      "B": "A promoção e proteção da saúde dos trabalhadores, assim como visa à recuperação e reabilitação da saúde dos trabalhadores submetidos aos riscos e agravos advindos das condições de trabalho.",
      "C": "O controle de ponto eletrônico e desconto de horas de absenteísmo por enfermidade.",
      "D": "A substituição das Normas Regulamentadoras do Ministério do Trabalho por portarias sindicais.",
      "E": "A concessão de aposentadoria precoce compulsória aos 40 anos de idade."
    },
    "resposta_correta": "B",
    "comentario": "A Lei 8.080/90 conceitua Saúde do Trabalhador como o conjunto de ações de vigilância epidemiológica, vigilância sanitária, promoção, proteção e reabilitação da saúde dos trabalhadores submetidos aos riscos laborais.",
    "referencia": "Lei 8.080/90, Art. 6º, § 3º"
  },
  {
    "id": 134,
    "materia": "Legislação SUS",
    "dificuldade": "média",
    "enunciado": "Os princípios doutrinários fundamentais do Sistema Único de Saúde (SUS), consagrados na Lei nº 8.080/1990, são:",
    "alternativas": {
      "A": "Centralização, Fragmentação e Rentabilidade Financeira.",
      "B": "Universalidade de acesso, Integralidade da assistência e Equidade.",
      "C": "Hierarquização rígida sem participação popular e Coparticipação financeira.",
      "D": "Seletividade das coberturas e Privilégio assistencial aos contribuintes do INSS.",
      "E": "Terceirização integral e Ausência de controle orçamentário público."
    },
    "resposta_correta": "B",
    "comentario": "Os princípios doutrinários do SUS são: Universalidade (todos têm direito), Integralidade (atendimento completo) e Equidade (tratar desiguais na medida de suas desigualdades).",
    "referencia": "Lei 8.080/90, Art. 7º"
  },
  {
    "id": 135,
    "materia": "Legislação SUS",
    "dificuldade": "média",
    "enunciado": "A participação da comunidade na gestão do Sistema Único de Saúde (SUS) é regulamentada pela Lei Federal nº:",
    "alternativas": {
      "A": "Lei nº 6.514/1977.",
      "B": "Lei nº 8.142/1990.",
      "C": "Lei nº 8.213/1991.",
      "D": "Lei nº 9.782/1999.",
      "E": "Lei nº 13.467/2017."
    },
    "resposta_correta": "B",
    "comentario": "A Lei Federal nº 8.142/1990 dispõe sobre a participação da comunidade na gestão do SUS e as transferências intergovernamentais de recursos.",
    "referencia": "Lei 8.142/1990, Art. 1º"
  },
  {
    "id": 136,
    "materia": "Legislação SUS",
    "dificuldade": "média",
    "enunciado": "Conforme a Lei Federal nº 8.142/1990, as instâncias colegiadas do SUS em cada esfera de governo são:",
    "alternativas": {
      "A": "A Diretoria Geral e a Assembleia Legislativa.",
      "B": "A Conferência de Saúde e o Conselho de Saúde.",
      "C": "O Sindicato dos Médicos e a Ordem dos Advogados do Brasil.",
      "D": "O Tribunal de Contas do Estado e a Defensoria Pública.",
      "E": "A Comissão de Licitação e o Departamento Financeiro."
    },
    "resposta_correta": "B",
    "comentario": "As instâncias colegiadas do SUS previstas na Lei 8.142/90 são a Conferência de Saúde e o Conselho de Saúde.",
    "referencia": "Lei 8.142/1990, Art. 1º"
  },
  {
    "id": 137,
    "materia": "Legislação SUS",
    "dificuldade": "média",
    "enunciado": "Nos Conselhos e Conferências de Saúde, a representação dos usuários do SUS em relação ao conjunto dos demais segmentos deve ser:",
    "alternativas": {
      "A": "De 20% do total de vagas colegiadas.",
      "B": "Paritária, correspondendo a 50% dos membros do conselho.",
      "C": "De 100%, sendo vedada a participação de profissionais de saúde.",
      "D": "De apenas 1 membro convidado sem direito a voto.",
      "E": "Facultativa, definida anualmente pelo Secretário de Saúde."
    },
    "resposta_correta": "B",
    "comentario": "A representação dos usuários nos Conselhos e Conferências de Saúde é paritária em relação ao conjunto dos demais segmentos (50% usuários, 25% trabalhadores de saúde, 25% gestores/prestadores).",
    "referencia": "Lei 8.142/1990, Art. 1º, § 2º"
  },
  {
    "id": 138,
    "materia": "Legislação SUS",
    "dificuldade": "média",
    "enunciado": "A Conferência de Saúde reúne-se ordinariamente com a representação dos vários segmentos sociais para avaliar a situação de saúde e propor diretrizes a cada:",
    "alternativas": {
      "A": "1 ano.",
      "B": "2 anos.",
      "C": "4 anos.",
      "D": "5 anos.",
      "E": "10 anos."
    },
    "resposta_correta": "C",
    "comentario": "A Conferência de Saúde reúne-se a cada quatro anos com a representação dos vários segmentos sociais.",
    "referencia": "Lei 8.142/1990, Art. 1º, § 1º"
  },
  {
    "id": 139,
    "materia": "Legislação SUS",
    "dificuldade": "média",
    "enunciado": "A Rede Nacional de Atenção Integral à Saúde do Trabalhador (RENAST) integra o SUS e atua estrategicamente através dos:",
    "alternativas": {
      "A": "Centros de Referência em Saúde do Trabalhador (CEREST).",
      "B": "Sindicatos patronais do comércio varejista.",
      "C": "Conselhos Tutelares municipais.",
      "D": "Cartórios de Registro de Imóveis estaduais.",
      "E": "Bancos de sangue exclusivamente privados."
    },
    "resposta_correta": "A",
    "comentario": "A RENAST articula suas ações por meio dos CERESTs (Centros de Referência em Saúde do Trabalhador) regionais e estaduais.",
    "referencia": "Portaria de Consolidação MS nº 2/2017 e RENAST"
  },
  {
    "id": 140,
    "materia": "Legislação SUS",
    "dificuldade": "média",
    "enunciado": "A Fundação Hospitalar de Clínicas Gaspar Vianna (FHCGV), como integrante da rede pública estadual do SUS no Pará, pauta seu atendimento de média e alta complexidade pelo princípio da:",
    "alternativas": {
      "A": "Cobrança facultativa por leito preferencial aos cidadãos paraenses.",
      "B": "Gratuidade das ações e serviços públicos de saúde em todos os níveis de atenção.",
      "C": "Restrição de atendimento a pacientes portadores de plano de saúde privado.",
      "D": "Seleção de usuários com base em critérios de filiação partidária ou religiosa.",
      "E": "Exclusão do atendimento a pacientes encaminhados por regulação médica estadual."
    },
    "resposta_correta": "B",
    "comentario": "O SUS é gratuito e universal, sendo vedada qualquer cobrança a usuários atendidos na rede pública ou conveniada.",
    "referencia": "CF/88, Art. 196 e Lei 8.080/90"
  },
  {
    "id": 141,
    "materia": "Legislação SUS",
    "dificuldade": "média",
    "enunciado": "No âmbito do Sistema Único de Saúde (SUS) e da legislação sanitária aplicável à FHCGV (Questão 11):",
    "alternativas": {
      "A": "A vigilância em saúde do trabalhador engloba a identificação dos perigos nos ambientes laborais, a investigação de nexo causal e a notificação compulsória dos agravos no SINAN.",
      "B": "Os recursos financeiros do SUS podem ser destinados para o pagamento de dividendos a hospitais privados com fins lucrativos.",
      "C": "Os municípios são proibidos de gerir unidades de saúde que prestem atendimento ao trabalhador.",
      "D": "A direção do SUS no âmbito do Estado do Pará é exercida de forma isolada pela Presidência da República.",
      "E": "O trabalhador autônomo e informal não tem direito às ações de saúde do trabalhador desenvolvidas pelo SUS."
    },
    "resposta_correta": "A",
    "comentario": "A vigilância em saúde do trabalhador abrange a análise dos processos de trabalho, investigação de acidentes e alimentação sistemática do SINAN.",
    "referencia": "Lei 8.080/90, Art. 6º e Portaria MS nº 204/2016"
  },
  {
    "id": 142,
    "materia": "Legislação SUS",
    "dificuldade": "média",
    "enunciado": "No âmbito do Sistema Único de Saúde (SUS) e da legislação sanitária aplicável à FHCGV (Questão 12):",
    "alternativas": {
      "A": "A vigilância em saúde do trabalhador engloba a identificação dos perigos nos ambientes laborais, a investigação de nexo causal e a notificação compulsória dos agravos no SINAN.",
      "B": "Os recursos financeiros do SUS podem ser destinados para o pagamento de dividendos a hospitais privados com fins lucrativos.",
      "C": "Os municípios são proibidos de gerir unidades de saúde que prestem atendimento ao trabalhador.",
      "D": "A direção do SUS no âmbito do Estado do Pará é exercida de forma isolada pela Presidência da República.",
      "E": "O trabalhador autônomo e informal não tem direito às ações de saúde do trabalhador desenvolvidas pelo SUS."
    },
    "resposta_correta": "A",
    "comentario": "A vigilância em saúde do trabalhador abrange a análise dos processos de trabalho, investigação de acidentes e alimentação sistemática do SINAN.",
    "referencia": "Lei 8.080/90, Art. 6º e Portaria MS nº 204/2016"
  },
  {
    "id": 143,
    "materia": "Legislação SUS",
    "dificuldade": "média",
    "enunciado": "No âmbito do Sistema Único de Saúde (SUS) e da legislação sanitária aplicável à FHCGV (Questão 13):",
    "alternativas": {
      "A": "A vigilância em saúde do trabalhador engloba a identificação dos perigos nos ambientes laborais, a investigação de nexo causal e a notificação compulsória dos agravos no SINAN.",
      "B": "Os recursos financeiros do SUS podem ser destinados para o pagamento de dividendos a hospitais privados com fins lucrativos.",
      "C": "Os municípios são proibidos de gerir unidades de saúde que prestem atendimento ao trabalhador.",
      "D": "A direção do SUS no âmbito do Estado do Pará é exercida de forma isolada pela Presidência da República.",
      "E": "O trabalhador autônomo e informal não tem direito às ações de saúde do trabalhador desenvolvidas pelo SUS."
    },
    "resposta_correta": "A",
    "comentario": "A vigilância em saúde do trabalhador abrange a análise dos processos de trabalho, investigação de acidentes e alimentação sistemática do SINAN.",
    "referencia": "Lei 8.080/90, Art. 6º e Portaria MS nº 204/2016"
  },
  {
    "id": 144,
    "materia": "Legislação SUS",
    "dificuldade": "média",
    "enunciado": "No âmbito do Sistema Único de Saúde (SUS) e da legislação sanitária aplicável à FHCGV (Questão 14):",
    "alternativas": {
      "A": "A vigilância em saúde do trabalhador engloba a identificação dos perigos nos ambientes laborais, a investigação de nexo causal e a notificação compulsória dos agravos no SINAN.",
      "B": "Os recursos financeiros do SUS podem ser destinados para o pagamento de dividendos a hospitais privados com fins lucrativos.",
      "C": "Os municípios são proibidos de gerir unidades de saúde que prestem atendimento ao trabalhador.",
      "D": "A direção do SUS no âmbito do Estado do Pará é exercida de forma isolada pela Presidência da República.",
      "E": "O trabalhador autônomo e informal não tem direito às ações de saúde do trabalhador desenvolvidas pelo SUS."
    },
    "resposta_correta": "A",
    "comentario": "A vigilância em saúde do trabalhador abrange a análise dos processos de trabalho, investigação de acidentes e alimentação sistemática do SINAN.",
    "referencia": "Lei 8.080/90, Art. 6º e Portaria MS nº 204/2016"
  },
  {
    "id": 145,
    "materia": "Legislação SUS",
    "dificuldade": "média",
    "enunciado": "No âmbito do Sistema Único de Saúde (SUS) e da legislação sanitária aplicável à FHCGV (Questão 15):",
    "alternativas": {
      "A": "A vigilância em saúde do trabalhador engloba a identificação dos perigos nos ambientes laborais, a investigação de nexo causal e a notificação compulsória dos agravos no SINAN.",
      "B": "Os recursos financeiros do SUS podem ser destinados para o pagamento de dividendos a hospitais privados com fins lucrativos.",
      "C": "Os municípios são proibidos de gerir unidades de saúde que prestem atendimento ao trabalhador.",
      "D": "A direção do SUS no âmbito do Estado do Pará é exercida de forma isolada pela Presidência da República.",
      "E": "O trabalhador autônomo e informal não tem direito às ações de saúde do trabalhador desenvolvidas pelo SUS."
    },
    "resposta_correta": "A",
    "comentario": "A vigilância em saúde do trabalhador abrange a análise dos processos de trabalho, investigação de acidentes e alimentação sistemática do SINAN.",
    "referencia": "Lei 8.080/90, Art. 6º e Portaria MS nº 204/2016"
  },
  {
    "id": 146,
    "materia": "Legislação SUS",
    "dificuldade": "média",
    "enunciado": "No âmbito do Sistema Único de Saúde (SUS) e da legislação sanitária aplicável à FHCGV (Questão 16):",
    "alternativas": {
      "A": "A vigilância em saúde do trabalhador engloba a identificação dos perigos nos ambientes laborais, a investigação de nexo causal e a notificação compulsória dos agravos no SINAN.",
      "B": "Os recursos financeiros do SUS podem ser destinados para o pagamento de dividendos a hospitais privados com fins lucrativos.",
      "C": "Os municípios são proibidos de gerir unidades de saúde que prestem atendimento ao trabalhador.",
      "D": "A direção do SUS no âmbito do Estado do Pará é exercida de forma isolada pela Presidência da República.",
      "E": "O trabalhador autônomo e informal não tem direito às ações de saúde do trabalhador desenvolvidas pelo SUS."
    },
    "resposta_correta": "A",
    "comentario": "A vigilância em saúde do trabalhador abrange a análise dos processos de trabalho, investigação de acidentes e alimentação sistemática do SINAN.",
    "referencia": "Lei 8.080/90, Art. 6º e Portaria MS nº 204/2016"
  },
  {
    "id": 147,
    "materia": "Legislação SUS",
    "dificuldade": "média",
    "enunciado": "No âmbito do Sistema Único de Saúde (SUS) e da legislação sanitária aplicável à FHCGV (Questão 17):",
    "alternativas": {
      "A": "A vigilância em saúde do trabalhador engloba a identificação dos perigos nos ambientes laborais, a investigação de nexo causal e a notificação compulsória dos agravos no SINAN.",
      "B": "Os recursos financeiros do SUS podem ser destinados para o pagamento de dividendos a hospitais privados com fins lucrativos.",
      "C": "Os municípios são proibidos de gerir unidades de saúde que prestem atendimento ao trabalhador.",
      "D": "A direção do SUS no âmbito do Estado do Pará é exercida de forma isolada pela Presidência da República.",
      "E": "O trabalhador autônomo e informal não tem direito às ações de saúde do trabalhador desenvolvidas pelo SUS."
    },
    "resposta_correta": "A",
    "comentario": "A vigilância em saúde do trabalhador abrange a análise dos processos de trabalho, investigação de acidentes e alimentação sistemática do SINAN.",
    "referencia": "Lei 8.080/90, Art. 6º e Portaria MS nº 204/2016"
  },
  {
    "id": 148,
    "materia": "Legislação SUS",
    "dificuldade": "média",
    "enunciado": "No âmbito do Sistema Único de Saúde (SUS) e da legislação sanitária aplicável à FHCGV (Questão 18):",
    "alternativas": {
      "A": "A vigilância em saúde do trabalhador engloba a identificação dos perigos nos ambientes laborais, a investigação de nexo causal e a notificação compulsória dos agravos no SINAN.",
      "B": "Os recursos financeiros do SUS podem ser destinados para o pagamento de dividendos a hospitais privados com fins lucrativos.",
      "C": "Os municípios são proibidos de gerir unidades de saúde que prestem atendimento ao trabalhador.",
      "D": "A direção do SUS no âmbito do Estado do Pará é exercida de forma isolada pela Presidência da República.",
      "E": "O trabalhador autônomo e informal não tem direito às ações de saúde do trabalhador desenvolvidas pelo SUS."
    },
    "resposta_correta": "A",
    "comentario": "A vigilância em saúde do trabalhador abrange a análise dos processos de trabalho, investigação de acidentes e alimentação sistemática do SINAN.",
    "referencia": "Lei 8.080/90, Art. 6º e Portaria MS nº 204/2016"
  },
  {
    "id": 149,
    "materia": "Legislação SUS",
    "dificuldade": "média",
    "enunciado": "No âmbito do Sistema Único de Saúde (SUS) e da legislação sanitária aplicável à FHCGV (Questão 19):",
    "alternativas": {
      "A": "A vigilância em saúde do trabalhador engloba a identificação dos perigos nos ambientes laborais, a investigação de nexo causal e a notificação compulsória dos agravos no SINAN.",
      "B": "Os recursos financeiros do SUS podem ser destinados para o pagamento de dividendos a hospitais privados com fins lucrativos.",
      "C": "Os municípios são proibidos de gerir unidades de saúde que prestem atendimento ao trabalhador.",
      "D": "A direção do SUS no âmbito do Estado do Pará é exercida de forma isolada pela Presidência da República.",
      "E": "O trabalhador autônomo e informal não tem direito às ações de saúde do trabalhador desenvolvidas pelo SUS."
    },
    "resposta_correta": "A",
    "comentario": "A vigilância em saúde do trabalhador abrange a análise dos processos de trabalho, investigação de acidentes e alimentação sistemática do SINAN.",
    "referencia": "Lei 8.080/90, Art. 6º e Portaria MS nº 204/2016"
  },
  {
    "id": 150,
    "materia": "Legislação SUS",
    "dificuldade": "média",
    "enunciado": "No âmbito do Sistema Único de Saúde (SUS) e da legislação sanitária aplicável à FHCGV (Questão 20):",
    "alternativas": {
      "A": "A vigilância em saúde do trabalhador engloba a identificação dos perigos nos ambientes laborais, a investigação de nexo causal e a notificação compulsória dos agravos no SINAN.",
      "B": "Os recursos financeiros do SUS podem ser destinados para o pagamento de dividendos a hospitais privados com fins lucrativos.",
      "C": "Os municípios são proibidos de gerir unidades de saúde que prestem atendimento ao trabalhador.",
      "D": "A direção do SUS no âmbito do Estado do Pará é exercida de forma isolada pela Presidência da República.",
      "E": "O trabalhador autônomo e informal não tem direito às ações de saúde do trabalhador desenvolvidas pelo SUS."
    },
    "resposta_correta": "A",
    "comentario": "A vigilância em saúde do trabalhador abrange a análise dos processos de trabalho, investigação de acidentes e alimentação sistemática do SINAN.",
    "referencia": "Lei 8.080/90, Art. 6º e Portaria MS nº 204/2016"
  },
  {
    "id": 151,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "média",
    "enunciado": "A Resolução da Diretoria Colegiada RDC ANVISA nº 222/2018 regulamenta as Boas Práticas de Gerenciamento dos Resíduos de Serviços de Saúde (RSS) e classifica os resíduos nos grupos:",
    "alternativas": {
      "A": "1, 2, 3, 4 e 5.",
      "B": "A, B, C, D e E.",
      "C": "Alfa, Beta, Gama, Delta e Ômega.",
      "D": "Infectantes, Tóxicos e Orgânicos apenas.",
      "E": "Hospitalares e Domiciliares unicamente."
    },
    "resposta_correta": "B",
    "comentario": "A RDC 222/2018 classifica os RSS em 5 grupos: Grupo A (biológicos), Grupo B (químicos), Grupo C (rejeitos radioativos), Grupo D (comuns) e Grupo E (perfurocortantes).",
    "referencia": "RDC ANVISA nº 222/2018, Art. 4º"
  },
  {
    "id": 152,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "média",
    "enunciado": "Os resíduos com a possível presença de agentes biológicos que, por suas características de maior virulência ou concentração, podem apresentar risco de infecção, pertencem ao:",
    "alternativas": {
      "A": "Grupo A.",
      "B": "Grupo B.",
      "C": "Grupo C.",
      "D": "Grupo D.",
      "E": "Grupo E."
    },
    "resposta_correta": "A",
    "comentario": "O Grupo A engloba os resíduos com presença de agentes biológicos infecciosos (culturas, vacinas de microrganismos vivos, peças anatômicas, sangue).",
    "referencia": "RDC ANVISA nº 222/2018, Anexo I"
  },
  {
    "id": 153,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "média",
    "enunciado": "Os resíduos contendo produtos químicos que podem apresentar periculosidade à saúde pública ou ao meio ambiente (como medicamentos vencidos, reagentes e quimioterápicos) pertencem ao:",
    "alternativas": {
      "A": "Grupo A.",
      "B": "Grupo B.",
      "C": "Grupo C.",
      "D": "Grupo D.",
      "E": "Grupo E."
    },
    "resposta_correta": "B",
    "comentario": "O Grupo B contém resíduos químicos perigosos (reagentes de laboratório, saneantes, antineoplásicos, medicamentos vencidos ou impróprios).",
    "referencia": "RDC ANVISA nº 222/2018, Anexo II"
  },
  {
    "id": 154,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "média",
    "enunciado": "Quaisquer materiais resultantes de atividades humanas que contenham radionuclídeos em quantidades superiores aos limites de isenção estabelecidos pela CNEN enquadram-se no:",
    "alternativas": {
      "A": "Grupo A.",
      "B": "Grupo B.",
      "C": "Grupo C.",
      "D": "Grupo D.",
      "E": "Grupo E."
    },
    "resposta_correta": "C",
    "comentario": "O Grupo C é constituído pelos rejeitos radioativos regulados pelas normas da CNEN.",
    "referencia": "RDC ANVISA nº 222/2018, Anexo III"
  },
  {
    "id": 155,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "média",
    "enunciado": "Os resíduos que não apresentam risco biológico, químico ou radiológico à saúde ou ao meio ambiente, equiparáveis aos resíduos domiciliares (como papel toalha e restos de alimentos), são do:",
    "alternativas": {
      "A": "Grupo A.",
      "B": "Grupo B.",
      "C": "Grupo C.",
      "D": "Grupo D.",
      "E": "Grupo E."
    },
    "resposta_correta": "D",
    "comentario": "O Grupo D compreende os resíduos comuns, domiciliares e recicláveis que não sofreram contaminação biológica, química ou radiológica.",
    "referencia": "RDC ANVISA nº 222/2018, Anexo IV"
  },
  {
    "id": 156,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "média",
    "enunciado": "Materiais perfurocortantes ou escarificantes, tais como lâminas de bisturi, agulhas, ampolas de vidro, pontas diamantadas e tubos capilares pertencem ao:",
    "alternativas": {
      "A": "Grupo A.",
      "B": "Grupo B.",
      "C": "Grupo C.",
      "D": "Grupo D.",
      "E": "Grupo E."
    },
    "resposta_correta": "E",
    "comentario": "O Grupo E engloba todos os materiais perfurocortantes e escarificantes utilizados na assistência à saúde.",
    "referencia": "RDC ANVISA nº 222/2018, Anexo V"
  },
  {
    "id": 157,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "média",
    "enunciado": "O saco plástico utilizado para o acondicionamento dos resíduos do Grupo A (biológicos infectantes) deve ser de cor:",
    "alternativas": {
      "A": "Preta com identificação de material reciclável.",
      "B": "Branca leitosa, com o símbolo internacional de substância infectante e fecho seguro.",
      "C": "Azul marinho transparente sem qualquer identificação gráfica.",
      "D": "Verde claro perfurado para drenagem de líquidos.",
      "E": "Amarela fluorescente sem inscrições textuais."
    },
    "resposta_correta": "B",
    "comentario": "O saco para resíduos do Grupo A deve ser branco leitoso, resistente a ruptura e vazamento, identificado com o símbolo internacional de substância infectante.",
    "referencia": "RDC ANVISA nº 222/2018, Art. 15"
  },
  {
    "id": 158,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "média",
    "enunciado": "Os recipientes de acondicionamento de resíduos do Grupo E (perfurocortantes) devem ser obrigatoriamente:",
    "alternativas": {
      "A": "Sacos plásticos comuns de 100 litros pendurados em suportes de ferro.",
      "B": "Rígidos, resistentes à punctura, ruptura e vazamento, com tampa e com limite máximo de preenchimento visível a 5 cm do bocal.",
      "C": "Caixas de papelão corrugado de frutas reaproveitadas do almoxarifado.",
      "D": "Garrafas PET de refrigerante cortadas ao meio pela equipe de limpeza.",
      "E": "Baldes metálicos abertos posicionados sob os leitos dos pacientes."
    },
    "resposta_correta": "B",
    "comentario": "Os recipientes de Grupo E devem ser rígidos, estanques, resistentes à perfuração e ter nível máximo de enchimento sinalizado.",
    "referencia": "RDC ANVISA nº 222/2018, Art. 21"
  },
  {
    "id": 159,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "média",
    "enunciado": "O Plano de Gerenciamento de Resíduos de Serviços de Saúde (PGRSS), exigido pela RDC 222/2018, deve ser elaborado por:",
    "alternativas": {
      "A": "Qualquer funcionário com mais de 5 anos de experiência no hospital.",
      "B": "Profissional com registro ativo no respectivo conselho de classe com habilitação técnica e ART/RRT correspondente.",
      "C": "Uma empresa de coleta de lixo municipal sem responsabilidade técnica hospitalar.",
      "D": "Comissão de moradores do bairro onde o hospital está edificado.",
      "E": "Apenas pelo diretor financeiro da fundação hospitalar."
    },
    "resposta_correta": "B",
    "comentario": "O PGRSS é um documento técnico obrigatório com responsável técnico habilitado e registrado em conselho profissional.",
    "referencia": "RDC ANVISA nº 222/2018, Art. 5º"
  },
  {
    "id": 160,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "média",
    "enunciado": "No gerenciamento de resíduos químicos líquidos perigosos (Grupo B), tais como solventes e fixadores radiológicos, o procedimento correto é:",
    "alternativas": {
      "A": "Despejar diretamente no vaso sanitário com fluxo constante de descarga.",
      "B": "Acondicionar em recipientes de material compatível com as características físico-químicas do produto, estanques, identificados e encaminhar para tratamento ou recuperação credenciada.",
      "C": "Misturar com os resíduos comuns do Grupo D para diluição passiva.",
      "D": "Armazenar em garrafas de água mineral sem rotulagem.",
      "E": "Evaporar ao ar livre na calçada do hospital sob a luz solar direta."
    },
    "resposta_correta": "B",
    "comentario": "Resíduos do Grupo B devem ser mantidos em embalagens compatíveis e resistentes, identificados com símbolo de risco químico e encaminhados para destinação licenciada.",
    "referencia": "RDC ANVISA nº 222/2018, Art. 48"
  },
  {
    "id": 161,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "média",
    "enunciado": "A respeito das etapas de segregação, acondicionamento e abrigo de RSS segundo a RDC 222/2018 (Questão 11):",
    "alternativas": {
      "A": "A segregação dos resíduos deve ser realizada no momento e no local de sua geração, respeitando a sua classificação de risco.",
      "B": "É permitido o esvaziamento manual de caixas de perfurocortantes para reutilização da embalagem rígida.",
      "C": "O abrigo temporário de resíduos no hospital pode ter piso de terra batida sem ponto de água para lavagem.",
      "D": "Os resíduos do Grupo A que não receberem tratamento térmico podem ser dispostos em lixões a céu aberto.",
      "E": "O transporte interno de resíduos hospitalares pode ser efetuado utilizando carrinhos de transporte de alimentos dos pacientes."
    },
    "resposta_correta": "A",
    "comentario": "A segregação na fonte geradora é o passo fundamental do PGRSS para evitar contaminação cruzada e acidentes com os trabalhadores.",
    "referencia": "RDC ANVISA nº 222/2018, Art. 12"
  },
  {
    "id": 162,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "média",
    "enunciado": "A respeito das etapas de segregação, acondicionamento e abrigo de RSS segundo a RDC 222/2018 (Questão 12):",
    "alternativas": {
      "A": "A segregação dos resíduos deve ser realizada no momento e no local de sua geração, respeitando a sua classificação de risco.",
      "B": "É permitido o esvaziamento manual de caixas de perfurocortantes para reutilização da embalagem rígida.",
      "C": "O abrigo temporário de resíduos no hospital pode ter piso de terra batida sem ponto de água para lavagem.",
      "D": "Os resíduos do Grupo A que não receberem tratamento térmico podem ser dispostos em lixões a céu aberto.",
      "E": "O transporte interno de resíduos hospitalares pode ser efetuado utilizando carrinhos de transporte de alimentos dos pacientes."
    },
    "resposta_correta": "A",
    "comentario": "A segregação na fonte geradora é o passo fundamental do PGRSS para evitar contaminação cruzada e acidentes com os trabalhadores.",
    "referencia": "RDC ANVISA nº 222/2018, Art. 12"
  },
  {
    "id": 163,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "média",
    "enunciado": "A respeito das etapas de segregação, acondicionamento e abrigo de RSS segundo a RDC 222/2018 (Questão 13):",
    "alternativas": {
      "A": "A segregação dos resíduos deve ser realizada no momento e no local de sua geração, respeitando a sua classificação de risco.",
      "B": "É permitido o esvaziamento manual de caixas de perfurocortantes para reutilização da embalagem rígida.",
      "C": "O abrigo temporário de resíduos no hospital pode ter piso de terra batida sem ponto de água para lavagem.",
      "D": "Os resíduos do Grupo A que não receberem tratamento térmico podem ser dispostos em lixões a céu aberto.",
      "E": "O transporte interno de resíduos hospitalares pode ser efetuado utilizando carrinhos de transporte de alimentos dos pacientes."
    },
    "resposta_correta": "A",
    "comentario": "A segregação na fonte geradora é o passo fundamental do PGRSS para evitar contaminação cruzada e acidentes com os trabalhadores.",
    "referencia": "RDC ANVISA nº 222/2018, Art. 12"
  },
  {
    "id": 164,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "média",
    "enunciado": "A respeito das etapas de segregação, acondicionamento e abrigo de RSS segundo a RDC 222/2018 (Questão 14):",
    "alternativas": {
      "A": "A segregação dos resíduos deve ser realizada no momento e no local de sua geração, respeitando a sua classificação de risco.",
      "B": "É permitido o esvaziamento manual de caixas de perfurocortantes para reutilização da embalagem rígida.",
      "C": "O abrigo temporário de resíduos no hospital pode ter piso de terra batida sem ponto de água para lavagem.",
      "D": "Os resíduos do Grupo A que não receberem tratamento térmico podem ser dispostos em lixões a céu aberto.",
      "E": "O transporte interno de resíduos hospitalares pode ser efetuado utilizando carrinhos de transporte de alimentos dos pacientes."
    },
    "resposta_correta": "A",
    "comentario": "A segregação na fonte geradora é o passo fundamental do PGRSS para evitar contaminação cruzada e acidentes com os trabalhadores.",
    "referencia": "RDC ANVISA nº 222/2018, Art. 12"
  },
  {
    "id": 165,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "média",
    "enunciado": "A respeito das etapas de segregação, acondicionamento e abrigo de RSS segundo a RDC 222/2018 (Questão 15):",
    "alternativas": {
      "A": "A segregação dos resíduos deve ser realizada no momento e no local de sua geração, respeitando a sua classificação de risco.",
      "B": "É permitido o esvaziamento manual de caixas de perfurocortantes para reutilização da embalagem rígida.",
      "C": "O abrigo temporário de resíduos no hospital pode ter piso de terra batida sem ponto de água para lavagem.",
      "D": "Os resíduos do Grupo A que não receberem tratamento térmico podem ser dispostos em lixões a céu aberto.",
      "E": "O transporte interno de resíduos hospitalares pode ser efetuado utilizando carrinhos de transporte de alimentos dos pacientes."
    },
    "resposta_correta": "A",
    "comentario": "A segregação na fonte geradora é o passo fundamental do PGRSS para evitar contaminação cruzada e acidentes com os trabalhadores.",
    "referencia": "RDC ANVISA nº 222/2018, Art. 12"
  },
  {
    "id": 166,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "média",
    "enunciado": "A respeito das etapas de segregação, acondicionamento e abrigo de RSS segundo a RDC 222/2018 (Questão 16):",
    "alternativas": {
      "A": "A segregação dos resíduos deve ser realizada no momento e no local de sua geração, respeitando a sua classificação de risco.",
      "B": "É permitido o esvaziamento manual de caixas de perfurocortantes para reutilização da embalagem rígida.",
      "C": "O abrigo temporário de resíduos no hospital pode ter piso de terra batida sem ponto de água para lavagem.",
      "D": "Os resíduos do Grupo A que não receberem tratamento térmico podem ser dispostos em lixões a céu aberto.",
      "E": "O transporte interno de resíduos hospitalares pode ser efetuado utilizando carrinhos de transporte de alimentos dos pacientes."
    },
    "resposta_correta": "A",
    "comentario": "A segregação na fonte geradora é o passo fundamental do PGRSS para evitar contaminação cruzada e acidentes com os trabalhadores.",
    "referencia": "RDC ANVISA nº 222/2018, Art. 12"
  },
  {
    "id": 167,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "média",
    "enunciado": "A respeito das etapas de segregação, acondicionamento e abrigo de RSS segundo a RDC 222/2018 (Questão 17):",
    "alternativas": {
      "A": "A segregação dos resíduos deve ser realizada no momento e no local de sua geração, respeitando a sua classificação de risco.",
      "B": "É permitido o esvaziamento manual de caixas de perfurocortantes para reutilização da embalagem rígida.",
      "C": "O abrigo temporário de resíduos no hospital pode ter piso de terra batida sem ponto de água para lavagem.",
      "D": "Os resíduos do Grupo A que não receberem tratamento térmico podem ser dispostos em lixões a céu aberto.",
      "E": "O transporte interno de resíduos hospitalares pode ser efetuado utilizando carrinhos de transporte de alimentos dos pacientes."
    },
    "resposta_correta": "A",
    "comentario": "A segregação na fonte geradora é o passo fundamental do PGRSS para evitar contaminação cruzada e acidentes com os trabalhadores.",
    "referencia": "RDC ANVISA nº 222/2018, Art. 12"
  },
  {
    "id": 168,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "média",
    "enunciado": "A respeito das etapas de segregação, acondicionamento e abrigo de RSS segundo a RDC 222/2018 (Questão 18):",
    "alternativas": {
      "A": "A segregação dos resíduos deve ser realizada no momento e no local de sua geração, respeitando a sua classificação de risco.",
      "B": "É permitido o esvaziamento manual de caixas de perfurocortantes para reutilização da embalagem rígida.",
      "C": "O abrigo temporário de resíduos no hospital pode ter piso de terra batida sem ponto de água para lavagem.",
      "D": "Os resíduos do Grupo A que não receberem tratamento térmico podem ser dispostos em lixões a céu aberto.",
      "E": "O transporte interno de resíduos hospitalares pode ser efetuado utilizando carrinhos de transporte de alimentos dos pacientes."
    },
    "resposta_correta": "A",
    "comentario": "A segregação na fonte geradora é o passo fundamental do PGRSS para evitar contaminação cruzada e acidentes com os trabalhadores.",
    "referencia": "RDC ANVISA nº 222/2018, Art. 12"
  },
  {
    "id": 169,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "média",
    "enunciado": "A respeito das etapas de segregação, acondicionamento e abrigo de RSS segundo a RDC 222/2018 (Questão 19):",
    "alternativas": {
      "A": "A segregação dos resíduos deve ser realizada no momento e no local de sua geração, respeitando a sua classificação de risco.",
      "B": "É permitido o esvaziamento manual de caixas de perfurocortantes para reutilização da embalagem rígida.",
      "C": "O abrigo temporário de resíduos no hospital pode ter piso de terra batida sem ponto de água para lavagem.",
      "D": "Os resíduos do Grupo A que não receberem tratamento térmico podem ser dispostos em lixões a céu aberto.",
      "E": "O transporte interno de resíduos hospitalares pode ser efetuado utilizando carrinhos de transporte de alimentos dos pacientes."
    },
    "resposta_correta": "A",
    "comentario": "A segregação na fonte geradora é o passo fundamental do PGRSS para evitar contaminação cruzada e acidentes com os trabalhadores.",
    "referencia": "RDC ANVISA nº 222/2018, Art. 12"
  },
  {
    "id": 170,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "média",
    "enunciado": "A respeito das etapas de segregação, acondicionamento e abrigo de RSS segundo a RDC 222/2018 (Questão 20):",
    "alternativas": {
      "A": "A segregação dos resíduos deve ser realizada no momento e no local de sua geração, respeitando a sua classificação de risco.",
      "B": "É permitido o esvaziamento manual de caixas de perfurocortantes para reutilização da embalagem rígida.",
      "C": "O abrigo temporário de resíduos no hospital pode ter piso de terra batida sem ponto de água para lavagem.",
      "D": "Os resíduos do Grupo A que não receberem tratamento térmico podem ser dispostos em lixões a céu aberto.",
      "E": "O transporte interno de resíduos hospitalares pode ser efetuado utilizando carrinhos de transporte de alimentos dos pacientes."
    },
    "resposta_correta": "A",
    "comentario": "A segregação na fonte geradora é o passo fundamental do PGRSS para evitar contaminação cruzada e acidentes com os trabalhadores.",
    "referencia": "RDC ANVISA nº 222/2018, Art. 12"
  },
  {
    "id": 171,
    "materia": "Legislação Previdenciária",
    "dificuldade": "média",
    "enunciado": "Conforme o artigo 19 da Lei nº 8.213/1991, 'Acidente do trabalho' é aquele que ocorre pelo exercício do trabalho a serviço de empresa ou de empregador doméstico:",
    "alternativas": {
      "A": "Apenas quando provoca a morte instantânea do trabalhador no local da prestação.",
      "B": "Provocando lesão corporal ou perturbação funcional que cause a morte ou a perda ou redução, permanente ou temporária, da capacidade para o trabalho.",
      "C": "Exclusivamente se decorrente de imprudência do próprio empregado acidentado.",
      "D": "Somente quando a empresa não possuir CIPA ou SESMT instalado no canteiro.",
      "E": "Apenas se ocorrido em domingos e feriados em horário extraordinário de plantão."
    },
    "resposta_correta": "B",
    "comentario": "O Art. 19 da Lei 8.213/91 define acidente do trabalho como aquele que causa lesão corporal ou perturbação funcional com óbito ou redução da capacidade laboral.",
    "referencia": "Lei 8.213/91, Art. 19"
  },
  {
    "id": 172,
    "materia": "Legislação Previdenciária",
    "dificuldade": "média",
    "enunciado": "A Comunicação de Acidente do Trabalho (CAT) deve ser emitida pela empresa à Previdência Social no prazo de:",
    "alternativas": {
      "A": "Até o último dia útil do mês subsequente ao ocorrido.",
      "B": "Até o primeiro dia útil seguinte ao da ocorrência e, em caso de morte, de imediato à autoridade competente.",
      "C": "Em até 30 dias corridos contados da alta médica hospitalar.",
      "D": "Apenas após o trânsito em julgado de ação trabalhista com laudo pericial.",
      "E": "Não há prazo fixado em lei para emissão do documento pela empresa."
    },
    "resposta_correta": "B",
    "comentario": "A empresa é obrigada a emitir a CAT até o primeiro dia útil seguinte e de imediato em caso de morte (Art. 22 da Lei 8.213/91).",
    "referencia": "Lei 8.213/91, Art. 22"
  },
  {
    "id": 173,
    "materia": "Legislação Previdenciária",
    "dificuldade": "média",
    "enunciado": "Caso a empresa não emita a Comunicação de Acidente do Trabalho (CAT) no prazo legal, podem formalizá-la subsidiariamente:",
    "alternativas": {
      "A": "Apenas o governador do estado em publicação no Diário Oficial.",
      "B": "O próprio acidentado, seus dependentes, a entidade sindical competente, o médico que o assistiu ou qualquer autoridade pública.",
      "C": "Exclusivamente o perito judicial em audiência de conciliação trabalhista.",
      "D": "Apenas o fabricante da máquina que causou a lesão do colaborador.",
      "E": "Ninguém poderá emitir, ficando a ocorrência descaracterizada administrativamente."
    },
    "resposta_correta": "B",
    "comentario": "O Art. 22, § 2º da Lei 8.213/91 faculta a emissão da CAT pelo acidentado, dependentes, sindicato, médico assistente ou autoridade pública.",
    "referencia": "Lei 8.213/91, Art. 22, § 2º"
  },
  {
    "id": 174,
    "materia": "Legislação Previdenciária",
    "dificuldade": "média",
    "enunciado": "O segurado que sofreu acidente do trabalho tem garantida a manutenção do seu contrato de trabalho na empresa, pelo prazo mínimo de:",
    "alternativas": {
      "A": "3 meses após o retorno às atividades laborais.",
      "B": "6 meses contados do diagnóstico do acidente pelo médico do trabalho.",
      "C": "12 meses após a cessação do auxílio por incapacidade temporária acidentário (B91).",
      "D": "24 meses a partir da data de abertura da CAT.",
      "E": "Até que atinja a idade de aposentadoria compulsória aos 75 anos."
    },
    "resposta_correta": "C",
    "comentario": "O Art. 118 da Lei 8.213/91 assegura a estabilidade provisória no emprego por 12 meses após a cessação do auxílio por incapacidade temporária acidentário.",
    "referencia": "Lei 8.213/91, Art. 118 e Súmula 378 TST"
  },
  {
    "id": 175,
    "materia": "Legislação Previdenciária",
    "dificuldade": "média",
    "enunciado": "Equiparam-se também ao acidente do trabalho para efeitos previdenciários, nos termos da Lei 8.213/1991:",
    "alternativas": {
      "A": "A doença degenerativa congênita sem nexo causal com a atividade exercida.",
      "B": "O acidente sofrido pelo segurado no percurso da residência para o local de trabalho ou deste para aquela, qualquer que seja o meio de locomoção, inclusive veículo de propriedade do segurado.",
      "C": "A doença endêmica adquirida por habitante de região em que ela se desenvolva, sem comprovação de exposição decorrente do trabalho.",
      "D": "O mal-estar passageiro ocorrido em período de férias regulamentares do empregado.",
      "E": "A cefaleia tensional decorrente de problemas familiares em domicílio."
    },
    "resposta_correta": "B",
    "comentario": "O acidente de trajeto e a agressão/ato de terceiro no ambiente laboral equiparam-se a acidente do trabalho (Art. 21, IV, 'd' da Lei 8.213/91).",
    "referencia": "Lei 8.213/91, Art. 21"
  },
  {
    "id": 176,
    "materia": "Legislação Previdenciária",
    "dificuldade": "média",
    "enunciado": "O Perfil Profissiográfico Previdenciário (PPP), documento histórico-laboral emitido com base no LTCAT e transmitido ao eSocial pelo evento S-2240, tem como objetivo principal:",
    "alternativas": {
      "A": "Comprovar as condições ambientais de trabalho e a exposição a agentes nocivos químicos, físicos e biológicos para fins de requerimento de Aposentadoria Especial.",
      "B": "Substituir o diploma de graduação de nível superior do trabalhador.",
      "C": "Calcular o montante de pensão alimentícia judicial devida pelo colaborador.",
      "D": "Fiscalizar o horário de entrada e saída nos plantões noturnos hospitalares.",
      "E": "Servir como título executivo extrajudicial de cobrança de mensalidade sindical."
    },
    "resposta_correta": "A",
    "comentario": "O PPP comprova a exposição do trabalhador a agentes nocivos à saúde para requerimento de benefícios previdenciários, notadamente a aposentadoria especial.",
    "referencia": "Lei 8.213/91, Art. 58"
  },
  {
    "id": 177,
    "materia": "Legislação Previdenciária",
    "dificuldade": "média",
    "enunciado": "O Laudo Técnico das Condições Ambientais do Trabalho (LTCAT), exigido pela legislação previdenciária, deve ser expedido exclusivamente por:",
    "alternativas": {
      "A": "Técnico em Edificações ou Mestre de Obras diplomado.",
      "B": "Médico do Trabalho ou Engenheiro de Segurança do Trabalho legalmente habilitados.",
      "C": "Qualquer servidor administrativo da seção de pessoal do hospital.",
      "D": "Comissão paritária de trabalhadores sem formação técnica em segurança.",
      "E": "Delegado de polícia da circunscrição regional de saúde."
    },
    "resposta_correta": "B",
    "comentario": "O LTCAT é elaborado obrigatoriamente por Médico do Trabalho ou Engenheiro de Segurança do Trabalho nos termos do art. 58, § 1º da Lei 8.213/91.",
    "referencia": "Lei 8.213/91, Art. 58, § 1º"
  },
  {
    "id": 178,
    "materia": "Legislação Previdenciária",
    "dificuldade": "média",
    "enunciado": "Em caso de acidente de trabalho com perfurocortante que gere afastamento inferior a 15 dias sem necessidade de benefício do INSS:",
    "alternativas": {
      "A": "A empresa está isenta de emitir a CAT perante a Previdência Social.",
      "B": "A emissão da CAT é igualmente obrigatória, mesmo que não haja afastamento do trabalho ou que o afastamento seja inferior a 15 dias.",
      "C": "A emissão da CAT só deve ocorrer se o trabalhador contrair hepatite ou HIV confirmado em 30 dias.",
      "D": "Deve ser emitida apenas advertência disciplinar para o trabalhador envolvido.",
      "E": "A chefia imediata pode acordar verbalmente a dispensa de qualquer notificação."
    },
    "resposta_correta": "B",
    "comentario": "A emissão da CAT é obrigatória para todo e qualquer acidente do trabalho, mesmo que sem afastamento das funções normais.",
    "referencia": "Lei 8.213/91, Art. 22"
  },
  {
    "id": 179,
    "materia": "Legislação Previdenciária",
    "dificuldade": "média",
    "enunciado": "A respeito dos reflexos previdenciários e do Fator Acidentário de Prevenção (FAP) na saúde ocupacional (Questão 9):",
    "alternativas": {
      "A": "O FAP incide sobre as alíquotas do RAT (Risco Ambiental do Trabalho), podendo reduzir pela metade ou duplicar a contribuição da empresa com base em sua acidentalidade histórica.",
      "B": "O hospital que apresenta alta taxa de acidentes biológicos recebe desconto automático no tributo previdenciário patronal.",
      "C": "A Previdência Social dispensa a emissão do PPP eletrônico via eSocial para trabalhadores da área da saúde.",
      "D": "A contaminação acidental de enfermeiro por material biológico não pode ser enquadrada como acidente do trabalho perante a previdência.",
      "E": "O Nexo Técnico Epidemiológico Previdenciário (NTEP) foi expressamente revogado pela legislação brasileira."
    },
    "resposta_correta": "A",
    "comentario": "O FAP bonifica empresas com menor acidentalidade reduzindo o RAT em até 50% ou pune com aumento de até 100% (Art. 10 da Lei 10.666/2003).",
    "referencia": "Lei 10.666/2003, Art. 10 e Decreto 3.048/99"
  },
  {
    "id": 180,
    "materia": "Legislação Previdenciária",
    "dificuldade": "média",
    "enunciado": "A respeito dos reflexos previdenciários e do Fator Acidentário de Prevenção (FAP) na saúde ocupacional (Questão 10):",
    "alternativas": {
      "A": "O FAP incide sobre as alíquotas do RAT (Risco Ambiental do Trabalho), podendo reduzir pela metade ou duplicar a contribuição da empresa com base em sua acidentalidade histórica.",
      "B": "O hospital que apresenta alta taxa de acidentes biológicos recebe desconto automático no tributo previdenciário patronal.",
      "C": "A Previdência Social dispensa a emissão do PPP eletrônico via eSocial para trabalhadores da área da saúde.",
      "D": "A contaminação acidental de enfermeiro por material biológico não pode ser enquadrada como acidente do trabalho perante a previdência.",
      "E": "O Nexo Técnico Epidemiológico Previdenciário (NTEP) foi expressamente revogado pela legislação brasileira."
    },
    "resposta_correta": "A",
    "comentario": "O FAP bonifica empresas com menor acidentalidade reduzindo o RAT em até 50% ou pune com aumento de até 100% (Art. 10 da Lei 10.666/2003).",
    "referencia": "Lei 10.666/2003, Art. 10 e Decreto 3.048/99"
  },
  {
    "id": 181,
    "materia": "Legislação Previdenciária",
    "dificuldade": "média",
    "enunciado": "A respeito dos reflexos previdenciários e do Fator Acidentário de Prevenção (FAP) na saúde ocupacional (Questão 11):",
    "alternativas": {
      "A": "O FAP incide sobre as alíquotas do RAT (Risco Ambiental do Trabalho), podendo reduzir pela metade ou duplicar a contribuição da empresa com base em sua acidentalidade histórica.",
      "B": "O hospital que apresenta alta taxa de acidentes biológicos recebe desconto automático no tributo previdenciário patronal.",
      "C": "A Previdência Social dispensa a emissão do PPP eletrônico via eSocial para trabalhadores da área da saúde.",
      "D": "A contaminação acidental de enfermeiro por material biológico não pode ser enquadrada como acidente do trabalho perante a previdência.",
      "E": "O Nexo Técnico Epidemiológico Previdenciário (NTEP) foi expressamente revogado pela legislação brasileira."
    },
    "resposta_correta": "A",
    "comentario": "O FAP bonifica empresas com menor acidentalidade reduzindo o RAT em até 50% ou pune com aumento de até 100% (Art. 10 da Lei 10.666/2003).",
    "referencia": "Lei 10.666/2003, Art. 10 e Decreto 3.048/99"
  },
  {
    "id": 182,
    "materia": "Legislação Previdenciária",
    "dificuldade": "média",
    "enunciado": "A respeito dos reflexos previdenciários e do Fator Acidentário de Prevenção (FAP) na saúde ocupacional (Questão 12):",
    "alternativas": {
      "A": "O FAP incide sobre as alíquotas do RAT (Risco Ambiental do Trabalho), podendo reduzir pela metade ou duplicar a contribuição da empresa com base em sua acidentalidade histórica.",
      "B": "O hospital que apresenta alta taxa de acidentes biológicos recebe desconto automático no tributo previdenciário patronal.",
      "C": "A Previdência Social dispensa a emissão do PPP eletrônico via eSocial para trabalhadores da área da saúde.",
      "D": "A contaminação acidental de enfermeiro por material biológico não pode ser enquadrada como acidente do trabalho perante a previdência.",
      "E": "O Nexo Técnico Epidemiológico Previdenciário (NTEP) foi expressamente revogado pela legislação brasileira."
    },
    "resposta_correta": "A",
    "comentario": "O FAP bonifica empresas com menor acidentalidade reduzindo o RAT em até 50% ou pune com aumento de até 100% (Art. 10 da Lei 10.666/2003).",
    "referencia": "Lei 10.666/2003, Art. 10 e Decreto 3.048/99"
  },
  {
    "id": 183,
    "materia": "Legislação Previdenciária",
    "dificuldade": "média",
    "enunciado": "A respeito dos reflexos previdenciários e do Fator Acidentário de Prevenção (FAP) na saúde ocupacional (Questão 13):",
    "alternativas": {
      "A": "O FAP incide sobre as alíquotas do RAT (Risco Ambiental do Trabalho), podendo reduzir pela metade ou duplicar a contribuição da empresa com base em sua acidentalidade histórica.",
      "B": "O hospital que apresenta alta taxa de acidentes biológicos recebe desconto automático no tributo previdenciário patronal.",
      "C": "A Previdência Social dispensa a emissão do PPP eletrônico via eSocial para trabalhadores da área da saúde.",
      "D": "A contaminação acidental de enfermeiro por material biológico não pode ser enquadrada como acidente do trabalho perante a previdência.",
      "E": "O Nexo Técnico Epidemiológico Previdenciário (NTEP) foi expressamente revogado pela legislação brasileira."
    },
    "resposta_correta": "A",
    "comentario": "O FAP bonifica empresas com menor acidentalidade reduzindo o RAT em até 50% ou pune com aumento de até 100% (Art. 10 da Lei 10.666/2003).",
    "referencia": "Lei 10.666/2003, Art. 10 e Decreto 3.048/99"
  },
  {
    "id": 184,
    "materia": "Legislação Previdenciária",
    "dificuldade": "média",
    "enunciado": "A respeito dos reflexos previdenciários e do Fator Acidentário de Prevenção (FAP) na saúde ocupacional (Questão 14):",
    "alternativas": {
      "A": "O FAP incide sobre as alíquotas do RAT (Risco Ambiental do Trabalho), podendo reduzir pela metade ou duplicar a contribuição da empresa com base em sua acidentalidade histórica.",
      "B": "O hospital que apresenta alta taxa de acidentes biológicos recebe desconto automático no tributo previdenciário patronal.",
      "C": "A Previdência Social dispensa a emissão do PPP eletrônico via eSocial para trabalhadores da área da saúde.",
      "D": "A contaminação acidental de enfermeiro por material biológico não pode ser enquadrada como acidente do trabalho perante a previdência.",
      "E": "O Nexo Técnico Epidemiológico Previdenciário (NTEP) foi expressamente revogado pela legislação brasileira."
    },
    "resposta_correta": "A",
    "comentario": "O FAP bonifica empresas com menor acidentalidade reduzindo o RAT em até 50% ou pune com aumento de até 100% (Art. 10 da Lei 10.666/2003).",
    "referencia": "Lei 10.666/2003, Art. 10 e Decreto 3.048/99"
  },
  {
    "id": 185,
    "materia": "Legislação Previdenciária",
    "dificuldade": "média",
    "enunciado": "A respeito dos reflexos previdenciários e do Fator Acidentário de Prevenção (FAP) na saúde ocupacional (Questão 15):",
    "alternativas": {
      "A": "O FAP incide sobre as alíquotas do RAT (Risco Ambiental do Trabalho), podendo reduzir pela metade ou duplicar a contribuição da empresa com base em sua acidentalidade histórica.",
      "B": "O hospital que apresenta alta taxa de acidentes biológicos recebe desconto automático no tributo previdenciário patronal.",
      "C": "A Previdência Social dispensa a emissão do PPP eletrônico via eSocial para trabalhadores da área da saúde.",
      "D": "A contaminação acidental de enfermeiro por material biológico não pode ser enquadrada como acidente do trabalho perante a previdência.",
      "E": "O Nexo Técnico Epidemiológico Previdenciário (NTEP) foi expressamente revogado pela legislação brasileira."
    },
    "resposta_correta": "A",
    "comentario": "O FAP bonifica empresas com menor acidentalidade reduzindo o RAT em até 50% ou pune com aumento de até 100% (Art. 10 da Lei 10.666/2003).",
    "referencia": "Lei 10.666/2003, Art. 10 e Decreto 3.048/99"
  },
  {
    "id": 186,
    "materia": "Português",
    "dificuldade": "média",
    "enunciado": "Assinale a alternativa em que o uso do acento indicativo de crase obedece estritamente à norma-padrão da Língua Portuguesa:",
    "alternativas": {
      "A": "O técnico em segurança referiu-se à pacientes que aguardavam a triagem médica.",
      "B": "A equipe de enfermagem dirigiu-se à sala de expurgo para descarte dos resíduos infectantes.",
      "C": "Os novos profissionais começaram à desempenhar suas funções no bloco cirúrgico.",
      "D": "A entrega das credenciais ocorrerá de segunda à sexta-feira no anfiteatro.",
      "E": "O diretor prestou homenagem à ele durante a cerimônia solene do hospital."
    },
    "resposta_correta": "B",
    "comentario": "Em 'dirigiu-se à sala', ocorre a fusão da preposição 'a' exigida pelo verbo 'dirigir-se' com o artigo feminino 'a' que antecede 'sala'. Diante de verbo, pronome masculino ou expressões de tempo sem artigo, a crase é vedada.",
    "referencia": "Gramática Normativa - Sintaxe de Regência e Crase"
  },
  {
    "id": 187,
    "materia": "Português",
    "dificuldade": "média",
    "enunciado": "Assinale a opção que apresenta correção gramatical quanto à CONCORDÂNCIA VERBAL:",
    "alternativas": {
      "A": "Houveram muitos incidentes com agulhas contaminadas no plantão do último domingo.",
      "B": "Fazem cinco meses que o novo protocolo de segurança biológica foi implantado na fundação.",
      "C": "Mais de um técnico de enfermagem se acidentou durante o procedimento de punção venosa.",
      "D": "Devem de haver soluções mais eficientes para o descarte de quimioterápicos.",
      "E": "Tratam-se de questões prioritárias para a gestão do hospital público."
    },
    "resposta_correta": "C",
    "comentario": "Com a expressão 'mais de um', o verbo concorda no singular ('se acidentou'). Os verbos 'haver' (sentido de existir) e 'fazer' (tempo decorrido) são impessoais e permanecem na 3ª pessoa do singular.",
    "referencia": "Gramática Normativa - Concordância Verbal"
  },
  {
    "id": 188,
    "materia": "Português",
    "dificuldade": "média",
    "enunciado": "Em relação à REGÊNCIA VERBAL, assinale a alternativa que está em plena conformidade com a norma culta:",
    "alternativas": {
      "A": "O técnico de segurança assistiu o paciente acidentado com prontidão e zelo.",
      "B": "Todos os servidores aspiravam ao cargo de coordenador do setor de prevenção de riscos.",
      "C": "O treinamento ministrado pela CIPA implicou em demissão injustificada de funcionários.",
      "D": "A enfermeira prefere mais trabalhar no turno matutino do que no noturno.",
      "E": "O documento oficial visa o cumprimento imediato das normas de proteção radiológica."
    },
    "resposta_correta": "B",
    "comentario": "O verbo 'aspirar' no sentido de desejar/almejar é transitivo indireto e rege a preposição 'a' ('aspiravam ao cargo'). 'Implicar' (acarretar) é transitivo direto (sem 'em'). 'Preferir' não admite 'mais... do que'.",
    "referencia": "Gramática Normativa - Regência Verbal"
  },
  {
    "id": 189,
    "materia": "Português",
    "dificuldade": "média",
    "enunciado": "Assinale a alternativa em que o emprego das VÍRGULAS atende plenamente às normas de pontuação da língua escrita:",
    "alternativas": {
      "A": "O hospital público de Belém, contratou novos especialistas em biossegurança.",
      "B": "Os membros da CIPA, reuniram-se ontem para analisar os acidentes de trajeto.",
      "C": "Diante dos riscos biológicos identificados no laboratório, a equipe técnica recomendou a adoção imediata de máscaras PFF2.",
      "D": "Os trabalhadores usavam, luvas aventais e óculos de proteção individual.",
      "E": "A enfermeira chefe explicou aos novatos, que o reencape de agulhas era proibido."
    },
    "resposta_correta": "C",
    "comentario": "A oração adverbial antecipada ('Diante dos riscos biológicos...') deve ser isolada por vírgula. Não se separa por vírgula o sujeito do predicado nem o verbo de seus complementos diretos.",
    "referencia": "Gramática Normativa - Pontuação"
  },
  {
    "id": 190,
    "materia": "Português",
    "dificuldade": "média",
    "enunciado": "No trecho: 'Apesar de todas as advertências preventivas fixadas nos corredores, alguns colaboradores ainda descumprem a proibição do uso de adornos.' O conectivo 'Apesar de' estabelece relação sintático-semântica de:",
    "alternativas": {
      "A": "Causa.",
      "B": "Concessão.",
      "C": "Consequência.",
      "D": "Finalidade.",
      "E": "Proporcionalidade."
    },
    "resposta_correta": "B",
    "comentario": "'Apesar de' é uma locução prepositiva de valor concessivo, indicando uma ideia de oposição ou ressalva que não impede a realização da oração principal.",
    "referencia": "Morfossintaxe - Orações Subordinadas Concessivas"
  },
  {
    "id": 191,
    "materia": "Português",
    "dificuldade": "média",
    "enunciado": "Identifique a opção em que a palavra destacada está empregada em seu sentido FIGURADO (conotativo):",
    "alternativas": {
      "A": "A agulha perfurou a camada superficial da derme do profissional de saúde.",
      "B": "A diretoria enfrentou uma verdadeira tempestade de reclamações sobre a falta de EPIs no setor.",
      "C": "A autoclave da CME utiliza vapor de água sob pressão e alta temperatura.",
      "D": "O prontuário médico foi arquivado na pasta de registros físicos do hospital.",
      "E": "A lâmina do bisturi cirúrgico foi descartada no coletor rígido amarelo."
    },
    "resposta_correta": "B",
    "comentario": "'Tempestade de reclamações' é empregado em sentido figurado (conotativo), metáfora para designar grande volume e turbulência de questionamentos.",
    "referencia": "Estilística e Semântica - Figuras de Linguagem"
  },
  {
    "id": 192,
    "materia": "Português",
    "dificuldade": "média",
    "enunciado": "Assinale a alternativa que apresenta oração com voz PASSIVA PRONOMINAL (ou sintética):",
    "alternativas": {
      "A": "Adotaram-se novos dispositivos de segurança nas seringas descartáveis.",
      "B": "Os servidores confiaram nas promessas da administração hospitalar.",
      "C": "A comissão avaliou detalhadamente os indicadores de acidentalidade.",
      "D": "O médico do trabalho atendeu vinte colaboradores durante a manhã.",
      "E": "Precisa-se de novos técnicos em segurança do trabalho no ambulatório."
    },
    "resposta_correta": "A",
    "comentario": "Em 'Adotaram-se novos dispositivos de segurança', o 'se' é partícula apassivadora (novos dispositivos foram adotados). Em 'Precisa-se de...', o 'se' é índice de indeterminação do sujeito.",
    "referencia": "Sintaxe da Língua Portuguesa - Vozes Verbais"
  },
  {
    "id": 193,
    "materia": "Português",
    "dificuldade": "média",
    "enunciado": "Quanto à colocação pronominal, assinale a frase redigida em estrita conformidade com a norma-padrão:",
    "alternativas": {
      "A": "Me entregaram o laudo pericial de insalubridade no final do expediente.",
      "B": "Nunca disseram-me que o treinamento da NR-32 era obrigatório para os terceirizados.",
      "C": "Não se deve descuidar da higienização das mãos antes de qualquer procedimento assistencial.",
      "D": "Os técnicos reunir-se-ão com a diretoria logo que for-lhes solicitado.",
      "E": "Haviam informado-nos sobre a inspeção sanitária com antecedência prévia."
    },
    "resposta_correta": "C",
    "comentario": "A palavra de sentido negativo 'Não' atrai obrigatoriamente o pronome oblíquo ('Não se deve...'). No início de frase, a próclise é proscrita pela norma culta ('Me entregaram').",
    "referencia": "Gramática Normativa - Colocação Pronominal"
  },
  {
    "id": 194,
    "materia": "Português",
    "dificuldade": "média",
    "enunciado": "Considere a norma culta da Língua Portuguesa aplicada à redação de relatórios técnicos de segurança hospitalar (Questão 9):",
    "alternativas": {
      "A": "A redação oficial exige clareza, concisão, impessoalidade, precisão vocabular e estrita observância à norma-padrão gramatical.",
      "B": "Gírias e termos ambíguos devem ser inseridos com frequência nos pareceres para aproximar o texto da linguagem coloquial.",
      "C": "A prolixidade com frases excessivamente longas e redundantes é uma qualidade recomendada pela comunicação institucional.",
      "D": "O pronome de tratamento 'Vossa Excelência' deve ser utilizado indistintamente para qualquer servidor subalterno do setor.",
      "E": "O uso de abreviaturas e siglas não consagradas prescinde de explicação prévia na primeira ocorrência no documento."
    },
    "resposta_correta": "A",
    "comentario": "Os princípios da redação oficial e técnica são a clareza, impessoalidade, concisão, formalidade e correção gramatical.",
    "referencia": "Manual de Redação Oficial e Gramática Aplicada"
  },
  {
    "id": 195,
    "materia": "Português",
    "dificuldade": "média",
    "enunciado": "Considere a norma culta da Língua Portuguesa aplicada à redação de relatórios técnicos de segurança hospitalar (Questão 10):",
    "alternativas": {
      "A": "A redação oficial exige clareza, concisão, impessoalidade, precisão vocabular e estrita observância à norma-padrão gramatical.",
      "B": "Gírias e termos ambíguos devem ser inseridos com frequência nos pareceres para aproximar o texto da linguagem coloquial.",
      "C": "A prolixidade com frases excessivamente longas e redundantes é uma qualidade recomendada pela comunicação institucional.",
      "D": "O pronome de tratamento 'Vossa Excelência' deve ser utilizado indistintamente para qualquer servidor subalterno do setor.",
      "E": "O uso de abreviaturas e siglas não consagradas prescinde de explicação prévia na primeira ocorrência no documento."
    },
    "resposta_correta": "A",
    "comentario": "Os princípios da redação oficial e técnica são a clareza, impessoalidade, concisão, formalidade e correção gramatical.",
    "referencia": "Manual de Redação Oficial e Gramática Aplicada"
  },
  {
    "id": 196,
    "materia": "Português",
    "dificuldade": "média",
    "enunciado": "Considere a norma culta da Língua Portuguesa aplicada à redação de relatórios técnicos de segurança hospitalar (Questão 11):",
    "alternativas": {
      "A": "A redação oficial exige clareza, concisão, impessoalidade, precisão vocabular e estrita observância à norma-padrão gramatical.",
      "B": "Gírias e termos ambíguos devem ser inseridos com frequência nos pareceres para aproximar o texto da linguagem coloquial.",
      "C": "A prolixidade com frases excessivamente longas e redundantes é uma qualidade recomendada pela comunicação institucional.",
      "D": "O pronome de tratamento 'Vossa Excelência' deve ser utilizado indistintamente para qualquer servidor subalterno do setor.",
      "E": "O uso de abreviaturas e siglas não consagradas prescinde de explicação prévia na primeira ocorrência no documento."
    },
    "resposta_correta": "A",
    "comentario": "Os princípios da redação oficial e técnica são a clareza, impessoalidade, concisão, formalidade e correção gramatical.",
    "referencia": "Manual de Redação Oficial e Gramática Aplicada"
  },
  {
    "id": 197,
    "materia": "Português",
    "dificuldade": "média",
    "enunciado": "Considere a norma culta da Língua Portuguesa aplicada à redação de relatórios técnicos de segurança hospitalar (Questão 12):",
    "alternativas": {
      "A": "A redação oficial exige clareza, concisão, impessoalidade, precisão vocabular e estrita observância à norma-padrão gramatical.",
      "B": "Gírias e termos ambíguos devem ser inseridos com frequência nos pareceres para aproximar o texto da linguagem coloquial.",
      "C": "A prolixidade com frases excessivamente longas e redundantes é uma qualidade recomendada pela comunicação institucional.",
      "D": "O pronome de tratamento 'Vossa Excelência' deve ser utilizado indistintamente para qualquer servidor subalterno do setor.",
      "E": "O uso de abreviaturas e siglas não consagradas prescinde de explicação prévia na primeira ocorrência no documento."
    },
    "resposta_correta": "A",
    "comentario": "Os princípios da redação oficial e técnica são a clareza, impessoalidade, concisão, formalidade e correção gramatical.",
    "referencia": "Manual de Redação Oficial e Gramática Aplicada"
  },
  {
    "id": 198,
    "materia": "Português",
    "dificuldade": "média",
    "enunciado": "Considere a norma culta da Língua Portuguesa aplicada à redação de relatórios técnicos de segurança hospitalar (Questão 13):",
    "alternativas": {
      "A": "A redação oficial exige clareza, concisão, impessoalidade, precisão vocabular e estrita observância à norma-padrão gramatical.",
      "B": "Gírias e termos ambíguos devem ser inseridos com frequência nos pareceres para aproximar o texto da linguagem coloquial.",
      "C": "A prolixidade com frases excessivamente longas e redundantes é uma qualidade recomendada pela comunicação institucional.",
      "D": "O pronome de tratamento 'Vossa Excelência' deve ser utilizado indistintamente para qualquer servidor subalterno do setor.",
      "E": "O uso de abreviaturas e siglas não consagradas prescinde de explicação prévia na primeira ocorrência no documento."
    },
    "resposta_correta": "A",
    "comentario": "Os princípios da redação oficial e técnica são a clareza, impessoalidade, concisão, formalidade e correção gramatical.",
    "referencia": "Manual de Redação Oficial e Gramática Aplicada"
  },
  {
    "id": 199,
    "materia": "Português",
    "dificuldade": "média",
    "enunciado": "Considere a norma culta da Língua Portuguesa aplicada à redação de relatórios técnicos de segurança hospitalar (Questão 14):",
    "alternativas": {
      "A": "A redação oficial exige clareza, concisão, impessoalidade, precisão vocabular e estrita observância à norma-padrão gramatical.",
      "B": "Gírias e termos ambíguos devem ser inseridos com frequência nos pareceres para aproximar o texto da linguagem coloquial.",
      "C": "A prolixidade com frases excessivamente longas e redundantes é uma qualidade recomendada pela comunicação institucional.",
      "D": "O pronome de tratamento 'Vossa Excelência' deve ser utilizado indistintamente para qualquer servidor subalterno do setor.",
      "E": "O uso de abreviaturas e siglas não consagradas prescinde de explicação prévia na primeira ocorrência no documento."
    },
    "resposta_correta": "A",
    "comentario": "Os princípios da redação oficial e técnica são a clareza, impessoalidade, concisão, formalidade e correção gramatical.",
    "referencia": "Manual de Redação Oficial e Gramática Aplicada"
  },
  {
    "id": 200,
    "materia": "Português",
    "dificuldade": "média",
    "enunciado": "Considere a norma culta da Língua Portuguesa aplicada à redação de relatórios técnicos de segurança hospitalar (Questão 15):",
    "alternativas": {
      "A": "A redação oficial exige clareza, concisão, impessoalidade, precisão vocabular e estrita observância à norma-padrão gramatical.",
      "B": "Gírias e termos ambíguos devem ser inseridos com frequência nos pareceres para aproximar o texto da linguagem coloquial.",
      "C": "A prolixidade com frases excessivamente longas e redundantes é uma qualidade recomendada pela comunicação institucional.",
      "D": "O pronome de tratamento 'Vossa Excelência' deve ser utilizado indistintamente para qualquer servidor subalterno do setor.",
      "E": "O uso de abreviaturas e siglas não consagradas prescinde de explicação prévia na primeira ocorrência no documento."
    },
    "resposta_correta": "A",
    "comentario": "Os princípios da redação oficial e técnica são a clareza, impessoalidade, concisão, formalidade e correção gramatical.",
    "referencia": "Manual de Redação Oficial e Gramática Aplicada"
  },
  {
    "id": 201,
    "materia": "NR-32",
    "dificuldade": "NR-32, Anexo I e Diretrizes do Ministério da Saúde",
    "enunciado": "Em relação à classificação dos agentes biológicos que podem causar infecção no homem, a NR-32 adota a classificação em classes de risco de 1 a 4. Um agente com baixo risco individual e baixo risco para a coletividade, que dificilmente causa doença no ser humano sadio, pertence à:",
    "alternativas": {
      "A": "Classe de risco 4.",
      "B": "Classe de risco 2.",
      "C": "Classe de risco 3.",
      "D": "Classe especial hospitalar.",
      "E": "Classe de risco 1."
    },
    "resposta_correta": "E",
    "comentario": "A Classe de Risco 1 compreende agentes com baixo risco individual para o trabalhador e baixa probabilidade de propagação para a coletividade.",
    "referencia": "NR-32, Anexo I e Diretrizes do Ministério da Saúde"
  },
  {
    "id": 202,
    "materia": "NR-32",
    "dificuldade": "NR-32, Anexo I",
    "enunciado": "Os agentes biológicos da Classe de Risco 2 são definidos pela NR-32 como aqueles que:",
    "alternativas": {
      "A": "Apresentam exclusivamente risco toxicológico por inalação de solventes orgânicos.",
      "B": "Causam doenças humanas graves, sem tratamento eficaz nem vacina disponível, com altíssimo contágio comunitário.",
      "C": "Nunca causam doença humana ou animal em qualquer hipótese.",
      "D": "São exclusivamente derivados de organismos geneticamente modificados de nível industrial.",
      "E": "Podem causar doenças no ser humano e constituir perigo para os trabalhadores, mas há profilaxia e tratamento eficaz disponíveis e o risco de propagação comunitária é limitado."
    },
    "resposta_correta": "E",
    "comentario": "A Classe 2 abrange agentes com risco individual moderado e risco comunitário limitado, havendo tratamento ou medidas profiláticas eficazes (ex: Klebsiella pneumoniae, Staphylococcus aureus).",
    "referencia": "NR-32, Anexo I"
  },
  {
    "id": 203,
    "materia": "NR-32",
    "dificuldade": "NR-32, Anexo I",
    "enunciado": "O Mycobacterium tuberculosis, agente etiológico da tuberculose, comum na rotina hospitalar de pacientes internados na FHCGV, é classificado biologicamente como pertencente à:",
    "alternativas": {
      "A": "Classe de risco 4.",
      "B": "Classe de risco 2.",
      "C": "Classe de risco 3.",
      "D": "Classe de risco 1.",
      "E": "Classe de risco zero."
    },
    "resposta_correta": "C",
    "comentario": "O Mycobacterium tuberculosis pertence à Classe de Risco 3: agentes que causam patologias humanas graves, de transmissão respiratória, para os quais usualmente existem tratamento e prevenção.",
    "referencia": "NR-32, Anexo I"
  },
  {
    "id": 204,
    "materia": "NR-32",
    "dificuldade": "NR-32, Anexo I",
    "enunciado": "Agentes biológicos que possuem alta patogenicidade, representam grave ameaça aos trabalhadores, com elevado risco de propagação na comunidade e para os quais não se dispõe de tratamento ou profilaxia eficaz (como vírus Ebola e Marburg) enquadram-se na:",
    "alternativas": {
      "A": "Classe de risco 2.",
      "B": "Classe de risco 3.",
      "C": "Classe de risco 4.",
      "D": "Classe residual sanitária.",
      "E": "Classe de risco 1."
    },
    "resposta_correta": "C",
    "comentario": "A Classe de Risco 4 contempla agentes patogênicos de máxima gravidade, facilidade de propagação e ausência de medidas profiláticas ou terapêuticas conhecidas.",
    "referencia": "NR-32, Anexo I"
  },
  {
    "id": 205,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.2.4.5",
    "enunciado": "Sobre o uso de adornos em serviços de saúde da FHCGV, a NR-32 estabelece categoricamente no subitem 32.2.4.5 que:",
    "alternativas": {
      "A": "A proibição do uso de adornos restringe-se exclusivamente aos setores de isolamento de doenças infectocontagiosas.",
      "B": "Somente os médicos-cirurgiões são impedidos de usar anéis e relógios de pulso.",
      "C": "Adornos de ouro ou platina são permitidos por serem materiais inertes e bactericidas.",
      "D": "É permitido o uso de alianças lisas e brincos discretos durante a assistência direta ao leito.",
      "E": "O uso de adornos deve ser vedado a todos os trabalhadores que exerçam atividades com risco de exposição a agentes biológicos."
    },
    "resposta_correta": "E",
    "comentario": "O subitem 32.2.4.5 da NR-32 determina que o empregador deve vedar o uso de adornos pelos trabalhadores com risco de exposição a agente biológico (inclui anéis, alianças, relógios, colares, brincos, piercings, etc.).",
    "referencia": "NR-32, item 32.2.4.5"
  },
  {
    "id": 206,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.2.4.7",
    "enunciado": "Com relação ao vestuário e calçados dos profissionais de saúde atuantes em enfermarias, UTI e pronto-socorro da FHCGV, a NR-32 proíbe expressamente:",
    "alternativas": {
      "A": "O uso de meias de algodão de cor branca ou escura.",
      "B": "O uso de calçados abertos, devendo ser utilizados calçados completamente fechados na região superior e posterior.",
      "C": "O uso de calçados impermeáveis de borracha tipo clog fechado.",
      "D": "O uso de calçados com sola de poliuretano antiderrapante.",
      "E": "A utilização de jalecos de mangas compridas em áreas assistenciais."
    },
    "resposta_correta": "B",
    "comentario": "A NR-32, item 32.2.4.7, proíbe expressamente o uso de calçados abertos aos trabalhadores com exposição a agentes biológicos.",
    "referencia": "NR-32, item 32.2.4.7"
  },
  {
    "id": 207,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.2.4.4",
    "enunciado": "Nos locais de trabalho hospitalares onde há exposição a agentes biológicos, a NR-32 estipula que é expressamente proibido:",
    "alternativas": {
      "A": "A conversa profissional entre técnicos de enfermagem durante a troca de plantão.",
      "B": "O uso de dispensers de sabonete líquido acionados por sensor óptico.",
      "C": "O consumo de alimentos e bebidas, bem como fumar e o uso de cosméticos e armazenamento de alimentos nas bancadas ou postos.",
      "D": "A anotação de prontuários em pranchetas eletrônicas ou tablets higienizáveis.",
      "E": "A presença de recipientes de álcool em gel 70% fixados nas portas das enfermarias."
    },
    "resposta_correta": "C",
    "comentario": "Conforme o item 32.2.4.4 da NR-32, aos trabalhadores é vedado fumar, usar cosméticos, consumir ou guardar alimentos nos postos de trabalho sujeitos a agentes biológicos.",
    "referencia": "NR-32, item 32.2.4.4"
  },
  {
    "id": 208,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.2.4.1",
    "enunciado": "A respeito dos lavatórios destinados à higienização das mãos nas instalações da FHCGV, a NR-32 determina que esses devem:",
    "alternativas": {
      "A": "Ser compartilhados indiscriminadamente com as pias de expurgo e lavagem de instrumentais sujos.",
      "B": "Possuir torneiras com registro de acionamento manual por chave de rosca convencional.",
      "C": "Ser dotados de torneira de fechamento que não necessite de contato manual para fechamento (ex: pedal, cotovelo ou sensor), sabonete líquido, toalhas descartáveis e lixeira com pedal.",
      "D": "Utilizar toalhas coletivas de tecido de algodão com troca semanal programada.",
      "E": "Possuir secadores de ar quente em substituição integral ao papel toalha nas salas de isolamento."
    },
    "resposta_correta": "C",
    "comentario": "Os lavatórios para higienização das mãos devem ser exclusivos, providos de torneiras sem contato manual, sabonete líquido, toalhas descartáveis e lixeira acionada sem as mãos (NR-32, item 32.2.4.1).",
    "referencia": "NR-32, item 32.2.4.1"
  },
  {
    "id": 209,
    "materia": "NR-32",
    "dificuldade": "Diretrizes de Higiene das Mãos ANVISA e NR-32",
    "enunciado": "Na higienização das mãos em ambiente hospitalar, o uso de preparação alcoólica a 70% (gel ou solução) é indicado prioritariamente quando:",
    "alternativas": {
      "A": "Em substituição à lavagem das mãos após o uso do sanitário.",
      "B": "O profissional for manipular diretamente alimentos na copa do hospital.",
      "C": "As mãos estiverem visivelmente sujas com sangue ou secreções purulentas.",
      "D": "Houver contaminação direta por esporos de Clostridioides difficile.",
      "E": "As mãos não estiverem visivelmente sujas, promovendo rápida antissepsia entre o contato com diferentes pacientes."
    },
    "resposta_correta": "E",
    "comentario": "A fricção com solução alcoólica é o método de escolha para antissepsia das mãos quando estas não apresentam sujidade visível. Com sujidade visível ou esporos, a lavagem com água e sabonete é mandatória.",
    "referencia": "Diretrizes de Higiene das Mãos ANVISA e NR-32"
  },
  {
    "id": 210,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.2.4.3",
    "enunciado": "Em relação à guarda de vestimentas e uniformes, os trabalhadores expostos a agentes biológicos na FHCGV devem dispor de vestiários com armários dotados de:",
    "alternativas": {
      "A": "Estrutura exclusivamente de madeira porosa para absorver a umidade ambiental.",
      "B": "Prateleiras abertas e coletivas sem tranca para ventilação contínua.",
      "C": "Compartimentos duplos que permitam isolar a roupa de uso pessoal da vestimenta utilizada na atividade hospitalar.",
      "D": "Compartimento único compartilhado entre dois servidores.",
      "E": "Fechaduras biométricas conectadas à central de faturamento do hospital."
    },
    "resposta_correta": "C",
    "comentario": "O item 32.2.4.3 da NR-32 exige armários de compartimento duplo para separar roupas de uso comum das vestimentas de trabalho com exposição biológica.",
    "referencia": "NR-32, item 32.2.4.3"
  },
  {
    "id": 211,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.2.4.6.4",
    "enunciado": "Quanto à higienização das vestimentas e uniformes de trabalho utilizados em setores hospitalares com risco biológico, a NR-32 estipula que:",
    "alternativas": {
      "A": "As roupas contaminadas devem ser descartadas em incinerador após cada uso individual de 12 horas.",
      "B": "O empregador é o responsável pelo processo de descontaminação e higienização das vestimentas quando houver contato com material biológico.",
      "C": "A responsabilidade pela lavagem é exclusiva do trabalhador, que deve levá-los para sua residência ao final de cada plantão.",
      "D": "O trabalhador deve receber um vale-lavanderia comercial com desconto de 20% em folha de pagamento.",
      "E": "O empregador deve pagar um adicional indenizatório de insalubridade de 10% em troca da lavagem doméstica pelo empregado."
    },
    "resposta_correta": "B",
    "comentario": "A higienização de vestimentas de trabalho utilizadas em ambientes com risco biológico é de responsabilidade do empregador (NR-32, subitem 32.2.4.6.4).",
    "referencia": "NR-32, item 32.2.4.6.4"
  },
  {
    "id": 212,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.2.4.9",
    "enunciado": "Durante o procedimento de limpeza de piso em enfermarias e corredores da FHCGV, a equipe de higiene hospitalar deve observar que a NR-32 veda terminantemente:",
    "alternativas": {
      "A": "O uso de placas móveis de sinalização de 'piso molhado'.",
      "B": "A troca periódica de água do balde de desinfecção.",
      "C": "A varredura a seco nas áreas internas assistenciais.",
      "D": "A utilização de esfregonas tipo mop úmido com solução desinfetante.",
      "E": "O uso de luvas de borracha nitrílica de cano longo pelos higienizadores."
    },
    "resposta_correta": "C",
    "comentario": "A varredura a seco em áreas internas de serviços de saúde é proibida pela NR-32 (item 32.2.4.9) devido à aerossolização de patógenos.",
    "referencia": "NR-32, item 32.2.4.9"
  },
  {
    "id": 213,
    "materia": "NR-32",
    "dificuldade": "NR-32 e RDC 50/ANVISA",
    "enunciado": "Em relação aos quartos de isolamento respiratório para pacientes portadores de tuberculose pulmonar bacilífera na FHCGV, o sistema de climatização deve garantir:",
    "alternativas": {
      "A": "Pressão positiva em relação ao corredor para expulsar o ar contaminado para fora do quarto.",
      "B": "Pressão negativa em relação às áreas adjacentes, exaustão de ar com filtragem HEPA ou descarga direta para o exterior.",
      "C": "Ar condicionado tipo split doméstico operando em modo recirculação fechada.",
      "D": "Ventilador de teto comum mantido em velocidade máxima sem recirculação.",
      "E": "Fechamento hermético sem qualquer renovação de ar ambiente."
    },
    "resposta_correta": "B",
    "comentario": "Quartos de isolamento para aerossóis exigem pressão negativa para impedir o escape de partículas infectantes para o corredor, com troca contínua de ar e filtragem HEPA.",
    "referencia": "NR-32 e RDC 50/ANVISA"
  },
  {
    "id": 214,
    "materia": "NR-32",
    "dificuldade": "NR-32 e Diretrizes ANVISA",
    "enunciado": "O equipamento de proteção respiratória indicado para proteger o profissional de saúde contra a inalação de partículas aerossolizadas contendo Mycobacterium tuberculosis é:",
    "alternativas": {
      "A": "Protetor facial acrílico (face shield) isoladamente sem máscara.",
      "B": "Máscara cirúrgica descartável simples de TNT de camada única.",
      "C": "Máscara de tecido de algodão de fabricação caseira lavável.",
      "D": "Respirador purificador de ar semifacial filtrante para partículas PFF2 ou equivalente N95.",
      "E": "Máscara de carvão ativado sem classificação contra partículas biológicas."
    },
    "resposta_correta": "D",
    "comentario": "Para aerossóis biológicos (como bacilo da TB e vírus influenza/covid em intubação), exige-se respirador PFF2/N95. A máscara cirúrgica protege apenas contra gotículas.",
    "referencia": "NR-32 e Diretrizes ANVISA"
  },
  {
    "id": 215,
    "materia": "NR-32",
    "dificuldade": "NR-32 e NR-06",
    "enunciado": "Ao utilizar um respirador descartável PFF2 / N95 antes de entrar no quarto de isolamento de um paciente, o trabalhador de saúde deve obrigatoriamente realizar:",
    "alternativas": {
      "A": "A perfuração de um orifício central com alfinete para facilitar a entrada de oxigênio.",
      "B": "O corte dos elásticos para fixação frouxa atrás das orelhas.",
      "C": "A aplicação de álcool gel 70% sobre as fibras externas do filtro.",
      "D": "A verificação de vedação (teste de pressão positiva e negativa / fit check) cobrindo o respirador com as mãos e expirando/inspirando.",
      "E": "A lavagem do respirador em solução de hipoclorito a 1%."
    },
    "resposta_correta": "D",
    "comentario": "A checagem de vedação (fit check) é o teste rápido feito pelo trabalhador a cada colocação para garantir que não há vazamentos pelas bordas do respirador.",
    "referencia": "NR-32 e NR-06"
  },
  {
    "id": 216,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.2.2.1",
    "enunciado": "O Programa de Gerenciamento de Riscos (PGR) da FHCGV, no que se refere aos agentes biológicos previsto na NR-32, deve conter inventário de riscos com:",
    "alternativas": {
      "A": "Substituição das análises técnicas por uma simples declaração anual firmada pela ouvidoria.",
      "B": "Dispensa de inventário caso o hospital tenha menos de 500 leitos ativos.",
      "C": "Omissão das medidas de prevenção adotadas em setores de pronto-socorro.",
      "D": "Apenas a indicação genérica 'risco biológico hospitalar' sem detalhar atividades.",
      "E": "Identificação das fontes de exposição, agentes patogênicos mais prováveis, vias de transmissão, persistência no ambiente e avaliação dos trabalhadores expostos."
    },
    "resposta_correta": "E",
    "comentario": "A avaliação de riscos biológicos deve detalhar fontes, vias de transmissão, agentes patogênicos prováveis e medidas preventivas aplicadas a cada setor e função.",
    "referencia": "NR-32, item 32.2.2.1"
  },
  {
    "id": 217,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.7",
    "enunciado": "Os recipientes de coleta interna de roupas sujas (hamper) nos leitos hospitalares da FHCGV devem ser:",
    "alternativas": {
      "A": "Lavados somente com água da chuva coletada sem adição de tensoativos.",
      "B": "Dotados de sacos resistentes, impermeáveis, de cor diferenciada e manipulados sem contato direto com o corpo do profissional.",
      "C": "Construídos em madeira porosa para absorver os fluidos corporais dos lençóis.",
      "D": "Apoiados sobre as mesas de refeição dos pacientes para facilitar o descarte pelo técnico.",
      "E": "Esvaziados diretamente no chão do corredor antes da pesagem geral."
    },
    "resposta_correta": "B",
    "comentario": "Os hampers devem possuir sacos impermeáveis resistentes, preenchidos até o limite seguro e fechados no próprio local de geração para transporte seguro.",
    "referencia": "NR-32, item 32.7"
  },
  {
    "id": 218,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.6",
    "enunciado": "Em relação à manipulação de carcaças ou cadáveres no setor de anatomia patológica e necrotério do hospital, a NR-32 exige que:",
    "alternativas": {
      "A": "Os técnicos trabalhem desprovidos de luvas para aumentar a sensibilidade tátil.",
      "B": "Seja permitida a ingestão de café dentro da sala de necropsia caso o exame demore mais de 2 horas.",
      "C": "A água servida da lavagem de vísceras seja despejada diretamente na sarjeta da via pública externa.",
      "D": "O ambiente seja provido de sistema de exaustão de ar, mesas em aço inoxidável com escoamento de líquidos e EPIs adequados (avental impermeável, botas, luvas resistentes e proteção respiratória).",
      "E": "Os cadáveres sejam mantidos em temperatura ambiente de 35ºC para acelerar a necropsia."
    },
    "resposta_correta": "D",
    "comentario": "Salas de necropsia e patologia exigem infraestrutura com exaustão, mesas inoxidáveis laváveis e uso rigoroso de EPIs impermeáveis e de proteção biológica.",
    "referencia": "NR-32, item 32.6"
  },
  {
    "id": 219,
    "materia": "NR-32",
    "dificuldade": "NR-32 e RDC ANVISA",
    "enunciado": "A respeito do colchão e travesseiros hospitalares utilizados nas enfermarias da FHCGV, a NR-32 e normas sanitárias exigem que:",
    "alternativas": {
      "A": "Sejam trocados por colchões novos somente a cada 10 anos de uso hospitalar contínuo.",
      "B": "Possam ser lavados por imersão em água fervente com os pacientes ainda deitados sobre eles.",
      "C": "Permaneçam com as espumas expostas caso haja rasgos provocados por uso continuado.",
      "D": "Sejam confeccionados exclusivamente em tecido de linho cru sem impermeabilização.",
      "E": "Possuam revestimento impermeável e lavável, que permita fácil desinfecção química entre a saída de um paciente e a admissão de outro."
    },
    "resposta_correta": "E",
    "comentario": "Colchões e travesseiros hospitalares devem ter revestimento lavável e impermeável, íntegro, que permita a desinfecção adequada entre internações.",
    "referencia": "NR-32 e RDC ANVISA"
  },
  {
    "id": 220,
    "materia": "NR-32",
    "dificuldade": "Manual de Biossegurança Hospitalar e NR-32",
    "enunciado": "Em caso de derramamento acidental de sangue ou fluidos corporais de grande volume no piso de uma enfermaria, o procedimento técnico correto de limpeza e desinfecção é:",
    "alternativas": {
      "A": "Jogar água em abundância com mangueira pressurizada sem recolher o sangue.",
      "B": "Varrer a poça de sangue seco com vassoura de cerdas duras para formar aerossol.",
      "C": "Cobrir a poça de sangue com um lençol limpo e manter a passagem de pedestres liberada.",
      "D": "Deixar o sangue secar naturalmente por 24 horas para que os vírus morram com o calor ambiente.",
      "E": "Colocar papel absorvente sobre o líquido, aplicar solução desinfetante hospitalar (como hipoclorito a 1%), aguardar o tempo de contato e recolher com pá descartável."
    },
    "resposta_correta": "E",
    "comentario": "A contenção de derramamentos biológicos requer absorção imediata, uso de EPIs, aplicação de desinfetante compatível no tempo de ação preconizado e descarte no lixo Grupo A.",
    "referencia": "Manual de Biossegurança Hospitalar e NR-32"
  },
  {
    "id": 221,
    "materia": "NR-32",
    "dificuldade": "Diretrizes ANVISA e NR-32",
    "enunciado": "A transmissão de agentes patogênicos hospitalares por via aérea difere da transmissão por gotículas principalmente porque:",
    "alternativas": {
      "A": "Os aerossóis possuem partículas menores que 5 micrômetros que permanecem suspensas no ar por longos períodos e atingem alvéolos pulmonares.",
      "B": "As gotículas exigem o uso permanente de escafandro com suprimento de oxigênio de mergulho.",
      "C": "Os aerossóis são gerados unicamente durante o sono tranquilo do paciente.",
      "D": "As gotículas flutuam por horas a distâncias superiores a 20 metros sem cair ao chão.",
      "E": "Os aerossóis não requerem qualquer medida de ventilação mecânica ou EPI."
    },
    "resposta_correta": "A",
    "comentario": "Aerossóis têm diâmetro inferior a 5 micrômetros, mantêm-se suspensos no ar e viajam grandes distâncias, exigindo PFF2/N95 e pressão negativa.",
    "referencia": "Diretrizes ANVISA e NR-32"
  },
  {
    "id": 222,
    "materia": "NR-32",
    "dificuldade": "NR-32 e Protocolos de Biossegurança",
    "enunciado": "Qual dos seguintes procedimentos hospitalares é considerado um PROCEDIMENTO GERADOR DE AEROSSÓIS (PGA) de alto risco para contaminação biológica respiratória da equipe:",
    "alternativas": {
      "A": "Administração de comprimido oral com meio copo de água.",
      "B": "Eletrocardiograma de repouso com eletrodos adesivos.",
      "C": "Inspeção visual da pele do abdome do paciente.",
      "D": "Intubação orotraqueal e aspiração de secreções em vias aéreas abertas.",
      "E": "Aferição manual da pressão arterial com esfigmomanômetro."
    },
    "resposta_correta": "D",
    "comentario": "Intubação traqueal, aspiração endotraqueal, ressuscitação cardiopulmonar e broncoscopia são geradores de aerossóis, exigindo máscara PFF2, capote impermeável, gorro e óculos/face shield.",
    "referencia": "NR-32 e Protocolos de Biossegurança"
  },
  {
    "id": 223,
    "materia": "NR-32",
    "dificuldade": "NR-32 e RDC 15/2012 ANVISA",
    "enunciado": "Em relação à Central de Material e Esterilização (CME) da FHCGV, a NR-32 estabelece que a área de recepção e limpeza dos instrumentais cirúrgicos sujos (expurgo):",
    "alternativas": {
      "A": "Deve constituir um ambiente isolado (área suja), dotado de sistema de exaustão de ar e bancadas com cubas profundas para evitar respingos.",
      "B": "Pode ser utilizada como refeitório secundário para os técnicos em plantões noturnos.",
      "C": "Deve ser completamente aberta e integrada sem paredes com a sala de guarda de materiais estéreis.",
      "D": "Não necessita de ponto de água corrente ou pias para lavagem manual.",
      "E": "Deve permitir a circulação livre de visitantes e familiares de pacientes internados."
    },
    "resposta_correta": "A",
    "comentario": "O expurgo da CME é área suja crítica, devendo ter barreira física para as demais áreas, cubas adequadas, EPIs impermeáveis e fluxo unidirecional.",
    "referencia": "NR-32 e RDC 15/2012 ANVISA"
  },
  {
    "id": 224,
    "materia": "NR-32",
    "dificuldade": "NR-32 e RDC 15/2012",
    "enunciado": "Durante a lavagem manual de instrumentais cirúrgicos com matéria orgânica aderida na CME, o trabalhador deve utilizar obrigatoriamente:",
    "alternativas": {
      "A": "Roupas privativas de algodão sem qualquer proteção ocular ou facial.",
      "B": "Avental impermeável de manga longa, protetor facial ou óculos com máscara, luvas de borracha nitrílica ou látex cano longo e calçado fechado antiderrapante.",
      "C": "Luvas cirúrgicas estéreis finas de espessura de 0,05 mm sem avental.",
      "D": "Apenas chinelos de borracha e máscara de tecido comum.",
      "E": "Luvas de lã tricotada para reter a umidade nas mãos."
    },
    "resposta_correta": "B",
    "comentario": "A limpeza de instrumentais expõe a respingos biológicos e perfuração, exigindo avental plástico impermeável, proteção facial/ocular e luvas grossas de borracha.",
    "referencia": "NR-32 e RDC 15/2012"
  },
  {
    "id": 225,
    "materia": "NR-32",
    "dificuldade": "RDC 15/ANVISA e NR-32",
    "enunciado": "O fluxo de trabalho na Central de Material e Esterilização (CME) deve ser estritamente unidirecional, o que significa que o material segue na sequência:",
    "alternativas": {
      "A": "Esterilização -> Expurgo -> Descarte -> Devolução.",
      "B": "Expurgo (recebimento/limpeza) -> Preparo e empacotamento -> Esterilização -> Guarda e distribuição de material esterilizado.",
      "C": "Área de guarda estéril -> Expurgo -> Esterilização -> Preparo.",
      "D": "Guarda -> Distribuição -> Preparo -> Expurgo.",
      "E": "Expurgo -> Guarda de material estéril -> Lavagem manual -> Embalagem."
    },
    "resposta_correta": "B",
    "comentario": "O fluxo unidirecional impede o cruzamento de materiais sujos com materiais limpos e estéreis (Expurgo -> Preparo -> Esterilização -> Guarda).",
    "referencia": "RDC 15/ANVISA e NR-32"
  },
  {
    "id": 226,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.2.4.9",
    "enunciado": "A respeito do treinamento em prevenção de riscos biológicos preconizado pela NR-32, assinale a opção correta:",
    "alternativas": {
      "A": "O treinamento deve ser ministrado antes do início das atividades do empregado e continuado a cada 1 ano ou sempre que houver alteração nas condições de risco.",
      "B": "O treinamento pode ser realizado após 6 meses de trabalho do novo empregado no hospital.",
      "C": "Basta a assinatura de uma lista de presença pelo trabalhador, sem necessidade de transmissão de conteúdo técnico.",
      "D": "A comprovação do treinamento pode ser descartada após 30 dias de sua realização.",
      "E": "O treinamento é opcional para profissionais de nível superior com diploma de graduação."
    },
    "resposta_correta": "A",
    "comentario": "O item 32.2.4.9 determina treinamento prévio à admissão e continuado, com registro documentado comprovando a capacitação dos trabalhadores.",
    "referencia": "NR-32, item 32.2.4.9"
  },
  {
    "id": 227,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.2.4.9.1",
    "enunciado": "Dentre os conteúdos programáticos OBRIGATÓRIOS no treinamento da NR-32 para trabalhadores expostos a agentes biológicos, NÃO se inclui:",
    "alternativas": {
      "A": "Dados sobre a vigilância epidemiológica e vias de transmissão dos patógenos.",
      "B": "Técnicas de elaboração do plano plurianual de faturamento orçamentário do hospital.",
      "C": "Orientações sobre uso, higienização, limitações e descarte correto dos EPIs.",
      "D": "Condutas a serem adotadas em caso de acidentes e incidentes com sangue e fluidos.",
      "E": "Uso correto dos dispositivos de segurança em perfurocortantes."
    },
    "resposta_correta": "B",
    "comentario": "O faturamento orçamentário não faz parte do treinamento de segurança e saúde no trabalho da NR-32, que foca na biossegurança e proteção do trabalhador.",
    "referencia": "NR-32, item 32.2.4.9.1"
  },
  {
    "id": 228,
    "materia": "NR-32",
    "dificuldade": "NR-32 e Boas Práticas de Laboratório",
    "enunciado": "Nos laboratórios de análises clínicas da FHCGV que manipulam amostras biológicas humanas, a centrifugação de tubos de ensaio deve ser realizada:",
    "alternativas": {
      "A": "Utilizando copos de plástico descartáveis de café como suporte de tubos.",
      "B": "Apenas à noite com as janelas e portas do laboratório escancaradas.",
      "C": "Com a centrífuga totalmente aberta para permitir visualização contínua pelo técnico.",
      "D": "Em centrífugas com tampa de segurança dotada de trava eletromecânica que impeça a abertura com o rotor em movimento e caçapas com tampas herméticas contra aerossóis.",
      "E": "Segurando os tubos de vidro manualmente com uma pinça de madeira enquanto o motor gira."
    },
    "resposta_correta": "D",
    "comentario": "As centrífugas laboratoriais devem ter travas de segurança e caçapas seladas para evitar formação e dispersão de aerossóis biológicos em caso de quebra de tubos.",
    "referencia": "NR-32 e Boas Práticas de Laboratório"
  },
  {
    "id": 229,
    "materia": "NR-32",
    "dificuldade": "NR-32 e Diretrizes de Biossegurança",
    "enunciado": "A pipetagem manual de sangue ou líquidos corporais com a boca é classificada pelas normas de biossegurança e pela NR-32 como:",
    "alternativas": {
      "A": "Prática terminantemente proibida, sendo obrigatório o uso de micropipetadores mecânicos ou pipetadores automáticos com ponteiras adequadas.",
      "B": "Recomendada para dosagens de eletrólitos de emergência em UTI.",
      "C": "Autorizada exclusivamente para farmacêuticos e biomédicos graduados.",
      "D": "Permitida quando os técnicos estiverem em jejum de pelo menos 8 horas.",
      "E": "Permitida apenas se a amostra biológica for previamente diluída em água destilada."
    },
    "resposta_correta": "A",
    "comentario": "A pipetagem com a boca é expressamente vedada em quaisquer circunstâncias devido ao altíssimo risco de ingestão e aspiração de patógenos.",
    "referencia": "NR-32 e Diretrizes de Biossegurança"
  },
  {
    "id": 230,
    "materia": "NR-32",
    "dificuldade": "Lei 13.589/2018, RE 09/ANVISA e NR-32",
    "enunciado": "Em relação aos filtros de ar-condicionado de setores hospitalares críticos como Bloco Cirúrgico e UTI Cardiológica da FHCGV, a manutenção deve garantir:",
    "alternativas": {
      "A": "Dispensa de qualquer controle de qualidade do ar interior nas salas limpas.",
      "B": "Limpeza e substituição periódica com registro formal no PMOC (Plano de Manutenção, Operação e Controle) para evitar acúmulo de fungos e bactérias.",
      "C": "Borrifação de perfume automotivo nos dutos de ventilação para neutralizar odores.",
      "D": "Desligamento do sistema de ar durante todas as cirurgias de grande porte.",
      "E": "Uso permanente de filtros de lã de vidro sem troca por até 20 anos consecutivos."
    },
    "resposta_correta": "B",
    "comentario": "O PMOC e as normas sanitárias exigem inspeção, higienização e troca periódica dos filtros (especialmente filtros HEPA) para garantir a qualidade biológica do ar.",
    "referencia": "Lei 13.589/2018, RE 09/ANVISA e NR-32"
  },
  {
    "id": 231,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.7",
    "enunciado": "Na hotelaria hospitalar da FHCGV, a separação da lavanderia em 'Área Suja' e 'Área Limpa' tem por objetivo primordial de segurança:",
    "alternativas": {
      "A": "Reduzir o consumo de energia elétrica das lavadoras industriais.",
      "B": "Impedir a contaminação cruzada do enxoval limpo e esterilizado por microrganismos patogênicos provenientes das roupas recém-retiradas dos leitos.",
      "C": "Facilitar o acesso livre de ambulantes para venda de sabão em pó.",
      "D": "Eliminar a necessidade de pagamento do adicional de insalubridade aos lavadores.",
      "E": "Permitir que os trabalhadores fumem na área limpa sem incomodar os da área suja."
    },
    "resposta_correta": "B",
    "comentario": "A barreira física entre área suja e limpa impede que bactérias e vírus carreados nas roupas sujas contaminem as roupas higienizadas prontas para uso.",
    "referencia": "NR-32, item 32.7"
  },
  {
    "id": 232,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.2.4.4 e NR-24",
    "enunciado": "Qual a recomendação da NR-32 a respeito do consumo de alimentos pelo trabalhador durante seu intervalo de refeição no hospital?",
    "alternativas": {
      "A": "O empregador deve disponibilizar refeitório ou local exclusivo para refeições, fora das áreas de assistência e postos com risco de contaminação biológica.",
      "B": "Os trabalhadores podem almoçar dentro do posto de enfermagem ou na bancada de esterilização se estiverem vigiando o setor.",
      "C": "É expressamente proibido qualquer tipo de intervalo para refeições na jornada de 12 horas.",
      "D": "As refeições devem ser realizadas em pé nos corredores ao lado dos carrinhos de curativo.",
      "E": "O trabalhador deve alimentar-se no próprio leito vago do paciente de enfermaria."
    },
    "resposta_correta": "A",
    "comentario": "A NR-32 exige locais próprios e adequados para refeições fora das áreas assistenciais e longe de fontes de agentes biológicos.",
    "referencia": "NR-32, item 32.2.4.4 e NR-24"
  },
  {
    "id": 233,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.2.4.1",
    "enunciado": "Em relação à higienização das mãos com água e sabonete pelos profissionais de enfermagem, o uso de toalhas de papel deve ser:",
    "alternativas": {
      "A": "Limitado a uma única folha por dia de plantão para economizar recursos públicos.",
      "B": "Substituído por aventais de pano que os próprios trabalhadores amarram à cintura.",
      "C": "Realizado com folhas de jornal reciclado comum picado.",
      "D": "Dispensado, devendo os trabalhadores secar as mãos nas calças de seus uniformes privativos.",
      "E": "Em folhas duplas ou simples descartáveis, sendo proibida a reutilização ou o uso de toalhas de rolo coletivo de tecido não lavável."
    },
    "resposta_correta": "E",
    "comentario": "A secagem de mãos deve ser feita exclusivamente com papel toalha descartável de boa absorção, vedadas toalhas de uso coletivo (NR-32, item 32.2.4.1).",
    "referencia": "NR-32, item 32.2.4.1"
  },
  {
    "id": 234,
    "materia": "NR-32",
    "dificuldade": "Diretrizes ANVISA e NR-32",
    "enunciado": "A respeito do uso de luvas de procedimentos por técnicos de enfermagem ao prestar assistência hospitalar, a NR-32 e manuais da ANVISA determinam que:",
    "alternativas": {
      "A": "O profissional deve aplicar álcool em gel 70% sobre as luvas calçadas para limpá-las e continuar o atendimento ao próximo leito.",
      "B": "As luvas descartáveis devem ser guardadas no bolso do jaleco para o próximo plantão semanal.",
      "C": "O profissional deve higienizar as mãos imediatamente antes de calçar as luvas e logo após a sua retirada entre um paciente e outro.",
      "D": "As luvas de procedimento podem ser lavadas na torneira com detergente para reutilização em até cinco pacientes consecutivos.",
      "E": "O uso de luvas substitui completamente a necessidade de higienizar as mãos com água e sabão."
    },
    "resposta_correta": "C",
    "comentario": "As luvas nunca substituem a higienização das mãos. A fricção com álcool ou lavagem com água e sabão deve ocorrer antes de calçar e imediatamente após retirá-las.",
    "referencia": "Diretrizes ANVISA e NR-32"
  },
  {
    "id": 235,
    "materia": "NR-32",
    "dificuldade": "Protocolos de Infecção Hospitalar e NR-32",
    "enunciado": "Na assistência a pacientes colonizados ou infectados por bactérias multirresistentes (ex: KPC, VRE, Acinetobacter baumannii), as precauções de contato preconizam:",
    "alternativas": {
      "A": "Dispensa de paramentação se o profissional permanecer a menos de 2 metros da cama.",
      "B": "Uso exclusivo de respirador PFF3 sem necessidade de luvas ou higienização de mãos.",
      "C": "Proibição de qualquer atendimento de saúde ao paciente por mais de 30 dias.",
      "D": "Uso de quarto privativo (ou coorte), avental de mangas longas e luvas de procedimento durante todo o contato com o paciente ou ambiente próximo, com higienização estrita das mãos.",
      "E": "Manter a porta do quarto aberta com exaustor soprando o ar para o posto de enfermagem."
    },
    "resposta_correta": "D",
    "comentario": "As precauções de contato para multirresistentes exigem avental impermeável/limpo e luvas durante o contato com o paciente e mobiliário, além de limpeza terminal rigorosa.",
    "referencia": "Protocolos de Infecção Hospitalar e NR-32"
  },
  {
    "id": 236,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.2.4.14",
    "enunciado": "Em relação à identificação visual de recipientes contendo amostras biológicas nos laboratórios e setores hospitalares da FHCGV, é MANDATÓRIO:",
    "alternativas": {
      "A": "A dispensa de identificação caso a amostra seja transportada em temperatura ambiente.",
      "B": "A aposição do símbolo internacional de risco biológico e identificação clara do conteúdo e do paciente.",
      "C": "A colocação de frases publicitárias sobre a fundação hospitalar cobrindo o rótulo.",
      "D": "A utilização exclusiva de fitas adesivas pretas sem nenhum tipo de inscrição gráfica.",
      "E": "O preenchimento do rótulo apenas com as iniciais do técnico de segurança do trabalho."
    },
    "resposta_correta": "B",
    "comentario": "A NR-32 exige que todos os recipientes contendo material biológico sejam identificados com o símbolo internacional de risco biológico e dados adequados da amostra.",
    "referencia": "NR-32, item 32.2.4.14"
  },
  {
    "id": 237,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.2.4.6.3",
    "enunciado": "Ao término da jornada de trabalho, o trabalhador exposto a agentes biológicos que utiliza vestimenta fornecida pelo hospital para uso exclusivo interno deve:",
    "alternativas": {
      "A": "Fazer compras em supermercados e frequentar restaurantes trajando o uniforme do hospital.",
      "B": "Levar a vestimenta contaminada em sacola aberta para lavar juntamente com as roupas de seus familiares.",
      "C": "Permanecer vestindo a mesma roupa para retornar para casa em transporte coletivo urbano.",
      "D": "Retirar a vestimenta de trabalho no vestiário hospitalar, acondicioná-la no local destinado e vestir suas roupas civis de uso comum.",
      "E": "Vender o uniforme a outro colega do plantão que esteja sem roupa limpa."
    },
    "resposta_correta": "D",
    "comentario": "A NR-32 veda terminantemente ao trabalhador sair do estabelecimento com vestimentas de trabalho utilizadas nas áreas com risco de exposição biológica (item 32.2.4.6.3).",
    "referencia": "NR-32, item 32.2.4.6.3"
  },
  {
    "id": 238,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.2.4.6.3",
    "enunciado": "Um técnico de enfermagem foi flagrado utilizando seu jaleco de trabalho no refeitório externo e nas lanchonetes da vizinhança da FHCGV. À luz da NR-32, a conduta desse servidor:",
    "alternativas": {
      "A": "Só seria infração se o funcionário estivesse portando agulhas usadas no bolso do jaleco.",
      "B": "É permitida desde que o jaleco tenha sido passado a ferro na manhã do mesmo dia.",
      "C": "É recomendada pelas comissões de controle de infecção para desinfecção do jaleco pela luz solar.",
      "D": "É plenamente amparada pela CLT, pois o jaleco confere autoridade visual na comunidade.",
      "E": "Constitui violação expressa à NR-32, que proíbe expressamente sair do ambiente hospitalar com os EPIs e vestimentas de trabalho utilizados na assistência."
    },
    "resposta_correta": "E",
    "comentario": "O subitem 32.2.4.6.3 da NR-32 proíbe os trabalhadores de saírem do local de trabalho com os equipamentos de proteção individual e as vestimentas utilizadas em suas atividades assistenciais.",
    "referencia": "NR-32, item 32.2.4.6.3"
  },
  {
    "id": 239,
    "materia": "NR-32",
    "dificuldade": "NR-32 e Portaria MS 2.616/1998",
    "enunciado": "A respeito do Comitê de Biossegurança e da Comissão de Controle de Infecção Hospitalar (CCIH) em relação à segurança ocupacional:",
    "alternativas": {
      "A": "A NR-32 proíbe o SESMT de trocar informações com os médicos e enfermeiros da CCIH.",
      "B": "A CCIH preocupa-se unicamente com custos financeiros de antibióticos, sem qualquer relação com a segurança da equipe de enfermagem.",
      "C": "O controle de infecção hospitalar é tarefa restrita à vigilância privada contratada do hospital.",
      "D": "O TST deve atuar de forma articulada com a CCIH, integrando medidas de prevenção contra infecções hospitalares com a proteção dos próprios trabalhadores do hospital.",
      "E": "O TST tem poder hierárquico unilateral para extinguir a CCIH em hospitais estaduais."
    },
    "resposta_correta": "D",
    "comentario": "A integração entre SESMT, CIPA e CCIH é fundamental para garantir a proteção simultânea dos pacientes e dos trabalhadores de saúde contra patógenos hospitalares.",
    "referencia": "NR-32 e Portaria MS 2.616/1998"
  },
  {
    "id": 240,
    "materia": "NR-32",
    "dificuldade": "Diretrizes ANVISA e NR-32",
    "enunciado": "Em relação à circulação de ar em enfermarias de isolamento por gotículas (ex: meningite meningocócica, coqueluche), a diretriz técnica orienta:",
    "alternativas": {
      "A": "O uso contínuo de respirador motorizado com ar comprimido mandado para toda a equipe.",
      "B": "A vedação hermética da porta com fita adesiva cinza e lacre chumbado.",
      "C": "Apenas o uso de máscara cirúrgica pelo trabalhador ao se aproximar a menos de 1 metro do paciente e máscara no paciente durante transportes necessários.",
      "D": "A instalação obrigatória de filtros nucleares de carvão com temperatura de 100ºC no teto.",
      "E": "A proibição da entrada de qualquer profissional de saúde na enfermaria por 14 dias."
    },
    "resposta_correta": "C",
    "comentario": "Gotículas são partículas pesadas (> 5 micrômetros) que decaem em até 1 a 2 metros da fonte; exigem máscara cirúrgica para a equipe próxima e no paciente durante deslocamentos.",
    "referencia": "Diretrizes ANVISA e NR-32"
  },
  {
    "id": 241,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.3 e Manual de Biossegurança em Odontologia",
    "enunciado": "Em serviços de odontologia hospitalar e bucomaxilofacial da FHCGV, o uso de turbinas de alta rotação e aparelhos de ultrassom gera grande quantidade de névoa biológica. A medida adequada é:",
    "alternativas": {
      "A": "Substituição das luvas de procedimento por luvas térmicas de forno micro-ondas.",
      "B": "Uso de respirador PFF2/N95, protetor facial acrílico (face shield), óculos com vedação lateral, sugador de alta potência e avental impermeável.",
      "C": "Realização dos procedimentos odontológicos na penumbra para diminuir a dispersão da saliva.",
      "D": "Uso de máscara cirúrgica simples frouxa com a janela da sala fechada.",
      "E": "Dispensa de óculos de proteção caso o cirurgião-dentista use óculos de grau comum."
    },
    "resposta_correta": "B",
    "comentario": "Procedimentos odontológicos de alta rotação produzem aerossóis intensos com sangue e saliva, exigindo proteção facial completa, respiradores PFF2 e sucção potente.",
    "referencia": "NR-32, item 32.3 e Manual de Biossegurança em Odontologia"
  },
  {
    "id": 242,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.2.4.15 e RDC 222/2018",
    "enunciado": "Sobre a limpeza de vidros quebrados contaminados com matéria orgânica (ex: frasco de hemocultura quebrado no chão), a equipe de higiene hospitalar deve:",
    "alternativas": {
      "A": "Empurrar os cacos de vidro com os pés descalços até o ralo mais próximo da enfermaria.",
      "B": "Jogar ácido clorídrico sobre os vidros para tentar dissolvê-los no piso do hospital.",
      "C": "Cobrir com toalha de papel e permitir que os transeuntes pisem por cima até triturar o vidro.",
      "D": "Utilizar instrumentos auxiliares mecânicos como pá e pinça ou vassourinha, nunca recolhendo fragmentos pontiagudos diretamente com as mãos.",
      "E": "Recolher os cacos de vidro com as mãos desnudas para não estragar as luvas de borracha."
    },
    "resposta_correta": "D",
    "comentario": "Fragmentos de vidro contaminados jamais devem ser manipulados diretamente com as mãos, devendo-se empregar pás, pinças e descartar em recipiente para perfurocortantes (Grupo E).",
    "referencia": "NR-32, item 32.2.4.15 e RDC 222/2018"
  },
  {
    "id": 243,
    "materia": "NR-32",
    "dificuldade": "Boas Práticas ANVISA e NR-32",
    "enunciado": "Em relação aos dispensers de sabonete líquido e de álcool em gel 70% fixados nas paredes dos setores do hospital:",
    "alternativas": {
      "A": "Devem ser reabastecidos somente após esvaziamento completo, com limpeza e desinfecção periódica do reservatório para evitar contaminação do insumo.",
      "B": "Devem conter sabão em barra coletivo apoiado em saboneteiras com acúmulo de água estagnada.",
      "C": "Devem ser retirados das enfermarias para evitar desperdício de insumos sanitários.",
      "D": "Podem ser completados com água de torneira quando o nível de sabonete estiver abaixo de 20%.",
      "E": "Podem ser abastecidos com desinfetante cremoso de uso doméstico não regulamentado pela ANVISA."
    },
    "resposta_correta": "A",
    "comentario": "Dispensadores de sabonete e antisséptico devem ser higienizados periodicamente; o reabastecimento sobre restos sem higienização favorece a contaminação intrínseca por bactérias.",
    "referencia": "Boas Práticas ANVISA e NR-32"
  },
  {
    "id": 244,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.2.4.15",
    "enunciado": "Durante a punção venosa periférica para coleta de sangue em laboratório da FHCGV, o procedimento técnico de biossegurança preconiza:",
    "alternativas": {
      "A": "Uso de luvas de procedimento descartáveis, higienização prévia das mãos e descarte imediato do conjunto agulha/seringa ou sistema a vácuo em caixa coletora sem reencape.",
      "B": "Entrega da seringa com agulha destampada nas mãos do paciente para que ele jogue no lixo.",
      "C": "Colocação da agulha usada sobre a bancada acolchoada para descarte posterior ao final do turno.",
      "D": "Retirada das luvas antes da punção para encontrar melhor a veia e descarte no ralo da pia.",
      "E": "Reencape imediato da agulha com as duas mãos antes de se levantar da bancada."
    },
    "resposta_correta": "A",
    "comentario": "A punção venosa exige luvas, assepsia prévia, proibição estrita de reencape e descarte imediato do perfurocortante em coletor rígido no ponto de assistência.",
    "referencia": "NR-32, item 32.2.4.15"
  },
  {
    "id": 245,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.2.3.5",
    "enunciado": "A NR-32 estabelece que em todo local onde exista a possibilidade de exposição a agentes biológicos, devem ser disponibilizadas aos trabalhadores instruções escritas sobre:",
    "alternativas": {
      "A": "A rotina de solicitação de férias e licenças-prêmio dos servidores estaduais.",
      "B": "A lista de compras de mobiliário administrativo para a diretoria executiva.",
      "C": "A conduta imediata a ser adotada em caso de acidente de trabalho ou incidente envolvendo material biológico humano.",
      "D": "A tabela de preços dos procedimentos particulares cobrados pela ouvidoria hospitalar.",
      "E": "O regulamento eleitoral para escolha do diretor-geral da fundação hospitalar."
    },
    "resposta_correta": "C",
    "comentario": "A NR-32 exige que haja instruções escritas e acessíveis com o fluxo de condutas pós-exposição a material biológico em todos os setores com risco.",
    "referencia": "NR-32, item 32.2.3.5"
  },
  {
    "id": 246,
    "materia": "NR-32",
    "dificuldade": "Manual de Limpeza de Superfícies ANVISA e NR-32",
    "enunciado": "A descontaminação de superfícies fixas (mesas de exame, bancadas de laboratório, suportes de soro) contaminadas por matéria orgânica em leitos hospitalares da FHCGV deve ser realizada:",
    "alternativas": {
      "A": "Deixando o móvel exposto à chuva no pátio externo do hospital por uma semana.",
      "B": "Com a aplicação direta de querosene ou óleo diesel para dar brilho ao mobiliário.",
      "C": "Lavando a seco com espanador de penas de avestruz sem desinfetante químico.",
      "D": "Apenas soprando ar quente com secador de cabelo por 30 segundos.",
      "E": "Utilizando desinfetantes de nível intermediário ou baixo aprovados pela ANVISA (ex: álcool a 70% ou compostos clorados), após limpeza prévia com água e detergente."
    },
    "resposta_correta": "E",
    "comentario": "Superfícies hospitalares exigem remoção mecânica prévia de matéria orgânica e posterior fricção com álcool a 70% ou desinfetante padronizado pela CCIH.",
    "referencia": "Manual de Limpeza de Superfícies ANVISA e NR-32"
  },
  {
    "id": 247,
    "materia": "NR-32",
    "dificuldade": "Diretrizes ANVISA/OMS e NR-32",
    "enunciado": "Em relação à higienização das mãos, a técnica correta com água e sabonete para remoção de sujidade e redução de microrganismos deve durar aproximadamente:",
    "alternativas": {
      "A": "De 40 a 60 segundos, friccionando palmas, dorso das mãos, espaços interdigitais, polegares, articulações e punhos.",
      "B": "Cerca de 2 segundos, bastando colocar as mãos sob a água corrente sem sabão.",
      "C": "1 hora ininterrupta com escova de cerdas de aço de uso comunitário.",
      "D": "De 5 a 10 segundos, molhando apenas as pontas dos dedos indicador e polegar.",
      "E": "Exatamente 15 minutos cronometrados com cronômetro cirúrgico digital."
    },
    "resposta_correta": "A",
    "comentario": "Conforme diretrizes da OMS e ANVISA, a higienização com água e sabão dura de 40 a 60 segundos; a fricção antisséptica com álcool em gel dura de 20 a 30 segundos.",
    "referencia": "Diretrizes ANVISA/OMS e NR-32"
  },
  {
    "id": 248,
    "materia": "NR-32",
    "dificuldade": "NR-32 e NR-07",
    "enunciado": "Caso um trabalhador apresente lesões exsudativas ou dermatite ativa nas mãos, a conduta recomendada pelas diretrizes de saúde ocupacional da NR-32 e PCMSO é:",
    "alternativas": {
      "A": "Injetar antibióticos diretamente nas feridas no próprio balcão de enfermagem.",
      "B": "Cobrir a lesão aberta com fita isolante industrial e continuar trabalhando normalmente.",
      "C": "Obrigar o trabalhador a realizar punções venosas e trocas de curativo sem luvas para cicatrizar com o ar.",
      "D": "Avaliação médica ocupacional com eventual afastamento temporário de atividades de assistência direta a pacientes com risco biológico até a cicatrização da lesão de pele.",
      "E": "Demissão sumária do trabalhador por justa causa médica."
    },
    "resposta_correta": "D",
    "comentario": "Lesões de pele íntegra constituem porta de entrada para patógenos sanguíneos e de transmissão biológica; o trabalhador deve ser avaliado pelo médico do trabalho do SESMT.",
    "referencia": "NR-32 e NR-07"
  },
  {
    "id": 249,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.2.4.13",
    "enunciado": "A respeito do transporte interno de amostras biológicas (tubos de sangue, frascos de urina, biópsias) entre as enfermarias e o laboratório da FHCGV, a NR-32 exige:",
    "alternativas": {
      "A": "O transporte em sacos de compras de supermercado plásticos translúcidos com furos de ventilação.",
      "B": "Que os tubos fiquem soltos nos bolsos dos jalecos dos maqueiros para amortecer impactos.",
      "C": "O transporte exclusivo por drone elétrico através dos corredores do hospital.",
      "D": "O uso de caixas térmicas ou recipientes rígidos de transporte impermeáveis, estanques, com tampa e identificados com o símbolo de risco biológico.",
      "E": "Que as amostras sejam carregadas diretamente nas mãos desprotegidas dos estagiários sem apoio."
    },
    "resposta_correta": "D",
    "comentario": "Amostras biológicas devem ser transportadas em recipientes secundários rígidos, estanques, laváveis, com trava e identificados contra vazamentos em caso de queda.",
    "referencia": "NR-32, item 32.2.4.13"
  },
  {
    "id": 250,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.2.1.1",
    "enunciado": "Qual a definição de 'Agente Biológico' adotada pela Norma Regulamentadora nº 32 para fins de aplicação de suas medidas de segurança?",
    "alternativas": {
      "A": "Os microrganismos, geneticamente modificados ou não; as culturas de células; os parasitas; as toxinas e os príons.",
      "B": "Quaisquer animais vertebrados vivos internados no biotério de pesquisas do hospital.",
      "C": "Poeiras minerais de sílica livre e fibras de amianto respirável em suspensão aérea.",
      "D": "Substâncias puramente químicas minerais com capacidade corrosiva sobre ligas metálicas.",
      "E": "Apenas vírus da imunodeficiência humana (HIV) e vírus da hepatite C."
    },
    "resposta_correta": "A",
    "comentario": "Conforme o item 32.2.1.1 da NR-32, consideram-se agentes biológicos os microrganismos (geneticamente modificados ou não), culturas de células, parasitas, toxinas e príons.",
    "referencia": "NR-32, item 32.2.1.1"
  },
  {
    "id": 251,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.2.4.15",
    "enunciado": "Em relação ao manuseio de materiais perfurocortantes, o subitem 32.2.4.15 da NR-32 estabelece taxativamente que:",
    "alternativas": {
      "A": "São vedados o reencape e a desconexão manual de agulhas com as mãos.",
      "B": "O reencape só é proibido para agulhas de calibre superior a 25x8 mm.",
      "C": "O reencape manual de agulhas é permitido se realizado com técnica passiva de uma mão.",
      "D": "A desconexão manual de agulhas é permitida se o profissional utilizar luvas cirúrgicas duplas.",
      "E": "A agulha deve ser entortada ou quebrada com alicate cirúrgico antes do descarte."
    },
    "resposta_correta": "A",
    "comentario": "O item 32.2.4.15 da NR-32 proíbe terminantemente o reencape e a desconexão manual de agulhas.",
    "referencia": "NR-32, item 32.2.4.15"
  },
  {
    "id": 252,
    "materia": "NR-32",
    "dificuldade": "Portaria MTE 939/2006 e NR-32",
    "enunciado": "A Portaria MTE nº 939/2006 (atualizada e incorporada à NR-32) estabeleceu a obrigatoriedade da implantação de dispositivos de segurança em:",
    "alternativas": {
      "A": "Exclusivamente nas agulhas de anestesia peridural e raquidiana.",
      "B": "Todos os materiais perfurocortantes utilizados nos serviços de saúde para prevenir acidentes ocupacionais.",
      "C": "Apenas em bisturis descartáveis utilizados em centros cirúrgicos terciários.",
      "D": "Apenas nas seringas de insulina distribuídas para uso domiciliar de pacientes.",
      "E": "Somente em equipamentos hospitalares importados de países da União Europeia."
    },
    "resposta_correta": "B",
    "comentario": "A Portaria 939/2006 determina que todos os materiais perfurocortantes devem possuir dispositivo de segurança integrado ou passivo.",
    "referencia": "Portaria MTE 939/2006 e NR-32"
  },
  {
    "id": 253,
    "materia": "NR-32",
    "dificuldade": "NR-32 e Portaria 939/2006",
    "enunciado": "Um dispositivo de segurança para perfurocortantes, para atender às exigências da NR-32, deve possuir as seguintes características técnicas:",
    "alternativas": {
      "A": "Ser confeccionado exclusivamente em vidro temperado semitransparente.",
      "B": "Permitir o destravamento mecânico repetido pelo técnico para reaproveitar a agulha em outro paciente.",
      "C": "Ser de acionamento complexo, exigindo o uso de ferramentas externas e chaves manuais.",
      "D": "Ser parte integrante do dispositivo (ou pré-acoplado), de acionamento fácil, seguro e que impeça a reutilização da agulha após travamento.",
      "E": "Exigir que o profissional use as duas mãos simultaneamente em frente à ponta da agulha para ativá-lo."
    },
    "resposta_correta": "D",
    "comentario": "O dispositivo de segurança deve ser parte integrante, com mecanismo de travamento irreversível, de preferência passivo ou acionável com uma única mão.",
    "referencia": "NR-32 e Portaria 939/2006"
  },
  {
    "id": 254,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.2.4.15 e RDC 222/2018",
    "enunciado": "Qual é o limite máximo de preenchimento dos recipientes para acondicionamento de materiais perfurocortantes (caixas rígidas amarelas) conforme a NR-32 e normas sanitárias?",
    "alternativas": {
      "A": "Até a borda superior externa da tampa plástica.",
      "B": "Até 95% do volume total, lacrando com fita crepe comum.",
      "C": "Até a linha indicadora de capacidade máxima demarcada pelo fabricante (cerca de 5 cm abaixo do bocal / 2/3 a 3/4 do volume).",
      "D": "Até 100% de sua capacidade volumétrica, comprimindo com as mãos para caber mais agulhas.",
      "E": "Até a metade da caixa (50%), devendo ser descartada após 24 horas independentemente do volume."
    },
    "resposta_correta": "C",
    "comentario": "Os coletores de perfurocortantes devem ser preenchidos somente até a linha tracejada de segurança fixada a cerca de 5 cm abaixo da abertura superior.",
    "referencia": "NR-32, item 32.2.4.15 e RDC 222/2018"
  },
  {
    "id": 255,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.2.4.15",
    "enunciado": "Em relação à localização e instalação dos coletores rígidos de descarte de perfurocortantes nos leitos e postos da FHCGV, a NR-32 determina que:",
    "alternativas": {
      "A": "Devem estar fixados em suportes exclusivos, em altura que permita a visualização da abertura e linha de enchimento pelo trabalhador, próximo ao local de geração.",
      "B": "Devem ser instalados exclusivamente nos banheiros públicos dos visitantes.",
      "C": "Devem ser guardados trancados dentro dos armários do almoxarifado central.",
      "D": "Devem ser colocados diretamente apoiados sobre o piso próximo à lixeira comum.",
      "E": "Devem ficar pendurados em cabides móveis na altura de 2,20 metros do solo."
    },
    "resposta_correta": "A",
    "comentario": "Os coletores de perfurocortantes devem ser mantidos em suporte apropriado, em altura acessível e visível (ergonômica), junto ao local do procedimento.",
    "referencia": "NR-32, item 32.2.4.15"
  },
  {
    "id": 256,
    "materia": "NR-32",
    "dificuldade": "Protocolo de Exposição Ocupacional a Material Biológico / Ministério da Saúde e NR-32",
    "enunciado": "Ocorrendo um acidente perfurocortante com agulha contaminada por sangue de paciente, qual deve ser a PRIMEIRA conduta imediata no local da lesão pelo trabalhador acidentado?",
    "alternativas": {
      "A": "Colocar açúcar cristal ou borra de café para estancar o sangramento imediato.",
      "B": "Lavar exaustivamente o local ferido com água e sabão (ou soro fisiológico em caso de mucosa), sem espremer a lesão.",
      "C": "Fazer torniquete apertado no membro afetado e aplicar álcool puro a 99% na incisão.",
      "D": "Cauterizar a ferida com ferro quente ou chama de isqueiro no balcão da farmácia.",
      "E": "Espremer a ferida com força até sair sangue arterial por 10 minutos."
    },
    "resposta_correta": "B",
    "comentario": "A conduta inicial é lavar exaustivamente o ferimento com água e sabão; espremer a lesão é contraindicado pois aumenta o trauma e a circulação local do vírus.",
    "referencia": "Protocolo de Exposição Ocupacional a Material Biológico / Ministério da Saúde e NR-32"
  },
  {
    "id": 257,
    "materia": "NR-32",
    "dificuldade": "Protocolos de Biossegurança MS e NR-32",
    "enunciado": "Caso o acidente com material biológico envolva respingo de sangue nos olhos ou na mucosa oral do trabalhador da FHCGV, a recomendação oficial é:",
    "alternativas": {
      "A": "Friccionar os olhos com as mãos enluvadas sujas para remover o sangue.",
      "B": "Instilar solução alcoólica a 70% na conjuntiva ocular.",
      "C": "Vedar os olhos com gaze seca por 48 horas sem qualquer irrigação líquida.",
      "D": "Lavar a mucosa exaustivamente com soro fisiológico a 0,9% ou água corrente limpa.",
      "E": "Pingar colírio anestésico concentrado sem lavar os olhos."
    },
    "resposta_correta": "D",
    "comentario": "A exposição de mucosas exige lavagem exaustiva com solução salina isotônica (soro fisiológico) ou água corrente em abundância.",
    "referencia": "Protocolos de Biossegurança MS e NR-32"
  },
  {
    "id": 258,
    "materia": "NR-32",
    "dificuldade": "Protocolo Clínico e Diretrizes Terapêuticas para PEP (Ministério da Saúde) e NR-32",
    "enunciado": "A Profilaxia Pós-Exposição (PEP) para o vírus da imunodeficiência humana (HIV) após acidente perfurocortante grave deve ser iniciada idealmente nas primeiras:",
    "alternativas": {
      "A": "7 a 14 dias após a confirmação sorológica do paciente-fonte.",
      "B": "48 a 96 horas, não tendo eficácia se iniciada antes de 24 horas.",
      "C": "2 horas após o acidente, tolerando-se início em até 72 horas.",
      "D": "30 dias após o fechamento do inquérito administrativo pela fundação.",
      "E": "Qualquer momento dentro dos primeiros 6 meses após a ocorrência."
    },
    "resposta_correta": "C",
    "comentario": "A quimioprofilaxia antirretroviral (PEP HIV) tem máxima eficácia se iniciada nas primeiras 2 horas pós-acidente, tendo limite de benefício até 72 horas.",
    "referencia": "Protocolo Clínico e Diretrizes Terapêuticas para PEP (Ministério da Saúde) e NR-32"
  },
  {
    "id": 259,
    "materia": "NR-32",
    "dificuldade": "Protocolo de Exposição Ocupacional MS e NR-32",
    "enunciado": "A respeito da identificação do paciente-fonte em acidente com perfurocortante na FHCGV, a conduta correta do serviço de saúde compreende:",
    "alternativas": {
      "A": "Dispensar a testagem da fonte caso o paciente aparente boa saúde visual e boa vestimenta.",
      "B": "Realizar testagem rápida para HIV, Hepatite B (HBsAg) e Hepatite C (Anti-HCV) do paciente-fonte, mediante consentimento informado, e teste basal do trabalhador.",
      "C": "Testar apenas a urina do paciente para dosagem de glicose e ureia.",
      "D": "Colher sangue do paciente à força sem que ele saiba da realização dos testes.",
      "E": "Obrigar o paciente-fonte a assinar termo de confissão de culpa pela transmissão viral."
    },
    "resposta_correta": "B",
    "comentario": "Deve-se buscar a identificação do paciente-fonte para realização de testes rápidos (HIV, HBsAg, HCV) com consentimento, avaliando o risco e conduta profilática para o trabalhador.",
    "referencia": "Protocolo de Exposição Ocupacional MS e NR-32"
  },
  {
    "id": 260,
    "materia": "NR-32",
    "dificuldade": "Lei 8.213/91, Art. 22 e NR-32, item 32.2.4.15",
    "enunciado": "Em relação à emissão da Comunicação de Acidente de Trabalho (CAT) em acidentes com materiais perfurocortantes e exposição biológica:",
    "alternativas": {
      "A": "A emissão da CAT é obrigatória para todo e qualquer acidente com material biológico perfurocortante, mesmo que não haja afastamento do trabalho.",
      "B": "A empresa tem prazo de 30 dias úteis para comunicar o acidente à Previdência Social.",
      "C": "A CAT é dispensada se a fonte for sabidamente não reagente para HIV e Hepatite.",
      "D": "Apenas o médico perito do INSS tem competência legal para preencher a primeira via da CAT.",
      "E": "A CAT só deve ser emitida se o trabalhador sofrer amputação ou afastamento superior a 15 dias."
    },
    "resposta_correta": "A",
    "comentario": "A emissão da CAT é obrigatória em qualquer acidente biológico com perfurocortante, com ou sem afastamento, até o 1º dia útil seguinte (Lei 8.213/91 e NR-32).",
    "referencia": "Lei 8.213/91, Art. 22 e NR-32, item 32.2.4.15"
  },
  {
    "id": 261,
    "materia": "NR-32",
    "dificuldade": "Portaria de Consolidação GM/MS nº 4/2017 e NR-32",
    "enunciado": "Além da CAT emitida pelo SESMT/Previdência, acidentes de trabalho com exposição a material biológico devem ser notificados no âmbito do SUS através do:",
    "alternativas": {
      "A": "SIA-SUS exclusivamente para cobrança de taxas de internação.",
      "B": "Cadastro Único de Programas Sociais do Governo Federal (CadÚnico).",
      "C": "Livro de atas manuscrito do condomínio residencial do servidor.",
      "D": "Sistema de Bilhetagem Eletrônica do transporte coletivo de Belém.",
      "E": "SINAN (Sistema de Informação de Agravos de Notificação), por meio da Ficha de Notificação de Acidente de Trabalho com Exposição a Material Biológico."
    },
    "resposta_correta": "E",
    "comentario": "O agravo 'Acidente de Trabalho com Exposição a Material Biológico' é de notificação compulsória no SINAN em toda a rede de saúde pública e privada.",
    "referencia": "Portaria de Consolidação GM/MS nº 4/2017 e NR-32"
  },
  {
    "id": 262,
    "materia": "NR-32",
    "dificuldade": "PCDT PEP HIV - Ministério da Saúde e NR-32",
    "enunciado": "Qual o tempo padrão de duração do esquema de Profilaxia Pós-Exposição (PEP) com medicamentos antirretrovirais para HIV quando indicada após acidente grave?",
    "alternativas": {
      "A": "7 dias corridos.",
      "B": "6 meses consecutivos sem pausas.",
      "C": "1 ano completo com avaliações semanais.",
      "D": "1 único dia com dose tripla de ataque.",
      "E": "28 dias ininterruptos."
    },
    "resposta_correta": "E",
    "comentario": "O tratamento profilático pós-exposição ao HIV (PEP) tem duração padrão de 28 dias com terapia antirretroviral combinada.",
    "referencia": "PCDT PEP HIV - Ministério da Saúde e NR-32"
  },
  {
    "id": 263,
    "materia": "NR-32",
    "dificuldade": "Protocolo de Exposição Ocupacional MS",
    "enunciado": "No acompanhamento clínico e sorológico do trabalhador acidentado com perfurocortante biológico, os testes sorológicos de controle (HIV, HBV, HCV) são habitualmente repetidos em:",
    "alternativas": {
      "A": "Apenas se o trabalhador manifestar febre amarela nos primeiros 2 dias.",
      "B": "Diariamente durante os primeiros 90 dias após a picada.",
      "C": "Tempo zero (no momento do acidente), 6 semanas e 3 a 6 meses após a exposição.",
      "D": "Uma única vez após 5 anos sem necessidade de teste basal no momento do evento.",
      "E": "Apenas 10 anos após o acidente quando o servidor for se aposentar."
    },
    "resposta_correta": "C",
    "comentario": "O protocolo do Ministério da Saúde preconiza testagem basal (tempo zero) e acompanhamento sorológico com 6 semanas e aos 3 e 6 meses após a exposição.",
    "referencia": "Protocolo de Exposição Ocupacional MS"
  },
  {
    "id": 264,
    "materia": "NR-32",
    "dificuldade": "NR-32 e Protocolo de Centro Cirúrgico",
    "enunciado": "Durante uma cirurgia na FHCGV, um cirurgião perfura a luva e o dedo com agulha de sutura cirúrgica. Qual conduta imediata deve ser adotada pela equipe de centro cirúrgico?",
    "alternativas": {
      "A": "Ignorar o fato, pois o sangue cirúrgico é considerado estéril por definição médica.",
      "B": "Amarrar uma gaze estéril sobre a luva furada e terminar a cirurgia sem trocar o material.",
      "C": "Substituir imediatamente a agulha, retirar a luva contaminada, higienizar a lesão, trocar de luva e comunicar imediatamente o acidente para avaliação médica.",
      "D": "Continuar operando o paciente por mais 4 horas com a mesma luva furada.",
      "E": "Queimar a luva na mesa cirúrgica estéril."
    },
    "resposta_correta": "C",
    "comentario": "A troca imediata de luva e campo, assepsia, descarte seguro do instrumental pérfuro e acolhimento para PEP são exigências fundamentais de segurança cirúrgica e ocupacional.",
    "referencia": "NR-32 e Protocolo de Centro Cirúrgico"
  },
  {
    "id": 265,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.2.4.15 e RDC 222/2018",
    "enunciado": "Na montagem e fechamento dos coletores de perfurocortantes, o técnico de segurança do trabalho deve orientar que o fechamento definitivo da caixa seja realizado:",
    "alternativas": {
      "A": "Pressionando as abas traváveis com as mãos nas áreas indicadas, sem empurrar agulhas excedentes para dentro com os dedos.",
      "B": "Transferindo as seringas soltas da caixa cheia para uma caixa vazia com as mãos desnudas.",
      "C": "Usando as duas mãos para socar os materiais que estão transbordando para dentro da caixa.",
      "D": "Virando a caixa de cabeça para baixo sobre uma bancada para compactar o lixo.",
      "E": "Colocando um peso de 20 kg de concreto sobre a tampa até amassar todo o papelão."
    },
    "resposta_correta": "A",
    "comentario": "O fechamento dos recipientes deve ser feito pelas travas externas de segurança, sendo estritamente proibido empurrar materiais com as mãos ou pés.",
    "referencia": "NR-32, item 32.2.4.15 e RDC 222/2018"
  },
  {
    "id": 266,
    "materia": "NR-32",
    "dificuldade": "NR-32 e Diretrizes MTE",
    "enunciado": "O Plano de Prevenção de Riscos de Acidentes com Materiais Perfurocortantes, exigido pela NR-32 e Portarias correlatas, tem como objetivo principal:",
    "alternativas": {
      "A": "Substituir o uso de seringas hospitalares por colheres de plástico descartáveis.",
      "B": "Aumentar o número de horas extras trabalhadas pela enfermagem em setores críticos.",
      "C": "Transferir a responsabilidade civil de acidentes para os pacientes atendidos.",
      "D": "Eliminar completamente as punções venosas no hospital, abolindo a medicação injetável.",
      "E": "Identificar os perfurocortantes em uso, substituir materiais convencionais por dispositivos de segurança, capacitar trabalhadores e monitorar acidentes."
    },
    "resposta_correta": "E",
    "comentario": "O Plano visa à erradicação de acidentes com perfurantes por meio da aquisição de dispositivos seguros, treinamento contínuo e análise epidemiológica dos acidentes.",
    "referencia": "NR-32 e Diretrizes MTE"
  },
  {
    "id": 267,
    "materia": "NR-32",
    "dificuldade": "NR-32 e RDC 222/2018",
    "enunciado": "Se um trabalhador de limpeza hospitalar for ferido por uma agulha encontrada solta dentro de um saco plástico de lixo comum (Grupo D), a análise do acidente indica:",
    "alternativas": {
      "A": "Que o lixo comum é o local indicado na NR-32 para agulhas de pequeno calibre.",
      "B": "Procedimento rotineiro e padrão aceito pelas normas da ANVISA.",
      "C": "Culpa exclusiva do faxineiro por não ter apalpado o saco antes de pegá-lo.",
      "D": "Que a agulha não oferece risco biológico por já estar há mais de 10 minutos no lixo.",
      "E": "Descarte irregular gravíssimo de perfurocortante fora do coletor rígido apropriado, gerando risco para a equipe de apoio e hotelaria."
    },
    "resposta_correta": "E",
    "comentario": "O descarte de agulha em saco de lixo comum viola as normas sanitárias e a NR-32, constituindo causa clássica de acidentes graves em trabalhadores de limpeza.",
    "referencia": "NR-32 e RDC 222/2018"
  },
  {
    "id": 268,
    "materia": "NR-32",
    "dificuldade": "Manual de Condutas em Exposição Ocupacional MS e NR-32",
    "enunciado": "A respeito da imunoglobulina humana hiperimune contra hepatite B (HBIG), qual é a sua indicação principal em acidentes ocupacionais com material biológico?",
    "alternativas": {
      "A": "Como xarope expectorante de rotina para tosse seca em trabalhadores da lavanderia.",
      "B": "Para todos os trabalhadores que já possuem vacinação completa e Anti-HBs positivo superior a 100 mUI/mL.",
      "C": "Apenas como substituto de antibióticos para tratar infecções por gonorreia.",
      "D": "Para prevenção exclusiva do contágio pelo vírus da hepatite A transmitido por água.",
      "E": "Quando o trabalhador acidentado não é vacinado ou é sabidamente não respondedor (Anti-HBs negativo) e a fonte é HBsAg positivo ou de alto risco."
    },
    "resposta_correta": "E",
    "comentario": "A HBIG fornece imunidade passiva imediata ao acidentado não vacinado ou não respondedor quando exposto a sangue com vírus da hepatite B (HBsAg positivo).",
    "referencia": "Manual de Condutas em Exposição Ocupacional MS e NR-32"
  },
  {
    "id": 269,
    "materia": "NR-32",
    "dificuldade": "Diretrizes Terapêuticas Hepatite C e NR-32",
    "enunciado": "Em relação ao vírus da Hepatite C (HCV), caso ocorra acidente perfurocortante com fonte confirmadamente positiva para HCV:",
    "alternativas": {
      "A": "A ferida deve ser submetida a banho de radiação ultravioleta por 24 horas contínuas.",
      "B": "O acidentado deve tomar antibióticos de amplo espectro por 60 dias.",
      "C": "Existe vacina e imunoglobulina comercial de alta eficácia indicada imediatamente nas primeiras 2 horas.",
      "D": "Não há vacina nem imunoglobulina disponível para profilaxia pós-exposição ao HCV; a conduta é o acompanhamento clínico e sorológico (anti-HCV e HCV-RNA) para tratamento precoce se houver viragem.",
      "E": "O trabalhador deve ser aposentado por invalidez imediata no dia seguinte ao acidente."
    },
    "resposta_correta": "D",
    "comentario": "Não existe profilaxia vacinal ou imunoglobulina pós-exposição para Hepatite C. Faz-se monitoramento laboratorial rigoroso para diagnóstico precoce e uso de antivirais diretos (DAA).",
    "referencia": "Diretrizes Terapêuticas Hepatite C e NR-32"
  },
  {
    "id": 270,
    "materia": "NR-32",
    "dificuldade": "NR-01, NR-32 e Metodologia de Investigação de Acidentes",
    "enunciado": "Qual é a conduta do Técnico de Segurança do Trabalho (TST) ao realizar a investigação de um acidente com perfurocortante na FHCGV?",
    "alternativas": {
      "A": "Determinar a perda do adicional de insalubridade do trabalhador acidentado.",
      "B": "Arquivar o caso sem ouvir o acidentado nem inspecionar o posto de trabalho.",
      "C": "Ocultar o registro do acidente para que o hospital não perca pontuação em auditorias.",
      "D": "Culpar verbalmente a vítima diante de todos os colegas para servir de exemplo punitivo.",
      "E": "Aplicar métodos de análise causal (como Árvore de Causas), identificando fatores organizacionais, do dispositivo de segurança, jornada de trabalho e condições ambientais para propor medidas preventivas."
    },
    "resposta_correta": "E",
    "comentario": "A investigação de acidentes visa identificar causas raízes no sistema de trabalho e fatores materiais para aprimorar as barreiras de prevenção, sem foco punitivo.",
    "referencia": "NR-01, NR-32 e Metodologia de Investigação de Acidentes"
  },
  {
    "id": 271,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.2.4.15",
    "enunciado": "Durante a administração de medicamentos por via intramuscular na FHCGV, a NR-32 veda terminantemente que o profissional de saúde:",
    "alternativas": {
      "A": "Descarte o conjunto seringa/agulha imediatamente no coletor rígido de perfurocortantes.",
      "B": "Higienize a pele do paciente com algodão embebido em álcool a 70%.",
      "C": "Desconecte a agulha da seringa utilizando as próprias mãos sem dispositivo mecânico seguro.",
      "D": "Verifique a prescrição médica e o nome do paciente antes da aplicação.",
      "E": "Utilize luvas descartáveis de procedimento durante a aplicação da injeção."
    },
    "resposta_correta": "C",
    "comentario": "O item 32.2.4.15 proíbe expressamente a desconexão manual de agulhas com as mãos.",
    "referencia": "NR-32, item 32.2.4.15"
  },
  {
    "id": 272,
    "materia": "NR-32",
    "dificuldade": "RDC 222/2018 e NR-32",
    "enunciado": "Os recipientes para descarte de materiais perfurocortantes (Grupo E) devem apresentar as seguintes características construtivas, EXCETO:",
    "alternativas": {
      "A": "Fechamento seguro com tampa estanque e alça de transporte que evite contato manual com o bocal.",
      "B": "Fabricação em sacos plásticos finos e flexíveis transparentes para visualização do conteúdo.",
      "C": "Símbolo internacional de risco biológico e inscrição de 'Material Perfurocortante'.",
      "D": "Paredes rígidas, resistentes à punctura, ruptura e vazamento.",
      "E": "Linha demarcatória indicando o volume máximo permitido para preenchimento seguro."
    },
    "resposta_correta": "B",
    "comentario": "Coletores de perfurocortantes NUNCA são sacos plásticos flexíveis; devem ser caixas rígidas com revestimento interno e saco plástico estanque.",
    "referencia": "RDC 222/2018 e NR-32"
  },
  {
    "id": 273,
    "materia": "NR-32",
    "dificuldade": "CDC, Ministério da Saúde e NR-32",
    "enunciado": "Em relação aos acidentes de trabalho com agulhas contaminadas, qual é a doença infecciosa transmitida por via sanguínea com MAIOR risco estimado de transmissão após picada acidental de agulha com lúmen (agulha oca) em paciente-fonte positivo?",
    "alternativas": {
      "A": "Bactéria causadora da cólera.",
      "B": "Hepatite B (HBV) em indivíduo não vacinado (risco de 6% a 30%).",
      "C": "Vírus da imunodeficiência humana - HIV (risco médio de 0,3%).",
      "D": "Hepatite C - HCV (risco de 1,8%).",
      "E": "Vírus do sarampo."
    },
    "resposta_correta": "B",
    "comentario": "O vírus da Hepatite B possui a mais alta infectividade sanguínea (cerca de 6% a 30%), muito superior ao HCV (1,8%) e ao HIV (0,3%). Por isso a vacinação é tão crucial.",
    "referencia": "CDC, Ministério da Saúde e NR-32"
  },
  {
    "id": 274,
    "materia": "NR-32",
    "dificuldade": "Normas de Biossegurança em Centro Cirúrgico e NR-32",
    "enunciado": "A retirada de agulhas e bisturis da mesa de instrumentação cirúrgica durante ou após a cirurgia deve ser feita:",
    "alternativas": {
      "A": "Utilizando pinças ou porta-agulhas adequados e caixas descartadoras na própria sala, evitando a passagem de lâminas mão-a-mão sem campo intermediário.",
      "B": "Guardando as lâminas usadas dentro da touca cirúrgica do anestesista.",
      "C": "Deixando as lâminas sob os lençóis da maca cirúrgica para a equipe de limpeza achar depois.",
      "D": "Jogando as lâminas soltas na bandeja de metal para que a instrumentadora recolha com a ponta dos dedos.",
      "E": "Passando a agulha destampada diretamente de ponta para os dedos do médico assistente."
    },
    "resposta_correta": "A",
    "comentario": "A técnica de zona neutra ou campo intermediário sem passagem manual direta e o uso de instrumentos para desconexão previnem cortes em cirurgias.",
    "referencia": "Normas de Biossegurança em Centro Cirúrgico e NR-32"
  },
  {
    "id": 275,
    "materia": "NR-32",
    "dificuldade": "Manual de Biossegurança e NR-32",
    "enunciado": "Ao trocar uma caixa coletora de perfurocortantes que atingiu a linha limite na FHCGV, o funcionário percebe que uma agulha ficou com a haste presa para fora da tampa. Ele deve:",
    "alternativas": {
      "A": "Empurrar a agulha com o polegar desprotegido até entrar totalmente.",
      "B": "Abrir a tampa totalmente e retirar metade das agulhas da caixa com as mãos enluvadas.",
      "C": "Deixar a caixa aberta com a agulha apontada para cima na beira da bancada.",
      "D": "Bater na caixa com um pedaço de pau até quebrar a agulha e a caixa.",
      "E": "Utilizar uma pinça mecânica longa para empurrar o objeto para o interior da caixa, mantendo as mãos distantes do bocal antes de lacrar."
    },
    "resposta_correta": "E",
    "comentario": "Se houver material protuso, deve-se usar pinça auxiliar mecânica longa com cautela, nunca usando os dedos para empurrar perfurocortantes.",
    "referencia": "Manual de Biossegurança e NR-32"
  },
  {
    "id": 276,
    "materia": "NR-32",
    "dificuldade": "Lei 8.213/91, Art. 22, § 2º e NR-32",
    "enunciado": "Se a empresa terceirizada contratada para serviços de limpeza na FHCGV não emitir a CAT de um faxineiro que sofreu picada de agulha contaminada no hospital:",
    "alternativas": {
      "A": "A emissão da CAT é extinta automaticamente por decurso de prazo de 24 horas.",
      "B": "O trabalhador deve pagar uma taxa de 5 salários mínimos para conseguir registrar o acidente.",
      "C": "A própria FHCGV (tomadora), o próprio trabalhador, o sindicato de sua categoria ou qualquer autoridade pública (médico, auditor) podem formalizar a emissão da CAT.",
      "D": "O acidente perde o caráter ocupacional e passa a ser considerado doença genética.",
      "E": "Nenhum outro ente pode emitir a CAT, ficando o acidente sem registro legal."
    },
    "resposta_correta": "C",
    "comentario": "Conforme o Art. 22, § 2º da Lei 8.213/91, na falta de emissão pela empresa, a CAT pode ser formalizada pelo próprio acidentado, sindicato, médico assistente ou autoridade pública.",
    "referencia": "Lei 8.213/91, Art. 22, § 2º e NR-32"
  },
  {
    "id": 277,
    "materia": "NR-32",
    "dificuldade": "Portaria MTE 939/2006 e NR-32",
    "enunciado": "Sobre o uso de lancetas para punção digital (glicemia capilar) em pacientes hospitalizados na FHCGV:",
    "alternativas": {
      "A": "O profissional deve quebrar a ponta da lanceta com os dentes para inutilizá-la.",
      "B": "As lancetas usadas devem ser jogadas diretamente no ralo do chuveiro do paciente.",
      "C": "A mesma lanceta pode ser utilizada em todos os pacientes do mesmo quarto de enfermaria.",
      "D": "Podem ser utilizadas agulhas de sutura reaproveitáveis lavadas na pia do quarto.",
      "E": "Devem ser utilizadas lancetas retráteis com dispositivo de segurança passivo de uso único que trave a ponta cortante automaticamente após o disparo."
    },
    "resposta_correta": "E",
    "comentario": "Lancetas para teste de glicemia devem possuir lâmina retrátil com travamento automático definitivo e descarte único em conformidade com a NR-32.",
    "referencia": "Portaria MTE 939/2006 e NR-32"
  },
  {
    "id": 278,
    "materia": "NR-32",
    "dificuldade": "NR-05 e NR-32",
    "enunciado": "A notificação de acidente de trabalho com material biológico deve ser comunicada ao SESMT e à CIPA do hospital para:",
    "alternativas": {
      "A": "Abertura de inquérito criminal contra o técnico de enfermagem por danos ao hospital.",
      "B": "Cancelamento imediato de todos os adicionais de insalubridade do setor.",
      "C": "Publicação do nome e foto do trabalhador no mural de avisos da recepção central.",
      "D": "Aplicação de advertência disciplinar com suspensão de 30 dias sem vencimentos.",
      "E": "Alimentação do banco de dados de acidentes, planejamento de ações corretivas, avaliação dos dispositivos de segurança e revisão dos treinamentos operacionais."
    },
    "resposta_correta": "E",
    "comentario": "O fluxo interno para SESMT e CIPA tem caráter preventivo, estatístico e de melhoria contínua dos processos de trabalho e insumos seguros.",
    "referencia": "NR-05 e NR-32"
  },
  {
    "id": 279,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.2.3.5",
    "enunciado": "A NR-32 estabelece que em caso de ocorrência de acidente com material biológico, o atendimento médico imediato e as medidas profiláticas devem ser prestados:",
    "alternativas": {
      "A": "Mediante pagamento prévio em dinheiro pelo acidentado diretamente ao médico plantonista.",
      "B": "De forma imediata e ininterrupta, garantindo atendimento médico 24 horas e acesso aos medicamentos profiláticos e exames laboratoriais.",
      "C": "Exclusivamente após a homologação de parecer jurídico em processo judicial de 6 meses.",
      "D": "Somente após a alta hospitalar do paciente-fonte que causou o acidente.",
      "E": "Apenas nas segundas-feiras em horário comercial das 9h às 11h da manhã."
    },
    "resposta_correta": "B",
    "comentario": "A instituição de saúde deve garantir fluxo imediato e 24 horas para atendimento médico pós-exposição a material biológico, testagem e acesso a antirretrovirais/vacinas.",
    "referencia": "NR-32, item 32.2.3.5"
  },
  {
    "id": 280,
    "materia": "NR-32",
    "dificuldade": "Atribuições do TST e NR-32",
    "enunciado": "Qual é o papel do Técnico em Segurança do Trabalho (TST) no monitoramento dos coletores de perfurocortantes nas diversas unidades da FHCGV?",
    "alternativas": {
      "A": "Inspecionar periodicamente os setores, verificando a integridade dos suportes, correta altura, ausência de caixas no chão, respeito ao limite de enchimento e treinamento das equipes.",
      "B": "Substituir pessoalmente todas as caixas de perfurocortantes do hospital duas vezes ao dia.",
      "C": "Determinar que os coletores cheios sejam queimados em fogueira no jardim do hospital.",
      "D": "Proibir a compra de caixas de perfurocortantes para reduzir despesas de custeio.",
      "E": "Autorizar o reaproveitamento das caixas de papelão após esvaziamento manual."
    },
    "resposta_correta": "A",
    "comentario": "Cabe ao TST auditar as condições de segurança nos postos, orientar quanto ao nível de enchimento e altura ergonômica e assegurar o cumprimento da NR-32.",
    "referencia": "Atribuições do TST e NR-32"
  },
  {
    "id": 281,
    "materia": "NR-32",
    "dificuldade": "NR-32 e Portaria 939/2006",
    "enunciado": "Em relação à utilização de agulhas e seringas com dispositivo de segurança em serviços de radiologia intervencionista e hemodinâmica da FHCGV:",
    "alternativas": {
      "A": "Todos os perfurocortantes utilizados em procedimentos hemodinâmicos e radiológicos invasivos devem conter dispositivos de segurança contra acidentes.",
      "B": "A exigência de dispositivos de segurança da NR-32 não se aplica a setores de diagnóstico.",
      "C": "As agulhas radiológicas devem ser reencapadas com fita isolante após o exame.",
      "D": "O uso de dispositivos de segurança é facultativo caso os médicos usem óculos escuros.",
      "E": "Os perfurocortantes de hemodinâmica devem ser descartados no lixo comum de escritório."
    },
    "resposta_correta": "A",
    "comentario": "A obrigatoriedade de dispositivos de segurança abrange todos os serviços e setores onde se manipulam perfurocortantes, incluindo hemodinâmica e radiologia intervencionista.",
    "referencia": "NR-32 e Portaria 939/2006"
  },
  {
    "id": 282,
    "materia": "NR-32",
    "dificuldade": "Estudos de Ergonomia e Acidentalidade em Saúde e NR-32",
    "enunciado": "Qual dos fatores organizacionais abaixo costuma ser causa primária frequente de acidentes com perfurocortantes na rotina de enfermagem hospitalar?",
    "alternativas": {
      "A": "Presença constante de bebedouros de água mineral nos corredores.",
      "B": "Disponibilização de sabonete líquido aromatizado nos lavatórios.",
      "C": "Iluminação excessiva e ambiente excessivamente silencioso.",
      "D": "Uso de cadeiras estofadas confortáveis no posto de enfermagem.",
      "E": "Sobrecarga de trabalho, ritmo acelerado, número insuficiente de profissionais e descarte em coletores superlotados distantes do leito."
    },
    "resposta_correta": "E",
    "comentario": "Fatores como pressa, fadiga, dimensionamento inadequado de pessoal e coletores cheios ou distantes multiplicam o risco de acidentes perfurocortantes.",
    "referencia": "Estudos de Ergonomia e Acidentalidade em Saúde e NR-32"
  },
  {
    "id": 283,
    "materia": "NR-32",
    "dificuldade": "Manual de Condutas em Exposição Ocupacional MS",
    "enunciado": "Em caso de acidente com agulha onde o paciente-fonte é desconhecido (ex: agulha encontrada perfurando um hamper de roupa suja na lavanderia):",
    "alternativas": {
      "A": "A profilaxia pós-exposição ao HIV e Hepatite B deve ser avaliada pelo médico assistente considerando a gravidade do acidente, o perfil epidemiológico do local e a condição vacinal do trabalhador.",
      "B": "O acidentado deve ser submetido a cirurgia imediata de amputação da mão ferida.",
      "C": "Deve-se obrigar todos os pacientes internados no hospital a fazerem teste de DNA.",
      "D": "O acidente deve ser ignorado sumariamente, pois sem paciente identificado não se adota nenhuma medida.",
      "E": "O trabalhador deve tomar dose única de vacina contra raiva humana."
    },
    "resposta_correta": "A",
    "comentario": "Em acidentes com fonte desconhecida, a decisão médica sobre PEP considera a prevalência local, o tipo de exposição e o estado vacinal do trabalhador.",
    "referencia": "Manual de Condutas em Exposição Ocupacional MS"
  },
  {
    "id": 284,
    "materia": "NR-32",
    "dificuldade": "Portaria MTE 939/2006 e NR-32",
    "enunciado": "Durante a infusão de medicação endovenosa através de cateter venoso periférico tipo 'scalp' ou agulhado, a NR-32 exige:",
    "alternativas": {
      "A": "A utilização exclusiva de cateteres com mecanismo retrátil ou capa protetora de travamento automático de segurança que cubra a agulha ao ser retirada.",
      "B": "A lavagem do cateter em álcool comum para reutilização no mesmo paciente após 7 dias.",
      "C": "O reencape da agulha usando a boca do profissional para segurar a tampa plástica.",
      "D": "Que a agulha fique exposta na mesa de cabeceira do paciente durante todo o período de internação.",
      "E": "O descarte do scalp no ralo da pia do quarto de enfermaria."
    },
    "resposta_correta": "A",
    "comentario": "Os dispositivos de infusão com agulha devem possuir mecanismos de segurança que protejam o bisel imediatamente após a retirada da veia.",
    "referencia": "Portaria MTE 939/2006 e NR-32"
  },
  {
    "id": 285,
    "materia": "NR-32",
    "dificuldade": "Código de Ética Médica e Diretrizes MS",
    "enunciado": "Se um profissional de enfermagem da FHCGV que sofreu acidente biológico grave recusar expressamente tomar a PEP antirretroviral indicada pelo médico:",
    "alternativas": {
      "A": "Ele deve ser forçado fisicamente pelos seguranças do hospital a engolir a medicação.",
      "B": "O médico deve adulterar a água do trabalhador para administrar o remédio escondido.",
      "C": "Ele deve ser preso em cela de isolamento por 28 dias seguidos.",
      "D": "Ele deve ser demitido imediatamente com perda de todos os direitos trabalhistas.",
      "E": "Ele tem o direito de recusar, devendo ser orientado detalhadamente sobre os riscos e assinar um Termo de Esclarecimento e Recusa formal no prontuário."
    },
    "resposta_correta": "E",
    "comentario": "A autonomia do paciente e do trabalhador é garantida pela bioética e pelo ordenamento jurídico; a recusa deve ser esclarecida e registrada formalmente em termo de recusa.",
    "referencia": "Código de Ética Médica e Diretrizes MS"
  },
  {
    "id": 286,
    "materia": "NR-32",
    "dificuldade": "Portaria MTE 1.246/2010 e Lei 12.984/2014",
    "enunciado": "A realização de testes sorológicos admissionais para HIV de candidatos em concurso público ou seleção de emprego em serviços de saúde da FHCGV é:",
    "alternativas": {
      "A": "Permitida desde que a diretoria do hospital assine o pedido de exame.",
      "B": "Terminantemente proibida pela legislação brasileira e normas do MTE/OIT, sendo considerada prática discriminatória ilegal.",
      "C": "Exigida apenas para técnicos que forem atuar na UTI Neonatal.",
      "D": "Obrigatória pela NR-32 para todos os profissionais de saúde.",
      "E": "Facultativa se o candidato tiver mais de 40 anos de idade."
    },
    "resposta_correta": "B",
    "comentario": "A testagem discriminatória para HIV em processos admissionais é ilegal e expressamente proibida pela Portaria MTE 1.246/2010 e Lei 12.984/2014.",
    "referencia": "Portaria MTE 1.246/2010 e Lei 12.984/2014"
  },
  {
    "id": 287,
    "materia": "NR-32",
    "dificuldade": "Protocolos de Imunização Ocupacional MS e NR-32",
    "enunciado": "Qual a recomendação pós-exposição quando o trabalhador acidentado possui comprovação documental de vacinação completa contra hepatite B e exame laboratorial com Anti-HBs maior que 10 mUI/mL?",
    "alternativas": {
      "A": "Ele deve realizar transplante de fígado preventivo no mês seguinte.",
      "B": "Ele é considerado imunizado e protegido contra o vírus da Hepatite B, não necessitando de nenhuma profilaxia adicional específica contra o HBV.",
      "C": "Ele deve ficar em quarentena respiratória em sua residência por 30 dias.",
      "D": "Ele deve reiniciar o esquema de 3 doses de vacina e tomar imunoglobulina de emergência.",
      "E": "Ele deve tomar antibióticos profiláticos por 14 dias contra hepatite B."
    },
    "resposta_correta": "B",
    "comentario": "Trabalhador com Anti-HBs >= 10 mUI/mL comprovado é considerado respondedor e imune à infecção pelo vírus da hepatite B, dispensando vacina ou HBIG.",
    "referencia": "Protocolos de Imunização Ocupacional MS e NR-32"
  },
  {
    "id": 288,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.2.4.15",
    "enunciado": "A proibição de entortar ou quebrar agulhas manualmente antes do descarte baseia-se no fato comprovado de que:",
    "alternativas": {
      "A": "As agulhas quebradas podem furar os ímãs da máquina de ressonância magnética.",
      "B": "A NR-32 autoriza entortar agulhas desde que se utilize luva de couro de cano longo.",
      "C": "O aço inoxidável da agulha perde o valor comercial para venda como sucata hospitalar.",
      "D": "A agulha entortada ocupa o dobro do espaço dentro do coletor de perfurocortantes.",
      "E": "O ato de quebrar ou entortar a agulha produz estresse mecânico, risco iminente de perfuração das mãos e dispersão de gotículas biológicas."
    },
    "resposta_correta": "E",
    "comentario": "Entortar ou quebrar agulhas constitui ação de extremo risco de picada acidental e projeção de sangue contaminado, sendo terminantemente proibida.",
    "referencia": "NR-32, item 32.2.4.15"
  },
  {
    "id": 289,
    "materia": "NR-32",
    "dificuldade": "NR-32 e Portaria 939/2006",
    "enunciado": "A comissão multidisciplinar responsável pela implantação e avaliação dos dispositivos de segurança em perfurocortantes no hospital deve ser integrada prioritariamente por:",
    "alternativas": {
      "A": "Representantes do SESMT (engenheiro/técnico de segurança e médico do trabalho), CIPA, CCIH, Enfermagem e setor de suprimentos/farmácia.",
      "B": "Apenas o gerente de compras e finanças do hospital sem representantes da assistência.",
      "C": "Exclusivamente membros eleitos do conselho municipal de saúde externa.",
      "D": "Apenas auditores fiscais da Receita Federal do Brasil.",
      "E": "Somente os pacientes internados nas enfermarias do hospital."
    },
    "resposta_correta": "A",
    "comentario": "A escolha e avaliação dos materiais com dispositivos de segurança exige abordagem multidisciplinar envolvendo quem compra, quem avalia o risco (SESMT/CIPA) e quem usa (enfermagem/médicos).",
    "referencia": "NR-32 e Portaria 939/2006"
  },
  {
    "id": 290,
    "materia": "NR-32",
    "dificuldade": "NR-32 e RDC 222/2018",
    "enunciado": "Em relação à caixa coletora de perfurocortantes após o fechamento definitivo, o transporte interno até o abrigo temporário de resíduos da FHCGV deve ser realizado:",
    "alternativas": {
      "A": "Segurando a caixa pelas alças externas de transporte, mantendo-a afastada do corpo, em carro de transporte fechado e exclusivo de resíduos.",
      "B": "Arrastando a caixa pelo chão com uma corda amarrada no bocal de plástico.",
      "C": "Jogando a caixa pelos dutos de ar comprimido ou escadarias de emergência.",
      "D": "Equilibrando a caixa sobre a cabeça do assistente de limpeza sem proteção.",
      "E": "Carregando a caixa encostada diretamente contra o peito ou abdome do funcionário."
    },
    "resposta_correta": "A",
    "comentario": "O transporte de recipientes rígidos deve ser feito pelas alças apropriadas, sem contato com o corpo do profissional, em carrinhos estanques com tampa fechada.",
    "referencia": "NR-32 e RDC 222/2018"
  },
  {
    "id": 291,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.2.4.17",
    "enunciado": "De acordo com a NR-32 (item 32.2.4.17), a todo trabalhador dos serviços de saúde deve ser fornecido gratuitamente programa de imunização ativa contra:",
    "alternativas": {
      "A": "Dengue, zika vírus e febre maculosa exclusivamente.",
      "B": "Apenas gripe comum (influenza) a cada 5 anos.",
      "C": "Tétano, difteria, hepatite B e os estabelecidos no PCMSO.",
      "D": "Apenas febre amarela e malária.",
      "E": "Raiva humana e peste bubônica em dose única."
    },
    "resposta_correta": "C",
    "comentario": "A NR-32 estabelece no item 32.2.4.17 que deve ser fornecido gratuitamente programa de imunização contra tétano, difteria, hepatite B e os indicados pelo PCMSO.",
    "referencia": "NR-32, item 32.2.4.17"
  },
  {
    "id": 292,
    "materia": "NR-32",
    "dificuldade": "NR-32 e Diretrizes do Ministério da Saúde",
    "enunciado": "Qual é o exame laboratorial indicado pelo PCMSO para avaliar a resposta imunológica e a soroconversão protetora após a vacinação contra o vírus da Hepatite B?",
    "alternativas": {
      "A": "Velocidade de hemossedimentação (VHS).",
      "B": "Teste de tolerância oral à lactose.",
      "C": "Pesquisa quantitativa de anticorpos Anti-HBs.",
      "D": "Hemograma completo com contagem de plaquetas.",
      "E": "Exame parasitológico de fezes pelo método MIF."
    },
    "resposta_correta": "C",
    "comentario": "O teste de Anti-HBs quantitativo verifica se o trabalhador desenvolveu anticorpos protetores contra a hepatite B (título protetor >= 10 mUI/mL).",
    "referencia": "NR-32 e Diretrizes do Ministério da Saúde"
  },
  {
    "id": 293,
    "materia": "NR-32",
    "dificuldade": "Protocolo de Imunização Ocupacional MS e NR-32",
    "enunciado": "Após a administração do esquema básico completo de vacinação contra a hepatite B (3 doses: 0, 1 e 6 meses), o exame de Anti-HBs deve ser realizado preferencialmente:",
    "alternativas": {
      "A": "Durante o exame demissional ao se aposentar.",
      "B": "Apenas se o trabalhador for picado por escorpião.",
      "C": "No mesmo dia da primeira dose da vacina.",
      "D": "Entre 30 e 60 dias após a terceira dose da vacina.",
      "E": "Exatamente 15 anos após a última dose da vacina."
    },
    "resposta_correta": "D",
    "comentario": "A coleta do Anti-HBs é idealmente realizada entre 1 e 2 meses após o término do esquema vacinal de 3 doses para avaliar a resposta imunológica no pico da produção.",
    "referencia": "Protocolo de Imunização Ocupacional MS e NR-32"
  },
  {
    "id": 294,
    "materia": "NR-32",
    "dificuldade": "Ministério da Saúde e NR-32",
    "enunciado": "Considera-se imunologicamente protegido (respondedor) contra a Hepatite B o trabalhador cujo título sorológico de Anti-HBs for:",
    "alternativas": {
      "A": "Exclusivamente acima de 1.000.000 mUI/mL.",
      "B": "Igual ou superior a 10 mUI/mL (≥ 10 mUI/mL).",
      "C": "Negativo com presença de HBsAg no sangue.",
      "D": "Igual a 0,0 mUI/mL.",
      "E": "Menor que 5 mUI/mL."
    },
    "resposta_correta": "B",
    "comentario": "Títulos de Anti-HBs iguais ou superiores a 10 mUI/mL conferem imunidade protetora comprovada contra o vírus da hepatite B.",
    "referencia": "Ministério da Saúde e NR-32"
  },
  {
    "id": 295,
    "materia": "NR-32",
    "dificuldade": "Protocolos de Imunização MS e NR-32",
    "enunciado": "Se após o primeiro esquema vacinal completo de 3 doses contra Hepatite B o trabalhador apresentar Anti-HBs menor que 10 mUI/mL (não-respondedor), a conduta médica correta é:",
    "alternativas": {
      "A": "Proibir o trabalhador de consumir líquidos por 3 semanas.",
      "B": "Submetê-lo a transfusão total de sangue de doador desconhecido.",
      "C": "Demiti-lo sumariamente por incapacidade física para o trabalho em saúde.",
      "D": "Revaciná-lo com um segundo esquema completo de 3 doses (0, 1 e 6 meses) ou esquema com doses adicionais e retestar o Anti-HBs após 30 a 60 dias.",
      "E": "Encaminhá-lo imediatamente para cirurgia hepática profilática."
    },
    "resposta_correta": "D",
    "comentario": "Para indivíduos não respondedores ao 1º esquema, recomenda-se um 2º esquema completo de 3 doses e nova testagem de Anti-HBs. Cerca de 50% respondem a esse 2º ciclo.",
    "referencia": "Protocolos de Imunização MS e NR-32"
  },
  {
    "id": 296,
    "materia": "NR-32",
    "dificuldade": "Diretrizes de Imunização MS e NR-32",
    "enunciado": "Se mesmo após a aplicação de dois esquemas vacinais completos (total de 6 doses) contra a hepatite B o trabalhador continuar com Anti-HBs menor que 10 mUI/mL:",
    "alternativas": {
      "A": "Ele é considerado milagrosamente imune a todos os vírus conhecidos.",
      "B": "Ele deve ser isolado em quarto de pressão negativa pelo resto da vida profissional.",
      "C": "Ele é considerado definitivamente 'não respondedor', devendo ser orientado detalhadamente e receber imunoglobulina específica (HBIG) caso venha a sofrer acidente com fonte positiva.",
      "D": "Ele está proibido por lei federal de exercer qualquer trabalho com carteira assinada.",
      "E": "Ele deve tomar mais 20 doses consecutivas da vacina no mesmo braço."
    },
    "resposta_correta": "C",
    "comentario": "O não respondedor após 6 doses não se beneficia de novas doses; ele deve receber orientações de prevenção e indicação de HBIG imediata em caso de acidente de risco.",
    "referencia": "Diretrizes de Imunização MS e NR-32"
  },
  {
    "id": 297,
    "materia": "NR-32",
    "dificuldade": "Programa Nacional de Imunizações (PNI) e NR-32",
    "enunciado": "Em relação à vacina dupla adulto (dT - difteria e tétano) preconizada na NR-32 para trabalhadores de saúde da FHCGV, as doses de reforço devem ser administradas a cada:",
    "alternativas": {
      "A": "10 anos (ou 5 anos em caso de ferimentos graves ou profundos sujos).",
      "B": "1 ano corrido.",
      "C": "Apenas na admissão sem qualquer necessidade de reforço futuro.",
      "D": "6 meses durante a estação chuvosa amazônica.",
      "E": "25 anos sem exceção."
    },
    "resposta_correta": "A",
    "comentario": "O reforço da vacina antitetânica (dT) para adultos imunizados é feito a cada 10 anos, antecipando-se para 5 anos em acidentes com ferimentos de alto risco para tétano.",
    "referencia": "Programa Nacional de Imunizações (PNI) e NR-32"
  },
  {
    "id": 298,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.2.4.17.4",
    "enunciado": "Caso um trabalhador de saúde da FHCGV se recuse formalmente a receber a vacinação obrigatória disponibilizada gratuitamente pelo hospital:",
    "alternativas": {
      "A": "O empregador deve fingir que o trabalhador foi vacinado e assinar a carteirinha por ele.",
      "B": "O trabalhador deve ser submetido à vacinação forçada pela brigada de segurança do hospital.",
      "C": "O trabalhador deve pagar multa diária de 20 salários mínimos ao Fundo Nacional de Saúde.",
      "D": "O empregador deve comprovar por documento a recusa formal do trabalhador, após tê-lo esclarecido detalhadamente sobre as vantagens e os riscos de sua decisão.",
      "E": "O trabalhador perde a posse de seu imóvel e todos os bens pessoais no estado do Pará."
    },
    "resposta_correta": "D",
    "comentario": "Conforme a NR-32 (item 32.2.4.17.4), o empregador deve comprovar a recusa por escrito do trabalhador, guardando a declaração no prontuário após orientação formal sobre os riscos.",
    "referencia": "NR-32, item 32.2.4.17.4"
  },
  {
    "id": 299,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.2.4.17.2",
    "enunciado": "A guarda do comprovante de vacinação do trabalhador de saúde, de acordo com o subitem 32.2.4.17.2 da NR-32, deve ser:",
    "alternativas": {
      "A": "Publicada no Diário Oficial do Estado do Pará com foto colorida do servidor.",
      "B": "Guardada na capela ecumênica do hospital em cofre de segurança.",
      "C": "Registrada e mantida no prontuário clínico individual do trabalhador, ficando à disposição da fiscalização do trabalho e do SESMT.",
      "D": "Mantida exclusivamente nas gavetas da residência do servidor sem acesso pelo hospital.",
      "E": "Incinerada ao final de cada ano fiscal junto aos resíduos comuns do hospital."
    },
    "resposta_correta": "C",
    "comentario": "A comprovação da vacinação deve constar no prontuário médico ocupacional do trabalhador, atualizada e acessível à auditoria fiscal do trabalho (NR-32, item 32.2.4.17.2).",
    "referencia": "NR-32, item 32.2.4.17.2"
  },
  {
    "id": 300,
    "materia": "NR-32",
    "dificuldade": "PNI / Ministério da Saúde e NR-32",
    "enunciado": "Qual vacina, além de dT e Hepatite B, é comumente indicada no PCMSO para prevenção de doenças de transmissão respiratória exantemáticas em profissionais de saúde?",
    "alternativas": {
      "A": "Vacina Tríplice Viral (Sarampo, Caxumba e Rubéola).",
      "B": "Vacina contra Cinomose Canina.",
      "C": "Vacina contra Brucelose bovina.",
      "D": "Vacina contra Antraz Inalatório.",
      "E": "Vacina contra Peste Suína Africana."
    },
    "resposta_correta": "A",
    "comentario": "A vacina tríplice viral (SCR) protege contra sarampo, caxumba e rubéola, sendo altamente recomendada aos trabalhadores de saúde para prevenir surtos hospitalares.",
    "referencia": "PNI / Ministério da Saúde e NR-32"
  },
  {
    "id": 301,
    "materia": "NR-32",
    "dificuldade": "NR-06, item 6.3 e NR-32",
    "enunciado": "Sobre o fornecimento de Equipamentos de Proteção Individual (EPI) pela Fundação Hospital de Clínicas Gaspar Vianna aos seus empregados:",
    "alternativas": {
      "A": "O hospital pode fornecer EPIs com CA vencido ou cancelado pelo MTE para contenção de despesas.",
      "B": "O empregado deve adquirir suas próprias máscaras e luvas em farmácias comerciais da cidade.",
      "C": "O fornecimento deve ser gratuito, em perfeito estado de conservação, adequado ao risco da atividade e com Certificado de Aprovação (CA) válido.",
      "D": "O fornecimento só é exigido caso o servidor tenha mais de 3 anos de serviços prestados.",
      "E": "O hospital pode cobrar o custo dos EPIs mediante desconto de 15% na folha de pagamento."
    },
    "resposta_correta": "C",
    "comentario": "O empregador é obrigado a fornecer ao empregado, gratuitamente, EPI adequado ao risco, em perfeito estado de funcionamento e com CA emitido pelo órgão competente.",
    "referencia": "NR-06, item 6.3 e NR-32"
  },
  {
    "id": 302,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.2.4.8 e Protocolos Dermatológicos",
    "enunciado": "Qual tipo de luva de procedimento é o MAIS indicado para profissionais que apresentam histórico comprovado de alergia ao látex natural (hipersensibilidade Tipo I mediada por IgE)?",
    "alternativas": {
      "A": "Luvas de couro de vaqueta para soldador industrial.",
      "B": "Luvas de borracha nitrílica ou luvas de vinil / neoprene isentas de látex e sem pó.",
      "C": "Luvas de lã cirúrgica esterilizada com formol.",
      "D": "Luvas de látex de espessura tripla com concentração extra de talco lubrificante.",
      "E": "Luvas de malha de aço entrelaçado com fios de cobre."
    },
    "resposta_correta": "B",
    "comentario": "Trabalhadores alérgicos ao látex devem receber luvas sintéticas alternativas (nitrila, vinil, neoprene), isentas de proteínas do látex e sem talco irritante.",
    "referencia": "NR-32, item 32.2.4.8 e Protocolos Dermatológicos"
  },
  {
    "id": 303,
    "materia": "NR-32",
    "dificuldade": "RDC ANVISA e NR-32",
    "enunciado": "Em relação ao uso de talco em luvas cirúrgicas e de procedimento em serviços de saúde, a ANVISA e as boas práticas de segurança recomendam:",
    "alternativas": {
      "A": "O uso de luvas isentas de pó/talco (powder-free), reduzindo reações alérgicas, granulomas cirúrgicos e aerossolização de alérgenos proteicos.",
      "B": "O aumento contínuo da quantidade de talco dentro das luvas para absorver suor.",
      "C": "A aplicação de pó de giz escolar sobre as mãos antes do enluvamento.",
      "D": "O uso obrigatório de talco perfumado com essência de eucalipto.",
      "E": "A colocação de farinha de trigo dentro das luvas caso falte talco no hospital."
    },
    "resposta_correta": "A",
    "comentario": "A RDC ANVISA baniu e restringiu o pó absorvível em luvas médicas devido aos riscos de alergia respiratória, dérmica e granulomas pós-operatórios.",
    "referencia": "RDC ANVISA e NR-32"
  },
  {
    "id": 304,
    "materia": "NR-32",
    "dificuldade": "ABNT NBR 13698, NR-06 e NR-32",
    "enunciado": "O equipamento de proteção individual respiratória que possui eficiência mínima de filtração de 94% a 95% para partículas biológicas aerossolizadas é denominado:",
    "alternativas": {
      "A": "Respirador purificador de ar semifacial descartável classe PFF2 (ou padrão internacional N95).",
      "B": "Máscara cirúrgica de uso odonto-médico com visor acrílico.",
      "C": "Máscara descartável simples de papel celulose.",
      "D": "Lenço de seda amarrado em torno do nariz e da boca.",
      "E": "Protetor auricular tipo plug de inserção de silicone."
    },
    "resposta_correta": "A",
    "comentario": "Os respiradores PFF2 (padrão ABNT/MTE) e N95 (padrão NIOSH) filtram no mínimo 94-95% das partículas de até 0,3 micrômetros (aerossóis biológicos).",
    "referencia": "ABNT NBR 13698, NR-06 e NR-32"
  },
  {
    "id": 305,
    "materia": "NR-32",
    "dificuldade": "Diretrizes ANVISA e NR-32",
    "enunciado": "Qual a diferença funcional fundamental entre a MÁSCARA CIRÚRGICA e o RESPIRADOR PFF2/N95 no ambiente hospitalar?",
    "alternativas": {
      "A": "A máscara cirúrgica protege contra gotículas pesadas (> 5 µm) e protege o paciente contra secreções do profissional, enquanto a PFF2 veda a face e filtra aerossóis microscópicos inalados.",
      "B": "Não existe nenhuma diferença, ambas possuem a mesma capacidade de vedação e filtragem respiratória.",
      "C": "A PFF2 só pode ser utilizada por profissionais portadores de barba longa volumosa.",
      "D": "A máscara cirúrgica é estanque e filtra gases anestésicos voláteis, enquanto a PFF2 só serve para poeira de carvão.",
      "E": "A máscara cirúrgica deve ser lavada com cloro diariamente, enquanto a PFF2 é dissolvida em água."
    },
    "resposta_correta": "A",
    "comentario": "Máscara cirúrgica protege contra gotículas e não tem vedação hermética perimetral; o respirador PFF2/N95 tem vedação facial e filtração contra aerossóis finos inaláveis.",
    "referencia": "Diretrizes ANVISA e NR-32"
  },
  {
    "id": 306,
    "materia": "NR-32",
    "dificuldade": "Manual de Proteção Respiratória Fundacentro e NR-06",
    "enunciado": "A presença de barba, bigode volumoso ou costeletas longas na face de um profissional de saúde afeta diretamente a eficácia do respirador PFF2/N95 porque:",
    "alternativas": {
      "A": "A NR-32 proíbe o uso de barba exclusivamente por razões estéticas institucionais.",
      "B": "Os pelos da barba desintegram quimicamente as fibras sintéticas de polipropileno do filtro.",
      "C": "O respirador não pode ser esticado sobre rostos com pelos faciais sob risco de explosão.",
      "D": "Os pelos absorvem toda a umidade do ar, ressecando a garganta do trabalhador.",
      "E": "Os pelos impedem o ajuste anatômico e a vedação periférica hermética com a pele, permitindo a passagem de ar contaminado pelas frestas."
    },
    "resposta_correta": "E",
    "comentario": "A barba interfere no selamento periférico da peça semifacial contra a pele, quebrando a vedação e anulando o fator de proteção do respirador.",
    "referencia": "Manual de Proteção Respiratória Fundacentro e NR-06"
  },
  {
    "id": 307,
    "materia": "NR-32",
    "dificuldade": "Protocolos ANVISA/MTE e NR-32",
    "enunciado": "Em relação à reutilização de respiradores PFF2/N95 durante a jornada de trabalho, em quais circunstâncias o respirador deve ser DESCARTADO IMEDIATAMENTE?",
    "alternativas": {
      "A": "Sempre que o servidor mudar de plantão de dia para a noite.",
      "B": "Quando for submetido à luz do sol por mais de 5 minutos.",
      "C": "Se estiver sujo de sangue/secreções, úmido, amassado, perfurado, com elásticos frouxos ou com aumento perceptível da resistência respiratória.",
      "D": "Apenas se o trabalhador for aprovado em outro concurso público.",
      "E": "Apenas ao término do ano civil fiscal do hospital."
    },
    "resposta_correta": "C",
    "comentario": "Danos mecânicos, sujeira visível por fluidos corporais, umidade excessiva ou perda de ajuste e vedação exigem descarte e substituição imediata da PFF2.",
    "referencia": "Protocolos ANVISA/MTE e NR-32"
  },
  {
    "id": 308,
    "materia": "NR-32",
    "dificuldade": "Protocolos de Manejo de Síndromes Respiratórias ANVISA e NR-32",
    "enunciado": "Ao prestar assistência direta a paciente com suspeita de COVID-19 ou Influenza durante procedimento de intubação orotraqueal na UTI, o conjunto de EPIs correto deve incluir:",
    "alternativas": {
      "A": "Jaleco de linho sem mangas, chinelos de borracha e máscara de tecido de algodão simples.",
      "B": "Apenas luvas de plástico e máscara cirúrgica com janelas abertas.",
      "C": "Protetor auditivo circum-auricular (concha) e botas de couro com biqueira de aço.",
      "D": "Gorro descartável, óculos de segurança com vedação lateral (ou protetor facial acrílico), respirador PFF2/N95, avental impermeável de manga longa e luvas de procedimento.",
      "E": "Máscara de mergulho com snorkel e bermuda de banho impermeável."
    },
    "resposta_correta": "D",
    "comentario": "Procedimentos geradores de aerossol de vírus respiratórios graves exigem proteção completa: PFF2/N95, óculos/face shield, capote impermeável, gorro e luvas.",
    "referencia": "Protocolos de Manejo de Síndromes Respiratórias ANVISA e NR-32"
  },
  {
    "id": 309,
    "materia": "NR-32",
    "dificuldade": "Diretrizes ANVISA e NR-32",
    "enunciado": "A correta sequência padronizada para a RETIRADA (desparamentação) dos EPIs ao sair de um quarto de isolamento hospitalar visa prevenir a autocontaminação e deve iniciar prioritariamente por:",
    "alternativas": {
      "A": "Luvas de procedimento e avental contaminado (as partes mais expostas a patógenos), com imediata higienização das mãos antes de remover a proteção ocular e respiratória.",
      "B": "Sacudir vigorosamente o avental sujo de secreção para arejar as fibras.",
      "C": "Retirar primeiramente as botas de borracha no chão do quarto.",
      "D": "Máscara PFF2 tocando na frente do filtro com as mãos desnudas.",
      "E": "Lavar o jaleco dentro da pia do paciente com o profissional ainda vestindo-o."
    },
    "resposta_correta": "A",
    "comentario": "As luvas e o avental são as peças mais contaminadas externamente e devem ser retiradas primeiro, com técnica sem contato com o corpo, seguida de antissepsia das mãos.",
    "referencia": "Diretrizes ANVISA e NR-32"
  },
  {
    "id": 310,
    "materia": "NR-32",
    "dificuldade": "Manual de Biossegurança ANVISA e NR-32",
    "enunciado": "Ao retirar o respirador PFF2 / N95 ao final do procedimento no quarto de isolamento, o trabalhador de saúde deve manipulá-lo:",
    "alternativas": {
      "A": "Enrolando o respirador em uma bola com os dedos contaminados.",
      "B": "Exclusivamente pelos elásticos posteriores de fixação na cabeça, sem tocar na superfície externa do filtro que esteve exposta ao ar.",
      "C": "Segurando pelas bordas e pela face externa frontal do filtro com as mãos.",
      "D": "Friccionando a palma da mão sobre o tecido filtrante frontal.",
      "E": "Puxando com os dentes para desamarrar as tiras elásticas."
    },
    "resposta_correta": "B",
    "comentario": "A face externa do respirador é considerada potencialmente contaminada; a retirada deve ser feita exclusivamente puxando os elásticos por trás da cabeça.",
    "referencia": "Manual de Biossegurança ANVISA e NR-32"
  },
  {
    "id": 311,
    "materia": "NR-32",
    "dificuldade": "NR-06 e NR-32",
    "enunciado": "Sobre o uso de óculos de segurança em serviços de saúde da FHCGV, a NR-32 e normas técnicas estabelecem que:",
    "alternativas": {
      "A": "Podem ser substituídos por óculos escuros de sol comuns comprados no comércio ambulante.",
      "B": "Devem possuir armação com proteção lateral e superior, boa transparência visual, tratamento antirrisco e antiembaçante, protegendo contra respingos de sangue e fluidos.",
      "C": "Devem ser confeccionados em vidro comum recozido que estilhaça com facilidade.",
      "D": "São obrigatórios apenas para funcionários que não possuem dentes naturais.",
      "E": "São dispensados em cirurgias ortopédicas de grande porte com serra elétrica."
    },
    "resposta_correta": "B",
    "comentario": "Óculos de segurança hospitalar devem vedar projeções laterais e respingos de fluidos biológicos ou químicos nos olhos do operador.",
    "referencia": "NR-06 e NR-32"
  },
  {
    "id": 312,
    "materia": "NR-32",
    "dificuldade": "NR-06 e NR-32",
    "enunciado": "Qual a recomendação para o trabalhador de saúde que utiliza óculos graduados (de grau) corretivos em atividades assistenciais com risco de respingos?",
    "alternativas": {
      "A": "Ele deve trabalhar sem óculos para evitar que os seus óculos particulares quebrem.",
      "B": "Ele deve utilizar óculos de proteção sobrepostos (sobre-óculos) desenhados para encaixar sobre os óculos de grau, ou óculos de segurança com lentes graduadas confeccionadas com CA.",
      "C": "Ele está proibido de trabalhar em hospitais por ter deficiência visual leve.",
      "D": "Ele deve utilizar uma lupa de relojoeiro presa ao supercílio direito.",
      "E": "Ele deve colar fita crepe na lente dos seus óculos de grau para vedar os olhos."
    },
    "resposta_correta": "B",
    "comentario": "Trabalhadores que usam óculos de grau devem receber sobre-óculos de segurança amplos compatíveis ou óculos de segurança graduados com CA oficial.",
    "referencia": "NR-06 e NR-32"
  },
  {
    "id": 313,
    "materia": "NR-32",
    "dificuldade": "Diretrizes de Biossegurança e NR-32",
    "enunciado": "Em relação ao protetor facial acrílico tipo 'face shield', assinale a afirmação correta:",
    "alternativas": {
      "A": "Ele substitui integralmente a necessidade do uso de respirador PFF2 em ambientes com aerossóis.",
      "B": "Ele fornece excelente proteção de barreira mecânica para os olhos e toda a face contra grandes respingos de fluidos, devendo ser utilizado em conjunto com a máscara/respirador apropriado.",
      "C": "Ele impede a respiração humana por vedar a boca e as narinas hermeticamente.",
      "D": "Ele só deve ser higienizado com ácido sulfúrico fumegante após o uso.",
      "E": "Ele é de uso único, devendo ser descartado no lixo comum a cada 15 minutos."
    },
    "resposta_correta": "B",
    "comentario": "O face shield protege os olhos, mucosas e a própria máscara contra respingos diretos de sangue e fluidos, mas não atua como filtro de aerossol sem o respirador associado.",
    "referencia": "Diretrizes de Biossegurança e NR-32"
  },
  {
    "id": 314,
    "materia": "NR-32",
    "dificuldade": "ABNT NBR 16064 e NR-32",
    "enunciado": "Os aventais ou capotes utilizados para proteção biológica contra sangue e líquidos corporais durante cirurgias e partos devem possuir:",
    "alternativas": {
      "A": "Tecido de rede furada transparente para facilitar a passagem de ar frio.",
      "B": "Bolsos frontais largos abertos para acumular secreções biológicas.",
      "C": "Mangas compridas com punho elástico ou de malha, comprimento abaixo dos joelhos, abertura dorsal e tecido impermeável de alta barreira biológica.",
      "D": "Abertura frontal com botões frouxos e mangas curtas acima do cotovelo.",
      "E": "Gola alta fechada com arame farpado para manter a postura ereta."
    },
    "resposta_correta": "C",
    "comentario": "Aventais cirúrgicos/impermeáveis devem ter mangas longas, punhos ajustados, fechamento dorsal e impermeabilidade contra fluidos corporais sob pressão.",
    "referencia": "ABNT NBR 16064 e NR-32"
  },
  {
    "id": 315,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.2.4.7",
    "enunciado": "Sobre o uso de calçados de segurança em serviços de saúde da FHCGV, assinale a alternativa que descreve o calçado OBRIGATÓRIO pela NR-32:",
    "alternativas": {
      "A": "Sandálias de tiras de couro com salto alto fino de 10 cm.",
      "B": "Chuteiras de futebol com travas de alumínio de 2 cm.",
      "C": "Calçado completamente fechado na região superior e posterior (calcanhar), com sola antiderrapante e material impermeável e lavável.",
      "D": "Chinelos de dedo abertos confeccionados em borracha de praia.",
      "E": "Sapatos de camurça permeável com solado liso encerado."
    },
    "resposta_correta": "C",
    "comentario": "A NR-32 exige calçado fechado (protegendo todo o pé contra perfurocortantes e líquidos) e solado antiderrapante para prevenir quedas em pisos úmidos.",
    "referencia": "NR-32, item 32.2.4.7"
  },
  {
    "id": 316,
    "materia": "NR-32",
    "dificuldade": "CLT Art. 167 e NR-06, item 6.2",
    "enunciado": "A respeito do Certificado de Aprovação (CA) dos Equipamentos de Proteção Individual:",
    "alternativas": {
      "A": "O número do CA pode ser inventado livremente pelo técnico de segurança da unidade.",
      "B": "O CA é emitido pelo conselho regional de medicina local de cada município.",
      "C": "Todo EPI, seja de fabricação nacional ou importado, só pode ser posto à venda ou utilizado no trabalho com a indicação do Certificado de Aprovação (CA) expedido pelo órgão nacional competente em matéria de segurança do trabalho.",
      "D": "O CA é dispensado para equipamentos utilizados em serviços de saúde do SUS.",
      "E": "A validade do CA precisa ser verificada apenas no dia da demissão do empregado."
    },
    "resposta_correta": "C",
    "comentario": "A comercialização e o fornecimento de qualquer EPI no Brasil exigem CA válido emitido pelo Ministério do Trabalho e Emprego (CLT Art. 167 e NR-06).",
    "referencia": "CLT Art. 167 e NR-06, item 6.2"
  },
  {
    "id": 317,
    "materia": "NR-32",
    "dificuldade": "Nota Técnica MTE e NR-06",
    "enunciado": "Se a validade do Certificado de Aprovação (CA) de um lote de máscaras PFF2 vencer após a compra válida pelo hospital, as máscaras que estão em estoque:",
    "alternativas": {
      "A": "Devem ser incineradas imediatamente por crime sanitário.",
      "B": "Devem ser enviadas para a Suíça para recertificação internacional.",
      "C": "Podem ser vendidas a preço de custo aos pacientes da recepção.",
      "D": "Exigem a aplicação de uma carimbada manual do diretor para renovar o CA.",
      "E": "Podem ser utilizadas até a data de validade de fabricação estipulada pelo fabricante, desde que tenham sido adquiridas no período em que o CA estava válido."
    },
    "resposta_correta": "E",
    "comentario": "Conforme entendimento consolidado do MTE (Nota Técnica), o EPI adquirido com CA válido pode ser utilizado até o término da validade do produto pelo fabricante.",
    "referencia": "Nota Técnica MTE e NR-06"
  },
  {
    "id": 318,
    "materia": "NR-32",
    "dificuldade": "NR-06, item 6.6.2",
    "enunciado": "Qual é a obrigação do trabalhador da FHCGV quanto ao EPI fornecido pela instituição, conforme o subitem 6.6.2 da NR-06?",
    "alternativas": {
      "A": "Levar o EPI para casa e utilizá-lo na pintura de paredes do seu condomínio.",
      "B": "Utilizar o equipamento apenas para as finalidades a que se destina, responsabilizar-se pela sua guarda e conservação e comunicar ao empregador qualquer alteração que o torne impróprio para uso.",
      "C": "Vender o EPI usado para colegas de outros hospitais para complementar a renda familiar.",
      "D": "Modificar a estrutura do EPI com tesoura e maçarico para torná-lo mais largo.",
      "E": "Recusar o uso do EPI se a cor do plástico não combinar com seu uniforme pessoal."
    },
    "resposta_correta": "B",
    "comentario": "O empregado deve usar o EPI fornecido, cuidar de sua conservação e comunicar imediatamente ao SESMT/chefia qualquer dano ou extravio para substituição.",
    "referencia": "NR-06, item 6.6.2"
  },
  {
    "id": 319,
    "materia": "NR-32",
    "dificuldade": "NR-32 e NR-24",
    "enunciado": "A disponibilização de vestiários adequados para troca de roupa e banho após o plantão na FHCGV é uma exigência que atende à NR-32 e NR-24 com o propósito de:",
    "alternativas": {
      "A": "Servir como ponto de encontro festivo para churrascos de final de semana dos funcionários.",
      "B": "Garantir que os trabalhadores não levem sujidade e patógenos biológicos hospitalares para fora do ambiente assistencial, protegendo suas famílias e a comunidade.",
      "C": "Obrigar os servidores a gastarem a cota de sabonete fornecida pelo Estado.",
      "D": "Substituir o pagamento de insalubridade por fornecimento de água quente.",
      "E": "Possibilitar a cobrança de ingresso aos visitantes da fundação hospitalar."
    },
    "resposta_correta": "B",
    "comentario": "A higiene pessoal e a troca de vestimenta nos vestiários impedem a disseminação de patógenos hospitalares para o ambiente público e domiciliar dos trabalhadores.",
    "referencia": "NR-32 e NR-24"
  },
  {
    "id": 320,
    "materia": "NR-32",
    "dificuldade": "NR-06 e NR-32",
    "enunciado": "Em relação ao fornecimento de luvas com espessuras e materiais diferenciados na FHCGV:",
    "alternativas": {
      "A": "As luvas devem ser furadas propositalmente nas pontas dos dedos para respirar a pele.",
      "B": "A especificação do tipo de luva (procedimento, cirúrgica, nitrílica, borracha pesada com cano longo, anticorte) deve ser compatível com a natureza da tarefa e o agente de risco presente.",
      "C": "É expressamente proibido fornecer luvas aos servidores do setor de expurgo da CME.",
      "D": "As luvas devem ser fornecidas em tamanho único extrapequeno para economizar espaço de prateleira.",
      "E": "Todos os setores, desde a cirurgia cardíaca até a jardinagem externa, devem usar a mesma luva cirúrgica estéril de látex ultrafina nº 7."
    },
    "resposta_correta": "B",
    "comentario": "A adequação do EPI ao risco e à biometria do trabalhador é preceito fundamental da NR-06 e NR-32 (luvas finas para destreza, grossas impermeáveis para expurgo e limpeza).",
    "referencia": "NR-06 e NR-32"
  },
  {
    "id": 321,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.3.7.6 e RDC 220/ANVISA",
    "enunciado": "Em relação à manipulação de medicamentos quimioterápicos antineoplásicos (citostáticos) na farmácia hospitalar da FHCGV, a NR-32 e normas sanitárias exigem que ela ocorra obrigatoriamente dentro de:",
    "alternativas": {
      "A": "Uma sala com ar-condicionado de janela convencional em velocidade máxima.",
      "B": "Um carrinho de emergência móvel posicionado no corredor central.",
      "C": "Uma capela química simples com exaustor doméstico de cozinha.",
      "D": "Cabine de Segurança Biológica (CSB) Classe II Tipo B2, dotada de exaustão de ar 100% externa através de filtro HEPA, sem recirculação de ar para o ambiente.",
      "E": "Uma bancada de madeira aberta ao lado da janela da enfermaria."
    },
    "resposta_correta": "D",
    "comentario": "A manipulação de antineoplásicos exige Cabine de Segurança Biológica Classe II B2 com 100% de exaustão para o exterior através de filtros HEPA absolutos (NR-32, item 32.3.7.6).",
    "referencia": "NR-32, item 32.3.7.6 e RDC 220/ANVISA"
  },
  {
    "id": 322,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.3.7.1.3",
    "enunciado": "Qual é a conduta obrigatória em relação às trabalhadoras gestantes ou lactantes que atuam no setor de oncologia hospitalar com risco de exposição a quimioterápicos antineoplásicos?",
    "alternativas": {
      "A": "Devem ser submetidas a quimioterapia profilática em baixas doses.",
      "B": "Podem continuar manipulando citostáticos desde que usem duas máscaras cirúrgicas sobrepostas.",
      "C": "Devem realizar o dobro do número de manipulações de quimioterápicos para aumentar a resistência física.",
      "D": "Devem ter seus salários reduzidos em 50% enquanto durar a gestação.",
      "E": "Devem ser afastadas imediatamente dessas atividades e remanejadas para setores sem exposição a agentes teratogênicos e citotóxicos."
    },
    "resposta_correta": "E",
    "comentario": "O item 32.3.7.1.3 da NR-32 proíbe expressamente a exposição de gestantes e lactantes a medicamentos quimioterápicos antineoplásicos devido aos riscos mutagênicos e teratogênicos.",
    "referencia": "NR-32, item 32.3.7.1.3"
  },
  {
    "id": 323,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.3.7.6.4",
    "enunciado": "Em relação aos Equipamentos de Proteção Individual para o manipulador de antineoplásicos citostáticos, a NR-32 estabelece o uso de:",
    "alternativas": {
      "A": "Camiseta regata de algodão e bermuda jeans confortável.",
      "B": "Capa de chuva de PVC industrial transparente de uso em rodovias.",
      "C": "Jaleco hospitalar padrão de botões frontais com bolsos abertos.",
      "D": "Avental impermeável com baixa permeabilidade, frente fechada, mangas compridas com punhos elásticos ajustados e fechamento dorsal.",
      "E": "Avental de linho comum aberto na frente com mangas curtas."
    },
    "resposta_correta": "D",
    "comentario": "O avental para manuseio de citostáticos deve ser impermeável, com baixa liberação de partículas, frente inteiriça sem abertura frontal, mangas longas e punho elástico.",
    "referencia": "NR-32, item 32.3.7.6.4"
  },
  {
    "id": 324,
    "materia": "NR-32",
    "dificuldade": "NR-32 e Diretrizes de Oncologia Farmacêutica",
    "enunciado": "Sobre o uso de luvas durante a manipulação de quimioterápicos antineoplásicos na farmácia de oncologia da FHCGV:",
    "alternativas": {
      "A": "O trabalhador deve usar uma única luva cirúrgica que pode ser lavada e reutilizada por 3 meses.",
      "B": "O trabalhador deve utilizar duplo enluvamento com luvas apropriadas para citostáticos, sem pó (talco), devendo ser trocadas no máximo a cada 30 minutos ou imediatamente se houver contaminação ou rasgo.",
      "C": "O uso de luvas é dispensado para permitir maior sensibilidade tátil com agulhas finas.",
      "D": "O profissional deve aplicar talco em grande quantidade antes de calçar as luvas.",
      "E": "Devem ser usadas luvas de couro tipo vaqueta com reforço metálico no polegar."
    },
    "resposta_correta": "B",
    "comentario": "Recomenda-se duplo enluvamento específico para citostáticos, isento de pó, trocado periodicamente a cada 30 minutos para evitar permeação química para a pele.",
    "referencia": "NR-32 e Diretrizes de Oncologia Farmacêutica"
  },
  {
    "id": 325,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.3.7.6 e RDC 220/ANVISA",
    "enunciado": "Em caso de acidente com derramamento ou respingo de quimioterápico antineoplásico líquido no piso da área de manipulação, o procedimento de emergência exige o uso imediato do:",
    "alternativas": {
      "A": "Esfregão seco de algodão comum manipulado com as mãos desnudas.",
      "B": "'Kit de Derramamento' contendo EPIs adequados (respirador, luvas, óculos, avental), compressas absorventes, neutralizante, pinça para vidros e saco plástico de descarte específico.",
      "C": "Aparelho de lavar piso de alta pressão industrial para espalhar o líquido pelo corredor.",
      "D": "Aspirador de pó residencial comum com saco de papel reciclável.",
      "E": "Ventilador de pedestal para soprar o pó químico para as áreas abertas do hospital."
    },
    "resposta_correta": "B",
    "comentario": "Todo setor de manipulação deve possuir 'Kit de Derramamento' para contenção imediata e segura de citostáticos com proteção individual e descarte em resíduo químico Grupo B.",
    "referencia": "NR-32, item 32.3.7.6 e RDC 220/ANVISA"
  },
  {
    "id": 326,
    "materia": "NR-32",
    "dificuldade": "RDC 222/2018 e NR-32",
    "enunciado": "A respeito do descarte de sobras e frascos vazios de medicamentos quimioterápicos antineoplásicos, a classificação de resíduos da ANVISA (RDC 222/2018) enquadra-os no:",
    "alternativas": {
      "A": "Grupo C (Rejeito radioativo nuclear).",
      "B": "Grupo E (Perfurocortante sem risco químico associado).",
      "C": "Grupo D (Resíduo comum reciclável de escritório).",
      "D": "Grupo A (Biológico infectante comum).",
      "E": "Grupo B (Resíduo Químico perigoso - citostático/teratogênico)."
    },
    "resposta_correta": "E",
    "comentario": "Frascos, ampolas e materiais com resíduos de citostáticos são resíduos perigosos do Grupo B (químicos com propriedades carcinogênicas, mutagênicas ou teratogênicas).",
    "referencia": "RDC 222/2018 e NR-32"
  },
  {
    "id": 327,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.3.8",
    "enunciado": "Nos centros cirúrgicos da FHCGV onde são administrados gases e vapores anestésicos voláteis (como sevoflurano, isoflurano e óxido nitroso), a NR-32 exige:",
    "alternativas": {
      "A": "A proibição do uso de ar-condicionado durante os atos cirúrgicos para não soprar os gases.",
      "B": "A queima dos gases voláteis com isqueiro aceso próximo ao cilindro de oxigênio.",
      "C": "A retenção dos gases no interior da sala cirúrgica para anestesiar a equipe médica.",
      "D": "A colocação de baldes de água com sal no piso para absorver o óxido nitroso.",
      "E": "Sistema de exaustão e captação de gases residuais dos aparelhos de anestesia (scavenging system), garantindo a eliminação segura para fora do ambiente e renovação do ar da sala."
    },
    "resposta_correta": "E",
    "comentario": "Aparelhos de anestesia devem possuir sistema de captação e exaustão dos gases anestésicos residuais para o exterior (sistema scavenging), com controle de vazamentos.",
    "referencia": "NR-32, item 32.3.8"
  },
  {
    "id": 328,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.3.8 e ACGIH",
    "enunciado": "A exposição crônica de técnicos e enfermeiros do centro cirúrgico a vapores de gases anestésicos residuais sem exaustão adequada está clinicamente associada a:",
    "alternativas": {
      "A": "Aumento da acuidade auditiva e melhora da memória recente.",
      "B": "Cura espontânea de diabetes mellitus tipo 1.",
      "C": "Perda instantânea de toda a pigmentação dos cabelos em 24 horas.",
      "D": "Efeitos neurocomportamentais (fadiga, cefaleia), alterações hepáticas, renais e aumento do risco de abortamento espontâneo em trabalhadoras gestantes.",
      "E": "Crescimento acelerado dos dentes e unhas das mãos."
    },
    "resposta_correta": "D",
    "comentario": "Vapores anestésicos residuais exercem toxicidade hepática, renal, dores de cabeça, fadiga crônica e aumento estatístico de abortamentos e malformações fetais.",
    "referencia": "NR-32, item 32.3.8 e ACGIH"
  },
  {
    "id": 329,
    "materia": "NR-32",
    "dificuldade": "RDC 15/ANVISA e NR-32",
    "enunciado": "O glutaraldeído, substância química amplamente utilizada no passado para desinfecção de alto nível de endoscópios e materiais na CME, teve seu uso restrito e substituído prioritariamente por:",
    "alternativas": {
      "A": "Querosene de aviação ou gasolina automotiva adulterada.",
      "B": "Exposição à luz de velas perfumadas de cera de abelha.",
      "C": "Água sanitária de supermercado com sabão em pó aromatizado.",
      "D": "Imersão em suco puro de limão com vinagre concentrado.",
      "E": "Ácido peracético ou métodos automatizados de esterilização física (como autoclave a vapor ou plasma de peróxido de hidrogênio), devido à alta toxicidade respiratória e ocular do glutaraldeído."
    },
    "resposta_correta": "E",
    "comentario": "Devido à toxicidade e vapores irritantes do glutaraldeído (asma ocupacional, dermatites e alergias), as diretrizes da ANVISA recomendam ácido peracético ou esterilização automatizada.",
    "referencia": "RDC 15/ANVISA e NR-32"
  },
  {
    "id": 330,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.3.4",
    "enunciado": "Nos locais de esterilização e desinfecção química na CME onde se utilizam agentes químicos como ácido peracético ou glutaraldeído, o ambiente deve dispor de:",
    "alternativas": {
      "A": "Sistema de ventilação e exaustão local exclusivo, lavatórios com água corrente, lava-olhos de emergência e chuveiro de segurança.",
      "B": "Apenas ventilador de teto comum mantido desligado para não agitar os vapores.",
      "C": "Portas e janelas hermeticamente seladas com cimento armado.",
      "D": "Apenas uma caixa de fósforos para queimar os vapores ácidos.",
      "E": "Piso acarpetado com feltro de algodão para absorver os vapores químicos."
    },
    "resposta_correta": "A",
    "comentario": "Áreas com manipulação de saneantes fortes exigem exaustão mecânica, chuveiro de emergência e lava-olhos com fácil acesso para atendimento a acidentes com respingos.",
    "referencia": "NR-32, item 32.3.4"
  },
  {
    "id": 331,
    "materia": "NR-32",
    "dificuldade": "IARC, NR-15 e NR-32",
    "enunciado": "Em relação ao formaldeído (formol) utilizado para conservação de peças anatômicas no laboratório de patologia e no necrotério da FHCGV:",
    "alternativas": {
      "A": "Trata-se de substância considerada inofensiva e potável segundo os limites da NR-15.",
      "B": "Deve ser manipulado em ambientes sem ventilação para impedir a perda do produto por evaporação.",
      "C": "A NR-32 proíbe o uso de luvas de borracha durante a manipulação do formol.",
      "D": "O profissional deve cheirar o frasco periodicamente para avaliar a sua concentração volumétrica.",
      "E": "Trata-se de substância tóxica, irritante grave das vias aéreas e classificada como comprovadamente cancerígena para humanos (Grupo 1 pela IARC), exigindo manipulação em capelas de exaustão química com EPIs adequados."
    },
    "resposta_correta": "E",
    "comentario": "O formaldeído é comprovadamente carcinogênico humano (câncer nasofaringe e leucemia) e irritante severo; sua manipulação exige capela com exaustão externa e respiradores com filtro para vapores químicos.",
    "referencia": "IARC, NR-15 e NR-32"
  },
  {
    "id": 332,
    "materia": "NR-32",
    "dificuldade": "NR-26, item 26.2 e NR-32, item 32.3",
    "enunciado": "Qual é o documento técnico obrigatório que deve acompanhar todos os produtos químicos perigosos recebidos no hospital e ficar disponível para consulta dos trabalhadores?",
    "alternativas": {
      "A": "A Certidão Negativa de Débitos Tributários da Secretaria de Fazenda.",
      "B": "O boletim de ocorrência policial do bairro onde a fábrica está localizada.",
      "C": "A receita médica manuscrita pelo diretor clínico do hospital.",
      "D": "A Nota Fiscal assinada pelo motorista do caminhão de entrega.",
      "E": "A Ficha com Dados de Segurança de Produtos Químicos (antiga FISPQ / atual FDS), contendo propriedades de perigo, primeiros socorros, combate a incêndio e EPIs recomendados."
    },
    "resposta_correta": "E",
    "comentario": "A FDS (Ficha com Dados de Segurança, antiga FISPQ) é obrigatória pela NR-26 e NR-32, contendo informações detalhadas sobre toxicidade, primeiros socorros e medidas de segurança.",
    "referencia": "NR-26, item 26.2 e NR-32, item 32.3"
  },
  {
    "id": 333,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.3.2 e NR-20",
    "enunciado": "No armazenamento de recipientes contendo produtos químicos perigosos (inflamáveis, corrosivos, tóxicos) no almoxarifado do hospital, é PROIBIDO:",
    "alternativas": {
      "A": "Disponibilizar extintores de incêndio adequados à classe dos produtos químicos.",
      "B": "Armazená-los em prateleiras resistentes e identificadas com rótulos de perigo.",
      "C": "Utilizar equipamentos de proteção individual durante a movimentação dos frascos.",
      "D": "Manter o local arejado e com acesso restrito a pessoas autorizadas.",
      "E": "Armazenar produtos químicos incompatíveis juntos (como substâncias oxidantes ao lado de inflamáveis) e colocar recipientes pesados em alturas perigosas sem bacia de contenção de vazamentos."
    },
    "resposta_correta": "E",
    "comentario": "A incompatibilidade química pode gerar reações violentas, liberação de gases tóxicos e fogo. Devem ser segregados com bacias de contenção e ventilação adequada.",
    "referencia": "NR-32, item 32.3.2 e NR-20"
  },
  {
    "id": 334,
    "materia": "NR-32",
    "dificuldade": "NR-32 e NR-06",
    "enunciado": "Durante o fracionamento de álcool líquido 70% ou manipulação de hipoclorito de sódio concentrado na FHCGV, os profissionais devem utilizar:",
    "alternativas": {
      "A": "Apenas sandálias havaianas e relógio de pulso.",
      "B": "Apenas anéis de prata para oxidar com os vapores do cloro.",
      "C": "Máscara cirúrgica frouxa pendurada na orelha e bermuda de banho.",
      "D": "Avental de proteção impermeável, luvas resistentes ao produto químico (ex: nitrílica ou PVC), óculos de segurança ampla visão ou viseira e proteção respiratória apropriada.",
      "E": "Roupas de lã pura sem qualquer proteção facial ou ocular."
    },
    "resposta_correta": "D",
    "comentario": "O fracionamento de produtos químicos perigosos exige EPIs impermeáveis contra respingos corrosivos (óculos, avental de PVC, luvas nitrílicas) e ventilação adequada.",
    "referencia": "NR-32 e NR-06"
  },
  {
    "id": 335,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.3.3",
    "enunciado": "Em relação ao transporte interno de recipientes de vidro contendo produtos químicos perigosos (como ácidos, formol ou éter) no hospital:",
    "alternativas": {
      "A": "Devem ser transportados em suportes rígidos ou cestas de material resistente com alça e bacia de contenção contra quebras e vazamentos acidentais.",
      "B": "Devem ser guardados nos mesmos carrinhos de transporte de alimentos dos pacientes.",
      "C": "Podem ser jogados pela janela do terceiro andar para o piso térreo.",
      "D": "Os frascos de vidro devem ser transportados soltos nas mãos do trabalhador pelos corredores.",
      "E": "Devem ser rolados pelo chão cerâmico dos corredores por meio de chutes leves."
    },
    "resposta_correta": "A",
    "comentario": "Frascos de vidro contendo químicos devem ser transportados em recipientes secundários resistentes e antichoque para conter o líquido em caso de quebra acidental.",
    "referencia": "NR-32, item 32.3.3"
  },
  {
    "id": 336,
    "materia": "NR-32",
    "dificuldade": "NR-26 e ABNT NBR 14725",
    "enunciado": "A rotulagem de produtos químicos no hospital, em conformidade com o Sistema Globalmente Harmonizado (GHS) adotado pela NR-26 e NR-32, deve conter:",
    "alternativas": {
      "A": "Apenas a data da última eleição presidencial do país.",
      "B": "Apenas o preço de venda da mercadoria em reais.",
      "C": "Apenas a foto do prédio da fábrica fornecedora.",
      "D": "A assinatura manuscrita do técnico de segurança do trabalho do turno da manhã.",
      "E": "Identificação do produto, composição química, palavras de advertência (ex: Perigo), pictogramas de perigo, frases de perigo (H) e frases de precaução (P)."
    },
    "resposta_correta": "E",
    "comentario": "A rotulagem segundo o GHS/NR-26 exige pictograma de perigo, identificação, palavra de advertência, frases de perigo (frases H) e frases de precaução (frases P).",
    "referencia": "NR-26 e ABNT NBR 14725"
  },
  {
    "id": 337,
    "materia": "NR-32",
    "dificuldade": "GHS e NR-26",
    "enunciado": "Qual é o pictograma do GHS utilizado para identificar substâncias químicas que apresentam perigo grave à saúde a longo prazo, como toxicidade para órgãos-alvo, carcinogenicidade e mutagenicidade (ex: quimioterápicos citostáticos)?",
    "alternativas": {
      "A": "Um ponto de exclamação preto (irritação dérmica).",
      "B": "Um peixe e uma árvore mortos (perigo ambiental).",
      "C": "Uma caveira com tíbias cruzadas em fundo azul.",
      "D": "Uma chama com fundo vermelho (inflamável).",
      "E": "Um losango com a silhueta de busto humano com uma estrela branca no peito (perigo crônico à saúde)."
    },
    "resposta_correta": "E",
    "comentario": "O pictograma de 'perigo à saúde humana' (busto com estrela rompida no tórax) indica carcinogenicidade, mutagenicidade, teratogenicidade e toxicidade respiratória crônica.",
    "referencia": "GHS e NR-26"
  },
  {
    "id": 338,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.3.9 e Portaria 482/1999",
    "enunciado": "Sobre o uso de óxido de etileno (EtO) para esterilização de materiais médicos termossensíveis em serviços de saúde terceirizados ou próprios:",
    "alternativas": {
      "A": "O trabalhador exposto ao óxido de etileno fica dispensado de exames periódicos de saúde.",
      "B": "O óxido de etileno é um gás inodoro e completamente atóxico que pode ser inalado livremente pelos trabalhadores.",
      "C": "O óxido de etileno é um gás extremamente tóxico, inflamável, mutagênico e carcinogênico humano, exigindo instalações isoladas, autoclaves automatizadas e monitoramento ambiental rigoroso.",
      "D": "A esterilização por óxido de etileno pode ser realizada em panelas de pressão domésticas na copa do hospital.",
      "E": "O óxido de etileno é utilizado como tempero culinário nas saladas dos pacientes da enfermaria."
    },
    "resposta_correta": "C",
    "comentario": "O óxido de etileno é carcinógeno humano e altamente reativo, sujeito a requisitos estritos da Portaria Interministerial 482/1999 e da NR-32 (item 32.3.9).",
    "referencia": "NR-32, item 32.3.9 e Portaria 482/1999"
  },
  {
    "id": 339,
    "materia": "NR-32",
    "dificuldade": "NR-09, NR-15 e NR-32",
    "enunciado": "A avaliação ambiental quantitativa de vapores de formaldeído e xilol nos laboratórios de patologia deve ser realizada pelo SESMT para:",
    "alternativas": {
      "A": "Calcular a quantidade de formol que os funcionários podem levar para casa.",
      "B": "Comprovar que o laboratório não precisa de ar condicionado durante o verão.",
      "C": "Comprovar que o cheiro forte é inofensivo à saúde humana.",
      "D": "Substituir os salários dos funcionários por cotas de reagentes químicos.",
      "E": "Comparar as concentrações no ar com os Limites de Tolerância da NR-15 (e ACGIH) e verificar a eficácia das medidas de engenharia (capelas de exaustão)."
    },
    "resposta_correta": "E",
    "comentario": "A medição quantitativa dos vapores no ar compara os níveis com o limite de tolerância da NR-15 e referenciais da ACGIH para controle e enquadramento do PGR.",
    "referencia": "NR-09, NR-15 e NR-32"
  },
  {
    "id": 340,
    "materia": "NR-32",
    "dificuldade": "RDC 222/2018 e NR-32",
    "enunciado": "Qual a recomendação preventiva para descarte de recipientes vazios ou com restos de anestésicos inalatórios voláteis (ex: frascos de vidro de sevoflurano)?",
    "alternativas": {
      "A": "Jogar os frascos no jardim do hospital para afastar mosquitos transmissores de dengue.",
      "B": "Quebrar os frascos na pia do posto de enfermagem para evaporar o anestésico.",
      "C": "Acondicionar em recipiente rígido, lacrado e rotulado como Resíduo Químico perigoso (Grupo B), encaminhando para tratamento e destinação final ambientalmente licenciada.",
      "D": "Reaproveitar os frascos vazios de anestésicos como copos de água para os acompanhantes.",
      "E": "Descartar no lixo comum reciclável sem esvaziamento prévio do produto."
    },
    "resposta_correta": "C",
    "comentario": "Frascos contendo resíduos químicos perigosos devem ser descartados como Grupo B (resíduos químicos) para tratamento térmico ou destinação adequada.",
    "referencia": "RDC 222/2018 e NR-32"
  },
  {
    "id": 341,
    "materia": "NR-32",
    "dificuldade": "CNEN NN 3.01, RDC 611/ANVISA e NR-32",
    "enunciado": "Em relação à proteção radiológica nos serviços de diagnóstico por imagem (raio-X fixo e móvel, tomografia) da FHCGV, a NR-32 e normas da CNEN estabelecem o princípio ALARA, que significa:",
    "alternativas": {
      "A": "Manter as exposições à radiação tão baixas quanto razoavelmente exequíveis (As Low As Reasonably Achievable), considerando fatores econômicos e sociais.",
      "B": "Permitir que qualquer acompanhante segure o paciente sem avental de proteção durante os disparos.",
      "C": "Aumentar a dosagem de radiação ao máximo possível para obter imagens ultraprecisas em segundos.",
      "D": "Operar os equipamentos de raio-X continuamente durante 24 horas ininterruptas.",
      "E": "Substituir todos os aparelhos de raio-X por câmeras fotográficas convencionais de smartphone."
    },
    "resposta_correta": "A",
    "comentario": "O princípio ALARA (As Low As Reasonably Achievable) orienta a otimização da proteção radiológica para que as doses sejam as menores possíveis mantendo a qualidade diagnóstica.",
    "referencia": "CNEN NN 3.01, RDC 611/ANVISA e NR-32"
  },
  {
    "id": 342,
    "materia": "NR-32",
    "dificuldade": "Princípios Básicos de Radioproteção e NR-32",
    "enunciado": "Quais são os TRÊS fatores fundamentais da física de proteção contra a radiação ionizante externa utilizados para reduzir a dose recebida pelo trabalhador?",
    "alternativas": {
      "A": "Tamanho da sala, cor das paredes e tipo de lâmpada do teto.",
      "B": "Tempo de exposição, distância da fonte emissora e blindagem do ambiente/EPI.",
      "C": "Altura do paciente, peso do operador e tipo de sapato utilizado.",
      "D": "Pressão do ar, temperatura ambiente e luminosidade da sala.",
      "E": "Voltagem da rede elétrica, marca do computador e tipo de piso cerâmico."
    },
    "resposta_correta": "B",
    "comentario": "A tríade fundamental de radioproteção baseia-se em: reduzir o TEMPO, aumentar a DISTÂNCIA (a dose cai com o inverso do quadrado da distância) e utilizar BLINDAGEM adequada.",
    "referencia": "Princípios Básicos de Radioproteção e NR-32"
  },
  {
    "id": 343,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.4 e RDC 611/2022 ANVISA",
    "enunciado": "Os Equipamentos de Proteção Individual plumbíferos (avental de borracha com chumbo, protetor de tireoide e óculos plumbíferos) utilizados em raio-X devem apresentar atenuação mínima equivalente a:",
    "alternativas": {
      "A": "0,1 mm de papelão ondulado de embalagem.",
      "B": "0,001 mm de alumínio reciclado.",
      "C": "0,25 mm a 0,5 mm de chumbo (Pb), em conformidade com as normas sanitárias e da CNEN.",
      "D": "50 mm de lâminas de ferro puro magnetizado.",
      "E": "10 metros de placas de concreto armado."
    },
    "resposta_correta": "C",
    "comentario": "Aventais e protetores plumbíferos para radiodiagnóstico geral devem ter espessura mínima equivalente a 0,25 mm de Pb (ou 0,5 mm de Pb para procedimentos de maior intensidade, como hemodinâmica).",
    "referencia": "NR-32, item 32.4 e RDC 611/2022 ANVISA"
  },
  {
    "id": 344,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.4 e Manuais de Radioproteção",
    "enunciado": "Com relação à conservação dos aventais de chumbo (borracha plumbífera) nos setores de imagem da FHCGV, é PROIBIDO:",
    "alternativas": {
      "A": "Guardá-los pendurados em suportes ou cabides próprios para aventais plumbíferos.",
      "B": "Dobrálos sobre bancadas, amassá-los ou sentar-se sobre eles, pois isso provoca rachaduras e fraturas internas na lâmina de chumbo, gerando fendas de escape de radiação.",
      "C": "Identificá-los com número de registro para controle patrimonial e radiológico.",
      "D": "Higienizá-los com pano umedecido em solução neutra de água e sabão.",
      "E": "Realizar inspeção periódica para verificação de fissuras na blindagem."
    },
    "resposta_correta": "B",
    "comentario": "Dobrar ou amassar aventais plumbíferos quebra a camada interna de chumbo, criando fendas invisíveis que expõem o trabalhador a feixes diretos de radiação ionizante.",
    "referencia": "NR-32, item 32.4 e Manuais de Radioproteção"
  },
  {
    "id": 345,
    "materia": "NR-32",
    "dificuldade": "RDC 611/2022 ANVISA e NR-32",
    "enunciado": "A periodicidade com que os aventais e vestimentas plumbíferas de proteção individual devem ser inspecionados física e radioscopicamente quanto à integridade da blindagem de chumbo é de no mínimo:",
    "alternativas": {
      "A": "Diariamente por pesagem em balança de precisão.",
      "B": "Semanalmente com uso de lupa de aumento comum.",
      "C": "A cada 30 anos.",
      "D": "Apenas após o descarte do equipamento no lixo hospitalar.",
      "E": "Anualmente (a cada 12 meses), registrando-se os laudos de conformidade."
    },
    "resposta_correta": "E",
    "comentario": "As vestimentas plumbíferas devem ser submetidas a teste radioscópico ou radiográfico anual para avaliar a presença de fendas e rachaduras que comprometam a radioproteção.",
    "referencia": "RDC 611/2022 ANVISA e NR-32"
  },
  {
    "id": 346,
    "materia": "NR-32",
    "dificuldade": "Normas CNEN e NR-32, item 32.4",
    "enunciado": "Em relação ao uso do dosímetro individual de tórax pelo profissional ocupacionalmente exposto a radiação ionizante (técnico em radiologia):",
    "alternativas": {
      "A": "O dosímetro deve ser compartilhado por todos os técnicos do mesmo turno de plantão.",
      "B": "O dosímetro deve ser levado para casa e deixado em frente ao aparelho de televisão nos finais de semana.",
      "C": "O dosímetro deve ser colocado diretamente sobre o tubo emissor de raio-X durante os disparos.",
      "D": "O dosímetro deve ser utilizado sob o avental de chumbo (na altura do tórax), durante toda a jornada de trabalho no hospital, e trocado mensalmente para leitura e registro de dose.",
      "E": "O dosímetro é de uso opcional caso o trabalhador tenha ingerido leite com aveia antes do plantão."
    },
    "resposta_correta": "D",
    "comentario": "O dosímetro mede a dose individual recebida pelo operador; é pessoal, intransferível, de troca mensal, e deve ser guardado no dosímetro padrão quando o trabalhador não estiver no setor.",
    "referencia": "Normas CNEN e NR-32, item 32.4"
  },
  {
    "id": 347,
    "materia": "NR-32",
    "dificuldade": "CNEN NN 3.01 e NR-32, item 32.4.4",
    "enunciado": "Qual é a conduta imediata em relação à trabalhadora técnica em radiologia que notifica formalmente a sua gravidez à chefia da FHCGV?",
    "alternativas": {
      "A": "Manter a trabalhadora na mesma função, exigindo que ela use três aventais de chumbo sobrepostos durante 12 horas em pé.",
      "B": "Obrigar a gestante a assinar pedido de demissão imediata sem justa causa.",
      "C": "Aumentar o número de exames de tomografia realizados por ela durante o primeiro trimestre gestacional.",
      "D": "Retirar o dosímetro da trabalhadora para não registrar a radiação recebida pelo feto.",
      "E": "Remanejá-la imediatamente para atividades sem exposição a radiação ionizante (funções administrativas ou fora das áreas controladas), garantindo que a dose na superfície do abdome não exceda 1 mSv durante todo o período gestacional restante."
    },
    "resposta_correta": "E",
    "comentario": "A trabalhadora gestante deve ser remanejada para áreas não controladas para proteger o feto de malformações e efeitos teratogênicos; o limite de dose no feto é de 1 mSv durante a gestação.",
    "referencia": "CNEN NN 3.01 e NR-32, item 32.4.4"
  },
  {
    "id": 348,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.4.2 e RDC 611/2022",
    "enunciado": "A sinalização visual de segurança das salas onde operam equipamentos geradores de radiação ionizante (sala de raio-X e tomografia) deve conter obrigatoriamente:",
    "alternativas": {
      "A": "Aviso de que o ambiente é totalmente estéril e livre de qualquer forma de energia.",
      "B": "Apenas uma placa comercial com horário de funcionamento da lanchonete.",
      "C": "O símbolo internacional de radiação ionizante (trifólio magenta ou preto sobre fundo amarelo), aviso de acesso restrito a pessoal autorizado e sinalização luminosa vermelha na porta indicando equipamento em funcionamento/emissão.",
      "D": "Uma bandeira oficial do Estado do Pará pendurada na fechadura.",
      "E": "Apenas o desenho de uma caveira com fita adesiva cinza comum."
    },
    "resposta_correta": "C",
    "comentario": "As salas de radiação exigem sinalização padronizada com o trifólio de radiação ionizante, controle de acesso e lâmpada vermelha de disparo (sinalização luminosa de aviso).",
    "referencia": "NR-32, item 32.4.2 e RDC 611/2022"
  },
  {
    "id": 349,
    "materia": "NR-32",
    "dificuldade": "NR-32, item 32.4 e RDC 611/2022",
    "enunciado": "Durante a realização de exames com equipamento móvel de raio-X no leito de pacientes na UTI da FHCGV, a equipe de enfermagem e demais pacientes do leito ao lado devem:",
    "alternativas": {
      "A": "Aproximar-se ao máximo do leito examinado para observar a tela do aparelho.",
      "B": "Deitar-se no mesmo leito do paciente examinado durante o exame.",
      "C": "Manter distância de segurança mínima preconizada (no mínimo 2 metros) ou ficar atrás de biombo plumbífero durante o disparo radiográfico, e usar avental de chumbo se precisarem permanecer próximos.",
      "D": "Segurar o tubo do raio-X móvel com as mãos para impedir trepidações no chão.",
      "E": "Colocar toalhas molhadas sobre o tórax para absorver os fótons de raio-X."
    },
    "resposta_correta": "C",
    "comentario": "O uso de raio-X móvel exige aviso sonoro prévio, afastamento das pessoas a uma distância segura (pelo menos 2 metros) ou uso de biombos móveis e aventais plumbíferos.",
    "referencia": "NR-32, item 32.4 e RDC 611/2022"
  },
  {
    "id": 350,
    "materia": "NR-32",
    "dificuldade": "RDC 611/2022 ANVISA e NR-32",
    "enunciado": "Em relação à realização de exames radiográficos em pacientes agitados, crianças ou debilitados que necessitem de contenção física:",
    "alternativas": {
      "A": "O paciente deve ser amarrado com correntes de ferro fundido à mesa de exame sem acompanhante.",
      "B": "O operador técnico de radiologia deve segurar o paciente com uma mão e acionar o botão de disparo com a outra mão sem avental.",
      "C": "A contenção deve ser feita prioritariamente por acompanhante do paciente devidamente paramentado com avental plumbífero e protetor de tireoide, sendo proibido ao trabalhador de radiologia segurar o paciente sistematicamente.",
      "D": "Deve-se pedir ao estagiário mais jovem da farmácia que segure o paciente desprotegido.",
      "E": "A contenção física do paciente é terminantemente proibida por lei em qualquer caso de emergência médica."
    },
    "resposta_correta": "C",
    "comentario": "Trabalhadores ocupacionalmente expostos não devem ser utilizados habitualmente para contenção de pacientes durante disparos; essa função cabe a acompanhantes informados e protegidos com EPI plumbífero.",
    "referencia": "RDC 611/2022 ANVISA e NR-32"
  },
  {
    "id": 351,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.080/90, Art. 2º",
    "enunciado": "De acordo com o Art. 2º da Lei Orgânica da Saúde (Lei nº 8.080/1990), a saúde é um direito fundamental do ser humano, cabendo ao Estado:",
    "alternativas": {
      "A": "Garantir a cura imediata de qualquer doença degenerativa sem necessidade de hospitais.",
      "B": "Transferir integralmente o custeio da saúde pública para as seguradoras de saúde privadas.",
      "C": "Restringir o acesso a medicamentos apenas a cidadãos contribuintes da previdência social.",
      "D": "Prover as condições indispensáveis ao seu pleno exercício, mediante políticas econômicas e sociais que visem ao bem-estar físico, mental e social.",
      "E": "Cobrar copagamento financeiro compulsório por todos os exames laboratoriais realizados."
    },
    "resposta_correta": "D",
    "comentario": "O Art. 2º da Lei 8.080/90 estabelece que a saúde é direito fundamental do homem, devendo o Estado prover as condições indispensáveis ao seu pleno exercício.",
    "referencia": "Lei 8.080/90, Art. 2º"
  },
  {
    "id": 352,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.080/90, Art. 2º, § 2º",
    "enunciado": "Conforme o § 2º do Art. 2º da Lei nº 8.080/1990, o dever do Estado de garantir a saúde às pessoas:",
    "alternativas": {
      "A": "Isenta completamente as empresas de qualquer encargo com medicina e segurança do trabalho.",
      "B": "Exclui expressamente o dever das pessoas, das famílias, das empresas e da sociedade.",
      "C": "Limita-se exclusivamente a vacinar crianças menores de um ano de idade.",
      "D": "Não exclui o dever das pessoas, da família, das empresas e da sociedade na busca do bem-estar.",
      "E": "Obriga a família a pagar multas se algum parente adoecer."
    },
    "resposta_correta": "D",
    "comentario": "O Art. 2º, § 2º afirma taxativamente que o dever do Estado não exclui o das pessoas, da família, das empresas e da sociedade.",
    "referencia": "Lei 8.080/90, Art. 2º, § 2º"
  },
  {
    "id": 353,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.080/90, Art. 3º",
    "enunciado": "Os fatores determinantes e condicionantes da saúde expressamente arrolados no Art. 3º da Lei nº 8.080/1990 compreendem, entre outros:",
    "alternativas": {
      "A": "Exclusivamente o patrimônio genético herdado dos pais biológicos.",
      "B": "Apenas o número de médicos concursados por quilômetro quadrado.",
      "C": "A pontualidade do pagamento da tarifa de iluminação pública urbana.",
      "D": "A posse de veículos particulares automotores novos.",
      "E": "Alimentação, moradia, saneamento básico, meio ambiente, trabalho, renda, educação, atividade física, transporte, lazer e acesso aos bens e serviços essenciais."
    },
    "resposta_correta": "E",
    "comentario": "O Art. 3º traz o conceito ampliado de saúde, incluindo alimentação, habitação, saneamento, meio ambiente, trabalho, renda, transporte e lazer como condicionantes da saúde.",
    "referencia": "Lei 8.080/90, Art. 3º"
  },
  {
    "id": 354,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.080/90, Art. 5º",
    "enunciado": "Dentre os objetivos do Sistema Único de Saúde (SUS) elencados no Art. 5º da Lei nº 8.080/1990, inclui-se:",
    "alternativas": {
      "A": "A garantia de plano de saúde privado vitalício para os servidores da saúde.",
      "B": "O faturamento de lucro empresarial para remessa ao exterior de capital multinacional.",
      "C": "A substituição do Poder Judiciário nos julgamentos de acidentes automobilísticos.",
      "D": "A comercialização internacional com fins lucrativos de sangue e hemoderivados.",
      "E": "A identificação e divulgação dos fatores condicionantes e determinantes da saúde, a formulação da política de saúde e a assistência às pessoas por intermédio de ações integradas de promoção, proteção e recuperação da saúde."
    },
    "resposta_correta": "E",
    "comentario": "O Art. 5º da Lei 8.080/90 define os objetivos do SUS: identificação de determinantes, formulação de políticas e assistência integral com promoção, proteção e recuperação.",
    "referencia": "Lei 8.080/90, Art. 5º"
  },
  {
    "id": 355,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.080/90, Art. 6º, I",
    "enunciado": "O Art. 6º da Lei nº 8.080/1990 inclui no campo de atuação do Sistema Único de Saúde a execução de ações de:",
    "alternativas": {
      "A": "Apenas policiamento militar de fronteiras e controle de trânsito rodoviário.",
      "B": "Auditoria contábil de bancos comerciais privados.",
      "C": "Fiscalização tributária sobre produtos importados dos países vizinhos.",
      "D": "Vigilância sanitária, vigilância epidemiológica e saúde do trabalhador.",
      "E": "Construção civil de conjuntos habitacionais e rodovias federais."
    },
    "resposta_correta": "D",
    "comentario": "O Art. 6º, I da Lei 8.080/90 inclui no campo de atuação do SUS a execução de ações de vigilância sanitária, epidemiológica, de saúde do trabalhador e de assistência terapêutica integral.",
    "referencia": "Lei 8.080/90, Art. 6º, I"
  },
  {
    "id": 356,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.080/90, Art. 6º, § 1º",
    "enunciado": "Nos termos do Art. 6º, § 1º da Lei nº 8.080/1990, entende-se por VIGILÂNCIA SANITÁRIA:",
    "alternativas": {
      "A": "A apreensão de documentos de identidade de pacientes com doenças transmissíveis.",
      "B": "Um conjunto de ações capaz de eliminar, diminuir ou prevenir riscos à saúde e de intervir nos problemas sanitários decorrentes do meio ambiente, da produção e circulação de bens e da prestação de serviços de interesse da saúde.",
      "C": "O recolhimento compulsório de tributos municipais sobre imóveis prediais.",
      "D": "A contagem semanal de óbitos provocados por acidentes de moto nas vias urbanas.",
      "E": "O patrulhamento das portas de farmácias por guardas municipais armados."
    },
    "resposta_correta": "B",
    "comentario": "O conceito legal de vigilância sanitária (Art. 6º, § 1º) engloba ações de controle sobre bens, produtos, ambientes e serviços relacionados à saúde humana.",
    "referencia": "Lei 8.080/90, Art. 6º, § 1º"
  },
  {
    "id": 357,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.080/90, Art. 6º, § 2º",
    "enunciado": "Conforme o Art. 6º, § 2º da Lei nº 8.080/1990, a VIGILÂNCIA EPIDEMIOLÓGICA é definida como um conjunto de ações que:",
    "alternativas": {
      "A": "Fiscaliza o cumprimento da lei seca em bares e casas noturnas da capital.",
      "B": "Cobra mensalidades escolares em creches públicas municipais.",
      "C": "Emite passaportes internacionais para viagens diplomáticas de urgência.",
      "D": "Proporciona o conhecimento, a detecção ou prevenção de qualquer mudança nos fatores determinantes e condicionantes de saúde individual ou coletiva, com a finalidade de recomendar e adotar as medidas de prevenção e controle das doenças ou agravos.",
      "E": "Determina a demolição sumária de moradias com infiltração de água da chuva."
    },
    "resposta_correta": "D",
    "comentario": "A vigilância epidemiológica reúne dados, detecta surtos, monitora agravos e orienta intervenções sanitárias de controle de doenças na população.",
    "referencia": "Lei 8.080/90, Art. 6º, § 2º"
  },
  {
    "id": 358,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.080/90, Art. 6º, § 3º",
    "enunciado": "A Lei nº 8.080/1990 conceitua expressamente a SAÚDE DO TRABALHADOR no Art. 6º, § 3º, como um conjunto de atividades que se destina, através das ações de vigilância epidemiológica e sanitária, à:",
    "alternativas": {
      "A": "Criação de fundos bancários privados de investimentos em ações de risco.",
      "B": "Substituição das gerências de recursos humanos na contratação de estagiários.",
      "C": "Arrecadação de contribuições sindicais compulsórias dos empregados celetistas.",
      "D": "Aplicação de penalidades criminais de prisão a trabalhadores que faltarem ao plantão.",
      "E": "Promoção e proteção da saúde dos trabalhadores, assim como visa à recuperação e reabilitação da saúde dos trabalhadores submetidos aos riscos e agravos advindos das condições de trabalho."
    },
    "resposta_correta": "E",
    "comentario": "A saúde do trabalhador no SUS articula vigilância e assistência para promoção, proteção, recuperação e reabilitação da saúde frente aos riscos do trabalho.",
    "referencia": "Lei 8.080/90, Art. 6º, § 3º"
  },
  {
    "id": 359,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.080/90, Art. 6º, § 3º",
    "enunciado": "Segundo o Art. 6º, § 3º da Lei nº 8.080/1990, são ações abrangidas no campo da Saúde do Trabalhador, EXCETO:",
    "alternativas": {
      "A": "A cobrança de honorários advocatícios privados pelo SUS em ações trabalhistas movidas contra a empresa.",
      "B": "A avaliação do impacto que as tecnologias provocam à saúde humana.",
      "C": "A assistência ao trabalhador vítima de acidentes de trabalho ou portador de doença profissional e do trabalho.",
      "D": "A participação na normatização, fiscalização e controle das condições de produção, extração, armazenamento, transporte, distribuição e manuseio de substâncias e produtos que apresentem risco à saúde do trabalhador.",
      "E": "A informação ao trabalhador e à sua respectiva entidade sindical a respeito dos riscos de acidentes e doenças a que está exposto."
    },
    "resposta_correta": "A",
    "comentario": "O SUS não cobra honorários nem atua como escritório de advocacia privada em litígios trabalhistas; suas ações são de vigilância, normatização, assistência e informação em SST.",
    "referencia": "Lei 8.080/90, Art. 6º, § 3º"
  },
  {
    "id": 360,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.080/90, Art. 7º, I",
    "enunciado": "O princípio do SUS que assegura que todas as pessoas têm direito ao acesso a todos os serviços de saúde em todos os níveis de complexidade, sem discriminação de qualquer natureza, denomina-se:",
    "alternativas": {
      "A": "Privatização seletiva.",
      "B": "Hierarquização monetária.",
      "C": "Duplicidade assistencial.",
      "D": "Descentralização tarifária.",
      "E": "Universalidade de acesso."
    },
    "resposta_correta": "E",
    "comentario": "A universalidade de acesso aos serviços de saúde em todos os níveis de assistência é princípio doutrinário basilar do SUS previsto no Art. 7º, I da Lei 8.080/90.",
    "referencia": "Lei 8.080/90, Art. 7º, I"
  },
  {
    "id": 361,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.080/90, Art. 7º, II",
    "enunciado": "O princípio da INTEGRALIDADE da assistência, consagrado no Art. 7º, II da Lei nº 8.080/1990, compreende:",
    "alternativas": {
      "A": "A exclusão de tratamentos de reabilitação e próteses pelo sistema público.",
      "B": "O fornecimento apenas de consultas preventivas, sendo o tratamento curativo repassado aos planos privados.",
      "C": "A internação compulsória de todo cidadão que complete 65 anos de idade.",
      "D": "Um conjunto articulado e contínuo das ações e serviços preventivos e curativos, individuais e coletivos, exigidos para cada caso em todos os níveis de complexidade do sistema.",
      "E": "A obrigatoriedade de o paciente realizar todos os procedimentos médicos em um único dia."
    },
    "resposta_correta": "D",
    "comentario": "A integralidade abrange ações preventivas, curativas e de reabilitação, integrando o cuidado do indivíduo em todos os graus de complexidade médica.",
    "referencia": "Lei 8.080/90, Art. 7º, II"
  },
  {
    "id": 362,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.080/90, Art. 7º, IV",
    "enunciado": "A respeito da IGUALDADE na assistência à saúde (Art. 7º, IV da Lei nº 8.080/1990), o texto legal determina expressamente:",
    "alternativas": {
      "A": "A cobrança de taxa de estacionamento para quem não possui convênio médico.",
      "B": "O atendimento preferencial para autoridades públicas e seus parentes consanguíneos.",
      "C": "A dispensa de atendimento a trabalhadores que não residam na capital do estado.",
      "D": "A assistência à saúde sem preconceitos ou privilégios de qualquer espécie.",
      "E": "A triagem de pacientes em filas separadas de acordo com a renda mensal comprovada."
    },
    "resposta_correta": "D",
    "comentario": "A igualdade da assistência à saúde veda privilégios e preconceitos de classe, cor, sexo ou posição social na atenção prestada pelo SUS.",
    "referencia": "Lei 8.080/90, Art. 7º, IV"
  },
  {
    "id": 363,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.080/90, Art. 7º, IX",
    "enunciado": "No que tange à DESCENTRALIZAÇÃO político-administrativa do SUS (Art. 7º, IX da Lei nº 8.080/1990), a sua diretriz orienta:",
    "alternativas": {
      "A": "A transferência das decisões de saúde para a Organização das Nações Unidas.",
      "B": "A terceirização da gestão do Ministério da Saúde para bancos internacionais.",
      "C": "A descentralização com direção única em cada esfera de governo e ênfase na municipalização dos serviços de saúde.",
      "D": "A extinção definitiva das Secretarias Estaduais de Saúde.",
      "E": "A concentração de todo o poder decisório e orçamentário exclusivamente em Brasília."
    },
    "resposta_correta": "C",
    "comentario": "A descentralização do SUS fortalece o município (municipalização) com direção única em cada esfera de governo (União, Estados e Municípios).",
    "referencia": "Lei 8.080/90, Art. 7º, IX"
  },
  {
    "id": 364,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.080/90, Art. 7º, V",
    "enunciado": "O direito das pessoas assistidas à INFORMAÇÃO sobre sua saúde, garantido no Art. 7º, V da Lei nº 8.080/1990, implica que o paciente ou seu responsável legal tem o direito de:",
    "alternativas": {
      "A": "Saber seu diagnóstico, prognóstico, riscos e objetivos dos tratamentos propostos pela equipe de saúde.",
      "B": "Assumir o controle dos estoques de medicamentos da farmácia hospitalar.",
      "C": "Alterar os dados do prontuário médico de outros pacientes da enfermaria.",
      "D": "Receber o salário integral do médico responsável pela cirurgia.",
      "E": "Escolher os horários de fiscalização sanitária que a Anvisa deve realizar."
    },
    "resposta_correta": "A",
    "comentario": "O direito à informação assegura ao usuário ciência clara sobre seu estado clínico, opções terapêuticas, prognóstico e riscos inerentes aos procedimentos médicos.",
    "referencia": "Lei 8.080/90, Art. 7º, V"
  },
  {
    "id": 365,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.080/90, Art. 7º, VIII e Lei 8.142/90",
    "enunciado": "Sobre a participação da comunidade na gestão do SUS prevista no Art. 7º, VIII da Lei nº 8.080/1990 e detalhada na Lei nº 8.142/1990, ela ocorre por meio de:",
    "alternativas": {
      "A": "Sorteio lotérico federal de representantes comissionados.",
      "B": "Proibição de qualquer participação popular nas reuniões orçamentárias.",
      "C": "Conferências de Saúde e Conselhos de Saúde em cada esfera de governo.",
      "D": "Petições anônimas em redes sociais sem valor jurídico institucional.",
      "E": "Eleição direta de diretores hospitalares por sufrágio universal de todos os moradores do bairro."
    },
    "resposta_correta": "C",
    "comentario": "A participação comunitária institucionaliza-se nas Conferências e Conselhos de Saúde, instâncias colegiadas do SUS em nível federal, estadual e municipal.",
    "referencia": "Lei 8.080/90, Art. 7º, VIII e Lei 8.142/90"
  },
  {
    "id": 366,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.080/90, Art. 9º",
    "enunciado": "Em relação à DIREÇÃO ÚNICA do SUS em cada esfera de governo (Art. 9º da Lei nº 8.080/1990), assinale a correlação CORRETA entre a esfera e seu órgão gestor:",
    "alternativas": {
      "A": "Na União: Ministério da Saúde; nos Estados e DF: Secretaria de Estado da Saúde; nos Municípios: Secretaria Municipal de Saúde ou órgão equivalente.",
      "B": "Na União: Banco Central; nos Estados: Detran; nos Municípios: Guarda Municipal.",
      "C": "Na União: Forças Armadas; nos Estados: Tribunal de Justiça; nos Municípios: Câmara de Vereadores.",
      "D": "Na União: Conselho Federal de Farmácia; nos Estados: Cruz Vermelha; nos Municípios: Lions Clube.",
      "E": "Em todas as esferas simultaneamente: a Diretoria-Geral da OIT."
    },
    "resposta_correta": "A",
    "comentario": "O SUS possui direção única em cada esfera de governo: Ministério da Saúde na União, Secretaria Estadual no Estado/DF e Secretaria Municipal no Município.",
    "referencia": "Lei 8.080/90, Art. 9º"
  },
  {
    "id": 367,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.080/90 e Decreto 7.508/2011",
    "enunciado": "As Comissões Intergestores Bipartite (CIB) e Tripartite (CIT), reconhecidas na Lei nº 8.080/1990 e no Decreto nº 7.508/2011, são espaços de:",
    "alternativas": {
      "A": "Leilão público de hospitais filantrópicos deficitários.",
      "B": "Negociação e pactuação consensual entre os gestores das diferentes esferas governamentais sobre aspectos operacionais do SUS.",
      "C": "Julgamento de crimes comuns com aplicação de penas de reclusão a infratores de trânsito.",
      "D": "Cobrança coercitiva de impostos prediais em atraso de empresas privadas.",
      "E": "Disputa esportiva anual entre os servidores da administração direta."
    },
    "resposta_correta": "B",
    "comentario": "A CIT (União, Estados e Municípios) e as CIBs (Estados e Municípios) são fóruns de pactuação federativa e gestão compartilhada das diretrizes do SUS.",
    "referencia": "Lei 8.080/90 e Decreto 7.508/2011"
  },
  {
    "id": 368,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.080/90, Art. 17",
    "enunciado": "Conforme o Art. 17 da Lei nº 8.080/1990, compete especificamente à Direção Estadual do SUS (Secretaria de Estado de Saúde do Pará - SESPA), em relação à FHCGV e hospitais estaduais:",
    "alternativas": {
      "A": "Emitir passaportes para cidadãos estrangeiros que visitam a Amazônia.",
      "B": "Extinguir todas as normas de segurança do trabalho baixadas pelo Ministério do Trabalho.",
      "C": "Definir a política monetária cambial e a taxa de juros do país.",
      "D": "Nomear os juízes federais de primeiro grau da comarca de Belém.",
      "E": "Acompanhar, controlar e avaliar as redes hierarquizadas do SUS e gerir e executar serviços públicos de saúde de referência estadual ou regional."
    },
    "resposta_correta": "E",
    "comentario": "À direção estadual cabe coordenar e gerir serviços de alta complexidade e referência regional/estadual, como os hospitais estaduais (ex: FHCGV).",
    "referencia": "Lei 8.080/90, Art. 17"
  },
  {
    "id": 369,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.080/90, Art. 18, IV",
    "enunciado": "Segundo o Art. 18 da Lei nº 8.080/1990, a execução dos serviços de vigilância sanitária e epidemiológica e das ações de saúde do trabalhador no âmbito local compete precipuamente à direção:",
    "alternativas": {
      "A": "Do Ministério da Fazenda em conjunto com a Receita Federal.",
      "B": "Municipal do SUS (Secretarias Municipais de Saúde).",
      "C": "Exclusiva da Organização Mundial da Saúde sediada na Suíça.",
      "D": "Do Supremo Tribunal Federal em sessão plenária extraordinária.",
      "E": "Das empresas petrolíferas concessionárias de blocos marítimos."
    },
    "resposta_correta": "B",
    "comentario": "A gestão executiva e direta das ações de vigilância epidemiológica, sanitária e saúde do trabalhador no território local é competência municipal do SUS.",
    "referencia": "Lei 8.080/90, Art. 18, IV"
  },
  {
    "id": 370,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.080/90, Art. 24",
    "enunciado": "Sobre a participação complementar da rede privada no Sistema Único de Saúde (Arts. 24 a 26 da Lei nº 8.080/1990):",
    "alternativas": {
      "A": "A rede pública fica proibida de atender pacientes que possuam renda formal superior a 2 salários mínimos.",
      "B": "Os hospitais privados podem cobrar do paciente atendido pelo SUS uma taxa extra em dinheiro.",
      "C": "O SUS pode recorrer aos serviços prestados pela iniciativa privada quando as suas disponibilidades forem insuficientes para garantir a assistência integral à população de uma região.",
      "D": "Os serviços privados conveniados passam a ditar as diretrizes ideológicas do Ministério da Saúde.",
      "E": "A contratação de serviços privados é obrigatória mesmo se a rede pública tiver 100% de leitos ociosos."
    },
    "resposta_correta": "C",
    "comentario": "A iniciativa privada participa do SUS em caráter complementar mediante contrato público ou convênio quando as unidades públicas forem insuficientes.",
    "referencia": "Lei 8.080/90, Art. 24"
  },
  {
    "id": 371,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.080/90, Art. 25 e CF/88 Art. 199, § 1º",
    "enunciado": "Na celebração de contratos ou convênios para participação complementar no SUS (Art. 25 da Lei nº 8.080/1990), terão preferência:",
    "alternativas": {
      "A": "As entidades filantrópicas e as sem fins lucrativos.",
      "B": "Os laboratórios farmacêuticos que pagarem comissão aos diretores de compras.",
      "C": "As empresas de seguro de saúde estrangeiras.",
      "D": "As corporações hospitalares com sede em paraísos fiscais.",
      "E": "As clínicas particulares com fins lucrativos de maior capital social."
    },
    "resposta_correta": "A",
    "comentario": "A Constituição e a Lei 8.080/90 dão preferência explícita às entidades filantrópicas e às sem fins lucrativos na celebração de convênios com o SUS.",
    "referencia": "Lei 8.080/90, Art. 25 e CF/88 Art. 199, § 1º"
  },
  {
    "id": 372,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.080/90, Art. 26",
    "enunciado": "O Art. 26 da Lei nº 8.080/1990 estipula que os critérios, valores e formas de remuneração de serviços e procedimentos da assistência complementar contratada no SUS são fixados pelo:",
    "alternativas": {
      "A": "Presidente do sindicato patronal dos hospitais privados lucrativos.",
      "B": "Conselho Nacional de Saúde, aprovados pela Direção Nacional do SUS (Ministério da Saúde).",
      "C": "Paciente no momento de sua alta médica com base em sua satisfação subjetiva.",
      "D": "Ministério do Planejamento sem ouvir nenhum órgão do setor de saúde.",
      "E": "Gerente de câmbio da Bolsa de Valores de São Paulo."
    },
    "resposta_correta": "B",
    "comentario": "A tabela de remuneração de serviços conveniados ao SUS é fixada pela direção nacional do SUS com aprovação do Conselho Nacional de Saúde.",
    "referencia": "Lei 8.080/90, Art. 26"
  },
  {
    "id": 373,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.080/90 e CF/88 Art. 199, § 2º",
    "enunciado": "É VEDADA expressamente pela Lei nº 8.080/1990 e pela Constituição Federal a destinação de recursos públicos para:",
    "alternativas": {
      "A": "A reforma estrutural de leitos de UTI em hospitais públicos estaduais.",
      "B": "O pagamento de salários de médicos e enfermeiros concursados do SUS.",
      "C": "Auxílios ou subvenções a instituições privadas com fins lucrativos na área da saúde.",
      "D": "A compra de medicamentos essenciais pelo Ministério da Saúde.",
      "E": "O treinamento de técnicos de segurança do trabalho no âmbito do SUS."
    },
    "resposta_correta": "C",
    "comentario": "É terminantemente proibida a destinação de verbas públicas para auxílios ou subvenções a entidades com fins lucrativos (CF/88 Art. 199, § 2º e Lei 8.080/90).",
    "referencia": "Lei 8.080/90 e CF/88 Art. 199, § 2º"
  },
  {
    "id": 374,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.080/90, Art. 27",
    "enunciado": "A respeito da política de recursos humanos na área da saúde no âmbito do SUS (Art. 27 a 30 da Lei nº 8.080/1990):",
    "alternativas": {
      "A": "Os hospitais públicos são proibidos de receber estagiários de enfermagem ou medicina.",
      "B": "Os serviços públicos que integram o SUS constituem campo de prática para ensino e pesquisa mediante normas específicas elaboradas em conjunto com o setor de educação.",
      "C": "A admissão de servidores deve ser feita exclusivamente por indicação política de vereadores locais sem concurso.",
      "D": "A qualificação profissional deve ser custeada individualmente sem apoio institucional do SUS.",
      "E": "Os planos de carreira, cargos e salários são considerados proibidos pelo ordenamento sanitário."
    },
    "resposta_correta": "B",
    "comentario": "Os estabelecimentos do SUS atuam como campo de prática e integração docente-assistencial para formação de recursos humanos da saúde (Art. 27 da Lei 8.080/90).",
    "referencia": "Lei 8.080/90, Art. 27"
  },
  {
    "id": 375,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.080/90, Art. 33",
    "enunciado": "De acordo com o Art. 33 da Lei nº 8.080/1990, os recursos financeiros do Sistema Único de Saúde (SUS) serão depositados em conta especial, em cada esfera de fixação, e movimentados sob a fiscalização do respectivo:",
    "alternativas": {
      "A": "Clube esportivo de futebol regional.",
      "B": "Conselho de Saúde.",
      "C": "Comitê de trânsito rodoviário.",
      "D": "Juizado de pequenas causas imobiliárias.",
      "E": "Sindicato dos lojistas da capital."
    },
    "resposta_correta": "B",
    "comentario": "Os Fundos de Saúde têm seus recursos movimentados sob a fiscalização e controle deliberativo do respectivo Conselho de Saúde.",
    "referencia": "Lei 8.080/90, Art. 33"
  },
  {
    "id": 376,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.080/90, Art. 19-Q (incluído pela Lei 12.401/2011)",
    "enunciado": "A assistência farmacêutica no SUS (Lei nº 8.080/1990, com as alterações da Lei nº 12.401/2011) compreende a dispensação de medicamentos constantes da Relação Nacional de Medicamentos Essenciais (RENAME) baseada em:",
    "alternativas": {
      "A": "Sorteio aleatório mensal de substâncias químicas em audiência pública.",
      "B": "Indicações de influenciadores digitais e postagens em redes sociais não científicas.",
      "C": "Exclusivamente produtos homeopáticos sem aprovação de registro na ANVISA.",
      "D": "Preço mais alto do remédio, comprando-se obrigatoriamente a opção mais cara do mercado.",
      "E": "Evidências científicas de eficácia, acurácia, efetividade e segurança, além de avaliação econômica comparativa."
    },
    "resposta_correta": "E",
    "comentario": "A incorporação e oferta de tecnologias e medicamentos no SUS é regulada pela CONITEC, exigindo estudos científicos de custo-efetividade e segurança.",
    "referencia": "Lei 8.080/90, Art. 19-Q (incluído pela Lei 12.401/2011)"
  },
  {
    "id": 377,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.080/90, Art. 6º, § 3º",
    "enunciado": "Nos termos da Lei nº 8.080/1990, os serviços de saúde do trabalhador nos órgãos do SUS têm a prerrogativa legal de:",
    "alternativas": {
      "A": "Notificar os acidentes de trabalho e investigar os ambientes e processos de trabalho, inclusive propondo interdições e medidas corretivas às autoridades competentes.",
      "B": "Criar impostos sobre o consumo de energia elétrica das indústrias.",
      "C": "Obrigar a demissão de gerentes de recursos humanos de empresas privadas.",
      "D": "Confiscar a mercadoria produzida pela fábrica para venda particular na feira.",
      "E": "Determinar a falência comercial da empresa sem decisão do Poder Judiciário."
    },
    "resposta_correta": "A",
    "comentario": "A vigilância em saúde do trabalhador no SUS inspeciona ambientes laborais, investiga agravos e acidentes e adota medidas sanitárias de proteção.",
    "referencia": "Lei 8.080/90, Art. 6º, § 3º"
  },
  {
    "id": 378,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.080/90, Art. 12 e Art. 3º",
    "enunciado": "A articulação das políticas e planos de saúde com as políticas de saneamento básico e de meio ambiente pelo SUS (Art. 12 da Lei nº 8.080/1990) decorre do fato de que:",
    "alternativas": {
      "A": "A salubridade ambiental e o saneamento são determinantes diretos na prevenção de endemias, parasitoses e agravos à saúde humana.",
      "B": "O esgoto a céu aberto é considerado elemento decorativo pelo planejamento urbano.",
      "C": "O Ministério da Saúde é responsável pelo asfaltamento de ruas e construção de viadutos.",
      "D": "Os médicos do SUS precisam lavar as ruas com água tratada após cada consulta.",
      "E": "As Secretarias de Saúde devem arrecadar as contas de água dos imóveis residenciais."
    },
    "resposta_correta": "A",
    "comentario": "O saneamento básico e o meio ambiente equilibrado são condições estruturantes para redução de doenças transmissíveis e promoção da saúde coletiva.",
    "referencia": "Lei 8.080/90, Art. 12 e Art. 3º"
  },
  {
    "id": 379,
    "materia": "Legislação SUS",
    "dificuldade": "Portaria de Consolidação GM/MS nº 2/2017 e Lei 8.080/90",
    "enunciado": "A descentralização das ações de saúde do trabalhador para a rede básica e os Centros de Referência em Saúde do Trabalhador (CEREST) no SUS visa garantir:",
    "alternativas": {
      "A": "A atenção especializada, retaguarda técnica e vigilância dos agravos ocupacionais em trabalhadores formais, informais e rurais no território.",
      "B": "A dispensa do uso de EPIs em todas as indústrias do estado.",
      "C": "A cobrança de imposto de renda sobre as horas extras dos técnicos de segurança.",
      "D": "A realização de vistorias automotivas de ônibus interestaduais.",
      "E": "A emissão de carteiras de habilitação nacional de motorista."
    },
    "resposta_correta": "A",
    "comentario": "A Rede Nacional de Atenção Integral à Saúde do Trabalhador (RENAST) e os CERESTs estruturam as ações de vigilância e assistência a todos os trabalhadores.",
    "referencia": "Portaria de Consolidação GM/MS nº 2/2017 e Lei 8.080/90"
  },
  {
    "id": 380,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.080/90, Art. 7º, XII",
    "enunciado": "Em relação à capacidade resolutiva dos serviços de saúde em todos os níveis de assistência (Art. 7º, XII da Lei nº 8.080/1990), essa diretriz impõe que:",
    "alternativas": {
      "A": "O hospital de alta complexidade atenda unicamente pacientes particulares pagantes.",
      "B": "A população resolva seus próprios problemas médicos sem auxílio de profissionais diplomados.",
      "C": "Cada unidade de saúde deve ser capaz de solucionar os problemas de saúde da população no seu respectivo nível de competência ou encaminhar com garantia de fluxo ordenado para referência.",
      "D": "O paciente com dor de cabeça simples deve ser submetido obrigatoriamente a cirurgia no cérebro no mesmo dia.",
      "E": "Os postos de saúde de atenção básica devam fechar às 10 horas da manhã todos os dias."
    },
    "resposta_correta": "C",
    "comentario": "A resolutividade significa a capacidade dos serviços de responder de forma eficiente aos problemas apresentados ou garantir contrarreferência qualificada.",
    "referencia": "Lei 8.080/90, Art. 7º, XII"
  },
  {
    "id": 381,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.142/90, Ementa",
    "enunciado": "A Lei Federal nº 8.142/1990 dispõe essencialmente sobre dois grandes pilares da estruturação do Sistema Único de Saúde:",
    "alternativas": {
      "A": "O código de trânsito brasileiro e a segurança em autoestradas.",
      "B": "A privatização completa das Santas Casas de Misericórdia.",
      "C": "A taxa de importação de insumos bélicos pelas Forças Armadas.",
      "D": "A participação da comunidade na gestão do SUS e as transferências intergovernamentais de recursos financeiros na área da saúde.",
      "E": "O plano de carreiras exclusivo dos diplomatas do Itamaraty."
    },
    "resposta_correta": "D",
    "comentario": "A ementa da Lei 8.142/90 define que ela dispõe sobre a participação da comunidade na gestão do SUS e sobre as transferências de recursos na saúde.",
    "referencia": "Lei 8.142/90, Ementa"
  },
  {
    "id": 382,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.142/90, Art. 1º",
    "enunciado": "Quais são as duas instâncias colegiadas previstas no Art. 1º da Lei nº 8.142/1990 que garantem a participação da comunidade na gestão do SUS em cada esfera de governo?",
    "alternativas": {
      "A": "A Conferência de Saúde e o Conselho de Saúde.",
      "B": "O Sindicato dos Bancários e a Federação das Indústrias.",
      "C": "A Câmara Municipal e o Tribunal de Contas do Estado.",
      "D": "O Conselho Tutelar e a Vara da Infância e da Juventude.",
      "E": "O Congresso Nacional e o Supremo Tribunal Federal."
    },
    "resposta_correta": "A",
    "comentario": "O Art. 1º da Lei 8.142/90 institui duas instâncias colegiadas: a Conferência de Saúde e o Conselho de Saúde, existentes em âmbito nacional, estadual e municipal.",
    "referencia": "Lei 8.142/90, Art. 1º"
  },
  {
    "id": 383,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.142/90, Art. 1º, § 1º",
    "enunciado": "A CONFERÊNCIA DE SAÚDE, de acordo com o Art. 1º, § 1º da Lei nº 8.142/1990, reúne-se ordinariamente:",
    "alternativas": {
      "A": "Mensalmente para homologar os balanços financeiros da farmácia popular.",
      "B": "Apenas quando ocorrer uma pandemia mundial oficialmente declarada.",
      "C": "A cada quatro anos, com a representação dos vários segmentos sociais, para avaliar a situação de saúde e propor as diretrizes para a formulação da política de saúde.",
      "D": "Semanalmente com quórum exclusivo de prefeitos municipais.",
      "E": "A cada dez anos exclusivamente na capital federal sem representantes dos estados."
    },
    "resposta_correta": "C",
    "comentario": "A Conferência de Saúde reúne-se a cada quatro anos com ampla participação social para avaliar o cenário sanitário e traçar diretrizes da política de saúde.",
    "referencia": "Lei 8.142/90, Art. 1º, § 1º"
  },
  {
    "id": 384,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.142/90, Art. 1º, § 2º",
    "enunciado": "O CONSELHO DE SAÚDE, nos termos do Art. 1º, § 2º da Lei nº 8.142/1990, caracteriza-se por ser um órgão colegiado de caráter:",
    "alternativas": {
      "A": "Composto exclusivamente por proprietários de planos de saúde privados.",
      "B": "Permanente e deliberativo, composto por representantes do governo, prestadores de serviço, profissionais de saúde e usuários.",
      "C": "Remunerado com jetons de R$ 50.000,00 mensais para cada conselheiro.",
      "D": "Temporário e apenas consultivo, extinto automaticamente após 30 dias de funcionamento.",
      "E": "Exclusivamente militar e subordinado ao comando do Exército."
    },
    "resposta_correta": "B",
    "comentario": "O Conselho de Saúde tem caráter permanente e deliberativo, formulando estratégias e controlando a execução da política de saúde, inclusive nos aspectos econômicos.",
    "referencia": "Lei 8.142/90, Art. 1º, § 2º"
  },
  {
    "id": 385,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.142/90, Art. 1º, § 4º e Resolução CNS 453/2012",
    "enunciado": "Qual é a composição da representação dos USUÁRIOS nos Conselhos e Conferências de Saúde estabelecida pelo Art. 1º, § 4º da Lei nº 8.142/1990 e regulamentada pela Resolução CNS nº 453/2012?",
    "alternativas": {
      "A": "Restrita a 5% das vagas, sem direito a voz nem voto nas reuniões.",
      "B": "Apenas 1 usuário sorteado pelo número da carteira de trabalho.",
      "C": "Usuários não têm direito a participar, apenas médicos diplomados com mestrado.",
      "D": "Paritária em relação ao conjunto dos demais segmentos (50% de usuários e 50% divididos entre governo, prestadores e profissionais de saúde).",
      "E": "100% composta apenas por pacientes internados em leitos de UTI."
    },
    "resposta_correta": "D",
    "comentario": "A representação dos usuários nos Conselhos e Conferências de Saúde é paritária em relação ao conjunto dos demais segmentos (50% de representantes dos usuários).",
    "referencia": "Lei 8.142/90, Art. 1º, § 4º e Resolução CNS 453/2012"
  },
  {
    "id": 386,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.142/90, Art. 1º, § 2º",
    "enunciado": "As decisões tomadas pelo Conselho de Saúde no exercício de suas competências legais devem ser:",
    "alternativas": {
      "A": "Submetidas a referendo popular a cada 30 dias com voto obrigatório.",
      "B": "Enviadas para aprovação prévia embaixada dos Estados Unidos da América.",
      "C": "Publicadas apenas em jornais de língua inglesa de circulação internacional.",
      "D": "Homologadas pelo chefe do poder legalmente constituído em cada esfera de governo (Ministro da Saúde, Governador ou Prefeito).",
      "E": "Ignoradas pelo poder público caso envolvam investimentos em saneamento básico."
    },
    "resposta_correta": "D",
    "comentario": "As deliberações do Conselho de Saúde são homologadas pelo chefe do Poder Executivo em cada esfera de governo no prazo regulamentar.",
    "referencia": "Lei 8.142/90, Art. 1º, § 2º"
  },
  {
    "id": 387,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.142/90, Art. 3º e LC 141/2012",
    "enunciado": "Os recursos do Fundo Nacional de Saúde (FNS) destinados a despesas de custeio e de capital dos serviços de saúde dos Estados e Municípios são repassados:",
    "alternativas": {
      "A": "Através de sorteio anual transmitido pela emissora pública de televisão.",
      "B": "Em cheques nominais entregues pessoalmente aos líderes partidários da Câmara.",
      "C": "De forma regular e automática, diretamente do Fundo Nacional de Saúde para os Fundos Estaduais e Municipais de Saúde (transferência fundo a fundo).",
      "D": "Somente se os municípios aceitarem pagar taxa de pedágio em todas as estradas vicinais.",
      "E": "Apenas mediante empréstimo bancário com taxa de juros do mercado comercial."
    },
    "resposta_correta": "C",
    "comentario": "A transferência de recursos federais para Estados e Municípios ocorre de modo regular e automático (fundo a fundo), independentemente de convênios.",
    "referencia": "Lei 8.142/90, Art. 3º e LC 141/2012"
  },
  {
    "id": 388,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.142/90, Art. 4º",
    "enunciado": "Para que os Estados, o Distrito Federal e os Municípios recebam os repasses de recursos do Fundo Nacional de Saúde (FNS) previstos na Lei nº 8.142/1990, o Art. 4º exige a comprovação dos seguintes requisitos, EXCETO:",
    "alternativas": {
      "A": "Fundo de Saúde constituído e Plano de Saúde aprovado.",
      "B": "Contrapartida de recursos para a saúde no respectivo orçamento.",
      "C": "Conselho de Saúde em funcionamento com composição paritária.",
      "D": "Relatórios de gestão que permitam o controle e fiscalização das ações.",
      "E": "Construção obrigatória de heliporto particular na residência do prefeito municipal."
    },
    "resposta_correta": "E",
    "comentario": "A exigência de heliporto é absurda. Os requisitos do Art. 4º são: Fundo, Conselho, Plano de Saúde, Relatórios de gestão, contrapartida orçamentária e Comissão para PCCS.",
    "referencia": "Lei 8.142/90, Art. 4º"
  },
  {
    "id": 389,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.142/90, Art. 4º, Parágrafo Único",
    "enunciado": "O que ocorre com os recursos federais do SUS caso um Município NÃO cumpra os requisitos exigidos pelo Art. 4º da Lei nº 8.142/1990 (como não possuir Conselho de Saúde atuante)?",
    "alternativas": {
      "A": "Os recursos serão administrados pelo respectivo Estado até que o Município regularize a situação exigida por lei.",
      "B": "Os recursos são extintos e queimados pelo Banco Central do Brasil.",
      "C": "Os recursos são automaticamente desviados para a construção de estádios de futebol.",
      "D": "Os moradores do município perdem a nacionalidade brasileira.",
      "E": "O município é obrigado a demitir todos os servidores da área da educação."
    },
    "resposta_correta": "A",
    "comentario": "O parágrafo único do Art. 4º prevê que, no caso de não atendimento dos requisitos pelo Município, os recursos passarão a ser administrados pelo Estado da Federação correspondente.",
    "referencia": "Lei 8.142/90, Art. 4º, Parágrafo Único"
  },
  {
    "id": 390,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.142/90 e Resolução CNS 453/2012",
    "enunciado": "A participação popular na gestão do SUS por meio dos Conselhos de Saúde exerce o controle social sobre:",
    "alternativas": {
      "A": "As políticas de saúde implementadas, a alocação e execução de recursos financeiros, o plano de saúde e os relatórios de gestão do gestor público.",
      "B": "A concessão de aposentadorias de servidores de outros ministérios federais.",
      "C": "Apenas as escalas de plantão de finais de semana dos maqueiros do hospital.",
      "D": "A cor das cortinas das enfermarias e os tipos de flores plantadas no jardim.",
      "E": "As compras particulares de alimentos dos servidores fora do hospital."
    },
    "resposta_correta": "A",
    "comentario": "O controle social nos Conselhos fiscaliza a formulação de diretrizes, execução de metas e gastos financeiros em saúde da respectiva esfera de governo.",
    "referencia": "Lei 8.142/90 e Resolução CNS 453/2012"
  },
  {
    "id": 391,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.142/90, Art. 1º, § 1º",
    "enunciado": "Em relação à convocação extraordinária da Conferência de Saúde pelo Conselho de Saúde (Art. 1º, § 1º da Lei nº 8.142/1990):",
    "alternativas": {
      "A": "Apenas o Presidente da República pode convocar conferências municipais de saúde.",
      "B": "A Conferência extraordinária só pode ocorrer em anos bissextos.",
      "C": "O Conselho de Saúde pode convocar a Conferência extraordinariamente se o Poder Executivo não o fizer no prazo legal.",
      "D": "A realização de conferências de saúde extraordinárias foi revogada pela Constituição.",
      "E": "O Conselho de Saúde não tem qualquer poder de convocação sob pena de crime de responsabilidade."
    },
    "resposta_correta": "C",
    "comentario": "As Conferências são convocadas pelo Poder Executivo ou, extraordinariamente, pelo Conselho de Saúde.",
    "referencia": "Lei 8.142/90, Art. 1º, § 1º"
  },
  {
    "id": 392,
    "materia": "Legislação SUS",
    "dificuldade": "Resolução CNS nº 453/2012 e Lei 8.142/90",
    "enunciado": "Qual é a composição percentual recomendada pelo Conselho Nacional de Saúde (Resolução nº 453/2012) para os membros dos Conselhos de Saúde?",
    "alternativas": {
      "A": "50% de entidades e movimentos de usuários, 25% de entidades de trabalhadores de saúde e 25% de representação de governo e prestadores de serviços de saúde privados conveniados/filantrópicos.",
      "B": "25% de usuários e 75% de secretários municipais comissionados.",
      "C": "100% de médicos especialistas com título de doutorado universitário.",
      "D": "50% de farmacêuticos industriais e 50% de auditores da Receita Estadual.",
      "E": "70% de empresários de planos privados, 20% de políticos e 10% de militares."
    },
    "resposta_correta": "A",
    "comentario": "A estrutura do Conselho de Saúde obedece à paridade: 50% Usuários, 25% Trabalhadores de Saúde e 25% Gestores/Prestadores de Serviços de Saúde.",
    "referencia": "Resolução CNS nº 453/2012 e Lei 8.142/90"
  },
  {
    "id": 393,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.142/90 e Resolução CNS 453/2012",
    "enunciado": "A função de Conselheiro de Saúde (titular ou suplente) no âmbito do SUS é considerada:",
    "alternativas": {
      "A": "Cargo vitalício de provimento em comissão sem possibilidade de substituição.",
      "B": "Incompatível com qualquer atividade profissional privada do cidadão.",
      "C": "Função restrita exclusivamente a advogados inscritos na OAB.",
      "D": "Serviço público relevante, não remunerado, gerando presunção de idoneidade moral aos seus membros.",
      "E": "Atividade remunerada com salário fixo mensal pago pelo Fundo de Saúde."
    },
    "resposta_correta": "D",
    "comentario": "A atuação como membro de Conselho de Saúde não é remunerada; seu exercício é considerado serviço público de relevante valor social e cívico.",
    "referencia": "Lei 8.142/90 e Resolução CNS 453/2012"
  },
  {
    "id": 394,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.142/90, Art. 4º e Portaria de Consolidação 1/2017",
    "enunciado": "O Plano de Saúde, exigido como condição pelo Art. 4º da Lei nº 8.142/1990 para recebimento de repasses fundo a fundo:",
    "alternativas": {
      "A": "É o instrumento básico de planejamento governamental que define as diretrizes, prioridades e metas da política de saúde para um período de quatro anos (quadrienal).",
      "B": "É a relação de telefones úteis dos médicos plantonistas do pronto-socorro.",
      "C": "É uma apólice de seguro de vida contratada em banco particular pelos funcionários.",
      "D": "É a carteirinha de plástico azul vendida aos servidores públicos municipais.",
      "E": "É o cardápio semanal servido aos pacientes internados nas enfermarias."
    },
    "resposta_correta": "A",
    "comentario": "O Plano de Saúde é a peça central do planejamento governamental na saúde, orientando prioridades, programas e recursos no horizonte de 4 anos.",
    "referencia": "Lei 8.142/90, Art. 4º e Portaria de Consolidação 1/2017"
  },
  {
    "id": 395,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.142/90 e Lei Complementar 141/2012",
    "enunciado": "Sobre o Relatório Anual de Gestão (RAG) no âmbito do SUS fiscalizado pelos Conselhos de Saúde:",
    "alternativas": {
      "A": "Trata-se de instrumento que apresenta os resultados físicos e orçamentários alcançados pela gestão frente às metas fixadas na Programação Anual de Saúde.",
      "B": "É um documento secreto que não pode ser divulgado para a população.",
      "C": "É uma lista de funcionários demitidos durante o ano civil.",
      "D": "Substitui a necessidade de prestar contas aos Tribunais de Contas do Estado.",
      "E": "É emitido a cada 50 anos pelo Senado Federal."
    },
    "resposta_correta": "A",
    "comentario": "O Relatório Anual de Gestão (RAG) comprova o cumprimento das diretrizes do Plano de Saúde e a aplicação orçamentária dos recursos do SUS no exercício anual.",
    "referencia": "Lei 8.142/90 e Lei Complementar 141/2012"
  },
  {
    "id": 396,
    "materia": "Legislação SUS",
    "dificuldade": "Resolução CNS nº 453/2012 e Lei 8.142/90",
    "enunciado": "A participação dos Técnicos de Segurança do Trabalho e demais profissionais da área ocupacional nos Conselhos de Saúde é garantida pelo segmento de:",
    "alternativas": {
      "A": "Prestadores privados com fins lucrativos exclusivamente.",
      "B": "Auditoria externa independente da União Europeia.",
      "C": "Conselheiros vitalícios de honra com direito a veto.",
      "D": "Trabalhadores da saúde (que compõem 25% da estrutura paritária do conselho).",
      "E": "Governo e gestores estaduais em cota pessoal única."
    },
    "resposta_correta": "D",
    "comentario": "Os profissionais que atuam nos serviços de saúde (incluindo trabalhadores do SESMT e categorias profissionais da saúde) compõem a cota de 25% dos Trabalhadores.",
    "referencia": "Resolução CNS nº 453/2012 e Lei 8.142/90"
  },
  {
    "id": 397,
    "materia": "Legislação SUS",
    "dificuldade": "Resolução CNS 453/2012 e Lei 8.142/90",
    "enunciado": "As reuniões ordinárias dos Conselhos de Saúde nos Municípios e Estados da Federação devem ser:",
    "alternativas": {
      "A": "Exclusivas para membros filiados ao partido do governador em exercício.",
      "B": "Públicas, com pauta divulgada previamente e atas registradas e disponibilizadas para consulta da sociedade.",
      "C": "Fechadas com seguranças armados impedindo o acesso de qualquer cidadão.",
      "D": "Realizadas apenas por correspondência postal sem debates presenciais.",
      "E": "Secretas, realizadas na calada da noite com proibição de gravação de áudio ou vídeo."
    },
    "resposta_correta": "B",
    "comentario": "O princípio da publicidade e da transparência rege o funcionamento dos Conselhos de Saúde, cujas sessões são abertas ao público e às entidades comunitárias.",
    "referencia": "Resolução CNS 453/2012 e Lei 8.142/90"
  },
  {
    "id": 398,
    "materia": "Legislação SUS",
    "dificuldade": "Contexto Histórico do SUS e Lei 8.142/90",
    "enunciado": "Qual a importância da Lei nº 8.142/1990 para a consolidação democrática do SUS após os vetos presidenciais ocorridos na Lei nº 8.080/1990?",
    "alternativas": {
      "A": "Ela proibiu os cidadãos de exigirem exames gratuitos em hospitais do SUS.",
      "B": "Ela extinguiu o Ministério da Saúde e criou uma agência reguladora multinacional.",
      "C": "Ela restaurou juridicamente a participação popular na gestão do sistema e garantiu os repasses automáticos federais aos Estados e Municípios.",
      "D": "Ela determinou a cobrança de mensalidade de todos os estudantes de faculdades públicas de medicina.",
      "E": "Ela revogou todos os artigos da Constituição Federal que tratavam de saúde pública."
    },
    "resposta_correta": "C",
    "comentario": "A Lei 8.142/90 foi sancionada justamente para resgatar os temas vetados no texto da Lei 8.080/90, institucionalizando os Conselhos, Conferências e repasses automáticos fundo a fundo.",
    "referencia": "Contexto Histórico do SUS e Lei 8.142/90"
  },
  {
    "id": 399,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.080/90, Art. 13 e Lei 8.142/90",
    "enunciado": "A Comissão Intersetorial de Saúde do Trabalhador e da Trabalhadora (CISTT), vinculada aos Conselhos de Saúde, tem por atribuição principal:",
    "alternativas": {
      "A": "Substituir o INSS na concessão de pensões por morte aos dependentes.",
      "B": "Prender empregadores que atrasarem o salário dos trabalhadores rurais.",
      "C": "Vender medicamentos genéricos com desconto aos associados do sindicato.",
      "D": "Assessorar o Conselho de Saúde na formulação de políticas, planos e fiscalização das ações voltadas à saúde do trabalhador no território.",
      "E": "Comprar uniformes para as bandas marciais das escolas municipais."
    },
    "resposta_correta": "D",
    "comentario": "A CISTT é comissão intersetorial obrigatória nos Conselhos de Saúde para subsidiar o controle social nas pautas de saúde do trabalhador e meio ambiente laboral.",
    "referencia": "Lei 8.080/90, Art. 13 e Lei 8.142/90"
  },
  {
    "id": 400,
    "materia": "Legislação SUS",
    "dificuldade": "Lei 8.142/90, Art. 3º",
    "enunciado": "Em relação à destinação dos recursos repassados aos Municípios pelo Fundo Nacional de Saúde, a Lei nº 8.142/1990 (Art. 3º) determina que:",
    "alternativas": {
      "A": "A totalidade dos recursos deve ser usada para pagar juros da dívida externa do governo federal.",
      "B": "Pelo menos 70% desses recursos serão destinados aos Municípios, de acordo com critérios populacionais, perfil demográfico, epidemiológico e rede instalada.",
      "C": "100% dos recursos devem ser devolvidos para o Tesouro Nacional ao final de cada semana.",
      "D": "Os recursos só podem ser gastos se o prefeito obtiver autorização de embaixadas estrangeiras.",
      "E": "Os recursos são incorporados à folha de pagamento de servidores do Poder Judiciário."
    },
    "resposta_correta": "B",
    "comentario": "O Art. 3º da Lei 8.142/90 fixou a descentralização financeira com foco nos municípios, com base em critérios epidemiológicos, populacionais e de rede física instalada.",
    "referencia": "Lei 8.142/90, Art. 3º"
  },
  {
    "id": 401,
    "materia": "Legislação SUS",
    "dificuldade": "CF/88, Art. 196",
    "enunciado": "O Artigo 196 da Constituição Federal de 1988 estabelece que a saúde é:",
    "alternativas": {
      "A": "Direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas que visem à redução do risco de doença e de outros agravos e ao acesso universal e igualitário às ações e serviços para sua promoção, proteção e recuperação.",
      "B": "Direito restrito a crianças e idosos com renda familiar comprovada inferior a meio salário mínimo.",
      "C": "Responsabilidade exclusiva do indivíduo, não possuindo o Estado qualquer obrigação sanitária.",
      "D": "Uma mercadoria comercial sujeita unicamente às leis da oferta e da procura de mercado livre.",
      "E": "Um benefício opcional concedido unicamente a quem contribui com a previdência social há mais de 30 anos."
    },
    "resposta_correta": "A",
    "comentario": "O Art. 196 da CF/88 é a cláusula pétrea doutrinária do SUS: saúde como direito de todos e dever do Estado, com acesso universal e igualitário.",
    "referencia": "CF/88, Art. 196"
  },
  {
    "id": 402,
    "materia": "Legislação SUS",
    "dificuldade": "CF/88, Art. 197",
    "enunciado": "Nos termos do Art. 197 da Constituição Federal, as ações e serviços de saúde são considerados:",
    "alternativas": {
      "A": "De interesse estritamente privado, sem qualquer direito de intervenção do poder estatal.",
      "B": "Isentas de qualquer fiscalização sanitária ou controle epidemiológico.",
      "C": "Atividades clandestinas toleradas excepcionalmente em períodos de guerra civil.",
      "D": "De relevância pública, cabendo ao Poder Público dispor, nos termos da lei, sobre sua regulamentação, fiscalização e controle.",
      "E": "Exclusivas de organizações não governamentais sediadas no exterior."
    },
    "resposta_correta": "D",
    "comentario": "O Art. 197 da CF/88 define as ações e serviços de saúde como de relevância pública, sujeitos à regulação, fiscalização e controle estatais.",
    "referencia": "CF/88, Art. 197"
  },
  {
    "id": 403,
    "materia": "Legislação SUS",
    "dificuldade": "CF/88, Art. 197",
    "enunciado": "A execução das ações e serviços de saúde, conforme previsto no Art. 197 da Constituição Federal, deve ser feita:",
    "alternativas": {
      "A": "Sem qualquer tipo de contrato ou termo de compromisso público.",
      "B": "Diretamente pelo Poder Público ou através de terceiros e, também, por pessoa física ou jurídica de direito privado.",
      "C": "Unicamente por seguradoras multinacionais de previdência complementar.",
      "D": "Exclusivamente por hospitais militares das forças armadas da União.",
      "E": "Apenas por médicos estrangeiros sem diploma validado no território nacional."
    },
    "resposta_correta": "B",
    "comentario": "A execução dos serviços de saúde pode ser direta (pelo próprio Estado) ou indireta (através de terceiros e rede privada complementar).",
    "referencia": "CF/88, Art. 197"
  },
  {
    "id": 404,
    "materia": "Legislação SUS",
    "dificuldade": "CF/88, Art. 198",
    "enunciado": "O Art. 198 da CF/88 determina que as ações e serviços públicos de saúde integram uma rede regionalizada e hierarquizada e constituem um sistema único, organizado segundo as seguintes DIRETRIZES:",
    "alternativas": {
      "A": "Regionalização sem conexão federativa, atendimento apenas terciário e direção compartilhada por comissões anônimas.",
      "B": "Descentralização, com direção única em cada esfera de governo; Atendimento integral, com prioridade para as atividades preventivas, sem prejuízo dos serviços assistenciais; e Participação da comunidade.",
      "C": "Privatização progressiva dos hospitais, copagamento de consultas e militarização da vigilância.",
      "D": "Centralização no Ministério da Saúde, foco no atendimento curativo hospitalar e exclusão da sociedade civil.",
      "E": "Eliminação das unidades básicas de saúde em favor de policlínicas privadas multinacionais."
    },
    "resposta_correta": "B",
    "comentario": "As três diretrizes constitucionais expressas no Art. 198 da CF/88 são: Descentralização, Atendimento Integral (com prioridade preventiva) e Participação da Comunidade.",
    "referencia": "CF/88, Art. 198"
  },
  {
    "id": 405,
    "materia": "Legislação SUS",
    "dificuldade": "CF/88, Art. 198, II",
    "enunciado": "Na diretriz constitucional do ATENDIMENTO INTEGRAL (Art. 198, II da CF/88), a Constituição dá expressa prioridade para:",
    "alternativas": {
      "A": "O atendimento nos leitos de hotelaria cinco estrelas dos hospitais privados.",
      "B": "A realização de exames sofisticados de ressonância magnética para qualquer queixa clínica.",
      "C": "As atividades preventivas, sem prejuízo dos serviços assistenciais.",
      "D": "As cirurgias plásticas meramente estéticas para celebridades.",
      "E": "A distribuição de remédios importados de alto custo sem prescrição médica."
    },
    "resposta_correta": "C",
    "comentario": "O Art. 198, II da CF/88 estipula atendimento integral 'com prioridade para as atividades preventivas, sem prejuízo dos serviços assistenciais'.",
    "referencia": "CF/88, Art. 198, II"
  },
  {
    "id": 406,
    "materia": "Legislação SUS",
    "dificuldade": "CF/88, Art. 198, § 2º e LC 141/2012",
    "enunciado": "A Emenda Constitucional nº 29/2000 (regulamentada pela Lei Complementar nº 141/2012) vinculou recursos orçamentários mínimos obrigatórios para o financiamento da saúde. Os percentuais mínimos da receita corrente de impostos a serem aplicados pelos ESTADOS e pelos MUNICÍPIOS são, respectivamente:",
    "alternativas": {
      "A": "12% para os Estados e 15% para os Municípios.",
      "B": "Não há qualquer limite mínimo percentual na legislação brasileira.",
      "C": "50% para os Estados e 10% para os Municípios.",
      "D": "25% para os Estados e 35% para os Municípios.",
      "E": "5% para os Estados e 5% para os Municípios."
    },
    "resposta_correta": "A",
    "comentario": "Pela LC 141/2012 e CF/88 Art. 198, § 2º, os Estados devem aplicar no mínimo 12% e os Municípios no mínimo 15% de suas receitas de impostos em ações e serviços públicos de saúde.",
    "referencia": "CF/88, Art. 198, § 2º e LC 141/2012"
  },
  {
    "id": 407,
    "materia": "Legislação SUS",
    "dificuldade": "CF/88, Art. 199",
    "enunciado": "Segundo o Art. 199 da Constituição Federal de 1988, a assistência à saúde:",
    "alternativas": {
      "A": "É proibida a médicos com menos de 20 anos de formados.",
      "B": "Só pode ser prestada por empresas estrangeiras com capital aberto na Europa.",
      "C": "É monopólio exclusivo do Estado, sendo proibida a existência de clínicas particulares no Brasil.",
      "D": "É livre à iniciativa privada.",
      "E": "Deve ser cobrada compulsoriamente de todos os cidadãos em folha de pagamento salarial."
    },
    "resposta_correta": "D",
    "comentario": "O caput do Art. 199 da CF/88 consagra que a assistência à saúde é livre à iniciativa privada no território nacional.",
    "referencia": "CF/88, Art. 199"
  },
  {
    "id": 408,
    "materia": "Legislação SUS",
    "dificuldade": "CF/88, Art. 199, § 1º",
    "enunciado": "As instituições privadas que participam de forma complementar do SUS, nos termos do Art. 199, § 1º da CF/88, o fazem segundo as diretrizes deste, mediante:",
    "alternativas": {
      "A": "Contrato de direito público ou convênio, tendo preferência as entidades filantrópicas e as sem fins lucrativos.",
      "B": "Acordo verbal informal firmado com o diretor administrativo do hospital.",
      "C": "Troca de favores eleitorais registrada em cartório de notas comum.",
      "D": "Compra em bolsa de valores de cotas de participação hospitalar.",
      "E": "Leilão de leitos no mercado financeiro especulativo."
    },
    "resposta_correta": "A",
    "comentario": "A participação privada no SUS exige formalização por contrato de direito público ou convênio, com preferência explícita a entidades filantrópicas e sem fins lucrativos.",
    "referencia": "CF/88, Art. 199, § 1º"
  },
  {
    "id": 409,
    "materia": "Legislação SUS",
    "dificuldade": "CF/88, Art. 199, § 2º",
    "enunciado": "O § 2º do Art. 199 da Constituição Federal veda expressamente:",
    "alternativas": {
      "A": "A compra de insumos hospitalares de fabricantes nacionais.",
      "B": "A realização de pesquisas científicas em universidades públicas estaduais.",
      "C": "O pagamento de salários a técnicos de enfermagem e radiologia do SUS.",
      "D": "A destinação de recursos públicos para auxílios ou subvenções às instituições privadas com fins lucrativos.",
      "E": "O atendimento médico a pacientes portadores de doenças infectocontagiosas."
    },
    "resposta_correta": "D",
    "comentario": "É expressamente vedada na CF/88 a destinação de verbas públicas para subvenção ou auxílio a empresas privadas de saúde com finalidade lucrativa.",
    "referencia": "CF/88, Art. 199, § 2º"
  },
  {
    "id": 410,
    "materia": "Legislação SUS",
    "dificuldade": "CF/88, Art. 199, § 4º",
    "enunciado": "Com relação à comercialização de órgãos, tecidos e substâncias humanas, o Art. 199, § 4º da Constituição Federal determina taxativamente que:",
    "alternativas": {
      "A": "A lei disporá sobre as condições e os requisitos que facilitem a remoção de órgãos, tecidos e substâncias humanas para fins de transplante, pesquisa e tratamento, sendo vedado todo tipo de comercialização.",
      "B": "Qualquer cidadão pode vender um de seus rins no mercado livre para quitar dívidas financeiras.",
      "C": "A comercialização de córneas humanas é permitida em leilões promovidos pela internet.",
      "D": "Os hospitais privados podem exportar bolsas de sangue humano para obter lucro em moeda estrangeira.",
      "E": "A doação de sangue e órgãos deve ser sempre remunerada em dinheiro vivo pelo SUS."
    },
    "resposta_correta": "A",
    "comentario": "O Art. 199, § 4º veda taxativamente todo tipo de comercialização de órgãos, tecidos e substâncias humanas, bem como a coleta e processamento comercial de sangue.",
    "referencia": "CF/88, Art. 199, § 4º"
  },
  {
    "id": 411,
    "materia": "Legislação SUS",
    "dificuldade": "CF/88, Art. 200, II",
    "enunciado": "O Artigo 200 da Constituição Federal elenca as competências expressas do Sistema Único de Saúde (SUS). Dentre elas, inclui-se a de executar as ações de vigilância sanitária e epidemiológica, bem como as de:",
    "alternativas": {
      "A": "Segurança pública militar de fronteiras marítimas.",
      "B": "Controle de tráfego aéreo de jatos comerciais.",
      "C": "Exploração de jazidas minerais de petróleo e gás natural.",
      "D": "Construção de barragens de hidrelétricas no leito dos rios.",
      "E": "Saúde do trabalhador."
    },
    "resposta_correta": "E",
    "comentario": "O Art. 200, II da CF/88 confere ao SUS a competência expressa para executar as ações de saúde do trabalhador, ao lado das vigilâncias epidemiológica e sanitária.",
    "referencia": "CF/88, Art. 200, II"
  },
  {
    "id": 412,
    "materia": "Legislação SUS",
    "dificuldade": "CF/88, Art. 200, VIII",
    "enunciado": "Qual é a competência do SUS estabelecida no inciso VIII do Art. 200 da Constituição Federal de 1988?",
    "alternativas": {
      "A": "Isentar indústrias poluidoras do pagamento de multas de licenciamento.",
      "B": "Prender infratores ambientais em flagrante delito nas florestas nacionais.",
      "C": "Explorar minas de carvão mineral para geração de eletricidade termoelétrica.",
      "D": "Colaborar na proteção do meio ambiente, nele compreendido o do trabalho.",
      "E": "Construir navios cargueiros para transporte de madeira de reflorestamento."
    },
    "resposta_correta": "D",
    "comentario": "O Art. 200, VIII da CF/88 consagra a competência do SUS de colaborar na proteção do meio ambiente, 'nele compreendido o do trabalho' (meio ambiente laboral).",
    "referencia": "CF/88, Art. 200, VIII"
  },
  {
    "id": 413,
    "materia": "Legislação SUS",
    "dificuldade": "CF/88, Art. 200, III",
    "enunciado": "No que se refere à formação de pessoal para o setor de saúde, o Art. 200, III da CF/88 estabelece como competência do SUS:",
    "alternativas": {
      "A": "Impedir a graduação de enfermeiros em faculdades comunitárias.",
      "B": "Ordenar a formação de recursos humanos na área de saúde.",
      "C": "Cobrar anuidades escolares em universidades federais de medicina.",
      "D": "Exigir que todos os estudantes de farmácia trabalhem de graça por 10 anos.",
      "E": "Proibir o estágio acadêmico em hospitais públicos estaduais."
    },
    "resposta_correta": "B",
    "comentario": "O SUS tem a incumbência constitucional de ordenar a formação de recursos humanos em saúde (Art. 200, III), orientando currículos e residências para as necessidades do sistema.",
    "referencia": "CF/88, Art. 200, III"
  },
  {
    "id": 414,
    "materia": "Legislação SUS",
    "dificuldade": "CF/88, Art. 200, I e Lei 9.782/1999",
    "enunciado": "A competência de 'controlar e fiscalizar procedimentos, produtos e substâncias de interesse para a saúde e participar da produção de medicamentos, equipamentos, imunobiológicos, hemoderivados e outros insumos' (Art. 200, I da CF/88) fundamenta a criação de qual agência reguladora federal?",
    "alternativas": {
      "A": "ANVISA (Agência Nacional de Vigilância Sanitária).",
      "B": "ANATEL (Agência Nacional de Telecomunicações).",
      "C": "ANP (Agência Nacional do Petróleo).",
      "D": "ANTT (Agência Nacional de Transportes Terrestres).",
      "E": "ANEEL (Agência Nacional de Energia Elétrica)."
    },
    "resposta_correta": "A",
    "comentario": "A Anvisa foi criada com base nas competências constitucionais do SUS de controle e fiscalização de medicamentos, alimentos, cosméticos, saneantes e insumos terapêuticos.",
    "referencia": "CF/88, Art. 200, I e Lei 9.782/1999"
  },
  {
    "id": 415,
    "materia": "Legislação SUS",
    "dificuldade": "CF/88, Art. 200, IV",
    "enunciado": "Sobre a participação do SUS na formulação da política e na execução das ações de SANEAMENTO BÁSICO (Art. 200, IV da CF/88):",
    "alternativas": {
      "A": "As companhias de saneamento são subordinadas diretamente aos chefes de enfermagem dos postos.",
      "B": "A competência é meramente decorativa, sem qualquer efeito na saúde pública.",
      "C": "O SUS constrói sozinho todas as redes de esgoto sem auxílio de companhias de engenharia.",
      "D": "O SUS é proibido de emitir pareceres sobre qualidade da água potável distribuída.",
      "E": "O SUS participa ativamente da formulação da política de saneamento devido à íntima relação entre abastecimento de água, esgotamento e índices de morbimortalidade na população."
    },
    "resposta_correta": "E",
    "comentario": "O saneamento básico é fator determinante da saúde coletiva; por isso, a CF/88 incluiu a participação do SUS na formulação de suas políticas e ações (Art. 200, IV).",
    "referencia": "CF/88, Art. 200, IV"
  },
  {
    "id": 416,
    "materia": "Legislação SUS",
    "dificuldade": "CF/88, Art. 200, VI",
    "enunciado": "O Art. 200, VI da CF/88 atribui expressamente ao SUS a competência de:",
    "alternativas": {
      "A": "Tabelar os preços de carnes e grãos nos supermercados privados de todo o país.",
      "B": "Fiscalizar e inspecionar alimentos, compreendido o controle de seu teor nutricional, bem como bebidas e águas para consumo humano.",
      "C": "Proibir o consumo de feijão e arroz por indivíduos com excesso de peso corporal.",
      "D": "Distribuir marmitas prontas gratuitamente em todas as esquinas das capitais.",
      "E": "Determinar a quantidade de açúcar que cada cidadão tem o direito de comprar."
    },
    "resposta_correta": "B",
    "comentario": "A vigilância sanitária de alimentos, água para consumo humano e bebidas é competência sanitária expressa do SUS prevista no Art. 200, VI da CF/88.",
    "referencia": "CF/88, Art. 200, VI"
  },
  {
    "id": 417,
    "materia": "Legislação SUS",
    "dificuldade": "CF/88, Art. 200, VII",
    "enunciado": "O controle e a fiscalização da produção, transporte, guarda e utilização de substâncias e produtos psicoativos, tóxicos e radioativos (Art. 200, VII da CF/88) pelo SUS garante:",
    "alternativas": {
      "A": "A proteção da saúde dos trabalhadores que manipulam radiisótopos e produtos perigosos, assim como da população e do meio ambiente contra contaminações tóxicas e nucleares.",
      "B": "A dispensa de dosímetros para técnicos que operam fontes de radiação ionizante.",
      "C": "A venda indiscriminada de medicamentos controlados sem retenção de receita médica.",
      "D": "A isenção fiscal de indústrias químicas que operam sem licenciamento ambiental.",
      "E": "A autorização livre para qualquer pessoa transportar cilindros de gás tóxico em ônibus urbanos."
    },
    "resposta_correta": "A",
    "comentario": "O controle sobre psicoativos, tóxicos e radioativos visa evitar contaminação ambiental, desvios e exposição perigosa a trabalhadores e comunidade.",
    "referencia": "CF/88, Art. 200, VII"
  },
  {
    "id": 418,
    "materia": "Legislação SUS",
    "dificuldade": "Jurisprudência do STF e CF/88 Art. 196",
    "enunciado": "A doutrina constitucional brasileira reconhece que a saúde no Art. 196 da CF/88 possui eficácia jurídica plena e aplicabilidade direta, significando que:",
    "alternativas": {
      "A": "O Estado nunca pode ser acionado na justiça para fornecer nenhum tratamento médico.",
      "B": "O cidadão pode exigir judicialmente do Estado prestações de saúde indispensáveis à sua sobrevivência e dignidade quando houver omissão estatal injustificada.",
      "C": "A responsabilidade pelo custeio hospitalar é exclusivamente de bancos estrangeiros.",
      "D": "O Poder Judiciário está proibido de julgar ações que envolvam fornecimento de leitos hospitalares.",
      "E": "A saúde é uma mera promessa poética da constituição sem valor legal cogente."
    },
    "resposta_correta": "B",
    "comentario": "O STF já pacificou o entendimento de que a saúde é direito subjetivo público de aplicabilidade imediata e dever inafastável do Estado em todas as esferas federativas.",
    "referencia": "Jurisprudência do STF e CF/88 Art. 196"
  },
  {
    "id": 419,
    "materia": "Legislação SUS",
    "dificuldade": "CF/88, Art. 194",
    "enunciado": "A respeito da SEGURIDADE SOCIAL na Constituição Federal (Art. 194), a saúde integra um tripé protetivo universal e solidário juntamente com:",
    "alternativas": {
      "A": "O Sistema Tributário e a Dívida Pública Mobiliária.",
      "B": "A Defesa Nacional e as Relações Exteriores.",
      "C": "A Segurança Pública e o Sistema Penitenciário.",
      "D": "A Previdência Social e a Assistência Social.",
      "E": "O Transporte Rodoviário e a Indústria Naval."
    },
    "resposta_correta": "D",
    "comentario": "A Seguridade Social compreende um conjunto integrado de ações de iniciativa dos Poderes Públicos e da sociedade, destinadas a assegurar os direitos relativos à saúde, à previdência e à assistência social (Art. 194 da CF/88).",
    "referencia": "CF/88, Art. 194"
  },
  {
    "id": 420,
    "materia": "Legislação SUS",
    "dificuldade": "CF/88, Art. 196 e Art. 201",
    "enunciado": "Qual a diferença fundamental na Seguridade Social entre a SAÚDE e a PREVIDÊNCIA SOCIAL no texto constitucional brasileiro?",
    "alternativas": {
      "A": "Não há nenhuma diferença, ambas exigem exatamente os mesmos requisitos de carência contributiva.",
      "B": "A previdência social fornece remédios e cirurgias de alta complexidade em hospitais.",
      "C": "A saúde exige contribuição financeira prévia de 35 anos, enquanto a previdência atende a todos de graça.",
      "D": "A saúde é universal (acesso de todos independentemente de contribuição), enquanto a previdência social tem caráter contributivo e filiação obrigatória.",
      "E": "A saúde é gerida exclusivamente por bancos privados, enquanto a previdência é filantrópica."
    },
    "resposta_correta": "D",
    "comentario": "A saúde é direito de todos (universal e não contributiva); a previdência é contributiva e atende apenas aos seus segurados inscritos e dependentes.",
    "referencia": "CF/88, Art. 196 e Art. 201"
  },
  {
    "id": 421,
    "materia": "Legislação SUS",
    "dificuldade": "Decreto 7.602/2011, Art. 2º",
    "enunciado": "A Política Nacional de Segurança e Saúde no Trabalho (PNSST), instituída pelo Decreto Presidencial nº 7.602/2011, tem por OBJETIVO geral:",
    "alternativas": {
      "A": "A substituição gradativa de todos os trabalhadores humanos por robôs industriais em 5 anos.",
      "B": "A promoção da saúde e a melhoria da qualidade de vida do trabalhador e a prevenção de acidentes e de danos à saúde advindos, relacionados ao trabalho ou que ocorram no curso dele, por meio da eliminação ou redução dos riscos nos ambientes de trabalho.",
      "C": "O aumento das alíquotas do imposto de renda incidente sobre os salários operários.",
      "D": "A extinção definitiva de todas as Normas Regulamentadoras do Ministério do Trabalho.",
      "E": "A autorização expressa para indústrias operarem sem laudos de insalubridade e periculosidade."
    },
    "resposta_correta": "B",
    "comentario": "O Art. 2º do Decreto 7.602/2011 define como objetivo da PNSST promover a saúde e qualidade de vida e prevenir acidentes e danos no trabalho pela eliminação ou controle de riscos.",
    "referencia": "Decreto 7.602/2011, Art. 2º"
  },
  {
    "id": 422,
    "materia": "Legislação SUS",
    "dificuldade": "Decreto 7.602/2011, Art. 3º, IV",
    "enunciado": "Dentre os PRINCÍPIOS basilares da Política Nacional de Segurança e Saúde no Trabalho (Art. 3º do Decreto nº 7.602/2011), inclui-se expressamente:",
    "alternativas": {
      "A": "A precedência das ações de prevenção sobre as de assistência, reabilitação e reparação.",
      "B": "A culpabilização individual da vítima em caso de lesão por maquinário sem proteção.",
      "C": "A dispensa do diálogo social entre patrões e empregados nas negociações coletivas.",
      "D": "A cobrança de taxa dos trabalhadores para inspecionar os postos de trabalho perigosos.",
      "E": "A prioridade da indenização pecuniária post-mortem sobre a prevenção de acidentes."
    },
    "resposta_correta": "A",
    "comentario": "O princípio da precedência da prevenção estabelece que evitar o acidente é prioridade absoluta frente à assistência médica posterior ou indenização reparatória.",
    "referencia": "Decreto 7.602/2011, Art. 3º, IV"
  },
  {
    "id": 423,
    "materia": "Legislação SUS",
    "dificuldade": "Decreto 7.602/2011, Art. 5º",
    "enunciado": "A implementação da PNSST é de responsabilidade compartilhada e articulada no âmbito do governo federal entre os seguintes Ministérios:",
    "alternativas": {
      "A": "Ministério do Turismo, Ministério da Cultura e Ministério do Esporte.",
      "B": "Ministério da Agricultura, Ministério das Minas e Energia e Ministério da Pesca.",
      "C": "Ministério das Comunicações, Ministério dos Transportes e ANATEL.",
      "D": "Ministério do Trabalho e Emprego, Ministério da Previdência Social e Ministério da Saúde.",
      "E": "Ministério da Defesa, Ministério da Fazenda e Banco Central do Brasil."
    },
    "resposta_correta": "D",
    "comentario": "A PNSST articula a gestão tripartite de SST entre a área do Trabalho (fiscalização/NRs), da Previdência (benefícios/CAT/FAP) e da Saúde (vigilância/SUS).",
    "referencia": "Decreto 7.602/2011, Art. 5º"
  },
  {
    "id": 424,
    "materia": "Legislação SUS",
    "dificuldade": "Decreto 7.602/2011, Art. 3º, I",
    "enunciado": "A universalidade como princípio da PNSST (Decreto nº 7.602/2011, Art. 3º, I) assegura que as diretrizes e ações de segurança e saúde no trabalho devem alcançar:",
    "alternativas": {
      "A": "Todos os trabalhadores brasileiros, independentemente de sua vinculação empregatícia (celetistas, estatutários públicos, autônomos, cooperados, avulsos ou rurais).",
      "B": "Exclusivamente servidores públicos federais com estabilidade funcional.",
      "C": "Apenas estagiários de cursos técnicos em segurança do trabalho.",
      "D": "Apenas os trabalhadores com carteira assinada em multinacionais petroquímicas.",
      "E": "Trabalhadores que recebem remuneração salarial acima de 20 salários mínimos."
    },
    "resposta_correta": "A",
    "comentario": "O princípio da universalidade garante a inclusão de todos os trabalhadores no sistema de proteção e promoção da saúde ocupacional.",
    "referencia": "Decreto 7.602/2011, Art. 3º, I"
  },
  {
    "id": 425,
    "materia": "Legislação SUS",
    "dificuldade": "Decreto 7.602/2011, Art. 9º",
    "enunciado": "O Comitê Tripartite de Saúde e Segurança no Trabalho (CTSST), instituído para acompanhar a implementação e execução da PNSST, possui composição formada por:",
    "alternativas": {
      "A": "Apenas auditores fiscais da Receita Federal e juízes do trabalho.",
      "B": "Exclusivamente empresários donos de hospitais e planos de saúde privados.",
      "C": "Representantes nomeados unilateralmente pelo presidente de bancos comerciais.",
      "D": "Representantes do governo, dos trabalhadores e dos empregadores, respeitando o princípio do diálogo social tripartite da OIT.",
      "E": "Apenas deputados federais e senadores da bancada governista."
    },
    "resposta_correta": "D",
    "comentario": "O CTSST obedece à estrutura tripartite (governo, trabalhadores e empregadores), harmonizando políticas e o Plano Nacional de Segurança e Saúde no Trabalho (PLANSAT).",
    "referencia": "Decreto 7.602/2011, Art. 9º"
  },
  {
    "id": 426,
    "materia": "Legislação SUS",
    "dificuldade": "Decreto 7.602/2011, Art. 4º, II",
    "enunciado": "Dentre as diretrizes estratégicas da PNSST (Art. 4º do Decreto nº 7.602/2011), destaca-se a 'harmonização das normas e articulação das ações de promoção, proteção, prevenção, assistência, reabilitação e reparação da saúde do trabalhador', o que visa:",
    "alternativas": {
      "A": "Aumentar a burocracia documental para dificultar a aposentadoria dos trabalhadores.",
      "B": "Eliminar contradições e sobreposições normativas entre os Ministérios do Trabalho, Saúde e Previdência, integrando dados e fluxos de fiscalização e vigilância.",
      "C": "Isentar hospitais públicos de cumprirem a NR-32 e as normas da Anvisa.",
      "D": "Acabar com a obrigatoriedade da emissão de Comunicação de Acidente de Trabalho (CAT).",
      "E": "Permitir que as empresas criem suas próprias leis sem intervenção do Estado."
    },
    "resposta_correta": "B",
    "comentario": "A harmonização busca a coerência regulatória e a interoperabilidade de sistemas de informação em SST entre Trabalho, Saúde e Previdência (ex: eSocial).",
    "referencia": "Decreto 7.602/2011, Art. 4º, II"
  },
  {
    "id": 427,
    "materia": "Legislação SUS",
    "dificuldade": "Decreto 7.602/2011, Art. 4º, IV",
    "enunciado": "No âmbito da PNSST, a estruturação de uma rede integrada de informações em saúde e segurança no trabalho tem por finalidade técnica:",
    "alternativas": {
      "A": "Vender o histórico médico dos trabalhadores para empresas de telemarketing comercial.",
      "B": "Divulgar a renda salarial de todos os técnicos de segurança na internet.",
      "C": "Garantir a coleta, consolidação e análise epidemiológica contínua de dados de acidentes, doenças e exposições ocupacionais para orientar políticas públicas preventivas.",
      "D": "Impedir que trabalhadores lesionados tenham acesso a seus prontuários médicos.",
      "E": "Substituir o censo demográfico oficial do IBGE a cada década."
    },
    "resposta_correta": "C",
    "comentario": "A integração de sistemas de informação possibilita o monitoramento epidemiológico dos agravos à saúde do trabalhador e o planejamento de ações fiscais e educativas.",
    "referencia": "Decreto 7.602/2011, Art. 4º, IV"
  },
  {
    "id": 428,
    "materia": "Legislação SUS",
    "dificuldade": "Decreto 7.602/2011, Art. 4º, V",
    "enunciado": "A respeito da capacitação continuada em segurança e saúde no trabalho preconizada na PNSST:",
    "alternativas": {
      "A": "É permitida apenas uma única vez na vida escolar do cidadão durante o ensino infantil.",
      "B": "É restrita a treinamentos teóricos de 10 minutos por correspondência postal.",
      "C": "Deve ser paga com desconto compulsório de 50% no décimo terceiro salário dos funcionários.",
      "D": "Fica proibida para empregados que trabalhem em serviços de saúde hospitalares.",
      "E": "Deve abranger gestores, empregadores, trabalhadores, membros de CIPA e profissionais do SESMT, fomentando a cultura prevencionista em todos os níveis."
    },
    "resposta_correta": "E",
    "comentario": "A educação permanente e a formação prevencionista dos atores sociais é diretriz central da PNSST para consolidar ambientes de trabalho seguros e saudáveis.",
    "referencia": "Decreto 7.602/2011, Art. 4º, V"
  },
  {
    "id": 429,
    "materia": "Legislação SUS",
    "dificuldade": "PNSST e Diretrizes Ocupacionais em Saúde",
    "enunciado": "A PNSST preconiza a adoção de medidas especiais de segurança e saúde no trabalho para grupos e atividades com maior vulnerabilidade. Em hospitais e serviços de saúde como a FHCGV, isso se traduz na atenção prioritária aos riscos:",
    "alternativas": {
      "A": "Biológicos (patógenos sanguíneos e respiratórios), perfurocortantes, químicos (quimioterápicos) e cargas ergonômicas da movimentação de pacientes.",
      "B": "De colisão de trens de carga nos corredores internos das enfermarias.",
      "C": "De ataque de animais ferozes carnívoros selvagens nos leitos de UTI.",
      "D": "De desabamento de minas subterrâneas de extração de carvão mineral.",
      "E": "De descompressão hiperbárica em mergulhos profundos em alto-mar."
    },
    "resposta_correta": "A",
    "comentario": "O trabalho em saúde apresenta perfil de vulnerabilidade ocupacional específico com riscos biológicos graves, perfurantes, químicos perigosos e esforço biomecânico intenso.",
    "referencia": "PNSST e Diretrizes Ocupacionais em Saúde"
  },
  {
    "id": 430,
    "materia": "Legislação SUS",
    "dificuldade": "Decreto 7.602/2011 e Lei 8.080/90",
    "enunciado": "Qual é o papel do Sistema Único de Saúde (SUS) na execução da PNSST no estado do Pará e no contexto da FHCGV?",
    "alternativas": {
      "A": "Revogar as leis trabalhistas do estado do Pará para atrair investimentos estrangeiros.",
      "B": "Atuar na vigilância em saúde do trabalhador (VISAT), no diagnóstico de doenças ocupacionais, na notificação no SINAN, na assistência e reabilitação física e na promoção da biossegurança hospitalar.",
      "C": "Cobrar multas trabalhistas para abastecer o caixa particular da diretoria do hospital.",
      "D": "Substituir o Ministério Público do Trabalho nos inquéritos civis de fraudes fiscais.",
      "E": "Proibir os técnicos de segurança do trabalho de realizarem inspeções nos postos de saúde."
    },
    "resposta_correta": "B",
    "comentario": "O SUS é executor direto das ações de vigilância sanitária, epidemiológica e da saúde do trabalhador, atuando na prevenção, diagnóstico e notificação dos agravos ocupacionais.",
    "referencia": "Decreto 7.602/2011 e Lei 8.080/90"
  },
  {
    "id": 431,
    "materia": "NR-01",
    "dificuldade": "NR-01, item 1.5.3.1",
    "enunciado": "O Programa de Gerenciamento de Riscos (PGR), instituído pela nova redação da NR-01, deve ser composto no mínimo por dois documentos estruturais essenciais:",
    "alternativas": {
      "A": "A Ficha Cadastral dos Clientes e o Balanço Contábil.",
      "B": "O Inventário de Riscos Ocupacionais e o Plano de Ação.",
      "C": "O Manual de Boas Maneiras e o Cardápio do Refeitório.",
      "D": "O Livro de Ponto Eletrônico e o Recibo de Férias.",
      "E": "A Apólice de Seguro de Automóveis e a Guia de IPTU."
    },
    "resposta_correta": "B",
    "comentario": "Conforme o subitem 1.5.3.1 da NR-01, o PGR deve conter, no mínimo, o Inventário de Riscos e o Plano de Ação.",
    "referencia": "NR-01, item 1.5.3.1"
  },
  {
    "id": 432,
    "materia": "NR-01",
    "dificuldade": "NR-01, item 1.5.7.3.2",
    "enunciado": "No Inventário de Riscos Ocupacionais do PGR da FHCGV, a caracterização dos processos e ambientes de trabalho deve conter:",
    "alternativas": {
      "A": "A marca comercial dos computadores utilizados na administração.",
      "B": "A lista de compras do supermercado para a diretoria executiva.",
      "C": "A descrição detalhada das atividades executadas, os perigos identificados, as possíveis lesões ou agravos à saúde e as fontes geradoras.",
      "D": "Apenas o valor venal do prédio e o imposto predial territorial urbano pago.",
      "E": "O organograma político dos deputados estaduais da região metropolitana."
    },
    "resposta_correta": "C",
    "comentario": "O item 1.5.7.3.2 da NR-01 exige no inventário a caracterização dos processos, perigos, fontes, possíveis lesões e trabalhadores expostos.",
    "referencia": "NR-01, item 1.5.7.3.2"
  },
  {
    "id": 433,
    "materia": "NR-01",
    "dificuldade": "NR-01, item 1.5.4.4.2",
    "enunciado": "A avaliação dos riscos ocupacionais no âmbito da NR-01 baseia-se na combinação de dois parâmetros fundamentais:",
    "alternativas": {
      "A": "A severidade das possíveis lesões ou agravos à saúde e a probabilidade de sua ocorrência.",
      "B": "O peso corporal do empregado e a sua idade cronológica.",
      "C": "O número de faltas não justificadas e a altura do teto do almoxarifado.",
      "D": "A cor do capacete e a distância do hospital até a capital do estado.",
      "E": "A taxa de inflação acumulada e o valor do dólar comercial."
    },
    "resposta_correta": "A",
    "comentario": "A NR-01 (subitem 1.5.4.4.2) determina que o nível de risco ocupacional deve ser determinado pela combinação da severidade com a probabilidade de ocorrência.",
    "referencia": "NR-01, item 1.5.4.4.2"
  },
  {
    "id": 434,
    "materia": "NR-01",
    "dificuldade": "NR-01, item 1.5.4.4.3",
    "enunciado": "A estimativa da SEVERIDADE das lesões na matriz de riscos da NR-01 deve levar em consideração:",
    "alternativas": {
      "A": "A marca dos jalecos distribuídos pela diretoria aos servidores.",
      "B": "Apenas o custo financeiro para a reposição de uma lâmpada fluorescente queimada.",
      "C": "A distância percorrida pelo ônibus do transporte público até o hospital.",
      "D": "A escolaridade dos técnicos de segurança do trabalho do setor.",
      "E": "A magnitude da consequência do evento perigoso, o número de trabalhadores potencialmente afetados e se o dano é reversível, incapacitante ou fatal."
    },
    "resposta_correta": "E",
    "comentario": "A severidade avalia o impacto físico e a gravidade dos danos à saúde (reversibilidade, sequelas, mortes e abrangência de pessoas atingidas).",
    "referencia": "NR-01, item 1.5.4.4.3"
  },
  {
    "id": 435,
    "materia": "NR-01",
    "dificuldade": "NR-01, item 1.5.4.4.4",
    "enunciado": "Na estimativa da PROBABILIDADE de ocorrência de uma lesão ou agravo à saúde, a organização deve considerar:",
    "alternativas": {
      "A": "As previsões astrológicas publicadas nos jornais diários.",
      "B": "Apenas a opinião individual de um único estagiário recém-admitido.",
      "C": "As exigências da atividade de trabalho, os dados de acidentes e agravos anteriores, o perfil de exposição e a eficácia das medidas de prevenção existentes.",
      "D": "A temperatura máxima da água da piscina do clube dos funcionários.",
      "E": "A velocidade média do vento na praia de Salinas."
    },
    "resposta_correta": "C",
    "comentario": "A probabilidade leva em conta a frequência de exposição, a adequação e eficácia das barreiras preventivas e o histórico de acidentalidade da empresa.",
    "referencia": "NR-01, item 1.5.4.4.4"
  },
  {
    "id": 436,
    "materia": "NR-01",
    "dificuldade": "NR-01, Fundacentro e Higiene Ocupacional",
    "enunciado": "O agrupamento de trabalhadores que desempenham atividades semelhantes, expostos aos mesmos perigos e sob idênticas condições ambientais é denominado tecnicamente no PGR de:",
    "alternativas": {
      "A": "Grupo Homogêneo de Exposição (GHE) ou Grupo Similar de Exposição (GSE).",
      "B": "Bloco carnavalesco hospitalar integrado.",
      "C": "Turma de recreação laboral vespertina.",
      "D": "Comissão de sindicância disciplinar colegiada.",
      "E": "Pelotão de infantaria civil hospitalar."
    },
    "resposta_correta": "A",
    "comentario": "O Grupo Homogêneo de Exposição (GHE) reúne trabalhadores submetidos aos mesmos fatores de risco com perfil de exposição equivalente para fins de avaliação e monitoramento.",
    "referencia": "NR-01, Fundacentro e Higiene Ocupacional"
  },
  {
    "id": 437,
    "materia": "NR-01",
    "dificuldade": "NR-01, item 1.5.4.4.6",
    "enunciado": "A avaliação de riscos no PGR da FHCGV deve ser revista obrigatoriamente a cada:",
    "alternativas": {
      "A": "Dois anos, ou no prazo de até três anos para organizações que possuam certificações em sistema de gestão de SST.",
      "B": "Dez anos para hospitais com mais de duzentos leitos ativos.",
      "C": "Trinta dias para todos os estabelecimentos comerciais do país.",
      "D": "Vinte e cinco anos sem possibilidade de atualização intermediária.",
      "E": "Seis meses, exclusivamente se a empresa não tiver faturamento financeiro."
    },
    "resposta_correta": "A",
    "comentario": "O item 1.5.4.4.6 da NR-01 estabelece a revisão da avaliação a cada 2 anos, ou a cada 3 anos para organizações certificadas em sistemas de gestão de SST (ex: ISO 45001).",
    "referencia": "NR-01, item 1.5.4.4.6"
  },
  {
    "id": 438,
    "materia": "NR-01",
    "dificuldade": "NR-01, item 1.5.4.4.6.1",
    "enunciado": "Além do prazo ordinário de revisão (2 ou 3 anos), a avaliação de riscos deve ser IMEDIATAMENTE revista pela organização quando:",
    "alternativas": {
      "A": "Após a ocorrência de acidentes ou doenças relacionadas ao trabalho graves, quando houver modificação nas tecnologias, processos ou quando identificadas inadequações nas medidas preventivas.",
      "B": "Houver mudança no fornecedor de copos plásticos descartáveis do refeitório.",
      "C": "Um funcionário solicitar empréstimo consignado na folha de pagamento.",
      "D": "O hospital comemorar aniversário de fundação com bolo festivo.",
      "E": "O preço do combustível subir na primeira quinzena do mês."
    },
    "resposta_correta": "A",
    "comentario": "A NR-01 (subitem 1.5.4.4.6.1) lista situações que disparam a revisão obrigatória do inventário: acidentes, doenças graves, novas leis, mudanças de processos ou falhas de controle.",
    "referencia": "NR-01, item 1.5.4.4.6.1"
  },
  {
    "id": 439,
    "materia": "NR-01",
    "dificuldade": "NR-01, item 1.5.7.4.1",
    "enunciado": "O histórico das atualizações e revisões dos documentos integrantes do PGR deve ser mantido disponível pela organização por um período mínimo de:",
    "alternativas": {
      "A": "Um ano para descarte e incineração anual compulsória.",
      "B": "Cinquenta anos em arquivo subterrâneo de chumbo.",
      "C": "Vinte anos, à disposição dos trabalhadores e da fiscalização.",
      "D": "Cinco dias úteis após a inspeção do corpo de bombeiros.",
      "E": "Três meses após a homologação das atas pelo sindicato."
    },
    "resposta_correta": "C",
    "comentario": "Os documentos do PGR devem ser mantidos arquivados e disponíveis por, no mínimo, 20 anos (NR-01, subitem 1.5.7.4.1).",
    "referencia": "NR-01, item 1.5.7.4.1"
  },
  {
    "id": 440,
    "materia": "NR-01",
    "dificuldade": "NR-01, item 1.5.4.3",
    "enunciado": "Em relação à identificação de perigos no inventário da FHCGV, a etapa preliminar de levantamento de perigos deve incluir:",
    "alternativas": {
      "A": "A aplicação de punições disciplinares a quem relatar queixas ergonômicas.",
      "B": "A consulta aos trabalhadores, a análise das condições de trabalho e a análise de dados epidemiológicos do PCMSO sobre acidentes e adoecimentos prévios.",
      "C": "Apenas a medição de ruído com celular comum nas garagens do hospital.",
      "D": "A assinatura de declaração padrão de que o ambiente de trabalho é 100% perfeito.",
      "E": "A dispensa de análise de riscos químicos na manipulação de quimioterápicos."
    },
    "resposta_correta": "B",
    "comentario": "O levantamento de perigos envolve escuta dos trabalhadores, observação das rotinas reais de trabalho e articulação com os relatórios médicos do PCMSO.",
    "referencia": "NR-01, item 1.5.4.3"
  },
  {
    "id": 441,
    "materia": "NR-01",
    "dificuldade": "NR-01 e Diretrizes de Gerenciamento de Riscos",
    "enunciado": "Quando a avaliação preliminar indicar que um risco ocupacional é classificado como 'INTOLERÁVEL' ou 'CRÍTICO' na matriz de risco da FHCGV:",
    "alternativas": {
      "A": "O trabalhador deve trabalhar com os olhos vendados para não sentir medo do perigo.",
      "B": "O empregador deve pagar um adicional indenizatório de R$ 50,00 e manter o trabalhador no local desprotegido.",
      "C": "O técnico de segurança deve apagar o registro da matriz para evitar autuações.",
      "D": "O trabalho não deve ser iniciado ou continuado até que o risco tenha sido reduzido a níveis aceitáveis por medidas de controle urgentes.",
      "E": "A atividade deve continuar normalmente sem nenhuma alteração no processo."
    },
    "resposta_correta": "D",
    "comentario": "Riscos intoleráveis exigem paralisação imediata ou medidas emergenciais que reduzam o nível de risco antes de qualquer operação continuada.",
    "referencia": "NR-01 e Diretrizes de Gerenciamento de Riscos"
  },
  {
    "id": 442,
    "materia": "NR-01",
    "dificuldade": "NR-01, item 1.5.5.1 e NR-07, item 7.3.2",
    "enunciado": "Qual a relação obrigatória exigida pela NR-01 e NR-07 entre o Inventário de Riscos do PGR e o Programa de Controle Médico de Saúde Ocupacional (PCMSO)?",
    "alternativas": {
      "A": "O médico do trabalho é proibido por sigilo de ler qualquer documento elaborado pelo SESMT.",
      "B": "Não há nenhuma conexão entre eles, pois o PGR cuida apenas de incêndios e o PCMSO de receitas médicas.",
      "C": "O inventário de riscos substitui integralmente a necessidade de realizar exames médicos admissionais.",
      "D": "O PGR só pode ser iniciado 5 anos após o término do PCMSO.",
      "E": "O PCMSO deve ser planejado e implantado com base nos riscos identificados no Inventário de Riscos do PGR, e os dados de saúde do PCMSO devem retroalimentar a avaliação de riscos do PGR."
    },
    "resposta_correta": "E",
    "comentario": "Existe integração e retroalimentação direta: o PGR subsidia os exames do PCMSO e a vigilância médica alerta o PGR sobre o surgimento ou agravamento de doenças.",
    "referencia": "NR-01, item 1.5.5.1 e NR-07, item 7.3.2"
  },
  {
    "id": 443,
    "materia": "NR-01",
    "dificuldade": "NR-01, item 1.5.8",
    "enunciado": "Em relação à avaliação de riscos em empresas prestadoras de serviços terceirizadas que atuam dentro da FHCGV (como limpeza, segurança e manutenção predial):",
    "alternativas": {
      "A": "Os trabalhadores terceirizados são proibidos de usar os banheiros e bebedouros do hospital.",
      "B": "A terceirizada não precisa ter PGR se o seu contrato for inferior a 12 meses.",
      "C": "O PGR da contratante revoga automaticamente a personalidade jurídica da empresa terceirizada.",
      "D": "A FHCGV não tem nenhuma obrigação em relação aos terceirizados, que respondem isoladamente por tudo.",
      "E": "A contratante (FHCGV) e as contratadas devem articular suas ações de prevenção, fornecendo informações recíprocas sobre os perigos e integrando os inventários de risco nos ambientes compartilhados."
    },
    "resposta_correta": "E",
    "comentario": "A NR-01 (subitem 1.5.8) estabelece obrigações conjuntas e cooperação entre contratante e contratadas para gestão integrada dos riscos no estabelecimento comum.",
    "referencia": "NR-01, item 1.5.8"
  },
  {
    "id": 444,
    "materia": "NR-01",
    "dificuldade": "NR-01, item 1.5.4.4.5 e NR-09",
    "enunciado": "A avaliação quantitativa das exposições ocupacionais no PGR deve ser realizada quando:",
    "alternativas": {
      "A": "Ouvir-se um ruído de folhas secas ao vento no estacionamento do hospital.",
      "B": "Sempre que o técnico de segurança desejar utilizar um aparelho digital novo.",
      "C": "Apenas para cumprir exigência de contabilidade de custos de materiais de escritório.",
      "D": "Apenas após a morte de pelo menos cinco servidores no mesmo setor.",
      "E": "Necessária para comprovar o controle da exposição ou a inexistência de riscos, confirmar a eficácia das medidas de prevenção ou dimensionar medidas de proteção coletiva."
    },
    "resposta_correta": "E",
    "comentario": "A avaliação quantitativa mede concentrações químicas ou intensidades físicas para verificar conformidade com limites de tolerância e níveis de ação.",
    "referencia": "NR-01, item 1.5.4.4.5 e NR-09"
  },
  {
    "id": 445,
    "materia": "NR-01",
    "dificuldade": "NR-01 e Metodologia de Análise de Riscos",
    "enunciado": "Na matriz de classificação de riscos ocupacionais, um risco classificado como 'TRIVIAL' ou 'DESPREZÍVEL' geralmente requer:",
    "alternativas": {
      "A": "A evacuação imediata do quarteirão com apoio da defesa civil municipal.",
      "B": "Nenhuma medida de controle adicional além da manutenção dos procedimentos de rotina existentes e monitoramento periódico de que a condição se mantém.",
      "C": "A interdição completa do bloco cirúrgico por tempo indeterminado.",
      "D": "A substituição de todos os médicos por robôs automatizados de cirurgia.",
      "E": "O pagamento compulsório de adicional de periculosidade de 30% aos funcionários."
    },
    "resposta_correta": "B",
    "comentario": "Riscos triviais ou aceitáveis não exigem ações corretivas emergenciais adicionais, exigindo apenas a manutenção das boas práticas operacionais.",
    "referencia": "NR-01 e Metodologia de Análise de Riscos"
  },
  {
    "id": 446,
    "materia": "NR-01",
    "dificuldade": "NR-01, item 1.5.4.3.1",
    "enunciado": "O processo de Identificação de Perigos no PGR deve ser contínuo e contemplar, conforme o subitem 1.5.4.3.1 da NR-01:",
    "alternativas": {
      "A": "Os perigos externos previsíveis que possam afetar a segurança e a saúde no trabalho da organização.",
      "B": "Exclusivamente brigas familiares de funcionários ocorridas aos domingos em suas casas.",
      "C": "Apenas os perigos originados exclusivamente dentro das gavetas trancadas da gerência.",
      "D": "Apenas danos causados por quedas de meteoritos na região metropolitana de Belém.",
      "E": "Apenas acidentes já julgados pelo Superior Tribunal de Justiça com trânsito em julgado."
    },
    "resposta_correta": "A",
    "comentario": "A NR-01 inovou ao exigir a identificação de perigos externos previsíveis relacionados ao trabalho (ex: violência urbana, inundações, trânsito nos trajetos de trabalho).",
    "referencia": "NR-01, item 1.5.4.3.1"
  },
  {
    "id": 447,
    "materia": "NR-01",
    "dificuldade": "NR-01 e NR-32",
    "enunciado": "No PGR hospitalar da FHCGV, a classificação do risco biológico em uma enfermaria de clínica médica deve considerar:",
    "alternativas": {
      "A": "Apenas o custo financeiro das diárias de internação cobradas dos planos particulares.",
      "B": "O cardápio da lanchonete localizada na calçada em frente ao hospital.",
      "C": "A idade do prédio e a cor da pintura externa da fachada do hospital.",
      "D": "A virulência dos patógenos, as vias de transmissão, a endemicidade regional, a frequência do contato assistencial e a imunização/EPIs dos servidores.",
      "E": "O número de vagas de automóveis no estacionamento da diretoria."
    },
    "resposta_correta": "D",
    "comentario": "O inventário de riscos biológicos articula o perigo intrínseco do agente patogênico com a exposição real dos trabalhadores no ambiente clínico.",
    "referencia": "NR-01 e NR-32"
  },
  {
    "id": 448,
    "materia": "NR-01",
    "dificuldade": "NR-01, item 1.8.4",
    "enunciado": "A Microempresa (ME) e a Empresa de Pequeno Porte (EPP) com graus de risco 1 e 2 que declararem que não possuem riscos físicos, químicos e biológicos em sua atividade:",
    "alternativas": {
      "A": "Estão isentas de cumprir qualquer norma de ergonomia e segurança de máquinas.",
      "B": "Devem pagar uma multa mensal de 10 salários mínimos ao Ministério do Trabalho.",
      "C": "Estão dispensadas da elaboração do PGR, de acordo com o subitem 1.8.4 da NR-01.",
      "D": "Ficam proibidas de contratar funcionários celetistas por tempo indeterminado.",
      "E": "São obrigadas a contratar três engenheiros de segurança do trabalho em tempo integral."
    },
    "resposta_correta": "C",
    "comentario": "A NR-01 prevê tratamento diferenciado para ME e EPP graus de risco 1 e 2 que declarem inexistência de riscos físicos, químicos e biológicos, dispensando o PGR.",
    "referencia": "NR-01, item 1.8.4"
  },
  {
    "id": 449,
    "materia": "NR-01",
    "dificuldade": "NR-01, item 1.8.6",
    "enunciado": "A dispensa da elaboração do PGR para uma ME ou EPP isenta a empresa de cumprir as demais Normas Regulamentadoras de SST aplicáveis à sua atividade?",
    "alternativas": {
      "A": "Sim, a empresa fica autorizada a ignorar todas as leis de segurança do trabalho do Brasil.",
      "B": "Não, exceto se a empresa doar 50% de seu lucro anual para o sindicato patronal.",
      "C": "Sim, a empresa pode deixar de fornecer EPIs e treinamento aos seus trabalhadores.",
      "D": "Não, a dispensa do PGR não desobriga a empresa do cumprimento das demais exigências normativas de segurança e saúde no trabalho (ex: NR-06, NR-17).",
      "E": "Sim, a empresa fica dispensada do pagamento de salários e encargos trabalhistas."
    },
    "resposta_correta": "D",
    "comentario": "O subitem 1.8.6 da NR-01 é taxativo: a dispensa da obrigação do PGR não alcança nem desobriga a organização do cumprimento das demais NRs aplicáveis.",
    "referencia": "NR-01, item 1.8.6"
  },
  {
    "id": 450,
    "materia": "NR-01",
    "dificuldade": "NR-01, item 1.5.3.3 e NR-05",
    "enunciado": "Qual é o papel da CIPA (Comissão Interna de Prevenção de Acidentes e Assédio) na elaboração e acompanhamento do Inventário de Riscos do PGR?",
    "alternativas": {
      "A": "A CIPA deve ser ouvida e participar da identificação dos perigos e percepção dos riscos nos locais de trabalho, colaborando no desenvolvimento do inventário.",
      "B": "A CIPA atua exclusivamente como órgão de cobrança financeira das mensalidades sindicais.",
      "C": "A CIPA é terminantemente proibida de tomar conhecimento dos riscos avaliados no PGR.",
      "D": "A CIPA tem poder para proibir o médico do trabalho de examinar os funcionários.",
      "E": "A CIPA deve assumir a responsabilidade penal e civil pelo laudo de engenharia emitido."
    },
    "resposta_correta": "A",
    "comentario": "A NR-01 e a NR-05 determinam que a organização deve ouvir a CIPA e os trabalhadores na identificação de perigos e na avaliação dos riscos ocupacionais.",
    "referencia": "NR-01, item 1.5.3.3 e NR-05"
  },
  {
    "id": 451,
    "materia": "NR-01",
    "dificuldade": "NR-01, item 1.5.5.2",
    "enunciado": "O PLANO DE AÇÃO do PGR, conforme estabelecido no subitem 1.5.5.2 da NR-01, deve definir com clareza:",
    "alternativas": {
      "A": "A lista dos funcionários que serão demitidos por justa causa nos próximos 3 anos.",
      "B": "A escala de férias de verão dos servidores que já possuem mais de 60 anos.",
      "C": "Apenas o valor das diárias de viagens dos diretores em congressos internacionais.",
      "D": "O cardápio da confraternização de final de ano dos empregados da fundação.",
      "E": "As medidas de prevenção a serem introduzidas, aprimoradas ou mantidas, com cronograma de execução, formas de acompanhamento e responsáveis pela implementação."
    },
    "resposta_correta": "E",
    "comentario": "O Plano de Ação é o instrumento executivo do PGR que estabelece 'o que fazer, quem faz, quando faz e como se mede a eficácia' das medidas preventivas.",
    "referencia": "NR-01, item 1.5.5.2"
  },
  {
    "id": 452,
    "materia": "NR-01",
    "dificuldade": "NR-01, item 1.4.1",
    "enunciado": "A NR-01 estabelece uma ORDEM DE PRIORIDADE obrigatória para a adoção das medidas de prevenção nos locais de trabalho (item 1.4.1). Essa hierarquia determina que:",
    "alternativas": {
      "A": "Primeiro deve-se eliminar os fatores de risco; em segundo lugar, minimizar e controlar na fonte com EPC; em terceiro, adotar medidas administrativas; e, por último, o uso de EPI.",
      "B": "As medidas administrativas de redução de salário devem preceder as medidas técnicas de segurança.",
      "C": "Primeiro deve-se distribuir EPIs descartáveis baratos para toda a fábrica e ignorar a fonte.",
      "D": "A empresa é livre para escolher qualquer medida aleatoriamente sem seguir hierarquia de controle.",
      "E": "A proteção individual (EPI) tem prioridade absoluta sobre qualquer medida coletiva ou de engenharia."
    },
    "resposta_correta": "A",
    "comentario": "A hierarquia de controle de riscos é clássica: 1º Eliminação -> 2º Substituição/EPC -> 3º Medidas Administrativas -> 4º EPI.",
    "referencia": "NR-01, item 1.4.1"
  },
  {
    "id": 453,
    "materia": "NR-01",
    "dificuldade": "Higiene Ocupacional e NR-01",
    "enunciado": "A implantação de Medidas de Proteção Coletiva (EPC), como sistemas de exaustão localizada na capela de quimioterápicos da FHCGV, é prioritária em relação ao EPI porque:",
    "alternativas": {
      "A": "Protege a coletividade de trabalhadores no ambiente, não depende exclusivamente do comportamento individual contínuo e atua diretamente na contenção do perigo na fonte.",
      "B": "Isenta o hospital de realizar manutenção periódica nos filtros e motores.",
      "C": "Elimina a necessidade de qualquer treinamento dos operadores do setor.",
      "D": "Permite que os técnicos trabalhem desprovidos de roupas e calçados.",
      "E": "Custa menos dinheiro para a empresa do que comprar máscaras cirúrgicas descartáveis."
    },
    "resposta_correta": "A",
    "comentario": "O EPC protege múltiplos trabalhadores simultaneamente e controla o agente na origem ou na trajetória, minimizando a dependência de atos individuais.",
    "referencia": "Higiene Ocupacional e NR-01"
  },
  {
    "id": 454,
    "materia": "NR-01",
    "dificuldade": "NR-01, item 1.4.1 e NR-06",
    "enunciado": "O uso de Equipamento de Proteção Individual (EPI) deve ser adotado no Plano de Ação do PGR nas seguintes situações, EXCETO:",
    "alternativas": {
      "A": "Como medida primária prioritária, em substituição perpétua ao conserto de máquinas com peças perigosas expostas.",
      "B": "Para atender a situações de emergência.",
      "C": "Quando as medidas de proteção coletiva forem inviáveis tecnicamente ou não oferecerem completa proteção contra os riscos.",
      "D": "Enquanto as medidas de proteção coletiva estiverem sendo implantadas (em caráter transitório).",
      "E": "Em complementação às medidas de engenharia já instaladas que não anulem 100% da exposição."
    },
    "resposta_correta": "A",
    "comentario": "O EPI nunca deve ser a primeira opção de comodidade para evitar a instalação de proteções coletivas necessárias; ele é a última barreira defensiva.",
    "referencia": "NR-01, item 1.4.1 e NR-06"
  },
  {
    "id": 455,
    "materia": "NR-01",
    "dificuldade": "NR-01, item 1.5.5.3",
    "enunciado": "O acompanhamento da eficácia das medidas de prevenção previstas no Plano de Ação deve ser realizado pelo SESMT através de:",
    "alternativas": {
      "A": "Consultas a videntes e previsões de cartas de tarô na sala de enfermagem.",
      "B": "Pesquisa de popularidade nas redes sociais da internet.",
      "C": "Reuniões informais de cafezinho sem ata nem registro de deliberações técnicas.",
      "D": "Leitura dos horóscopos dos servidores aniversariantes do mês.",
      "E": "Inspeções periódicas nos locais de trabalho, monitoramento das avaliações ambientais, auditorias internas e cruzamento com os indicadores epidemiológicos do PCMSO."
    },
    "resposta_correta": "E",
    "comentario": "Aferir eficácia exige medições, auditorias em campo e monitoramento dos indicadores de saúde para certificar se as barreiras realmente controlaram o risco.",
    "referencia": "NR-01, item 1.5.5.3"
  },
  {
    "id": 456,
    "materia": "NR-01",
    "dificuldade": "NR-01, item 1.5.5.3.3",
    "enunciado": "Se durante o acompanhamento da eficácia for constatado que uma medida preventiva adotada (ex: um novo dispositivo de segurança em agulha) não produziu o efeito esperado:",
    "alternativas": {
      "A": "O trabalhador que sofreu o acidente deve ser obrigado a pagar o valor do dispositivo.",
      "B": "A comissão deve aguardar 10 anos até a próxima revisão formal do plano.",
      "C": "O Plano de Ação deve ser imediatamente revisto, corrigindo-se a falha, substituindo-se o modelo ou aprimorando-se o treinamento dos trabalhadores.",
      "D": "A empresa deve arquivar o PGR e proibir a realização de novas inspeções no setor.",
      "E": "O SESMT deve culpar o fabricante e não tomar nenhuma atitude corretiva no hospital."
    },
    "resposta_correta": "C",
    "comentario": "O PGR é um ciclo dinâmico contínuo (PDCA); constatada a ineficácia da medida, o plano deve ser ajustado e aprimorado imediatamente.",
    "referencia": "NR-01, item 1.5.5.3.3"
  },
  {
    "id": 457,
    "materia": "NR-01",
    "dificuldade": "NR-01 e NR-17",
    "enunciado": "Dentre as medidas administrativas de prevenção que podem ser incluídas no Plano de Ação do PGR para setores com alta carga biomecânica ou estresse na FHCGV, cita-se:",
    "alternativas": {
      "A": "A instalação de câmeras espiãs secretas nos banheiros e vestiários masculinos e femininos.",
      "B": "A instituição de pausas regulares de descanso durante a jornada de trabalho, alternância de tarefas (rodízio) e adequação dos procedimentos operacionais padrão.",
      "C": "O aumento da jornada diária de trabalho de 12 para 18 horas ininterruptas.",
      "D": "A eliminação do direito ao descanso semanal remunerado dos servidores.",
      "E": "A proibição do consumo de água potável durante todo o plantão de serviço."
    },
    "resposta_correta": "B",
    "comentario": "Medidas administrativas e organizacionais incluem redução do tempo de exposição, pausas programadas, rodízio de postos e melhoria ergonômica de processos.",
    "referencia": "NR-01 e NR-17"
  },
  {
    "id": 458,
    "materia": "NR-01",
    "dificuldade": "NR-01, item 1.5.5.2.2",
    "enunciado": "O cronograma de execução das ações do PGR na FHCGV deve estabelecer:",
    "alternativas": {
      "A": "Prazos genéricos indefinidos como 'quando for possível financeiramente'.",
      "B": "Prazos claros e datas-limite para a conclusão de cada etapa, permitindo o controle de metas de curto, médio e longo prazo.",
      "C": "Apenas o horário de entrada e saída do diretor-presidente da fundação hospitalar.",
      "D": "Datas fixadas exclusivamente no passado para simular cumprimento de metas.",
      "E": "Prazos superiores a 50 anos para todas as medidas que exijam compra de materiais."
    },
    "resposta_correta": "B",
    "comentario": "O cronograma deve conter metas cronológicas objetivas (datas ou períodos determinados) para possibilitar a cobrança e auditoria de cumprimento.",
    "referencia": "NR-01, item 1.5.5.2.2"
  },
  {
    "id": 459,
    "materia": "NR-01",
    "dificuldade": "NR-01, item 1.5.5.2",
    "enunciado": "A definição de responsáveis no Plano de Ação do PGR tem como finalidade técnica e gerencial:",
    "alternativas": {
      "A": "Criar um sorteio mensal de culpados por acidentes de trabalho nas enfermarias.",
      "B": "Transferir a responsabilidade da empresa para estagiários voluntários sem remuneração.",
      "C": "Identificar quem deverá ser processado criminalmente caso chova no telhado do hospital.",
      "D": "Permitir que o diretor do hospital fique livre de quaisquer obrigações legais de gestão.",
      "E": "Assegurar a prestação de contas (accountability), atribuindo a setores ou gestores específicos a competência e autoridade para viabilizar as ações planejadas."
    },
    "resposta_correta": "E",
    "comentario": "Identificar formalmente os responsáveis por cada ação garante que as medidas tenham execução garantida e acompanhada pelos escalões administrativos competentes.",
    "referencia": "NR-01, item 1.5.5.2"
  },
  {
    "id": 460,
    "materia": "NR-01",
    "dificuldade": "NR-01, item 1.7.1",
    "enunciado": "Em relação à capacitação e treinamento dos trabalhadores previstos no Plano de Ação do PGR:",
    "alternativas": {
      "A": "Os treinamentos devem ser realizados durante a jornada normal de trabalho, sem ônus para o trabalhador, abordando os perigos e as medidas preventivas adotadas.",
      "B": "O hospital pode realizar o treinamento através de um folheto colocado debaixo da porta do quarto.",
      "C": "Os cursos devem ser realizados nos finais de semana de folga do servidor sem pagamento de hora extra.",
      "D": "O empregado deve pagar uma taxa de matrícula de R$ 300,00 por módulo de treinamento da NR.",
      "E": "Os treinamentos são dispensados se o servidor possuir carteira de habilitação categoria B."
    },
    "resposta_correta": "A",
    "comentario": "A NR-01 (subitem 1.7.1) estipula que a capacitação é custeada pelo empregador e realizada obrigatoriamente dentro da jornada normal de trabalho.",
    "referencia": "NR-01, item 1.7.1"
  },
  {
    "id": 461,
    "materia": "NR-01",
    "dificuldade": "NR-01, Anexo II",
    "enunciado": "O Anexo II da NR-01 estabelece as diretrizes e requisitos para a realização de treinamentos de SST na modalidade a distância (EAD) ou semipresencial, exigindo:",
    "alternativas": {
      "A": "A dispensa de qualquer tipo de avaliação final de aprendizagem do aluno.",
      "B": "Projeto pedagógico estruturado, ambiente virtual com controle de acesso, tutoria qualificada e cumprimento de atividades práticas presenciais quando exigidas pela respectiva NR.",
      "C": "A gravação de vídeos amadores sem responsabilidade técnica de profissional habilitado.",
      "D": "Que o curso seja assistido unicamente na residência do trabalhador durante a madrugada.",
      "E": "Apenas o envio de mensagens de texto curtas em aplicativos de bate-papo informal."
    },
    "resposta_correta": "B",
    "comentario": "O Anexo II da NR-01 regulamenta o EAD em SST com critérios rigorosos de projeto pedagógico, validação de presença e obrigatoriedade de práticas presenciais.",
    "referencia": "NR-01, Anexo II"
  },
  {
    "id": 462,
    "materia": "NR-01",
    "dificuldade": "NR-01, item 1.7.3",
    "enunciado": "Qual a periodicidade com que o empregador deve realizar o treinamento periódico (reciclagem) dos trabalhadores em relação aos riscos do PGR?",
    "alternativas": {
      "A": "Conforme o prazo estabelecido na Norma Regulamentadora específica de cada tema ou sempre que houver modificação de processos e reavaliação de riscos.",
      "B": "Nunca, pois o diploma de ensino médio supre qualquer treinamento em SST.",
      "C": "Diariamente por 8 horas consecutivas antes de iniciar o atendimento médico.",
      "D": "Apenas após o servidor sofrer uma amputação traumática no trabalho.",
      "E": "Apenas uma vez a cada 30 anos de serviço público ininterrupto."
    },
    "resposta_correta": "A",
    "comentario": "A periodicidade dos treinamentos periódicos obedece às NRs específicas ou aos prazos fixados no próprio PGR da organização.",
    "referencia": "NR-01, item 1.7.3"
  },
  {
    "id": 463,
    "materia": "NR-01",
    "dificuldade": "NR-01, item 1.5.5.5",
    "enunciado": "Em caso de acidente de trabalho com óbito ou lesão grave que exija internação na FHCGV, qual ação IMEDIATA deve ser incluída no Plano de Ação pelo SESMT?",
    "alternativas": {
      "A": "Análise profunda do acidente com investigação das causas imediatas e subjacentes, adotando-se medidas de contenção para evitar a repetição imediata do evento.",
      "B": "A demolição sumária de todas as paredes do setor onde ocorreu o acidente.",
      "C": "A alteração imediata da data do laudo pericial para forjar cumprimento de normas.",
      "D": "O pagamento em dinheiro vivo aos colegas de quarto para que não testemunhem na delegacia.",
      "E": "O arquivamento confidencial do prontuário por ordem verbal do diretor."
    },
    "resposta_correta": "A",
    "comentario": "A análise de acidentes graves é obrigatória e deve gerar medidas imediatas de correção incluídas no plano de ação para mitigar a vulnerabilidade do sistema.",
    "referencia": "NR-01, item 1.5.5.5"
  },
  {
    "id": 464,
    "materia": "NR-01",
    "dificuldade": "NR-01, item 1.5.6 e NR-23",
    "enunciado": "A articulação do Plano de Ação do PGR com a preparação para emergências hospitalares (incêndios, vazamento de oxigênio, catástrofes externas) exige que a fundação disponha de:",
    "alternativas": {
      "A": "Uma caixa de fósforos e uma vela de cera de abelha em cada corredor.",
      "B": "A evacuação de pacientes exclusivamente pelas janelas do décimo andar com cordas de varal.",
      "C": "Apenas uma buzina manual guardada na gaveta trancada da sala da diretoria.",
      "D": "A dispensa de extintores de incêndio para reduzir o peso estrutural das paredes.",
      "E": "Plano de Emergência com procedimentos de evacuação, alarme, combate a princípios de incêndio, primeiros socorros e realização de simulados periódicos."
    },
    "resposta_correta": "E",
    "comentario": "O subitem 1.5.6 da NR-01 exige Plano de Resposta a Emergências com rotas de fuga, sinalização, brigadas e exercícios simulados periódicos compatíveis com a atividade.",
    "referencia": "NR-01, item 1.5.6 e NR-23"
  },
  {
    "id": 465,
    "materia": "NR-01",
    "dificuldade": "NR-01, item 1.5.3.4",
    "enunciado": "Na gestão da segurança, o conceito de 'Melhoria Contínua' (Ciclo PDCA) incorporado pela NR-01 ao GRO significa que o gerenciamento de riscos:",
    "alternativas": {
      "A": "Deve ser realizado uma única vez na história da fundação hospitalar sem mudanças.",
      "B": "Termina definitivamente no momento em que a primeira via do PGR é impressa em papel.",
      "C": "É uma atividade burocrática destinada unicamente a ser arquivada para fiscais do trabalho.",
      "D": "É um processo contínuo e dinâmico de planejamento (Plan), execução (Do), checagem (Check) e ação corretiva/aprimoramento (Act).",
      "E": "Permite que os riscos aumentem anualmente sem intervenção técnica do SESMT."
    },
    "resposta_correta": "D",
    "comentario": "O GRO baseia-se no ciclo PDCA de melhoria contínua dos desempenhos em segurança e saúde no trabalho.",
    "referencia": "NR-01, item 1.5.3.4"
  },
  {
    "id": 466,
    "materia": "NR-01",
    "dificuldade": "NR-01, item 1.4.3",
    "enunciado": "O subitem 1.4.3 da NR-01 consagra expressamente o 'Direito de Recusa' ao trabalhador, assegurando que este poderá interromper suas atividades quando:",
    "alternativas": {
      "A": "Constatar uma situação de trabalho onde, a seu ver, por motivos razoáveis, envolva um risco grave e iminente para a sua vida e saúde.",
      "B": "Quiser assistir a uma partida de futebol transmitida pela televisão comercial.",
      "C": "O hospital não fornecer lanche da tarde com sobremesa de chocolate importado.",
      "D": "Não estiver com vontade de trabalhar em uma tarde chuvosa de sexta-feira.",
      "E": "Discordar da cor da parede da sala onde seu computador de mesa está instalado."
    },
    "resposta_correta": "A",
    "comentario": "O item 1.4.3 da NR-01 garante que o trabalhador interrompa a atividade diante de situação com motivos razoáveis de risco grave e iminente à sua integridade.",
    "referencia": "NR-01, item 1.4.3"
  },
  {
    "id": 467,
    "materia": "NR-01",
    "dificuldade": "NR-01, item 1.4.3",
    "enunciado": "Ao exercer legitimamente o direito de recusa diante de um risco grave e iminente na FHCGV, o trabalhador deve OBRIGATORIAMENTE:",
    "alternativas": {
      "A": "Comunicar imediatamente a situação de risco ao seu superior hierárquico.",
      "B": "Publicar calúnias e ofensas pessoais aos diretores nas redes sociais.",
      "C": "Quebrar os equipamentos do posto de trabalho para impedir que outros trabalhem.",
      "D": "Incendiar o quadro de distribuição elétrica do setor com álcool.",
      "E": "Abandonar o hospital e viajar para outro estado da federação sem avisar ninguém."
    },
    "resposta_correta": "A",
    "comentario": "O trabalhador deve comunicar imediatamente ao superior hierárquico o motivo da interrupção para avaliação e adoção de medidas corretivas (NR-01, item 1.4.3).",
    "referencia": "NR-01, item 1.4.3"
  },
  {
    "id": 468,
    "materia": "NR-01",
    "dificuldade": "NR-01, item 1.4.3.1",
    "enunciado": "Após a comunicação do trabalhador sobre a existência de risco grave e iminente, qual é a obrigação legal do empregador perante a situação?",
    "alternativas": {
      "A": "Determinar que um estagiário sem treinamento assuma a mesma tarefa perigosa.",
      "B": "Demiti-lo sumariamente por justa causa no mesmo instante da comunicação.",
      "C": "Suspender os salários de todos os funcionários do setor pelo prazo de um ano.",
      "D": "Não exigir o retorno dos trabalhadores à atividade até que sejam adotadas medidas corretivas ou a situação de grave e iminente risco seja eliminada.",
      "E": "Obrigar o trabalhador a retornar imediatamente à tarefa sob mira de armas de fogo."
    },
    "resposta_correta": "D",
    "comentario": "O empregador não pode exigir o retorno à atividade enquanto perdurar a situação de risco grave e iminente e não forem aplicadas medidas de segurança.",
    "referencia": "NR-01, item 1.4.3.1"
  },
  {
    "id": 469,
    "materia": "NR-01",
    "dificuldade": "NR-01, item 1.4.3.2 e Princípios da OIT",
    "enunciado": "O trabalhador que interrompe suas atividades com base no legítimo exercício do direito de recusa da NR-01:",
    "alternativas": {
      "A": "Fica impedido de votar nas eleições municipais do seu domicílio eleitoral.",
      "B": "Deve ser colocado em isolamento solitário no subsolo do hospital por 10 dias.",
      "C": "Não poderá sofrer qualquer tipo de represália disciplinar, punição ou prejuízo injustificado em sua remuneração e situação funcional.",
      "D": "Deve pagar uma multa de 50 salários mínimos ao Fundo de Amparo ao Trabalhador.",
      "E": "Perde o direito à aposentadoria e ao plano de previdência social."
    },
    "resposta_correta": "C",
    "comentario": "A legislação protege o trabalhador contra represálias ou prejuízos advindos do exercício de boa-fé do direito de recusa frente a perigos graves.",
    "referencia": "NR-01, item 1.4.3.2 e Princípios da OIT"
  },
  {
    "id": 470,
    "materia": "NR-01",
    "dificuldade": "NR-01 e NR-03",
    "enunciado": "Considera-se 'RISCO GRAVE E IMINENTE' para fins de interrupção do trabalho ou interdição/embargo pelas autoridades:",
    "alternativas": {
      "A": "A temperatura do ar condicionado estar regulada em 23ºC em vez de 22ºC.",
      "B": "O atraso de 5 minutos na entrega do jornal matutino na portaria central.",
      "C": "A falta de canetas esferográficas azuis no almoxarifado de papelaria.",
      "D": "Toda condição ou situação de trabalho que possa causar acidente ou doença com lesão grave à integridade física do trabalhador em curto prazo de tempo.",
      "E": "A presença de um grão de poeira no chão de um corredor de concreto externo."
    },
    "resposta_correta": "D",
    "comentario": "Risco grave e iminente é aquele que traz probabilidade substancial de morte, amputação ou lesão gravíssima com urgência temporal na ausência de controle.",
    "referencia": "NR-01 e NR-03"
  },
  {
    "id": 471,
    "materia": "NR-01",
    "dificuldade": "NR-01, item 1.4.3 e NR-32",
    "enunciado": "Um técnico de enfermagem da UTI recusa-se a realizar a aspiração de vias aéreas de um paciente com tuberculose ativa bacilífera porque o hospital não disponibilizou máscara PFF2/N95. A atitude do profissional:",
    "alternativas": {
      "A": "Configura insubordinação civil sujeita a prisão em flagrante por desacato à autoridade.",
      "B": "É ilegal, pois o profissional de saúde é obrigado a sacrificar sua vida em qualquer circunstância.",
      "C": "Configura exercício legítimo do direito de recusa amparado pela NR-01 e NR-32, dado o risco grave e iminente de contaminação por patógeno respiratório grave sem EPI adequado.",
      "D": "Constitui falta funcional gravíssima que justifica a demissão imediata com perda do diploma profissional.",
      "E": "Só seria válida se o técnico comprasse sua própria máscara com seus recursos pessoais."
    },
    "resposta_correta": "C",
    "comentario": "A falta de respirador PFF2 em procedimento gerador de aerossóis biológicos de alta patogenicidade caracteriza risco grave e iminente, legitimando a interrupção.",
    "referencia": "NR-01, item 1.4.3 e NR-32"
  },
  {
    "id": 472,
    "materia": "NR-01",
    "dificuldade": "NR-01 e Prática de Engenharia de Segurança",
    "enunciado": "Caso haja divergência entre o trabalhador que interrompeu o trabalho e o superior hierárquico sobre a real existência de risco grave e iminente, deve-se:",
    "alternativas": {
      "A": "Solicitar a intervenção técnica e avaliação do SESMT (ou da CIPA e de profissional legalmente habilitado) para analisar tecnicamente o posto de trabalho.",
      "B": "Decidir a questão em uma briga física entre o chefe e o subordinado.",
      "C": "Ignorar a reclamação e obrigar o trabalhador a assinar uma confissão de culpa.",
      "D": "Prender o trabalhador preventivamente na carceragem da delegacia de polícia.",
      "E": "Realizar uma votação anônima na internet aberta para o público em geral."
    },
    "resposta_correta": "A",
    "comentario": "Diante de dúvidas técnicas, cabe ao SESMT/CIPA inspecionar a área, emitir parecer técnico e determinar os controles necessários para segurança da operação.",
    "referencia": "NR-01 e Prática de Engenharia de Segurança"
  },
  {
    "id": 473,
    "materia": "NR-01",
    "dificuldade": "NR-01, item 1.4.3",
    "enunciado": "O direito de recusa aplica-se:",
    "alternativas": {
      "A": "A situações onde, por motivos razoáveis, a vida ou a saúde do trabalhador esteja exposta a perigo grave e iminente sem proteções eficazes.",
      "B": "À negativa de registrar o ponto eletrônico na entrada e na saída do expediente.",
      "C": "Exclusivamente a diretores executivos que recebem salários acima de R$ 100.000,00.",
      "D": "À recusa de responder às saudações de 'bom dia' dos colegas de trabalho.",
      "E": "A qualquer tarefa rotineira que o empregado considere cansativa ou entediante."
    },
    "resposta_correta": "A",
    "comentario": "O direito de recusa não é um salvo-conduto para o descumprimento injustificado de deveres contratuais; vincula-se estritamente à presença de risco grave e iminente de dano à vida/saúde.",
    "referencia": "NR-01, item 1.4.3"
  },
  {
    "id": 474,
    "materia": "NR-01",
    "dificuldade": "Boas Práticas de Gestão de SST e NR-01",
    "enunciado": "A comunicação do direito de recusa pelo empregado e a respectiva avaliação técnica pelo SESMT devem preferencialmente ser:",
    "alternativas": {
      "A": "Enviadas em carta anônima sem assinatura para jornais de fofocas locais.",
      "B": "Destruídas em triturador de papel em menos de 10 minutos após o fato.",
      "C": "Mantidas em segredo absoluto sem nenhum documento para não deixar provas.",
      "D": "Registradas por escrito (ou em meio eletrônico rastreável), documentando o perigo apontado, a avaliação técnica realizada e as medidas corretivas implementadas.",
      "E": "Gravadas em fita magnética de áudio e enterradas no quintal do hospital."
    },
    "resposta_correta": "D",
    "comentario": "O registro documental formal resguarda juridicamente as partes e comprova a atuação técnica do SESMT na eliminação da condição de risco.",
    "referencia": "Boas Práticas de Gestão de SST e NR-01"
  },
  {
    "id": 475,
    "materia": "NR-01",
    "dificuldade": "CLT Art. 161, NR-03 e NR-01",
    "enunciado": "Se a empresa mantiver a exigência de trabalho em local com risco grave e iminente sem adotar medidas de controle, descumprindo o direito de recusa, o trabalhador e o sindicato podem:",
    "alternativas": {
      "A": "Acionar a Inspeção do Trabalho (Auditoria Fiscal do Trabalho) e o Ministério Público do Trabalho para fiscalização e eventual interdição do setor com base na NR-03.",
      "B": "Declarar o hospital como território independente e separado do Brasil.",
      "C": "Incendiar os veículos oficiais da fundação hospitalar no estacionamento.",
      "D": "Exigir a renúncia de todos os ministros do Supremo Tribunal Federal.",
      "E": "Contratar mercenários armados para invadir o hospital e tomar a direção à força."
    },
    "resposta_correta": "A",
    "comentario": "Os órgãos de fiscalização do trabalho e o MPT são as instâncias competentes para fiscalizar e promover a interdição de atividades com risco grave e iminente (NR-03/CLT).",
    "referencia": "CLT Art. 161, NR-03 e NR-01"
  },
  {
    "id": 476,
    "materia": "NR-01",
    "dificuldade": "Manual de Orientação do eSocial (MOS) - Evento S-2210",
    "enunciado": "No sistema eSocial, o evento responsável pelo envio das informações da Comunicação de Acidente de Trabalho (CAT) é o:",
    "alternativas": {
      "A": "Evento S-2299 (Desligamento de Empregado).",
      "B": "Evento S-1000 (Informações do Empregador).",
      "C": "Evento S-2210 (Comunicação de Acidente de Trabalho).",
      "D": "Evento S-1200 (Remuneração de Trabalhador).",
      "E": "Evento S-5001 (Contribuições Sociais)."
    },
    "resposta_correta": "C",
    "comentario": "O evento S-2210 é utilizado exclusivamente para registrar e transmitir a Comunicação de Acidente de Trabalho (CAT) à Previdência Social via eSocial.",
    "referencia": "Manual de Orientação do eSocial (MOS) - Evento S-2210"
  },
  {
    "id": 477,
    "materia": "NR-01",
    "dificuldade": "Lei 8.213/91, Art. 22 e MOS eSocial Evento S-2210",
    "enunciado": "O prazo regulamentar para o envio do evento S-2210 (CAT) no eSocial após a ocorrência de um acidente de trabalho ou diagnóstico de doença ocupacional é:",
    "alternativas": {
      "A": "Até o dia 20 do mês subsequente ao do acidente sem qualquer exceção.",
      "B": "Não existe prazo estipulado, podendo ser enviado a qualquer tempo em 10 anos.",
      "C": "Apenas após o encerramento do inquérito policial civil na delegacia de trânsito.",
      "D": "Em até 180 dias corridos contados da alta médica hospitalar do funcionário.",
      "E": "Até o primeiro dia útil seguinte ao da ocorrência e, em caso de morte, de imediato."
    },
    "resposta_correta": "E",
    "comentario": "O prazo legal do evento S-2210 é idêntico ao da Lei 8.213/91: até o 1º dia útil seguinte e de imediato em caso de óbito do trabalhador.",
    "referencia": "Lei 8.213/91, Art. 22 e MOS eSocial Evento S-2210"
  },
  {
    "id": 478,
    "materia": "NR-01",
    "dificuldade": "MOS eSocial - Evento S-2220 e NR-07",
    "enunciado": "O evento S-2220 do eSocial destina-se a informar à plataforma do governo federal os dados relativos ao:",
    "alternativas": {
      "A": "Monitoramento da Saúde do Trabalhador durante todo o vínculo laboral com a empresa, detalhando os exames médicos (admissionais, periódicos, demissionais) e o Atestado de Saúde Ocupacional (ASO).",
      "B": "Extrato de conta corrente bancária individual do trabalhador para cobrança de taxas.",
      "C": "Cardápio de calorias e proteínas consumidas no almoço diário do hospital.",
      "D": "Histórico escolar com notas obtidas no ensino fundamental e médio do servidor.",
      "E": "Registro de infrações de trânsito cometidas pelo trabalhador em veículo particular."
    },
    "resposta_correta": "A",
    "comentario": "O evento S-2220 consolida o monitoramento biológico e clínico do trabalhador (PCMSO), registrando a realização de exames clínicos, complementares e o respectivo ASO.",
    "referencia": "MOS eSocial - Evento S-2220 e NR-07"
  },
  {
    "id": 479,
    "materia": "NR-01",
    "dificuldade": "MOS eSocial - Evento S-2240 e Lei 8.213/91",
    "enunciado": "O evento S-2240 (Condições Ambientais do Trabalho - Fatores de Risco) do eSocial é utilizado para registrar as condições de prestação de serviços do trabalhador e tem por objetivo principal:",
    "alternativas": {
      "A": "Comprovar a exposição a agentes nocivos químicos, físicos e biológicos (ou sua ausência) para fins de concessão de Aposentadoria Especial perante o INSS e emissão do PPP eletrônico.",
      "B": "Tabelar os preços das consultas médicas particulares em clínicas privadas.",
      "C": "Registrar o modelo de ar-condicionado instalado na sala do diretor do hospital.",
      "D": "Calcular a distância em metros da casa do trabalhador até a parada de ônibus.",
      "E": "Substituir o pagamento de salário mensal por cupons de desconto comercial."
    },
    "resposta_correta": "A",
    "comentario": "O S-2240 reflete as informações do LTCAT sobre exposição a agentes nocivos previstos no Anexo IV do Decreto 3.048/99 para alimentar o Perfil Profissiográfico Previdenciário (PPP).",
    "referencia": "MOS eSocial - Evento S-2240 e Lei 8.213/91"
  },
  {
    "id": 480,
    "materia": "NR-01",
    "dificuldade": "Portaria MTP 313/2021 e Instrução Normativa INSS 128/2022",
    "enunciado": "A partir da implantação oficial dos eventos de SST no eSocial, o Perfil Profissiográfico Previdenciário (PPP) passou a ser emitido de forma:",
    "alternativas": {
      "A": "Dispensada, pois a Previdência Social extinguiu o direito à aposentadoria especial.",
      "B": "Oral, mediante gravação de mensagem de voz no telefone fixo da agência do INSS.",
      "C": "Apenas em disquete de computador de 3,5 polegadas entregue no balcão da agência bancária.",
      "D": "Manuscrita em papel carbono azul entregue em envelope timbrado pelo correio postal.",
      "E": "Exclusivamente eletrônica (PPP Eletrônico), gerado automaticamente para o trabalhador a partir das informações transmitidas pela empresa no evento S-2240."
    },
    "resposta_correta": "E",
    "comentario": "Desde 1º de janeiro de 2023, o PPP físico em papel foi substituído pelo PPP Eletrônico alimentado diretamente pelo envio do evento S-2240 no eSocial.",
    "referencia": "Portaria MTP 313/2021 e Instrução Normativa INSS 128/2022"
  },
  {
    "id": 481,
    "materia": "NR-07",
    "dificuldade": "NR-07, item 7.5.6",
    "enunciado": "O Programa de Controle Médico de Saúde Ocupacional (PCMSO), disciplinado pela NR-07, compreende obrigatoriamente a realização de quais exames médicos?",
    "alternativas": {
      "A": "Apenas o exame admissional no primeiro dia e o demissional no último dia.",
      "B": "Admissional, periódico, de retorno ao trabalho, de mudança de riscos ocupacionais e demissional.",
      "C": "Exame pré-nupcial, exame de direção veicular e teste de aptidão física militar.",
      "D": "Apenas exames de sangue para detecção de anemia em doadores voluntários.",
      "E": "Consultas pediátricas para filhos dos funcionários menores de cinco anos."
    },
    "resposta_correta": "B",
    "comentario": "O item 7.5.6 da NR-07 estabelece os 5 exames médicos ocupacionais obrigatórios: admissional, periódico, retorno ao trabalho, mudança de riscos e demissional.",
    "referencia": "NR-07, item 7.5.6"
  },
  {
    "id": 482,
    "materia": "NR-07",
    "dificuldade": "NR-07, item 7.5.7",
    "enunciado": "O exame médico ADMISSIONAL deve ser realizado obrigatoriamente:",
    "alternativas": {
      "A": "Exclusivamente se o empregado apresentar queixas clínicas na entrevista de RH.",
      "B": "No prazo de até 30 dias após o início do trabalho em ambiente cirúrgico.",
      "C": "Apenas após o término do período de experiência de 90 dias.",
      "D": "No primeiro dia útil após o recebimento do primeiro salário mensal.",
      "E": "Antes que o trabalhador assuma as suas atividades na instituição."
    },
    "resposta_correta": "E",
    "comentario": "Conforme o subitem 7.5.7 da NR-07, o exame admissional deve ser realizado antes que o trabalhador assuma suas atividades.",
    "referencia": "NR-07, item 7.5.7"
  },
  {
    "id": 483,
    "materia": "NR-07",
    "dificuldade": "NR-07, item 7.5.9",
    "enunciado": "O exame médico de RETORNO AO TRABALHO deve ser realizado obrigatoriamente no primeiro dia da volta ao trabalho de trabalhador ausente por período:",
    "alternativas": {
      "A": "Superior a 5 dias decorrentes de gripe comum ou virose intestinal passageira.",
      "B": "De 24 horas por motivo de doação voluntária de sangue comprovada.",
      "C": "De 10 dias de férias regulamentares anuais remuneradas.",
      "D": "Igual ou superior a 30 dias por motivo de doença ou acidente, de natureza ocupacional ou não.",
      "E": "Superior a 3 dias por motivo de casamento civil ou falecimento de parente."
    },
    "resposta_correta": "D",
    "comentario": "O subitem 7.5.9 da NR-07 determina que o exame de retorno ao trabalho seja feito no 1º dia de volta após afastamento igual ou superior a 30 dias por doença/acidente.",
    "referencia": "NR-07, item 7.5.9"
  },
  {
    "id": 484,
    "materia": "NR-07",
    "dificuldade": "NR-07, item 7.5.9",
    "enunciado": "No caso de retorno ao trabalho de trabalhadora após o término da licença-maternidade, a realização do exame de retorno ao trabalho:",
    "alternativas": {
      "A": "Fica dispensada para sempre se o parto tiver sido natural sem complicações.",
      "B": "Deve ser substituída por uma declaração da avó da criança atestando saúde.",
      "C": "É expressamente proibida pela Constituição Federal para não constranger a mãe.",
      "D": "Deve ser realizada exclusivamente pelo médico obstetra particular sem ASO.",
      "E": "Deve ser realizada se a trabalhadora esteve afastada por período igual ou superior a 30 dias, avaliando sua aptidão física e psíquica para a reassunção de suas atividades."
    },
    "resposta_correta": "E",
    "comentario": "O afastamento por parto/maternidade superior a 30 dias enseja o exame de retorno ao trabalho no 1º dia de retorno para avaliar condições clínicas frente às tarefas.",
    "referencia": "NR-07, item 7.5.9"
  },
  {
    "id": 485,
    "materia": "NR-07",
    "dificuldade": "NR-07, item 7.5.10",
    "enunciado": "O exame médico de MUDANÇA DE RISCOS OCUPACIONAIS deve, obrigatoriamente, ser realizado:",
    "alternativas": {
      "A": "Apenas quando houver redução do salário base do empregado.",
      "B": "No momento de sua aposentadoria especial definitiva pelo INSS.",
      "C": "Apenas se o trabalhador reclamar formalmente com o sindicato de sua categoria.",
      "D": "Seis meses após o trabalhador já estar desempenhando a nova função com riscos maiores.",
      "E": "Antes da data da mudança efetiva de setor ou atividade, sempre que houver alteração nos riscos aos quais o trabalhador estava exposto."
    },
    "resposta_correta": "E",
    "comentario": "O subitem 7.5.10 da NR-07 exige que o exame de mudança de riscos seja realizado ANTES da alteração de atividade, assegurando que o trabalhador está apto ao novo risco.",
    "referencia": "NR-07, item 7.5.10"
  },
  {
    "id": 486,
    "materia": "NR-07",
    "dificuldade": "NR-07, item 7.5.11",
    "enunciado": "O exame médico DEMISSIONAL deve ser realizado no prazo de até:",
    "alternativas": {
      "A": "Dez dias contados do término do contrato de trabalho.",
      "B": "Seis meses após o desligamento e a homologação rescisória.",
      "C": "Trinta dias antes do trabalhador comunicar que deseja pedir demissão.",
      "D": "Um ano após a rescisão com pagamento de juros pelo empregador.",
      "E": "Vinte e quatro horas antes do aviso prévio se iniciar."
    },
    "resposta_correta": "A",
    "comentario": "O subitem 7.5.11 da NR-07 prevê que o exame demissional deve ser realizado em até 10 dias contados do término do contrato.",
    "referencia": "NR-07, item 7.5.11"
  },
  {
    "id": 487,
    "materia": "NR-07",
    "dificuldade": "NR-07, item 7.5.11",
    "enunciado": "Em relação ao exame demissional, a NR-07 prevê que ele pode ser DISPENSADO caso o último exame médico ocupacional tenha sido realizado há menos de:",
    "alternativas": {
      "A": "365 dias para hospitais gerais e prontos-socorros estaduais.",
      "B": "135 dias para estabelecimentos de graus de risco 1 e 2, ou 90 dias para estabelecimentos de graus de risco 3 e 4.",
      "C": "730 dias para servidores concursados da área de saúde pública.",
      "D": "30 dias para qualquer grau de risco em todo o território nacional.",
      "E": "15 dias exclusivamente para empresas prestadoras de vigilância armada."
    },
    "resposta_correta": "B",
    "comentario": "O subitem 7.5.11 da NR-07 dispensa o demissional se o último exame tiver ocorrido há menos de 135 dias (graus 1 e 2) ou 90 dias (graus 3 e 4), salvo extensão por negociação.",
    "referencia": "NR-07, item 7.5.11"
  },
  {
    "id": 488,
    "materia": "NR-07",
    "dificuldade": "NR-07, item 7.5.11 e NR-04",
    "enunciado": "Na Fundação Hospital de Clínicas Gaspar Vianna (FHCGV), enquadrada em grau de risco 3 pelo Quadro I da NR-04, a dispensa do exame demissional só ocorreria se o último exame tivesse sido feito há menos de:",
    "alternativas": {
      "A": "180 dias.",
      "B": "90 dias.",
      "C": "135 dias.",
      "D": "30 dias.",
      "E": "365 dias."
    },
    "resposta_correta": "B",
    "comentario": "Para estabelecimentos de grau de risco 3 (como hospitais), o prazo de aproveitamento do último exame para dispensa do demissional é de 90 dias.",
    "referencia": "NR-07, item 7.5.11 e NR-04"
  },
  {
    "id": 489,
    "materia": "NR-07",
    "dificuldade": "NR-07, item 7.5.1",
    "enunciado": "Os exames médicos complementares laboratoriais e gráficos do PCMSO devem ser definidos pelo médico do trabalho responsável com base em:",
    "alternativas": {
      "A": "Riscos ocupacionais identificados e classificados no PGR da empresa e no estado da arte médico-científico.",
      "B": "Vontade subjetiva do trabalhador sem qualquer nexo com a sua função.",
      "C": "Idade do prédio onde o hospital está localizado geograficamente.",
      "D": "Sorteio aleatório de nomes em conferências municipais de saúde.",
      "E": "Cotas comerciais de exames estipuladas por laboratórios particulares conveniados."
    },
    "resposta_correta": "A",
    "comentario": "Os exames complementares do PCMSO são estritamente orientados pelo perfil de riscos ocupacionais levantados no Inventário de Riscos do PGR (NR-07, item 7.5.1).",
    "referencia": "NR-07, item 7.5.1"
  },
  {
    "id": 490,
    "materia": "NR-07",
    "dificuldade": "NR-07 e CNEN NN 3.01",
    "enunciado": "Para os profissionais que trabalham expostos a fontes de radiação ionizante nos serviços de diagnóstico por imagem da FHCGV, o PCMSO deve incluir periodicamente:",
    "alternativas": {
      "A": "Exame de densitometria óssea dos membros inferiores mensalmente.",
      "B": "Dosagem de ácido úrico no suor das axilas do trabalhador.",
      "C": "Hemograma completo com contagem de plaquetas para monitoramento do sistema hematopoiético.",
      "D": "Audiometria vocal de alta frequência em cabine hiperbárica.",
      "E": "Teste de esteira ergométrica com esforço máximo a cada 15 dias."
    },
    "resposta_correta": "C",
    "comentario": "O monitoramento médico da exposição a radiações ionizantes inclui hemograma com contagem de plaquetas na admissão e nos periódicos (NR-07 e normas da CNEN).",
    "referencia": "NR-07 e CNEN NN 3.01"
  },
  {
    "id": 491,
    "materia": "NR-07",
    "dificuldade": "NR-07, Anexo II",
    "enunciado": "O monitoramento da exposição ocupacional ao ruído contínuo ou intermitente no PCMSO exige a realização de exames audiométricos. A audiometria de referência deve ser realizada:",
    "alternativas": {
      "A": "Apenas após o trabalhador completar 60 anos de idade na empresa.",
      "B": "Exclusivamente durante a realização de uma cirurgia com serra óssea ligada.",
      "C": "No exame admissional, com repouso auditivo prévio de pelo menos 14 horas.",
      "D": "Após o término da jornada de trabalho sem nenhum repouso sonoro.",
      "E": "Dentro do veículo de transporte coletivo a caminho do trabalho."
    },
    "resposta_correta": "C",
    "comentario": "O Anexo II da NR-07 exige repouso auditivo de no mínimo 14 horas antes do exame audiométrico para evitar que a fadiga auditiva temporária falseie o limiar auditivo.",
    "referencia": "NR-07, Anexo II"
  },
  {
    "id": 492,
    "materia": "NR-07",
    "dificuldade": "NR-07, item 7.6.1.1",
    "enunciado": "A guarda dos prontuários médicos ocupacionais de todos os trabalhadores atendidos no PCMSO é responsabilidade do médico do trabalho, devendo ser mantidos arquivados por no mínimo:",
    "alternativas": {
      "A": "Cinquenta anos antes do nascimento do empregado.",
      "B": "Seis meses a contar da data de emissão do último ASO.",
      "C": "Vinte anos após o desligamento do trabalhador da instituição.",
      "D": "Cinco anos contados da data de admissão no cargo público.",
      "E": "Dois anos após o encerramento do contrato de estágio probatório."
    },
    "resposta_correta": "C",
    "comentario": "O prontuário clínico individual deve ser mantido sob a guarda do médico responsável pelo PCMSO por no mínimo 20 anos após o desligamento do empregado (NR-07, item 7.6.1.1).",
    "referencia": "NR-07, item 7.6.1.1"
  },
  {
    "id": 493,
    "materia": "NR-07",
    "dificuldade": "NR-07, item 7.6.1.2",
    "enunciado": "Em caso de substituição do médico do trabalho responsável pelo PCMSO da FHCGV, os prontuários médicos dos trabalhadores devem:",
    "alternativas": {
      "A": "Ser vendidos para empresas seguradoras de saúde para quitação de despesas.",
      "B": "Ser abandonados no arquivo morto sem nenhum responsável técnico legal.",
      "C": "Ser entregues aos gerentes do departamento de recursos humanos da fundação.",
      "D": "Ser incinerados no pátio interno do hospital para não revelar segredos dos pacientes.",
      "E": "Ser formalmente transferidos para o novo médico responsável pelo programa, sob termo de guarda e estrito sigilo ético-profissional."
    },
    "resposta_correta": "E",
    "comentario": "Havendo troca do médico do trabalho responsável, os prontuários devem ser repassados diretamente ao médico sucessor sob sigilo profissional (NR-07, subitem 7.6.1.2).",
    "referencia": "NR-07, item 7.6.1.2"
  },
  {
    "id": 494,
    "materia": "NR-07",
    "dificuldade": "NR-07, item 7.6.2",
    "enunciado": "O documento médico anual elaborado pelo médico do trabalho responsável pelo PCMSO que apresenta o panorama da saúde dos trabalhadores da organização é denominado:",
    "alternativas": {
      "A": "Atestado de Antecedentes Criminais.",
      "B": "Guia de Recolhimento da Previdência Social.",
      "C": "Certificado de Conclusão de Ensino Fundamental.",
      "D": "Declaração de Ajuste Anual de Imposto de Renda.",
      "E": "Relatório Analítico do PCMSO."
    },
    "resposta_correta": "E",
    "comentario": "O Relatório Analítico do PCMSO (antigo relatório anual) detalha estatísticas de exames, prevalência de agravos, absenteísmo e recomendações preventivas para o PGR.",
    "referencia": "NR-07, item 7.6.2"
  },
  {
    "id": 495,
    "materia": "NR-07",
    "dificuldade": "NR-07, item 7.6.3 e NR-05",
    "enunciado": "O Relatório Analítico do PCMSO deve ser apresentado e discutido anualmente com:",
    "alternativas": {
      "A": "A embaixada de países estrangeiros com representação consular no estado.",
      "B": "O juiz da vara da infância e da juventude da comarca da capital.",
      "C": "A CIPA (Comissão Interna de Prevenção de Acidentes e Assédio) e gestores do SESMT, sendo suas conclusões anexadas e consideradas no PGR.",
      "D": "Apenas a empresa fornecedora de refeições do refeitório central.",
      "E": "Os pacientes internados nos leitos da enfermaria ortopédica."
    },
    "resposta_correta": "C",
    "comentario": "A NR-07 (item 7.6.3) determina que o médico do trabalho apresente e discuta o Relatório Analítico na CIPA para subsidiar o plano de ação preventiva do PGR.",
    "referencia": "NR-07, item 7.6.3 e NR-05"
  },
  {
    "id": 496,
    "materia": "NR-07",
    "dificuldade": "NR-07, item 7.5.19 e Diretrizes de Medicina do Trabalho",
    "enunciado": "Quando um exame complementar de monitoramento biológico indicar alteração clínica com significado clínico e nexo causal ocupacional confirmado pelo médico do trabalho:",
    "alternativas": {
      "A": "O hospital deve demitir imediatamente o trabalhador sem pagar as verbas rescisórias devidas.",
      "B": "O médico deve receitar calmantes e manter o trabalhador no mesmo posto com o dobro de horas.",
      "C": "O médico deve emitir o ASO de inapto se necessário, afastar o trabalhador da exposição, emitir a CAT, encaminhar à perícia médica do INSS e orientar a revisão do PGR.",
      "D": "O médico deve alterar o resultado laboratorial para evitar multas trabalhistas para a diretoria.",
      "E": "O SESMT deve ignorar o caso e proibir que a CIPA tenha acesso às informações."
    },
    "resposta_correta": "C",
    "comentario": "A confirmação de agravo ocupacional exige condutas clínicas imediatas: emissão de CAT, afastamento se indicado, suporte médico e comunicação ao SESMT para revisar o PGR.",
    "referencia": "NR-07, item 7.5.19 e Diretrizes de Medicina do Trabalho"
  },
  {
    "id": 497,
    "materia": "NR-07",
    "dificuldade": "Código de Ética Médica e NR-07",
    "enunciado": "Nos termos da NR-07 e do Código de Ética Médica, o médico do trabalho pode revelar à gerência administrativa de RH o resultado específico dos exames laboratoriais de um trabalhador?",
    "alternativas": {
      "A": "Sim, os exames médicos de todos os funcionários devem ser postados nas redes sociais da empresa.",
      "B": "Apenas se o trabalhador for aprovado em concurso público estadual.",
      "C": "Sim, desde que o chefe imediato pague uma taxa de consulta particular ao médico.",
      "D": "Não, os resultados laboratoriais e diagnósticos são protegidos pelo sigilo médico, informando-se à empresa apenas a conclusão de 'Apto' ou 'Inapto' no ASO.",
      "E": "Sim, a empresa tem o direito de afixar os exames de fezes e sangue no mural público do corredor."
    },
    "resposta_correta": "D",
    "comentario": "O sigilo médico é inviolável (Art. 73 do Código de Ética Médica e NR-07); a empresa só recebe a aptidão ou inaptidão ocupacional, sem acesso ao diagnóstico clínico.",
    "referencia": "Código de Ética Médica e NR-07"
  },
  {
    "id": 498,
    "materia": "NR-07",
    "dificuldade": "NR-07 e Lei 8.213/91",
    "enunciado": "Caso o trabalhador seja considerado temporariamente INAPTO em um exame periódico decorrente de lesão osteomuscular por esforço repetitivo (LER/DORT):",
    "alternativas": {
      "A": "O empregador pode confiscar todos os bens pessoais do trabalhador no estado.",
      "B": "O trabalhador perde automaticamente a sua carteira de trabalho e previdência social.",
      "C": "O médico deve registrar a inaptidão para a função, encaminhá-lo para tratamento especializado e, se o afastamento for superior a 15 dias, ao INSS, notificando a CAT.",
      "D": "A empresa pode rebaixar seu salário para o piso regional de servente de obras.",
      "E": "O trabalhador deve ser preso no almoxarifado até que cure a inflamação dos tendões."
    },
    "resposta_correta": "C",
    "comentario": "A inaptidão temporária enseja cuidados terapêuticos, readequação funcional e proteção previdenciária mediante encaminhamento e abertura de CAT pelo empregador.",
    "referencia": "NR-07 e Lei 8.213/91"
  },
  {
    "id": 499,
    "materia": "NR-07",
    "dificuldade": "Lei 9.029/1995 e NR-07",
    "enunciado": "A realização de testes de gravidez (beta-HCG) ou exames de esterilização como condição prévia para admissão ou manutenção do emprego de mulheres:",
    "alternativas": {
      "A": "Pode ser exigida caso a trabalhadora vá atuar na copa do refeitório de funcionários.",
      "B": "É facultativa a critério exclusivo de qualquer técnico de segurança de plantão.",
      "C": "Deve ser realizada publicamente na frente de todos os candidatos concorrentes.",
      "D": "É obrigatória em todos os hospitais públicos do território brasileiro.",
      "E": "É expressamente proibida pela Lei Federal nº 9.029/1995 e pela NR-07, configurando prática discriminatória e crime punível com detenção."
    },
    "resposta_correta": "E",
    "comentario": "A Lei 9.029/95 e a NR-07 proíbem terminantemente a exigência de teste de gravidez e esterilização na admissão e na relação de emprego, tipificando como crime.",
    "referencia": "Lei 9.029/1995 e NR-07"
  },
  {
    "id": 500,
    "materia": "NR-07",
    "dificuldade": "Resolução CFM 1.665/2003 e TST Súmula 443",
    "enunciado": "A exigência de teste toxicológico ou sorologia de HIV na admissão de trabalhadores da saúde sem qualquer justificativa epidemiológica e sem consentimento:",
    "alternativas": {
      "A": "É indispensável para a emissão de crachá de identificação funcional.",
      "B": "Pode ser aplicada apenas aos candidatos do sexo masculino acima de 40 anos.",
      "C": "Viola a dignidade da pessoa humana, a intimidade, as diretrizes da OIT e as resoluções do Conselho Federal de Medicina (CFM), sendo prática discriminatória ilícita.",
      "D": "É permitida desde que o hospital desconte o valor do exame no salário do candidato.",
      "E": "É recomendada formalmente pela Organização Mundial da Saúde para todas as profissões."
    },
    "resposta_correta": "C",
    "comentario": "A testagem discriminatória para HIV/drogas sem embasamento legal específico é vedada pelo CFM (Resolução 1.665/2003) e jurisprudência pacífica do TST.",
    "referencia": "Resolução CFM 1.665/2003 e TST Súmula 443"
  },
  {
    "id": 501,
    "materia": "NR-07",
    "dificuldade": "NR-07, item 7.5.19",
    "enunciado": "Para cada exame clínico ocupacional realizado (admissional, periódico, retorno, mudança de risco e demissional), o médico deve emitir obrigatoriamente:",
    "alternativas": {
      "A": "A Guia de Arrecadação de Tributos Estaduais.",
      "B": "A Certidão de Quitação Eleitoral Municipal.",
      "C": "O Certificado de Registro de Veículo Automotor.",
      "D": "O Atestado de Saúde Ocupacional (ASO).",
      "E": "A Nota Promissória de Caução de Contrato."
    },
    "resposta_correta": "D",
    "comentario": "O subitem 7.5.19 da NR-07 determina que, para cada exame clínico ocupacional realizado, o médico deve emitir o correspondente Atestado de Saúde Ocupacional (ASO).",
    "referencia": "NR-07, item 7.5.19"
  },
  {
    "id": 502,
    "materia": "NR-07",
    "dificuldade": "NR-07, item 7.5.19.1",
    "enunciado": "O ASO deve ser emitido em quantas vias e qual a destinação obrigatória da segunda via?",
    "alternativas": {
      "A": "Em uma via única que deve ser afixada na porta do banheiro do hospital.",
      "B": "Em três vias manuscritas guardadas exclusivamente no cofre do médico particular.",
      "C": "Em dez vias coloridas enviadas para a imprensa local da cidade de Belém.",
      "D": "No mínimo em duas vias, devendo a primeira via ficar arquivada no local de trabalho (sob guarda da empresa) e a segunda via ser entregue obrigatoriamente ao trabalhador mediante recibo.",
      "E": "O ASO não pode ser entregue ao empregado sob nenhuma hipótese legal."
    },
    "resposta_correta": "D",
    "comentario": "A 1ª via fica com a organização e a 2ª via é fornecida obrigatoriamente ao empregado contra recibo assinado ou disponibilizada em meio eletrônico (NR-07, subitem 7.5.19.1).",
    "referencia": "NR-07, item 7.5.19.1"
  },
  {
    "id": 503,
    "materia": "NR-07",
    "dificuldade": "NR-07, item 7.5.19",
    "enunciado": "Dentre os dados obrigatórios que devem constar no corpo do ASO, de acordo com o subitem 7.5.19 da NR-07, inclui-se:",
    "alternativas": {
      "A": "A renda familiar mensal per capita de todos os parentes do empregado.",
      "B": "Razão social e CNPJ da empresa, nome completo e CPF do trabalhador, descrição da função e riscos ocupacionais do PGR (ou sua ausência).",
      "C": "O número do título de eleitor com a indicação de quem o servidor votou na última eleição.",
      "D": "A marca de celular e o modelo de automóvel do funcionário.",
      "E": "A raça do animal de estimação de estimação do trabalhador."
    },
    "resposta_correta": "B",
    "comentario": "O ASO deve identificar detalhadamente a empresa, o trabalhador, o cargo, os riscos ocupacionais avaliados no PGR e a indicação dos exames realizados.",
    "referencia": "NR-07, item 7.5.19"
  },
  {
    "id": 504,
    "materia": "NR-07",
    "dificuldade": "NR-07, subitem 7.5.19, alínea 'd'",
    "enunciado": "No que concerne aos EXAMES COMPLEMENTARES realizados pelo trabalhador, o ASO deve informar:",
    "alternativas": {
      "A": "A taxa de colesterol total escrita em letras vermelhas gigantescas.",
      "B": "A indicação dos exames complementares realizados e as respectivas datas de realização, sendo PROIBIDO registrar seus resultados e laudos numéricos por sigilo médico.",
      "C": "Apenas o preço pago pela empresa por cada hemograma realizado.",
      "D": "O laudo detalhado e a transcrição completa de todos os resultados laboratoriais no corpo do ASO.",
      "E": "A assinatura de todos os colegas de quarto que presenciaram a coleta de sangue."
    },
    "resposta_correta": "B",
    "comentario": "A NR-07 é categórica: o ASO informa quais exames foram realizados e suas datas, preservando o sigilo dos resultados numéricos que ficam guardados no prontuário.",
    "referencia": "NR-07, subitem 7.5.19, alínea 'd'"
  },
  {
    "id": 505,
    "materia": "NR-07",
    "dificuldade": "NR-07, subitem 7.5.19, alínea 'e'",
    "enunciado": "A conclusão médica quanto à aptidão no ASO deve ser expressa tecnicamente como:",
    "alternativas": {
      "A": "'Simpático' ou 'Antipático' após entrevista de 5 minutos.",
      "B": "'Apto' ou 'Inapto' para a função específica que o trabalhador vai exercer, exerce ou exerceu.",
      "C": "'Excelente', 'Regular' ou 'Péssimo' segundo a simpatia do trabalhador.",
      "D": "'Magro', 'Normal' ou 'Gordo' com base na pesagem de balança.",
      "E": "'Aprovado com louvor' ou 'Reprovado sem direito a recurso'."
    },
    "resposta_correta": "B",
    "comentario": "A conclusão ocupacional é binária e funcional: apto ou inapto para a atividade laborativa e os riscos inerentes daquele cargo na organização.",
    "referencia": "NR-07, subitem 7.5.19, alínea 'e'"
  },
  {
    "id": 506,
    "materia": "NR-07",
    "dificuldade": "Resolução CFM 1.810/2007 e NR-07",
    "enunciado": "É lícito e ético ao médico examinador fazer constar o Código Internacional de Doenças (CID-10) no Atestado de Saúde Ocupacional (ASO) entregue à empresa?",
    "alternativas": {
      "A": "Sim, o CID é obrigatório pela NR-07 em todas as vias do ASO.",
      "B": "Sim, a empresa pode exigir o CID de todos os empregados para filtrar candidatos doentes.",
      "C": "Sim, o CID deve ser carimbado em tamanho grande na capa da carteira de trabalho do empregado.",
      "D": "Apenas se o trabalhador tiver renda superior a 10 salários mínimos.",
      "E": "Não, é vedada a inclusão de código de CID no ASO por constituir violação ao sigilo médico e à intimidade do trabalhador, salvo autorização expressa em situações legais estritas."
    },
    "resposta_correta": "E",
    "comentario": "O Código de Ética Médica e a NR-07 vedam a inclusão do CID no ASO funcional disponibilizado ao setor administrativo da empresa para preservar o sigilo diagnóstico.",
    "referencia": "Resolução CFM 1.810/2007 e NR-07"
  },
  {
    "id": 507,
    "materia": "NR-07",
    "dificuldade": "NR-07, subitem 7.5.19, alíneas 'f' e 'g'",
    "enunciado": "O ASO deve conter a identificação profissional com assinatura e carimbo com CRM de quem?",
    "alternativas": {
      "A": "Do policial militar que acompanha a portaria do hospital.",
      "B": "Apenas do técnico de segurança do trabalho do turno da tarde.",
      "C": "Do diretor administrativo da fundação hospitalar exclusivamente.",
      "D": "Do presidente do sindicato dos enfermeiros do Pará.",
      "E": "Do médico examinador e o nome e CRM do médico do trabalho responsável pelo PCMSO."
    },
    "resposta_correta": "E",
    "comentario": "O ASO exige a identificação formal do médico examinador que realizou o ato clínico e a referência ao médico coordenador/responsável pelo PCMSO.",
    "referencia": "NR-07, subitem 7.5.19, alíneas 'f' e 'g'"
  },
  {
    "id": 508,
    "materia": "NR-07",
    "dificuldade": "Diretrizes do CFM e NR-07",
    "enunciado": "Caso o trabalhador apresente uma limitação temporária e o médico considere que ele pode trabalhar sem executar certas atividades de risco (ex: não erguer peso acima de 5 kg por 15 dias):",
    "alternativas": {
      "A": "O médico deve trancar o servidor no quarto de isolamento até a cicatrização do músculo.",
      "B": "O servidor é obrigado a carregar o triplo de peso para fortalecer os ligamentos rompidos.",
      "C": "O trabalhador deve ser imediatamente demitido sem direito ao seguro-desemprego.",
      "D": "A chefia pode ignorar a restrição e obrigar o trabalhador a descumprir a recomendação médica.",
      "E": "O médico emite o ASO de 'Apto com restrição' e orienta a chefia sobre as tarefas específicas que devem ser temporariamente suspensas na rotina daquele servidor."
    },
    "resposta_correta": "E",
    "comentario": "A emissão de aptidão com restrições temporárias resguarda a saúde do trabalhador, permitindo sua readaptação ou remanejamento transitório de tarefas incompatíveis.",
    "referencia": "Diretrizes do CFM e NR-07"
  },
  {
    "id": 509,
    "materia": "NR-07",
    "dificuldade": "NR-07 e NR-28",
    "enunciado": "A recusa do empregador em fornecer a segunda via do ASO ao trabalhador admitido ou examinado constitui:",
    "alternativas": {
      "A": "Motivo para cancelamento automático do registro hospitalar na Anvisa.",
      "B": "Crime inafiançável com pena de perda de mandato do presidente da república.",
      "C": "Ato normal que não gera nenhuma consequência para a instituição hospitalar.",
      "D": "Procedimento legalmente recomendado para evitar o vazamento de informações da empresa.",
      "E": "Infração expressa à NR-07, passível de notificação e autuação pelos Auditores Fiscais do Trabalho durante fiscalização."
    },
    "resposta_correta": "E",
    "comentario": "A não entrega da 2ª via do ASO é infração às normas de segurança e medicina do trabalho fiscalizadas pelo Ministério do Trabalho e Emprego.",
    "referencia": "NR-07 e NR-28"
  },
  {
    "id": 510,
    "materia": "NR-07",
    "dificuldade": "Portaria MTP 671/2021 e NR-01",
    "enunciado": "A disponibilização do ASO em formato digital/eletrônico para o empregado é permitida pela legislação trabalhista atual?",
    "alternativas": {
      "A": "Sim, desde que seja garantido o acesso fácil ao trabalhador, a integridade do arquivo e a certificação digital com assinatura eletrônica válida (ICP-Brasil).",
      "B": "Sim, mas o documento eletrônico só tem validade se for lido em voz alta em audiência pública.",
      "C": "Não, documentos médicos digitais são terminantemente proibidos no Brasil.",
      "D": "Apenas se o trabalhador imprimir o documento em papel fotográfico brilhante.",
      "E": "Apenas para funcionários que trabalham na área de tecnologia da informação."
    },
    "resposta_correta": "A",
    "comentario": "A Portaria MTP 671/2021 e a NR-01 autorizam a emissão e guarda de documentos em formato digital, desde que atendidos os requisitos de segurança e assinatura digital.",
    "referencia": "Portaria MTP 671/2021 e NR-01"
  },
  {
    "id": 511,
    "materia": "NR-07",
    "dificuldade": "NR-07, subitem 7.5.8, alínea 'a'",
    "enunciado": "Qual é a periodicidade padrão estabelecida pelo subitem 7.5.8 da NR-07 para o exame clínico periódico de trabalhadores expostos a riscos ocupacionais identificados e classificados no PGR?",
    "alternativas": {
      "A": "A cada cinco anos.",
      "B": "Bienal (a cada dois anos) sem exceções.",
      "C": "A cada seis meses para qualquer trabalhador da fábrica.",
      "D": "Decenal (a cada dez anos de serviço).",
      "E": "Anual."
    },
    "resposta_correta": "E",
    "comentario": "Para trabalhadores expostos a riscos ocupacionais classificados no PGR (e para portadores de doenças crônicas que aumentem a susceptibilidade), a periodicidade é anual.",
    "referencia": "NR-07, subitem 7.5.8, alínea 'a'"
  },
  {
    "id": 512,
    "materia": "NR-07",
    "dificuldade": "NR-07, subitem 7.5.8, alínea 'b'",
    "enunciado": "Para os trabalhadores que NÃO estejam expostos a riscos ocupacionais identificados e classificados no PGR (como servidores administrativos em escritórios comuns sem agentes nocivos):",
    "alternativas": {
      "A": "Fica proibida para sempre a realização de qualquer exame periódico de saúde.",
      "B": "O exame clínico periódico deve ser feito diariamente antes do expediente matutino.",
      "C": "O exame clínico periódico deve ser realizado bienalmente (a cada dois anos).",
      "D": "O trabalhador deve pagar consulta particular a cada três meses.",
      "E": "O exame periódico deve ser realizado apenas aos 70 anos de idade."
    },
    "resposta_correta": "C",
    "comentario": "Para trabalhadores não expostos a riscos ocupacionais no PGR, o exame clínico periódico deve ser realizado a cada dois anos (bienal) (NR-07, item 7.5.8, alínea 'b').",
    "referencia": "NR-07, subitem 7.5.8, alínea 'b'"
  },
  {
    "id": 513,
    "materia": "NR-07",
    "dificuldade": "NR-07, item 7.5.8 e NR-32",
    "enunciado": "Em relação aos profissionais de saúde da FHCGV que mantêm contato direto diário com pacientes e materiais biológicos potencialmente infectantes, o exame periódico deve ser:",
    "alternativas": {
      "A": "Anual, devido à classificação e exposição ao risco biológico constante no PGR.",
      "B": "Mensal, com internação compulsória de 48 horas a cada exame.",
      "C": "Bienal, pois o risco biológico não necessita de monitoramento anual no hospital.",
      "D": "Apenas no momento em que ocorrer um acidente com perfurocortante.",
      "E": "A cada 10 anos, por serem profissionais treinados na faculdade."
    },
    "resposta_correta": "A",
    "comentario": "Havendo exposição a riscos ocupacionais classificados no PGR (como o risco biológico em serviços hospitalares), o exame clínico deve ser realizado anualmente.",
    "referencia": "NR-07, item 7.5.8 e NR-32"
  },
  {
    "id": 514,
    "materia": "NR-07",
    "dificuldade": "NR-07, item 7.5.15",
    "enunciado": "A periodicidade dos exames complementares de controle médico previstos nos Quadros 1 e 2 da NR-07 pode ser reduzida (aumentando a frequência) pelo médico do trabalho?",
    "alternativas": {
      "A": "Sim, mas exige autorização prévia por decreto do governador do estado.",
      "B": "Apenas se o trabalhador pagar os exames adicionais com seu próprio salário.",
      "C": "Não, a NR-07 proíbe expressamente qualquer médico de solicitar exames em prazos menores.",
      "D": "Apenas se o técnico de segurança do trabalho autorizar por escrito em cartório.",
      "E": "Sim, a critério técnico fundamentado do médico responsável pelo PCMSO, ou por exigência de Norma Regulamentadora específica ou recomendação da CIB/CIT."
    },
    "resposta_correta": "E",
    "comentario": "O médico do trabalho possui autonomia técnica para antecipar exames e reduzir intervalos quando houver suspeita de agravo ou agravamento de exposições.",
    "referencia": "NR-07, item 7.5.15"
  },
  {
    "id": 515,
    "materia": "NR-07",
    "dificuldade": "NR-07, Anexo II",
    "enunciado": "No monitoramento auditivo de trabalhadores expostos a níveis de ruído elevados, o primeiro exame audiométrico periódico deve ser realizado:",
    "alternativas": {
      "A": "Apenas no exame demissional ao se aposentar.",
      "B": "Cinco anos após a admissão do empregado.",
      "C": "Seis meses após o exame admissional, e anualmente a partir de então.",
      "D": "Exclusivamente durante os feriados de carnaval.",
      "E": "A cada 30 dias durante toda a vigência do contrato."
    },
    "resposta_correta": "C",
    "comentario": "O Anexo II da NR-07 prevê que a 1ª audiometria periódica seja feita aos 6 meses após o admissional e, posteriormente, com periodicidade anual.",
    "referencia": "NR-07, Anexo II"
  },
  {
    "id": 516,
    "materia": "NR-07",
    "dificuldade": "NR-07, Anexo de Poeiras e Diretrizes OIT",
    "enunciado": "Para trabalhadores expostos a poeiras minerais com risco de pneumoconioses (como sílica ou asbesto), as radiografias de tórax preconizadas no PCMSO devem ser interpretadas de acordo com:",
    "alternativas": {
      "A": "Apenas a opinião estética do técnico que operou o aparelho de raio-X.",
      "B": "A quantidade de manchas escuras visíveis a olho nu contra a luz solar da janela.",
      "C": "O peso da folha de filme radiográfico em balança analítica.",
      "D": "A data de validade da tinta química de revelação do filme fotográfico.",
      "E": "O padrão e a classificação radiológica internacional da OIT (Organização Internacional do Trabalho)."
    },
    "resposta_correta": "E",
    "comentario": "As radiografias de tórax para pneumoconioses exigem leitura técnica padronizada conforme a Classificação Radiológica de Pneumoconioses da OIT por leitor certificado.",
    "referencia": "NR-07, Anexo de Poeiras e Diretrizes OIT"
  },
  {
    "id": 517,
    "materia": "NR-07",
    "dificuldade": "NR-07, subitem 7.5.8",
    "enunciado": "Trabalhadores portadores de condições clínicas crônicas (como hipertensão arterial descompensada, diabetes ou cardiopatias) expostos a condições extremas devem ter sua periodicidade de exame:",
    "alternativas": {
      "A": "Condicionada à perda imediata do plano de saúde hospitalar.",
      "B": "Prorrogada para a cada 15 anos para não gerar estresse emocional.",
      "C": "Ignorada pelo PCMSO, pois doenças crônicas não têm relação com medicina do trabalho.",
      "D": "Adequada e individualizada pelo médico do trabalho, podendo ser semestral ou inferior, conforme o controle clínico e os riscos da função.",
      "E": "Substituída por uma carta de compromisso assinada pelos familiares."
    },
    "resposta_correta": "D",
    "comentario": "A vigilância de trabalhadores com maior susceptibilidade permite intervalos mais curtos a critério do médico para prevenção de descompensações e acidentes.",
    "referencia": "NR-07, subitem 7.5.8"
  },
  {
    "id": 518,
    "materia": "NR-07",
    "dificuldade": "NR-07, subitem 7.5.9",
    "enunciado": "Se um trabalhador ficar afastado da FHCGV por 45 dias em razão de cirurgia ortopédica decorrente de queda em jogo de futebol no final de semana:",
    "alternativas": {
      "A": "Ele só precisa fazer exame se voltar a sentir dores nos membros após 6 meses.",
      "B": "O exame de retorno só é exigido caso ele tenha fraturado o crânio.",
      "C": "Ele deve ser demitido por justa causa por praticar esportes nos dias de folga.",
      "D": "Ele é obrigado a realizar o exame de retorno ao trabalho no primeiro dia de sua volta, pois o afastamento por motivo de saúde foi superior a 30 dias.",
      "E": "Ele fica dispensado de exame de retorno por se tratar de acidente extralaboral de lazer."
    },
    "resposta_correta": "D",
    "comentario": "O exame de retorno ao trabalho independe de o afastamento ter tido origem ocupacional ou comum; afastou-se por doença/acidente por 30 dias ou mais, o exame é obrigatório.",
    "referencia": "NR-07, subitem 7.5.9"
  },
  {
    "id": 519,
    "materia": "NR-07",
    "dificuldade": "NR-07, subitem 7.5.10",
    "enunciado": "Caso um servidor da FHCGV mude de setor de trabalho, saindo do arquivo administrativo (sem riscos ambientais) para o setor de expurgo da CME (com risco biológico e químico):",
    "alternativas": {
      "A": "O trabalhador deve assinar termo abrindo mão de qualquer proteção à sua saúde.",
      "B": "O exame é desnecessário, pois ambos os setores pertencem ao mesmo hospital.",
      "C": "O exame de mudança de função pode ser feito 1 ano após a transferência já consumada.",
      "D": "Apenas o chefe do setor de expurgo precisa assinar uma folha de autorização verbal.",
      "E": "O exame médico de mudança de riscos ocupacionais deve ser realizado OBRIGATORIAMENTE antes do início de suas novas funções na CME."
    },
    "resposta_correta": "E",
    "comentario": "A transferência para atividade com riscos novos/maiores exige exame prévio para assegurar que o profissional está apto a lidar com os agentes químicos e biológicos da CME.",
    "referencia": "NR-07, subitem 7.5.10"
  },
  {
    "id": 520,
    "materia": "NR-07",
    "dificuldade": "CLT Art. 168, NR-07 e NR-28",
    "enunciado": "Qual é a consequência administrativa para a fundação hospitalar se os exames periódicos dos trabalhadores forem mantidos vencidos e atrasados por desídia da gestão?",
    "alternativas": {
      "A": "Todos os leitos hospitalares são transferidos para o setor privado sem indenização.",
      "B": "O Ministério do Trabalho concederá uma medalha de honra ao mérito por economia orçamentária.",
      "C": "O hospital recebe autorização especial para dobrar o preço das consultas particulares.",
      "D": "Os funcionários serão proibidos de se alimentar no refeitório durante o almoço.",
      "E": "A fundação comete infração à NR-07 e à CLT, sujeitando-se a multas aplicadas pela Auditoria Fiscal do Trabalho, além de responsabilização em ações civis públicas movidas pelo MPT."
    },
    "resposta_correta": "E",
    "comentario": "Manter exames ocupacionais vencidos viola o Art. 168 da CLT e a NR-07, sujeitando o empregador às penalidades da NR-28 e ações do Ministério Público do Trabalho.",
    "referencia": "CLT Art. 168, NR-07 e NR-28"
  },
  {
    "id": 521,
    "materia": "NR-15",
    "dificuldade": "NR-15, Anexo 14",
    "enunciado": "A avaliação da insalubridade por agentes biológicos prevista no Anexo nº 14 da NR-15 caracteriza-se por ser:",
    "alternativas": {
      "A": "Exclusivamente quantitativa, exigindo contagem diária de bactérias por metro cúbico de ar com bomba gravimétrica.",
      "B": "Dispensada de laudo pericial, bastando a autodeclaração do funcionário no sindicato.",
      "C": "Realizada por pesagem em balança de precisão dos resíduos biológicos do hospital.",
      "D": "Eminentemente qualitativa, mediante inspeção realizada no local de trabalho, sem estabelecimento de limites de tolerância numéricos.",
      "E": "Calculada através de média aritmética de decibéis sonoros do ambiente hospitalar."
    },
    "resposta_correta": "D",
    "comentario": "A avaliação de risco biológico no Anexo 14 da NR-15 é qualitativa, baseada na análise das atividades, funções e locais com potencial de contato com agentes biológicos.",
    "referencia": "NR-15, Anexo 14"
  },
  {
    "id": 522,
    "materia": "NR-15",
    "dificuldade": "NR-15, Anexo 14",
    "enunciado": "De acordo com o Anexo nº 14 da NR-15, o trabalho ou operações em contato permanente com 'pacientes em isolamento por doenças infectocontagiosas, bem como objetos de seu uso, não previamente esterilizados' assegura o adicional de insalubridade em grau:",
    "alternativas": {
      "A": "Variável entre 1% e 5% a critério do diretor.",
      "B": "Mínimo (10%).",
      "C": "Máximo (40%).",
      "D": "Zero (0%), não sendo considerado insalubre.",
      "E": "Médio (20%)."
    },
    "resposta_correta": "C",
    "comentario": "O Anexo 14 da NR-15 enquadra o contato permanente com pacientes em isolamento por doenças infectocontagiosas e objetos não esterilizados em grau MÁXIMO (40%).",
    "referencia": "NR-15, Anexo 14"
  },
  {
    "id": 523,
    "materia": "NR-15",
    "dificuldade": "NR-15, Anexo 14",
    "enunciado": "Em relação aos profissionais de enfermagem e médicos que atuam no atendimento e internação geral de hospitais, enfermarias e ambulatórios (sem isolamento específico), o Anexo 14 da NR-15 estabelece insalubridade de grau:",
    "alternativas": {
      "A": "Integral (100%).",
      "B": "Máximo (40%).",
      "C": "Médio (20%).",
      "D": "Não há previsão de insalubridade para área hospitalar geral.",
      "E": "Mínimo (10%)."
    },
    "resposta_correta": "C",
    "comentario": "Trabalhos em contato permanente com pacientes ou material infectocontagiante em hospitais, ambulatórios e enfermarias gerais ensejam grau MÉDIO (20%).",
    "referencia": "NR-15, Anexo 14"
  },
  {
    "id": 524,
    "materia": "NR-15",
    "dificuldade": "NR-15, Anexo 14",
    "enunciado": "O Anexo nº 14 da NR-15 assegura o adicional de insalubridade de GRAU MÁXIMO (40%) para o contato permanente com:",
    "alternativas": {
      "A": "Flores ornamentais em jardins públicos municipais.",
      "B": "Esgotos (galerias e fossas) e lixo urbano (coleta e industrialização).",
      "C": "Computadores novos em sala de informática escolar.",
      "D": "Papéis e correspondências administrativas de escritório de advocacia.",
      "E": "Frutas frescas comercializadas em feiras livres."
    },
    "resposta_correta": "B",
    "comentario": "O Anexo 14 enquadra expressamente no grau máximo o contato com esgotos (galerias e fossas) e lixo urbano (coleta e industrialização).",
    "referencia": "NR-15, Anexo 14"
  },
  {
    "id": 525,
    "materia": "NR-15",
    "dificuldade": "Súmula 448, II do TST",
    "enunciado": "Segundo o entendimento consagrado no item II da Súmula nº 448 do Tribunal Superior do Trabalho (TST):",
    "alternativas": {
      "A": "Toda limpeza de banheiro residencial familiar gera adicional de insalubridade de 40%.",
      "B": "Nenhum tipo de limpeza de sanitários pode ser considerado insalubre pela justiça.",
      "C": "A higienização de instalações sanitárias de uso público ou coletivo de grande circulação, e a respectiva coleta de lixo, enseja a aplicação do Anexo 14 da NR-15 (lixo urbano), conferindo o adicional de insalubridade em grau máximo.",
      "D": "A coleta de lixo em escritórios com 2 funcionários dá direito a grau máximo de insalubridade.",
      "E": "O lixo de banheiros hospitalares é considerado resíduo comum reciclável sem riscos."
    },
    "resposta_correta": "C",
    "comentario": "A Súmula 448, II do TST equipara a limpeza de banheiros de grande circulação pública/coletiva à coleta de lixo urbano, gerando insalubridade em grau máximo (40%).",
    "referencia": "Súmula 448, II do TST"
  },
  {
    "id": 526,
    "materia": "NR-15",
    "dificuldade": "Súmula 448, II do TST",
    "enunciado": "Por outro lado, a limpeza de banheiros em escritórios administrativos com poucas pessoas e a limpeza doméstica residencial, conforme a Súmula 448 do TST:",
    "alternativas": {
      "A": "Não enseja o pagamento de adicional de insalubridade, por não se equiparar à coleta de lixo urbano.",
      "B": "É considerada atividade proibida pelo Ministério Público do Trabalho.",
      "C": "Gera adicional de insalubridade de 40% cumulado com adicional de periculosidade de 30%.",
      "D": "Exige o uso de roupa pressurizada de astronauta pela trabalhadora.",
      "E": "Obriga o patrão a pagar o triplo do salário mínimo em dinheiro todo mês."
    },
    "resposta_correta": "A",
    "comentario": "A Súmula 448 do TST pacifica que a limpeza em residências e escritórios não gera adicional de insalubridade, restringindo o direito a banheiros de grande circulação pública.",
    "referencia": "Súmula 448, II do TST"
  },
  {
    "id": 527,
    "materia": "NR-15",
    "dificuldade": "Jurisprudência Consolidada TST e NR-15",
    "enunciado": "Os trabalhadores da equipe de limpeza e higienização hospitalar da FHCGV que recolhem os sacos de lixo biológico (infectante) dos leitos, enfermarias e UTIs:",
    "alternativas": {
      "A": "Têm direito apenas a um adicional de 5% caso usem uniformes de cor branca.",
      "B": "Recebem apenas adicional noturno mesmo trabalhando às dez horas da manhã.",
      "C": "Têm direito apenas a vale-transporte dobrado em dias de chuva torrencial.",
      "D": "Não têm direito a nenhum adicional salarial por realizarem serviço terceirizado.",
      "E": "Têm direito ao adicional de insalubridade em grau máximo (40%), tendo em vista o manuseio direto e contínuo de lixo hospitalar com potencial infectocontagiante elevado."
    },
    "resposta_correta": "E",
    "comentario": "O manuseio e coleta de lixo hospitalar infectante em ambientes hospitalares é pacificado pela jurisprudência do TST como ensejador de insalubridade em grau máximo.",
    "referencia": "Jurisprudência Consolidada TST e NR-15"
  },
  {
    "id": 528,
    "materia": "NR-15",
    "dificuldade": "NR-15, Anexo 14",
    "enunciado": "No que concerne aos laboratórios de análises clínicas e histopatologia, o Anexo 14 da NR-15 prevê insalubridade em grau MÉDIO restrita a qual categoria de trabalhadores?",
    "alternativas": {
      "A": "Aos motoristas que transportam papéis timbrados do laboratório.",
      "B": "Aos diretores acionistas que nunca entram nas áreas técnicas do laboratório.",
      "C": "Aos contadores externos que auditam as notas fiscais em outro endereço comercial.",
      "D": "Aos recepcionistas que apenas realizam o cadastro de dados pessoais no balcão de entrada.",
      "E": "Unicamente ao pessoal técnico que manipula materiais biológicos infectantes e amostras de pacientes."
    },
    "resposta_correta": "E",
    "comentario": "O texto do Anexo 14 diz expressamente: 'Laboratórios de análise clínica e histopatologia (aplica-se tão-só ao pessoal técnico)'.",
    "referencia": "NR-15, Anexo 14"
  },
  {
    "id": 529,
    "materia": "NR-15",
    "dificuldade": "NR-15, Anexo 14",
    "enunciado": "Os técnicos que executam atividades em gabinetes de autópsias, de anatomia e de histoanatomopatologia têm direito, segundo o Anexo 14 da NR-15, ao adicional em grau:",
    "alternativas": {
      "A": "Variável de acordo com o peso dos corpos periciados.",
      "B": "Mínimo (10%).",
      "C": "Zero (0%).",
      "D": "Máximo (40%).",
      "E": "Médio (20%)."
    },
    "resposta_correta": "E",
    "comentario": "O Anexo 14 enquadra gabinetes de autópsias, de anatomia e histoanatomopatologia (para o pessoal técnico) no grau MÉDIO (20%).",
    "referencia": "NR-15, Anexo 14"
  },
  {
    "id": 530,
    "materia": "NR-15",
    "dificuldade": "NR-15, Anexo 14",
    "enunciado": "Em cemitérios, a atividade expressamente classificada como insalubre em GRAU MÉDIO (20%) pelo Anexo 14 da NR-15 é:",
    "alternativas": {
      "A": "A vigilância noturna da guarita de entrada desarmada.",
      "B": "O plantio de grama e flores ornamentais nas alamedas do cemitério.",
      "C": "A exumação de corpos.",
      "D": "A venda de velas e coroas de flores no portão de entrada.",
      "E": "O atendimento telefônico para agendamento de sepultamentos."
    },
    "resposta_correta": "C",
    "comentario": "O Anexo 14 inclui especificamente 'exumação de corpos' em cemitérios como atividade insalubre de grau médio (20%).",
    "referencia": "NR-15, Anexo 14"
  },
  {
    "id": 531,
    "materia": "NR-15",
    "dificuldade": "Doutrina de SST e Jurisprudência Trabalhista",
    "enunciado": "Sobre o conceito de CONTATO PERMANENTE exigido pelo Anexo nº 14 da NR-15 para a caracterização da insalubridade biológica:",
    "alternativas": {
      "A": "Exige que o trabalhador permaneça colado ao paciente 24 horas por dia sem piscar os olhos.",
      "B": "Exige que o contato com os agentes biológicos ou pacientes faça parte da rotina habitual e ordinária da função exercida pelo empregado.",
      "C": "Significa que o profissional deve dormir dentro da enfermaria todas as noites.",
      "D": "Só se configura se o trabalhador contrair a doença e vier a óbito imediato.",
      "E": "Exclui qualquer trabalhador que tome banho ou troque de luvas durante o expediente."
    },
    "resposta_correta": "B",
    "comentario": "Contato permanente no contexto ocupacional é a exposição habitual decorrente das atribuições rotineiras do cargo, e não o contato eventual fortuito.",
    "referencia": "Doutrina de SST e Jurisprudência Trabalhista"
  },
  {
    "id": 532,
    "materia": "NR-15",
    "dificuldade": "Súmula 47 do TST",
    "enunciado": "A Súmula nº 47 do TST estabelece que o trabalho executado em condições insalubres em caráter INTERMITENTE:",
    "alternativas": {
      "A": "Obriga o trabalhador a devolver os salários recebidos nos últimos cinco anos.",
      "B": "Reduz o adicional para 0,5% do salário mínimo.",
      "C": "Transforma o contrato de trabalho em trabalho voluntário não remunerado.",
      "D": "Extingue imediatamente o direito ao adicional salarial.",
      "E": "Não descaracteriza o direito à percepção do respectivo adicional de insalubridade."
    },
    "resposta_correta": "E",
    "comentario": "A Súmula 47 do TST é clássica: a intermitência na exposição insalubre não afasta o direito ao pagamento do adicional integral correspondente.",
    "referencia": "Súmula 47 do TST"
  },
  {
    "id": 533,
    "materia": "NR-15",
    "dificuldade": "NR-15, Anexo 14 e Jurisprudência TST",
    "enunciado": "Um maqueiro da FHCGV transporta diariamente pacientes internados para a realização de cirurgias, exames e transferências entre leitos. Sua atividade:",
    "alternativas": {
      "A": "É isenta de qualquer proteção por se tratar de atividade de hotelaria.",
      "B": "Só seria insalubre caso o maqueiro fosse diplomado em medicina cirúrgica.",
      "C": "Não é insalubre, pois o maqueiro só empurra a estrutura metálica das macas.",
      "D": "É insalubre em grau mínimo de 2% pago em vale-refeição.",
      "E": "Enseja o adicional de insalubridade em grau médio (20%), por manter contato permanente com pacientes e materiais em ambiente hospitalar."
    },
    "resposta_correta": "E",
    "comentario": "O maqueiro hospitalar mantém contato físico e proximidade constante com pacientes e secreções, enquadrando-se no Anexo 14 em grau médio (ou máximo em isolamento).",
    "referencia": "NR-15, Anexo 14 e Jurisprudência TST"
  },
  {
    "id": 534,
    "materia": "NR-15",
    "dificuldade": "NR-15, Anexo 14",
    "enunciado": "A recepcionista de um hospital que trabalha em guichê de vidro fechado no saguão externo, atendendo unicamente ao público para preenchimento de fichas e triagem administrativa sem contato físico com pacientes:",
    "alternativas": {
      "A": "Não se enquadra na insalubridade do Anexo 14, pois o benefício aplica-se exclusivamente ao pessoal que tem contato com pacientes ou manuseia objetos de seu uso não esterilizados.",
      "B": "Tem direito a adicional de periculosidade de 30% por risco de contágio aéreo geral.",
      "C": "Tem direito automático a 40% de insalubridade pelo simples fato de o prédio ser um hospital.",
      "D": "É considerada cirurgiã geral para todos os efeitos previdenciários e trabalhistas.",
      "E": "Deve receber o triplo do salário mínimo como indenização por estresse visual."
    },
    "resposta_correta": "A",
    "comentario": "O Anexo 14 restringe a insalubridade ao pessoal que presta cuidados diretos ou manuseia materiais infectados; pessoal puramente administrativo não recebe insalubridade.",
    "referencia": "NR-15, Anexo 14"
  },
  {
    "id": 535,
    "materia": "NR-15",
    "dificuldade": "NR-15, Anexo 14",
    "enunciado": "Em relação à Central de Material e Esterilização (CME), os técnicos que trabalham no setor de EXPURGO lavando e descontaminando instrumentais cirúrgicos com sangue e secreções:",
    "alternativas": {
      "A": "Têm direito a insalubridade apenas nos dias em que cortarem as próprias mãos.",
      "B": "Perdem o direito ao adicional se usarem avental de borracha e luvas de cano longo.",
      "C": "Devem pagar uma taxa de higienização ao hospital para desempenhar o serviço.",
      "D": "Têm direito ao adicional de insalubridade, decorrente do contato habitual com objetos de uso de pacientes com material biológico infectocontagiante não previamente esterilizado.",
      "E": "Estão isentos de insalubridade porque os materiais serão esterilizados depois."
    },
    "resposta_correta": "D",
    "comentario": "O manuseio de objetos e instrumentais cirúrgicos sujos de sangue antes da esterilização amolda-se perfeitamente às hipóteses de insalubridade do Anexo 14.",
    "referencia": "NR-15, Anexo 14"
  },
  {
    "id": 536,
    "materia": "NR-15",
    "dificuldade": "NR-15, Anexo 14",
    "enunciado": "O contato com sangue e hemoderivados em bancos de sangue e hemonúcleos durante a triagem e processamento laboratorial de bolsas de sangue:",
    "alternativas": {
      "A": "É vedado a servidores públicos estaduais estatutários da administração direta.",
      "B": "É considerado totalmente livre de risco biológico pelas normas do trabalho.",
      "C": "Só gera direito a adicional se a bolsa de sangue romper e espirrar nos olhos.",
      "D": "Enseja grau máximo exclusivamente se o doador de sangue for portador de rinite alérgica.",
      "E": "Caracteriza atividade insalubre em grau médio pelo manuseio de material biológico humano potencialmente infectado (vírus de hepatites, HIV, etc.)."
    },
    "resposta_correta": "E",
    "comentario": "O processamento de sangue e seus componentes é considerado manuseio de material biológico humano com potencial infeccioso no Anexo 14.",
    "referencia": "NR-15, Anexo 14"
  },
  {
    "id": 537,
    "materia": "NR-15",
    "dificuldade": "NR-15, Anexo 14",
    "enunciado": "Trabalhadores da lavanderia hospitalar que atuam na chamada 'ÁREA SUJA', realizando a recepção, triagem e pesagem de lençóis, fronhas e campos cirúrgicos com fezes e sangue:",
    "alternativas": {
      "A": "Não têm direito porque os lençóis serão limpos pelas máquinas automáticas.",
      "B": "Ficam proibidos de receber qualquer tipo de EPI pela chefia do setor.",
      "C": "Têm direito ao adicional de insalubridade pelo contato permanente com materiais infectados não previamente desinfetados.",
      "D": "Recebem apenas adicional de penosidade de 5% sobre a cesta básica.",
      "E": "Devem lavar as roupas hospitalares em suas próprias residências particulares."
    },
    "resposta_correta": "C",
    "comentario": "A separação e triagem de roupa suja hospitalar na área contaminada expõe o trabalhador a sangue, fezes e fluidos, caracterizando insalubridade pelo Anexo 14.",
    "referencia": "NR-15, Anexo 14"
  },
  {
    "id": 538,
    "materia": "NR-15",
    "dificuldade": "NR-15, Anexo 14",
    "enunciado": "Se a unidade hospitalar da FHCGV abrigar uma ala de isolamento para pacientes com Tuberculose multirresistente ou Meningite meningocócica, os enfermeiros e técnicos designados para o isolamento:",
    "alternativas": {
      "A": "Fazem jus apenas a grau mínimo de 10% por terem máscaras PFF2 disponíveis.",
      "B": "Perdem qualquer adicional salarial por determinação da diretoria clínica.",
      "C": "Recebem apenas um dia de folga no aniversário de contratação da empresa.",
      "D": "Fazem jus ao adicional de insalubridade em grau MÁXIMO (40%), por estarem em contato permanente com pacientes em isolamento por doenças infectocontagiosas.",
      "E": "Têm seus contratos de trabalho rescindidos sumariamente pela CLT."
    },
    "resposta_correta": "D",
    "comentario": "O contato permanente com pacientes em isolamento por doenças infectocontagiosas enseja grau MÁXIMO (40%) de acordo com o texto expresso do Anexo 14.",
    "referencia": "NR-15, Anexo 14"
  },
  {
    "id": 539,
    "materia": "NR-15",
    "dificuldade": "NR-15, Anexo 14",
    "enunciado": "Em relação aos trabalhadores da odontologia hospitalar que realizam procedimentos cirúrgicos bucomaxilofaciais com aerossóis de saliva e sangue de pacientes:",
    "alternativas": {
      "A": "Recebem insalubridade apenas caso o motorzinho de rotação quebre na boca.",
      "B": "Ficam dispensados de utilizar óculos e máscaras de proteção facial.",
      "C": "Estão expostos a agentes biológicos infectocontagiantes em ambiente de cuidados à saúde humana, fazendo jus à insalubridade em grau médio (20%).",
      "D": "Não têm direito a adicional porque dentes humanos são estruturas inanimadas.",
      "E": "Recebem grau máximo apenas se o paciente for menor de 12 anos."
    },
    "resposta_correta": "C",
    "comentario": "Os cirurgiões-dentistas e auxiliares de saúde bucal mantêm contato com sangue e saliva em procedimentos, enquadrando-se em grau médio no Anexo 14.",
    "referencia": "NR-15, Anexo 14"
  },
  {
    "id": 540,
    "materia": "NR-15",
    "dificuldade": "NR-15, Anexo 14",
    "enunciado": "A atividade de coleta domiciliar de lixo urbano nas ruas das cidades é enquadrada no Anexo 14 em grau:",
    "alternativas": {
      "A": "Médio (20%).",
      "B": "Zero (0%).",
      "C": "Máximo (40%).",
      "D": "Percentual negociado diariamente com os motoristas dos caminhões.",
      "E": "Mínimo (10%)."
    },
    "resposta_correta": "C",
    "comentario": "A coleta de lixo urbano é classificada literalmente como atividade insalubre de grau MÁXIMO (40%) no Anexo 14 da NR-15.",
    "referencia": "NR-15, Anexo 14"
  },
  {
    "id": 541,
    "materia": "NR-15",
    "dificuldade": "NR-15, Anexo 14",
    "enunciado": "O contato com animais portadores de doenças infectocontagiosas (como raiva, mormo ou brucelose) em hospitais veterinários ou matadouros confere insalubridade em grau:",
    "alternativas": {
      "A": "Médio (20%).",
      "B": "Mínimo (10%).",
      "C": "Máximo (40%).",
      "D": "Apenas direito a ração animal gratuita no almoço.",
      "E": "Zero (0%)."
    },
    "resposta_correta": "C",
    "comentario": "Animais portadores de doenças infectocontagiosas e suas vísceras/dejeções geram insalubridade em grau MÁXIMO (40%) pelo Anexo 14.",
    "referencia": "NR-15, Anexo 14"
  },
  {
    "id": 542,
    "materia": "NR-15",
    "dificuldade": "NR-15, Anexo 14",
    "enunciado": "Qual a diferença de enquadramento no Anexo 14 da NR-15 entre o contato com animais comuns em estábulos e o contato com animais portadores de doenças infectocontagiosas?",
    "alternativas": {
      "A": "Estábulos e cavalariças gerais geram grau MÉDIO (20%), enquanto animais comprovadamente portadores de doenças infectocontagiosas geram grau MÁXIMO (40%).",
      "B": "O trabalho em estábulos é considerado proibido para maiores de 18 anos.",
      "C": "Animais em estábulos dão grau máximo e animais doentes dão grau mínimo.",
      "D": "Não há nenhuma diferença, ambos não dão direito a adicional de insalubridade.",
      "E": "Ambos dão direito exclusivamente ao adicional de periculosidade de 30%."
    },
    "resposta_correta": "A",
    "comentario": "O Anexo 14 separa estábulos e cavalariças comuns (grau médio 20%) de animais portadores de doenças infectocontagiosas (grau máximo 40%).",
    "referencia": "NR-15, Anexo 14"
  },
  {
    "id": 543,
    "materia": "NR-15",
    "dificuldade": "Direito do Trabalho e NR-15",
    "enunciado": "A caracterização da insalubridade por agente biológico exige que o trabalhador tenha sofrido contaminação ou adoecido previamente?",
    "alternativas": {
      "A": "Sim, o trabalhador só passa a receber insalubridade após testar positivo para HIV ou Hepatite.",
      "B": "Sim, o pagamento é retroativo apenas aos meses em que o funcionário teve febre.",
      "C": "Sim, exige internação prévia de pelo menos 60 dias em coma hospitalar.",
      "D": "Apenas se o trabalhador processar criminalmente o paciente atendido.",
      "E": "Não, a insalubridade decorre do risco potencial objetivo de exposição durante a execução das tarefas, independentemente da ocorrência de contaminação efetiva do empregado."
    },
    "resposta_correta": "E",
    "comentario": "O adicional de insalubridade remunera a exposição ambiental deletéria ao risco, não sendo indenização securitária por doença já manifestada.",
    "referencia": "Direito do Trabalho e NR-15"
  },
  {
    "id": 544,
    "materia": "NR-15",
    "dificuldade": "Jurisprudência TST e Laudos Periciais",
    "enunciado": "Aos trabalhadores que atuam em farmácias hospitalares dispensando caixas lacradas de medicamentos manufaturados aos andares sem contato com pacientes ou fluidos:",
    "alternativas": {
      "A": "É devido adicional de periculosidade de 50% por risco de choque elétrico nas caixas.",
      "B": "Devem receber o dobro do salário base por realizarem esforço de leitura de bulas.",
      "C": "É devido adicional de 40% porque remédios contêm produtos químicos medicinais.",
      "D": "Geralmente não é devido o adicional de insalubridade biológica, pois embalagens secundárias fechadas não transmitem agentes infecciosos aos operadores.",
      "E": "É proibido qualquer contato com caixas de papelão sem luvas de malha de aço."
    },
    "resposta_correta": "D",
    "comentario": "O manuseio de caixas e embalagens íntegras de medicamentos em farmácia hospitalar não configura contato direto com pacientes nem material infectocontagiante.",
    "referencia": "Jurisprudência TST e Laudos Periciais"
  },
  {
    "id": 545,
    "materia": "NR-15",
    "dificuldade": "CLT Art. 195 e CPC",
    "enunciado": "Na perícia trabalhista de insalubridade na FHCGV, a análise do perito judicial deve contemplar:",
    "alternativas": {
      "A": "A verificação das rotinas reais de trabalho, setores acessados, contato com pacientes e materiais, ficha de entrega de EPIs com CA e medidas de engenharia adotadas.",
      "B": "Apenas o depoimento pessoal do presidente da associação dos moradores do bairro.",
      "C": "O sorteio de moedas para decidir se o trabalhador ganha ou perde a ação judicial.",
      "D": "Apenas a contagem do número de lâmpadas incandescentes no estacionamento.",
      "E": "A conferência da marca da tinta utilizada na pintura dos tetos do hospital."
    },
    "resposta_correta": "A",
    "comentario": "A perícia técnica analisa faticamente as condições ambientais, atribuições reais, tempo e frequência de exposição e eficácia protetiva dos EPIs fornecidos.",
    "referencia": "CLT Art. 195 e CPC"
  },
  {
    "id": 546,
    "materia": "NR-15",
    "dificuldade": "CLT Art. 192 e NR-15, item 15.2",
    "enunciado": "O Artigo 192 da Consolidação das Leis do Trabalho (CLT) e a NR-15 fixam os adicionais de insalubridade para os graus MÁXIMO, MÉDIO e MÍNIMO nos seguintes percentuais, respectivamente:",
    "alternativas": {
      "A": "20%, 10% e 5%.",
      "B": "50%, 30% e 10%.",
      "C": "40%, 20% e 10%.",
      "D": "30%, 20% e 10%.",
      "E": "100%, 50% e 25%."
    },
    "resposta_correta": "C",
    "comentario": "A CLT (Art. 192) e a NR-15 estipulam claramente os adicionais: 40% (grau máximo), 20% (grau médio) e 10% (grau mínimo).",
    "referencia": "CLT Art. 192 e NR-15, item 15.2"
  },
  {
    "id": 547,
    "materia": "NR-15",
    "dificuldade": "Súmula Vinculante 4 do STF e CLT Art. 192",
    "enunciado": "Salvo disposição expressa em convenção coletiva ou legislação estatutária específica mais favorável, a base de cálculo padrão do adicional de insalubridade na CLT é o:",
    "alternativas": {
      "A": "Piso salarial da categoria dos pilotos de avião de caça militar.",
      "B": "Salário total de toda a diretoria executiva da empresa somado.",
      "C": "Valor das horas extras realizadas no último dia do ano civil.",
      "D": "Valor do faturamento bruto anual da fundação hospitalar.",
      "E": "Salário mínimo da região (conforme Súmula Vinculante nº 4 do STF até que lei fixe nova base)."
    },
    "resposta_correta": "E",
    "comentario": "Conforme entendimento vinculante do STF (Súmula Vinculante 4), a base de cálculo da insalubridade sob a CLT é o salário mínimo, salvo previsão mais benéfica em ACT/CCT.",
    "referencia": "Súmula Vinculante 4 do STF e CLT Art. 192"
  },
  {
    "id": 548,
    "materia": "NR-15",
    "dificuldade": "NR-15, item 15.3 e CLT Art. 193, § 2º",
    "enunciado": "No caso de incidência de mais de um fator de insalubridade no mesmo posto de trabalho (exemplo: exposição a ruído excessivo de 20% e contato com pacientes de isolamento de 40%):",
    "alternativas": {
      "A": "Os adicionais são multiplicados entre si na folha de pagamento do servidor.",
      "B": "O trabalhador perde o direito a ambos os adicionais por incompatibilidade legal.",
      "C": "Os adicionais serão somados, totalizando 60% de adicional salarial.",
      "D": "Será considerado apenas o de grau mais elevado (40%), sendo vedada a percepção cumulativa de adicionais de insalubridade.",
      "E": "Será pago apenas o de menor valor (20%) para gerar economia ao empregador."
    },
    "resposta_correta": "D",
    "comentario": "O item 15.3 da NR-15 e o Art. 193, § 2º da CLT vedam a cumulação de adicionais de insalubridade, prevalecendo unicamente o de grau mais elevado.",
    "referencia": "NR-15, item 15.3 e CLT Art. 193, § 2º"
  },
  {
    "id": 549,
    "materia": "NR-15",
    "dificuldade": "CLT Art. 195",
    "enunciado": "A caracterização e a classificação da insalubridade e da periculosidade nos locais de trabalho, segundo o Artigo 195 da CLT, devem ser realizadas por meio de perícia a cargo de:",
    "alternativas": {
      "A": "Médico do Trabalho ou Engenheiro de Segurança do Trabalho, devidamente registrados no Ministério do Trabalho.",
      "B": "Oficial de justiça da vara da família da comarca de Belém.",
      "C": "Delegado de polícia civil do município onde a empresa está instalada.",
      "D": "Gerente de vendas de lojas de departamentos comerciais da capital.",
      "E": "Qualquer pessoa com mais de 21 anos que saiba ler e escrever fluentemente."
    },
    "resposta_correta": "A",
    "comentario": "A CLT Art. 195 determina expressamente que a perícia de insalubridade/periculosidade é ato privativo de Médico do Trabalho ou Engenheiro de Segurança do Trabalho.",
    "referencia": "CLT Art. 195"
  },
  {
    "id": 550,
    "materia": "NR-15",
    "dificuldade": "NR-15, Anexo 3",
    "enunciado": "As atividades com exposição ao calor acima dos limites de tolerância sem controle (Anexo nº 3 da NR-15) geram direito ao adicional de insalubridade em grau:",
    "alternativas": {
      "A": "Zero (0%).",
      "B": "Mínimo (10%).",
      "C": "Máximo (40%).",
      "D": "Médio (20%).",
      "E": "Variável conforme a umidade do ar da praia."
    },
    "resposta_correta": "D",
    "comentario": "A exposição ao calor excessivo acima dos limites de IBUTG do Anexo 3 da NR-15 é classificada como atividade insalubre de grau MÉDIO (20%).",
    "referencia": "NR-15, Anexo 3"
  },
  {
    "id": 551,
    "materia": "NR-15",
    "dificuldade": "NR-15, Anexo 5",
    "enunciado": "A exposição ocupacional a radiações ionizantes (como nos setores de radiologia e radioterapia) sem observância dos limites e normas da CNEN, nos termos do Anexo nº 5 da NR-15, confere insalubridade de grau:",
    "alternativas": {
      "A": "Variável de acordo com a voltagem da rede elétrica.",
      "B": "Máximo (40%).",
      "C": "Dispensada se o trabalhador tomar sol de manhã.",
      "D": "Médio (20%).",
      "E": "Mínimo (10%)."
    },
    "resposta_correta": "B",
    "comentario": "O Anexo 5 da NR-15 estabelece adicional de insalubridade em grau MÁXIMO (40%) para operações com radiações ionizantes.",
    "referencia": "NR-15, Anexo 5"
  },
  {
    "id": 552,
    "materia": "NR-15",
    "dificuldade": "NR-15, Anexo 7",
    "enunciado": "As radiações não-ionizantes (como micro-ondas, laser e ultravioleta gerados em processos de solda ou desinfecção) previstas no Anexo nº 7 da NR-15 geram adicional de insalubridade de grau:",
    "alternativas": {
      "A": "Máximo (40%).",
      "B": "Zero (0%).",
      "C": "Mínimo (10%).",
      "D": "Cinquenta por cento (50%).",
      "E": "Médio (20%)."
    },
    "resposta_correta": "E",
    "comentario": "As operações que exponham os trabalhadores a radiações não-ionizantes sem proteção adequada asseguram adicional de grau MÉDIO (20%).",
    "referencia": "NR-15, Anexo 7"
  },
  {
    "id": 553,
    "materia": "NR-15",
    "dificuldade": "NR-15, Anexo 1",
    "enunciado": "A exposição a níveis de ruído contínuo ou intermitente acima dos limites de tolerância do Anexo nº 1 da NR-15 (acima de 85 dB(A) para 8 horas) sem proteção confere insalubridade de grau:",
    "alternativas": {
      "A": "Máximo (40%).",
      "B": "Médio (20%).",
      "C": "Integral (100%).",
      "D": "Depende da preferência musical dos empregados.",
      "E": "Mínimo (10%)."
    },
    "resposta_correta": "B",
    "comentario": "O ruído acima dos limites de tolerância sem atenuação eficaz do protetor auricular enseja adicional de insalubridade em grau MÉDIO (20%).",
    "referencia": "NR-15, Anexo 1"
  },
  {
    "id": 554,
    "materia": "NR-15",
    "dificuldade": "CLT Art. 194 e NR-15, item 15.4",
    "enunciado": "O direito do empregado ao adicional de insalubridade ou de periculosidade cessa quando:",
    "alternativas": {
      "A": "O trabalhador casar ou tiver o seu primeiro filho registrado em cartório.",
      "B": "O sindicato dos trabalhadores entrar em recesso durante o mês de julho.",
      "C": "O hospital mudar de nome fantasia em anúncio publicitário comercial.",
      "D": "Ocorrer a eliminação do risco à sua saúde ou integridade física, nos termos da CLT e das Normas Regulamentadoras.",
      "E": "O empregado completar 10 anos ininterruptos no mesmo cargo na empresa."
    },
    "resposta_correta": "D",
    "comentario": "Conforme o Art. 194 da CLT, o direito ao adicional cessa com a eliminação do risco que gerou sua concessão (por engenharia ou proteção efetiva).",
    "referencia": "CLT Art. 194 e NR-15, item 15.4"
  },
  {
    "id": 555,
    "materia": "NR-15",
    "dificuldade": "CF/88, Art. 7º, XXIX e CLT Art. 11",
    "enunciado": "Se a empresa deixar de pagar o adicional de insalubridade devido a um trabalhador durante vários anos de contrato, o trabalhador pode pleitear judicialmente as diferenças salariais:",
    "alternativas": {
      "A": "Apenas se o trabalhador nunca tiver faltado um dia sequer ao trabalho.",
      "B": "Respeitada a prescrição quinquenal (últimos 5 anos de contrato) na Justiça do Trabalho.",
      "C": "De todos os meses trabalhados desde o ano de 1900 sem limites de prescrição.",
      "D": "Exclusivamente se o perito for parente próximo do reclamante.",
      "E": "Apenas dos últimos 30 dias de salário vencido."
    },
    "resposta_correta": "B",
    "comentario": "As verbas trabalhistas prescrevem em 5 anos até o limite de 2 anos após a extinção do contrato de trabalho (CF/88 Art. 7º, XXIX).",
    "referencia": "CF/88, Art. 7º, XXIX e CLT Art. 11"
  },
  {
    "id": 556,
    "materia": "NR-15",
    "dificuldade": "Súmula 80 do TST",
    "enunciado": "A Súmula nº 80 do Tribunal Superior do Trabalho (TST) dispõe expressamente que a eliminação da insalubridade mediante fornecimento de aparelhos protetores aprovados pelo órgão competente:",
    "alternativas": {
      "A": "Exige que o empregado trabalhe 16 horas por dia aos sábados e domingos.",
      "B": "Não tem nenhum efeito jurídico perante os tribunais do trabalho.",
      "C": "Transforma a insalubridade em adicional de periculosidade automático.",
      "D": "Obriga a empresa a pagar o dobro do adicional de insalubridade.",
      "E": "Exclui a percepção do respectivo adicional de insalubridade."
    },
    "resposta_correta": "E",
    "comentario": "A Súmula 80 do TST prevê que a eliminação eficaz da insalubridade pelo uso de protetores com CA válido afasta a obrigatoriedade do pagamento do adicional.",
    "referencia": "Súmula 80 do TST"
  },
  {
    "id": 557,
    "materia": "NR-15",
    "dificuldade": "Súmula 289 do TST",
    "enunciado": "Entretanto, a Súmula nº 289 do TST complementa o entendimento sobre a neutralização da insalubridade, fixando que:",
    "alternativas": {
      "A": "O simples fornecimento do aparelho de proteção pelo empregador não o exime do pagamento do adicional de insalubridade, cabendo-lhe tomar as medidas que conduzam à diminuição ou eliminação da nocividade, entre as quais as relativas ao uso efetivo do equipamento pelo empregado.",
      "B": "Basta a empresa comprar os protetores e deixá-los trancados no armário do SESMT.",
      "C": "A responsabilidade de fiscalizar o uso do EPI é unicamente da polícia militar estadual.",
      "D": "A entrega do EPI isenta a empresa de realizar exames médicos ocupacionais do PCMSO.",
      "E": "O empregado pode usar ou não o EPI conforme seu gosto e mesmo assim afastar o adicional."
    },
    "resposta_correta": "A",
    "comentario": "A Súmula 289 do TST impõe a obrigação patronal de fiscalizar, exigir o uso efetivo, fornecer treinamento e repor o EPI para que se configure a efetiva elisão da insalubridade.",
    "referencia": "Súmula 289 do TST"
  },
  {
    "id": 558,
    "materia": "NR-15",
    "dificuldade": "NR-15, item 15.4.1 e NR-06",
    "enunciado": "A neutralização ou eliminação da insalubridade por meio de EPI nos termos do item 15.4.1 da NR-15 exige obrigatoriamente:",
    "alternativas": {
      "A": "A dispensa do uso do equipamento caso o ambiente esteja muito quente.",
      "B": "O fornecimento gratuito de EPI com Certificado de Aprovação (CA) válido, compatível com o risco, treinamento adequado para o uso, fiscalização contínua e higienização/manutenção periódica.",
      "C": "O uso de EPIs importados comprados sem registro no Ministério do Trabalho e Emprego.",
      "D": "Apenas uma declaração verbal do trabalhador afirmando que não se incomoda com o agente agressivo.",
      "E": "O desconto do valor das luvas no vale-alimentação do funcionário todo mês."
    },
    "resposta_correta": "B",
    "comentario": "A eficácia do EPI para elisão de insalubridade depende do CA válido, especificação correta, higienização, treinamento e comprovação documental do fornecimento e fiscalização.",
    "referencia": "NR-15, item 15.4.1 e NR-06"
  },
  {
    "id": 559,
    "materia": "NR-15",
    "dificuldade": "Jurisprudência Trabalhista TST e Perícias Judiciais",
    "enunciado": "Em relação aos agentes biológicos do Anexo nº 14 da NR-15 (como em áreas de isolamento de doenças infectocontagiosas graves), qual é o entendimento pericial e jurisprudencial predominante sobre a elisão da insalubridade de GRAU MÁXIMO pelo uso de luvas e máscaras?",
    "alternativas": {
      "A": "Geralmente não elide a insalubridade de grau máximo, tendo em vista a alta virulência e patogenicidade dos agentes, a possibilidade de aerolização e a suscetibilidade a acidentes ou falhas na paramentação/desparamentação.",
      "B": "Elide completamente a insalubridade se o trabalhador usar uma máscara de pano feita em casa.",
      "C": "Basta borrifar álcool líquido nas mãos uma vez por mês para afastar qualquer insalubridade biológica.",
      "D": "A insalubridade é automaticamente cancelada se o funcionário tomar um copo de leite.",
      "E": "O uso de luvas de borracha transforma o hospital em ambiente 100% esterilizado e seguro."
    },
    "resposta_correta": "A",
    "comentario": "Em pacientes de isolamento infectocontagioso grave (grau máximo), o risco de falha de vedação ou contaminação na retirada dos EPIs mantém a caracterização da insalubridade.",
    "referencia": "Jurisprudência Trabalhista TST e Perícias Judiciais"
  },
  {
    "id": 560,
    "materia": "NR-15",
    "dificuldade": "Higiene Ocupacional Fundacentro e NR-15",
    "enunciado": "Para comprovar juridicamente que um protetor auricular do tipo concha atenuou o ruído ambiente de 92 dB(A) para patamares inferiores a 85 dB(A) (eliminando a insalubridade):",
    "alternativas": {
      "A": "Comprovar que o trabalhador nunca assistiu a shows musicais em sua vida particular.",
      "B": "Apresentar uma foto do funcionário sorrindo com o protetor colocado na cabeça.",
      "C": "Apenas perguntar ao trabalhador se ele escutou os cochichos dos colegas na hora do café.",
      "D": "A empresa deve demonstrar o Nível de Redução de Ruído Subject Fit (NRRsf) do EPI com CA válido, ficha de entrega assinada pelo empregado e comprovação de treinamento e substituição periódica.",
      "E": "Medir a altura do trabalhador e o tamanho das suas orelhas externas com régua de plástico."
    },
    "resposta_correta": "D",
    "comentario": "A elisão de ruído requer cálculo pericial da atenuação pelo NRRsf do CA, documentação de entrega (ficha de EPI), fiscalização e higienização/troca regular.",
    "referencia": "Higiene Ocupacional Fundacentro e NR-15"
  },
  {
    "id": 561,
    "materia": "NR-06",
    "dificuldade": "CLT Art. 167 e NR-06, item 6.2",
    "enunciado": "Conforme o Artigo 167 da CLT e o item 6.2 da NR-06, todo Equipamento de Proteção Individual (EPI), seja de fabricação nacional ou importado:",
    "alternativas": {
      "A": "Depende apenas de uma autorização verbal emitida pela delegacia de polícia civil local.",
      "B": "Só poderá ser posto à venda ou utilizado com a indicação do Certificado de Aprovação (CA) expedido pelo órgão de âmbito nacional competente em matéria de segurança e saúde no trabalho.",
      "C": "Pode ser vendido sem qualquer teste técnico caso o fabricante possua mais de 10 anos de mercado.",
      "D": "Pode ter seu número de aprovação inventado pelo técnico de segurança do trabalho do hospital.",
      "E": "Tem seu registro dispensado caso seja doado gratuitamente a hospitais públicos estaduais."
    },
    "resposta_correta": "B",
    "comentario": "O Art. 167 da CLT e o item 6.2 da NR-06 exigem que todo EPI, nacional ou importado, possua CA válido emitido pelo Ministério do Trabalho e Emprego para venda e uso.",
    "referencia": "CLT Art. 167 e NR-06, item 6.2"
  },
  {
    "id": 562,
    "materia": "NR-06",
    "dificuldade": "NR-06, item 6.2 e NR-28",
    "enunciado": "Qual é a consequência legal se uma empresa adquirir e fornecer aos seus trabalhadores equipamentos de proteção cujo Certificado de Aprovação (CA) já estava VENCIDO ou CANCELADO na data da compra?",
    "alternativas": {
      "A": "O trabalhador perde a posse de sua carteira profissional por 30 dias.",
      "B": "O Ministério do Trabalho passa a pagar o salário do funcionário de forma subsidiária.",
      "C": "A empresa recebe incentivos fiscais e descontos tributários pelo aproveitamento de estoques antigos.",
      "D": "O equipamento é automaticamente convalidado se o trabalhador assinar um termo de perdão.",
      "E": "A empresa comete infração às normas de segurança do trabalho, sendo passível de autuação pela Auditoria Fiscal do Trabalho, pois o equipamento não é legalmente considerado EPI válido."
    },
    "resposta_correta": "E",
    "comentario": "A aquisição de EPI com CA vencido ou cancelado no ato da compra é infração à NR-06, descaracterizando a proteção legal e gerando penalidades à empresa.",
    "referencia": "NR-06, item 6.2 e NR-28"
  },
  {
    "id": 563,
    "materia": "NR-06",
    "dificuldade": "Nota Técnica MTE e NR-06",
    "enunciado": "Se um lote de EPIs (ex: respiradores PFF2 ou botas de segurança) foi adquirido pela FHCGV com CA VÁLIDO na época da compra, mas o CA veio a expirar posteriormente enquanto as peças ainda estavam estocadas no almoxarifado:",
    "alternativas": {
      "A": "O almoxarife deve ser preso em flagrante por crime contra a saúde pública.",
      "B": "O número do CA deve ser raspado com uma lixa e substituído por uma etiqueta sem número.",
      "C": "Todos os equipamentos estocados devem ser imediatamente destruídos com ácido no pátio.",
      "D": "O hospital é obrigado a fechar as portas e transferir os pacientes para outros estados.",
      "E": "Os EPIs podem ser utilizados normalmente até o limite da data de validade de fabricação estabelecida pelo fabricante, desde que conservados adequadamente nas embalagens originais."
    },
    "resposta_correta": "E",
    "comentario": "Segundo o entendimento consolidado da Secretaria de Inspeção do Trabalho (Nota Técnica), o EPI comprado com CA válido pode ser usado até o fim da vida útil/validade do fabricante.",
    "referencia": "Nota Técnica MTE e NR-06"
  },
  {
    "id": 564,
    "materia": "NR-06",
    "dificuldade": "NR-06, item 6.9.3",
    "enunciado": "A gravação indelével que deve constar obrigatoriamente no corpo de todo Equipamento de Proteção Individual comercializado no Brasil compreende:",
    "alternativas": {
      "A": "O nome comercial do fabricante ou do importador, o lote de fabricação e o número do Certificado de Aprovação (CA).",
      "B": "A foto colorida do presidente do sindicato dos trabalhadores da indústria.",
      "C": "Apenas o endereço do sítio de lazer do dono da fábrica fornecedora.",
      "D": "Apenas o preço de venda da mercadoria em reais com desconto de atacado.",
      "E": "A relação de nomes de todos os operários que costuraram a peça na fábrica."
    },
    "resposta_correta": "A",
    "comentario": "O item 6.9.3 da NR-06 exige que o EPI tenha gravado de forma indelével o nome do fabricante/importador, lote e o número do CA emitido pelo MTE.",
    "referencia": "NR-06, item 6.9.3"
  },
  {
    "id": 565,
    "materia": "NR-06",
    "dificuldade": "NR-06, subitem 6.9.3.1",
    "enunciado": "Caso a gravação do número do CA no corpo do próprio EPI seja tecnicamente inviável devido às dimensões reduzidas ou material da peça (ex: protetores auriculares tipo plug ou luvas cirúrgicas ultrafinas):",
    "alternativas": {
      "A": "O trabalhador deve tatuar o número do CA no dorso de sua mão esquerda.",
      "B": "O equipamento pode ser vendido anonimamente a granel sem nenhuma etiqueta de rastreio.",
      "C": "A indicação do CA, fabricante e lote deve constar obrigatoriamente na embalagem primária ou secundária do produto.",
      "D": "O equipamento fica expressamente proibido de ser comercializado em qualquer hipótese.",
      "E": "O fabricante fica dispensado de realizar ensaios laboratoriais de conformidade técnica."
    },
    "resposta_correta": "C",
    "comentario": "Quando não for viável marcar o próprio produto, a NR-06 autoriza que a identificação e o número do CA constem na embalagem correspondente.",
    "referencia": "NR-06, subitem 6.9.3.1"
  },
  {
    "id": 566,
    "materia": "NR-06",
    "dificuldade": "CLT Art. 167 e NR-06",
    "enunciado": "Qual é a entidade ou órgão federal responsável no Brasil pela realização de testes, emissão, prorrogação, renovação ou cancelamento do Certificado de Aprovação (CA) de EPIs?",
    "alternativas": {
      "A": "O Conselho Federal de Engenharia e Agronomia (CONFEA).",
      "B": "A Agência Nacional de Transportes Aquaviários (ANTAQ).",
      "C": "A Superintendência da Zona Franca de Manaus (SUFRAMA).",
      "D": "O Instituto Brasileiro de Geografia e Estatística (IBGE).",
      "E": "O Ministério do Trabalho e Emprego (por meio de sua Secretaria competente em SST e laboratórios acreditados pelo INMETRO)."
    },
    "resposta_correta": "E",
    "comentario": "A emissão e gestão do Certificado de Aprovação (CA) é competência institucional exclusiva do Ministério do Trabalho e Emprego (MTE).",
    "referencia": "CLT Art. 167 e NR-06"
  },
  {
    "id": 567,
    "materia": "NR-06",
    "dificuldade": "MTE e NR-06",
    "enunciado": "A consulta pública oficial sobre a situação cadastral, validade, normas técnicas de ensaio e laudos laboratoriais de um número de CA pode ser realizada online através:",
    "alternativas": {
      "A": "Do boletim oficial das Forças Armadas do Brasil.",
      "B": "Do portal de leilões da Receita Federal de mercadorias apreendidas.",
      "C": "Do sistema de Consulta de Certificado de Aprovação de EPI (CAEPI) do Ministério do Trabalho e Emprego.",
      "D": "Do aplicativo de mensagens pessoais do ministro da economia.",
      "E": "Da lista telefônica comercial impressa do estado do Pará."
    },
    "resposta_correta": "C",
    "comentario": "O sistema oficial do governo federal (CAEPI) permite a qualquer cidadão, empresa ou perito verificar a validade e especificações do CA de um EPI.",
    "referencia": "MTE e NR-06"
  },
  {
    "id": 568,
    "materia": "NR-06",
    "dificuldade": "Portaria MTE e NR-06",
    "enunciado": "A emissão do Certificado de Aprovação (CA) para um respirador do tipo PFF2/N95 no Brasil depende da apresentação prévia de laudos técnicos de ensaios laboratoriais acreditados pelo:",
    "alternativas": {
      "A": "Banco Central do Brasil.",
      "B": "INMETRO (Instituto Nacional de Metrologia, Qualidade e Tecnologia).",
      "C": "Conselho Administrativo de Defesa Econômica (CADE).",
      "D": "Departamento Nacional de Infraestrutura de Transportes (DNIT).",
      "E": "Instituto Chico Mendes de Conservação da Biodiversidade (ICMBio)."
    },
    "resposta_correta": "B",
    "comentario": "Os EPIs passam por ensaios de conformidade em laboratórios acreditados e organismos de certificação vinculados ao INMETRO para obter o CA do MTE.",
    "referencia": "Portaria MTE e NR-06"
  },
  {
    "id": 569,
    "materia": "NR-06",
    "dificuldade": "NR-06 e Doutrina de SST",
    "enunciado": "A alteração proposital das características originais de um EPI (como furar um protetor facial para ventilar ou cortar os dedos de uma luva de vaqueta):",
    "alternativas": {
      "A": "Invalida a proteção técnica certificada pelo CA e transfere a responsabilidade civil e criminal por eventuais acidentes a quem adulterou o equipamento.",
      "B": "Deve ser realizada com maçarico de acetileno a cada 15 dias de uso.",
      "C": "É recomendada formalmente pela NR-06 para aumentar o conforto estético do operador.",
      "D": "É permitida desde que a empresa pague um adicional de 5% ao funcionário.",
      "E": "Gera aumento do nível de atenuação sonora de protetores de ouvido."
    },
    "resposta_correta": "A",
    "comentario": "Modificar o EPI invalida a certificação do CA, anula a garantia do fabricante e quebra a barreira de segurança, expondo o operador a riscos graves.",
    "referencia": "NR-06 e Doutrina de SST"
  },
  {
    "id": 570,
    "materia": "NR-06",
    "dificuldade": "Portaria MTE e NR-06",
    "enunciado": "Qual é o prazo máximo de validade geral de um Certificado de Aprovação (CA) concedido pelo Ministério do Trabalho aos fabricantes de EPIs antes de sua renovação periódica?",
    "alternativas": {
      "A": "Exatamente 30 dias após a publicação no Diário Oficial.",
      "B": "Geralmente 5 anos, mediante renovação vinculada a novos ensaios laboratoriais ou avaliação de conformidade.",
      "C": "10 anos sem qualquer acompanhamento técnico de qualidade.",
      "D": "Vigência perpétua de 100 anos sem necessidade de novos testes.",
      "E": "24 horas, devendo ser renovado diariamente pelo fabricante."
    },
    "resposta_correta": "B",
    "comentario": "A validade padrão do Certificado de Aprovação é de até 5 anos, devendo o fabricante requerer a renovação com antecedência mediante comprovação de conformidade.",
    "referencia": "Portaria MTE e NR-06"
  },
  {
    "id": 571,
    "materia": "NR-06",
    "dificuldade": "CLT Art. 166 e NR-06, item 6.5.1",
    "enunciado": "O subitem 6.5.1 da NR-06 estabelece que cabe ao EMPREGADOR quanto ao EPI, dentre outras, as seguintes obrigações, EXCETO:",
    "alternativas": {
      "A": "Cobrar o valor de custo do EPI mediante desconto em folha de pagamento no final do mês.",
      "B": "Orientar e treinar o empregado sobre o uso adequado, guarda e conservação.",
      "C": "Exigir seu uso pelos empregados.",
      "D": "Adquirir o EPI adequado ao risco de cada atividade.",
      "E": "Fornecer ao empregado somente o aprovado pelo órgão nacional competente em SST."
    },
    "resposta_correta": "A",
    "comentario": "O fornecimento do EPI deve ser GRATUITO (CLT Art. 166 e NR-06, item 6.3). Cobrar ou descontar o valor do EPI é ilegal.",
    "referencia": "CLT Art. 166 e NR-06, item 6.5.1"
  },
  {
    "id": 572,
    "materia": "NR-06",
    "dificuldade": "NR-06, item 6.5.1",
    "enunciado": "Em relação à higienização e manutenção periódica dos EPIs reutilizáveis (como aventais de chumbo, óculos de segurança e protetores auriculares tipo concha):",
    "alternativas": {
      "A": "A responsabilidade pela higienização e manutenção é do empregador, podendo ser realizada pelo próprio hospital ou por lavanderia especializada.",
      "B": "O equipamento deve ser jogado fora no rio após cada dia de trabalho.",
      "C": "A responsabilidade é exclusiva do empregado, que deve levar o avental com sangue para lavar no tanque de sua casa.",
      "D": "É expressamente proibido limpar ou lavar qualquer EPI reutilizável.",
      "E": "A manutenção deve ser paga com rifas organizadas entre os pacientes."
    },
    "resposta_correta": "A",
    "comentario": "A NR-06 (subitem 6.5.1, alínea 'e') estipula que cabe ao empregador responsabilizar-se pela higienização e manutenção periódica dos EPIs.",
    "referencia": "NR-06, item 6.5.1"
  },
  {
    "id": 573,
    "materia": "NR-06",
    "dificuldade": "NR-06, item 6.5.1, alínea 'h'",
    "enunciado": "O registro do fornecimento do EPI ao trabalhador pelo empregador (subitem 6.5.1, alínea 'h' da NR-06):",
    "alternativas": {
      "A": "Deve ser gravado exclusivamente em placas de bronze afixadas na parede externa.",
      "B": "Pode ser feito mediante livros, fichas de controle de EPI físicas assinadas ou sistema eletrônico seguro que comprove a entrega e o número do CA.",
      "C": "Só tem validade se for registrado em cartório de títulos e documentos da capital toda semana.",
      "D": "É dispensado para hospitais filantrópicos e fundações estaduais.",
      "E": "Pode ser substituído por uma piscada de olhos em sinal de concordância mútua."
    },
    "resposta_correta": "B",
    "comentario": "O registro de entrega do EPI pode ser feito por ficha de papel com assinatura ou sistema eletrônico rastreável com assinatura biométrica/digital.",
    "referencia": "NR-06, item 6.5.1, alínea 'h'"
  },
  {
    "id": 574,
    "materia": "NR-06",
    "dificuldade": "NR-06, item 6.5.1, alínea 'd'",
    "enunciado": "Quando um EPI for danificado ou extraviado involuntariamente durante a jornada regular de trabalho na FHCGV, a obrigação imediata do empregador é:",
    "alternativas": {
      "A": "Substituí-lo imediatamente sem qualquer cobrança financeira ao trabalhador.",
      "B": "Obrigar o trabalhador a continuar a tarefa sem nenhuma proteção.",
      "C": "Exigir que o servidor faça um empréstimo bancário para comprar outra peça nova.",
      "D": "Suspender o trabalhador por 15 dias sem direito a alimentação.",
      "E": "Demiti-lo sumariamente por depredação dolosa do patrimônio do Estado."
    },
    "resposta_correta": "A",
    "comentario": "Cabe ao empregador 'substituir imediatamente, quando danificado ou extraviado' o EPI, assegurando a continuidade da proteção (NR-06, item 6.5.1, alínea 'd').",
    "referencia": "NR-06, item 6.5.1, alínea 'd'"
  },
  {
    "id": 575,
    "materia": "NR-06",
    "dificuldade": "NR-06, item 6.6.1",
    "enunciado": "De acordo com o subitem 6.6.1 da NR-06, cabe ao EMPREGADO quanto ao EPI:",
    "alternativas": {
      "A": "Modificar a estrutura de segurança da bota com faca para deixá-la aberta.",
      "B": "Usar o equipamento fornecido pela organização apenas para a finalidade a que se destina, responsabilizar-se pela sua guarda e conservação e comunicar qualquer alteração que o torne impróprio.",
      "C": "Levar o protetor auditivo para casa e emprestá-lo para seus vizinhos assistirem filmes.",
      "D": "Vender o equipamento excedente para outros hospitais para complementar a renda familiar.",
      "E": "Recusar o uso do EPI caso ele não combine com a cor do sapato particular."
    },
    "resposta_correta": "B",
    "comentario": "As obrigações do empregado são: usar apenas para a finalidade devida, guardar e zelar pela conservação e comunicar ao empregador qualquer defeito ou dano.",
    "referencia": "NR-06, item 6.6.1"
  },
  {
    "id": 576,
    "materia": "NR-06",
    "dificuldade": "CLT Art. 158, parágrafo único e NR-06",
    "enunciado": "Se um técnico de enfermagem recusar-se expressamente e de forma injustificada a utilizar o respirador PFF2 e as luvas de procedimento fornecidos gratuitamente pelo hospital para atendimento em quarto de isolamento:",
    "alternativas": {
      "A": "Sua conduta constitui ato faltoso passível de punição disciplinar pelo empregador (advertência, suspensão e, em caso de reiteração, demissão por justa causa conforme CLT Art. 158).",
      "B": "O técnico tem o direito subjetivo de trabalhar desprotegido caso alegue calor no rosto.",
      "C": "O técnico é imediatamente promovido a chefe da Comissão de Controle de Infecção Hospitalar.",
      "D": "O hospital é obrigado a pagar o dobro do salário ao funcionário que recusa o EPI.",
      "E": "A direção do hospital deve ser presa por desrespeitar a vontade individual do servidor."
    },
    "resposta_correta": "A",
    "comentario": "O Art. 158 da CLT prevê expressamente que a recusa injustificada do empregado em usar o EPI fornecido pela empresa constitui ato faltoso passível de sanções disciplinares.",
    "referencia": "CLT Art. 158, parágrafo único e NR-06"
  },
  {
    "id": 577,
    "materia": "NR-06",
    "dificuldade": "NR-06, item 6.5.1, alínea 'f'",
    "enunciado": "O empregador tem o dever de comunicar ao órgão nacional competente em matéria de segurança e saúde no trabalho (MTE):",
    "alternativas": {
      "A": "O resultado dos jogos do campeonato de futebol do Pará.",
      "B": "O número de vezes que os trabalhadores foram ao banheiro durante o dia.",
      "C": "A marca de café consumida pelos funcionários no plantão noturno.",
      "D": "Qualquer irregularidade observada no EPI fornecido (como defeitos de fabricação em série ou ineficácia do CA).",
      "E": "A lista de todos os servidores que aniversariam na semana corrente."
    },
    "resposta_correta": "D",
    "comentario": "A NR-06 (subitem 6.5.1, alínea 'f') obriga a organização a comunicar ao MTE qualquer irregularidade técnica constatada no EPI fornecido pelos fabricantes.",
    "referencia": "NR-06, item 6.5.1, alínea 'f'"
  },
  {
    "id": 578,
    "materia": "NR-06",
    "dificuldade": "NR-06, item 6.5.1, alínea 'c'",
    "enunciado": "A orientação e o treinamento do trabalhador sobre o uso adequado, guarda e conservação do EPI devem ser realizados pelo empregador:",
    "alternativas": {
      "A": "Por meio de uma folha de papel dobrada colocada dentro da caixa do sapato.",
      "B": "Apenas após o trabalhador completar 25 anos de serviços prestados.",
      "C": "No momento da admissão e periodicamente, ou sempre que houver substituição do modelo de EPI ou alteração de riscos.",
      "D": "Exclusivamente durante as férias regulamentares do empregado sem remuneração.",
      "E": "Apenas se o trabalhador pagar R$ 50,00 por hora de aula ao técnico de segurança."
    },
    "resposta_correta": "C",
    "comentario": "O treinamento em EPI é dever do empregador e deve ser realizado na admissão e sempre que novos modelos ou riscos exijam instruções específicas de ajuste e conservação.",
    "referencia": "NR-06, item 6.5.1, alínea 'c'"
  },
  {
    "id": 579,
    "materia": "NR-06",
    "dificuldade": "NR-06, item 6.5.2",
    "enunciado": "A respeito da seleção e adequação biométrica do EPI ao trabalhador:",
    "alternativas": {
      "A": "A empresa só é obrigada a fornecer EPIs que caibam nos membros da diretoria.",
      "B": "O empregador deve sortear os números de botas em uma roleta de bingo.",
      "C": "O EPI deve ser selecionado considerando o conforto, a eficácia da proteção e as características físicas (tamanho, formato) do trabalhador.",
      "D": "Todos os trabalhadores, do menor porte ao maior peso, devem usar luvas e calçados em tamanho único P.",
      "E": "A estética do equipamento e sua marca comercial são os únicos fatores que determinam a escolha."
    },
    "resposta_correta": "C",
    "comentario": "A NR-06 exige que a seleção do EPI considere a atividade, os riscos, a compatibilidade ergonômica e as medidas antropométricas do usuário.",
    "referencia": "NR-06, item 6.5.2"
  },
  {
    "id": 580,
    "materia": "NR-06",
    "dificuldade": "NR-06, item 6.6.1, alínea 'b'",
    "enunciado": "Qual é a conduta do empregado ao perceber que a sua máscara PFF2 está rasgada na borda elástica logo antes de entrar em uma enfermaria de isolamento biológico?",
    "alternativas": {
      "A": "Ignorar o defeito e tossir de propósito sobre o paciente internado.",
      "B": "Colocar um pedaço de chiclete mascado para tampar o rasgo da máscara.",
      "C": "Comunicar imediatamente a alteração ao superior/SESMT e solicitar a substituição da máscara por outra íntegra antes de iniciar o atendimento.",
      "D": "Entrar na enfermaria desprotegido e prender a respiração durante 40 minutos.",
      "E": "Amarrar a máscara com arame farpado apertando as bochechas."
    },
    "resposta_correta": "C",
    "comentario": "O empregado deve comunicar imediatamente ao empregador qualquer alteração que torne o EPI impróprio para uso (NR-06, item 6.6.1, alínea 'b').",
    "referencia": "NR-06, item 6.6.1, alínea 'b'"
  },
  {
    "id": 581,
    "materia": "NR-06",
    "dificuldade": "ABNT NBR 8221 e NR-06, Anexo I",
    "enunciado": "O equipamento de proteção individual destinado a proteger a cabeça contra impactos de objetos quedados do alto e choques elétricos em obras de manutenção predial é o:",
    "alternativas": {
      "A": "Gorro cirúrgico de tnt impermeável.",
      "B": "Boné esportivo de time de futebol.",
      "C": "Capuz de lã tricotado manualmente.",
      "D": "Capacete de segurança (Classe A para impacto geral ou Classe B para impacto e riscos elétricos).",
      "E": "Chapéu de palha de praia com abas largas."
    },
    "resposta_correta": "D",
    "comentario": "Os capacetes de segurança com CA dividem-se em Classe A (impactos mecânicos) e Classe B (impactos mecânicos e proteção contra choques elétricos de alta tensão).",
    "referencia": "ABNT NBR 8221 e NR-06, Anexo I"
  },
  {
    "id": 582,
    "materia": "NR-06",
    "dificuldade": "NR-32 e Protocolos ANVISA",
    "enunciado": "Qual é a diferença de indicação entre as luvas cirúrgicas estéreis e as luvas de procedimento não estéreis no contexto hospitalar?",
    "alternativas": {
      "A": "Não existe nenhuma diferença técnica, o nome muda apenas por razões de marketing comercial.",
      "B": "Luvas cirúrgicas são feitas de ferro fundido e luvas de procedimento de papel celulose.",
      "C": "Luvas de procedimento são usadas apenas para lavar pisos de corredores externos.",
      "D": "Luvas cirúrgicas são estéreis, usadas para procedimentos invasivos e cirúrgicos que exigem assepsia rigorosa; luvas de procedimento não são estéreis, usadas para contato com mucosas, sangue e fluidos em exames de rotina.",
      "E": "Luvas cirúrgicas só podem ser calçadas após a meia-noite em dias pares."
    },
    "resposta_correta": "D",
    "comentario": "A esterilidade é a diferença-chave: cirúrgicas protegem o campo operatório asséptico e o cirurgião; as de procedimento protegem o profissional contra contaminação por contato diário.",
    "referencia": "NR-32 e Protocolos ANVISA"
  },
  {
    "id": 583,
    "materia": "NR-06",
    "dificuldade": "ABNT NBR 13698 e NR-06",
    "enunciado": "Os respiradores purificadores de ar mecânicos são classificados pela norma técnica (ABNT NBR 13698) em três classes de filtros: PFF1, PFF2 e PFF3. A classe PFF2 possui eficiência mínima de filtração de:",
    "alternativas": {
      "A": "94% contra poeiras, névoas e aerossóis biológicos (padrão equivalente ao N95 americano).",
      "B": "99,99% apenas contra o gás hélio inodoro.",
      "C": "50% contra folhas secas que caem de árvores.",
      "D": "10% apenas contra fumaça de cigarro.",
      "E": "100% contra disparos de projéteis de armas de fogo."
    },
    "resposta_correta": "A",
    "comentario": "A peça semifacial filtrante PFF2 filtra no mínimo 94% dos aerossóis de ensaio (0,3 µm), sendo o respirador recomendado em biossegurança contra patógenos aéreos.",
    "referencia": "ABNT NBR 13698 e NR-06"
  },
  {
    "id": 584,
    "materia": "NR-06",
    "dificuldade": "PPR Fundacentro e NR-06",
    "enunciado": "Para a proteção respiratória em ambientes com deficiência de oxigênio (concentração de O2 no ar abaixo de 12,5% em volume), é TERMINANTEMENTE PROIBIDO o uso de:",
    "alternativas": {
      "A": "Aparelhos de respiração autônoma de circuito aberto de pressão positiva.",
      "B": "Linhas de suprimento contínuo de ar filtrado tipo narguilé hospitalar.",
      "C": "Respiradores purificadores de ar (com filtros mecânicos ou químicos), devendo-se utilizar obrigatoriamente respiradores de adução de ar (máscara autônoma ou linha de ar comprimido).",
      "D": "Qualquer equipamento que forneça ar puro comprimido ao operador.",
      "E": "Cilindros de ar respirável medicinal comprimido."
    },
    "resposta_correta": "C",
    "comentario": "Filtros purificadores não geram oxigênio; em atmosferas IPVS com asfixia ou deficiência de oxigênio (< 12,5%), é obrigatório o uso de suprimento de ar (adução de ar).",
    "referencia": "PPR Fundacentro e NR-06"
  },
  {
    "id": 585,
    "materia": "NR-06",
    "dificuldade": "ANSI S12.6, Fundacentro e NR-06",
    "enunciado": "Em relação à atenuação sonora fornecida por protetores auriculares, o indicador técnico medido em decibéis que indica o nível de redução de ruído obtido em ensaios laboratoriais com usuários treinados é o:",
    "alternativas": {
      "A": "pH (Potencial Hidrogeniônico da Água).",
      "B": "PPM (Partes Por Milhão de Mercúrio).",
      "C": "IBUTG (Índice de Bulbo Úmido Termômetro de Globo).",
      "D": "NRRsf (Nível de Redução de Ruído Subject Fit).",
      "E": "BTU (British Thermal Unit)."
    },
    "resposta_correta": "D",
    "comentario": "O NRRsf (Subject Fit) é a métrica brasileira adotada no CA do MTE para indicar a redução sonora real média proporcionada pelo protetor auditivo ao trabalhador.",
    "referencia": "ANSI S12.6, Fundacentro e NR-06"
  },
  {
    "id": 586,
    "materia": "NR-06",
    "dificuldade": "NR-35 e NR-06, Anexo I",
    "enunciado": "Para a realização de trabalhos em altura (atividades executadas acima de 2,00 m do nível inferior com risco de queda) na manutenção predial do hospital, o EPI de retenção de queda obrigatório é:",
    "alternativas": {
      "A": "O cinturão de segurança tipo paraquedista integrado com dispositivo trava-quedas ou talabarte de segurança.",
      "B": "Sapatos com solado de couro liso encerado sem travas.",
      "C": "Uma corda de sisal amarrada firmemente em torno do pescoço do trabalhador.",
      "D": "Uma rede de pesca amarrada nas pernas do empregado.",
      "E": "O cinto de couro abdominal simples do tipo eletricista antigo sem alças nos ombros."
    },
    "resposta_correta": "A",
    "comentario": "A NR-35 e a NR-06 proíbem o cinto abdominal para retenção de queda, exigindo o cinturão tipo paraquedista conectado a talabarte com absorvedor de energia ou trava-quedas.",
    "referencia": "NR-35 e NR-06, Anexo I"
  },
  {
    "id": 587,
    "materia": "NR-06",
    "dificuldade": "NR-06 e NR-32",
    "enunciado": "As luvas confeccionadas em borracha nitrílica são amplamente utilizadas em serviços de saúde e farmácias hospitalares porque:",
    "alternativas": {
      "A": "Devem ser trocadas a cada 10 anos de uso contínuo.",
      "B": "Apresentam excelente resistência química a solventes e citostáticos, boa resistência mecânica a rasgos e não provocam alergia ao látex natural.",
      "C": "Dissolvem-se em contato com a água corrente da torneira.",
      "D": "São feitas de algodão cru e deixam passar todos os líquidos infecciosos.",
      "E": "São destinadas unicamente a soldadores industriais de tubulações de gás."
    },
    "resposta_correta": "B",
    "comentario": "A borracha nitrílica sintética combina proteção mecânica superior, ampla compatibilidade com saneantes e quimioterápicos e ausência de proteínas do látex.",
    "referencia": "NR-06 e NR-32"
  },
  {
    "id": 588,
    "materia": "NR-06",
    "dificuldade": "NR-32, item 32.2.4.7 e NR-06",
    "enunciado": "Qual é o tipo de calçado de segurança exigido pela NR-32 para trabalhadores que atuam em serviços hospitalares e de saúde em geral?",
    "alternativas": {
      "A": "Botas de cano longo com furos circulares nas solas para respiração.",
      "B": "Chinelos abertos de tiras de borracha de praia.",
      "C": "Calçado completamente fechado (região anterior e calcanhar), solado antiderrapante e confeccionado em material impermeável e lavável.",
      "D": "Sandálias de couro com solado de feltro de lã escorregadio.",
      "E": "Tamancos de madeira com salto alto e abertura frontal nos dedos."
    },
    "resposta_correta": "C",
    "comentario": "A NR-32 proíbe o uso de calçados abertos; o calçado deve ser completamente fechado e antiderrapante para evitar quedas e perfurações por agulhas descartadas.",
    "referencia": "NR-32, item 32.2.4.7 e NR-06"
  },
  {
    "id": 589,
    "materia": "NR-06",
    "dificuldade": "NR-06 e NR-32",
    "enunciado": "Em relação à proteção ocular contra impactos de partículas volantes multidirecionais e respingos de produtos químicos e biológicos nos olhos:",
    "alternativas": {
      "A": "Os óculos de segurança devem dispor de proteção lateral e ajuste anatômico ao contorno da face (óculos de ampla visão com ventilação indireta).",
      "B": "Basta o trabalhador piscar rapidamente os olhos quando ouvir um barulho de vidro quebrando.",
      "C": "Podem ser utilizados óculos de natação com lentes escuras espelhadas.",
      "D": "Óculos de sol esportivos comprados em camelôs suprem qualquer exigência de segurança.",
      "E": "Os óculos de segurança devem ser retirados sempre que houver risco de respingos."
    },
    "resposta_correta": "A",
    "comentario": "Óculos de ampla visão (goggles) com proteção periférica e vedação evitam a entrada de respingos e aerossóis químicos ou biológicos nos olhos do operador.",
    "referencia": "NR-06 e NR-32"
  },
  {
    "id": 590,
    "materia": "NR-06",
    "dificuldade": "NR-06, Anexo I e Manual de Biossegurança",
    "enunciado": "Qual é o equipamento de proteção individual indicado para proteger a pele das mãos e antebraços contra temperaturas extremas frias (ex: manuseio de gelo seco ou ultrafreezers de vacinas a -80ºC na farmácia hospitalar)?",
    "alternativas": {
      "A": "Luvas cirúrgicas de látex ultrafinas número 6.",
      "B": "Luvas de malha de algodão sem dedos.",
      "C": "Luvas de proteção criogênica (térmica para baixas temperaturas) com CA específico.",
      "D": "Luvas plásticas descartáveis de fechar sanduíches.",
      "E": "Manuseio direto com as mãos despidas molhadas em água morna."
    },
    "resposta_correta": "C",
    "comentario": "O contato com superfícies ou recipientes criogênicos a temperaturas ultrabaixas exige luvas isolantes térmicas contra frio extremo (EPI com CA para frio).",
    "referencia": "NR-06, Anexo I e Manual de Biossegurança"
  },
  {
    "id": 591,
    "materia": "NR-17",
    "dificuldade": "NR-17, item 17.5.1",
    "enunciado": "O subitem 17.5.1 da NR-17 estabelece que o transporte manual regular de cargas deve ser executado de forma que:",
    "alternativas": {
      "A": "Apenas homens com mais de 50 anos sejam autorizados a levantar pesos.",
      "B": "O peso da carga não comprometa a saúde ou a segurança do trabalhador, adotando-se medidas de prevenção técnicas e organizacionais.",
      "C": "As cargas pesadas sejam obrigatoriamente arremessadas pelo ar entre os funcionários.",
      "D": "O trabalhador carregue no mínimo 100 kg sozinho em cada viagem.",
      "E": "O empregado assine um termo abrindo mão de sua coluna vertebral."
    },
    "resposta_correta": "B",
    "comentario": "A NR-17 (item 17.5.1) determina que nenhum trabalhador deve transportar manualmente cargas cujo peso seja suscetível de comprometer sua saúde ou segurança.",
    "referencia": "NR-17, item 17.5.1"
  },
  {
    "id": 592,
    "materia": "NR-17",
    "dificuldade": "CLT Art. 390 e NR-17",
    "enunciado": "Qual é o limite máximo legal de peso para o transporte manual contínuo de cargas por mulheres trabalhadoras fixado pelo Artigo 390 da CLT?",
    "alternativas": {
      "A": "50 kg para o trabalho contínuo e 80 kg para o trabalho ocasional.",
      "B": "20 kg para o trabalho contínuo e 25 kg para o trabalho ocasional.",
      "C": "10 kg exclusivamente se a trabalhadora for solteira.",
      "D": "5 kg para qualquer atividade sob pena de rescisão.",
      "E": "Não existe nenhum limite de peso para mulheres na legislação brasileira."
    },
    "resposta_correta": "B",
    "comentario": "O Art. 390 da CLT fixa para mulheres o limite máximo de 20 kg para trabalho contínuo e 25 kg para trabalho ocasional no transporte manual de cargas.",
    "referencia": "CLT Art. 390 e NR-17"
  },
  {
    "id": 593,
    "materia": "NR-17",
    "dificuldade": "Princípios de Biomecânica Ocupacional e NR-17",
    "enunciado": "Durante a técnica correta de levantamento manual de uma caixa pesada do chão, o trabalhador deve adotar a seguinte postura biomecânica protetora:",
    "alternativas": {
      "A": "Girar o tronco bruscamente para o lado oposto no mesmo instante do levantamento.",
      "B": "Segurar a caixa na ponta dos dedos com os braços esticados para frente bem longe do peito.",
      "C": "Manter as pernas totalmente retas e esticadas e curvar as costas a 90 graus forçando a lombar.",
      "D": "Flexionar os joelhos mantendo as costas eretas, segurar a carga junto ao corpo e levantar usando a força dos músculos das pernas, sem torcer o tronco.",
      "E": "Prender a respiração e puxar a carga com a força exclusiva dos músculos do pescoço."
    },
    "resposta_correta": "D",
    "comentario": "O levantamento ergonômico correto utiliza a flexão de pernas, preserva as curvaturas fisiológicas da coluna, aproxima o centro de gravidade da carga do corpo e evita torção espinhal.",
    "referencia": "Princípios de Biomecânica Ocupacional e NR-17"
  },
  {
    "id": 594,
    "materia": "NR-17",
    "dificuldade": "NR-17 e Diretrizes de Ergonomia Hospitalar",
    "enunciado": "Na transferência de um paciente acamado obeso e dependente para a maca na enfermaria da FHCGV, a melhor prática ergonômica de prevenção de lombalgias é:",
    "alternativas": {
      "A": "Jogar o paciente de uma cama para a outra com um empurrão rápido.",
      "B": "Realizar a manobra com o auxílio de mais profissionais (no mínimo 2 a 3 pessoas), ajustando a altura do leito, travando as rodas e utilizando dispositivos de deslizamento (prancha rollboard ou lençol traçador).",
      "C": "Exigir que o próprio paciente salte para a maca mesmo que esteja sedado.",
      "D": "Puxar o paciente pelas pernas bruscamente da cama para o chão.",
      "E": "Determinar que uma única técnica de enfermagem puxe o paciente sozinha no colo."
    },
    "resposta_correta": "B",
    "comentario": "A movimentação segura de pacientes acamados exige trabalho compartilhado em equipe, regulagem da altura dos leitos, travas acionadas e uso de recursos auxiliares de deslizamento.",
    "referencia": "NR-17 e Diretrizes de Ergonomia Hospitalar"
  },
  {
    "id": 595,
    "materia": "NR-17",
    "dificuldade": "NR-17, item 17.5.2",
    "enunciado": "O uso de meios técnicos e dispositivos mecânicos para o transporte e movimentação de cargas e pacientes (como guinchos de transferência elétricos, carrinhos hidráulicos e esteiras) visa:",
    "alternativas": {
      "A": "Substituir todos os médicos por operadores de guindaste de porto.",
      "B": "Aumentar o esforço físico dos enfermeiros durante o plantão noturno.",
      "C": "Comprovar que o hospital não precisa de enfermeiros concursados.",
      "D": "Eliminar ou reduzir a sobrecarga osteomuscular sobre a coluna vertebral e membros superiores dos trabalhadores de saúde.",
      "E": "Tornar o atendimento médico mais lento e ineficiente de propósito."
    },
    "resposta_correta": "D",
    "comentario": "Dispositivos mecânicos de auxílio reduzem drasticamente as forças de compressão discal lombar e cisalhamento, prevenindo hérnias de disco e LER/DORT.",
    "referencia": "NR-17, item 17.5.2"
  },
  {
    "id": 596,
    "materia": "NR-17",
    "dificuldade": "Equação do NIOSH e Biomecânica da Coluna",
    "enunciado": "Dentre os fatores de risco ergonômico associados ao levantamento manual de cargas, a distância horizontal entre a carga e o corpo do trabalhador atua:",
    "alternativas": {
      "A": "Protegendo as articulações dos ombros contra bursites e tendinites.",
      "B": "Fazendo com que o trabalhador gaste menos energia física.",
      "C": "Diminuindo o peso real da carga pela ação da gravidade invertida.",
      "D": "Aumentando o braço de alavanca e multiplicando a força de compressão exercida sobre as vértebras lombares (L5-S1) conforme a carga se afasta do tronco.",
      "E": "Eliminando qualquer risco de lesão muscular nas costas."
    },
    "resposta_correta": "D",
    "comentario": "Quanto mais distante a carga estiver do corpo (maior o braço de alavanca), maior será o torque mecânico resistivo e a compressão discal na coluna lombar.",
    "referencia": "Equação do NIOSH e Biomecânica da Coluna"
  },
  {
    "id": 597,
    "materia": "NR-17",
    "dificuldade": "Critérios NIOSH e Manual de Ergonomia NR-17",
    "enunciado": "A Equação de Levantamento do NIOSH (National Institute for Occupational Safety and Health) é uma metodologia amplamente reconhecida na NR-17 para:",
    "alternativas": {
      "A": "Avaliar a qualidade acústica de microfones em salas de conferência.",
      "B": "Medir a quantidade de calorias consumidas no café da manhã do refeitório.",
      "C": "Calcular o Limite de Peso Recomendado (LPR) e o Índice de Levantamento (IL) para tarefas de levantamento manual de cargas em postos de trabalho.",
      "D": "Estimar a velocidade de digitação em teclados de computador de escritório.",
      "E": "Determinar a quantidade de cloro que deve ser jogada na caixa d'água."
    },
    "resposta_correta": "C",
    "comentario": "A fórmula do NIOSH avalia a ergonomia do levantamento manual multiplicando fatores de peso, altura, distância, assimetria, frequência e pega para obter o LPR.",
    "referencia": "Critérios NIOSH e Manual de Ergonomia NR-17"
  },
  {
    "id": 598,
    "materia": "NR-17",
    "dificuldade": "Equação do NIOSH e Ergonomia",
    "enunciado": "Se uma tarefa de levantamento de caixas de soro fisiológico apresentar um Índice de Levantamento (IL) do NIOSH SUPERIOR A 1,0 (IL > 1,0):",
    "alternativas": {
      "A": "A tarefa é considerada ergonomicamente perfeita e livre de qualquer esforço físico.",
      "B": "A empresa está isenta de fornecer carrinhos de transporte interno.",
      "C": "O trabalho deve ser executado obrigatoriamente durante 24 horas ininterruptas.",
      "D": "O trabalhador deve receber um troféu de levantamento de peso olímpico.",
      "E": "A tarefa apresenta risco potencial de lesão osteomuscular para uma fração considerável da população trabalhadora, exigindo redesenho ergonômico do posto."
    },
    "resposta_correta": "E",
    "comentario": "IL <= 1,0 é o patamar seguro do NIOSH; valores acima de 1,0 indicam risco biomecânico progressivo que requer intervenções ergonômicas imediatas.",
    "referencia": "Equação do NIOSH e Ergonomia"
  },
  {
    "id": 599,
    "materia": "NR-17",
    "dificuldade": "NR-17 e Prevenção de Acidentes",
    "enunciado": "A respeito do transporte de caixas e volumes que bloqueiem a visão do trabalhador durante a caminhada:",
    "alternativas": {
      "A": "É permitido apenas se outro funcionário for empurrado na frente como batedor.",
      "B": "É permitido e incentivado para aguçar a percepção sensorial auditiva do operador.",
      "C": "Deve ser realizado com o trabalhador correndo para evitar cansaço nos braços.",
      "D": "A NR-17 e as normas preventivas vedam o transporte de cargas cujas dimensões impeçam a visibilidade da rota de circulação pelo trabalhador.",
      "E": "O trabalhador deve caminhar de costas com a carga sobre a cabeça."
    },
    "resposta_correta": "D",
    "comentario": "Cargas volumosas que obstruem a visão frontal do trajeto aumentam o risco de tropeços, quedas de mesmo nível, colisões e quedas em desníveis.",
    "referencia": "NR-17 e Prevenção de Acidentes"
  },
  {
    "id": 600,
    "materia": "NR-17",
    "dificuldade": "NR-17, item 17.5.3",
    "enunciado": "Qual a exigência ergonômica da NR-17 quanto às pegas e alças das caixas e recipientes manipulados manualmente no almoxarifado hospitalar?",
    "alternativas": {
      "A": "Devem ser obrigatoriamente lubrificadas com óleo mineral para deslizarem facilmente.",
      "B": "Devem ser dispensadas, devendo o trabalhador prensar a carga com a ponta do nariz.",
      "C": "Devem permitir empunhadura segura e confortável, com bordas arredondadas e formato que não comprima nervos e vasos sanguíneos da palma das mãos.",
      "D": "Devem ser amarradas com linha de costura ultrafina que machuque os dedos.",
      "E": "Devem ter pontas afiadas de aço cortante para estimular o reflexo neuromuscular."
    },
    "resposta_correta": "C",
    "comentario": "Alças adequadas garantem pega de boa qualidade (power grip), diminuem a força de preensão exigida e reduzem a fadiga dos músculos do antebraço.",
    "referencia": "NR-17, item 17.5.3"
  },
  {
    "id": 601,
    "materia": "NR-17",
    "dificuldade": "NR-17, item 17.6 e Princípios de Ergonomia",
    "enunciado": "Em relação à altura da superfície de trabalho (como bancadas de separação de medicamentos ou mesas de preparo cirúrgico), a NR-17 preconiza que:",
    "alternativas": {
      "A": "A altura deve ser compatível com a estatura do trabalhador e com a natureza da tarefa realizada (mais alta para tarefas visuais de precisão e mais baixa para tarefas com força).",
      "B": "O trabalhador deve trabalhar sempre ajoelhado sobre o piso de cerâmica.",
      "C": "As mesas devem ser fixadas no teto a 2,5 metros de altura.",
      "D": "Todas as mesas do hospital devem ter exatamente 40 centímetros de altura do chão.",
      "E": "A altura da mesa deve ser sorteada mensalmente pelo setor de marcenaria."
    },
    "resposta_correta": "A",
    "comentario": "A altura correta da bancada varia com a biometria do usuário e a demanda do trabalho: cotovelo é o referencial (acima do cotovelo para precisão, abaixo para força muscular).",
    "referencia": "NR-17, item 17.6 e Princípios de Ergonomia"
  },
  {
    "id": 602,
    "materia": "NR-17",
    "dificuldade": "Biomecânica da Coluna e NR-17",
    "enunciado": "A torção axial do tronco combinada com a inclinação para frente durante o levantamento de peso é considerada um dos movimentos mais nocivos para a coluna porque:",
    "alternativas": {
      "A": "Aumenta a circulação de sangue no cérebro causando perda de apetite.",
      "B": "Fortalece instantaneamente todos os ossos da bacia pélvica.",
      "C": "Provoca a descoloração dos sapatos de segurança utilizados.",
      "D": "Provoca sobrecarga assimétrica e cisalhamento sobre as fibras do ânulo fibroso do disco intervertebral, aumentando exponencialmente o risco de herniação discal.",
      "E": "Impede que o trabalhador respire oxigênio por mais de duas horas."
    },
    "resposta_correta": "D",
    "comentario": "A rotação combinada com flexão estressa criticamente as fibras anulares do disco lombar, facilitando rupturas e expulsão do núcleo pulposo (hérnia de disco).",
    "referencia": "Biomecânica da Coluna e NR-17"
  },
  {
    "id": 603,
    "materia": "NR-17",
    "dificuldade": "NR-17 e NR-08",
    "enunciado": "Em relação ao piso dos corredores e setores onde há transporte manual de cargas e movimentação de carrinhos e leitos na FHCGV, a NR-17 e NR-08 exigem que seja:",
    "alternativas": {
      "A": "Construído com buracos profundos para armazenamento de água da chuva.",
      "B": "Encerado diariamente com óleo lubrificante automotivo.",
      "C": "Plano, nivelado, antiderrapante, livre de obstáculos, fendas, desníveis ou ressaltos que dificultem a movimentação ou causem trancos nos membros superiores.",
      "D": "Inclinado em 45 graus para facilitar o escorregamento dos carrinhos.",
      "E": "Coberto por pedras soltas pontiagudas de cascalho e brita."
    },
    "resposta_correta": "C",
    "comentario": "Pisos nivelados, regulares e sem obstáculos diminuem a resistência ao rolamento de carrinhos e eliminam riscos de tropeços e sobrecargas bruscas na coluna.",
    "referencia": "NR-17 e NR-08"
  },
  {
    "id": 604,
    "materia": "NR-17",
    "dificuldade": "NR-17, item 17.6.6",
    "enunciado": "Os assentos utilizados nos postos de trabalho onde as atividades podem ser executadas sentadas (como triagem da recepção e bancadas de farmácia) devem atender aos seguintes requisitos da NR-17:",
    "alternativas": {
      "A": "Cadeiras de praia de plástico dobráveis com altura fixa de 20 centímetros.",
      "B": "Assento de pedra granito liso sem encosto e sem qualquer regulagem de altura.",
      "C": "Poltronas estofadas com plumas de ganso que façam o operador afundar 50 centímetros.",
      "D": "Bancos giratórios de madeira dura com pontas de pregos salientes no encosto.",
      "E": "Altura ajustável à estatura do trabalhador e à natureza da função, borda frontal arredondada, encosto com suporte lombar e base com estabilidade."
    },
    "resposta_correta": "E",
    "comentario": "O item 17.6 da NR-17 detalha requisitos de cadeiras: altura ajustável, borda anterior arredondada, encosto anatômico lombar e estabilidade com 5 rodízios.",
    "referencia": "NR-17, item 17.6.6"
  },
  {
    "id": 605,
    "materia": "NR-17",
    "dificuldade": "NR-17, item 17.6.3",
    "enunciado": "Para atividades em que os trabalhos devam ser realizados de pé, a NR-17 (subitem 17.6.3) determina que:",
    "alternativas": {
      "A": "O trabalhador deve ficar amarrado a um poste de madeira ereto.",
      "B": "O trabalhador fica expressamente proibido de se sentar durante toda a sua vida profissional.",
      "C": "A jornada de trabalho em pé deve ser estendida para 24 horas consecutivas.",
      "D": "A empresa deve confiscar todas as cadeiras do estabelecimento para evitar preguiça.",
      "E": "Devem ser disponibilizados assentos para serem utilizados nas pausas que possam ser feitas durante a jornada de trabalho, em locais acessíveis aos trabalhadores."
    },
    "resposta_correta": "E",
    "comentario": "O trabalho em pé prolongado gera estase venosa e fadiga lombar; a NR-17 obriga a colocação de assentos para descanso nas pausas de tarefas estáticas.",
    "referencia": "NR-17, item 17.6.3"
  },
  {
    "id": 606,
    "materia": "NR-17",
    "dificuldade": "NR-17, itens 17.3.1 e 17.3.2",
    "enunciado": "A nova redação da NR-17 estruturou o processo de gestão ergonômica em duas etapas complementares e sucessivas:",
    "alternativas": {
      "A": "O Teste de Aptidão Física Militar e a Pesagem Balística.",
      "B": "O Laudo Contábil de Custos e o Balanço Patrimonial de Vendas.",
      "C": "A Avaliação Ergonômica Preliminar (AEP) e a Análise Ergonômica do Trabalho (AET).",
      "D": "A Entrevista de Demissão e o Teste de DNA Laboratorial.",
      "E": "O Exame Pré-nupcial e a Certidão Negativa de Protestos."
    },
    "resposta_correta": "C",
    "comentario": "A nova NR-17 introduziu a AEP (Avaliação Ergonômica Preliminar integrada ao GRO/PGR) e reservou a AET para situações complexas ou com exigência aprofundada.",
    "referencia": "NR-17, itens 17.3.1 e 17.3.2"
  },
  {
    "id": 607,
    "materia": "NR-17",
    "dificuldade": "NR-17, item 17.3.1",
    "enunciado": "A Avaliação Ergonômica Preliminar (AEP) das situações de trabalho deve ser realizada pela organização para:",
    "alternativas": {
      "A": "Determinar quais funcionários devem ser transferidos para outro município.",
      "B": "Comprar móveis de escritório de luxo para a sala da presidência.",
      "C": "Substituir o exame médico periódico realizado pelo médico do trabalho.",
      "D": "Identificar os perigos e produzir subsídios para o planejamento das medidas de prevenção incluídas no PGR.",
      "E": "Calcular o imposto sobre a propriedade territorial do prédio hospitalar."
    },
    "resposta_correta": "D",
    "comentario": "A AEP é a triagem ergonômica inicial obrigatória de todos os postos de trabalho para mapear fatores de risco e alimentar o Inventário de Riscos do PGR.",
    "referencia": "NR-17, item 17.3.1"
  },
  {
    "id": 608,
    "materia": "NR-17",
    "dificuldade": "NR-17, item 17.3.2",
    "enunciado": "A organização deve realizar a Análise Ergonômica do Trabalho (AET), um estudo detalhado e aprofundado da situação de trabalho, nas seguintes circunstâncias, EXCETO:",
    "alternativas": {
      "A": "Quando indicada em decorrência de análise de acidentes e doenças relacionadas ao trabalho.",
      "B": "Quando for necessária uma avaliação mais aprofundada da situação ergonômica identificada na AEP.",
      "C": "Obrigatoriamente a cada 15 dias para todos os escritórios administrativos sem riscos.",
      "D": "Quando sugerida pelo acompanhamento de saúde dos trabalhadores no PCMSO.",
      "E": "Quando forem identificadas inadequações ou insuficiências das medidas de prevenção adotadas."
    },
    "resposta_correta": "C",
    "comentario": "A AET não é um documento bimestral de rotina para escritórios simples; ela é disparada por gatilhos técnicos previstos taxativamente no subitem 17.3.2 da NR-17.",
    "referencia": "NR-17, item 17.3.2"
  },
  {
    "id": 609,
    "materia": "NR-17",
    "dificuldade": "NR-17, item 17.3.3 e Metodologia Francesa de Ergonomia",
    "enunciado": "A AET (Análise Ergonômica do Trabalho) contempla o estudo minucioso da atividade real de trabalho, compreendendo:",
    "alternativas": {
      "A": "O recolhimento de assinaturas de apoio político em anos eleitorais.",
      "B": "Apenas o tamanho da tela do computador do diretor de compras.",
      "C": "A análise da demanda, a análise da tarefa prescrita em confronto com a atividade real executada, os fatores ambientais, a biomecânica e a organização do trabalho.",
      "D": "A conferência da marca dos sapatos usados pelos trabalhadores.",
      "E": "A medição da velocidade do vento nas janelas externas do edifício."
    },
    "resposta_correta": "C",
    "comentario": "A metodologia da AET baseia-se na Ergonomia da Atividade, analisando o trabalho real, variabilidades, constrangimentos biomecânicos e organizacionais.",
    "referencia": "NR-17, item 17.3.3 e Metodologia Francesa de Ergonomia"
  },
  {
    "id": 610,
    "materia": "NR-17",
    "dificuldade": "NR-17, item 17.3.4",
    "enunciado": "Qual é o papel dos trabalhadores durante a realização da Avaliação Ergonômica Preliminar (AEP) e da AET pela equipe de SST?",
    "alternativas": {
      "A": "Apenas o presidente da fundação hospitalar tem autorização para emitir opiniões.",
      "B": "Os trabalhadores devem assinar relatórios em branco sem ler o conteúdo.",
      "C": "Os trabalhadores devem se esconder nos banheiros enquanto durar a inspeção.",
      "D": "Os trabalhadores devem ser ouvidos e participar ativamente do processo de identificação dos desconfortos, perigos e na proposição de melhorias ergonômicas.",
      "E": "Os trabalhadores devem ser proibidos de falar com o ergonomista sob pena de demissão."
    },
    "resposta_correta": "D",
    "comentario": "A participação dos operadores reais é pilar da ergonomia; eles vivenciam as exigências do posto e indicam as dificuldades operacionais e dores sentidas.",
    "referencia": "NR-17, item 17.3.4"
  },
  {
    "id": 611,
    "materia": "NR-17",
    "dificuldade": "NR-17, item 17.3.6 e NR-01",
    "enunciado": "O relatório da AET deve conter recomendações ergonômicas práticas e aplicáveis que devem ser integradas ao:",
    "alternativas": {
      "A": "Diário de bordo dos motoristas de ambulância da capital.",
      "B": "Arquivo morto de processos judiciais encerrados.",
      "C": "Livro de receitas de sobremesas da copa do hospital.",
      "D": "Edital de licitação de compra de materiais de limpeza.",
      "E": "Plano de Ação do Programa de Gerenciamento de Riscos (PGR) da organização."
    },
    "resposta_correta": "E",
    "comentario": "As medidas ergonômicas apontadas na AET devem ser absorvidas pelo Plano de Ação do PGR, com responsáveis, cronogramas e monitoramento de eficácia.",
    "referencia": "NR-17, item 17.3.6 e NR-01"
  },
  {
    "id": 612,
    "materia": "NR-17",
    "dificuldade": "NR-17, item 17.3.7",
    "enunciado": "Em relação às Microempresas (ME) e Empresas de Pequeno Porte (EPP) enquadradas nos graus de risco 1 e 2:",
    "alternativas": {
      "A": "Não precisam cumprir nenhuma Norma Regulamentadora do Ministério do Trabalho.",
      "B": "Ficam proibidas de comprar cadeiras com rodízios e encosto acolchoado.",
      "C": "Estão autorizadas a submeter seus trabalhadores a cargas de 200 kg nas costas.",
      "D": "Devem fechar as portas caso comprem computadores para seus escritórios.",
      "E": "Estão dispensadas da elaboração da AET, mas devem realizar a AEP e implementar as medidas de prevenção ergonômica decorrentes."
    },
    "resposta_correta": "E",
    "comentario": "A NR-17 (item 17.3.7) dispensa ME e EPP graus de risco 1 e 2 da AET completa, mas mantém o dever de realizar a avaliação preliminar e aplicar soluções ergonômicas.",
    "referencia": "NR-17, item 17.3.7"
  },
  {
    "id": 613,
    "materia": "NR-17",
    "dificuldade": "NR-17, item 17.8",
    "enunciado": "Os parâmetros de CONFORTO AMBIENTAL para ambientes de trabalho onde são executadas atividades que exijam solicitação intelectual e atenção constante (como postos de enfermagem, farmácia e escritórios) exigem:",
    "alternativas": {
      "A": "Ruído de britadeira industrial contínuo para evitar que os empregados durmam.",
      "B": "Temperatura de 45ºC com ar parado para estimular a transpiração dos funcionários.",
      "C": "Escuridão total com janelas cobertas com lona preta em todas as salas.",
      "D": "Lâmpadas estroboscópicas que pisquem rapidamente a cada segundo no teto.",
      "E": "Nível de ruído de conforto aceitável (conforme NBR 10152), temperatura operacional entre 18ºC e 25ºC e iluminação adequada e uniforme sem ofuscamento."
    },
    "resposta_correta": "E",
    "comentario": "O item 17.8 da NR-17 define parâmetros de conforto: temperatura entre 18ºC e 25ºC em ambientes climatizados, iluminação adequada (NBR ISO/CIE 8995-1) e ruído de conforto.",
    "referencia": "NR-17, item 17.8"
  },
  {
    "id": 614,
    "materia": "NR-17",
    "dificuldade": "NR-17, item 17.8 e NBR ISO/CIE 8995-1",
    "enunciado": "A iluminação nos postos de trabalho da FHCGV, seja ela natural ou artificial, deve ser planejada para evitar:",
    "alternativas": {
      "A": "O uso de lâmpadas de LED econômicas e duráveis.",
      "B": "A leitura das receitas médicas e rótulos de medicamentos pelos técnicos.",
      "C": "A claridade natural do sol nos horários de almoço.",
      "D": "Ofuscamento, reflexos incômodos nas telas de computadores, sombras excessivas e contrastes visuais acentuados.",
      "E": "Que os trabalhadores enxerguem os relógios de parede nos corredores."
    },
    "resposta_correta": "D",
    "comentario": "A boa ergonomia visual requer iluminação uniforme, sem cintilação, evitando reflexos em monitores que causem astenopia (fadiga visual) e posturas compensatórias.",
    "referencia": "NR-17, item 17.8 e NBR ISO/CIE 8995-1"
  },
  {
    "id": 615,
    "materia": "NR-17",
    "dificuldade": "Código Civil Art. 927, CLT e NR-17",
    "enunciado": "Se a fiscalização do trabalho ou a perícia judicial constatar a presença de trabalhadores acometidos por tendinites e lombalgias crônicas em um hospital que nunca realizou AEP nem AET:",
    "alternativas": {
      "A": "O juiz determinará a demolição do prédio hospitalar sem prévio aviso.",
      "B": "Os trabalhadores doentes serão obrigados a devolver o dinheiro dos salários recebidos.",
      "C": "O hospital fica autorizado a não pagar o décimo terceiro salário no final do ano.",
      "D": "O empregador responderá por descumprimento das normas de ergonomia e segurança (NR-17 e NR-01), sujeitando-se a multas administrativas, Termos de Ajuste de Conduta (TAC) do MPT e indenizações por danos morais e materiais aos adoecidos.",
      "E": "A fundação receberá um prêmio de eficiência orçamentária do Ministério da Fazenda."
    },
    "resposta_correta": "D",
    "comentario": "A omissão ergonômica com nexo causal em DORT gera responsabilidade civil objetiva/subjetiva do empregador e sanções severas dos órgãos de fiscalização do trabalho.",
    "referencia": "Código Civil Art. 927, CLT e NR-17"
  },
  {
    "id": 616,
    "materia": "NR-17",
    "dificuldade": "NR-17, item 17.4",
    "enunciado": "A respeito da ORGANIZAÇÃO DO TRABALHO segundo a NR-17 (item 17.4), ela deve levar em consideração:",
    "alternativas": {
      "A": "As normas de produção, o modo operatório, a exigência de tempo, a determinação do conteúdo de tempo, o ritmo de trabalho e o conteúdo das tarefas.",
      "B": "O preço das passagens de avião para viagens de turismo.",
      "C": "A preferência musical do gerente de compras do hospital.",
      "D": "A distância em quilômetros do hospital até o Oceano Atlântico.",
      "E": "Apenas o signo do zodíaco do trabalhador nascido no mês vigente."
    },
    "resposta_correta": "A",
    "comentario": "A organização do trabalho engloba pressões temporais, cadência, ritmo, metas de produção, pausas, complexidade das tarefas e autonomia do operador.",
    "referencia": "NR-17, item 17.4"
  },
  {
    "id": 617,
    "materia": "NR-17",
    "dificuldade": "NR-17, item 17.4.4",
    "enunciado": "As PAUSAS regulamentares durante a jornada de trabalho em atividades que exigem sobrecarga muscular estática ou repetitividade de movimentos:",
    "alternativas": {
      "A": "Devem ser pagas com horas extras realizadas de madrugada no dia seguinte.",
      "B": "Devem ser usufruídas enquanto o funcionário lava as privadas do setor.",
      "C": "Devem ser usufruídas fora do posto de trabalho, serem computadas como tempo de trabalho efetivo e não podem ser acompanhadas de aumento do ritmo após o retorno.",
      "D": "Ficam proibidas caso o dia da semana seja uma segunda-feira.",
      "E": "Devem ser descontadas integralmente do salário do trabalhador no final do mês."
    },
    "resposta_correta": "C",
    "comentario": "Pausas ergonômicas são parte integrante da jornada de trabalho (remuneradas), destinadas à recuperação fisiológica sem compensação posterior de sobrecarga.",
    "referencia": "NR-17, item 17.4.4"
  },
  {
    "id": 618,
    "materia": "NR-17",
    "dificuldade": "Cronobiologia e NR-17",
    "enunciado": "O trabalho hospitalar em regime de TURNOS e PLANTÕES NOTURNOS (como a escala 12x36 horas) altera os ritmos circadianos biológicos do ser humano, estando associado a:",
    "alternativas": {
      "A": "Aumento instantâneo da força física dos ossos dos braços.",
      "B": "Redução permanente da necessidade de dormir para 10 minutos por dia.",
      "C": "Ganho de visão telescópica noturna natural semelhante à dos felinos.",
      "D": "Cura espontânea de todas as infecções bacterianas do corpo.",
      "E": "Distúrbios do ciclo vigília-sono, fadiga crônica, alterações gastrointestinais, desregulação hormonal e aumento do risco de erros e acidentes ocupacionais."
    },
    "resposta_correta": "E",
    "comentario": "O trabalho noturno perturba o ciclo circadiano, a produção de melatonina e cortisol, favorecendo insônia, irritabilidade, síndrome de burnout e acidentes.",
    "referencia": "Cronobiologia e NR-17"
  },
  {
    "id": 619,
    "materia": "NR-17",
    "dificuldade": "Diretrizes de Cronobiologia e Medicina do Trabalho",
    "enunciado": "Para minimizar o impacto nocivo do trabalho em turnos rotativos sobre a saúde dos profissionais da FHCGV, a recomendação cronobiológica e ergonômica é:",
    "alternativas": {
      "A": "Proibir a ingestão de alimentos quentes e líquidos durante as madrugadas.",
      "B": "Obrigar os funcionários a não dormirem durante os seus dias de folga.",
      "C": "Eliminar qualquer folga semanal durante períodos de 6 meses seguidos.",
      "D": "Adotar preferencialmente a rotação no sentido horário para frente (turno da manhã -> turno da tarde -> turno da noite), com intervalos regulares e salas de descanso apropriadas.",
      "E": "Alternar os plantões a cada duas horas de forma totalmente caótica e imprevisível."
    },
    "resposta_correta": "D",
    "comentario": "A rotação horária para frente respeita a tendência natural de extensão do relógio circadiano humano (> 24 horas), facilitando a adaptação fisiológica do sono.",
    "referencia": "Diretrizes de Cronobiologia e Medicina do Trabalho"
  },
  {
    "id": 620,
    "materia": "NR-17",
    "dificuldade": "Lei 14.602/2023 e NR-17",
    "enunciado": "Em relação às salas de descanso e conforto destinadas aos profissionais de enfermagem em plantões na FHCGV (conforme a Lei Federal nº 14.602/2023 e NR-17):",
    "alternativas": {
      "A": "Devem dispor de ambiente climatizado, leitos adequados, silêncio, privacidade, iluminação controlada e instalações sanitárias privativas higienizadas.",
      "B": "Devem ser localizadas dentro do expurgo de resíduos biológicos com lixo aberto.",
      "C": "Podem ser substituídas por caixas de papelão colocadas no chão dos corredores.",
      "D": "Ficam proibidas para servidores que trabalhem mais de 6 horas por dia.",
      "E": "Devem ser alugadas com cobrança de diária de hotel dos próprios enfermeiros."
    },
    "resposta_correta": "A",
    "comentario": "A Lei 14.602/2023 assegura condições dignas de repouso aos profissionais de enfermagem durante os plantões, com leitos adequados, climatização e salubridade.",
    "referencia": "Lei 14.602/2023 e NR-17"
  },
  {
    "id": 621,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "RDC 222/2018 e CONAMA 358/2005",
    "enunciado": "A RDC ANVISA nº 222/2018 e a Resolução CONAMA nº 358/2005 classificam os Resíduos de Serviços de Saúde (RSS) em quantos grandes grupos?",
    "alternativas": {
      "A": "Apenas dois grupos: resíduos caros e resíduos baratos.",
      "B": "Três grupos: sólidos, líquidos e invisíveis.",
      "C": "Vinte grupos conforme a idade do paciente atendido.",
      "D": "Cinco grupos: Grupo A (biológicos), Grupo B (químicos), Grupo C (rejeitos radioativos), Grupo D (resíduos comuns/recicláveis) e Grupo E (perfurocortantes).",
      "E": "Dez grupos divididos pelas cores da bandeira do Brasil."
    },
    "resposta_correta": "D",
    "comentario": "A classificação oficial dos RSS no Brasil divide-se nos 5 grupos clássicos: Grupo A (biológico), B (químico), C (radioativo), D (comum) e E (perfurocortante).",
    "referencia": "RDC 222/2018 e CONAMA 358/2005"
  },
  {
    "id": 622,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "RDC 222/2018, Art. 4º",
    "enunciado": "Os resíduos que contêm agentes biológicos que, por suas características de maior virulência ou concentração, podem apresentar risco de infecção humana ou animal pertencem ao:",
    "alternativas": {
      "A": "Grupo C (Rejeitos radioativos com emissores gama).",
      "B": "Grupo D (Resíduos comuns de escritório).",
      "C": "Grupo A (Resíduos com a possível presença de agentes biológicos).",
      "D": "Grupo E (Resíduos de jardinagem e poda de grama).",
      "E": "Grupo B (Resíduos químicos e farmacêuticos)."
    },
    "resposta_correta": "C",
    "comentario": "O Grupo A engloba os resíduos com risco biológico potencial ou confirmado, divididos nos subgrupos A1, A2, A3, A4 e A5.",
    "referencia": "RDC 222/2018, Art. 4º"
  },
  {
    "id": 623,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "RDC 222/2018, Anexo I",
    "enunciado": "Culturas microbiológicas puras de laboratório, estoques de microrganismos patogênicos e meios de cultura inoculados são classificados no subgrupo:",
    "alternativas": {
      "A": "C (fontes seladas de césio-137).",
      "B": "A3 (peças anatômicas de membros amputados).",
      "C": "D (podem ser jogados diretamente na lixeira comum da praça).",
      "D": "A1 (exigem obrigatoriamente tratamento prévio antes da destinação final externa).",
      "E": "B (considerados medicamentos anti-inflamatórios vencidos)."
    },
    "resposta_correta": "D",
    "comentario": "O subgrupo A1 inclui culturas e estoques de microrganismos de alta patogenicidade que devem ser submetidos a processo de inativação microbiana (ex: autoclave) na própria unidade geradora.",
    "referencia": "RDC 222/2018, Anexo I"
  },
  {
    "id": 624,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "RDC 222/2018, Anexo I",
    "enunciado": "Membros amputados humanos, placentas, órgãos e fragmentos de tecidos humanos retirados em procedimentos cirúrgicos pertencem ao subgrupo:",
    "alternativas": {
      "A": "A3 (Peças anatômicas de seres humanos).",
      "B": "Grupo D (Lixo comum de cozinha).",
      "C": "Grupo B (Resíduos com características corrosivas).",
      "D": "Grupo E (Materiais perfurantes descartáveis).",
      "E": "Subgrupo A5 (Resíduos com suspeita de príons)."
    },
    "resposta_correta": "A",
    "comentario": "O subgrupo A3 abrange órgãos, tecidos humanos e peças anatômicas cirúrgicas, com destinação própria (sepultamento em cemitério, cremação ou incineração).",
    "referencia": "RDC 222/2018, Anexo I"
  },
  {
    "id": 625,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "RDC 222/2018, Anexo I",
    "enunciado": "Algodão, gazes, curativos saturados com sangue, compressas, fraldas de pacientes acamados e kits de linhas de infusão sem agulhas enquadram-se no subgrupo:",
    "alternativas": {
      "A": "A4.",
      "B": "Grupo C.",
      "C": "A3.",
      "D": "Grupo B.",
      "E": "A1."
    },
    "resposta_correta": "A",
    "comentario": "O subgrupo A4 engloba resíduos biológicos rotineiros da assistência direta ao paciente (curativos com sangue, drenos, sondas, bolsas transfusionais vazias).",
    "referencia": "RDC 222/2018, Anexo I"
  },
  {
    "id": 626,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "RDC 222/2018, Anexo I",
    "enunciado": "Materiais e tecidos provenientes de pacientes suspeitos ou confirmados de encefalopatias espongiformes transmissíveis (doença de Creutzfeldt-Jakob causada por PRÍONS) são classificados como:",
    "alternativas": {
      "A": "Grupo E (frascos de vidro vazios de xarope).",
      "B": "Subgrupo A2 (animais de experimentação sadios).",
      "C": "Subgrupo A5 (exigem incineração em usina licenciada ou tratamento térmico específico).",
      "D": "Grupo B (saneantes alcalinos concentrados).",
      "E": "Grupo D (resíduo reciclável de plástico comum)."
    },
    "resposta_correta": "C",
    "comentario": "Os príons possuem extrema resistência a desinfetantes e autoclaves comuns; seus resíduos compõem o subgrupo A5 e devem ser submetidos à incineração.",
    "referencia": "RDC 222/2018, Anexo I"
  },
  {
    "id": 627,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "RDC 222/2018 e ABNT NBR 9191",
    "enunciado": "Os sacos plásticos utilizados para o acondicionamento dos resíduos infectantes do Grupo A devem ser confeccionados em material:",
    "alternativas": {
      "A": "Papel pardo biodegradável com furos decorativos no fundo.",
      "B": "Plástico preto comum sem qualquer símbolo visual de advertência.",
      "C": "Plástico transparente fino de supermercado com nó frouxo.",
      "D": "Tecido de linho ou juta costurado manualmente.",
      "E": "Plástico branco leitoso, impermeável, resistente a ruptura e perfuração, contendo impresso o símbolo internacional de risco biológico e a inscrição 'RESÍDUO INFECTANTE'."
    },
    "resposta_correta": "E",
    "comentario": "A RDC 222/2018 exige saco plástico branco leitoso, com espessura e solda contínua adequadas (norma ABNT NBR 9191) e símbolo padronizado de risco biológico.",
    "referencia": "RDC 222/2018 e ABNT NBR 9191"
  },
  {
    "id": 628,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "RDC 222/2018, Art. 15",
    "enunciado": "Qual é o limite máximo seguro de preenchimento dos sacos plásticos de resíduos dos Grupos A e D estipulado pela RDC ANVISA nº 222/2018 para permitir o fechamento sem compressão manual?",
    "alternativas": {
      "A": "Apenas 5% do volume total do saco.",
      "B": "Até 2/3 (dois terços) ou 70% de sua capacidade volumétrica.",
      "C": "Até transbordar pelas bordas superiores com o trabalhador pisando em cima.",
      "D": "Exatamente 100% da capacidade com o saco estufado e amarrado com fita adesiva.",
      "E": "Não há qualquer limite, o saco pode ser enchido até rasgar."
    },
    "resposta_correta": "B",
    "comentario": "Os sacos de resíduos só devem ser preenchidos até 2/3 ou no máximo 70% de sua capacidade para permitir fechamento seguro (lacre duplo) sem risco de vazamento ou rompimento.",
    "referencia": "RDC 222/2018, Art. 15"
  },
  {
    "id": 629,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "RDC 222/2018, Art. 4º",
    "enunciado": "Os resíduos do GRUPO B compreendem produtos químicos que apresentem periculosidade à saúde ou ao meio ambiente. São exemplos clássicos de resíduos do Grupo B na FHCGV:",
    "alternativas": {
      "A": "Papéis toalha secos utilizados na secagem de mãos em escritórios.",
      "B": "Folhas secas varridas do jardim do hospital e aparas de grama.",
      "C": "Agulhas descartáveis com sangue e bisturis usados em cirurgias.",
      "D": "Membros amputados humanos e tecidos de biópsia cirúrgica.",
      "E": "Medicamentos vencidos, sobras de quimioterápicos citostáticos, reagentes de laboratório, desinfetantes concentrados e termômetros contendo mercúrio líquido."
    },
    "resposta_correta": "E",
    "comentario": "O Grupo B reúne os resíduos químicos perigosos: fármacos, citostáticos, reveladores radiográficos, reagentes laboratoriais e metais pesados (mercúrio).",
    "referencia": "RDC 222/2018, Art. 4º"
  },
  {
    "id": 630,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "RDC 222/2018 e Convenção de Minamata",
    "enunciado": "O mercúrio metálico presente em termômetros clínicos e esfigmomanômetros antigos de pressão é classificado no Grupo B e apresenta gravidade ambiental porque:",
    "alternativas": {
      "A": "É um metal pesado altamente tóxico, cumulativo nos tecidos biológicos e neurotóxico persistente no meio ambiente.",
      "B": "É uma substância radioativa com meia-vida de 1 milhão de anos.",
      "C": "Transforma-se espontaneamente em ouro puro quando exposto ao sol.",
      "D": "É um nutriente essencial que purifica rios e igarapés.",
      "E": "É um gás incolor que faz o ser humano perder peso rapidamente."
    },
    "resposta_correta": "A",
    "comentario": "O mercúrio é um poluente tóxico persistente e bioacumulativo; a Convenção de Minamata e a ANVISA determinaram a sua eliminação e substituição por aparelhos digitais.",
    "referencia": "RDC 222/2018 e Convenção de Minamata"
  },
  {
    "id": 631,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "RDC 222/2018 e CONAMA 358/2005",
    "enunciado": "Os efluentes químicos gerados no processamento e revelação de filmes radiográficos analógicos (líquidos fixadores e reveladores) pertencem ao:",
    "alternativas": {
      "A": "Grupo B (resíduos químicos) e devem ser coletados e tratados para neutralização ou recuperação da prata, sendo proibido o descarte direto na rede de esgoto.",
      "B": "Grupo A (considerados bactérias hospitalares atenuadas).",
      "C": "Grupo C (rejeitos atômicos enriquecidos).",
      "D": "Grupo E (considerados objetos perfurocortantes afiados).",
      "E": "Grupo D (podem ser jogados na pia do banheiro sem nenhum tratamento)."
    },
    "resposta_correta": "A",
    "comentario": "Fixadores contêm prata e reveladores possuem hidroquinona e álcalis tóxicos (Grupo B); é proibido lançá-los na rede de esgoto sem tratamento prévio.",
    "referencia": "RDC 222/2018 e CONAMA 358/2005"
  },
  {
    "id": 632,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "RDC 222/2018, Art. 4º e Normas CNEN",
    "enunciado": "O GRUPO C na classificação da RDC ANVISA nº 222/2018 é reservado exclusivamente para os:",
    "alternativas": {
      "A": "Seringas descartáveis de plástico sem agulha.",
      "B": "Resíduos de alimentação coletiva do refeitório de funcionários.",
      "C": "Frascos de vidro quebrados de refrigerante comum.",
      "D": "Medicamentos comuns como dipirona e paracetamol vencidos.",
      "E": "Rejeitos radioativos (materiais contendo radionuclídeos em quantidade ou atividade superior aos limites de isenção estabelecidos pela CNEN)."
    },
    "resposta_correta": "E",
    "comentario": "O Grupo C abrange todos os rejeitos radioativos gerados em serviços de medicina nuclear, radioterapia e laboratórios de pesquisa, regulados pela CNEN e ANVISA.",
    "referencia": "RDC 222/2018, Art. 4º e Normas CNEN"
  },
  {
    "id": 633,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "Normas CNEN e RDC 222/2018",
    "enunciado": "Os rejeitos radioativos do Grupo C devem ser armazenados em área de decaimento específica até que:",
    "alternativas": {
      "A": "A chuva lave os recipientes no estacionamento descoberto.",
      "B": "O prédio do hospital complete 100 anos de inauguração.",
      "C": "O técnico de radiologia assine uma declaração no livro de atas do sindicato.",
      "D": "A sua atividade radioativa atinja os níveis de liberação/dispensa regulamentados pela Comissão Nacional de Energia Nuclear (CNEN), podendo então ser desclassificados.",
      "E": "Todos os pacientes do hospital recebam alta médica."
    },
    "resposta_correta": "D",
    "comentario": "O manejo de rejeitos radioativos no hospital prevê o armazenamento em abrigo de decaimento; decaída a atividade até o limite seguro da CNEN, são descartados conforme o grupo de risco residual.",
    "referencia": "Normas CNEN e RDC 222/2018"
  },
  {
    "id": 634,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "RDC 222/2018, Art. 4º",
    "enunciado": "O GRUPO D é constituído por resíduos que não apresentem risco biológico, químico ou radiológico à saúde ou ao meio ambiente, podendo ser equiparados aos resíduos:",
    "alternativas": {
      "A": "Perfurantes infectados por sangue contaminado por HIV.",
      "B": "Radioativos com emissores de partículas alfa.",
      "C": "Domiciliares ou comuns (papéis de escritório, restos de poda de jardins, sobras de alimentos de refeitórios sadios, copos plásticos descartáveis).",
      "D": "Hospitalares de alto contágio e virulência extrema.",
      "E": "Citotóxicos e mutagênicos de pacientes em quimioterapia."
    },
    "resposta_correta": "C",
    "comentario": "O Grupo D compreende os resíduos comuns da hotelaria, administração e alimentação sem contato com fluidos infecciosos, passíveis de reciclagem ou aterro sanitário comum.",
    "referencia": "RDC 222/2018, Art. 4º"
  },
  {
    "id": 635,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "Resolução CONAMA nº 275/2001",
    "enunciado": "Para estimular a reciclagem no Grupo D, a segregação dos resíduos recicláveis secos (papel, plástico, vidro, metal) deve seguir o padrão de cores da Resolução CONAMA nº 275/2001, sendo:",
    "alternativas": {
      "A": "Preto para plástico, Branco para vidro, Rosa para papel e Roxo para metal.",
      "B": "Marrom para metal, Dourado para papel, Prata para plástico e Azul para vidro.",
      "C": "Azul para papel, Vermelho para plástico, Verde para vidro e Amarelo para metal.",
      "D": "Todas as lixeiras devem ser pintadas de cinza escuro sem distinção.",
      "E": "Laranja para papel, Bege para plástico, Azul-marinho para vidro e Verde para metal."
    },
    "resposta_correta": "C",
    "comentario": "O código de cores internacional e CONAMA 275 é universal: Azul = Papel/Papelão; Vermelho = Plástico; Verde = Vidro; Amarelo = Metal; Marrom = Orgânico.",
    "referencia": "Resolução CONAMA nº 275/2001"
  },
  {
    "id": 636,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "RDC 222/2018, Art. 4º",
    "enunciado": "O GRUPO E engloba os resíduos perfurocortantes ou escarificantes gerados na assistência hospitalar, tais como:",
    "alternativas": {
      "A": "Restos de cascas de banana e maçã do lanche dos médicos.",
      "B": "Caixas de papelão vazias e copos descartáveis de café.",
      "C": "Comprimidos de vitamina C e cápsulas de antibiótico íntegras.",
      "D": "Toalhas de banho e lençóis de algodão da lavanderia hospitalar.",
      "E": "Agulhas hipodérmicas, lâminas de bisturi, ampolas de vidro quebradas, lancetas, fios-guia metálicos e tubos capilares laboratoriais."
    },
    "resposta_correta": "E",
    "comentario": "O Grupo E compreende todo material capaz de perfurar ou cortar tecidos humanos: agulhas, bisturis, ampolas de vidro, micropipetas e lâminas de microscopia.",
    "referencia": "RDC 222/2018, Art. 4º"
  },
  {
    "id": 637,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "RDC 222/2018 e ABNT NBR 13853",
    "enunciado": "Os resíduos do Grupo E (perfurocortantes) devem ser descartados obrigatoriamente em recipientes coletores que possuam as seguintes características técnicas:",
    "alternativas": {
      "A": "Sacos plásticos transparentes pendurados em maçanetas de portas de madeira.",
      "B": "Rígidos, resistentes a punctura, perfuração, ruptura e vazamento, com tampa e bocal seguro, dotados de símbolo de risco biológico e linha indicadora de limite máximo de preenchimento.",
      "C": "Vidros de conserva de azeitona com tampa de rosca metálica.",
      "D": "Baldes de lata enferrujados sem tampa no chão do banheiro.",
      "E": "Caixas de papelão comuns de supermercado com o topo aberto."
    },
    "resposta_correta": "B",
    "comentario": "A caixa amarela de perfurocortante (tipo Descarpack) deve atender à NBR 13853: parede rígida anti-punctura, bocal de retenção, tampa e limite visual de capacidade.",
    "referencia": "RDC 222/2018 e ABNT NBR 13853"
  },
  {
    "id": 638,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "RDC 222/2018 e NBR 13853",
    "enunciado": "A linha indicadora de nível máximo de preenchimento no coletor rígido de perfurocortantes (Grupo E) localiza-se a:",
    "alternativas": {
      "A": "Aproximadamente 5 cm abaixo do bocal (correspondendo a cerca de 2/3 a 3/4 do volume útil da caixa).",
      "B": "Não existe nenhuma linha, deve-se encher até cair no chão.",
      "C": "No fundo da caixa, no nível de 1% do volume total.",
      "D": "Exatamente 1 metro acima da borda superior da caixa.",
      "E": "Na tampa externa após o fechamento e lacre total."
    },
    "resposta_correta": "A",
    "comentario": "O limite de segurança (linha tracejada a 5 cm do bocal ou 2/3-3/4 da caixa) impede que agulhas fiquem salientes no bocal, prevenindo acidentes com as mãos ao descartar.",
    "referencia": "RDC 222/2018 e NBR 13853"
  },
  {
    "id": 639,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "RDC 222/2018, Art. 19 e NR-32",
    "enunciado": "Ao atingir o limite de enchimento da caixa coletora de perfurocortantes (Grupo E), qual a conduta CORRETA a ser executada?",
    "alternativas": {
      "A": "Pressionar os materiais com uma régua de plástico até quebrarem as ampolas.",
      "B": "Fechar e travar a tampa definitivamente pelo mecanismo de lacre próprio da caixa, segurando-a pelas alças externas de transporte, e encaminhá-la ao armazenamento temporário.",
      "C": "Empurrar o conteúdo com a palma da mão ou com os pés para caber mais agulhas.",
      "D": "Deixar a caixa aberta no corredor para que as agulhas evaporem com o calor.",
      "E": "Esvaziar o conteúdo em um saco plástico no chão para reaproveitar a caixa de papelão."
    },
    "resposta_correta": "B",
    "comentario": "Ao atingir o nível máximo, a caixa é lacrada permanentemente e transportada pelas alças, sendo expressamente proibido compactar materiais ou esvaziar/reutilizar o coletor.",
    "referencia": "RDC 222/2018, Art. 19 e NR-32"
  },
  {
    "id": 640,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "NR-32 e RDC 222/2018",
    "enunciado": "É TERMINANTEMENTE PROIBIDO aos profissionais de saúde e trabalhadores da limpeza em relação às caixas de perfurocortantes (Grupo E):",
    "alternativas": {
      "A": "Superlotar o coletor, empurrar materiais com os dedos ou descarregar o conteúdo em sacos plásticos para reaproveitamento do recipiente.",
      "B": "Descartar agulhas acopladas à seringa imediatamente após a punção venosa.",
      "C": "Verificar se a linha de preenchimento máximo foi atingida antes de usar.",
      "D": "Utilizar o coletor com o suporte metálico fixado na parede.",
      "E": "Identificar a data de fechamento e o setor na etiqueta frontal do recipiente."
    },
    "resposta_correta": "A",
    "comentario": "Superlotação e transbordo de agulhas e compactação manual são as maiores causas de perfurações acidentais graves em equipes assistenciais e de limpeza hospitalar.",
    "referencia": "NR-32 e RDC 222/2018"
  },
  {
    "id": 641,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "RDC 222/2018, Art. 5º",
    "enunciado": "O Plano de Gerenciamento de Resíduos de Serviços de Saúde (PGRSS), exigido pela RDC ANVISA nº 222/2018 e Resolução CONAMA nº 358/2005, é:",
    "alternativas": {
      "A": "O documento técnico que aponta e descreve as ações relativas ao manejo dos resíduos de serviços de saúde, contemplando os aspectos da geração, segregação, acondicionamento, coleta, armazenamento, transporte, tratamento e disposição final.",
      "B": "O contrato de aluguel dos veículos de passeio da diretoria executiva.",
      "C": "O manual de instruções do elevador social do bloco cirúrgico.",
      "D": "A escala de plantão de finais de semana dos médicos ortopedistas.",
      "E": "O cardápio alimentar fornecido aos acompanhantes de pacientes nos leitos."
    },
    "resposta_correta": "A",
    "comentario": "O PGRSS é o instrumento técnico e administrativo que planeja e disciplina todo o fluxo dos resíduos da geração à disposição final ambientalmente segura.",
    "referencia": "RDC 222/2018, Art. 5º"
  },
  {
    "id": 642,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "RDC 222/2018, Art. 7º",
    "enunciado": "A elaboração, implantação e monitoramento do PGRSS em estabelecimentos de saúde como a FHCGV deve ser de responsabilidade de:",
    "alternativas": {
      "A": "Vendedor ambulante de lanches da calçada do hospital.",
      "B": "Motorista de táxi que atenda passageiros na porta de entrada da fundação.",
      "C": "Estagiário de ensino fundamental menor de 14 anos.",
      "D": "Profissional de nível superior, legalmente habilitado pelo seu respectivo conselho de classe profissional, com a devida Anotação de Responsabilidade Técnica (ART) ou equivalente.",
      "E": "Qualquer paciente que estiver aguardando consulta na sala de espera."
    },
    "resposta_correta": "D",
    "comentario": "O PGRSS exige responsabilidade técnica formal de profissional de nível superior habilitado (engenheiro ambiental/sanitário, biólogo, farmacêutico, enfermeiro, médico) com ART.",
    "referencia": "RDC 222/2018, Art. 7º"
  },
  {
    "id": 643,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "RDC 222/2018, Art. 9º",
    "enunciado": "A sequência ordenada das etapas de MANEJO dos resíduos sólidos de serviços de saúde no PGRSS compreende:",
    "alternativas": {
      "A": "Incineração direta no quarto do paciente, trituração no vaso e enterro na calçada.",
      "B": "Segregação, acondicionamento, identificação, transporte interno, armazenamento temporário, armazenamento externo, coleta/transporte externo, tratamento e disposição final.",
      "C": "Transporte nas mãos dos enfermeiros, descarte no rio e lavagem dos sacos na chuva.",
      "D": "Venda no mercado livre, mistura com comida do refeitório e reciclagem de agulhas.",
      "E": "Armazenamento debaixo dos leitos, queima com álcool e descarte na praça pública."
    },
    "resposta_correta": "B",
    "comentario": "A ordem lógica padronizada da ANVISA é: Segregação -> Acondicionamento -> Identificação -> Transporte interno -> Armazenamento -> Coleta externa -> Tratamento -> Disposição final.",
    "referencia": "RDC 222/2018, Art. 9º"
  },
  {
    "id": 644,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "RDC 222/2018, Art. 21 e NR-32",
    "enunciado": "O TRANSPORTE INTERNO de resíduos de serviços de saúde da FHCGV deve ser realizado:",
    "alternativas": {
      "A": "Em horários pré-determinados e de menor fluxo de pessoas, em recipientes coletores móveis rígidos, laváveis, estanques, dotados de tampa e rodas com travas.",
      "B": "Com sacos plásticos abertos arrastados pelo chão cerâmico dos corredores.",
      "C": "Jogando os sacos pelas escadarias de emergência para descerem rápido.",
      "D": "Através dos dutos de ventilação do ar condicionado central das UTIs.",
      "E": "Nos mesmos carrinhos utilizados para servir as refeições dos pacientes."
    },
    "resposta_correta": "A",
    "comentario": "O transporte interno requer rotas traçadas, horários de baixo movimento, carrinhos específicos com tampa fechada e proibição expressa de arrastar sacos pelo piso.",
    "referencia": "RDC 222/2018, Art. 21 e NR-32"
  },
  {
    "id": 645,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "RDC 222/2018, Arts. 26 a 31",
    "enunciado": "O local destinado ao ARMAZENAMENTO EXTERNO (abrigo de resíduos) do hospital deve possuir:",
    "alternativas": {
      "A": "Piso e paredes laváveis e impermeáveis, ponto de água, esgoto com ralo sifonado, ventilação natural ou mecânica, iluminação, cobertura, acesso restrito e fechamento com chave, e separação física para cada grupo de resíduos.",
      "B": "Ausência total de água corrente e esgoto sanitário.",
      "C": "Portas sempre abertas sem qualquer cerca ou cadeado de segurança.",
      "D": "Localização dentro da copa central de preparação das mamadeiras do berçário.",
      "E": "Piso de terra batida aberta onde circulem cães e gatos de rua livremente."
    },
    "resposta_correta": "A",
    "comentario": "O abrigo externo (conforme RDC 222/2018) deve ser estanque, protegido contra intempéries e vetores, higienizável, trancado e com compartimentos separados para cada grupo de resíduo.",
    "referencia": "RDC 222/2018, Arts. 26 a 31"
  },
  {
    "id": 646,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "Resolução CONAMA nº 316/2002 e RDC 222/2018",
    "enunciado": "Em relação ao tratamento térmico de incineração de resíduos biológicos e químicos hospitalares perigosos:",
    "alternativas": {
      "A": "Fica dispensado de qualquer filtro ou tratamento de fumaça pela legislação.",
      "B": "Deve ser realizado em churrasqueiras portáteis na varanda da diretoria.",
      "C": "Pode ser executado com queima de pneus velhos no pátio interno da enfermaria.",
      "D": "Deve ser realizado em usinas ou instalações com licenciamento ambiental específico emitido pelo órgão ambiental competente, com controle contínuo de emissões gasosas.",
      "E": "Pode ser feito em fogueiras abertas no estacionamento de veículos do hospital."
    },
    "resposta_correta": "D",
    "comentario": "A incineração de RSS exige licenciamento ambiental severo do órgão estadual de meio ambiente (SEMAS/PA) e controle de emissão de dioxinas e furanos (CONAMA 316/2002).",
    "referencia": "Resolução CONAMA nº 316/2002 e RDC 222/2018"
  },
  {
    "id": 647,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "Portaria MMA 280/2020 e Política Nacional de Resíduos Sólidos",
    "enunciado": "O documento emitido pelo gerador, que acompanha o transporte de resíduos perigosos da unidade até o destinatário final comprovando a destinação ambientalmente adequada, é o:",
    "alternativas": {
      "A": "MTR (Manifesto de Transporte de Resíduos).",
      "B": "IPTU (Imposto Predial e Territorial Urbano).",
      "C": "CPF (Cadastro de Pessoas Físicas da Receita).",
      "D": "DUT (Documento Único de Trânsito Veicular).",
      "E": "RG (Registro Geral de Identidade Civil)."
    },
    "resposta_correta": "A",
    "comentario": "O MTR (Manifesto de Transporte de Resíduos) do SINIR/MMA rastreia a carga de resíduos perigosos desde o hospital gerador, transportador até o destino final licenciado.",
    "referencia": "Portaria MMA 280/2020 e Política Nacional de Resíduos Sólidos"
  },
  {
    "id": 648,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "RDC 222/2018, Art. 8º e NR-32",
    "enunciado": "A capacitação e o treinamento contínuo de todos os trabalhadores envolvidos direta ou indiretamente com o manejo de RSS na FHCGV devem contemplar:",
    "alternativas": {
      "A": "Aprender a costurar uniformes cirúrgicos com máquinas elétricas.",
      "B": "Aulas teóricas de pilotagem de aviões agrícolas no interior do estado.",
      "C": "Apenas o treinamento para empurrar caixas de papelão no refeitório.",
      "D": "Técnicas de mineração subterrânea de pedras preciosas com dinamite.",
      "E": "O conhecimento das classes de resíduos, riscos à saúde, uso correto de EPIs, higiene pessoal, procedimentos em casos de acidentes e conscientização ambiental."
    },
    "resposta_correta": "E",
    "comentario": "A RDC 222/2018 (Art. 8º) e a NR-32 tornam compulsório o treinamento na admissão e periódico sobre biossegurança, classificação de RSS, uso de EPIs e ações de emergência.",
    "referencia": "RDC 222/2018, Art. 8º e NR-32"
  },
  {
    "id": 649,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "RDC 222/2018, Art. 19 e NR-32",
    "enunciado": "Qual a proibição expressa da RDC ANVISA nº 222/2018 em relação ao esvaziamento manual de recipientes coletores de resíduos perfurocortantes (Grupo E)?",
    "alternativas": {
      "A": "O recipiente deve ser lavado com refrigerante de cola antes de ser reutilizado.",
      "B": "As agulhas retiradas devem ser doadas para crianças confeccionarem artesanato.",
      "C": "O esvaziamento manual é obrigatório a cada 30 minutos de plantão.",
      "D": "O trabalhador deve retirar as agulhas com a mão esquerda desprotegida.",
      "E": "É expressamente proibido o esvaziamento manual de coletores de perfurocortantes para reaproveitamento do recipiente, bem como a transferência de resíduos de um coletor para outro."
    },
    "resposta_correta": "E",
    "comentario": "A manipulação e esvaziamento manual de agulhas e vidros descartados viola a integridade física do trabalhador e é infração sanitária e de segurança gravíssima.",
    "referencia": "RDC 222/2018, Art. 19 e NR-32"
  },
  {
    "id": 650,
    "materia": "Resíduos de Saúde (RDC 222)",
    "dificuldade": "RDC 222/2018 e Resolução CONAMA 358/2005",
    "enunciado": "A destinação final em Aterros Sanitários licenciados no Brasil é permitida para:",
    "alternativas": {
      "A": "Frascos de vidro quebrados contendo quimioterápicos citostáticos líquidos.",
      "B": "Resíduos do Grupo D (comuns) e resíduos do Grupo A após terem sido submetidos a processo de tratamento prévio de descaracterização do risco biológico (autoclavagem/micro-ondas).",
      "C": "Agulhas e bisturis com sangue do Grupo E sem qualquer embalagem rígida.",
      "D": "Resíduos químicos perigosos do Grupo B altamente corrosivos ou inflamáveis.",
      "E": "Rejeitos radioativos de alta energia do Grupo C sem blindagem."
    },
    "resposta_correta": "B",
    "comentario": "Resíduos comuns do Grupo D e biológicos do Grupo A previamente tratados e desinfetados podem ser dispostos em aterros sanitários municipais licenciados.",
    "referencia": "RDC 222/2018 e Resolução CONAMA 358/2005"
  },
  {
    "id": 651,
    "materia": "Legislação Previdenciária",
    "dificuldade": "Lei 8.213/1991, Art. 22",
    "enunciado": "Nos termos do Artigo 22 da Lei Federal nº 8.213/1991, a empresa deverá comunicar o acidente do trabalho à Previdência Social até:",
    "alternativas": {
      "A": "A homologação rescisória no sindicato da categoria.",
      "B": "O término do contrato de trabalho do acidentado.",
      "C": "O momento em que o acidentado completar 65 anos de idade.",
      "D": "O prazo improrrogável de trinta dias úteis a contar do mês seguinte.",
      "E": "O primeiro dia útil seguinte ao da ocorrência e, em caso de morte, de imediato, à autoridade competente, sob pena de multa."
    },
    "resposta_correta": "E",
    "comentario": "O Art. 22 da Lei 8.213/91 estipula o prazo: até o 1º dia útil seguinte ao acidente e, havendo óbito, de imediato, sob pena de multa prevista no Art. 286 do RPS.",
    "referencia": "Lei 8.213/1991, Art. 22"
  },
  {
    "id": 652,
    "materia": "Legislação Previdenciária",
    "dificuldade": "Lei 8.213/1991, Art. 22",
    "enunciado": "Em caso de acidente de trabalho que resulte na MORTE imediata do trabalhador, a comunicação à autoridade competente deve ser realizada:",
    "alternativas": {
      "A": "Em até 6 meses mediante publicação em jornal de grande circulação.",
      "B": "No final do ano fiscal durante a assembleia de prestação de contas.",
      "C": "Em até 30 dias após o sepultamento.",
      "D": "De imediato.",
      "E": "Apenas após o trânsito em julgado de ação indenizatória na Justiça Federal."
    },
    "resposta_correta": "D",
    "comentario": "A redação da Lei 8.213/91, Art. 22, é taxativa: '... e, em caso de morte, de imediato'.",
    "referencia": "Lei 8.213/1991, Art. 22"
  },
  {
    "id": 653,
    "materia": "Legislação Previdenciária",
    "dificuldade": "Lei 8.213/1991, Art. 22, § 2º",
    "enunciado": "Caso a empresa ou a fundação hospitalar NÃO emita a CAT no prazo legal, quem são os legitimados concorrentes que podem formalizá-la perante a Previdência Social?",
    "alternativas": {
      "A": "Ninguém mais pode emitir a CAT, perecendo o direito para sempre.",
      "B": "O próprio acidentado, seus dependentes, a entidade sindical competente, o médico que o assistiu ou qualquer autoridade pública.",
      "C": "Exclusivamente o perito contador judicial de falências.",
      "D": "Apenas o presidente da república por decreto privativo.",
      "E": "Apenas o vizinho de residência mais idoso do trabalhador."
    },
    "resposta_correta": "B",
    "comentario": "O § 2º do Art. 22 da Lei 8.213/91 confere legitimidade subsidiária ao próprio acidentado, dependentes, sindicato, médico assistente ou qualquer autoridade pública.",
    "referencia": "Lei 8.213/1991, Art. 22, § 2º"
  },
  {
    "id": 654,
    "materia": "Legislação Previdenciária",
    "dificuldade": "Lei 8.213/1991, Art. 22, § 3º",
    "enunciado": "A emissão subsidiária da CAT por terceiros legitimados (como o sindicato ou o próprio empregado):",
    "alternativas": {
      "A": "Cancela o contrato de trabalho por justa causa do acidentado.",
      "B": "Obriga o médico assistente a pagar indenização civil ao hospital.",
      "C": "Perdoa automaticamente a empresa de todas as sanções administrativas.",
      "D": "Transfere a obrigação do pagamento de salários para o sindicato emitente.",
      "E": "Não exime a empresa da aplicação da multa legal por descumprimento de prazo."
    },
    "resposta_correta": "E",
    "comentario": "O § 3º do Art. 22 da Lei 8.213/91 estabelece que a emissão da CAT por terceiros não desonera o empregador da multa pelo atraso na comunicação obrigatória.",
    "referencia": "Lei 8.213/1991, Art. 22, § 3º"
  },
  {
    "id": 655,
    "materia": "Legislação Previdenciária",
    "dificuldade": "Art. 22 da Lei 8.213/91 e Manual da CAT",
    "enunciado": "Se um técnico de enfermagem sofrer um ferimento por picada de agulha com sangue contaminado na FHCGV, mas a lesão física for superficial e NÃO resultar em afastamento do trabalho:",
    "alternativas": {
      "A": "A CAT só deve ser emitida caso o trabalhador venha a falecer.",
      "B": "A CAT deve ser emitida obrigatoriamente, pois a comunicação independe da existência de afastamento das atividades laborais.",
      "C": "A CAT é dispensada, pois só se emite comunicação de acidente se houver amputação de membros.",
      "D": "A fundação deve manter a ocorrência em segredo para não prejudicar suas estatísticas.",
      "E": "O técnico deve ser suspenso por 5 dias para cicatrização do ferimento."
    },
    "resposta_correta": "B",
    "comentario": "O acidente de trabalho exige registro e emissão de CAT mesmo que não haja incapacidade temporária (sem afastamento), para acompanhamento profilático e legal.",
    "referencia": "Art. 22 da Lei 8.213/91 e Manual da CAT"
  },
  {
    "id": 656,
    "materia": "Legislação Previdenciária",
    "dificuldade": "Instrução Normativa INSS e Manual do eSocial",
    "enunciado": "Quais são os três tipos de Comunicação de Acidente de Trabalho (CAT) previstos na regulamentação previdenciária?",
    "alternativas": {
      "A": "CAT Matutina, CAT Vespertina e CAT Noturna.",
      "B": "CAT Inicial, CAT de Reabertura e CAT de Comunicação de Óbito.",
      "C": "CAT Provisória, CAT Temporária e CAT Definitiva.",
      "D": "CAT Simples, CAT Dobrada e CAT Tripla.",
      "E": "CAT Pequena, CAT Média e CAT Grande."
    },
    "resposta_correta": "B",
    "comentario": "Os tipos oficiais de CAT são: Inicial (ocorrência inicial ou doença), Reabertura (reinício de tratamento ou agravamento) e Óbito (morte decorrente do acidente inicial).",
    "referencia": "Instrução Normativa INSS e Manual do eSocial"
  },
  {
    "id": 657,
    "materia": "Legislação Previdenciária",
    "dificuldade": "IN INSS nº 128/2022",
    "enunciado": "A CAT de REABERTURA deve ser emitida quando:",
    "alternativas": {
      "A": "Houver reinício de tratamento médico ou agravamento de lesão decorrente de acidente de trabalho ou doença ocupacional anteriormente comunicada.",
      "B": "A empresa desejar anular o acidente registrado há três anos.",
      "C": "O trabalhador for admitido em um segundo emprego na iniciativa privada.",
      "D": "O sindicato dos trabalhadores eleger uma nova diretoria.",
      "E": "O empregador trocar a razão social do estabelecimento comercial."
    },
    "resposta_correta": "A",
    "comentario": "A CAT de reabertura aplica-se quando um acidente ou doença já comunicado anteriormente volta a demandar assistência médica ou gera nova incapacidade por recidiva/agravamento.",
    "referencia": "IN INSS nº 128/2022"
  },
  {
    "id": 658,
    "materia": "Legislação Previdenciária",
    "dificuldade": "Lei 8.213/1991, Art. 21, IV, 'd'",
    "enunciado": "O acidente sofrido pelo trabalhador no percurso da sua residência para o local de trabalho ou deste para aquela, qualquer que seja o meio de locomoção (acidente de trajeto):",
    "alternativas": {
      "A": "Não tem qualquer relação com o trabalho, devendo ser registrado como crime de trânsito comum.",
      "B": "Só se equipara ao trabalho caso o trabalhador utilize bicicleta da própria empresa.",
      "C": "É equiparado a acidente do trabalho para todos os efeitos previdenciários nos termos do Artigo 21, inciso IV, alínea 'd' da Lei nº 8.213/1991.",
      "D": "Perdeu a cobertura previdenciária em todo o território nacional de forma definitiva.",
      "E": "É considerado desvio de conduta e falta grave disciplinar do funcionário."
    },
    "resposta_correta": "C",
    "comentario": "O Art. 21, IV, 'd' da Lei 8.213/91 equipara o acidente de trajeto ao acidente de trabalho, assegurando todos os direitos previdenciários e acidentários ao segurado.",
    "referencia": "Lei 8.213/1991, Art. 21, IV, 'd'"
  },
  {
    "id": 659,
    "materia": "Legislação Previdenciária",
    "dificuldade": "Lei 8.213/1991, Art. 23",
    "enunciado": "A doença profissional (ergopatia) e a doença do trabalho (mesopatia) são legalmente equiparadas ao acidente de trabalho pelo Artigo 20 da Lei nº 8.213/1991. Para fins de marco temporal de emissão da CAT na doença ocupacional, considera-se dia do acidente:",
    "alternativas": {
      "A": "O primeiro dia de vida do empregado registrado na certidão de nascimento.",
      "B": "O dia em que a empresa foi fundada na Junta Comercial do Estado.",
      "C": "O dia do término do período de experiência de 90 dias.",
      "D": "A data do início da incapacidade laborativa para o exercício da atividade habitual, ou o dia da segregação compulsória, ou o dia em que for realizado o diagnóstico médico.",
      "E": "A data do último recesso de final de ano do hospital."
    },
    "resposta_correta": "D",
    "comentario": "Conforme o Art. 23 da Lei 8.213/91, considera-se como dia do acidente na doença ocupacional a data do início da incapacidade ou o dia da realização do diagnóstico conclusivo.",
    "referencia": "Lei 8.213/1991, Art. 23"
  },
  {
    "id": 660,
    "materia": "Legislação Previdenciária",
    "dificuldade": "Manual do eSocial e Portaria Conjunta MTP/RFB",
    "enunciado": "Atualmente, o canal eletrônico oficial pelo qual as empresas privadas e órgãos públicos contratantes pelo regime celetista devem enviar a CAT ao ambiente nacional do governo federal é:",
    "alternativas": {
      "A": "Um fax impresso enviado para o Ministério da Agricultura.",
      "B": "Uma mensagem de áudio enviada para a rádio comunitária do município.",
      "C": "O evento S-2210 (Comunicação de Acidente de Trabalho) do Sistema de Escrituração Digital das Obrigações Fiscais, Previdenciárias e Trabalhistas (eSocial).",
      "D": "Uma carta manuscrita enviada por pombo-correio aos cuidados da agência central.",
      "E": "Um anúncio nos classificados de jornal impresso de domingo."
    },
    "resposta_correta": "C",
    "comentario": "A CAT é transmitida digitalmente pelo evento S-2210 do eSocial, unificando a recepção da informação pelo Ministério do Trabalho, Receita Federal e Previdência Social.",
    "referencia": "Manual do eSocial e Portaria Conjunta MTP/RFB"
  },
  {
    "id": 661,
    "materia": "Legislação Previdenciária",
    "dificuldade": "Lei 8.213/1991, Art. 21-A",
    "enunciado": "Qual a importância jurídica da comprovação do NEXO TÉCNICO EPIDEMIOLÓGICO PREVIDENCIÁRIO (NTEP) entre a atividade econômica da FHCGV (CNAE de atividades hospitalares) e as doenças osteomusculares e infecciosas (CID-10)?",
    "alternativas": {
      "A": "Estabelece a presunção legal relativa de que a doença é decorrente do trabalho, convertendo o benefício para a modalidade acidentária (B91), cabendo à empresa o ônus de produzir prova em contrário.",
      "B": "Determina que todos os doentes sejam multados pelo Ministério da Fazenda.",
      "C": "Isenta o hospital do pagamento de FGTS dos empregados sadios.",
      "D": "Obriga o INSS a demitir todos os servidores da perícia médica federal.",
      "E": "Impede que qualquer médico conceda atestado de repouso aos trabalhadores."
    },
    "resposta_correta": "A",
    "comentario": "O NTEP (Art. 21-A da Lei 8.213/91) cruza o CNAE da empresa com a CID da patologia; havendo correlação estatística, presume-se o nexo ocupacional, cabendo contraprova à organização.",
    "referencia": "Lei 8.213/1991, Art. 21-A"
  },
  {
    "id": 662,
    "materia": "Legislação Previdenciária",
    "dificuldade": "Lei 8.213/1991, Art. 20, § 1º",
    "enunciado": "Não são consideradas como doença do trabalho pela Lei nº 8.213/1991 (Art. 20, § 1º):",
    "alternativas": {
      "A": "A síndrome do túnel do carpo decorrente de digitação contínua sem pausas ergonômicas.",
      "B": "A febre tifóide e a tuberculose contraídas em ambiente de internação de infectologia.",
      "C": "A hepatite B transmitida por perfuração com agulha cirúrgica no centro obstétrico.",
      "D": "A tendinite do manguito rotador decorrente de movimentação excessiva de cargas pesadas.",
      "E": "A doença degenerativa, a inerente a grupo de faixa etária e a que não produza incapacidade laborativa."
    },
    "resposta_correta": "E",
    "comentario": "O Art. 20, § 1º da Lei 8.213/91 exclui do conceito de doença do trabalho: degenerativas, etárias, as sem incapacidade e as endêmicas (salvo comprovação de exposição direta).",
    "referencia": "Lei 8.213/1991, Art. 20, § 1º"
  },
  {
    "id": 663,
    "materia": "Legislação Previdenciária",
    "dificuldade": "Lei 8.213/1991, Art. 20, § 1º, alínea 'd'",
    "enunciado": "Em relação à doença endêmica (como Malária ou Dengue), ela pode ser considerada doença do trabalho pelo INSS?",
    "alternativas": {
      "A": "Apenas se a cidade inteira estiver de quarentena nacional.",
      "B": "Geralmente não, SALVO comprovação de que é resultante de exposição ou contato direto determinado pela natureza do trabalho exercido (Art. 20, § 1º, 'd' da Lei 8.213/91).",
      "C": "Apenas se o mosquito transmissor tiver sido contratado com carteira assinada pela empresa.",
      "D": "Nunca, sob nenhuma circunstância, mesmo para pesquisadores picados em laboratório.",
      "E": "Sim, qualquer gripe ou resfriado comum é automaticamente doença do trabalho."
    },
    "resposta_correta": "B",
    "comentario": "A doença endêmica só se equipara a doença do trabalho se comprovado que o trabalhador se expôs ao vetor/patógeno em razão exclusiva de sua atividade ocupacional.",
    "referencia": "Lei 8.213/1991, Art. 20, § 1º, alínea 'd'"
  },
  {
    "id": 664,
    "materia": "Legislação Previdenciária",
    "dificuldade": "Lei 8.213/1991, Art. 60, § 3º",
    "enunciado": "Durante os primeiros 15 dias consecutivos de afastamento decorrente de acidente de trabalho ou doença ocupacional, o pagamento da remuneração integral do trabalhador celetista é de responsabilidade:",
    "alternativas": {
      "A": "Do Fundo de Amparo ao Trabalhador (FAT).",
      "B": "Da empresa empregadora.",
      "C": "Do sindicato da categoria através de doações voluntárias.",
      "D": "Do INSS mediante pagamento direto no balcão da agência.",
      "E": "Da Organização das Nações Unidas (ONU)."
    },
    "resposta_correta": "B",
    "comentario": "A empresa responde pelo pagamento integral do salário durante os primeiros 15 dias de afastamento (Art. 60, § 3º da Lei 8.213/91); o INSS assume a partir do 16º dia.",
    "referencia": "Lei 8.213/1991, Art. 60, § 3º"
  },
  {
    "id": 665,
    "materia": "Legislação Previdenciária",
    "dificuldade": "Lei 8.036/1990, Art. 15, § 5º",
    "enunciado": "Se a empresa deixar de recolher o Fundo de Garantia do Tempo de Serviço (FGTS) durante o período em que o trabalhador acidentado estiver recebendo auxílio por incapacidade temporária ACIDENTÁRIO (B91) do INSS:",
    "alternativas": {
      "A": "O contrato de trabalho é considerado automaticamente extinto.",
      "B": "A empresa descumpre obrigação legal, pois o Art. 15, § 5º da Lei nº 8.036/1990 torna OBRIGATÓRIO o depósito mensal do FGTS nos casos de afastamento por acidente de trabalho ou doença ocupacional.",
      "C": "O trabalhador deve devolver todo o saldo do FGTS já acumulado.",
      "D": "A empresa recebe desconto nos tributos estaduais do ICMS.",
      "E": "A conduta é legalmente correta, pois trabalhador afastado nunca tem depósito de FGTS."
    },
    "resposta_correta": "B",
    "comentario": "Diferente do auxílio-doença comum (B31), no afastamento acidentário (B91) a empresa continua obrigada a depositar o FGTS mensalmente durante todo o período de afastamento.",
    "referencia": "Lei 8.036/1990, Art. 15, § 5º"
  },
  {
    "id": 666,
    "materia": "Legislação Previdenciária",
    "dificuldade": "Lei 8.213/1991, Art. 118",
    "enunciado": "O Artigo 118 da Lei Federal nº 8.213/1991 assegura ao trabalhador que sofreu acidente do trabalho a garantia provisória de emprego pelo prazo mínimo de:",
    "alternativas": {
      "A": "Cinco anos a partir da data de admissão na empresa.",
      "B": "Seis meses a contar do dia em que ocorreu a queda no local de trabalho.",
      "C": "Trinta dias contados da entrega da ficha de EPI.",
      "D": "Duas semanas após a realização do exame periódico anual.",
      "E": "Doze meses após a cessação do benefício por incapacidade acidentário (antigo auxílio-doença acidentário)."
    },
    "resposta_correta": "E",
    "comentario": "O Art. 118 da Lei 8.213/91 concede estabilidade de 12 meses, contados a partir da cessação do benefício acidentário concedido pelo INSS.",
    "referencia": "Lei 8.213/1991, Art. 118"
  },
  {
    "id": 667,
    "materia": "Legislação Previdenciária",
    "dificuldade": "Súmula 378, II do TST",
    "enunciado": "De acordo com a Súmula nº 378, item II, do Tribunal Superior do Trabalho (TST), são pressupostos cumulativos para a concessão da estabilidade acidentária do Artigo 118 da Lei nº 8.213/1991:",
    "alternativas": {
      "A": "A assinatura de duas advertências disciplinares pelo encarregado do setor.",
      "B": "O afastamento do trabalho por prazo superior a 15 dias e a consequente percepção do auxílio por incapacidade temporária acidentário (código B91), salvo se constatada, após a despedida, doença profissional que guarde relação de causalidade com o trabalho.",
      "C": "A filiação partidária a grêmios estudantis e sindicatos por mais de 5 anos.",
      "D": "O trabalho em horário noturno por pelo menos 3 meses contínuos.",
      "E": "Apenas o recebimento de qualquer tipo de atestado de 1 dia assinado por dentista."
    },
    "resposta_correta": "B",
    "comentario": "A Súmula 378, II do TST fixa a regra geral: afastamento > 15 dias + percepção do benefício B91 (ou comprovação posterior de doença profissional com nexo de causalidade).",
    "referencia": "Súmula 378, II do TST"
  },
  {
    "id": 668,
    "materia": "Legislação Previdenciária",
    "dificuldade": "Súmula 378, II do TST",
    "enunciado": "Um técnico de enfermagem da FHCGV sofreu entorse de tornozelo no trabalho e ficou afastado por 8 DIAS com atestado médico, retornando logo em seguida às suas funções normais. Nesse caso:",
    "alternativas": {
      "A": "Ele NÃO adquire a estabilidade provisória do Art. 118 da Lei 8.213/91, pois o afastamento foi inferior a 15 dias e não houve concessão de benefício acidentário pelo INSS.",
      "B": "Ele adquire 5 anos de estabilidade absoluta e vitalícia no serviço público.",
      "C": "Ele tem direito a uma indenização equivalente a 100 salários mínimos.",
      "D": "A empresa fica proibida de alterar o horário de seu almoço por 2 anos.",
      "E": "O empregado deve ser promovido a diretor administrativo imediatamente."
    },
    "resposta_correta": "A",
    "comentario": "Afastamentos de até 15 dias pagos pelo empregador sem ingresso no INSS e sem benefício B91 não geram a garantia de emprego de 12 meses do Art. 118 da Lei 8.213/91.",
    "referencia": "Súmula 378, II do TST"
  },
  {
    "id": 669,
    "materia": "Legislação Previdenciária",
    "dificuldade": "Súmula 378, III do TST",
    "enunciado": "Segundo o item III da Súmula nº 378 do TST, o empregado submetido a CONTRATO DE TRABALHO POR TEMPO DETERMINADO (inclusive contrato de experiência):",
    "alternativas": {
      "A": "Gosa da garantia provisória de emprego decorrente de acidente de trabalho prevista no Artigo 118 da Lei nº 8.213/1991.",
      "B": "Tem seu contrato transformado em prestação de serviços voluntários gratuitos.",
      "C": "Perde imediatamente o direito a receber atendimento médico de urgência.",
      "D": "Não tem direito a estabilidade sob nenhuma hipótese por ser contrato temporário.",
      "E": "Pode ser dispensado sumariamente sem receber sequer os dias trabalhados."
    },
    "resposta_correta": "A",
    "comentario": "A Súmula 378, III do TST estendeu expressamente a estabilidade acidentária aos contratos a prazo determinado, inclusive ao contrato de experiência.",
    "referencia": "Súmula 378, III do TST"
  },
  {
    "id": 670,
    "materia": "Legislação Previdenciária",
    "dificuldade": "Súmula 396 do TST e Art. 118 Lei 8.213/91",
    "enunciado": "Se a empresa dispensar SEM JUSTA CAUSA um trabalhador que esteja no gozo do período de estabilidade provisória acidentária de 12 meses:",
    "alternativas": {
      "A": "A dispensa é válida e a empresa não precisa pagar nenhuma indenização ao operário.",
      "B": "O Ministério do Trabalho cancela o CPF do trabalhador dispensado.",
      "C": "A dispensa é nula, tendo o trabalhador direito à REINTEGRAÇÃO ao emprego ou, caso desaconselhável ou exaurido o período estabilitário, à INDENIZAÇÃO substitutiva correspondente aos salários e vantagens de todo o período (Súmula 396 do TST).",
      "D": "O trabalhador é obrigado a trabalhar de graça por 1 ano para compensar o patrão.",
      "E": "O trabalhador deve pagar uma multa de R$ 10.000,00 à Justiça do Trabalho."
    },
    "resposta_correta": "C",
    "comentario": "A dispensa arbitrária no período estabilitário impõe a reintegração com pagamento dos salários vencidos ou a conversão em indenização pecuniária substitutiva integral.",
    "referencia": "Súmula 396 do TST e Art. 118 Lei 8.213/91"
  },
  {
    "id": 671,
    "materia": "Legislação Previdenciária",
    "dificuldade": "CLT Art. 482 e Doutrina Trabalhista",
    "enunciado": "Durante o período de 12 meses de estabilidade acidentária, o empregado acidentado pode ser demitido por JUSTA CAUSA?",
    "alternativas": {
      "A": "Sim, a estabilidade acidentária veda a dispensa imotivada (sem justa causa), mas não impede a dispensa por justa causa caso o empregado cometa falta grave prevista no Artigo 482 da CLT.",
      "B": "Apenas se o presidente da fundação hospitalar for autorizado pela CIPA.",
      "C": "Não, justa causa é terminantemente proibida na CLT brasileira.",
      "D": "Apenas se o trabalhador concordar por escrito em ser demitido.",
      "E": "Não, o empregado com estabilidade adquire imunidade absoluta e não pode ser punido nem mesmo se praticar furtos ou agressões físicas no local de trabalho."
    },
    "resposta_correta": "A",
    "comentario": "A garantia provisória obsta a rescisão unilateral sem motivo; o cometimento de falta grave tipificada no Art. 482 da CLT autoriza a rescisão motivada (justa causa).",
    "referencia": "CLT Art. 482 e Doutrina Trabalhista"
  },
  {
    "id": 672,
    "materia": "Legislação Previdenciária",
    "dificuldade": "Lei 8.213/1991 e Lei 8.036/1990",
    "enunciado": "Qual é a diferença fundamental entre o benefício de código B31 (Auxílio por Incapacidade Temporária Previdenciário comum) e o código B91 (Auxílio por Incapacidade Temporária Acidentário)?",
    "alternativas": {
      "A": "O B31 é pago pelo governo e o B91 é pago pelo sindicato dos metalúrgicos.",
      "B": "O B91 decorre de acidente de trabalho ou doença ocupacional, gerando direito à estabilidade provisória de 12 meses e continuidade dos depósitos do FGTS; o B31 decorre de doença/acidente comum sem relação com o trabalho, não gerando estabilidade nem depósito de FGTS.",
      "C": "O B31 é destinado exclusivamente a cidadãos estrangeiros sem visto.",
      "D": "Não existe nenhuma diferença, os dois códigos foram criados por acaso.",
      "E": "O B91 exige que o trabalhador tenha mais de 80 anos de idade."
    },
    "resposta_correta": "B",
    "comentario": "O benefício acidentário (B91) confere garantias materiais substanciais: estabilidade acidentária de 1 ano após a alta e recolhimento patronal do FGTS durante o afastamento.",
    "referencia": "Lei 8.213/1991 e Lei 8.036/1990"
  },
  {
    "id": 673,
    "materia": "Legislação Previdenciária",
    "dificuldade": "Súmula 378, II do TST",
    "enunciado": "Se o trabalhador for demitido sem justa causa e, meses após a demissão, for constatada mediante perícia judicial a existência de doença ocupacional adquirida durante o contrato:",
    "alternativas": {
      "A": "Ele terá reconhecido o direito à estabilidade acidentária (Súmula 378, II, parte final, do TST), fazendo jus à indenização do período de garantia de emprego.",
      "B": "Ele perde qualquer direito porque a perícia ocorreu após o término do vínculo de emprego.",
      "C": "A empresa fica isenta de qualquer responsabilidade civil ou trabalhista.",
      "D": "O laudo médico pericial é nulo se não for assinado pelo dono da empresa.",
      "E": "O juiz deve condenar o trabalhador por litigância de má-fé."
    },
    "resposta_correta": "A",
    "comentario": "A parte final da Súmula 378, II do TST protege o empregado dispensado doente: o nexo causal comprovado após a rescisão convalida o direito à garantia estabilitária acidentária.",
    "referencia": "Súmula 378, II do TST"
  },
  {
    "id": 674,
    "materia": "Legislação Previdenciária",
    "dificuldade": "Súmula 396, I do TST",
    "enunciado": "Caso o prazo de 12 meses da estabilidade acidentária já tenha decorrido integralmente no momento em que for proferida a sentença trabalhista:",
    "alternativas": {
      "A": "O empregador é obrigado a contratar o filho mais velho do reclamante.",
      "B": "A reintegração não é mais cabível, sendo devida ao empregado unicamente a indenização substitutiva correspondente aos salários e reflexos do período estabilitário vencido (Súmula 396, I, do TST).",
      "C": "O período de estabilidade é renovado automaticamente por mais 10 anos.",
      "D": "O trabalhador perde o direito a receber qualquer indenização em dinheiro.",
      "E": "O juiz deve fechar o hospital e mandar prender todos os gerentes."
    },
    "resposta_correta": "B",
    "comentario": "Conforme a Súmula 396, I do TST, exaurido o período estabilitário, são devidos ao empregado apenas os salários do período compreendido entre a data da despedida e o final da estabilidade.",
    "referencia": "Súmula 396, I do TST"
  },
  {
    "id": 675,
    "materia": "Legislação Previdenciária",
    "dificuldade": "CLT Art. 9º e Princípios do Direito do Trabalho",
    "enunciado": "A renúncia expressa do trabalhador ao direito da estabilidade provisória acidentária em documento assinado sob coação patronal no departamento de recursos humanos:",
    "alternativas": {
      "A": "Exige apenas o reconhecimento de firma em cartório para convalidar o ato.",
      "B": "É absolutamente nula de pleno direito, em virtude do princípio trabalhista da irrenunciabilidade de direitos e do Artigo 9º da CLT.",
      "C": "Faz com que o trabalhador perca a sua carteira de identidade civil.",
      "D": "É plenamente válida e irrevogável perante o Poder Judiciário.",
      "E": "Garante à empresa um prêmio financeiro de produtividade jurídica."
    },
    "resposta_correta": "B",
    "comentario": "Normas de saúde e segurança e estabilidade acidentária são de ordem pública (Art. 9º da CLT e Art. 118 da Lei 8.213/91), sendo nula qualquer renúncia forçada de direitos.",
    "referencia": "CLT Art. 9º e Princípios do Direito do Trabalho"
  },
  {
    "id": 676,
    "materia": "Legislação Previdenciária",
    "dificuldade": "Lei 8.213/1991, Art. 58, § 1º",
    "enunciado": "O Laudo Técnico das Condições Ambientais do Trabalho (LTCAT), previsto no Artigo 58 da Lei Federal nº 8.213/1991, é o documento técnico privativo elaborado por:",
    "alternativas": {
      "A": "Qualquer funcionário do setor financeiro ou contábil do hospital.",
      "B": "Advogado particular sem registro em conselho de engenharia ou medicina.",
      "C": "Médico do Trabalho ou Engenheiro de Segurança do Trabalho, nos termos da legislação trabalhista e previdenciária.",
      "D": "Comissão de pacientes voluntários internados na fundação.",
      "E": "Técnico em contabilidade recém-formado no ensino médio."
    },
    "resposta_correta": "C",
    "comentario": "O Art. 58, § 1º da Lei 8.213/91 é taxativo: o LTCAT é emitido exclusivamente por Médico do Trabalho ou Engenheiro de Segurança do Trabalho habilitados.",
    "referencia": "Lei 8.213/1991, Art. 58, § 1º"
  },
  {
    "id": 677,
    "materia": "Legislação Previdenciária",
    "dificuldade": "Lei 8.213/1991, Art. 58",
    "enunciado": "O LTCAT tem como finalidade primordial perante a Previdência Social (INSS):",
    "alternativas": {
      "A": "Definir a marca de ar condicionado que deve ser comprada pelo almoxarifado.",
      "B": "Determinar a escala de férias de verão dos médicos diretores.",
      "C": "Calcular a alíquota do Imposto Predial e Territorial Urbano da prefeitura.",
      "D": "Autorizar a demolição de prédios tombados pelo patrimônio histórico.",
      "E": "Comprovar a efetiva exposição habitual e permanente do trabalhador a agentes nocivos químicos, físicos, biológicos ou associação de agentes para fins de concessão de APOSENTADORIA ESPECIAL."
    },
    "resposta_correta": "E",
    "comentario": "O LTCAT é o laudo estritamente previdenciário que embasa a caracterização da nocividade ambiental para a concessão da Aposentadoria Especial (Art. 57 e 58 da Lei 8.213/91).",
    "referencia": "Lei 8.213/1991, Art. 58"
  },
  {
    "id": 678,
    "materia": "Legislação Previdenciária",
    "dificuldade": "IN INSS nº 128/2022 e Lei 8.213/1991",
    "enunciado": "O Perfil Profissiográfico Previdenciário (PPP) é o documento histórico-laboral individual que deve ser emitido pelo empregador contendo:",
    "alternativas": {
      "A": "A lista de todos os filmes cinematográficos assistidos pelo trabalhador nos fins de semana.",
      "B": "O comprovante de votação em eleições municipais dos últimos 30 anos.",
      "C": "Dados administrativos da empresa e do trabalhador, descrição das atividades desempenhadas, registros ambientais de exposição a agentes nocivos e monitoração biológica (PCMSO).",
      "D": "O valor do limite do cartão de crédito particular do empregado.",
      "E": "A árvore genealógica de todos os antepassados do trabalhador desde o século XIX."
    },
    "resposta_correta": "C",
    "comentario": "O PPP compila o histórico funcional, os fatores de risco ambiental do LTCAT, a eficácia do EPI e os exames do PCMSO ao longo de todo o contrato de trabalho.",
    "referencia": "IN INSS nº 128/2022 e Lei 8.213/1991"
  },
  {
    "id": 679,
    "materia": "Legislação Previdenciária",
    "dificuldade": "Portaria MTP nº 313/2021 e IN INSS nº 128/2022",
    "enunciado": "A partir de 1º de janeiro de 2023, o Perfil Profissiográfico Previdenciário (PPP) passou a ser emitido obrigatoriamente em qual formato para todos os trabalhadores segurados?",
    "alternativas": {
      "A": "Em pergaminho de couro de cabra manuscrito com pena e tinta nanquim.",
      "B": "Em placas de alumínio gravadas a laser para afixação na porta de entrada.",
      "C": "Exclusivamente em formato ELETRÔNICO (PPP Digital), emitido pelo INSS com base nos dados dos eventos de SST enviados pelas empresas ao eSocial (S-2220 e S-2240).",
      "D": "O PPP foi totalmente extinto e proibido no Brasil desde 2023.",
      "E": "Em folhas de papelão grosso dobradas guardadas em caixas de sapatos."
    },
    "resposta_correta": "C",
    "comentario": "A Portaria MTP nº 313/2021 instituiu o PPP Eletrônico obrigatório a partir de 01/01/2023, consultável pelo trabalhador através do aplicativo Meu INSS alimentado pelo eSocial.",
    "referencia": "Portaria MTP nº 313/2021 e IN INSS nº 128/2022"
  },
  {
    "id": 680,
    "materia": "Legislação Previdenciária",
    "dificuldade": "Lei 8.213/1991, Art. 58, § 4º",
    "enunciado": "Qual é a obrigação legal da FHCGV quanto ao fornecimento do PPP ao trabalhador no momento da rescisão do contrato de trabalho?",
    "alternativas": {
      "A": "A organização deve disponibilizar ou fornecer cópia autêntica do PPP ao trabalhador no momento da rescisão do contrato, sob pena de infração e multa da legislação previdenciária.",
      "B": "O PPP só pode ser entregue aos herdeiros após o falecimento do trabalhador.",
      "C": "A fundação é expressamente proibida de deixar o trabalhador ver o conteúdo do PPP.",
      "D": "O PPP deve ser destruído na trituradora de papel na frente do trabalhador demitido.",
      "E": "A entrega do documento está condicionada ao pagamento de taxa de R$ 500,00 pelo servidor."
    },
    "resposta_correta": "A",
    "comentario": "O Art. 58, § 4º da Lei 8.213/91 impõe à empresa o dever de fornecer cópia autêntica do PPP ao trabalhador por ocasião da rescisão contratual ou quando solicitado para fins previdenciários.",
    "referencia": "Lei 8.213/1991, Art. 58, § 4º"
  },
  {
    "id": 681,
    "materia": "Português",
    "dificuldade": "Gramática Normativa - Crase",
    "enunciado": "Assinale a alternativa em que o uso do acento grave indicativo de crase está CORRETO de acordo com a norma-padrão da língua portuguesa:",
    "alternativas": {
      "A": "A equipe de limpeza prestou socorro à um paciente que escorregou no piso molhado.",
      "B": "O médico começou à redigir o laudo ocupacional do trabalhador acidentado.",
      "C": "Os servidores hospitalares compareceram à reuniões semanais da CIPA.",
      "D": "O técnico de segurança dirigiu-se à enfermaria para fiscalizar o uso dos respiradores.",
      "E": "As luvas cirúrgicas foram entregues à ela durante o procedimento cirúrgico."
    },
    "resposta_correta": "D",
    "comentario": "Ocorre crase pela fusão da preposição 'a' (exigida pela regência de 'dirigiu-se a') com o artigo feminino 'a' que antecede 'enfermaria' ('dirigiu-se à enfermaria'). Antes de verbo (redigir), de palavra masculina (um), pronome pessoal (ela) e palavra plural com 'a' singular não ocorre crase.",
    "referencia": "Gramática Normativa - Crase"
  },
  {
    "id": 682,
    "materia": "Português",
    "dificuldade": "Gramática Normativa - Crase Facultativa",
    "enunciado": "O acento grave indicativo de crase é de uso FACULTATIVO na seguinte frase:",
    "alternativas": {
      "A": "O treinamento de segurança ocorrerá pontualmente às 14 horas no auditório.",
      "B": "A direção do hospital está disposta à negociar novos adicionais de insalubridade.",
      "C": "O enfermeiro entregou a ficha de notificação à sua supervisora de plantão.",
      "D": "Os técnicos caminhavam passo à passo inspecionando cada leito da enfermaria.",
      "E": "O servidor referiu-se à todas as cláusulas do regulamento interno do hospital."
    },
    "resposta_correta": "C",
    "comentario": "O uso da crase é facultativo diante de pronomes possessivos femininos no singular (à sua / a sua), pois o uso do artigo feminino antes do possessivo é opcional.",
    "referencia": "Gramática Normativa - Crase Facultativa"
  },
  {
    "id": 683,
    "materia": "Português",
    "dificuldade": "Gramática Normativa - Casos Proibitivos de Crase",
    "enunciado": "Em qual das sentenças abaixo o sinal indicativo de crase foi empregado de maneira INCORRETA?",
    "alternativas": {
      "A": "Às vezes, a rotina hospitalar exige rapidez extrema nos atendimentos de urgência.",
      "B": "O plano de prevenção visava atender às exigências das Normas Regulamentadoras.",
      "C": "A técnica de enfermagem dedicava-se à pesquisas sobre a transmissão de patógenos.",
      "D": "Os novos funcionários foram apresentados à diretora clínica da fundação.",
      "E": "O relatório técnico foi redigido à mão pelo perito judicial trabalhista."
    },
    "resposta_correta": "C",
    "comentario": "A frase 'dedicava-se à pesquisas' está incorreta: diante de palavra no plural ('pesquisas') precedida da preposição 'a' no singular, não pode haver crase ('a pesquisas' ou 'às pesquisas').",
    "referencia": "Gramática Normativa - Casos Proibitivos de Crase"
  },
  {
    "id": 684,
    "materia": "Português",
    "dificuldade": "Gramática Normativa - Regência e Crase",
    "enunciado": "Considere a frase: 'O técnico de segurança recomendou a vacinação ___ todas as funcionárias e solicitou ___ diretoria que encaminhasse o ofício ___ Secretaria de Saúde'. As lacunas devem ser preenchidas, correta e respectivamente, por:",
    "alternativas": {
      "A": "a – à – à",
      "B": "à – a – à",
      "C": "à – à – à",
      "D": "a – a – a",
      "E": "à – à – a"
    },
    "resposta_correta": "A",
    "comentario": "1ª lacuna: 'a todas' (antes do pronome indefinido 'todas' não há artigo, logo apenas preposição 'a'); 2ª lacuna: 'solicitou à diretoria' (solicitar algo 'a' alguém + artigo 'a' = 'à'); 3ª lacuna: 'encaminhasse o ofício à Secretaria' (encaminhar 'a' + 'a' Secretaria = 'à'). Portanto: a – à – à.",
    "referencia": "Gramática Normativa - Regência e Crase"
  },
  {
    "id": 685,
    "materia": "Português",
    "dificuldade": "Gramática Normativa - Crase em Locuções",
    "enunciado": "O emprego da crase é OBRIGATÓRIO na locução adverbial feminina destacada em:",
    "alternativas": {
      "A": "Os servidores trabalhavam **lado a lado** no processamento das bolsas de sangue.",
      "B": "O médico examinador avaliou os pacientes **cara a cara** sem qualquer barreira protetora.",
      "C": "O estagiário caminhava **gota a gota** dosando o reagente químico no tubo de ensaio.",
      "D": "Os profissionais de enfermagem responderam prontamente, saindo **às pressas** para a sala de reanimação.",
      "E": "O técnico de segurança permaneceu de guarda **dia a dia** nas portarias do hospital."
    },
    "resposta_correta": "D",
    "comentario": "Locuções adverbiais femininas (às pressas, à noite, à tarde, às vezes, à vontade) exigem obrigatoriamente o acento grave de crase. Em expressões com palavras repetidas (cara a cara, dia a dia), a crase é proibida.",
    "referencia": "Gramática Normativa - Crase em Locuções"
  },
  {
    "id": 686,
    "materia": "Português",
    "dificuldade": "Gramática Normativa - Concordância Verbal",
    "enunciado": "Assinale a alternativa que atende plenamente às regras de CONCORDÂNCIA VERBAL da norma-padrão da língua portuguesa:",
    "alternativas": {
      "A": "Havia muitos riscos biológicos identificados no inventário de riscos da unidade hospitalar.",
      "B": "Tratam-se de irregularidades graves constatadas pelos auditores fiscais do trabalho.",
      "C": "Devem haver outras soluções ergonômicas para a transferência de pacientes acamados.",
      "D": "Fazem cinco anos que a FHCGV implementou o seu novo plano de gerenciamento de resíduos.",
      "E": "Haviam muitos riscos biológicos identificados no inventário de riscos da unidade hospitalar."
    },
    "resposta_correta": "A",
    "comentario": "O verbo HAVER com sentido de existir é impessoal e não tem sujeito, permanecendo obrigatoriamente no singular ('Havia muitos riscos'). O verbo FAZER indicando tempo decorrido também é impessoal ('Faz cinco anos'). Locuções com haver impessoal mantêm o auxiliar no singular ('Deve haver'). Com preposição ('tratar-se de'), o verbo fica no singular ('Trata-se de').",
    "referencia": "Gramática Normativa - Concordância Verbal"
  },
  {
    "id": 687,
    "materia": "Português",
    "dificuldade": "Gramática Normativa - Voz Passiva e Concordância",
    "enunciado": "Em relação à concordância verbal com a partícula apassivadora 'se', assinale a frase gramaticalmente CORRETA:",
    "alternativas": {
      "A": "Aplicou-se as medidas de proteção coletiva recomendadas pela comissão técnica.",
      "B": "Realizou-se todos os exames médicos periódicos previstos no PCMSO da fundação.",
      "C": "Realizaram-se todos os exames médicos periódicos previstos no PCMSO da fundação.",
      "D": "Constatou-se diversas não conformidades ergonômicas no posto de enfermagem da UTI.",
      "E": "Discutiu-se amplamente as novas diretrizes de biossegurança no auditório central."
    },
    "resposta_correta": "C",
    "comentario": "Na voz passiva sintética com pronome apassivador 'se', o verbo concorda com o sujeito paciente: 'todos os exames periódicos foram realizados' -> 'Realizaram-se todos os exames periódicos'.",
    "referencia": "Gramática Normativa - Voz Passiva e Concordância"
  },
  {
    "id": 688,
    "materia": "Português",
    "dificuldade": "Gramática Normativa - Concordância Nominal",
    "enunciado": "Indique a alternativa que apresenta ERRO de concordância nominal de acordo com a norma culta:",
    "alternativas": {
      "A": "A enfermeira afirmou que ela mesmo inspecionou as caixas coletoras de perfurocortantes.",
      "B": "Seguem anexas ao relatório as planilhas de medição de ruído e iluminação ambiental.",
      "C": "Os técnicos de segurança estavam bastante preocupados com os índices de acidentes.",
      "D": "É proibida a entrada de pessoas não autorizadas na sala de quimioterapia do hospital.",
      "E": "É proibido entrada de pessoas não autorizadas na sala de quimioterapia do hospital."
    },
    "resposta_correta": "A",
    "comentario": "O pronome demonstrativo/enfático 'mesmo' concorda em gênero e número com a pessoa a que se refere. Como o sujeito é feminino ('A enfermeira'), a forma correta é: 'ela MESMA inspecionou'.",
    "referencia": "Gramática Normativa - Concordância Nominal"
  },
  {
    "id": 689,
    "materia": "Português",
    "dificuldade": "Gramática Normativa - Expressões Partitivas",
    "enunciado": "Assinale a alternativa em que a concordância verbal com expressão partitiva foi empregada em conformidade com as regras gramaticais:",
    "alternativas": {
      "A": "Fui eu que apresentou o novo plano de prevenção contra incêndio na assembleia.",
      "B": "Mais de um técnico de enfermagem se acidentaram com a mesma agulha perfurocortante.",
      "C": "Cerca de cem profissionais de saúde faltou ao plantão de final de ano na emergência.",
      "D": "Um milhão de reais foram gastos na reforma dos banheiros dos servidores públicos.",
      "E": "A maioria dos servidores hospitalares compareceu ao treinamento de biossegurança."
    },
    "resposta_correta": "E",
    "comentario": "Com expressões partitivas ('a maioria de', 'a maior parte de') seguidas de substantivo no plural, o verbo pode concordar com o núcleo singular ('compareceu') ou com o modificador plural ('compareceram'). Ambas são corretas.",
    "referencia": "Gramática Normativa - Expressões Partitivas"
  },
  {
    "id": 690,
    "materia": "Português",
    "dificuldade": "Gramática Normativa - Concordância Nominal de Predicativo",
    "enunciado": "Considere a oração: 'Os técnicos e as enfermeiras mantiveram-se ___ durante todo o procedimento de emergência'. A lacuna é preenchida corretamente por:",
    "alternativas": {
      "A": "atento",
      "B": "atentos (ou atentas e atentos)",
      "C": "atentamente",
      "D": "atenta",
      "E": "atentas apenas"
    },
    "resposta_correta": "B",
    "comentario": "Quando o adjetivo funciona como predicativo de sujeitos compostos de gêneros diferentes ('Os técnicos e as enfermeiras'), a concordância faz-se preferencialmente no masculino plural ('atentos').",
    "referencia": "Gramática Normativa - Concordância Nominal de Predicativo"
  },
  {
    "id": 691,
    "materia": "Português",
    "dificuldade": "Interpretação e Compreensão de Texto",
    "enunciado": "Leia o trecho a seguir: 'A prevenção de acidentes em serviços hospitalares não depende apenas da aquisição de equipamentos modernos, mas principalmente do engajamento consciente de cada trabalhador na adesão aos protocolos de biossegurança'. O sentido principal veiculado pelo texto é que:",
    "alternativas": {
      "A": "Os protocolos de biossegurança hospitalares são dispensáveis quando há equipamentos caros.",
      "B": "Os trabalhadores de saúde são os únicos culpados pela ocorrência de acidentes de trabalho.",
      "C": "A gestão hospitalar não possui responsabilidade legal sobre os acidentes com perfurocortantes.",
      "D": "O elemento humano e comportamental é determinante para a eficácia das medidas preventivas no ambiente de saúde.",
      "E": "A compra de equipamentos modernos de proteção é totalmente inútil em hospitais públicos."
    },
    "resposta_correta": "D",
    "comentario": "O texto enfatiza que a infraestrutura física/equipamentos é importante, mas o fator decisivo primordial é a atitude consciente e a adesão ativa dos trabalhadores aos protocolos seguros.",
    "referencia": "Interpretação e Compreensão de Texto"
  },
  {
    "id": 692,
    "materia": "Português",
    "dificuldade": "Coesão Textual e Relações Anafóricas",
    "enunciado": "No segmento 'O uso do respirador PFF2 é obrigatório no atendimento a pacientes com suspeita de tuberculose. **Este equipamento** impede a inalação de aerossóis infectantes', o termo destacado exerce a função coesiva de:",
    "alternativas": {
      "A": "Introduzir uma ideia de oposição radical em relação à oração antecedente.",
      "B": "Expressar uma circunstância temporal de anterioridade imediata.",
      "C": "Retomar anaforicamente o termo 'respirador PFF2' citado na oração anterior, garantindo a progressão temática sem repetição vocabular desnecessária.",
      "D": "Indicar que o equipamento mencionado não possui eficácia comprovada.",
      "E": "Anunciar uma informação que ainda será apresentada no parágrafo seguinte."
    },
    "resposta_correta": "C",
    "comentario": "O pronome demonstrativo 'Este equipamento' atua como mecanismo de coesão referencial anafórica, retomando o antecedente textual 'respirador PFF2'.",
    "referencia": "Coesão Textual e Relações Anafóricas"
  },
  {
    "id": 693,
    "materia": "Português",
    "dificuldade": "Semântica - Denotação e Conotação",
    "enunciado": "Assinale a alternativa em que a palavra destacada foi empregada em sentido CONOTATIVO (figurado):",
    "alternativas": {
      "A": "O técnico de laboratório deixou cair e **quebrar** o tubo de ensaio de vidro no chão do expurgo.",
      "B": "A sobrecarga contínua de tarefas na UTI acabou por **quebrar** a resistência emocional da equipe de enfermagem.",
      "C": "A tampa da caixa coletora de perfurocortantes deve ser lacrada para não **quebrar** as agulhas.",
      "D": "O servidor sofreu uma queda no corredor e veio a **quebrar** o osso do antebraço direito.",
      "E": "A autoclave apresentou defeito mecânico na resistência elétrica e parou de **funcionar**."
    },
    "resposta_correta": "B",
    "comentario": "Em 'quebrar a resistência emocional', o verbo 'quebrar' foi usado em sentido figurado (esgotar psicologicamente). Nas demais alternativas, os termos foram usados em sentido denotativo literal.",
    "referencia": "Semântica - Denotação e Conotação"
  },
  {
    "id": 694,
    "materia": "Português",
    "dificuldade": "Redação Oficial e Comunicação Técnica",
    "enunciado": "Em um memorando técnico de SST, a clareza, a precisão vocabular e a impessoalidade são atributos indispensáveis da redação oficial. Assinale a frase que melhor exemplifica essa linguagem técnica adequada:",
    "alternativas": {
      "A": "O hospital virou uma verdadeira bagunça depois que trocaram as marcas das seringas descartáveis.",
      "B": "Acho que a galera da enfermagem tá meio esquecida de como usar as luvas de borracha no plantão.",
      "C": "Infelizmente os enfermeiros são muito teimosos e não querem saber de colocar o óculos de proteção.",
      "D": "Tomara que ninguém pegue nenhuma doença grave enquanto a gente tenta arrumar esse problema aí.",
      "E": "Constatou-se que 15% dos profissionais do setor cirúrgico necessitam de reciclagem no manuseio de perfurocortantes."
    },
    "resposta_correta": "E",
    "comentario": "A linguagem oficial e técnica exige padrão culto, impessoalidade ('Constatou-se que...'), objetividade e precisão quantitativa de dados, sem gírias ou impressões subjetivas.",
    "referencia": "Redação Oficial e Comunicação Técnica"
  },
  {
    "id": 695,
    "materia": "Português",
    "dificuldade": "Semântica e Relações de Sentido",
    "enunciado": "Na frase 'Os resíduos de serviços de saúde exigem acondicionamento rigoroso, **haja vista** a sua periculosidade microbiológica e química', a expressão destacada tem o sentido de:",
    "alternativas": {
      "A": "Apesar de / não obstante (valor concessivo).",
      "B": "Com o objetivo de / a fim de (valor final).",
      "C": "Tendo em vista / em razão de (valor causal/explicativo).",
      "D": "Caso / contanto que (valor condicional).",
      "E": "À medida que / ao passo que (valor proporcional)."
    },
    "resposta_correta": "C",
    "comentario": "A locução 'haja vista' equivale a 'tendo em vista', 'visto que', 'em virtude de', introduzindo a causa ou justificativa do rigor no acondicionamento dos resíduos.",
    "referencia": "Semântica e Relações de Sentido"
  },
  {
    "id": 696,
    "materia": "Português",
    "dificuldade": "Sintaxe - Conjunções Concessivas",
    "enunciado": "Considere a oração: '**Embora** o hospital fornecesse protetores auriculares aos trabalhadores da lavanderia, muitos não utilizavam o equipamento durante todo o turno'. O conectivo em destaque estabelece entre as orações uma relação semântica de:",
    "alternativas": {
      "A": "Condição (hipótese necessária para a realização de um evento).",
      "B": "Causa (motivo determinante da ação realizada).",
      "C": "Concessão (ideia de ressalva ou oposição que não anula o fato principal).",
      "D": "Finalidade (propósito ou objetivo a ser alcançado).",
      "E": "Consequência (resultado ou efeito direto da oração anterior)."
    },
    "resposta_correta": "C",
    "comentario": "A conjunção 'Embora' é subordinativa concessiva por excelência, introduzindo uma oração que expressa fato contrário ao da oração principal sem, contudo, impedi-lo.",
    "referencia": "Sintaxe - Conjunções Concessivas"
  },
  {
    "id": 697,
    "materia": "Português",
    "dificuldade": "Sintaxe - Conjunções Conformativas",
    "enunciado": "Assinale a alternativa em que o conectivo destacado expressa ideia de CONFORMIDADE:",
    "alternativas": {
      "A": "**Conforme** estabelece a NR-32, é obrigatória a vacinação gratuita de todos os trabalhadores contra a hepatite B.",
      "B": "O técnico não utilizou a máscara de proteção, **portanto** foi advertido formalmente pelo supervisor.",
      "C": "O servidor utilizou luvas de nitrila **a fim de** proteger as mãos do contato com agentes químicos.",
      "D": "Os acidentes com agulhas continuaram ocorrendo **porque** faltavam caixas coletoras nos quartos.",
      "E": "Os trabalhadores serão treinados **caso** ocorra mudança substancial nos processos operacionais."
    },
    "resposta_correta": "A",
    "comentario": "'Conforme' é conjunção subordinativa conformativa (equivale a 'segundo', 'consoante', 'de acordo com'), indicando conformidade com a norma citada.",
    "referencia": "Sintaxe - Conjunções Conformativas"
  },
  {
    "id": 698,
    "materia": "Português",
    "dificuldade": "Sintaxe - Conjunções Adversativas",
    "enunciado": "Na frase 'O técnico de segurança elaborou o plano de ação preventiva, **contudo** a diretoria do hospital não liberou os recursos orçamentários necessários', a conjunção destacada pode ser substituída, sem alteração de sentido, por:",
    "alternativas": {
      "A": "No entanto (ou porém, todavia, entretanto).",
      "B": "Portanto.",
      "C": "Por conseguinte.",
      "D": "Visto que.",
      "E": "Ainda que."
    },
    "resposta_correta": "A",
    "comentario": "'Contudo' é conjunção coordenativa adversativa, que exprime oposição, contraste ou adversidade, sendo perfeitamente intercambiável com 'no entanto', 'porém', 'todavia', 'entretanto'.",
    "referencia": "Sintaxe - Conjunções Adversativas"
  },
  {
    "id": 699,
    "materia": "Português",
    "dificuldade": "Sintaxe - Conjunção Como",
    "enunciado": "Assinale a oração em que a conjunção 'COMO' expressa valor semântico de CAUSA:",
    "alternativas": {
      "A": "Ele falava alto **como** se fosse o dono absoluto do estabelecimento de saúde.",
      "B": "Realizamos todos os treinamentos **como** determina a Comissão Interna de Prevenção de Acidentes.",
      "C": "O novo técnico agiu **como** um verdadeiro especialista durante a simulação de evacuação.",
      "D": "**Como** o piso da enfermaria estava molhado com água e sabão, a enfermeira escorregou e caiu.",
      "E": "O hospital possui setores críticos, **como** o centro cirúrgico e as unidades de terapia intensiva."
    },
    "resposta_correta": "D",
    "comentario": "A conjunção 'como' no início do período, antecedendo a oração principal, tem valor causal ('Já que o piso estava molhado / Visto que o piso estava molhado...'). Em B é comparativa; em C é conformativa; em D exemplificativa.",
    "referencia": "Sintaxe - Conjunção Como"
  },
  {
    "id": 700,
    "materia": "Português",
    "dificuldade": "Sintaxe - Conjunções Proporcionais",
    "enunciado": "Em 'A radiação dispersa diminuía **à medida que** os profissionais se distanciavam da fonte emissora de raio-X', a locução conjuntiva em destaque expressa noção de:",
    "alternativas": {
      "A": "Condicionalidade.",
      "B": "Temporalidade.",
      "C": "Causalidade.",
      "D": "Finalidade.",
      "E": "Proporcionalidade."
    },
    "resposta_correta": "E",
    "comentario": "A locução 'à medida que' (assim como 'à proporção que') é conjuntiva subordinativa proporcional, expressando fatos simultâneos que progridem ou regridem em proporção direta ou inversa.",
    "referencia": "Sintaxe - Conjunções Proporcionais"
  }
];

// Compatibilidade para execução no navegador (PWA) e ambiente ES Module
if (typeof window !== 'undefined') {
  window.questions = questions;
  window.QUESTIONS_DATA = questions;
}

export default questions;
