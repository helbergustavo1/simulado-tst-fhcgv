# Simulado TST FHCGV - Preparatório Completo (PWA)

Aplicativo Web Progressivo (PWA) completo, 100% funcional, instalável e utilizável offline, desenvolvido especificamente para candidatos ao cargo de **Técnico em Segurança do Trabalho** da **Fundação Hospital de Clínicas Gaspar Vianna (FHCGV/PA)**, com questões no estilo da banca **Instituto Consulplan**.

---

## 📱 Características Principais

- **Progressive Web App (PWA)**: Totalmente instalável no Android, iOS e Computadores desktop.
- **Funcionamento 100% Offline**: `service-worker.js` realiza pré-cache de todos os arquivos estáticos e do banco de questões.
- **Caminhos 100% Relativos**: Todos os scripts, estilos, ícones e URLs (`start_url: "./index.html"`, `scope: "./"`) utilizam notação relativa rigorosa (`./`).
- **Persistência Local (LocalStorage)**: Histórico de simulados, estatísticas por disciplina e caderno de erros mantidos com segurança no navegador sem depender de servidores ou internet.
- **Design Responsivo & Moderno**: Tema claro e escuro, acessibilidade, touch targets de 48dp, navegação otimizada para celular (bottom bar) e desktop.

---

## 🗂️ Estrutura de Arquivos

```text
├── index.html           # Interface principal da aplicação (Mobile-first)
├── styles.css           # Folha de estilos moderna com suporte a Dark Mode
├── app.js               # Lógica de controle, navegação, cronômetro e persistência
├── questions.js         # Banco com 200 questões gabaritadas e comentadas
├── manifest.json        # Manifesto PWA com start_url e escopo relativos
├── service-worker.js    # Cache offline inteligente e stale-while-revalidate
├── icons/               # Ícones PWA (192x192 e 512x512 normais e maskable)
└── README.md            # Documentação técnica e operacional do projeto
```

---

## 📚 Distribuição das 200 Questões de Demonstração

O banco de questões em `questions.js` contém exatamente **200 questões gabaritadas e com comentários fundamentados**, rigorosamente organizadas conforme o perfil do edital FHCGV:

| Disciplina / Norma | Quantidade | Foco Temático Hospitalar |
| :--- | :---: | :--- |
| **NR-32 (Serviços de Saúde)** | **50** | Perfurocortantes, quimioterápicos, radiação ionizante, vacinas do trabalhador, resíduos e biossegurança hospitalar |
| **NR-01 (GRO / PGR)** | **20** | Inventário de riscos, matriz de probabilidade e severidade, plano de ação e documentação do PGR hospitalar |
| **NR-06 (EPI)** | **15** | Seleção, higienização, CA, luvas cirúrgicas, proteção respiratória (N95/PFF2) e responsabilidades do TST |
| **NR-07 (PCMSO)** | **15** | Exames médicos (admissional, periódico, demissional), relatórios analíticos e rastreamento de agravos à saúde |
| **NR-15 (Insalubridade)** | **15** | Anexos 14 (agentes biológicos), 11/13 (químicos), calor e ruído em caldeiras e lavanderia |
| **NR-17 (Ergonomia)** | **15** | AEP e AET, transporte e transferência de pacientes acamados, bancadas e postos de enfermagem |
| **Legislação do SUS** | **20** | Leis nº 8.080/1990 e nº 8.142/1990, princípios do SUS, direção nacional e estadual, vigilância e controle social |
| **Resíduos de Saúde (RDC 222)** | **20** | Grupos A (biológicos), B (químicos), C (radioativos), D (comuns) e E (perfurocortantes), PGRSS |
| **Legislação Previdenciária** | **15** | Lei nº 8.213/1991, auxílio por incapacidade temporária, acidente de trabalho, CAT e aposentadoria especial |
| **Língua Portuguesa** | **15** | Interpretação textual, concordância verbal/nominal, regência, crase, pontuação e coesão textual (Consulplan) |
| **TOTAL GERAL** | **200** | **Todas com gabarito oficial, comentários explicativos e base legal** |

---

## 🚀 Funcionalidades da Aplicação

### 1. Dashboard Inicial (Home)
- Indicadores em tempo real: Total de questões respondidas, taxa de aproveitamento (%), questões no caderno de erros e simulados finalizados.
- Grade temática interativa das 10 matérias com barra de progresso individual e acesso com um clique.
- Botões de acesso rápido: **Simulado Completo (50Q)** e **Simulado Expresso (20Q)**.

### 2. Módulo de Simulados
- **Simulado Geral FHCGV (50Q)**: Imita a prova real de concurso com cronômetro regressivo oficial de 3 horas.
- **Simulado Expresso (20Q)**: Treino rápido de 1 hora balanceado para rotinas corridas.
- **Desafio NR-32 (30Q)**: Treino focado exclusivo na norma mais cobrada da área hospitalar.
- **Simulado do Caderno de Erros**: Monta uma prova apenas com as questões que o usuário errou anteriormente.
- **Cartão de Respostas**: Grade interativa numerada de 1 a 50 identificando visualmente respondidas, pendentes e questões marcadas com dúvida.

### 3. Modo de Estudo por Matéria
- Prática questão a questão sem pressão de tempo.
- Validação imediata ao confirmar a alternativa, exibindo:
  - Indicação clara se acertou ou errou.
  - Gabarito oficial.
  - Justificativa técnica e citação exata da norma/legislação.

### 4. Caderno de Erros Inteligente
- Armazena automaticamente toda questão errada durante qualquer simulado.
- Permite filtrar por matéria.
- Botão "Treinar Todas as Erradas" para revisão direcionada.
- Permite remover questões individualmente quando o conteúdo for consolidado.

### 5. Diagnóstico de Desempenho
- Taxa geral de aproveitamento e razão acertos/erros.
- Identificação automática da **Matéria Mais Forte** e da **Matéria que Exige Mais Atenção**.
- Gráficos de barras comparativos para as 10 disciplinas do edital.
- Histórico cronológico de todos os simulados realizados (data, tempo gasto, nota percentual e acertos).

### 6. Buscador Integrado de Questões
- Busca instantânea por qualquer palavra-chave (ex.: "quimioterápicos", "perfurocortantes", "CAT", "PGR", "crase", "RDC 222").
- Filtro por disciplina e visualização com expansão de comentários e embasamento normativo.

---

## 🛠️ Como Executar e Instalar

1. **Acesso Direto**: Abra o arquivo `index.html` em qualquer navegador web moderno (Google Chrome, Edge, Safari, Firefox).
2. **Instalação PWA no Android/Desktop**:
   - Clique no botão **"Instalar"** disponível no cabeçalho ou selecione **"Adicionar à tela inicial"** no menu do navegador.
   - O aplicativo criará o ícone oficial na tela inicial e funcionará sem conexão com a internet.
