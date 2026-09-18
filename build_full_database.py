# -*- coding: utf-8 -*-
"""
Script unificador e validador do banco de dados completo do Simulado TST FHCGV.
Combina as 200 questões existentes com as 500 novas questões geradas,
totalizando 700 questões perfeitamente distribuídas e formatadas.
"""

import json
import random

from gen_nr32 import get_nr32_questions
from gen_nr32_perfuro import get_nr32_perfuro_questions
from gen_nr32_vacinacao_epi import get_nr32_vacinacao_epi_questions
from gen_nr32_quimico_fisico import get_nr32_quimico_fisico_questions
from gen_sus import get_sus_questions
from gen_nr01 import get_nr01_questions
from gen_nr07 import get_nr07_questions
from gen_nr15 import get_nr15_questions
from gen_nr06 import get_nr06_questions
from gen_nr17 import get_nr17_questions
from gen_residuos import get_residuos_questions
from gen_previdenciaria import get_previdenciaria_questions
from gen_portugues import get_portugues_questions

def build():
    # 1. Carregar questões existentes
    with open('questions.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    start_bracket = content.find('[')
    end_bracket = content.rfind(']')
    all_loaded = json.loads(content[start_bracket:end_bracket+1])
    original_200 = all_loaded[:200]
    print(f"Questões existentes carregadas: {len(original_200)}")

    # 2. Coletar todas as 500 novas questões
    new_raw = []
    
    # NR-32 (150 questões)
    q_nr32_bio = get_nr32_questions()              # 50
    q_nr32_perf = get_nr32_perfuro_questions()      # 40
    q_nr32_vac = get_nr32_vacinacao_epi_questions() # 30
    q_nr32_qf = get_nr32_quimico_fisico_questions() # 30
    print(f"NR-32: {len(q_nr32_bio)} + {len(q_nr32_perf)} + {len(q_nr32_vac)} + {len(q_nr32_qf)} = {len(q_nr32_bio)+len(q_nr32_perf)+len(q_nr32_vac)+len(q_nr32_qf)}")
    new_raw.extend(q_nr32_bio)
    new_raw.extend(q_nr32_perf)
    new_raw.extend(q_nr32_vac)
    new_raw.extend(q_nr32_qf)

    # Legislação SUS (80 questões)
    q_sus = get_sus_questions()                     # 80
    print(f"SUS: {len(q_sus)}")
    new_raw.extend(q_sus)

    # NR-01 (50 questões)
    q_nr01 = get_nr01_questions()                   # 50
    print(f"NR-01: {len(q_nr01)}")
    new_raw.extend(q_nr01)

    # NR-07 (40 questões)
    q_nr07 = get_nr07_questions()                   # 40
    print(f"NR-07: {len(q_nr07)}")
    new_raw.extend(q_nr07)

    # NR-15 (40 questões)
    q_nr15 = get_nr15_questions()                   # 40
    print(f"NR-15: {len(q_nr15)}")
    new_raw.extend(q_nr15)

    # NR-06 (30 questões)
    q_nr06 = get_nr06_questions()                   # 30
    print(f"NR-06: {len(q_nr06)}")
    new_raw.extend(q_nr06)

    # NR-17 (30 questões)
    q_nr17 = get_nr17_questions()                   # 30
    print(f"NR-17: {len(q_nr17)}")
    new_raw.extend(q_nr17)

    # Resíduos de Saúde (30 questões: 20 grupos + 10 PGRSS)
    all_residuos = get_residuos_questions()
    q_residuos = all_residuos[:20] + all_residuos[30:40]
    print(f"Resíduos: {len(q_residuos)}")
    for q in q_residuos:
        q['materia'] = "Resíduos de Saúde (RDC 222)"
    new_raw.extend(q_residuos)

    # Legislação Previdenciária (30 questões)
    q_prev = get_previdenciaria_questions()         # 30
    print(f"Previdenciária: {len(q_prev)}")
    new_raw.extend(q_prev)

    # Português (20 questões)
    q_port = get_portugues_questions()             # 20
    print(f"Português: {len(q_port)}")
    new_raw.extend(q_port)

    print(f"Total de novas questões coletadas: {len(new_raw)}")
    assert len(new_raw) == 500, f"Esperado 500 novas questões, obteve {len(new_raw)}"

    # 3. Processar alternativas e re-indexar de 201 a 700
    # Usar seed para reprodutibilidade consistente
    rng = random.Random(42)

    processed_500 = []
    current_id = 201
    
    for item in new_raw:
        orig_correct_letter = item['resposta_correta']
        correct_text = item['alternativas'][orig_correct_letter]
        
        # Obter todas as alternativas e embaralhar
        options = [
            item['alternativas']['A'],
            item['alternativas']['B'],
            item['alternativas']['C'],
            item['alternativas']['D'],
            item['alternativas']['E']
        ]
        rng.shuffle(options)
        
        letters = ['A', 'B', 'C', 'D', 'E']
        new_alt = {letter: text for letter, text in zip(letters, options)}
        
        # Descobrir a nova letra correta
        new_correct_letter = None
        for letter, text in new_alt.items():
            if text == correct_text:
                new_correct_letter = letter
                break
        
        assert new_correct_letter is not None, f"Erro ao localizar resposta correta na questão id {current_id}"

        processed_q = {
            "id": current_id,
            "materia": item['materia'],
            "dificuldade": item.get('dificuldade', 'média'),
            "enunciado": item['enunciado'],
            "alternativas": new_alt,
            "resposta_correta": new_correct_letter,
            "comentario": item['comentario'],
            "referencia": item.get('referencia', item['comentario'])
        }
        processed_500.append(processed_q)
        current_id += 1

    assert len(processed_500) == 500
    assert processed_500[0]['id'] == 201
    assert processed_500[-1]['id'] == 700

    # 4. Combinar tudo
    full_database = original_200 + processed_500
    print(f"Total final do banco de questões: {len(full_database)}")
    assert len(full_database) == 700

    # 5. Estatísticas das matérias
    mat_count = {}
    diff_count = {}
    ans_count = {}
    for q in full_database:
        m = q['materia']
        mat_count[m] = mat_count.get(m, 0) + 1
        d = q['dificuldade']
        diff_count[d] = diff_count.get(d, 0) + 1
        a = q['resposta_correta']
        ans_count[a] = ans_count.get(a, 0) + 1

    print("\n--- DISTRIBUIÇÃO POR MATÉRIA (700 QUESTÕES) ---")
    for m, c in sorted(mat_count.items()):
        print(f"  {m}: {c} questões")

    print("\n--- DISTRIBUIÇÃO POR RESPOSTA CORRETA ---")
    for a, c in sorted(ans_count.items()):
        pct = (c / len(full_database)) * 100
        print(f"  Gabarito {a}: {c} ({pct:.1f}%)")

    print("\n--- DISTRIBUIÇÃO POR DIFICULDADE ---")
    for d, c in sorted(diff_count.items()):
        pct = (c / len(full_database)) * 100
        print(f"  {d}: {c} ({pct:.1f}%)")

    # 6. Gravar questions.js
    header = """/**
 * BANCO DE DADOS COMPLETO - SIMULADO TST FHCGV
 * Fundação Hospital de Clínicas Gaspar Vianna (FHCGV/PA)
 * Cargo: Técnico em Segurança do Trabalho
 * Banca: Instituto Consulplan
 * 
 * Total: 700 questões comentadas e fundamentadas
 * - 200 questões de demonstração originais (IDs 1-200)
 * - 500 questões adicionais completas (IDs 201-700)
 */

const questions = """

    json_str = json.dumps(full_database, ensure_ascii=False, indent=2)
    footer = """;

// Compatibilidade para execução no navegador (PWA) e ambiente ES Module
if (typeof window !== 'undefined') {
  window.questions = questions;
  window.QUESTIONS_DATA = questions;
}

export default questions;
"""

    with open('questions.js', 'w', encoding='utf-8') as f:
        f.write(header + json_str + footer)

    print("\nquestions.js atualizado com sucesso com 700 questões!")

if __name__ == '__main__':
    build()
