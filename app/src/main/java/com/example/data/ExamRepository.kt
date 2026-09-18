package com.example.data

import android.content.Context
import android.content.SharedPreferences
import com.example.model.ExamResult
import com.example.model.ExamType
import com.example.model.SubjectScore
import org.json.JSONArray
import org.json.JSONObject

class ExamRepository(context: Context) {
    private val prefs: SharedPreferences =
        context.getSharedPreferences("simulado_tst_fhcgv_prefs", Context.MODE_PRIVATE)

    // Keys
    private val KEY_RESULTS = "key_exam_results"
    private val KEY_WRONG_QUESTIONS = "key_wrong_questions"
    private val KEY_ACTIVE_EXAM_JSON = "key_active_exam_json"

    fun saveExamResult(result: ExamResult) {
        val currentResults = getExamResults().toMutableList()
        currentResults.add(0, result) // newest first

        val jsonArray = JSONArray()
        for (r in currentResults.take(100)) { // keep last 100
            val obj = JSONObject()
            obj.put("id", r.id)
            obj.put("examTitle", r.examTitle)
            obj.put("examType", r.examType.name)
            obj.put("timestamp", r.timestamp)
            obj.put("totalQuestions", r.totalQuestions)
            obj.put("correctCount", r.correctCount)
            obj.put("wrongCount", r.wrongCount)
            obj.put("unansweredCount", r.unansweredCount)
            obj.put("percentage", r.percentage.toDouble())
            obj.put("timeSpentSeconds", r.timeSpentSeconds)

            val breakdownObj = JSONObject()
            for ((k, v) in r.subjectBreakdown) {
                val sObj = JSONObject()
                sObj.put("total", v.total)
                sObj.put("correct", v.correct)
                sObj.put("percentage", v.percentage.toDouble())
                breakdownObj.put(k, sObj)
            }
            obj.put("breakdown", breakdownObj)
            jsonArray.put(obj)
        }

        prefs.edit().putString(KEY_RESULTS, jsonArray.toString()).apply()
    }

    fun getExamResults(): List<ExamResult> {
        val raw = prefs.getString(KEY_RESULTS, null) ?: return emptyList()
        val list = mutableListOf<ExamResult>()
        try {
            val jsonArray = JSONArray(raw)
            for (i in 0 until jsonArray.length()) {
                val obj = jsonArray.getJSONObject(i)
                val breakdownMap = mutableMapOf<String, SubjectScore>()
                if (obj.has("breakdown")) {
                    val bObj = obj.getJSONObject("breakdown")
                    val keys = bObj.keys()
                    while (keys.hasNext()) {
                        val key = keys.next()
                        val subObj = bObj.getJSONObject(key)
                        breakdownMap[key] = SubjectScore(
                            total = subObj.getInt("total"),
                            correct = subObj.getInt("correct"),
                            percentage = subObj.getDouble("percentage").toFloat()
                        )
                    }
                }

                list.add(
                    ExamResult(
                        id = obj.getString("id"),
                        examTitle = obj.getString("examTitle"),
                        examType = try {
                            ExamType.valueOf(obj.getString("examType"))
                        } catch (e: Exception) {
                            ExamType.FULL_SIMULADO
                        },
                        timestamp = obj.getLong("timestamp"),
                        totalQuestions = obj.getInt("totalQuestions"),
                        correctCount = obj.getInt("correctCount"),
                        wrongCount = obj.getInt("wrongCount"),
                        unansweredCount = obj.optInt("unansweredCount", 0),
                        percentage = obj.getDouble("percentage").toFloat(),
                        timeSpentSeconds = obj.getLong("timeSpentSeconds"),
                        subjectBreakdown = breakdownMap
                    )
                )
            }
        } catch (e: Exception) {
            e.printStackTrace()
        }
        return list
    }

    // Caderno de Erros (Wrong Questions)
    fun addWrongQuestions(questionIds: List<Int>) {
        val currentSet = getWrongQuestionIds().toMutableSet()
        currentSet.addAll(questionIds)
        saveWrongQuestionIds(currentSet)
    }

    fun removeWrongQuestion(questionId: Int) {
        val currentSet = getWrongQuestionIds().toMutableSet()
        currentSet.remove(questionId)
        saveWrongQuestionIds(currentSet)
    }

    fun getWrongQuestionIds(): Set<Int> {
        val raw = prefs.getString(KEY_WRONG_QUESTIONS, null) ?: return emptySet()
        val set = mutableSetOf<Int>()
        try {
            val array = JSONArray(raw)
            for (i in 0 until array.length()) {
                set.add(array.getInt(i))
            }
        } catch (e: Exception) {
            e.printStackTrace()
        }
        return set
    }

    private fun saveWrongQuestionIds(ids: Set<Int>) {
        val array = JSONArray()
        for (id in ids) {
            array.put(id)
        }
        prefs.edit().putString(KEY_WRONG_QUESTIONS, array.toString()).apply()
    }

    // Active in-progress exam session save/resume
    fun saveActiveExam(jsonString: String?) {
        if (jsonString == null) {
            prefs.edit().remove(KEY_ACTIVE_EXAM_JSON).apply()
        } else {
            prefs.edit().putString(KEY_ACTIVE_EXAM_JSON, jsonString).apply()
        }
    }

    fun getActiveExamJson(): String? {
        return prefs.getString(KEY_ACTIVE_EXAM_JSON, null)
    }

    fun clearAllData() {
        prefs.edit().clear().apply()
    }
}
