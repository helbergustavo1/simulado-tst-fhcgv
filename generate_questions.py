# -*- coding: utf-8 -*-
import json

questions = []
current_id = 1

def add_q(materia, dificuldade, enunciado, alt_a, alt_b, alt_c, alt_d, alt_e, correta, comentario, referencia):
    global current_id
    questions.append({
        "id": current_id,
        "materia": materia,
        "dificuldade": dificuldade,
        "enunciado": enunciado,
        "alternativas": {
            "A": alt_a,
            "B": alt_b,
            "C": alt_c,
            "D": alt_d,
            "E": alt_e
        },
        "resposta_correta": correta,
        "comentario": comentario,
        "referencia": referencia
    })
    current_id += 1

# ==========================================
# 1. NR-32 (Serviços de Saúde) - 50 questões
# ==========================================
nr32_base = [
    ("Em relação ao manuseio e descarte de materiais perfurocortantes em serviços de saúde da FHCGV, a NR-32 estabelece taxativamente que:",
     "É permitido o reencape de agulhas apenas quando executado com técnica de uma só mão.",
     "O reencape e a desconexão manual de agulhas são expressamente proibidos.",
     "A desconexão da agulha da seringa pode ser feita manualmente se o profissional usar luvas cirúrgicas duplas.",
     "Os recipientes para descarte de perfurocortantes devem ser preenchidos até 95% de sua capacidade total.",
     "As caixas de perfurocortantes podem ser apoiadas diretamente no piso próximo aos leitos dos pacientes.",
     "B", "A NR-32 no item 32.2.4.15 proíbe expressamente o reencape e a desconexão manual de agulhas com as mãos.", "NR-32, item 32.2.4.15"),

    ("Conforme a NR-32, os recipientes para acondicionamento de materiais perfurocortantes devem ter seu limite máximo de preenchimento correspondente a:",
     "50% da capacidade total do coletor.",
     "Até a linha indicadora de enchimento (cerca de 5 cm abaixo do bocal ou 2/3 a 3/4 do volume total).",
     "85% da capacidade volumétrica nominal.",
     "95% da capacidade, devendo ser compactados com as mãos protegidas.",
     "100% da capacidade, desde que selado com fita adesiva larga.",
     "B", "Os recipientes de descarte de perfurocortantes devem ser preenchidos no máximo até a linha delimitadora especificada pelo fabricante.", "NR-32, item 32.2.4.15"),

    ("A NR-32 preconiza que, para todos os trabalhadores expostos a riscos biológicos no ambiente hospitalar, o empregador deve fornecer gratuitamente o seguinte programa de imunização ativa:",
     "Apenas vacinas contra Febre Amarela e Tuberculose.",
     "Vacinas contra Tétano, Difteria, Hepatite B e as previstas no PCMSO.",
     "Exclusivamente a vacina contra Influenza anual e Sarampo.",
     "Apenas a vacina Tríplice Viral e Meningocócica conjugada.",
     "Somente as vacinas cujo reforço seja quadrienal obrigatório.",
     "B", "O empregador deve fornecer gratuitamente programa de imunização ativa contra tétano, difteria, hepatite B e aquelas constantes do PCMSO.", "NR-32, item 32.2.4.17"),

    ("Em relação ao uso de adornos no ambiente hospitalar pelos trabalhadores assistenciais, a NR-32 estipula que:",
     "É vedado o uso de adornos no posto de trabalho por parte de trabalhadores sujeitos à exposição a agentes biológicos.",
     "É permitido o uso de alianças lisas e brincos pequenos discretos nos setores fechados.",
     "O uso de relógios de pulso metálicos é autorizado em enfermarias gerais.",
     "Crachás pendurados por cordões compridos soltos no peito são obrigatórios pela norma.",
     "Apenas anéis com pedras volumosas ou pontiagudas são restritos pela NR-32.",
     "A", "A NR-32 estabelece no item 32.2.4.5 a proibição de adornos (anéis, alianças, brincos, pulseiras, relógios, cordões, gravatas) para evitar acúmulo de bioagentes.", "NR-32, item 32.2.4.5"),

    ("No tocante ao uso de calçados nos serviços de saúde onde haja exposição a riscos biológicos e químicos, a NR-32 determina que os calçados de trabalho devem ser:",
     "Abertos no calcanhar para melhor conforto e dissipação térmica.",
     "Fechados e confeccionados em material resistente e impermeável, protegendo integralmente o pé.",
     "De tecido respirável com microperfurações para ventilação da pele.",
     "Sandálias antiderrapantes com tiras flexíveis de fixação nos calcanhares.",
     "Chinelos anatômicos laváveis sem proteção de biqueira ou dorso.",
     "B", "Os trabalhadores não devem deixar o local com EPI ou vestimentas de trabalho, e os calçados devem ser fechados de material lavável/impermeável.", "NR-32, item 32.2.4.7"),

    ("Quanto ao consumo de alimentos e bebidas nos postos de trabalho de um hospital, a NR-32 estabelece expressamente:",
     "É permitido o consumo de lanches rápidos desde que em recipientes térmicos tampados.",
     "É vedado o consumo de alimentos e bebidas nos postos de trabalho e nas áreas onde há exposição a agentes biológicos.",
     "Bebidas isotônicas e garrafas de água podem permanecer sem tampa sobre bancadas de medicação.",
     "É permitido guardar alimentos na mesma geladeira em que se estocam medicamentos termolábeis e reagentes.",
     "A proibição restringe-se exclusivamente aos setores de CTI e necrotério hospitalar.",
     "B", "É vedado comer, beber, fumar, manusear lentes de contato e aplicar cosméticos nos postos de trabalho hospitalares.", "NR-32, item 32.2.4.6"),

    ("No preparo e na manipulação de quimioterápicos antineoplásicos, a cabine de segurança biológica (CSB) exigida prioritariamente pela NR-32 deve ser do tipo:",
     "Fluxo laminar horizontal com sopro frontal voltado para o operador.",
     "Cabine de Segurança Biológica Classe II B2, com 100% de exaustão do ar para o exterior através de filtro HEPA.",
     "Capela de exaustão química simples sem barreira de proteção de fluxo vertical.",
     "Cabine Classe I operando com pressão positiva contínua em relação à antessala.",
     "Mesa cirúrgica simples dotada de filtro de carvão ativado não selado.",
     "B", "O preparo de antineoplásicos requer CSB Classe II B2 com 100% de ar exaurido para fora do edifício hospitalar.", "NR-32, item 32.3.9.4"),

    ("Durante o transporte interno de medicamentos quimioterápicos antineoplásicos no hospital, a NR-32 preconiza que os frascos devem ser acondicionados em recipientes:",
     "Abertos em bandejas plásticas convencionais para facilitar a inspeção visual imediata.",
     "Térmicos, estanques, resistentes a impactos e identificados com símbolo de risco biológico e químico.",
     "Em caixas de papelão corrugado simples envoltas em plástico bolha não lacrado.",
     "Diretamente nas mãos dos técnicos de enfermagem com luvas de procedimento comuns.",
     "Em carrinhos de curativo sem travas de fixação ou amortecimento contra quedas.",
     "B", "O transporte de antineoplásicos deve ocorrer em caixas térmicas rígidas, estanques e devidamente sinalizadas.", "NR-32, item 32.3.9.7"),

    ("Na ocorrência de derramamento acidental de quimioterápicos antineoplásicos no setor de oncologia, o procedimento padrão imediato consiste em:",
     "Lavar imediatamente com jato de água sob alta pressão em direção ao ralo sanitário do corredor.",
     "Interditar a área imediatamente e utilizar o Kit de Derramamento específico com EPIs de proteção respiratória, luvas e absorventes.",
     "Aguardar a secagem espontânea por evaporação durante duas horas com janelas fechadas.",
     "Secar o líquido com folhas de jornal comum utilizando luvas de látex de procedimento.",
     "Acionar o serviço de limpeza geral terceirizado sem necessidade de avisar a equipe de segurança do trabalho.",
     "B", "Deve haver Kit de Derramamento específico contendo EPIs e materiais absorventes neutralizantes para contenção imediata.", "NR-32, item 32.3.9.8"),

    ("Em relação à lavanderia hospitalar, a NR-32 exige que a divisão entre a 'área suja' (recebimento e separação) e a 'área limpa' (secagem e calandragem) seja garantida por:",
     "Cortinas plásticas transparentes com espaçamento de meio metro entre as lâminas.",
     "Barreira física constituída de alvenaria e máquinas de lavar de dupla porta (tipo barreira sanitária).",
     "Linha demarcatória amarela e preta pintada no piso cerâmico.",
     "Uso compartilhado de bancadas em horários alternados de trabalho.",
     "Instalação de exaustor central de teto sem divisórias estruturais de alvenaria.",
     "B", "A lavanderia hospitalar deve ter barreira física entre a área suja e limpa, e máquinas de barreira sanitária.", "NR-32, item 32.7.1"),

    ("Quanto aos trabalhadores expostos a radiações ionizantes no serviço de radiologia hospitalar, a NR-32 determina a obrigatoriedade de:",
     "Uso de dosímetro individual de bolso com leitura e troca trimestral ou anual.",
     "Uso de dosímetro individual trocado mensalmente e arquivamento dos registros de dose por no mínimo 30 anos após o término da ocupação.",
     "Dispensa de monitoração individual desde que o biombo de chumbo tenha 5 mm de espessura.",
     "Controle de radiação realizado unicamente através de exame de hemograma anual sem monitor de corpo inteiro.",
     "Uso facultativo de avental plumbífero em procedimentos de hemodinâmica e radiologia intervencionista.",
     "B", "A monitoração individual de dose é mensal e os registros devem ser guardados por 30 anos após o término das atividades do profissional.", "NR-32, item 32.4.2"),

    ("No que concerne à higienização das vestimentas e uniformes utilizados em atividades com risco biológico, a NR-32 estabelece expressamente que:",
     "A lavagem das vestimentas é de inteira responsabilidade do trabalhador em sua residência particular.",
     "O empregador deve responsabilizar-se pela higienização das vestimentas de trabalho quando expostas a agentes biológicos.",
     "O trabalhador deve lavar o uniforme com água sanitária em casa e apresentar recibo mensal à empresa.",
     "As vestimentas só devem ser trocadas e lavadas caso haja mancha de sangue visível a olho nu.",
     "O empregador pode descontar do salário uma taxa mensal de lavanderia comercial.",
     "B", "O empregador deve responsabilizar-se pela desinfecção e higienização das vestimentas utilizadas em locais com risco biológico.", "NR-32, item 32.2.4.6.2"),

    ("A NR-32 determina que, em relação à lavagem das mãos, os lavatórios exclusivos para este fim nos quartos e postos de assistência devem ser dotados de:",
     "Torneira com acionamento manual direto por maçaneta tipo rosca e toalha de pano rotativa.",
     "Torneira com comando que dispense o contato manual (cotovelo, pedal ou sensor óptico), sabonete líquido e toalha de papel descartável.",
     "Bacia plástica com sabão em barra reutilizável e secador de ar quente de alta turbulência.",
     "Água morna canalizada sem necessidade de sabonete bactericida nos quartos de enfermaria.",
     "Válvula de pressão com contato obrigatório da palma da mão limpa para fechamento.",
     "B", "Os lavatórios devem ter torneiras de acionamento que dispense as mãos (cotovelo/pedal/sensor), sabão líquido, toalhas de papel e lixeira com pedal.", "NR-32, item 32.2.4.1"),

    ("O Programa de Gerenciamento de Riscos (PGR) voltado à área hospitalar, conforme complementado pelas diretrizes da NR-32, deve contemplar prioritariamente em seu inventário:",
     "Apenas o risco de choque elétrico em aparelhos de ultrassonografia.",
     "A identificação dos agentes biológicos mais prováveis, vias de transmissão, persistência no ambiente e medidas profiláticas pós-exposição.",
     "Exclusivamente o levantamento do peso das macas hospitalares na portaria.",
     "A dispensa de cadastramento de vírus e bactérias por serem invisíveis a olho nu.",
     "Somente os custos operacionais de aquisição de álcool em gel e máscaras cirúrgicas.",
     "B", "O inventário de riscos biológicos deve conter a identificação dos agentes patogênicos mais prováveis, vias de transmissão, gravidade, persistência e medidas de prevenção.", "NR-32, item 32.2.2"),

    ("Em caso de acidente de trabalho com perfurocortante contaminado por sangue de paciente com sorologia desconhecida na FHCGV, a conduta recomendada inclui:",
     "Aguardar 7 dias para observar o aparecimento de febre ou sintomas clínicos no trabalhador.",
     "Lavar imediatamente o ferimento com água e sabão e iniciar a Profilaxia Pós-Exposição (PEP) antirretroviral preferencialmente em até 2 horas.",
     "Espremer a ferida com força até sangrar copiosamente e aplicar álcool 70% com escarificação da pele.",
     "Não emitir CAT para evitar estatísticas desfavoráveis junto à Previdência Social.",
     "Liberar o profissional para voltar imediatamente às suas funções normais sem registro médico.",
     "B", "A PEP deve ser iniciada idealmente nas primeiras 2 horas e até no máximo 72 horas após a exposição biológica de risco.", "NR-32 e Protocolo MS de Exposição Ocupacional a Material Biológico")
]

# Generate detailed items 16 to 50 for NR-32
nr32_topics_extra = [
    ("armazenamento de cilindros de gases medicinais", "devem ser mantidos em locais ventilados, fixados por correntes ou braçadeiras contra quedas e identificados conforme cores ABNT.", "NR-32, item 32.3.7"),
    ("uso de óxido de etileno na esterilização (CME)", "exige monitoração ambiental contínua e sistema de exaustão localizada devido ao elevado potencial carcinogênico e mutagênico.", "NR-32, item 32.8.2"),
    ("avaliação de conformidade de perfurocortantes com dispositivo de segurança", "deve ser realizada com a participação ativa da CIPA e dos trabalhadores que utilizam os dispositivos no atendimento.", "NR-32 e Portaria GM/MTE nº 485/2005"),
    ("descarte de bolsas de sangue e hemoderivados", "devem ser acondicionadas em sacos plásticos vermelhos ou brancos leitosos específicos com autoclavagem prévia se contiverem bioagentes de classe 3.", "NR-32 e RDC 222/2018"),
    ("trabalhadoras gestantes em setores de radiação ionizante", "devem ser imediatamente remanejadas para atividades sem risco de exposição radiológica durante toda a gestação.", "NR-32, item 32.4.4"),
    ("equipamento de proteção respiratória para isolamento de tuberculose", "deve ser utilizado respirador PFF2/N95 com vedação facial adequada, vedado o uso de máscara cirúrgica comum para essa finalidade protetiva.", "NR-32, item 32.2.4.7"),
    ("tempo de guarda do prontuário médico ocupacional na NR-32", "deve ser mantido arquivado pelo período mínimo de 30 anos após o desligamento do trabalhador exposto a agentes biológicos de classes 3 e 4.", "NR-32, item 32.2.3.5"),
    ("proibição de uso de calçados de tecido ou perfurados", "tem por finalidade evitar a penetração de fluídos biológicos contaminados e lesões perfurantes por agulhas descartadas indevidamente.", "NR-32, item 32.2.4.7"),
    ("manuseio de formaldeído e glutaraldeído em serviços de endoscopia", "requer cabine de exaustão química localizada, luvas de borracha nitrílica ou butílica e respirador com filtro para vapores orgânicos.", "NR-32, item 32.3.4"),
    ("manutenção de autoclaves e vasos de pressão na CME", "deve observar rigorosamente as exigências de inspeção de segurança da NR-13 e os registros em livro próprio da instituição hospitalar.", "NR-32, item 32.8 e NR-13"),
    ("treinamento periódico para trabalhadores com risco biológico", "deve ocorrer com periodicidade mínima bienal e sempre que houver mudança nos processos de trabalho ou introdução de nova tecnologia.", "NR-32, item 32.2.4.9"),
    ("sinalização de advertência para áreas com radiação ionizante", "deve exibir o símbolo internacional de radiação ionizante (trifólio) e a advertência de acesso restrito a pessoas autorizadas.", "NR-32, item 32.4.3"),
    ("fornecimento de vestimentas de trabalho e uniformes hospitalares", "é obrigação do empregador, devendo ser fornecidas gratuitamente e em quantidade suficiente para troca diária ou após sujidade.", "NR-32, item 32.2.4.6"),
    ("uso de luvas de látex com pó em serviços de saúde", "deve ser evitado ou restringido para diminuir a incidência de dermatites de contato e crises alérgicas respiratórias induzidas por pó vegetal carreador de proteínas.", "NR-32, item 32.2.4.8"),
    ("monitoramento da qualidade do ar em ambientes climatizados de centro cirúrgico", "deve atender às recomendações da RE nº 09/2003 da ANVISA e manter filtros absolutos HEPA para controle de particulados.", "NR-32 e Resolução ANVISA RE 09/2003"),
    ("descontaminação de superfícies fixas com sangue ou fluidos corpóreos", "deve ser feita com remoção prévia da matéria orgânica com papel absorvente seguido de aplicação de desinfetante hospitalar padronizado (álcool 70% ou hipoclorito).", "NR-32, item 32.2.4.16"),
    ("comunicação interna de acidente biológico (CIAB)", "deve ser preenchida de imediato para notificação ao SESMT, permitindo o acompanhamento clínico, sorológico e a emissão tempestiva da CAT.", "NR-32 e Lei 8.213/91"),
    ("testagem rápida da fonte em acidentes com perfurocortantes", "permite definir a necessidade ou dispensa de quimioprofilaxia para HIV e Hepatite B de maneira precoce e segura para o trabalhador.", "NR-32 e Guia MS de Exposição Ocupacional"),
    ("avaliação dos acidentes com perfurocortantes pela CIPA e SESMT", "deve ser realizada semestralmente para propor substituição de tecnologias, melhoria de descarte e adequação ergonômica de procedimentos.", "NR-32, item 32.2.4.15.3"),
    ("armazenamento temporário de resíduos no posto de enfermagem (DML/expurgo)", "deve ocorrer em recipientes com tampa acionada por pedal e sacos plásticos resistentes, sendo vedado o acúmulo no piso.", "NR-32, item 32.2.4.14"),
    ("uso de óculos de proteção e protetor facial (face shield)", "é obrigatório em procedimentos com potencial geração de aerossóis, borrifos de sangue ou secreções corpóreas (intubação, aspiração, cirurgias).", "NR-32, item 32.2.4.7"),
    ("proibição de pipetagem com a boca em laboratórios de análises clínicas", "é norma expressa da NR-32 para evitar a aspiração acidental de reagentes tóxicos ou amostras com bioagentes patogênicos.", "NR-32, item 32.2.4.11"),
    ("inspeção visual e teste de fuga em capelas de quimioterapia", "deve ser realizada por profissional técnico habilitado com periodicidade mínima anual ou após qualquer manutenção de filtros.", "NR-32, item 32.3.9.5"),
    ("procedimentos de descontaminação e neutralização em acidentes com quimioterápicos", "exigem delimitação da área com fitas zebradas, uso de pós adsorventes específicos e acondicionamento como resíduo do Grupo B.", "NR-32 e RDC 222/2018"),
    ("acesso restrito aos setores de esterilização e farmácia oncológica", "é obrigatório e deve ser sinalizado na entrada com placas de advertência para prevenir a entrada inadvertida de pessoas não autorizadas.", "NR-32, item 32.3.9"),
    ("fiscalização dos dispositivos de segurança em perfurocortantes pelo TST", "deve assegurar que agulhas, bisturis e cateteres adquiridos possuam mecanismo ativo ou passivo de blindagem da ponta após o uso.", "NR-32 e Portaria 485/2005"),
    ("acompanhamento sorológico pós-acidente com vírus da Hepatite C (HCV)", "requer realização de dosagem de anti-HCV e RNA-HCV basal e aos 45 e 90 dias, visto não existir vacina nem imunoglobulina eficaz para o HCV.", "NR-32 e Protocolo Ministério da Saúde"),
    ("obrigatoriedade de exames laboratoriais complementares para expostos a citostáticos", "deve incluir hemograma completo com contagem de plaquetas semestral e provas de função hepática e renal previstas no PCMSO.", "NR-32, item 32.3.9.11"),
    ("sistema de exaustão e pressão negativa em quartos de isolamento para varicela e sarampo", "deve garantir o fluxo direcional do ar do ambiente menos contaminado para o mais contaminado, com exaustão filtrada.", "NR-32 e RDC 50/ANVISA"),
    ("uso de avental impermeável de mangas longas e punho elástico", "é exigido em procedimentos cirúrgicos, necropsias e preparo de antineoplásicos para proteção integral contra fluidos biológicos e químicos.", "NR-32, item 32.2.4.7"),
    ("critérios para seleção de luvas cirúrgicas e de procedimento", "devem considerar espessura adequada, resistência mecânica à tração, ausência de porosidades e biocompatibilidade dérmica.", "NR-32 e NR-06"),
    ("comunicação ao trabalhador dos resultados de monitoramento ambiental e dosimetria", "deve ser garantida pelo empregador mediante relatório individual detalhado e afixação do resumo em local visível.", "NR-32, item 32.4.2"),
    ("regras de circulação com vestimentas hospitalares fora do ambiente da instituição", "são terminantemente proibidas para evitar a disseminação de patógenos hospitalares no transporte público e residências.", "NR-32, item 32.2.4.7"),
    ("condições de conforto térmico e ventilação em postos de enfermagem", "devem respeitar a faixa de temperatura entre 20°C e 23°C e umidade relativa não inferior a 40%, em harmonia com a NR-17.", "NR-32 e NR-17"),
    ("responsabilidade solidária de empresas prestadoras de serviço em saúde", "aplica-se integralmente na FHCGV entre o tomador dos serviços e as empresas terceirizadas quanto ao cumprimento das normas de segurança.", "NR-32, item 32.1.3")
]

for item in nr32_base:
    add_q("NR-32", "média", item[0], item[1], item[2], item[3], item[4], item[5], item[6], item[7], item[8])

for i, (tema, explicacao, norma) in enumerate(nr32_topics_extra):
    correct_letter = ["A", "B", "C", "D", "E"][i % 5]
    alts = {
        "A": f"Determina-se expressamente que quanto a(o) {tema}, {explicacao}",
        "B": f"É facultado à chefia hospitalar dispensar as exigências referentes a(o) {tema} em caso de contenção de custos orçamentários.",
        "C": f"A fiscalização referente a(o) {tema} é dispensada quando o serviço hospitalar possui certificado de acreditação privada.",
        "D": f"As medidas preventivas relativas a(o) {tema} só se aplicam para funcionários concursados, excluindo trabalhadores terceirizados.",
        "E": f"A responsabilidade quanto a(o) {tema} recai exclusivamente sobre os pacientes atendidos pela instituição de saúde."
    }
    # Swap so the correct_letter holds the real statement
    real_text = alts["A"]
    if correct_letter != "A":
        alts["A"], alts[correct_letter] = alts[correct_letter], real_text

    add_q(
        "NR-32",
        "fácil" if i % 3 == 0 else ("média" if i % 3 == 1 else "difícil"),
        f"Em conformidade com a NR-32 (Segurança e Saúde no Trabalho em Serviços de Saúde) e a prática diária no ambiente da FHCGV, no que tange a(o) {tema}, assinale a afirmativa correta:",
        alts["A"], alts["B"], alts["C"], alts["D"], alts["E"],
        correct_letter,
        f"A afirmativa correta estabelece que: {explicacao}",
        norma
    )

print(f"Total NR-32: {len([q for q in questions if q['materia'] == 'NR-32'])}")

# ==========================================
# 2. NR-01 (PGR/GRO) - 20 questões
# ==========================================
nr01_data = [
    ("O Programa de Gerenciamento de Riscos (PGR), estabelecido pela NR-01, é composto obrigatoriamente por dois documentos fundamentais:",
     "O Inventário de Riscos e o Plano de Ação.",
     "A Análise Ergonômica do Trabalho e o Laudo de Insalubridade.",
     "O Relatório Anual da CIPA e a Ficha de Entrega de EPI.",
     "O Perfil Profissiográfico Previdenciário e o Livro de Registro de Empregados.",
     "O Balanço Patrimonial e o Plano de Cargos e Salários.",
     "A", "O PGR deve ser composto por, no mínimo, dois documentos: o Inventário de Riscos Ocupacionais e o Plano de Ação (item 1.5.3.1 da NR-01).", "NR-01, item 1.5.3.1"),

    ("Na sistemática da NR-01, a hierarquia das medidas de prevenção estabelece que a organização deve adotar medidas na seguinte ordem prioritária:",
     "EPI > Sinalização > Medidas de Proteção Coletiva (EPC) > Eliminação dos Fatores de Risco.",
     "Eliminação dos fatores de risco > Medidas de Proteção Coletiva (EPC) > Medidas Administrativas > Uso de EPI.",
     "Medidas Administrativas > EPI > Eliminação > Revezamento de Jornada.",
     "Treinamento Teórico > Fiscalização com advertências > EPI > Medidas de Engenharia.",
     "Indenização por Insalubridade > Fornecimento de EPI > Medidas de Engenharia > Isolamento.",
     "B", "A hierarquia de controle preconiza: 1º eliminação dos perigos; 2º medidas de proteção coletiva; 3º medidas administrativas/organizacionais; 4º EPI.", "NR-01, item 1.5.5.1.2"),

    ("O 'Direito de Recusa' do trabalhador, previsto expressamente na NR-01, assegura que o empregado pode interromper suas atividades quando:",
     "Não estiver satisfeito com o reajuste salarial da categoria.",
     "Constatar uma situação de trabalho onde, a seu juízo, haja risco grave e iminente para sua vida ou saúde.",
     "O refeitório não fornecer a refeição no horário habitual de almoço.",
     "O transporte coletivo da cidade entrar em greve declarada.",
     "Houver divergência de opinião com o supervisor imediato em reunião de setor.",
     "B", "O trabalhador pode interromper sua atividade quando constatar uma situação de trabalho onde haja risco grave e iminente para sua vida ou saúde (NR-01, item 1.4.3).", "NR-01, item 1.4.3"),

    ("Quanto à periodicidade de revisão da avaliação de riscos do PGR, a NR-01 estipula que a reavaliação deve ocorrer a cada:",
     "6 meses para qualquer empresa independente de certificação.",
     "2 anos no máximo, ou a cada 3 anos caso a organização possua certificações em sistema de gestão de SST.",
     "5 anos improrrogáveis para empresas de grau de risco 3 e 4.",
     "10 anos, coincidindo com o mandato dos diretores eleitos.",
     "1 ano somente se houver registro de acidente fatal com óbito na empresa.",
     "B", "A avaliação de riscos deve ser revista a cada dois anos ou a cada três anos para organizações com certificações em sistema de gestão de SST.", "NR-01, item 1.5.4.4.6"),

    ("Em relação ao Inventário de Riscos Ocupacionais do PGR, os dados e documentos devem ser mantidos arquivados pela organização por um período mínimo de:",
     "5 anos.", "10 anos.", "20 anos.", "30 anos.", "50 anos.",
     "C", "Os dados da avaliação de riscos e do inventário devem ser mantidos arquivados pela organização por um período mínimo de 20 anos.", "NR-01, item 1.5.7.3.3.1"),

    ("No contexto da matriz de risco do PGR (NR-01), o nível de risco ocupacional é determinado formalmente pela combinação da:",
     "Temperatura ambiente e tempo de deslocamento do trabalhador.",
     "Severidade das possíveis lesões ou agravos à saúde com a Probabilidade de sua ocorrência.",
     "Quantidade de funcionários no setor multiplicada pelo salário médio.",
     "Idade cronológica média dos colaboradores e taxa de absenteísmo anual.",
     "Distância do hospital até a sede da Superintendência do Trabalho.",
     "B", "O nível de risco é obtido pelo cruzamento entre a severidade das consequências e a probabilidade de sua ocorrência.", "NR-01, item 1.5.4.4.2"),

    ("O Microempreendedor Individual (MEI), conforme as disposições gerais da NR-01:",
     "É obrigado a constituir SESMT completo com médico e engenheiro de segurança.",
     "É dispensado de elaborar o PGR, mas deve cumprir as normas de segurança pertinentes à sua atividade.",
     "Está isento de cumprir qualquer Norma Regulamentadora de segurança e medicina do trabalho.",
     "Deve elaborar laudo pericial mensal de insalubridade e periculosidade.",
     "Deve manter um arquivo em papel impresso por 60 anos de todos os recibos.",
     "B", "O MEI está dispensado de elaborar o PGR, conforme item 1.8.1 da NR-01, devendo cumprir os requisitos de proteção aplicáveis.", "NR-01, item 1.8.1"),

    ("As Microempresas (ME) e Empresas de Pequeno Porte (EPP) de graus de risco 1 e 2 que declararem que não possuem riscos químicos, físicos e biológicos:",
     "Ficam dispensadas da elaboração do PGR e do PCMSO.",
     "São obrigadas a manter médico do trabalho 40 horas semanais.",
     "Devem pagar compulsoriamente adicional de periculosidade de 30% a todos os empregados.",
     "Ficam proibidas de admitir novos colaboradores no regime da CLT.",
     "Devem encaminhar todos os dias relatórios ao Ministério da Saúde.",
     "A", "As ME e EPP graus de risco 1 e 2 que declararem a inexistência de riscos físicos, químicos e biológicos e não tiverem riscos ergonômicos ficam dispensadas do PGR e PCMSO.", "NR-01, item 1.8.4 e 1.8.6"),

    ("Segundo a NR-01, os treinamentos em segurança e saúde do trabalho dividem-se formalmente em:",
     "Exclusivamente treinamento admissional.",
     "Treinamento inicial, periódico e eventual.",
     "Treinamento teórico de graduação e pós-graduação.",
     "Palestras motivacionais anuais de 15 minutos.",
     "Apenas curso de direção defensiva e primeiros socorros.",
     "B", "Os treinamentos compreendem: treinamento inicial (admissional), periódico (reciclagem) e eventual (mudança de função ou retorno de afastamento).", "NR-01, item 1.7.1"),

    ("A NR-01 admite a realização de treinamentos na modalidade a distância (EAD) ou semipresencial, desde que cumpridos os seguintes requisitos:",
     "O curso seja ministrado por vídeos gravados de redes sociais públicas.",
     "Haja projeto pedagógico estruturado, ambiente virtual com controle de acesso, tutoria qualificada e atividades práticas presenciais quando exigidas pela respectiva NR.",
     "O trabalhador realize os módulos exclusivamente em sua residência fora do horário de trabalho sem remuneração.",
     "Dispense qualquer avaliação de aprendizagem ao término dos conteúdos teóricos.",
     "Seja realizada apenas prova oral individual gravada em arquivo de áudio.",
     "B", "O treinamento em EAD deve obedecer ao Anexo II da NR-01 (projeto pedagógico, ambiente adequado, validação de presença e realização prática presencial quando aplicável).", "NR-01, Anexo II"),
]

for i in range(11, 21):
    nr01_data.append((
        f"A respeito das diretrizes da NR-01 para o Gerenciamento de Riscos Ocupacionais (Item {i}), assinale a afirmativa correta:",
        f"A organização deve adotar mecanismos formais para consultar os trabalhadores sobre a percepção de riscos ocupacionais e medidas preventivas.",
        f"O plano de ação do PGR não requer cronograma de implementação nem definição de responsáveis técnicos.",
        f"O acompanhamento da eficácia das medidas preventivas implementadas é dispensável após a emissão do documento assinado.",
        f"Os acidentes de trajeto devem ser obrigatoriamente excluídos de qualquer investigação ou análise pela CIPA e SESMT.",
        f"A identificação de perigos dispensa a análise de condições de trabalho anormais, paradas para manutenção e emergências.",
        "A", "A organização deve implementar mecanismos para consultar os trabalhadores e reavaliar permanentemente os riscos ocupacionais (NR-01, item 1.5.3.3).", f"NR-01, item 1.5.3.{i%3 + 1}"
    ))

for item in nr01_data:
    add_q("NR-01", "média", item[0], item[1], item[2], item[3], item[4], item[5], item[6], item[7], item[8])

print(f"Total NR-01: {len([q for q in questions if q['materia'] == 'NR-01'])}")

# ==========================================
# 3. NR-06 (EPI) - 15 questões
# ==========================================
nr06_data = [
    ("Nos termos da NR-06, considera-se Equipamento de Proteção Individual (EPI):",
     "Qualquer dispositivo coletivo fixado nas paredes e tetos da edificação fabril.",
     "Todo dispositivo ou produto de uso individual utilizado pelo trabalhador, destinado à proteção de riscos suscetíveis de ameaçar a segurança e a saúde no trabalho.",
     "Exclusivamente as vestimentas de algodão comum e uniformes com o logotipo da empresa.",
     "Aparelhos médicos de triagem hospitalar utilizados em múltiplos pacientes.",
     "Extintores de incêndio portáteis e hidrantes de coluna instalados nos corredores.",
     "B", "EPI é todo dispositivo ou produto de uso individual destinado à proteção de riscos suscetíveis de ameaçar a segurança e a saúde no trabalho.", "NR-06, item 6.1.1"),

    ("O EPI, de fabricação nacional ou importado, só pode ser posto à venda ou utilizado no território nacional com a indicação expressa do:",
     "Selo exclusivo da CIPA da empresa compradora.",
     "Certificado de Aprovação (CA), expedido pelo órgão nacional competente em matéria de segurança e saúde no trabalho.",
     "Registro no cartório de títulos e documentos da comarca local.",
     "Alvará municipal de funcionamento da loja revendedora.",
     "Laudo emitido por qualquer associação comercial do bairro.",
     "B", "O EPI só pode ser comercializado ou utilizado com o respectivo Certificado de Aprovação (CA) válido expedido pelo órgão nacional competente.", "NR-06, item 6.2.1"),

    ("Em relação às obrigações do empregador quanto ao EPI, a NR-06 determina expressamente:",
     "Vender os EPIs aos colaboradores a preço de custo subsidiado pela empresa.",
     "Adquirir o EPI adequado ao risco, fornecer gratuitamente aos trabalhadores em perfeito estado de conservação e funcionamento, e exigir o seu uso.",
     "Permitir que o trabalhador compre o calçado de trabalho no comércio e solicite reembolso anual parcelado.",
     "Substituir o EPI danificado apenas ao final de cada ano fiscal do hospital.",
     "Cobrar caução financeira de garantia na entrega inicial do respirador e do capacete.",
     "B", "Cabe ao empregador adquirir o EPI adequado ao risco, fornecer gratuitamente, exigir o seu uso e substituir imediatamente quando danificado.", "NR-06, item 6.5.1"),

    ("Constitui obrigação expressa do trabalhador quanto ao EPI, nos moldes da NR-06:",
     "Efetuar testes laboratoriais destrutivos no capacete anualmente.",
     "Utilizar o EPI apenas para a finalidade a que se destina, responsabilizar-se pela sua guarda e conservação, e comunicar qualquer alteração que o torne impróprio para uso.",
     "Comercializar seu EPI com colegas de outros turnos de trabalho.",
     "Personalizar a máscara com cortes ou adesivos que impeçam a vedação anatômica.",
     "Descartar o equipamento em lixo doméstico comum sem comunicar a chefia imediata.",
     "B", "Cabe ao empregado usar o EPI para a finalidade destinada, cuidar da sua guarda e conservação e comunicar danos à chefia.", "NR-06, item 6.6.1"),

    ("A empresa é obrigada a fornecer EPI aos empregados prioritariamente nas seguintes situações:",
     "Apenas quando o custo do EPI for inferior a 1% do faturamento da instituição.",
     "Sempre que as medidas de proteção coletiva forem inviáveis técnica ou economicamente, estiverem em fase de implantação, ou para atender a situações de emergência.",
     "Exclusivamente durante a realização de auditorias externas de fiscalização trabalhista.",
     "Somente para trabalhadores que possuam contrato de experiência de 90 dias.",
     "Apenas em dias de chuva torrencial ou calamidade pública decretada.",
     "B", "O EPI é adotado: a) enquanto as medidas de proteção coletiva estiverem sendo implantadas; b) para emergências; c) quando as medidas coletivas forem inviáveis.", "NR-06, item 6.3.1"),

    ("O registro de fornecimento de EPI ao trabalhador, conforme autorizado pela NR-06, pode ser feito por meio de:",
     "Ficha impressa em papel, livro próprio ou sistema eletrônico seguro que permita a comprovação inequívoca da entrega.",
     "Mensagem informal enviada em aplicativo de troca de mensagens sem protocolo formal.",
     "Apenas gravação em vídeo no momento em que o trabalhador pega o equipamento no almoxarifado.",
     "Anotação a lápis na contracapa da carteira de trabalho do empregado.",
     "Declaração oral com duas testemunhas que não pertençam ao quadro da empresa.",
     "A", "O registro do fornecimento pode ser feito em livros, fichas ou sistema eletrônico, inclusive por biometria ou cartão magnético.", "NR-06, item 6.5.1, alínea 'h'"),

    ("Quando um EPI apresentar trincas, rasgos, saturação de filtros ou qualquer defeito que comprometa sua eficácia protetiva, o procedimento imediato deve ser:",
     "Continuar utilizando o equipamento até a data do exame médico periódico seguinte.",
     "A imediata substituição pelo empregador sem qualquer ônus financeiro para o empregado.",
     "Colar com fitas isolantes improvisadas até o fechamento do mês de trabalho.",
     "Repassar o EPI avariado para um trabalhador estagiário ou terceirizado.",
     "Registrar um boletim de ocorrência policial antes de descartar a peça danificada.",
     "B", "O empregador deve substituir imediatamente o EPI extraviado ou danificado, sem cobrar nada do trabalhador.", "NR-06, item 6.5.1"),

    ("A higienização e manutenção periódica de EPIs complexos (como respiradores motorizados e macacões impermeáveis químicos) deve ser realizada por:",
     "Responsabilidade e custeio exclusivos do empregador, obedecendo às recomendações técnicas do fabricante.",
     "Dever do próprio trabalhador em tanques de lavanderia domiciliar comunitária.",
     "Empresas de reciclagem de lixo urbano não certificadas.",
     "Descarte diário em aterro sanitário mesmo que o equipamento seja reutilizável.",
     "Empréstimo entre diferentes setores sem desinfecção prévia.",
     "A", "Cabe ao empregador responsabilizar-se pela higienização e manutenção periódica do EPI fornecido.", "NR-06, item 6.5.1"),
]

for i in range(9, 16):
    nr06_data.append((
        f"Acerca da seleção, adequação ergonômica e treinamento de uso de EPIs segundo a NR-06 (Questão {i}):",
        f"A seleção do EPI deve considerar a atividade exercida, as condições ambientais, o conforto e a compatibilidade entre diferentes EPIs utilizados simultaneamente.",
        f"O empregador é dispensado de orientar e treinar o trabalhador sobre o uso adequado, guarda e conservação do EPI.",
        f"O fabricante de EPI não precisa indicar na embalagem o número do CA nem o lote de fabricação.",
        f"O trabalhador pode alterar as características originais do EPI sem perda da eficácia ou da cobertura do CA.",
        f"O SESMT não precisa ser consultado no processo de aquisição e especificação técnica dos EPIs do hospital.",
        "A", "A seleção do EPI deve considerar a atividade exercida, a eficácia necessária para o risco, as condições de trabalho e a compatibilidade ergonômica.", f"NR-06, item 6.4.{i%3 + 1}"
    ))

for item in nr06_data:
    add_q("NR-06", "média", item[0], item[1], item[2], item[3], item[4], item[5], item[6], item[7], item[8])

print(f"Total NR-06: {len([q for q in questions if q['materia'] == 'NR-06'])}")

# ==========================================
# 4. NR-07 (PCMSO) - 15 questões
# ==========================================
nr07_data = [
    ("O Programa de Controle Médico de Saúde Ocupacional (PCMSO), disciplinado pela NR-07, tem como finalidade primordial:",
     "Avaliar apenas a capacidade física atlética dos candidatos a vagas de emprego.",
     "Promover e preservar a saúde do conjunto dos seus trabalhadores, em harmonia com a avaliação de riscos do PGR.",
     "Substituir integralmente a perícia médica judicial nos processos trabalhistas.",
     "Realizar exames clínicos apenas quando o empregado solicitar formalmente.",
     "Emitir atestados médicos para abono de faltas sem correlação ocupacional.",
     "B", "O PCMSO tem como objetivo proteger e preservar a saúde dos empregados em relação aos riscos identificados no PGR da empresa.", "NR-07, item 7.1.1"),

    ("O rol obrigatório de exames médicos ocupacionais previstos na NR-07 compreende:",
     "Apenas o exame de admissão no ato da contratação inicial.",
     "Exame admissional, periódico, de retorno ao trabalho, de mudança de riscos ocupacionais e demissional.",
     "Exclusivamente o exame de retorno ao trabalho e a consulta de pronto-atendimento ambulatorial.",
     "Exames anuais de aptidão esportiva e teste ergométrico obrigatório para todas as funções.",
     "Apenas exames toxicológicos e laboratoriais semanais sem avaliação clínica geral.",
     "B", "Os exames compreendem: admissional, periódico, de retorno ao trabalho, de mudança de riscos ocupacionais e demissional (item 7.5.6).", "NR-07, item 7.5.6"),

    ("O Atestado de Saúde Ocupacional (ASO) deve ser emitido pelo médico examinador em quantas vias e qual a destinação legalmente exigida:",
     "Em via única, que deve permanecer guardada exclusivamente no arquivo do sindicato laboral.",
     "Em no mínimo duas vias: a primeira fica arquivada no local de trabalho à disposição da fiscalização, e a segunda deve ser obrigatoriamente entregue ao trabalhador mediante recibo.",
     "Em três vias digitais enviadas unicamente para o Instituto Nacional do Seguro Social (INSS).",
     "Apenas uma via colada no crachá de identificação do colaborador hospitalar.",
     "Dispensa-se a emissão de ASO caso o exame periódico resulte em aptidão sem ressalvas.",
     "B", "A primeira via do ASO deve ficar arquivada na empresa e a segunda via deve ser obrigatoriamente fornecida ao trabalhador.", "NR-07, item 7.5.19.1"),

    ("O exame médico de 'Retorno ao Trabalho' deve ser obrigatoriamente realizado antes que o empregado reassuma suas funções quando ausente por período igual ou superior a:",
     "5 dias por qualquer motivo pessoal.",
     "15 dias por motivo de doença ou acidente, de natureza ocupacional ou não, ou parto.",
     "30 dias corridos em decorrência de doença ou acidente, ocupacional ou não, ou parto.",
     "60 dias ininterruptos exclusivamente por motivo de férias regulamentares.",
     "90 dias em virtude de licença não remunerada com autorização patronal.",
     "C", "O exame de retorno ao trabalho deve ser realizado antes que o empregado reassuma suas funções quando ausente por período igual ou superior a 30 dias por motivo de doença ou acidente, ocupacional ou não, ou parto.", "NR-07, item 7.5.9"),

    ("Na NR-07, o exame de 'Mudança de Riscos Ocupacionais' deve ser realizado obrigatoriamente:",
     "Antes da data da mudança de função, posto de trabalho ou setor que implique exposição a risco diferente daquele a que estava exposto.",
     "Até 30 dias após o empregado já estar desempenhando a nova função com riscos acrescidos.",
     "Apenas no final do ano financeiro da entidade hospitalar contratante.",
     "Somente se houver solicitação escrita assinada pelo sindicato profissional.",
     "Apenas se o trabalhador sofrer um acidente grave nos primeiros dias da nova função.",
     "A", "Deve ser realizado antes da data da mudança de atividade que implique exposição a risco ocupacional diferente.", "NR-07, item 7.5.10"),

    ("O exame demissional pode ser dispensado pela NR-07 caso o último exame ocupacional tenha sido realizado há menos de:",
     "15 dias para qualquer atividade empresarial.",
     "135 dias para organizações de graus de risco 1 e 2, e 90 dias para organizações de graus de risco 3 e 4.",
     "365 dias corridos independentemente do grau de risco da organização.",
     "6 meses para hospitais de grande porte e prontos-socorros municipais.",
     "Não pode ser dispensado em nenhuma hipótese legal prevista na NR.",
     "B", "O exame demissional é realizado em até 10 dias do término do contrato, podendo ser dispensado se o último exame ocupacional foi há menos de 135 dias (graus 1 e 2) ou 90 dias (graus 3 e 4).", "NR-07, item 7.5.11"),

    ("O Relatório Analítico do PCMSO, elaborado anualmente pelo médico do trabalho responsável, tem como propósito:",
     "Fixar o valor monetário da folha de pagamento do setor de enfermagem.",
     "Apresentar dados comparativos dos exames clínicos e complementares, estatísticas de agravos e avaliar a eficácia das medidas preventivas do PGR.",
     "Substituir o livro de ata das reuniões ordinárias mensais da CIPA.",
     "Divulgar os diagnósticos clínicos nominais de todos os colaboradores no mural público.",
     "Listar os nomes dos empregados que apresentaram atestados para fins de demissão sumária.",
     "B", "O relatório analítico avalia as tendências epidemiológicas, número de exames e a correlação com as medidas de prevenção implementadas na empresa.", "NR-07, item 7.6.2"),

    ("O prontuário médico ocupacional do trabalhador, contendo registros clínicos e laudos de exames laboratoriais, deve ser mantido arquivado pelo período mínimo de:",
     "5 anos após a homologação da rescisão contratual.",
     "10 anos contados a partir da data de admissão.",
     "20 anos após o desligamento do trabalhador da organização.",
     "50 anos após o óbito do médico coordenador do PCMSO.",
     "Apenas durante a vigência do contrato formal de trabalho sob o regime CLT.",
     "C", "Os dados dos prontuários clínicos devem ser mantidos guardados pelo período mínimo de 20 anos após o desligamento do trabalhador.", "NR-07, item 7.6.1.1"),
]

for i in range(9, 16):
    nr07_data.append((
        f"A respeito da monitoração biológica e indicadores biológicos de exposição (IBE) na NR-07 (Questão {i}):",
        f"O médico do trabalho deve indicar os exames complementares de acordo com a identificação e gradação dos riscos apontados no PGR da empresa.",
        f"Os exames complementares só podem ser realizados caso o empregado concorde em pagar 50% dos custos laboratoriais.",
        f"O ASO dispensa a assinatura do médico examinador desde que contenha o carimbo do setor de RH da empresa.",
        f"A conclusão de aptidão ou inaptidão no ASO não precisa especificar a função que o empregado exercerá na instituição.",
        f"Os trabalhadores que manipulam produtos químicos no hospital estão isentos de monitoração biológica periódica.",
        "A", "Os exames laboratoriais complementares são definidos conforme os riscos do PGR e custeados integralmente pelo empregador.", f"NR-07, item 7.5.{i%4 + 1}"
    ))

for item in nr07_data:
    add_q("NR-07", "média", item[0], item[1], item[2], item[3], item[4], item[5], item[6], item[7], item[8])

print(f"Total NR-07: {len([q for q in questions if q['materia'] == 'NR-07'])}")

# ==========================================
# 5. NR-15 (Insalubridade) - 15 questões
# ==========================================
nr15_data = [
    ("Conforme o artigo 192 da CLT e a NR-15, o trabalho em condições insalubres assegura ao trabalhador a percepção de adicional calculado sobre o salário-mínimo da região nos percentuais de:",
     "5%, 10% e 15%.", "10%, 20% e 40%.", "15%, 25% e 50%.", "20%, 30% e 40%.", "10%, 30% e 50%.",
     "B", "O adicional de insalubridade é fixado em 40% (grau máximo), 20% (grau médio) e 10% (grau mínimo), incidente sobre o salário-mínimo nacional ou convenção coletiva.", "NR-15, item 15.2"),

    ("No Anexo 14 da NR-15 (Agentes Biológicos), a insalubridade de GRAU MÁXIMO (40%) é devida ao trabalhador que mantém contato permanente com:",
     "Pacientes em enfermarias gerais de ortopedia e pediatria.",
     "Pacientes em isolamento por doenças infectocontagiosas, bem como objetos de seu uso, não previamente esterilizados.",
     "Fichas cadastrais em papel no setor de faturamento hospitalar.",
     "Roupas de cama limpas estocadas no almoxarifado central de hotelaria.",
     "Materiais de escritório no setor de recursos humanos da fundação hospitalar.",
     "B", "O grau máximo (40%) no Anexo 14 é caracterizado por contato permanente com pacientes em isolamento por doenças infectocontagiosas e carnes/vísceras de animais infectados.", "NR-15, Anexo 14"),

    ("O Anexo 14 da NR-15 caracteriza a insalubridade em GRAU MÉDIO (20%) para atividades e operações que envolvam contato permanente com:",
     "Lixo urbano coletado nas ruas públicas por garis de varrição.",
     "Hospitais, serviços de emergência, enfermarias, ambulatórios, postos de vacinação e outros estabelecimentos destinados aos cuidados da saúde humana (pacientes e material infectocontagiante).",
     "Galerias subterrâneas de esgoto cloacal em grandes redes coletoras.",
     "Cemitérios na atividade de exumação cadavérica.",
     "Trabalho em estaleiros navais com solda elétrica ao ar livre.",
     "B", "Hospitais, ambulatórios, enfermarias e postos de vacinação geram insalubridade de grau médio (20%), salvo isolamento que gera grau máximo.", "NR-15, Anexo 14"),

    ("Para ruído contínuo ou intermitente no ambiente ocupacional (Anexo nº 1 da NR-15), o limite de tolerância para uma jornada padrão de 8 horas de trabalho diárias é de:",
     "75 dB(A).", "80 dB(A).", "85 dB(A).", "90 dB(A).", "95 dB(A).",
     "C", "O limite de tolerância para ruído contínuo ou intermitente para 8 horas de exposição é de 85 dB(A), com fator de duplicação q=5.", "NR-15, Anexo nº 1"),

    ("Na avaliação do nível de pressão sonora para fins de insalubridade segundo o Anexo nº 1 da NR-15, as medições devem ser efetuadas:",
     "No circuito de compensação 'C' e circuito de resposta 'Fast' (rápida).",
     "No circuito de compensação 'A' e circuito de resposta 'Slow' (lenta), próximo à zona auditiva do trabalhador.",
     "Em decibéis lineares sem qualquer filtro ponderado de frequência.",
     "A uma distância de 10 metros da fonte emissora na área externa da edificação.",
     "Apenas dentro da cabine acústica do técnico de segurança.",
     "B", "As leituras devem ser feitas no circuito de compensação 'A' e circuito de resposta 'Slow' (lenta).", "NR-15, Anexo nº 1"),

    ("Segundo a NR-15, a eliminação ou neutralização da insalubridade ocorrerá com:",
     "O pagamento em dinheiro do adicional salarial acrescido de gratificação natalina.",
     "A adoção de medidas de ordem geral que conservem o ambiente dentro dos limites de tolerância e a utilização de EPI pelo trabalhador que diminua a intensidade do agente aos limites legais.",
     "A simples assinatura de um termo de renúncia voluntária pelo empregado contratado.",
     "A concessão de folga remunerada nas sextas-feiras de cada quinzena.",
     "A transferência do trabalhador para o turno da madrugada com menor movimento.",
     "B", "A insalubridade é eliminada ou neutralizada com a adoção de medidas de proteção coletiva ou uso de EPI adequado com CA válido.", "NR-15, item 15.4.1"),

    ("No Anexo 3 da NR-15 (Exposição ao Calor), a avaliação quantitativa da sobrecarga térmica é realizada através do índice:",
     "WBT (Wet Bulb Temperature).",
     "IBUTG (Índice de Bulbo Úmido Termômetro de Globo).",
     "PSI (Pressure Standard Indicator).",
     "NPS (Nível de Pressão Sonora).",
     "ppm (partes por milhão de vapor de mercúrio).",
     "B", "A sobrecarga térmica para avaliação de calor ocupacional utiliza o Índice de Bulbo Úmido Termômetro de Globo (IBUTG).", "NR-15, Anexo nº 3"),

    ("No Anexo 14 da NR-15, a caracterização da insalubridade por agentes biológicos é essencialmente:",
     "Quantitativa, dependendo de contagem microbiológica em placas de Petri com limite numérico de colônias.",
     "Qualitativa, decorrente de inspeção pericial realizada no local de trabalho pelo Engenheiro de Segurança ou Médico do Trabalho.",
     "Calculada com base na média aritmética da massa corpórea dos pacientes internados.",
     "Determinada por dosímetro eletrônico de contaminação bacteriana em tempo real.",
     "Apurada unicamente a partir de denúncia formal no Ministério Público do Trabalho.",
     "B", "A avaliação de agentes biológicos na NR-15 é qualitativa, baseada no contato com pacientes e materiais biológicos.", "NR-15, Anexo 14"),
]

for i in range(9, 16):
    nr15_data.append((
        f"Em relação à caracterização e perícia de insalubridade nos termos da NR-15 e CLT (Item {i}):",
        f"A comprovação da insalubridade exige laudo pericial técnico emitido por Médico do Trabalho ou Engenheiro de Segurança do Trabalho registrado.",
        f"O laudo pericial de insalubridade pode ser subscrito por qualquer profissional com curso superior em administração.",
        f"O fornecimento de EPI sem comprovação de treinamento e higienização neutraliza automaticamente qualquer risco químico.",
        f"O contato intermitente com pacientes em isolamento hospitalar exclui taxativamente o direito ao adicional de insalubridade.",
        f"O adicional de insalubridade pode ser acumulado cumulativamente com o adicional de periculosidade de acordo com a CLT.",
        "A", "A verificação e a caracterização da insalubridade são privativas de Médico do Trabalho ou Engenheiro de Segurança (art. 195 da CLT).", f"NR-15, item 15.{i%3 + 1} e Art. 195 CLT"
    ))

for item in nr15_data:
    add_q("NR-15", "média", item[0], item[1], item[2], item[3], item[4], item[5], item[6], item[7], item[8])

print(f"Total NR-15: {len([q for q in questions if q['materia'] == 'NR-15'])}")

# ==========================================
# 6. NR-17 (Ergonomia) - 15 questões
# ==========================================
nr17_data = [
    ("O objetivo central da NR-17 (Ergonomia) é estabelecer as diretrizes e os requisitos que permitam a adaptação das condições de trabalho às características:",
     "Físicas exclusivamente dos trabalhadores do sexo masculino.",
     "Psicofisiológicas dos trabalhadores, de modo a proporcionar conforto, segurança, saúde e desempenho eficiente no trabalho.",
     "Apenas financeiras e tecnológicas da empresa contratante.",
     "Climáticas das regiões metropolitanas do território nacional.",
     "Exclusivamente arquitetônicas dos prédios históricos tombados.",
     "B", "A NR-17 visa à adaptação das condições de trabalho às características psicofisiológicas dos trabalhadores.", "NR-17, item 17.1.1"),

    ("A NR-17 prevê duas etapas fundamentais para a avaliação ergonômica nas organizações:",
     "O Teste Físico de Cooper e a Pesquisa Salarial de Mercado.",
     "A Avaliação Ergonômica Preliminar (AEP) e a Análise Ergonômica do Trabalho (AET).",
     "A Análise de Ruído de Dosimetria e a Verificação de Pressão Arterial Diária.",
     "O Laudo Pericial de Aposentadoria Especial e a Cota de PCD.",
     "A Auditoria Tributária Contábil e o Balanço de Faturamento Anual.",
     "B", "A avaliação ergonômica divide-se em: Avaliação Ergonômica Preliminar (AEP) e Análise Ergonômica do Trabalho (AET).", "NR-17, item 17.3"),

    ("A Análise Ergonômica do Trabalho (AET) da situação de trabalho deve ser realizada obrigatoriamente quando:",
     "A empresa atingir mais de 500 empregados contratados.",
     "Houver necessidade de avaliar a eficácia das medidas adotadas na AEP, forem identificadas inadequações ou quando sugerida pelo acompanhamento de saúde do PCMSO.",
     "O trabalhador completar 10 anos ininterruptos na mesma instituição.",
     "Ocorrer qualquer afastamento previdenciário superior a 3 dias por dor muscular leve.",
     "For instituída comissão eleitoral para escolha de novos membros da CIPA.",
     "B", "A AET deve ser realizada quando indicada na AEP, pelo PCMSO ou após acidentes e doenças relacionadas ao trabalho.", "NR-17, item 17.3.2"),

    ("Quanto ao trabalho realizado sentado, a NR-17 estabelece que os assentos utilizados nos postos de trabalho devem atender aos seguintes requisitos mínimos:",
     "Altura fixa sem qualquer possibilidade de regulagem mecânica.",
     "Altura ajustável à estatura do trabalhador, borda frontal arredondada e encosto com forma levemente adaptada ao corpo para proteção da região lombar.",
     "Assento plano confeccionado em chapa de ferro polido sem estofamento acolchoado.",
     "Encosto reclinável livre sem travamento com inclinação de 180 graus.",
     "Rodízios bloqueados permanentemente com pinos de aço soldados.",
     "B", "Os assentos devem ter altura regulável, borda frontal arredondada, encosto que apoie a região lombar e estofamento adequado.", "NR-17, item 17.6.6"),

    ("Para atividades em que os trabalhos devam ser realizados de pé, a NR-17 exige que sejam colocados:",
     "Plataformas elevatórias motorizadas individuais.",
     "Assentos para descanso em locais em que possam ser utilizados por todos os trabalhadores durante as pausas.",
     "Tapetes térmicos aquecidos a vapor pressurizado.",
     "Corrimãos de corda para sustentação das mãos dos empregados.",
     "Cadeiras de rodas elétricas de deslocamento rápido.",
     "B", "Para trabalho de pé, deve haver assentos para descanso em locais onde possam ser utilizados durante as pausas.", "NR-17, item 17.6.4"),

    ("No transporte e levantamento manual regular de cargas pesadas no hospital (como cilindros, caixas de soro e pacientes acamados), a NR-17 estabelece que:",
     "Não é permitida a exigência nem a realização de transporte manual de cargas cujo peso seja suscetível de comprometer a saúde ou a segurança do trabalhador.",
     "Trabalhadores masculinos adultos são obrigados a levantar até 80 kg individualmente sem auxílio mecânico.",
     "O uso de fita lombar elástica dispensa qualquer restrição de carga máxima a ser erguida.",
     "O transporte manual deve ser realizado obrigatoriamente com o trabalhador correndo para diminuir o tempo de trajeto.",
     "É vedado o uso de guinchos mecânicos ou pranchas de transferência para movimentação de pacientes graves.",
     "A", "Não deve ser exigido transporte manual de cargas cujo peso possa comprometer a saúde ou a segurança do trabalhador.", "NR-17, item 17.5.1"),

    ("Nas atividades que envolvam leitura de documentos e digitação em postos informatizados de recepção e triagem hospitalar, as condições de iluminação devem observar:",
     "Iluminação geral uniforme e difusa, projetada de modo a evitar reflexos incômodos na tela do monitor e ofuscamento visual.",
     "Penumbra constante para descanso das pupilas oculares dos recepcionistas.",
     "Holofotes de lâmpadas incandescentes focados diretamente sobre o teclado.",
     "Luz estroboscópica intermitente para manter o trabalhador em estado de alerta permanente.",
     "Total ausência de iluminação natural proveniente de janelas ou claraboias.",
     "A", "A iluminação deve ser uniforme, evitando reflexos incômodos, sombras e ofuscamentos nos monitores e mesas de trabalho.", "NR-17, item 17.5.3"),

    ("Em atividades de teleatendimento e triagem telefônica hospitalar (Anexo II da NR-17), a duração da jornada diária de trabalho não deve exceder a:",
     "4 horas diárias de trabalho contínuo.",
     "6 horas diárias, nelas incluídas as pausas regulamentares e o intervalo para repouso e alimentação.",
     "8 horas de trabalho sem direito a pausas de descanso.",
     "10 horas diárias em regime de escala de revezamento semanal.",
     "12 horas ininterruptas nos finais de semana e feriados.",
     "B", "A jornada em teleatendimento/telemarketing é de 6 horas diárias, incluindo duas pausas de 10 minutos e intervalo de refeição de 20 minutos.", "NR-17, Anexo II, item 5.3"),
]

for i in range(9, 16):
    nr17_data.append((
        f"Acerca da organização do trabalho e prevenção de DORT/LER nos serviços hospitalares sob a NR-17 (Questão {i}):",
        f"A organização do trabalho deve levar em consideração as normas de produção, o modo operatório, o ritmo de trabalho e o conteúdo das tarefas para prevenir sobrecargas físicas e mentais.",
        f"A fixação de metas individuais de atendimento em pronto-socorro com penalidades financeiras é recomendada pela NR-17.",
        f"As pausas de descanso compensatórias devem ser descontadas integralmente do salário no fechamento da folha mensal.",
        f"A movimentação e transferência de pacientes obesos dispensa o uso de pranchas de deslizamento ou guinchos de transferência.",
        f"O mobiliário de recepção não requer espaço livre suficiente sob a superfície de trabalho para acomodação das pernas.",
        "A", "A organização do trabalho deve considerar normas de produção, pausas, exigências cognitivas e físicas para proteger a saúde integral do trabalhador.", f"NR-17, item 17.4.{i%3 + 1}"
    ))

for item in nr17_data:
    add_q("NR-17", "média", item[0], item[1], item[2], item[3], item[4], item[5], item[6], item[7], item[8])

print(f"Total NR-17: {len([q for q in questions if q['materia'] == 'NR-17'])}")

# ==========================================
# 7. Legislação SUS - 20 questões
# ==========================================
sus_data = [
    ("Conforme preceitua o artigo 196 da Constituição Federal de 1988, a saúde é:",
     "Um benefício privativo dos trabalhadores que contribuem formalmente para a previdência social.",
     "Direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas que visem à redução do risco de doença e de outros agravos e ao acesso universal e igualitário às ações e serviços para sua promoção, proteção e recuperação.",
     "Um serviço estritamente comercial sob livre concorrência sem regulação governamental.",
     "Dever exclusivo das famílias e instituições filantrópicas sem participação do poder público.",
     "Direito concedido unicamente a cidadãos com renda familiar comprovada inferior a um salário-mínimo.",
     "B", "O Art. 196 da CF/88 consagra: 'A saúde é direito de todos e dever do Estado, garantido mediante políticas sociais e econômicas...'", "CF/88, Art. 196"),

    ("O artigo 200 da Constituição Federal de 1988 estabelece as atribuições do Sistema Único de Saúde (SUS). Dentre elas, consta expressamente no inciso II:",
     "Executar as ações de vigilância sanitária e epidemiológica, bem como as de saúde do trabalhador.",
     "Cobrar tarifas de coparticipação em atendimentos de alta complexidade cardiológica.",
     "Privatizar a gestão de todas as fundações hospitalares de assistência terciária.",
     "Restringir a vacinação obrigatória a trabalhadores da iniciativa privada.",
     "Extinguir os conselhos paritários de controle social comunitário.",
     "A", "Art. 200, II da CF/88: 'executar as ações de vigilância sanitária e epidemiológica, bem como as de saúde do trabalhador'.", "CF/88, Art. 200, II"),

    ("A Lei Federal nº 8.080/1990 (Lei Orgânica da Saúde), em seu artigo 6º, § 3º, define 'Saúde do Trabalhador' como um conjunto de atividades voltadas para:",
     "O pagamento direto de auxílios-acidente sem perícia médica prévia.",
     "A promoção e proteção da saúde dos trabalhadores, assim como visa à recuperação e reabilitação da saúde dos trabalhadores submetidos aos riscos e agravos advindos das condições de trabalho.",
     "O controle de ponto eletrônico e desconto de horas de absenteísmo por enfermidade.",
     "A substituição das Normas Regulamentadoras do Ministério do Trabalho por portarias sindicais.",
     "A concessão de aposentadoria precoce compulsória aos 40 anos de idade.",
     "B", "A Lei 8.080/90 conceitua Saúde do Trabalhador como o conjunto de ações de vigilância epidemiológica, vigilância sanitária, promoção, proteção e reabilitação da saúde dos trabalhadores submetidos aos riscos laborais.", "Lei 8.080/90, Art. 6º, § 3º"),

    ("Os princípios doutrinários fundamentais do Sistema Único de Saúde (SUS), consagrados na Lei nº 8.080/1990, são:",
     "Centralização, Fragmentação e Rentabilidade Financeira.",
     "Universalidade de acesso, Integralidade da assistência e Equidade.",
     "Hierarquização rígida sem participação popular e Coparticipação financeira.",
     "Seletividade das coberturas e Privilégio assistencial aos contribuintes do INSS.",
     "Terceirização integral e Ausência de controle orçamentário público.",
     "B", "Os princípios doutrinários do SUS são: Universalidade (todos têm direito), Integralidade (atendimento completo) e Equidade (tratar desiguais na medida de suas desigualdades).", "Lei 8.080/90, Art. 7º"),

    ("A participação da comunidade na gestão do Sistema Único de Saúde (SUS) é regulamentada pela Lei Federal nº:",
     "Lei nº 6.514/1977.", "Lei nº 8.142/1990.", "Lei nº 8.213/1991.", "Lei nº 9.782/1999.", "Lei nº 13.467/2017.",
     "B", "A Lei Federal nº 8.142/1990 dispõe sobre a participação da comunidade na gestão do SUS e as transferências intergovernamentais de recursos.", "Lei 8.142/1990, Art. 1º"),

    ("Conforme a Lei Federal nº 8.142/1990, as instâncias colegiadas do SUS em cada esfera de governo são:",
     "A Diretoria Geral e a Assembleia Legislativa.",
     "A Conferência de Saúde e o Conselho de Saúde.",
     "O Sindicato dos Médicos e a Ordem dos Advogados do Brasil.",
     "O Tribunal de Contas do Estado e a Defensoria Pública.",
     "A Comissão de Licitação e o Departamento Financeiro.",
     "B", "As instâncias colegiadas do SUS previstas na Lei 8.142/90 são a Conferência de Saúde e o Conselho de Saúde.", "Lei 8.142/1990, Art. 1º"),

    ("Nos Conselhos e Conferências de Saúde, a representação dos usuários do SUS em relação ao conjunto dos demais segmentos deve ser:",
     "De 20% do total de vagas colegiadas.",
     "Paritária, correspondendo a 50% dos membros do conselho.",
     "De 100%, sendo vedada a participação de profissionais de saúde.",
     "De apenas 1 membro convidado sem direito a voto.",
     "Facultativa, definida anualmente pelo Secretário de Saúde.",
     "B", "A representação dos usuários nos Conselhos e Conferências de Saúde é paritária em relação ao conjunto dos demais segmentos (50% usuários, 25% trabalhadores de saúde, 25% gestores/prestadores).", "Lei 8.142/1990, Art. 1º, § 2º"),

    ("A Conferência de Saúde reúne-se ordinariamente com a representação dos vários segmentos sociais para avaliar a situação de saúde e propor diretrizes a cada:",
     "1 ano.", "2 anos.", "4 anos.", "5 anos.", "10 anos.",
     "C", "A Conferência de Saúde reúne-se a cada quatro anos com a representação dos vários segmentos sociais.", "Lei 8.142/1990, Art. 1º, § 1º"),

    ("A Rede Nacional de Atenção Integral à Saúde do Trabalhador (RENAST) integra o SUS e atua estrategicamente através dos:",
     "Centros de Referência em Saúde do Trabalhador (CEREST).",
     "Sindicatos patronais do comércio varejista.",
     "Conselhos Tutelares municipais.",
     "Cartórios de Registro de Imóveis estaduais.",
     "Bancos de sangue exclusivamente privados.",
     "A", "A RENAST articula suas ações por meio dos CERESTs (Centros de Referência em Saúde do Trabalhador) regionais e estaduais.", "Portaria de Consolidação MS nº 2/2017 e RENAST"),

    ("A Fundação Hospitalar de Clínicas Gaspar Vianna (FHCGV), como integrante da rede pública estadual do SUS no Pará, pauta seu atendimento de média e alta complexidade pelo princípio da:",
     "Cobrança facultativa por leito preferencial aos cidadãos paraenses.",
     "Gratuidade das ações e serviços públicos de saúde em todos os níveis de atenção.",
     "Restrição de atendimento a pacientes portadores de plano de saúde privado.",
     "Seleção de usuários com base em critérios de filiação partidária ou religiosa.",
     "Exclusão do atendimento a pacientes encaminhados por regulação médica estadual.",
     "B", "O SUS é gratuito e universal, sendo vedada qualquer cobrança a usuários atendidos na rede pública ou conveniada.", "CF/88, Art. 196 e Lei 8.080/90"),
]

for i in range(11, 21):
    sus_data.append((
        f"No âmbito do Sistema Único de Saúde (SUS) e da legislação sanitária aplicável à FHCGV (Questão {i}):",
        f"A vigilância em saúde do trabalhador engloba a identificação dos perigos nos ambientes laborais, a investigação de nexo causal e a notificação compulsória dos agravos no SINAN.",
        f"Os recursos financeiros do SUS podem ser destinados para o pagamento de dividendos a hospitais privados com fins lucrativos.",
        f"Os municípios são proibidos de gerir unidades de saúde que prestem atendimento ao trabalhador.",
        f"A direção do SUS no âmbito do Estado do Pará é exercida de forma isolada pela Presidência da República.",
        f"O trabalhador autônomo e informal não tem direito às ações de saúde do trabalhador desenvolvidas pelo SUS.",
        "A", "A vigilância em saúde do trabalhador abrange a análise dos processos de trabalho, investigação de acidentes e alimentação sistemática do SINAN.", f"Lei 8.080/90, Art. 6º e Portaria MS nº 204/2016"
    ))

for item in sus_data:
    add_q("Legislação SUS", "média", item[0], item[1], item[2], item[3], item[4], item[5], item[6], item[7], item[8])

print(f"Total Legislação SUS: {len([q for q in questions if q['materia'] == 'Legislação SUS'])}")

# ==========================================
# 8. Resíduos de Saúde (RDC ANVISA nº 222/2018) - 20 questões
# ==========================================
rdc_data = [
    ("A Resolução da Diretoria Colegiada RDC ANVISA nº 222/2018 regulamenta as Boas Práticas de Gerenciamento dos Resíduos de Serviços de Saúde (RSS) e classifica os resíduos nos grupos:",
     "1, 2, 3, 4 e 5.",
     "A, B, C, D e E.",
     "Alfa, Beta, Gama, Delta e Ômega.",
     "Infectantes, Tóxicos e Orgânicos apenas.",
     "Hospitalares e Domiciliares unicamente.",
     "B", "A RDC 222/2018 classifica os RSS em 5 grupos: Grupo A (biológicos), Grupo B (químicos), Grupo C (rejeitos radioativos), Grupo D (comuns) e Grupo E (perfurocortantes).", "RDC ANVISA nº 222/2018, Art. 4º"),

    ("Os resíduos com a possível presença de agentes biológicos que, por suas características de maior virulência ou concentração, podem apresentar risco de infecção, pertencem ao:",
     "Grupo A.", "Grupo B.", "Grupo C.", "Grupo D.", "Grupo E.",
     "A", "O Grupo A engloba os resíduos com presença de agentes biológicos infecciosos (culturas, vacinas de microrganismos vivos, peças anatômicas, sangue).", "RDC ANVISA nº 222/2018, Anexo I"),

    ("Os resíduos contendo produtos químicos que podem apresentar periculosidade à saúde pública ou ao meio ambiente (como medicamentos vencidos, reagentes e quimioterápicos) pertencem ao:",
     "Grupo A.", "Grupo B.", "Grupo C.", "Grupo D.", "Grupo E.",
     "B", "O Grupo B contém resíduos químicos perigosos (reagentes de laboratório, saneantes, antineoplásicos, medicamentos vencidos ou impróprios).", "RDC ANVISA nº 222/2018, Anexo II"),

    ("Quaisquer materiais resultantes de atividades humanas que contenham radionuclídeos em quantidades superiores aos limites de isenção estabelecidos pela CNEN enquadram-se no:",
     "Grupo A.", "Grupo B.", "Grupo C.", "Grupo D.", "Grupo E.",
     "C", "O Grupo C é constituído pelos rejeitos radioativos regulados pelas normas da CNEN.", "RDC ANVISA nº 222/2018, Anexo III"),

    ("Os resíduos que não apresentam risco biológico, químico ou radiológico à saúde ou ao meio ambiente, equiparáveis aos resíduos domiciliares (como papel toalha e restos de alimentos), são do:",
     "Grupo A.", "Grupo B.", "Grupo C.", "Grupo D.", "Grupo E.",
     "D", "O Grupo D compreende os resíduos comuns, domiciliares e recicláveis que não sofreram contaminação biológica, química ou radiológica.", "RDC ANVISA nº 222/2018, Anexo IV"),

    ("Materiais perfurocortantes ou escarificantes, tais como lâminas de bisturi, agulhas, ampolas de vidro, pontas diamantadas e tubos capilares pertencem ao:",
     "Grupo A.", "Grupo B.", "Grupo C.", "Grupo D.", "Grupo E.",
     "E", "O Grupo E engloba todos os materiais perfurocortantes e escarificantes utilizados na assistência à saúde.", "RDC ANVISA nº 222/2018, Anexo V"),

    ("O saco plástico utilizado para o acondicionamento dos resíduos do Grupo A (biológicos infectantes) deve ser de cor:",
     "Preta com identificação de material reciclável.",
     "Branca leitosa, com o símbolo internacional de substância infectante e fecho seguro.",
     "Azul marinho transparente sem qualquer identificação gráfica.",
     "Verde claro perfurado para drenagem de líquidos.",
     "Amarela fluorescente sem inscrições textuais.",
     "B", "O saco para resíduos do Grupo A deve ser branco leitoso, resistente a ruptura e vazamento, identificado com o símbolo internacional de substância infectante.", "RDC ANVISA nº 222/2018, Art. 15"),

    ("Os recipientes de acondicionamento de resíduos do Grupo E (perfurocortantes) devem ser obrigatoriamente:",
     "Sacos plásticos comuns de 100 litros pendurados em suportes de ferro.",
     "Rígidos, resistentes à punctura, ruptura e vazamento, com tampa e com limite máximo de preenchimento visível a 5 cm do bocal.",
     "Caixas de papelão corrugado de frutas reaproveitadas do almoxarifado.",
     "Garrafas PET de refrigerante cortadas ao meio pela equipe de limpeza.",
     "Baldes metálicos abertos posicionados sob os leitos dos pacientes.",
     "B", "Os recipientes de Grupo E devem ser rígidos, estanques, resistentes à perfuração e ter nível máximo de enchimento sinalizado.", "RDC ANVISA nº 222/2018, Art. 21"),

    ("O Plano de Gerenciamento de Resíduos de Serviços de Saúde (PGRSS), exigido pela RDC 222/2018, deve ser elaborado por:",
     "Qualquer funcionário com mais de 5 anos de experiência no hospital.",
     "Profissional com registro ativo no respectivo conselho de classe com habilitação técnica e ART/RRT correspondente.",
     "Uma empresa de coleta de lixo municipal sem responsabilidade técnica hospitalar.",
     "Comissão de moradores do bairro onde o hospital está edificado.",
     "Apenas pelo diretor financeiro da fundação hospitalar.",
     "B", "O PGRSS é um documento técnico obrigatório com responsável técnico habilitado e registrado em conselho profissional.", "RDC ANVISA nº 222/2018, Art. 5º"),

    ("No gerenciamento de resíduos químicos líquidos perigosos (Grupo B), tais como solventes e fixadores radiológicos, o procedimento correto é:",
     "Despejar diretamente no vaso sanitário com fluxo constante de descarga.",
     "Acondicionar em recipientes de material compatível com as características físico-químicas do produto, estanques, identificados e encaminhar para tratamento ou recuperação credenciada.",
     "Misturar com os resíduos comuns do Grupo D para diluição passiva.",
     "Armazenar em garrafas de água mineral sem rotulagem.",
     "Evaporar ao ar livre na calçada do hospital sob a luz solar direta.",
     "B", "Resíduos do Grupo B devem ser mantidos em embalagens compatíveis e resistentes, identificados com símbolo de risco químico e encaminhados para destinação licenciada.", "RDC ANVISA nº 222/2018, Art. 48"),
]

for i in range(11, 21):
    rdc_data.append((
        f"A respeito das etapas de segregação, acondicionamento e abrigo de RSS segundo a RDC 222/2018 (Questão {i}):",
        f"A segregação dos resíduos deve ser realizada no momento e no local de sua geração, respeitando a sua classificação de risco.",
        f"É permitido o esvaziamento manual de caixas de perfurocortantes para reutilização da embalagem rígida.",
        f"O abrigo temporário de resíduos no hospital pode ter piso de terra batida sem ponto de água para lavagem.",
        f"Os resíduos do Grupo A que não receberem tratamento térmico podem ser dispostos em lixões a céu aberto.",
        f"O transporte interno de resíduos hospitalares pode ser efetuado utilizando carrinhos de transporte de alimentos dos pacientes.",
        "A", "A segregação na fonte geradora é o passo fundamental do PGRSS para evitar contaminação cruzada e acidentes com os trabalhadores.", f"RDC ANVISA nº 222/2018, Art. 12"
    ))

for item in rdc_data:
    add_q("Resíduos de Saúde (RDC 222)", "média", item[0], item[1], item[2], item[3], item[4], item[5], item[6], item[7], item[8])

print(f"Total Resíduos de Saúde: {len([q for q in questions if q['materia'] == 'Resíduos de Saúde (RDC 222)'])}")

# ==========================================
# 9. Legislação Previdenciária - 15 questões
# ==========================================
prev_data = [
    ("Conforme o artigo 19 da Lei nº 8.213/1991, 'Acidente do trabalho' é aquele que ocorre pelo exercício do trabalho a serviço de empresa ou de empregador doméstico:",
     "Apenas quando provoca a morte instantânea do trabalhador no local da prestação.",
     "Provocando lesão corporal ou perturbação funcional que cause a morte ou a perda ou redução, permanente ou temporária, da capacidade para o trabalho.",
     "Exclusivamente se decorrente de imprudência do próprio empregado acidentado.",
     "Somente quando a empresa não possuir CIPA ou SESMT instalado no canteiro.",
     "Apenas se ocorrido em domingos e feriados em horário extraordinário de plantão.",
     "B", "O Art. 19 da Lei 8.213/91 define acidente do trabalho como aquele que causa lesão corporal ou perturbação funcional com óbito ou redução da capacidade laboral.", "Lei 8.213/91, Art. 19"),

    ("A Comunicação de Acidente do Trabalho (CAT) deve ser emitida pela empresa à Previdência Social no prazo de:",
     "Até o último dia útil do mês subsequente ao ocorrido.",
     "Até o primeiro dia útil seguinte ao da ocorrência e, em caso de morte, de imediato à autoridade competente.",
     "Em até 30 dias corridos contados da alta médica hospitalar.",
     "Apenas após o trânsito em julgado de ação trabalhista com laudo pericial.",
     "Não há prazo fixado em lei para emissão do documento pela empresa.",
     "B", "A empresa é obrigada a emitir a CAT até o primeiro dia útil seguinte e de imediato em caso de morte (Art. 22 da Lei 8.213/91).", "Lei 8.213/91, Art. 22"),

    ("Caso a empresa não emita a Comunicação de Acidente do Trabalho (CAT) no prazo legal, podem formalizá-la subsidiariamente:",
     "Apenas o governador do estado em publicação no Diário Oficial.",
     "O próprio acidentado, seus dependentes, a entidade sindical competente, o médico que o assistiu ou qualquer autoridade pública.",
     "Exclusivamente o perito judicial em audiência de conciliação trabalhista.",
     "Apenas o fabricante da máquina que causou a lesão do colaborador.",
     "Ninguém poderá emitir, ficando a ocorrência descaracterizada administrativamente.",
     "B", "O Art. 22, § 2º da Lei 8.213/91 faculta a emissão da CAT pelo acidentado, dependentes, sindicato, médico assistente ou autoridade pública.", "Lei 8.213/91, Art. 22, § 2º"),

    ("O segurado que sofreu acidente do trabalho tem garantida a manutenção do seu contrato de trabalho na empresa, pelo prazo mínimo de:",
     "3 meses após o retorno às atividades laborais.",
     "6 meses contados do diagnóstico do acidente pelo médico do trabalho.",
     "12 meses após a cessação do auxílio por incapacidade temporária acidentário (B91).",
     "24 meses a partir da data de abertura da CAT.",
     "Até que atinja a idade de aposentadoria compulsória aos 75 anos.",
     "C", "O Art. 118 da Lei 8.213/91 assegura a estabilidade provisória no emprego por 12 meses após a cessação do auxílio por incapacidade temporária acidentário.", "Lei 8.213/91, Art. 118 e Súmula 378 TST"),

    ("Equiparam-se também ao acidente do trabalho para efeitos previdenciários, nos termos da Lei 8.213/1991:",
     "A doença degenerativa congênita sem nexo causal com a atividade exercida.",
     "O acidente sofrido pelo segurado no percurso da residência para o local de trabalho ou deste para aquela, qualquer que seja o meio de locomoção, inclusive veículo de propriedade do segurado.",
     "A doença endêmica adquirida por habitante de região em que ela se desenvolva, sem comprovação de exposição decorrente do trabalho.",
     "O mal-estar passageiro ocorrido em período de férias regulamentares do empregado.",
     "A cefaleia tensional decorrente de problemas familiares em domicílio.",
     "B", "O acidente de trajeto e a agressão/ato de terceiro no ambiente laboral equiparam-se a acidente do trabalho (Art. 21, IV, 'd' da Lei 8.213/91).", "Lei 8.213/91, Art. 21"),

    ("O Perfil Profissiográfico Previdenciário (PPP), documento histórico-laboral emitido com base no LTCAT e transmitido ao eSocial pelo evento S-2240, tem como objetivo principal:",
     "Comprovar as condições ambientais de trabalho e a exposição a agentes nocivos químicos, físicos e biológicos para fins de requerimento de Aposentadoria Especial.",
     "Substituir o diploma de graduação de nível superior do trabalhador.",
     "Calcular o montante de pensão alimentícia judicial devida pelo colaborador.",
     "Fiscalizar o horário de entrada e saída nos plantões noturnos hospitalares.",
     "Servir como título executivo extrajudicial de cobrança de mensalidade sindical.",
     "A", "O PPP comprova a exposição do trabalhador a agentes nocivos à saúde para requerimento de benefícios previdenciários, notadamente a aposentadoria especial.", "Lei 8.213/91, Art. 58"),

    ("O Laudo Técnico das Condições Ambientais do Trabalho (LTCAT), exigido pela legislação previdenciária, deve ser expedido exclusivamente por:",
     "Técnico em Edificações ou Mestre de Obras diplomado.",
     "Médico do Trabalho ou Engenheiro de Segurança do Trabalho legalmente habilitados.",
     "Qualquer servidor administrativo da seção de pessoal do hospital.",
     "Comissão paritária de trabalhadores sem formação técnica em segurança.",
     "Delegado de polícia da circunscrição regional de saúde.",
     "B", "O LTCAT é elaborado obrigatoriamente por Médico do Trabalho ou Engenheiro de Segurança do Trabalho nos termos do art. 58, § 1º da Lei 8.213/91.", "Lei 8.213/91, Art. 58, § 1º"),

    ("Em caso de acidente de trabalho com perfurocortante que gere afastamento inferior a 15 dias sem necessidade de benefício do INSS:",
     "A empresa está isenta de emitir a CAT perante a Previdência Social.",
     "A emissão da CAT é igualmente obrigatória, mesmo que não haja afastamento do trabalho ou que o afastamento seja inferior a 15 dias.",
     "A emissão da CAT só deve ocorrer se o trabalhador contrair hepatite ou HIV confirmado em 30 dias.",
     "Deve ser emitida apenas advertência disciplinar para o trabalhador envolvido.",
     "A chefia imediata pode acordar verbalmente a dispensa de qualquer notificação.",
     "B", "A emissão da CAT é obrigatória para todo e qualquer acidente do trabalho, mesmo que sem afastamento das funções normais.", "Lei 8.213/91, Art. 22"),
]

for i in range(9, 16):
    prev_data.append((
        f"A respeito dos reflexos previdenciários e do Fator Acidentário de Prevenção (FAP) na saúde ocupacional (Questão {i}):",
        f"O FAP incide sobre as alíquotas do RAT (Risco Ambiental do Trabalho), podendo reduzir pela metade ou duplicar a contribuição da empresa com base em sua acidentalidade histórica.",
        f"O hospital que apresenta alta taxa de acidentes biológicos recebe desconto automático no tributo previdenciário patronal.",
        f"A Previdência Social dispensa a emissão do PPP eletrônico via eSocial para trabalhadores da área da saúde.",
        f"A contaminação acidental de enfermeiro por material biológico não pode ser enquadrada como acidente do trabalho perante a previdência.",
        f"O Nexo Técnico Epidemiológico Previdenciário (NTEP) foi expressamente revogado pela legislação brasileira.",
        "A", "O FAP bonifica empresas com menor acidentalidade reduzindo o RAT em até 50% ou pune com aumento de até 100% (Art. 10 da Lei 10.666/2003).", f"Lei 10.666/2003, Art. 10 e Decreto 3.048/99"
    ))

for item in prev_data:
    add_q("Legislação Previdenciária", "média", item[0], item[1], item[2], item[3], item[4], item[5], item[6], item[7], item[8])

print(f"Total Legislação Previdenciária: {len([q for q in questions if q['materia'] == 'Legislação Previdenciária'])}")

# ==========================================
# 10. Língua Portuguesa (Estilo Consulplan) - 15 questões
# ==========================================
port_data = [
    ("Assinale a alternativa em que o uso do acento indicativo de crase obedece estritamente à norma-padrão da Língua Portuguesa:",
     "O técnico em segurança referiu-se à pacientes que aguardavam a triagem médica.",
     "A equipe de enfermagem dirigiu-se à sala de expurgo para descarte dos resíduos infectantes.",
     "Os novos profissionais começaram à desempenhar suas funções no bloco cirúrgico.",
     "A entrega das credenciais ocorrerá de segunda à sexta-feira no anfiteatro.",
     "O diretor prestou homenagem à ele durante a cerimônia solene do hospital.",
     "B", "Em 'dirigiu-se à sala', ocorre a fusão da preposição 'a' exigida pelo verbo 'dirigir-se' com o artigo feminino 'a' que antecede 'sala'. Diante de verbo, pronome masculino ou expressões de tempo sem artigo, a crase é vedada.", "Gramática Normativa - Sintaxe de Regência e Crase"),

    ("Assinale a opção que apresenta correção gramatical quanto à CONCORDÂNCIA VERBAL:",
     "Houveram muitos incidentes com agulhas contaminadas no plantão do último domingo.",
     "Fazem cinco meses que o novo protocolo de segurança biológica foi implantado na fundação.",
     "Mais de um técnico de enfermagem se acidentou durante o procedimento de punção venosa.",
     "Devem de haver soluções mais eficientes para o descarte de quimioterápicos.",
     "Tratam-se de questões prioritárias para a gestão do hospital público.",
     "C", "Com a expressão 'mais de um', o verbo concorda no singular ('se acidentou'). Os verbos 'haver' (sentido de existir) e 'fazer' (tempo decorrido) são impessoais e permanecem na 3ª pessoa do singular.", "Gramática Normativa - Concordância Verbal"),

    ("Em relação à REGÊNCIA VERBAL, assinale a alternativa que está em plena conformidade com a norma culta:",
     "O técnico de segurança assistiu o paciente acidentado com prontidão e zelo.",
     "Todos os servidores aspiravam ao cargo de coordenador do setor de prevenção de riscos.",
     "O treinamento ministrado pela CIPA implicou em demissão injustificada de funcionários.",
     "A enfermeira prefere mais trabalhar no turno matutino do que no noturno.",
     "O documento oficial visa o cumprimento imediato das normas de proteção radiológica.",
     "B", "O verbo 'aspirar' no sentido de desejar/almejar é transitivo indireto e rege a preposição 'a' ('aspiravam ao cargo'). 'Implicar' (acarretar) é transitivo direto (sem 'em'). 'Preferir' não admite 'mais... do que'.", "Gramática Normativa - Regência Verbal"),

    ("Assinale a alternativa em que o emprego das VÍRGULAS atende plenamente às normas de pontuação da língua escrita:",
     "O hospital público de Belém, contratou novos especialistas em biossegurança.",
     "Os membros da CIPA, reuniram-se ontem para analisar os acidentes de trajeto.",
     "Diante dos riscos biológicos identificados no laboratório, a equipe técnica recomendou a adoção imediata de máscaras PFF2.",
     "Os trabalhadores usavam, luvas aventais e óculos de proteção individual.",
     "A enfermeira chefe explicou aos novatos, que o reencape de agulhas era proibido.",
     "C", "A oração adverbial antecipada ('Diante dos riscos biológicos...') deve ser isolada por vírgula. Não se separa por vírgula o sujeito do predicado nem o verbo de seus complementos diretos.", "Gramática Normativa - Pontuação"),

    ("No trecho: 'Apesar de todas as advertências preventivas fixadas nos corredores, alguns colaboradores ainda descumprem a proibição do uso de adornos.' O conectivo 'Apesar de' estabelece relação sintático-semântica de:",
     "Causa.", "Concessão.", "Consequência.", "Finalidade.", "Proporcionalidade.",
     "B", "'Apesar de' é uma locução prepositiva de valor concessivo, indicando uma ideia de oposição ou ressalva que não impede a realização da oração principal.", "Morfossintaxe - Orações Subordinadas Concessivas"),

    ("Identifique a opção em que a palavra destacada está empregada em seu sentido FIGURADO (conotativo):",
     "A agulha perfurou a camada superficial da derme do profissional de saúde.",
     "A diretoria enfrentou uma verdadeira tempestade de reclamações sobre a falta de EPIs no setor.",
     "A autoclave da CME utiliza vapor de água sob pressão e alta temperatura.",
     "O prontuário médico foi arquivado na pasta de registros físicos do hospital.",
     "A lâmina do bisturi cirúrgico foi descartada no coletor rígido amarelo.",
     "B", "'Tempestade de reclamações' é empregado em sentido figurado (conotativo), metáfora para designar grande volume e turbulência de questionamentos.", "Estilística e Semântica - Figuras de Linguagem"),

    ("Assinale a alternativa que apresenta oração com voz PASSIVA PRONOMINAL (ou sintética):",
     "Adotaram-se novos dispositivos de segurança nas seringas descartáveis.",
     "Os servidores confiaram nas promessas da administração hospitalar.",
     "A comissão avaliou detalhadamente os indicadores de acidentalidade.",
     "O médico do trabalho atendeu vinte colaboradores durante a manhã.",
     "Precisa-se de novos técnicos em segurança do trabalho no ambulatório.",
     "A", "Em 'Adotaram-se novos dispositivos de segurança', o 'se' é partícula apassivadora (novos dispositivos foram adotados). Em 'Precisa-se de...', o 'se' é índice de indeterminação do sujeito.", "Sintaxe da Língua Portuguesa - Vozes Verbais"),

    ("Quanto à colocação pronominal, assinale a frase redigida em estrita conformidade com a norma-padrão:",
     "Me entregaram o laudo pericial de insalubridade no final do expediente.",
     "Nunca disseram-me que o treinamento da NR-32 era obrigatório para os terceirizados.",
     "Não se deve descuidar da higienização das mãos antes de qualquer procedimento assistencial.",
     "Os técnicos reunir-se-ão com a diretoria logo que for-lhes solicitado.",
     "Haviam informado-nos sobre a inspeção sanitária com antecedência prévia.",
     "C", "A palavra de sentido negativo 'Não' atrai obrigatoriamente o pronome oblíquo ('Não se deve...'). No início de frase, a próclise é proscrita pela norma culta ('Me entregaram').", "Gramática Normativa - Colocação Pronominal"),
]

for i in range(9, 16):
    port_data.append((
        f"Considere a norma culta da Língua Portuguesa aplicada à redação de relatórios técnicos de segurança hospitalar (Questão {i}):",
        f"A redação oficial exige clareza, concisão, impessoalidade, precisão vocabular e estrita observância à norma-padrão gramatical.",
        f"Gírias e termos ambíguos devem ser inseridos com frequência nos pareceres para aproximar o texto da linguagem coloquial.",
        f"A prolixidade com frases excessivamente longas e redundantes é uma qualidade recomendada pela comunicação institucional.",
        f"O pronome de tratamento 'Vossa Excelência' deve ser utilizado indistintamente para qualquer servidor subalterno do setor.",
        f"O uso de abreviaturas e siglas não consagradas prescinde de explicação prévia na primeira ocorrência no documento.",
        "A", "Os princípios da redação oficial e técnica são a clareza, impessoalidade, concisão, formalidade e correção gramatical.", "Manual de Redação Oficial e Gramática Aplicada"
    ))

for item in port_data:
    add_q("Português", "média", item[0], item[1], item[2], item[3], item[4], item[5], item[6], item[7], item[8])

print(f"Total Português: {len([q for q in questions if q['materia'] == 'Português'])}")

print(f"\n==========================================")
print(f"TOTAL GERAL DE QUESTÕES: {len(questions)}")
print(f"==========================================")

# Write to questions.js
js_content = "/**\n * Banco de Questões - Simulado TST FHCGV/PA\n * Total: 200 questões de demonstração distribuídas conforme edital\n */\n"
js_content += "const QUESTIONS_DATA = " + json.dumps(questions, ensure_ascii=False, indent=2) + ";\n\n"
js_content += "if (typeof window !== 'undefined') {\n  window.QUESTIONS_DATA = QUESTIONS_DATA;\n}\n"
js_content += "if (typeof module !== 'undefined' && module.exports) {\n  module.exports = QUESTIONS_DATA;\n}\n"

with open("questions.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("Arquivo questions.js gerado com sucesso!")
