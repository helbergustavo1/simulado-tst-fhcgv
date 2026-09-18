# -*- coding: utf-8 -*-
"""
Gerador de Questões de Língua Portuguesa (20 questões)
- Crase: 5 questões
- Concordância (verbal e nominal): 5 questões
- Interpretação de texto e coesão: 5 questões
- Conectivos e conjunções: 5 questões
Banca de referência: Instituto Consulplan
"""

def get_portugues_questions():
    items = [
        # =========================================================
        # 1. CRASE (5 questões)
        # =========================================================
        # 1
        ("Assinale a alternativa em que o uso do acento grave indicativo de crase está CORRETO de acordo com a norma-padrão da língua portuguesa:",
         "O técnico de segurança dirigiu-se à enfermaria para fiscalizar o uso dos respiradores.",
         "O médico começou à redigir o laudo ocupacional do trabalhador acidentado.",
         "A equipe de limpeza prestou socorro à um paciente que escorregou no piso molhado.",
         "As luvas cirúrgicas foram entregues à ela durante o procedimento cirúrgico.",
         "Os servidores hospitalares compareceram à reuniões semanais da CIPA.",
         "A",
         "Ocorre crase pela fusão da preposição 'a' (exigida pela regência de 'dirigiu-se a') com o artigo feminino 'a' que antecede 'enfermaria' ('dirigiu-se à enfermaria'). Antes de verbo (redigir), de palavra masculina (um), pronome pessoal (ela) e palavra plural com 'a' singular não ocorre crase.",
         "Gramática Normativa - Crase",
         "fácil"),
        # 2
        ("O acento grave indicativo de crase é de uso FACULTATIVO na seguinte frase:",
         "O enfermeiro entregou a ficha de notificação à sua supervisora de plantão.",
         "O treinamento de segurança ocorrerá pontualmente às 14 horas no auditório.",
         "A direção do hospital está disposta à negociar novos adicionais de insalubridade.",
         "Os técnicos caminhavam passo à passo inspecionando cada leito da enfermaria.",
         "O servidor referiu-se à todas as cláusulas do regulamento interno do hospital.",
         "A",
         "O uso da crase é facultativo diante de pronomes possessivos femininos no singular (à sua / a sua), pois o uso do artigo feminino antes do possessivo é opcional.",
         "Gramática Normativa - Crase Facultativa",
         "fácil"),
        # 3
        ("Em qual das sentenças abaixo o sinal indicativo de crase foi empregado de maneira INCORRETA?",
         "A técnica de enfermagem dedicava-se à pesquisas sobre a transmissão de patógenos.",
         "Às vezes, a rotina hospitalar exige rapidez extrema nos atendimentos de urgência.",
         "Os novos funcionários foram apresentados à diretora clínica da fundação.",
         "O plano de prevenção visava atender às exigências das Normas Regulamentadoras.",
         "O relatório técnico foi redigido à mão pelo perito judicial trabalhista.",
         "A",
         "A frase 'dedicava-se à pesquisas' está incorreta: diante de palavra no plural ('pesquisas') precedida da preposição 'a' no singular, não pode haver crase ('a pesquisas' ou 'às pesquisas').",
         "Gramática Normativa - Casos Proibitivos de Crase",
         "fácil"),
        # 4
        ("Considere a frase: 'O técnico de segurança recomendou a vacinação ___ todas as funcionárias e solicitou ___ diretoria que encaminhasse o ofício ___ Secretaria de Saúde'. As lacunas devem ser preenchidas, correta e respectivamente, por:",
         "a – à – à",
         "à – a – à",
         "à – à – a",
         "a – a – a",
         "à – à – à",
         "A",
         "1ª lacuna: 'a todas' (antes do pronome indefinido 'todas' não há artigo, logo apenas preposição 'a'); 2ª lacuna: 'solicitou à diretoria' (solicitar algo 'a' alguém + artigo 'a' = 'à'); 3ª lacuna: 'encaminhasse o ofício à Secretaria' (encaminhar 'a' + 'a' Secretaria = 'à'). Portanto: a – à – à.",
         "Gramática Normativa - Regência e Crase",
         "média"),
        # 5
        ("O emprego da crase é OBRIGATÓRIO na locução adverbial feminina destacada em:",
         "Os profissionais de enfermagem responderam prontamente, saindo **às pressas** para a sala de reanimação.",
         "O médico examinador avaliou os pacientes **cara a cara** sem qualquer barreira protetora.",
         "O técnico de segurança permaneceu de guarda **dia a dia** nas portarias do hospital.",
         "O estagiário caminhava **gota a gota** dosando o reagente químico no tubo de ensaio.",
         "Os servidores trabalhavam **lado a lado** no processamento das bolsas de sangue.",
         "A",
         "Locuções adverbiais femininas (às pressas, à noite, à tarde, às vezes, à vontade) exigem obrigatoriamente o acento grave de crase. Em expressões com palavras repetidas (cara a cara, dia a dia), a crase é proibida.",
         "Gramática Normativa - Crase em Locuções",
         "fácil"),

        # =========================================================
        # 2. CONCORDÂNCIA VERBAL E NOMINAL (5 questões)
        # =========================================================
        # 6
        ("Assinale a alternativa que atende plenamente às regras de CONCORDÂNCIA VERBAL da norma-padrão da língua portuguesa:",
         "Havia muitos riscos biológicos identificados no inventário de riscos da unidade hospitalar.",
         "Haviam muitos riscos biológicos identificados no inventário de riscos da unidade hospitalar.",
         "Fazem cinco anos que a FHCGV implementou o seu novo plano de gerenciamento de resíduos.",
         "Devem haver outras soluções ergonômicas para a transferência de pacientes acamados.",
         "Tratam-se de irregularidades graves constatadas pelos auditores fiscais do trabalho.",
         "A",
         "O verbo HAVER com sentido de existir é impessoal e não tem sujeito, permanecendo obrigatoriamente no singular ('Havia muitos riscos'). O verbo FAZER indicando tempo decorrido também é impessoal ('Faz cinco anos'). Locuções com haver impessoal mantêm o auxiliar no singular ('Deve haver'). Com preposição ('tratar-se de'), o verbo fica no singular ('Trata-se de').",
         "Gramática Normativa - Concordância Verbal",
         "fácil"),
        # 7
        ("Em relação à concordância verbal com a partícula apassivadora 'se', assinale a frase gramaticalmente CORRETA:",
         "Realizaram-se todos os exames médicos periódicos previstos no PCMSO da fundação.",
         "Realizou-se todos os exames médicos periódicos previstos no PCMSO da fundação.",
         "Constatou-se diversas não conformidades ergonômicas no posto de enfermagem da UTI.",
         "Discutiu-se amplamente as novas diretrizes de biossegurança no auditório central.",
         "Aplicou-se as medidas de proteção coletiva recomendadas pela comissão técnica.",
         "A",
         "Na voz passiva sintética com pronome apassivador 'se', o verbo concorda com o sujeito paciente: 'todos os exames periódicos foram realizados' -> 'Realizaram-se todos os exames periódicos'.",
         "Gramática Normativa - Voz Passiva e Concordância",
         "fácil"),
        # 8
        ("Indique a alternativa que apresenta ERRO de concordância nominal de acordo com a norma culta:",
         "É proibido entrada de pessoas não autorizadas na sala de quimioterapia do hospital.",
         "É proibida a entrada de pessoas não autorizadas na sala de quimioterapia do hospital.",
         "Seguem anexas ao relatório as planilhas de medição de ruído e iluminação ambiental.",
         "Os técnicos de segurança estavam bastante preocupados com os índices de acidentes.",
         "A enfermeira afirmou que ela mesmo inspecionou as caixas coletoras de perfurocortantes.",
         "E",
         "O pronome demonstrativo/enfático 'mesmo' concorda em gênero e número com a pessoa a que se refere. Como o sujeito é feminino ('A enfermeira'), a forma correta é: 'ela MESMA inspecionou'.",
         "Gramática Normativa - Concordância Nominal",
         "fácil"),
        # 9
        ("Assinale a alternativa em que a concordância verbal com expressão partitiva foi empregada em conformidade com as regras gramaticais:",
         "A maioria dos servidores hospitalares compareceu ao treinamento de biossegurança.",
         "Mais de um técnico de enfermagem se acidentaram com a mesma agulha perfurocortante.",
         "Cerca de cem profissionais de saúde faltou ao plantão de final de ano na emergência.",
         "Um milhão de reais foram gastos na reforma dos banheiros dos servidores públicos.",
         "Fui eu que apresentou o novo plano de prevenção contra incêndio na assembleia.",
         "A",
         "Com expressões partitivas ('a maioria de', 'a maior parte de') seguidas de substantivo no plural, o verbo pode concordar com o núcleo singular ('compareceu') ou com o modificador plural ('compareceram'). Ambas são corretas.",
         "Gramática Normativa - Expressões Partitivas",
         "média"),
        # 10
        ("Considere a oração: 'Os técnicos e as enfermeiras mantiveram-se ___ durante todo o procedimento de emergência'. A lacuna é preenchida corretamente por:",
         "atentos (ou atentas e atentos)",
         "atento",
         "atenta",
         "atentamente",
         "atentas apenas",
         "A",
         "Quando o adjetivo funciona como predicativo de sujeitos compostos de gêneros diferentes ('Os técnicos e as enfermeiras'), a concordância faz-se preferencialmente no masculino plural ('atentos').",
         "Gramática Normativa - Concordância Nominal de Predicativo",
         "fácil"),

        # =========================================================
        # 3. INTERPRETAÇÃO DE TEXTO E COESÃO TEXTUAL (5 questões)
        # =========================================================
        # 11
        ("Leia o trecho a seguir: 'A prevenção de acidentes em serviços hospitalares não depende apenas da aquisição de equipamentos modernos, mas principalmente do engajamento consciente de cada trabalhador na adesão aos protocolos de biossegurança'. O sentido principal veiculado pelo texto é que:",
         "O elemento humano e comportamental é determinante para a eficácia das medidas preventivas no ambiente de saúde.",
         "A compra de equipamentos modernos de proteção é totalmente inútil em hospitais públicos.",
         "Os trabalhadores de saúde são os únicos culpados pela ocorrência de acidentes de trabalho.",
         "Os protocolos de biossegurança hospitalares são dispensáveis quando há equipamentos caros.",
         "A gestão hospitalar não possui responsabilidade legal sobre os acidentes com perfurocortantes.",
         "A",
         "O texto enfatiza que a infraestrutura física/equipamentos é importante, mas o fator decisivo primordial é a atitude consciente e a adesão ativa dos trabalhadores aos protocolos seguros.",
         "Interpretação e Compreensão de Texto",
         "fácil"),
        # 12
        ("No segmento 'O uso do respirador PFF2 é obrigatório no atendimento a pacientes com suspeita de tuberculose. **Este equipamento** impede a inalação de aerossóis infectantes', o termo destacado exerce a função coesiva de:",
         "Retomar anaforicamente o termo 'respirador PFF2' citado na oração anterior, garantindo a progressão temática sem repetição vocabular desnecessária.",
         "Introduzir uma ideia de oposição radical em relação à oração antecedente.",
         "Anunciar uma informação que ainda será apresentada no parágrafo seguinte.",
         "Expressar uma circunstância temporal de anterioridade imediata.",
         "Indicar que o equipamento mencionado não possui eficácia comprovada.",
         "A",
         "O pronome demonstrativo 'Este equipamento' atua como mecanismo de coesão referencial anafórica, retomando o antecedente textual 'respirador PFF2'.",
         "Coesão Textual e Relações Anafóricas",
         "fácil"),
        # 13
        ("Assinale a alternativa em que a palavra destacada foi empregada em sentido CONOTATIVO (figurado):",
         "A sobrecarga contínua de tarefas na UTI acabou por **quebrar** a resistência emocional da equipe de enfermagem.",
         "O técnico de laboratório deixou cair e **quebrar** o tubo de ensaio de vidro no chão do expurgo.",
         "A tampa da caixa coletora de perfurocortantes deve ser lacrada para não **quebrar** as agulhas.",
         "O servidor sofreu uma queda no corredor e veio a **quebrar** o osso do antebraço direito.",
         "A autoclave apresentou defeito mecânico na resistência elétrica e parou de **funcionar**.",
         "A",
         "Em 'quebrar a resistência emocional', o verbo 'quebrar' foi usado em sentido figurado (esgotar psicologicamente). Nas demais alternativas, os termos foram usados em sentido denotativo literal.",
         "Semântica - Denotação e Conotação",
         "fácil"),
        # 14
        ("Em um memorando técnico de SST, a clareza, a precisão vocabular e a impessoalidade são atributos indispensáveis da redação oficial. Assinale a frase que melhor exemplifica essa linguagem técnica adequada:",
         "Constatou-se que 15% dos profissionais do setor cirúrgico necessitam de reciclagem no manuseio de perfurocortantes.",
         "Acho que a galera da enfermagem tá meio esquecida de como usar as luvas de borracha no plantão.",
         "O hospital virou uma verdadeira bagunça depois que trocaram as marcas das seringas descartáveis.",
         "Infelizmente os enfermeiros são muito teimosos e não querem saber de colocar o óculos de proteção.",
         "Tomara que ninguém pegue nenhuma doença grave enquanto a gente tenta arrumar esse problema aí.",
         "A",
         "A linguagem oficial e técnica exige padrão culto, impessoalidade ('Constatou-se que...'), objetividade e precisão quantitativa de dados, sem gírias ou impressões subjetivas.",
         "Redação Oficial e Comunicação Técnica",
         "fácil"),
        # 15
        ("Na frase 'Os resíduos de serviços de saúde exigem acondicionamento rigoroso, **haja vista** a sua periculosidade microbiológica e química', a expressão destacada tem o sentido de:",
         "Tendo em vista / em razão de (valor causal/explicativo).",
         "Apesar de / não obstante (valor concessivo).",
         "Com o objetivo de / a fim de (valor final).",
         "À medida que / ao passo que (valor proporcional).",
         "Caso / contanto que (valor condicional).",
         "A",
         "A locução 'haja vista' equivale a 'tendo em vista', 'visto que', 'em virtude de', introduzindo a causa ou justificativa do rigor no acondicionamento dos resíduos.",
         "Semântica e Relações de Sentido",
         "fácil"),

        # =========================================================
        # 4. CONECTIVOS E CONJUNÇÕES (5 questões)
        # =========================================================
        # 16
        ("Considere a oração: '**Embora** o hospital fornecesse protetores auriculares aos trabalhadores da lavanderia, muitos não utilizavam o equipamento durante todo o turno'. O conectivo em destaque estabelece entre as orações uma relação semântica de:",
         "Concessão (ideia de ressalva ou oposição que não anula o fato principal).",
         "Causa (motivo determinante da ação realizada).",
         "Consequência (resultado ou efeito direto da oração anterior).",
         "Condição (hipótese necessária para a realização de um evento).",
         "Finalidade (propósito ou objetivo a ser alcançado).",
         "A",
         "A conjunção 'Embora' é subordinativa concessiva por excelência, introduzindo uma oração que expressa fato contrário ao da oração principal sem, contudo, impedi-lo.",
         "Sintaxe - Conjunções Concessivas",
         "fácil"),
        # 17
        ("Assinale a alternativa em que o conectivo destacado expressa ideia de CONFORMIDADE:",
         "**Conforme** estabelece a NR-32, é obrigatória a vacinação gratuita de todos os trabalhadores contra a hepatite B.",
         "O técnico não utilizou a máscara de proteção, **portanto** foi advertido formalmente pelo supervisor.",
         "Os acidentes com agulhas continuaram ocorrendo **porque** faltavam caixas coletoras nos quartos.",
         "O servidor utilizou luvas de nitrila **a fim de** proteger as mãos do contato com agentes químicos.",
         "Os trabalhadores serão treinados **caso** ocorra mudança substancial nos processos operacionais.",
         "A",
         "'Conforme' é conjunção subordinativa conformativa (equivale a 'segundo', 'consoante', 'de acordo com'), indicando conformidade com a norma citada.",
         "Sintaxe - Conjunções Conformativas",
         "fácil"),
        # 18
        ("Na frase 'O técnico de segurança elaborou o plano de ação preventiva, **contudo** a diretoria do hospital não liberou os recursos orçamentários necessários', a conjunção destacada pode ser substituída, sem alteração de sentido, por:",
         "No entanto (ou porém, todavia, entretanto).",
         "Portanto.",
         "Por conseguinte.",
         "Visto que.",
         "Ainda que.",
         "A",
         "'Contudo' é conjunção coordenativa adversativa, que exprime oposição, contraste ou adversidade, sendo perfeitamente intercambiável com 'no entanto', 'porém', 'todavia', 'entretanto'.",
         "Sintaxe - Conjunções Adversativas",
         "fácil"),
        # 19
        ("Assinale a oração em que a conjunção 'COMO' expressa valor semântico de CAUSA:",
         "**Como** o piso da enfermaria estava molhado com água e sabão, a enfermeira escorregou e caiu.",
         "O novo técnico agiu **como** um verdadeiro especialista durante a simulação de evacuação.",
         "Realizamos todos os treinamentos **como** determina a Comissão Interna de Prevenção de Acidentes.",
         "O hospital possui setores críticos, **como** o centro cirúrgico e as unidades de terapia intensiva.",
         "Ele falava alto **como** se fosse o dono absoluto do estabelecimento de saúde.",
         "A",
         "A conjunção 'como' no início do período, antecedendo a oração principal, tem valor causal ('Já que o piso estava molhado / Visto que o piso estava molhado...'). Em B é comparativa; em C é conformativa; em D exemplificativa.",
         "Sintaxe - Conjunção Como",
         "média"),
        # 20
        ("Em 'A radiação dispersa diminuía **à medida que** os profissionais se distanciavam da fonte emissora de raio-X', a locução conjuntiva em destaque expressa noção de:",
         "Proporcionalidade.",
         "Temporalidade.",
         "Causalidade.",
         "Finalidade.",
         "Condicionalidade.",
         "A",
         "A locução 'à medida que' (assim como 'à proporção que') é conjuntiva subordinativa proporcional, expressando fatos simultâneos que progridem ou regridem em proporção direta ou inversa.",
         "Sintaxe - Conjunções Proporcionais",
         "fácil")
    ]
    
    questions = []
    for item in items:
        questions.append({
            "materia": "Português",
            "dificuldade": item[8],
            "enunciado": item[0],
            "alternativas": {
                "A": item[1],
                "B": item[2],
                "C": item[3],
                "D": item[4],
                "E": item[5]
            },
            "resposta_correta": item[6],
            "comentario": item[7],
            "referencia": item[8] if len(item) > 9 else item[7]
        })
    return questions

if __name__ == '__main__':
    q = get_portugues_questions()
    print(f"Português questions generated: {len(q)}")
