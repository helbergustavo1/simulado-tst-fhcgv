/**
 * Simulado TST - FHCGV/PA • Lógica Completa da Aplicação (PWA)
 * Todos os caminhos e referências utilizam caminhos relativos
 */

// ==========================================
// 1. INICIALIZAÇÃO DO SERVICE WORKER & PWA
// ==========================================
let deferredInstallPrompt = null;

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then((reg) => console.log('[PWA] Service Worker registrado com sucesso:', reg.scope))
      .catch((err) => console.error('[PWA] Falha ao registrar Service Worker:', err));
  });
}

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  const installBtn = document.getElementById('btn-install-pwa');
  if (installBtn) {
    installBtn.style.display = 'inline-flex';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const installBtn = document.getElementById('btn-install-pwa');
  if (installBtn) {
    installBtn.addEventListener('click', async () => {
      if (deferredInstallPrompt) {
        deferredInstallPrompt.prompt();
        const { outcome } = await deferredInstallPrompt.userChoice;
        console.log('[PWA] Resposta de instalação:', outcome);
        deferredInstallPrompt = null;
        installBtn.style.display = 'none';
      }
    });
  }
});

// ==========================================
// 2. CONSTANTES E CONFIGURAÇÃO DAS MATÉRIAS
// ==========================================
const SUBJECTS_CONFIG = [
  { id: 'NR-32', name: 'NR-32 (Serviços de Saúde)', count: 200, color: '#006D77' },
  { id: 'NR-01', name: 'NR-01 (GRO / PGR)', count: 70, color: '#2A9D8F' },
  { id: 'NR-06', name: 'NR-06 (EPI)', count: 45, color: '#457B9D' },
  { id: 'NR-07', name: 'NR-07 (PCMSO)', count: 55, color: '#1D3557' },
  { id: 'NR-15', name: 'NR-15 (Insalubridade)', count: 55, color: '#E76F51' },
  { id: 'NR-17', name: 'NR-17 (Ergonomia)', count: 45, color: '#F4A261' },
  { id: 'Legislação SUS', name: 'Legislação do SUS', count: 100, color: '#3B82F6' },
  { id: 'Resíduos de Saúde (RDC 222)', name: 'Resíduos de Saúde (RDC 222)', count: 50, color: '#10B981' },
  { id: 'Legislação Previdenciária', name: 'Legislação Previdenciária', count: 45, color: '#8B5CF6' },
  { id: 'Português', name: 'Língua Portuguesa', count: 35, color: '#EC4899' }
];

// ==========================================
// 3. GERENCIAMENTO DE ESTADO (LOCALSTORAGE)
// ==========================================
const STORAGE_KEYS = {
  THEME: 'tst_theme',
  STATS: 'tst_stats_v1',
  ERRORS: 'tst_error_notebook_v1',
  HISTORY: 'tst_exam_history_v1',
  ACTIVE_EXAM: 'tst_active_exam_v1'
};

function getStorage(key, defaultValue) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (e) {
    return defaultValue;
  }
}

function setStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Erro ao salvar no localStorage:', e);
  }
}

// Estado Global
let state = {
  theme: localStorage.getItem(STORAGE_KEYS.THEME) || 'light',
  stats: getStorage(STORAGE_KEYS.STATS, {
    totalAnswered: 0,
    totalCorrect: 0,
    totalWrong: 0,
    byMateria: {}
  }),
  errorNotebook: getStorage(STORAGE_KEYS.ERRORS, []), // IDs de questões
  examHistory: getStorage(STORAGE_KEYS.HISTORY, []),
  currentExam: null, // Objeto do simulado ativo
  timerInterval: null
};

// ==========================================
// 4. CONTROLE DE TEMA (CLARO / ESCURO)
// ==========================================
function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(STORAGE_KEYS.THEME, theme);
  
  const icon = document.getElementById('theme-icon-sun');
  if (icon) {
    if (theme === 'dark') {
      icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
    } else {
      icon.innerHTML = `
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      `;
    }
  }
}

// ==========================================
// 5. NAVEGAÇÃO ENTRE TELAS / ABAS
// ==========================================
function navigateTo(viewId) {
  // Oculta todas as telas
  document.querySelectorAll('.app-view').forEach(view => {
    view.classList.remove('active');
  });

  // Atualiza botões da barra de navegação
  document.querySelectorAll('.nav-item').forEach(btn => {
    if (btn.getAttribute('data-view') === viewId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Exibe a tela de destino
  const targetView = document.getElementById(`view-${viewId}`);
  if (targetView) {
    targetView.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Renderizadores específicos de tela
  if (viewId === 'home') renderHomeDashboard();
  if (viewId === 'simulados') renderSimuladosView();
  if (viewId === 'materias') renderMateriasView();
  if (viewId === 'erros') renderErrosView();
  if (viewId === 'desempenho') renderDesempenhoView();
  if (viewId === 'busca') renderBuscaView();
}

// ==========================================
// 6. DASHBOARD INICIAL (HOME)
// ==========================================
function renderHomeDashboard() {
  const answeredEl = document.getElementById('home-stat-answered');
  const accuracyEl = document.getElementById('home-stat-accuracy');
  const correctCountEl = document.getElementById('home-stat-correct-count');
  const errorsEl = document.getElementById('home-stat-errors');
  const examsCountEl = document.getElementById('home-stat-exams-count');
  const badgeErrors = document.getElementById('badge-errors-count');

  const totalAns = state.stats.totalAnswered || 0;
  const totalCorr = state.stats.totalCorrect || 0;
  const accRate = totalAns > 0 ? Math.round((totalCorr / totalAns) * 100) : 0;
  const errorsCount = state.errorNotebook.length;
  const examsCount = state.examHistory.length;

  if (answeredEl) answeredEl.textContent = totalAns;
  if (accuracyEl) accuracyEl.textContent = `${accRate}%`;
  if (correctCountEl) correctCountEl.textContent = `${totalCorr} acertos`;
  if (errorsEl) errorsEl.textContent = errorsCount;
  if (examsCountEl) examsCountEl.textContent = examsCount;

  if (badgeErrors) {
    if (errorsCount > 0) {
      badgeErrors.textContent = errorsCount;
      badgeErrors.style.display = 'inline-block';
    } else {
      badgeErrors.style.display = 'none';
    }
  }

  // Renderiza grid das 10 matérias
  const grid = document.getElementById('home-subjects-grid');
  if (!grid) return;

  grid.innerHTML = '';
  SUBJECTS_CONFIG.forEach(sub => {
    const subStats = state.stats.byMateria[sub.id] || { answered: 0, correct: 0 };
    const pct = subStats.answered > 0 ? Math.round((subStats.correct / subStats.answered) * 100) : 0;

    const card = document.createElement('div');
    card.className = 'subject-card';
    card.innerHTML = `
      <div>
        <div class="subject-card-top">
          <span class="subject-name">${sub.name}</span>
          <span class="subject-count-pill">${sub.count} Qs</span>
        </div>
        <div class="subject-bar-track">
          <div class="subject-bar-fill" style="width: ${pct}%;"></div>
        </div>
      </div>
      <div class="subject-card-footer">
        <span>Respondidas: ${subStats.answered}/${sub.count}</span>
        <span>Aproveitamento: ${pct}%</span>
      </div>
    `;

    card.addEventListener('click', () => {
      startStudyMode(sub.id);
    });

    grid.appendChild(card);
  });
}

// ==========================================
// 7. MOTOR DE SIMULADOS (PROVA REAL & ESTUDO)
// ==========================================
function getAllQuestions() {
  if (typeof questions !== 'undefined' && Array.isArray(questions)) {
    return questions;
  }
  if (typeof QUESTIONS_DATA !== 'undefined' && Array.isArray(QUESTIONS_DATA)) {
    return QUESTIONS_DATA;
  }
  if (typeof window !== 'undefined') {
    if (window.questions && Array.isArray(window.questions)) return window.questions;
    if (window.QUESTIONS_DATA && Array.isArray(window.QUESTIONS_DATA)) return window.QUESTIONS_DATA;
  }
  return [];
}

/**
 * Inicia um simulado completo com cronômetro
 */
function startSimulado(questionCount = 50, title = 'Simulado Geral FHCGV') {
  const all = getAllQuestions();
  if (all.length === 0) {
    alert('Banco de questões não carregado.');
    return;
  }

  // Sorteio estratificado ou aleatório
  let selected = [];
  if (questionCount === 50) {
    // Proporção representativa: 20 NR-32 + 6 NR-01 + 4 EPI + 4 PCMSO + 4 Insalubridade + 4 Ergonomia + 4 SUS + 4 Resíduos
    const getBySubject = (subj, n) => {
      const filtered = all.filter(q => q.materia === subj);
      return shuffleArray([...filtered]).slice(0, n);
    };

    selected = [
      ...getBySubject('NR-32', 15),
      ...getBySubject('NR-01', 5),
      ...getBySubject('NR-06', 4),
      ...getBySubject('NR-07', 4),
      ...getBySubject('NR-15', 4),
      ...getBySubject('NR-17', 4),
      ...getBySubject('Legislação SUS', 5),
      ...getBySubject('Resíduos de Saúde (RDC 222)', 4),
      ...getBySubject('Legislação Previdenciária', 3),
      ...getBySubject('Português', 2)
    ];

    // Se faltou preencher até 50
    if (selected.length < 50) {
      const remaining = all.filter(q => !selected.some(s => s.id === q.id));
      selected = selected.concat(shuffleArray(remaining).slice(0, 50 - selected.length));
    }
  } else {
    selected = shuffleArray([...all]).slice(0, questionCount);
  }

  initExamSession({
    title: title,
    mode: 'exam', // exam = prova com gabarito no final; study = resposta imediata
    questions: selected,
    currentIndex: 0,
    answers: {}, // { [index]: 'A' }
    flagged: {}, // { [index]: true }
    timeLimitSeconds: questionCount === 50 ? 3 * 3600 : 3600, // 3h para 50Q, 1h para 20Q
    timeRemaining: questionCount === 50 ? 3 * 3600 : 3600,
    isPaused: false,
    startTime: Date.now()
  });
}

/**
 * Inicia simulado de uma única matéria
 */
function startSimuladoSubject(materia, questionCount = 30, title = 'Simulado Temático') {
  const all = getAllQuestions();
  const filtered = all.filter(q => q.materia === materia);
  if (filtered.length === 0) {
    alert(`Nenhuma questão encontrada para ${materia}.`);
    return;
  }

  const selected = shuffleArray([...filtered]).slice(0, Math.min(questionCount, filtered.length));

  initExamSession({
    title: title,
    mode: 'exam',
    questions: selected,
    currentIndex: 0,
    answers: {},
    flagged: {},
    timeLimitSeconds: 90 * 60, // 1h30
    timeRemaining: 90 * 60,
    isPaused: false,
    startTime: Date.now()
  });
}

/**
 * Inicia modo estudo por matéria (gabarito e comentário imediatos)
 */
function startStudyMode(materia) {
  const all = getAllQuestions();
  const filtered = all.filter(q => q.materia === materia);
  if (filtered.length === 0) {
    alert(`Nenhuma questão disponível para ${materia}`);
    return;
  }

  initExamSession({
    title: `Estudo: ${materia}`,
    mode: 'study',
    questions: filtered, // Todas da matéria
    currentIndex: 0,
    answers: {},
    flagged: {},
    timeLimitSeconds: null, // Sem limite
    timeRemaining: 0,
    isPaused: false,
    startTime: Date.now()
  });
}

/**
 * Inicia simulado com apenas as questões do Caderno de Erros
 */
function startErrorsExam() {
  const all = getAllQuestions();
  const errorIds = new Set(state.errorNotebook);
  const questions = all.filter(q => errorIds.has(q.id));

  if (questions.length === 0) {
    alert('Seu caderno de erros está vazio! Parabéns ou faça mais simulados.');
    return;
  }

  initExamSession({
    title: 'Simulado do Caderno de Erros',
    mode: 'exam',
    questions: shuffleArray([...questions]),
    currentIndex: 0,
    answers: {},
    flagged: {},
    timeLimitSeconds: questions.length * 150, // 2.5 min por questão
    timeRemaining: questions.length * 150,
    isPaused: false,
    startTime: Date.now()
  });
}

/**
 * Configura e inicializa os controles da sessão do simulado
 */
function initExamSession(examConfig) {
  // Limpa timer anterior
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }

  state.currentExam = examConfig;
  navigateTo('exam-runner');

  // Ajustes de interface
  const titleEl = document.getElementById('active-exam-title');
  const timerBadge = document.getElementById('exam-timer');
  const btnPause = document.getElementById('btn-timer-pause');
  const btnCheckStudy = document.getElementById('btn-check-study-answer');
  const btnFinish = document.getElementById('btn-exam-finish');

  if (titleEl) titleEl.textContent = examConfig.title;

  if (examConfig.mode === 'study') {
    if (timerBadge) timerBadge.style.display = 'none';
    if (btnPause) btnPause.style.display = 'none';
    if (btnCheckStudy) btnCheckStudy.style.display = 'inline-flex';
    if (btnFinish) btnFinish.textContent = 'Sair do Treino';
  } else {
    if (timerBadge) timerBadge.style.display = 'flex';
    if (btnPause) btnPause.style.display = 'inline-flex';
    if (btnCheckStudy) btnCheckStudy.style.display = 'none';
    if (btnFinish) btnFinish.textContent = 'Finalizar Prova';
    startTimer();
  }

  renderCurrentQuestion();
}

/**
 * Atualiza o cronômetro a cada segundo
 */
function startTimer() {
  if (!state.currentExam || state.currentExam.mode !== 'exam') return;

  const timerDisplay = document.getElementById('timer-display');
  const timerBadge = document.getElementById('exam-timer');

  const updateDisplay = () => {
    if (!state.currentExam) return;
    const s = state.currentExam.timeRemaining;
    const hours = Math.floor(s / 3600);
    const mins = Math.floor((s % 3600) / 60);
    const secs = s % 60;
    
    if (timerDisplay) {
      timerDisplay.textContent = 
        `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    if (s <= 300) { // Menos de 5 minutos
      timerBadge?.classList.add('warning');
    } else {
      timerBadge?.classList.remove('warning');
    }

    if (s <= 0) {
      clearInterval(state.timerInterval);
      alert('O tempo oficial do simulado encerrou! Entregando cartão de respostas...');
      finishExamSession();
    }
  };

  updateDisplay();

  state.timerInterval = setInterval(() => {
    if (state.currentExam && !state.currentExam.isPaused) {
      state.currentExam.timeRemaining--;
      updateDisplay();
    }
  }, 1000);
}

// Pausar / Retomar Timer
document.addEventListener('DOMContentLoaded', () => {
  const btnPause = document.getElementById('btn-timer-pause');
  if (btnPause) {
    btnPause.addEventListener('click', () => {
      if (!state.currentExam) return;
      state.currentExam.isPaused = !state.currentExam.isPaused;
      const icon = document.getElementById('icon-pause');
      if (state.currentExam.isPaused) {
        btnPause.title = 'Retomar Simulado';
        if (icon) icon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"></polygon>';
      } else {
        btnPause.title = 'Pausar Simulado';
        if (icon) icon.innerHTML = '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>';
      }
    });
  }
});

/**
 * Renderiza a questão atual do simulado na tela
 */
function renderCurrentQuestion() {
  if (!state.currentExam) return;

  const { questions, currentIndex, answers, flagged, mode } = state.currentExam;
  const q = questions[currentIndex];
  if (!q) return;

  // Atualiza indicadores de progresso
  const total = questions.length;
  const currentNum = currentIndex + 1;
  document.getElementById('exam-q-current').textContent = currentNum;
  document.getElementById('exam-q-total').textContent = total;

  const pct = Math.round((currentNum / total) * 100);
  const progressFill = document.getElementById('exam-progress-fill');
  if (progressFill) progressFill.style.width = `${pct}%`;

  // Tags da questão
  document.getElementById('exam-materia-tag').textContent = q.materia;
  document.getElementById('exam-diff-tag').textContent = q.dificuldade || 'Média';

  // Botão de dúvida
  const flagBtn = document.getElementById('btn-flag-question');
  const flagText = document.getElementById('flag-text');
  if (flagBtn) {
    if (flagged[currentIndex]) {
      flagBtn.classList.add('flagged');
      flagText.textContent = 'Marcada';
    } else {
      flagBtn.classList.remove('flagged');
      flagText.textContent = 'Dúvida';
    }
  }

  // Enunciado
  document.getElementById('exam-statement').textContent = q.enunciado;

  // Feedback box (Modo Estudo)
  const feedbackBox = document.getElementById('study-feedback-box');
  if (feedbackBox) {
    feedbackBox.style.display = 'none';
  }

  // Alternativas A, B, C, D, E
  const altContainer = document.getElementById('exam-alternatives');
  altContainer.innerHTML = '';

  const letters = ['A', 'B', 'C', 'D', 'E'];
  letters.forEach(letter => {
    const text = q.alternativas[letter];
    if (!text) return;

    const btn = document.createElement('button');
    btn.className = 'alt-btn';
    btn.setAttribute('data-letter', letter);

    const isSelected = answers[currentIndex] === letter;
    if (isSelected) {
      btn.classList.add('selected');
    }

    btn.innerHTML = `
      <span class="alt-letter">${letter}</span>
      <span class="alt-text">${text}</span>
    `;

    btn.addEventListener('click', () => {
      // Se já conferiu no modo estudo, não permite alterar
      if (mode === 'study' && feedbackBox.style.display === 'block') {
        return;
      }

      state.currentExam.answers[currentIndex] = letter;
      // Atualiza seleção visual imediata
      document.querySelectorAll('.alt-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');

      // No modo de estudo, se clicar em alternativa, ativa o botão de conferir
      if (mode === 'study') {
        document.getElementById('btn-check-study-answer').style.display = 'inline-flex';
      }
    });

    altContainer.appendChild(btn);
  });

  // Estado dos botões de navegação
  const btnPrev = document.getElementById('btn-exam-prev');
  const btnNext = document.getElementById('btn-exam-next');
  if (btnPrev) btnPrev.disabled = currentIndex === 0;
  if (btnNext) {
    if (currentIndex === total - 1) {
      btnNext.style.display = 'none';
    } else {
      btnNext.style.display = 'inline-flex';
    }
  }
}

// ==========================================
// 8. EVENTOS DE NAVEGAÇÃO DA PROVA
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Próxima questão
  document.getElementById('btn-exam-next')?.addEventListener('click', () => {
    if (!state.currentExam) return;
    if (state.currentExam.currentIndex < state.currentExam.questions.length - 1) {
      state.currentExam.currentIndex++;
      renderCurrentQuestion();
    }
  });

  // Questão anterior
  document.getElementById('btn-exam-prev')?.addEventListener('click', () => {
    if (!state.currentExam) return;
    if (state.currentExam.currentIndex > 0) {
      state.currentExam.currentIndex--;
      renderCurrentQuestion();
    }
  });

  // Marcar / desmarcar dúvida
  document.getElementById('btn-flag-question')?.addEventListener('click', () => {
    if (!state.currentExam) return;
    const idx = state.currentExam.currentIndex;
    state.currentExam.flagged[idx] = !state.currentExam.flagged[idx];
    renderCurrentQuestion();
  });

  // Conferir resposta no modo estudo
  document.getElementById('btn-check-study-answer')?.addEventListener('click', () => {
    if (!state.currentExam) return;
    const { questions, currentIndex, answers } = state.currentExam;
    const q = questions[currentIndex];
    const selected = answers[currentIndex];

    if (!selected) {
      alert('Selecione uma alternativa antes de confirmar!');
      return;
    }

    const isCorrect = selected === q.resposta_correta;
    const feedbackBox = document.getElementById('study-feedback-box');
    const statusMsg = document.getElementById('feedback-status-msg');
    const commentText = document.getElementById('feedback-comment-text');
    const refText = document.getElementById('feedback-ref-text');

    // Registra estatística individual
    recordQuestionAttempt(q, isCorrect);

    // Destaca as alternativas
    document.querySelectorAll('.alt-btn').forEach(btn => {
      const letCode = btn.getAttribute('data-letter');
      if (letCode === q.resposta_correta) {
        btn.classList.add('correct-answer');
      } else if (letCode === selected && !isCorrect) {
        btn.classList.add('wrong-answer');
      }
    });

    if (statusMsg) {
      statusMsg.className = `feedback-status ${isCorrect ? 'correct' : 'wrong'}`;
      statusMsg.textContent = isCorrect ? '✓ RESPOSTA CORRETA!' : `✗ RESPOSTA INCORRETA (Gabarito: ${q.resposta_correta})`;
    }
    if (commentText) commentText.textContent = q.comentario || 'Sem comentário disponível.';
    if (refText) refText.textContent = `Fundamentação: ${q.referencia || 'Edital FHCGV'}`;

    if (feedbackBox) feedbackBox.style.display = 'block';
  });

  // Cartão de Respostas Modal
  document.getElementById('btn-open-answer-card')?.addEventListener('click', () => {
    openAnswerCardModal();
  });
  document.getElementById('btn-close-card-modal')?.addEventListener('click', () => {
    document.getElementById('modal-answer-card').style.display = 'none';
  });
  document.getElementById('btn-modal-close-action')?.addEventListener('click', () => {
    document.getElementById('modal-answer-card').style.display = 'none';
  });

  // Finalizar Simulado
  document.getElementById('btn-exam-finish')?.addEventListener('click', () => {
    if (!state.currentExam) return;
    if (state.currentExam.mode === 'study') {
      navigateTo('home');
      return;
    }

    const total = state.currentExam.questions.length;
    const answeredCount = Object.keys(state.currentExam.answers).length;

    const msgEl = document.getElementById('confirm-finish-msg');
    if (msgEl) {
      msgEl.innerHTML = `Você respondeu <strong>${answeredCount} de ${total}</strong> questões.<br>Deseja realmente entregar o cartão de respostas e ver o resultado?`;
    }
    document.getElementById('modal-confirm-finish').style.display = 'flex';
  });

  document.getElementById('btn-cancel-finish')?.addEventListener('click', () => {
    document.getElementById('modal-confirm-finish').style.display = 'none';
  });
  document.getElementById('btn-close-confirm-modal')?.addEventListener('click', () => {
    document.getElementById('modal-confirm-finish').style.display = 'none';
  });
  document.getElementById('btn-confirm-finish')?.addEventListener('click', () => {
    document.getElementById('modal-confirm-finish').style.display = 'none';
    finishExamSession();
  });
});

/**
 * Abre o Modal com o Cartão de Respostas Interativo
 */
function openAnswerCardModal() {
  if (!state.currentExam) return;
  const { questions, currentIndex, answers, flagged } = state.currentExam;
  const grid = document.getElementById('answer-card-grid');
  if (!grid) return;

  grid.innerHTML = '';
  questions.forEach((q, idx) => {
    const btn = document.createElement('button');
    btn.className = 'grid-q-btn';
    btn.textContent = idx + 1;

    if (answers[idx]) btn.classList.add('answered');
    if (flagged[idx]) btn.classList.add('flagged');
    if (idx === currentIndex) btn.classList.add('current');

    btn.addEventListener('click', () => {
      state.currentExam.currentIndex = idx;
      renderCurrentQuestion();
      document.getElementById('modal-answer-card').style.display = 'none';
    });

    grid.appendChild(btn);
  });

  document.getElementById('modal-answer-card').style.display = 'flex';
}

/**
 * Finaliza o simulado ativo e computa resultado
 */
function finishExamSession() {
  if (!state.currentExam) return;

  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }

  const { questions, answers, title, timeLimitSeconds, timeRemaining, startTime } = state.currentExam;

  let correctCount = 0;
  let wrongCount = 0;
  const reviewData = [];
  const subjectBreakdown = {};

  questions.forEach((q, idx) => {
    const selected = answers[idx] || null;
    const isCorrect = selected === q.resposta_correta;

    if (isCorrect) {
      correctCount++;
    } else {
      wrongCount++;
      // Adiciona ao caderno de erros automaticamente se ainda não constar
      if (!state.errorNotebook.includes(q.id)) {
        state.errorNotebook.push(q.id);
      }
    }

    // Acumula por matéria
    if (!subjectBreakdown[q.materia]) {
      subjectBreakdown[q.materia] = { total: 0, correct: 0 };
    }
    subjectBreakdown[q.materia].total++;
    if (isCorrect) subjectBreakdown[q.materia].correct++;

    // Registra estatística persistente
    recordQuestionAttempt(q, isCorrect);

    reviewData.push({
      question: q,
      userAnswer: selected,
      isCorrect: isCorrect,
      flagged: !!state.currentExam.flagged[idx]
    });
  });

  // Salva caderno de erros atualizado
  setStorage(STORAGE_KEYS.ERRORS, state.errorNotebook);

  const total = questions.length;
  const scorePct = total > 0 ? Math.round((correctCount / total) * 100) : 0;
  const timeSpentSecs = timeLimitSeconds ? (timeLimitSeconds - timeRemaining) : Math.round((Date.now() - startTime) / 1000);

  const examRecord = {
    id: Date.now(),
    title: title,
    date: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
    total: total,
    correct: correctCount,
    wrong: wrongCount,
    scorePct: scorePct,
    timeSpentSecs: Math.max(1, timeSpentSecs)
  };

  // Salva no histórico de simulados
  state.examHistory.unshift(examRecord);
  setStorage(STORAGE_KEYS.HISTORY, state.examHistory);

  // Renderiza tela de resultado
  renderExamResult(examRecord, reviewData, subjectBreakdown);
}

/**
 * Registra tentativa de questão para as estatísticas globais
 */
function recordQuestionAttempt(q, isCorrect) {
  state.stats.totalAnswered = (state.stats.totalAnswered || 0) + 1;
  if (isCorrect) {
    state.stats.totalCorrect = (state.stats.totalCorrect || 0) + 1;
  } else {
    state.stats.totalWrong = (state.stats.totalWrong || 0) + 1;
  }

  if (!state.stats.byMateria[q.materia]) {
    state.stats.byMateria[q.materia] = { answered: 0, correct: 0 };
  }
  state.stats.byMateria[q.materia].answered++;
  if (isCorrect) {
    state.stats.byMateria[q.materia].correct++;
  }

  setStorage(STORAGE_KEYS.STATS, state.stats);
}

// ==========================================
// 9. TELA DE RESULTADO DO SIMULADO
// ==========================================
let currentReviewData = [];

function renderExamResult(examRecord, reviewData, subjectBreakdown) {
  currentReviewData = reviewData;
  navigateTo('exam-result');

  const isApproved = examRecord.scorePct >= 60; // Nota de corte padrão Consulplan (60%)
  const badgeStatus = document.getElementById('result-status-badge');
  const scoreTitle = document.getElementById('result-score-title');
  const messageEl = document.getElementById('result-message');

  if (badgeStatus) {
    badgeStatus.className = `result-badge-status ${isApproved ? 'approved' : 'failed'}`;
    badgeStatus.textContent = isApproved ? 'APROVADO (>= 60%)' : 'REPROVADO (< 60%)';
  }

  if (scoreTitle) {
    scoreTitle.textContent = `Sua Pontuação: ${examRecord.correct} / ${examRecord.total} (${examRecord.scorePct}%)`;
  }

  if (messageEl) {
    messageEl.textContent = isApproved
      ? 'Excelente resultado! Você atingiu o perfil de pontuação compatível com aprovação nas vagas da FHCGV.'
      : 'Não desanime! Revise os comentários dos seus erros abaixo e refaça as questões no Caderno de Erros para consolidar o conhecimento.';
  }

  // Métricas
  document.getElementById('res-correct-count').textContent = examRecord.correct;
  document.getElementById('res-wrong-count').textContent = examRecord.wrong;
  document.getElementById('res-accuracy-rate').textContent = `${examRecord.scorePct}%`;

  const mins = Math.floor(examRecord.timeSpentSecs / 60);
  const secs = examRecord.timeSpentSecs % 60;
  document.getElementById('res-time-spent').textContent = `${mins}m ${secs}s`;

  // Breakdown por disciplina
  const breakdownContainer = document.getElementById('result-subject-breakdown');
  if (breakdownContainer) {
    breakdownContainer.innerHTML = '';
    Object.keys(subjectBreakdown).forEach(materia => {
      const data = subjectBreakdown[materia];
      const rate = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;

      const row = document.createElement('div');
      row.className = 'breakdown-row';
      row.innerHTML = `
        <div class="breakdown-info">
          <span>${materia}</span>
          <span>${data.correct}/${data.total} acertos (${rate}%)</span>
        </div>
        <div class="subject-bar-track">
          <div class="subject-bar-fill" style="width: ${rate}%; background-color: ${rate >= 60 ? '#10B981' : '#EF4444'};"></div>
        </div>
      `;
      breakdownContainer.appendChild(row);
    });
  }

  // Filtros de revisão
  const filterAll = document.getElementById('rev-filter-all');
  const filterWrong = document.getElementById('rev-filter-wrong');
  const filterCorrect = document.getElementById('rev-filter-correct');
  const filterFlagged = document.getElementById('rev-filter-flagged');

  const wrongs = reviewData.filter(r => !r.isCorrect).length;
  const corrects = reviewData.filter(r => r.isCorrect).length;
  const flags = reviewData.filter(r => r.flagged).length;

  if (filterAll) filterAll.textContent = reviewData.length;
  if (filterWrong) filterWrong.textContent = wrongs;
  if (filterCorrect) filterCorrect.textContent = corrects;
  if (filterFlagged) filterFlagged.textContent = flags;

  renderReviewList('all');
}

function renderReviewList(filterType) {
  const container = document.getElementById('result-review-list');
  if (!container) return;

  container.innerHTML = '';

  const filtered = currentReviewData.filter(item => {
    if (filterType === 'wrong') return !item.isCorrect;
    if (filterType === 'correct') return item.isCorrect;
    if (filterType === 'flagged') return item.flagged;
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 20px;">Nenhuma questão corresponde ao filtro selecionado.</p>';
    return;
  }

  filtered.forEach((item, index) => {
    const q = item.question;
    const card = document.createElement('div');
    card.className = `review-card ${item.isCorrect ? 'correct' : 'wrong'}`;

    card.innerHTML = `
      <div class="review-card-header">
        <span class="tag-materia">${q.materia}</span>
        <span style="color: ${item.isCorrect ? 'var(--color-success)' : 'var(--color-danger)'};">
          ${item.isCorrect ? '✓ ACERTOU' : '✗ ERROU'}
        </span>
      </div>
      <p class="review-statement"><strong>Q.${q.id}:</strong> ${q.enunciado}</p>
      
      <div class="review-answers-box">
        <div><strong>Sua resposta:</strong> ${item.userAnswer ? `${item.userAnswer}) ${q.alternativas[item.userAnswer] || ''}` : 'Não respondeu'}</div>
        <div><strong>Gabarito oficial:</strong> <span style="color: var(--color-success); font-weight: 700;">${q.resposta_correta}) ${q.alternativas[q.resposta_correta]}</span></div>
      </div>

      <div class="review-explanation">
        <strong>Comentário:</strong> ${q.comentario}
        <div style="margin-top: 4px; color: var(--text-muted); font-size: 0.78rem;"><strong>Referência:</strong> ${q.referencia}</div>
      </div>
    `;

    container.appendChild(card);
  });
}

// Configura botões de filtro na revisão
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.filter-pills .pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-pills .pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderReviewList(btn.getAttribute('data-filter'));
    });
  });

  document.getElementById('btn-res-new-exam')?.addEventListener('click', () => {
    startSimulado(50, 'Simulado Geral FHCGV');
  });

  document.getElementById('btn-res-add-errors')?.addEventListener('click', () => {
    alert('Todas as questões erradas já foram integradas com sucesso ao seu Caderno de Erros!');
  });
});

// ==========================================
// 10. TELA DE MATÉRIAS (ESTUDO TEMÁTICO)
// ==========================================
function renderMateriasView() {
  const container = document.getElementById('study-selection-grid');
  if (!container) return;

  container.innerHTML = '';
  SUBJECTS_CONFIG.forEach(sub => {
    const subStats = state.stats.byMateria[sub.id] || { answered: 0, correct: 0 };
    const pct = subStats.answered > 0 ? Math.round((subStats.correct / subStats.answered) * 100) : 0;

    const card = document.createElement('div');
    card.className = 'subject-card';
    card.innerHTML = `
      <div class="subject-card-top">
        <span class="subject-name">${sub.name}</span>
        <span class="subject-count-pill">${sub.count} Questões</span>
      </div>
      <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 12px;">
        Treino com resposta imediata, comentários da banca Consulplan e embasamento normativo.
      </p>
      <div class="subject-bar-track">
        <div class="subject-bar-fill" style="width: ${pct}%;"></div>
      </div>
      <div class="subject-card-footer">
        <span>Respondidas: ${subStats.answered}/${sub.count}</span>
        <span>Aproveitamento: ${pct}%</span>
      </div>
      <button class="btn btn-primary btn-block btn-sm" style="margin-top: 14px;">
        Praticar Esta Matéria
      </button>
    `;

    card.addEventListener('click', () => {
      startStudyMode(sub.id);
    });

    container.appendChild(card);
  });
}

// ==========================================
// 11. TELA DO CADERNO DE ERROS
// ==========================================
function renderErrosView() {
  const all = getAllQuestions();
  const errorIds = state.errorNotebook;
  const selectMateria = document.getElementById('select-errors-materia');
  const selectedMateria = selectMateria ? selectMateria.value : 'all';

  const container = document.getElementById('errors-questions-container');
  if (!container) return;

  const errorQuestions = all.filter(q => {
    const isErr = errorIds.includes(q.id);
    if (!isErr) return false;
    if (selectedMateria !== 'all' && q.materia !== selectedMateria) return false;
    return true;
  });

  if (errorQuestions.length === 0) {
    container.innerHTML = `
      <div class="section-card" style="text-align: center; padding: 40px 20px;">
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="var(--color-success)" stroke-width="2" style="margin-bottom: 12px;"><circle cx="12" cy="12" r="10"></circle><polyline points="20 6 9 17 4 12"></polyline></svg>
        <h3>Nenhum erro registrado neste filtro!</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 6px;">Todas as questões foram dominadas ou você ainda não errou neste tema.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = '';
  errorQuestions.forEach(q => {
    const card = document.createElement('div');
    card.className = 'error-item-card';
    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
        <span class="tag-materia">${q.materia}</span>
        <span class="tag-diff">${q.dificuldade}</span>
      </div>
      <p style="font-size: 0.95rem; font-weight: 500; margin-bottom: 12px; line-height: 1.5;">${q.enunciado}</p>
      
      <div style="font-size: 0.88rem; background: var(--bg-subtle); padding: 12px; border-radius: var(--radius-sm); margin-bottom: 12px;">
        <strong>Gabarito Correto:</strong> <span style="color: var(--color-success); font-weight: 700;">${q.resposta_correta}) ${q.alternativas[q.resposta_correta]}</span>
        <div style="margin-top: 6px; color: var(--text-main); font-size: 0.82rem;">${q.comentario}</div>
      </div>

      <div class="error-item-actions">
        <button class="btn btn-outline btn-sm btn-remove-error" data-id="${q.id}">
          Remover do Caderno
        </button>
      </div>
    `;

    card.querySelector('.btn-remove-error').addEventListener('click', (e) => {
      e.stopPropagation();
      state.errorNotebook = state.errorNotebook.filter(id => id !== q.id);
      setStorage(STORAGE_KEYS.ERRORS, state.errorNotebook);
      renderErrosView();
      renderHomeDashboard();
    });

    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('select-errors-materia')?.addEventListener('change', () => {
    renderErrosView();
  });

  document.getElementById('btn-train-all-errors')?.addEventListener('click', () => {
    startErrorsExam();
  });

  document.getElementById('btn-clear-all-errors')?.addEventListener('click', () => {
    if (state.errorNotebook.length === 0) return;
    if (confirm('Tem certeza que deseja zerar todas as questões do Caderno de Erros?')) {
      state.errorNotebook = [];
      setStorage(STORAGE_KEYS.ERRORS, state.errorNotebook);
      renderErrosView();
      renderHomeDashboard();
    }
  });
});

// ==========================================
// 12. TELA DE DESEMPENHO E ESTATÍSTICAS
// ==========================================
function renderDesempenhoView() {
  const totalAns = state.stats.totalAnswered || 0;
  const totalCorr = state.stats.totalCorrect || 0;
  const totalWrong = state.stats.totalWrong || 0;
  const globalRate = totalAns > 0 ? Math.round((totalCorr / totalAns) * 100) : 0;

  document.getElementById('perf-total-attempts').textContent = totalAns;
  document.getElementById('perf-global-rate').textContent = `${globalRate}%`;
  document.getElementById('perf-ratio-detail').textContent = `${totalCorr} acertos / ${totalWrong} erros`;

  // Identifica melhor e pior matéria
  let bestSub = null;
  let bestRate = -1;
  let worstSub = null;
  let worstRate = 101;

  SUBJECTS_CONFIG.forEach(sub => {
    const s = state.stats.byMateria[sub.id];
    if (s && s.answered >= 3) {
      const rate = Math.round((s.correct / s.answered) * 100);
      if (rate > bestRate) {
        bestRate = rate;
        bestSub = sub.name;
      }
      if (rate < worstRate) {
        worstRate = rate;
        worstSub = sub.name;
      }
    }
  });

  document.getElementById('perf-best-subject').textContent = bestSub ? bestSub.split(' ')[0] : 'Em análise';
  document.getElementById('perf-best-rate').textContent = bestSub ? `${bestRate}% de acertos` : 'Responda mais questões';

  document.getElementById('perf-worst-subject').textContent = worstSub ? worstSub.split(' ')[0] : 'Em análise';
  document.getElementById('perf-worst-rate').textContent = worstSub ? `${worstRate}% de acertos` : 'Responda mais questões';

  // Barras de progresso das 10 matérias
  const barsContainer = document.getElementById('perf-subjects-bars');
  if (barsContainer) {
    barsContainer.innerHTML = '';
    SUBJECTS_CONFIG.forEach(sub => {
      const s = state.stats.byMateria[sub.id] || { answered: 0, correct: 0 };
      const rate = s.answered > 0 ? Math.round((s.correct / s.answered) * 100) : 0;

      const row = document.createElement('div');
      row.className = 'subject-bar-row';
      row.innerHTML = `
        <div class="breakdown-info">
          <span><strong>${sub.name}</strong> (${s.answered}/${sub.count} respondidas)</span>
          <span style="color: ${rate >= 60 ? 'var(--color-success)' : 'var(--accent)'}; font-weight: 700;">${rate}%</span>
        </div>
        <div class="subject-bar-track">
          <div class="subject-bar-fill" style="width: ${rate}%; background-color: ${sub.color || 'var(--primary)'};"></div>
        </div>
      `;
      barsContainer.appendChild(row);
    });
  }

  // Histórico de simulados
  const historyContainer = document.getElementById('perf-exams-history');
  if (historyContainer) {
    if (state.examHistory.length === 0) {
      historyContainer.innerHTML = '<p style="color: var(--text-muted); font-size: 0.9rem; text-align: center; padding: 16px;">Nenhum simulado finalizado ainda.</p>';
    } else {
      historyContainer.innerHTML = '';
      state.examHistory.slice(0, 10).forEach(h => {
        const item = document.createElement('div');
        item.className = 'history-item';
        item.innerHTML = `
          <div>
            <strong>${h.title}</strong>
            <div style="font-size: 0.78rem; color: var(--text-muted);">${h.date} • ${Math.floor(h.timeSpentSecs / 60)}m gasto</div>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 1.1rem; font-weight: 800; color: ${h.scorePct >= 60 ? 'var(--color-success)' : 'var(--color-danger)'};">
              ${h.scorePct}%
            </div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">${h.correct}/${h.total} acertos</div>
          </div>
        `;
        historyContainer.appendChild(item);
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-reset-stats')?.addEventListener('click', () => {
    if (confirm('Tem certeza que deseja zerar todas as estatísticas e histórico de simulados? Esta ação não pode ser desfeita.')) {
      state.stats = { totalAnswered: 0, totalCorrect: 0, totalWrong: 0, byMateria: {} };
      state.examHistory = [];
      setStorage(STORAGE_KEYS.STATS, state.stats);
      setStorage(STORAGE_KEYS.HISTORY, state.examHistory);
      renderDesempenhoView();
      renderHomeDashboard();
    }
  });
});

// ==========================================
// 13. TELA DE BUSCA DE QUESTÕES
// ==========================================
function renderBuscaView() {
  const input = document.getElementById('search-input');
  const select = document.getElementById('search-materia-filter');
  const counter = document.getElementById('search-results-counter');
  const container = document.getElementById('search-results-container');
  const btnClear = document.getElementById('btn-clear-search');

  if (!input || !container) return;

  const query = (input.value || '').toLowerCase().trim();
  const selectedMateria = select ? select.value : 'all';

  if (btnClear) {
    btnClear.style.display = query.length > 0 ? 'block' : 'none';
  }

  const all = getAllQuestions();
  const filtered = all.filter(q => {
    if (selectedMateria !== 'all' && q.materia !== selectedMateria) return false;
    if (!query) return true;

    const inEnunciado = q.enunciado.toLowerCase().includes(query);
    const inComentario = (q.comentario || '').toLowerCase().includes(query);
    const inRef = (q.referencia || '').toLowerCase().includes(query);
    const inAlts = Object.values(q.alternativas).some(alt => alt.toLowerCase().includes(query));

    return inEnunciado || inComentario || inRef || inAlts;
  });

  if (counter) {
    counter.textContent = `Exibindo ${filtered.length} de ${all.length} questões encontradas`;
  }

  container.innerHTML = '';
  if (filtered.length === 0) {
    container.innerHTML = '<p style="color: var(--text-muted); text-align: center; padding: 24px;">Nenhuma questão encontrada para a busca informada.</p>';
    return;
  }

  // Renderiza primeiras 30 para desempenho veloz
  filtered.slice(0, 30).forEach(q => {
    const card = document.createElement('div');
    card.className = 'error-item-card';
    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
        <span class="tag-materia">${q.materia}</span>
        <span class="tag-diff">${q.dificuldade}</span>
      </div>
      <p style="font-size: 0.95rem; font-weight: 500; margin-bottom: 12px; line-height: 1.5;">
        <strong>Q.${q.id}:</strong> ${q.enunciado}
      </p>
      
      <details style="cursor: pointer; font-size: 0.88rem; background: var(--bg-subtle); padding: 10px 14px; border-radius: var(--radius-sm);">
        <summary style="font-weight: 600; color: var(--primary);">Ver Alternativas e Gabarito Comentado</summary>
        <div style="margin-top: 10px; display: flex; flex-direction: column; gap: 4px;">
          ${Object.entries(q.alternativas).map(([letra, texto]) => `
            <div style="${letra === q.resposta_correta ? 'color: var(--color-success); font-weight: 700;' : ''}">
              ${letra}) ${texto}
            </div>
          `).join('')}
        </div>
        <div style="margin-top: 12px; border-top: 1px solid var(--border-color); padding-top: 8px;">
          <strong>Comentário:</strong> ${q.comentario}
          <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 4px;"><strong>Referência:</strong> ${q.referencia}</div>
        </div>
      </details>
    `;
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const searchFilter = document.getElementById('search-materia-filter');
  const btnClear = document.getElementById('btn-clear-search');

  if (searchInput) {
    searchInput.addEventListener('input', () => renderBuscaView());
  }
  if (searchFilter) {
    searchFilter.addEventListener('change', () => renderBuscaView());
  }
  if (btnClear) {
    btnClear.addEventListener('click', () => {
      searchInput.value = '';
      renderBuscaView();
    });
  }
});

// ==========================================
// 14. UTILITÁRIOS & ATALHOS GERAIS
// ==========================================
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Inicialização Principal
document.addEventListener('DOMContentLoaded', () => {
  // Configura tema
  applyTheme(state.theme);
  document.getElementById('btn-theme-toggle')?.addEventListener('click', () => {
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
  });

  // Configura logo para voltar à home
  document.getElementById('brand-logo')?.addEventListener('click', () => {
    navigateTo('home');
  });

  // Navegação nas abas
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.getAttribute('data-view');
      if (view) navigateTo(view);
    });
  });

  // Ações da Hero Card
  document.getElementById('btn-quick-full-exam')?.addEventListener('click', () => {
    startSimulado(50, 'Simulado Geral FHCGV');
  });
  document.getElementById('btn-quick-fast-exam')?.addEventListener('click', () => {
    startSimulado(20, 'Simulado Expresso');
  });

  // Botão Caderno de Erros na tela de simulados
  document.getElementById('btn-start-errors-exam')?.addEventListener('click', () => {
    startErrorsExam();
  });

  // Carrega Dashboard inicial
  navigateTo('home');
});
