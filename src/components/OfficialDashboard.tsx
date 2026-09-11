import React, { useState } from 'react';
import { 
  User, 
  Target, 
  BookOpen, 
  Award, 
  TrendingUp, 
  LogOut, 
  Play, 
  CheckCircle2, 
  AlertCircle, 
  Brain, 
  BarChart2, 
  Sparkles, 
  ChevronRight, 
  RotateCcw,
  CheckCircle,
  XCircle,
  Clock
} from 'lucide-react';
import { UserProfile } from '../types';
import { mockCompetencyCategories, mockLearningCourses, mockQuizAssessment } from '../data/mockData';

interface OfficialDashboardProps {
  currentUser: UserProfile;
  onLogout: () => void;
}

export const OfficialDashboard: React.FC<OfficialDashboardProps> = ({ currentUser, onLogout }) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'skill-gaps' | 'learning-path' | 'assessment'>('dashboard');
  
  // Quiz State
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const handleSelectOption = (questionId: number, optionIdx: number) => {
    if (quizSubmitted) return;
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIdx }));
  };

  const handleQuizSubmit = () => {
    let score = 0;
    mockQuizAssessment.questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        score += 25;
      }
    });
    setQuizScore(score);
    setQuizSubmitted(true);
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setCurrentQuestionIdx(0);
    setQuizScore(0);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col lg:flex-row">
      
      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col justify-between flex-shrink-0">
        <div className="space-y-6">
          
          <div className="flex items-center space-x-3 pb-4 border-b border-slate-800">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-white text-sm">Official Portal</h3>
              <p className="text-[11px] text-indigo-400">Statistical Cadre</p>
            </div>
          </div>

          <nav className="space-y-1 text-xs font-semibold">
            {[
              { id: 'dashboard', label: 'Dashboard Overview', icon: BarChart2 },
              { id: 'skill-gaps', label: 'Skill Gap Analysis', icon: Target },
              { id: 'learning-path', label: 'Personalized Learning', icon: BookOpen },
              { id: 'assessment', label: 'AI Skill Assessments', icon: Award },
            ].map((item) => {
              const IconComp = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as any)}
                  className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl transition-colors text-left ${
                    isActive 
                      ? 'bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-600/20' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-800">
          <button
            onClick={onLogout}
            className="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-red-400 hover:bg-red-500/10 transition-colors text-xs font-semibold"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout Portal</span>
          </button>
        </div>
      </aside>

      {/* Main Area */}
      <main className="flex-1 p-6 sm:p-8 overflow-y-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <span className="text-xs text-indigo-400 font-semibold uppercase tracking-wider">Learner Dashboard</span>
            <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              Welcome back, {currentUser.name}
            </h1>
            <p className="text-xs text-slate-400 mt-1">{currentUser.designation} • {currentUser.department}</p>
          </div>

          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setActiveTab('assessment')}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/20 flex items-center space-x-2"
            >
              <Award className="w-4 h-4" />
              <span>Take Assessment</span>
            </button>
          </div>
        </div>


        {/* TAB 1: DASHBOARD OVERVIEW */}
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            
            {/* Top Score Banner */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-gradient-to-br from-indigo-900/60 to-slate-900 border border-indigo-500/30 rounded-2xl p-6 flex items-center justify-between">
                <div>
                  <p className="text-xs text-indigo-300 font-semibold">Overall Competency Score</p>
                  <p className="text-4xl font-extrabold font-heading text-white mt-1">78%</p>
                  <p className="text-[11px] text-emerald-400 mt-1 flex items-center space-x-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>+8% gain in last 30 days</span>
                  </p>
                </div>
                <div className="w-20 h-20 rounded-full border-4 border-indigo-500/30 border-t-indigo-400 flex items-center justify-center font-bold text-lg text-white font-heading">
                  78%
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-slate-400 font-semibold">Identified Skill Gaps</p>
                  <p className="text-3xl font-extrabold font-heading text-white mt-1">3 Core Areas</p>
                  <p className="text-xs text-amber-400 mt-1">Machine Learning, GIS, Analytics</p>
                </div>
                <button 
                  onClick={() => setActiveTab('skill-gaps')}
                  className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold mt-4 text-left flex items-center space-x-1"
                >
                  <span>View Gap Analysis</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-slate-400 font-semibold">Active Learning Path</p>
                  <p className="text-3xl font-extrabold font-heading text-white mt-1">4 Modules</p>
                  <p className="text-xs text-slate-400 mt-1">2 modules in progress (55% done)</p>
                </div>
                <button 
                  onClick={() => setActiveTab('learning-path')}
                  className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold mt-4 text-left flex items-center space-x-1"
                >
                  <span>Continue Learning</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* AI Recommendation Banner */}
            <div className="bg-slate-900/90 border border-indigo-500/40 p-5 rounded-2xl flex items-start space-x-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0">
                <Brain className="w-5 h-5" />
              </div>
              <div className="space-y-1 text-left">
                <div className="flex items-center space-x-2">
                  <span className="font-heading font-bold text-sm text-white">AI Competency Insight</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    RECOMMENDATION
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  "Based on your competency profile, SkillSetu recommends focusing on Machine Learning and GIS."
                </p>
              </div>
            </div>

            {/* Quick Skills Progress List */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
              <h3 className="font-heading font-bold text-lg text-white">Competency Breakdown</h3>

              <div className="space-y-5">
                {mockCompetencyCategories.map((cat) => (
                  <div key={cat.id} className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="text-white">{cat.name}</span>
                      <div className="space-x-3">
                        <span className="text-slate-400">Current: {cat.currentLevel}%</span>
                        <span className="text-indigo-400">Target: {cat.requiredLevel}%</span>
                        <span className="text-amber-400 font-bold">Gap: {cat.gap}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-950 rounded-full h-2.5 overflow-hidden flex">
                      <div 
                        className="bg-indigo-500 h-2.5 rounded-l-full" 
                        style={{ width: `${cat.currentLevel}%` }} 
                      />
                      <div 
                        className="bg-amber-500/40 h-2.5 rounded-r-full" 
                        style={{ width: `${cat.gap}%` }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}


        {/* TAB 2: SKILL GAP ANALYSIS */}
        {activeTab === 'skill-gaps' && (
          <div className="space-y-8">
            
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
              <div>
                <h2 className="font-heading text-xl font-bold text-white">Comprehensive Skill-Gap Analysis</h2>
                <p className="text-xs text-slate-400 mt-1">Diagnostic breakdown comparing your verified capabilities against target benchmark role requirements.</p>
              </div>

              {/* AI Recommendation Banner */}
              <div className="bg-indigo-950/40 border border-indigo-500/30 p-4 rounded-xl flex items-center space-x-3">
                <Sparkles className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                <p className="text-xs text-slate-200">
                  <span className="font-bold text-white">AI Recommendation:</span> Based on your competency profile, SkillSetu recommends focusing on <span className="text-indigo-400 font-semibold">Machine Learning</span> and <span className="text-indigo-400 font-semibold">GIS & Spatial Analysis</span>.
                </p>
              </div>

              <div className="space-y-6 pt-4">
                {mockCompetencyCategories.map((cat) => (
                  <div key={cat.id} className="bg-slate-950 border border-slate-800 p-5 rounded-xl space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h4 className="font-heading font-bold text-sm text-white">{cat.name}</h4>
                        <p className="text-xs text-slate-400">Benchmark requirement for Statistical Officer Grade II</p>
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                        cat.status === 'proficient' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                        cat.status === 'moderate' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                        'bg-red-500/10 text-red-400 border border-red-500/20'
                      }`}>
                        {cat.status === 'proficient' ? 'Proficient' : cat.status === 'moderate' ? 'Moderate Gap' : 'Action Required'}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-2 text-center text-xs">
                      <div className="bg-slate-900 p-2.5 rounded-lg">
                        <p className="text-slate-400">Current Level</p>
                        <p className="text-base font-bold text-white">{cat.currentLevel}%</p>
                      </div>
                      <div className="bg-slate-900 p-2.5 rounded-lg">
                        <p className="text-slate-400">Required Target</p>
                        <p className="text-base font-bold text-indigo-400">{cat.requiredLevel}%</p>
                      </div>
                      <div className="bg-slate-900 p-2.5 rounded-lg">
                        <p className="text-slate-400">Competency Gap</p>
                        <p className="text-base font-bold text-amber-400">{cat.gap}%</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}


        {/* TAB 3: PERSONALIZED LEARNING PATH */}
        {activeTab === 'learning-path' && (
          <div className="space-y-8">
            
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
              <div>
                <h2 className="font-heading text-xl font-bold text-white">Your Personalized Learning Path</h2>
                <p className="text-xs text-slate-400 mt-1">Curated sequence of modules designed to close identified skill gaps step-by-step.</p>
              </div>

              <div className="space-y-4">
                {mockLearningCourses.map((course, index) => (
                  <div key={course.id} className="bg-slate-950 border border-slate-800 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-slate-700 transition-colors">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold text-sm flex-shrink-0 font-heading">
                        {index + 1}
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-semibold text-indigo-400">{course.category}</span>
                          <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">{course.level}</span>
                          <span className="text-[10px] text-slate-400">{course.duration}</span>
                        </div>
                        <h4 className="font-heading font-bold text-base text-white">{course.title}</h4>
                        <div className="flex items-center space-x-2 text-xs text-slate-400">
                          <span>Skills: {course.skillsAddressed.join(', ')}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 md:w-64 flex-shrink-0">
                      <div className="flex-1 space-y-1">
                        <div className="flex justify-between text-[11px] font-semibold text-slate-400">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden">
                          <div className="bg-indigo-500 h-2 rounded-full" style={{ width: `${course.progress}%` }} />
                        </div>
                      </div>
                      <button className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center space-x-1 flex-shrink-0">
                        <Play className="w-3.5 h-3.5" />
                        <span>{course.progress > 0 ? 'Resume' : 'Start'}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}


        {/* TAB 4: OFFICIAL ASSESSMENT PAGE */}
        {activeTab === 'assessment' && (
          <div className="space-y-8">
            
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs text-indigo-400 font-semibold uppercase tracking-widest">Interactive Skill Assessment</span>
                  <h2 className="font-heading text-xl font-bold text-white mt-1">
                    {mockQuizAssessment.title}
                  </h2>
                </div>

                {!quizSubmitted && (
                  <div className="flex items-center space-x-2 text-xs text-slate-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                    <Clock className="w-4 h-4 text-indigo-400" />
                    <span>Time limit: {mockQuizAssessment.timeLimitMinutes} minutes</span>
                  </div>
                )}
              </div>

              {/* QUIZ IN PROGRESS */}
              {!quizSubmitted ? (
                <div className="space-y-8">
                  
                  {/* Question Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-semibold text-slate-400">
                      <span>Question {currentQuestionIdx + 1} of {mockQuizAssessment.totalQuestions}</span>
                      <span>Progress: {Math.round(((currentQuestionIdx + 1) / mockQuizAssessment.totalQuestions) * 100)}%</span>
                    </div>
                    <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-indigo-500 h-2 transition-all duration-300" 
                        style={{ width: `${((currentQuestionIdx + 1) / mockQuizAssessment.totalQuestions) * 100}%` }} 
                      />
                    </div>
                  </div>

                  {/* Question Prompt */}
                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-6">
                    <h3 className="font-heading font-bold text-lg text-white leading-relaxed">
                      {mockQuizAssessment.questions[currentQuestionIdx].question}
                    </h3>

                    {/* 4 Options */}
                    <div className="space-y-3">
                      {mockQuizAssessment.questions[currentQuestionIdx].options.map((optionText, optIdx) => {
                        const qId = mockQuizAssessment.questions[currentQuestionIdx].id;
                        const isSelected = selectedAnswers[qId] === optIdx;

                        return (
                          <div
                            key={optIdx}
                            onClick={() => handleSelectOption(qId, optIdx)}
                            className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between text-xs font-medium ${
                              isSelected
                                ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-lg shadow-indigo-500/10'
                                : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                            }`}
                          >
                            <span>{optionText}</span>
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                              isSelected ? 'border-indigo-400 bg-indigo-500 text-white' : 'border-slate-700'
                            }`}>
                              {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Action Navigation Buttons */}
                  <div className="flex items-center justify-between pt-2">
                    <button
                      disabled={currentQuestionIdx === 0}
                      onClick={() => setCurrentQuestionIdx(prev => prev - 1)}
                      className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:text-white disabled:opacity-40"
                    >
                      Previous
                    </button>

                    {currentQuestionIdx < mockQuizAssessment.totalQuestions - 1 ? (
                      <button
                        onClick={() => setCurrentQuestionIdx(prev => prev + 1)}
                        className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20"
                      >
                        Next Question
                      </button>
                    ) : (
                      <button
                        onClick={handleQuizSubmit}
                        className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20"
                      >
                        Submit Assessment
                      </button>
                    )}
                  </div>

                </div>
              ) : (
                
                /* QUIZ RESULT CARD */
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 text-center space-y-6">
                  
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <Award className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="font-heading font-extrabold text-2xl text-white">Assessment Complete!</h3>
                    <p className="text-slate-400 text-xs mt-1">Your competency evaluation has been calculated.</p>
                  </div>

                  <div className="max-w-md mx-auto bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs">
                      <span className="text-slate-400">Total Score</span>
                      <span className="text-2xl font-bold font-heading text-emerald-400">{quizScore} / 100</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Correct Answers</span>
                      <span className="font-semibold text-white">{quizScore / 25} of 4</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Evaluation Result</span>
                      <span className="font-semibold text-emerald-400">PASSED</span>
                    </div>
                  </div>

                  <div className="bg-indigo-950/30 border border-indigo-500/30 p-4 rounded-xl text-left space-y-2">
                    <h4 className="font-heading font-bold text-xs text-white">Areas to Improve & Recommended Modules:</h4>
                    <p className="text-xs text-slate-300">
                      Module: <span className="text-indigo-400 font-semibold">Advanced Machine Learning & Predictive Modeling</span>.
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={resetQuiz}
                      className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center space-x-2 mx-auto"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Retake Assessment</span>
                    </button>
                  </div>

                </div>
              )}

            </div>

          </div>
        )}

      </main>

    </div>
  );
};
