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
├── questions.js         # Banco completo com 700 questões gabaritadas e comentadas
├── manifest.json        # Manifesto PWA com start_url e escopo relativos
├── service-worker.js    # Cache offline inteligente e stale-while-revalidate
├── icons/               # Ícones PWA (192x192 e 512x512 normais e maskable)
└── README.md            # Documentação técnica e operacional do projeto
```

---

## 📚 Distribuição das 700 Questões do Banco de Dados

O banco de questões em `questions.js` contém exatamente **700 questões gabaritadas e com comentários fundamentados** (200 questões de demonstração originais + 500 questões adicionais completas), rigorosamente organizadas conforme o perfil do edital FHCGV e o padrão da banca Instituto Consulplan:

| Disciplina / Norma | Total | Distribuição Temática Hospitalar |
| :--- | :---: | :--- |
| **NR-32 (Serviços de Saúde)** | **200** | Risco biológico (65), Perfurocortantes e acidentes (50), Vacinação e EPIs (40), Risco químico e gases medicinais (30), Radiações ionizantes (15) |
| **Legislação do SUS** | **100** | Lei 8.080/90 (35), Lei 8.142/90 (25), CF/88 Arts. 196-200 (25), Política Nacional de Saúde do Trabalhador e da Trabalhadora - PNSST (15) |
| **NR-01 (GRO / PGR)** | **70** | Inventário de riscos (28), Plano de ação (20), Direito de recusa (14), eSocial SST - S-2210/2220/2240 (8) |
| **NR-07 (PCMSO)** | **55** | Exames médicos admissionais/periódicos (28), ASO e aptidão (14), Periodicidade e relatórios analíticos (13) |
| **NR-15 (Insalubridade)** | **55** | Anexo 14 Agentes Biológicos (35), Graus e percentuais de insalubridade (14), EPI e elisão do adicional (6) |
| **Resíduos de Saúde (RDC 222)** | **50** | Grupos A, B, C, D e E (35), Plano de Gerenciamento de Resíduos - PGRSS e armazenamento (15) |
| **NR-06 (EPI)** | **45** | Certificado de Aprovação - CA (18), Obrigações de empregador e empregado (15), Tipos de EPI hospitalares (12) |
| **NR-17 (Ergonomia)** | **45** | Movimentação de pacientes acamados (18), AEP e AET (15), Organização do trabalho e pausas (12) |
| **Legislação Previdenciária** | **45** | Comunicação de Acidente de Trabalho - CAT (22), Estabilidade provisória Art. 118 (15), PPP e LTCAT (8) |
| **Língua Portuguesa** | **35** | Crase (9), Concordância verbal/nominal (9), Interpretação e coesão (9), Conectivos e conjunções (8) |
| **TOTAL GERAL** | **700** | **Todas com gabarito oficial, comentários explicativos e fundamentação legal completa** |

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
