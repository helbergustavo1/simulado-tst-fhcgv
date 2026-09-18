/**
 * Banco de Questões - Simulado TST FHCGV/PA
 * Total: 200 questões de demonstração distribuídas conforme edital
 */
const QUESTIONS_DATA = [
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
  }
];

if (typeof window !== 'undefined') {
  window.QUESTIONS_DATA = QUESTIONS_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = QUESTIONS_DATA;
}
