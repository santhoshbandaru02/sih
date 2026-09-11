import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Plus, 
  FileText, 
  Sparkles, 
  Users, 
  Award, 
  BarChart2, 
  LogOut, 
  Upload, 
  RefreshCw, 
  CheckCircle, 
  Loader2,
  Trash2,
  Edit,
  SlidersHorizontal
} from 'lucide-react';
import { UserProfile } from '../types';
import { mockLearningCourses } from '../data/mockData';

interface FacultyDashboardProps {
  currentUser: UserProfile;
  onLogout: () => void;
}

export const FacultyDashboard: React.FC<FacultyDashboardProps> = ({ currentUser, onLogout }) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'ai-generator' | 'courses' | 'learners'>('dashboard');
  
  // AI Quiz Generator Form State
  const [materialText, setMaterialText] = useState('Chapter 4: Stratified Random Sampling and Estimation in Official National Surveys...');
  const [topic, setTopic] = useState('Official Survey Sampling');
  const [questionCount, setQuestionCount] = useState(4);
  const [difficulty, setDifficulty] = useState('Intermediate');
  const [questionType, setQuestionType] = useState('Multiple Choice');

  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedQuestions, setGeneratedQuestions] = useState<any[] | null>(null);

  const handleGenerateAIQuiz = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedQuestions([
        {
          id: 1,
          question: `In ${topic}, what is the primary variance reduction advantage of stratified sampling over simple random sampling?`,
          options: [
            'A. Reduces sampling variance when strata are homogeneous internally.',
            'B. Eliminates non-response bias completely.',
            'C. Allows non-probability sampling of primary units.',
            'D. Requires no prior auxiliary information.'
          ],
          correct: 0,
        },
        {
          id: 2,
          question: 'Which estimator is unbiased under simple random sampling without replacement (SRSWOR)?',
          options: [
            'A. Horvitz-Thompson Estimator',
            'B. Ratio Estimator with small sample size',
            'C. Post-stratified unweighted mean',
            'D. Convenient sample median'
          ],
          correct: 0,
        }
      ]);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col lg:flex-row">
      
      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col justify-between flex-shrink-0">
        <div className="space-y-6">
          
          <div className="flex items-center space-x-3 pb-4 border-b border-slate-800">
            <div className="w-9 h-9 rounded-xl bg-purple-600 flex items-center justify-center text-white font-bold">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-white text-sm">Faculty Portal</h3>
              <p className="text-[11px] text-purple-400">Content & Assessments</p>
            </div>
          </div>

          <nav className="space-y-1 text-xs font-semibold">
            {[
              { id: 'dashboard', label: 'Faculty Dashboard', icon: BarChart2 },
              { id: 'ai-generator', label: 'AI Assessment Generator', icon: Sparkles },
              { id: 'courses', label: 'Course Management', icon: BookOpen },
              { id: 'learners', label: 'Learner Performance', icon: Users },
            ].map((item) => {
              const IconComp = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as any)}
                  className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl transition-colors text-left ${
                    isActive 
                      ? 'bg-purple-600 text-white font-bold shadow-lg shadow-purple-600/20' 
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

      {/* Main Container */}
      <main className="flex-1 p-6 sm:p-8 overflow-y-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <span className="text-xs text-purple-400 font-semibold uppercase tracking-wider">Faculty Studio</span>
            <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              Welcome, {currentUser.name}
            </h1>
            <p className="text-xs text-slate-400 mt-1">{currentUser.designation} • {currentUser.department}</p>
          </div>

          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setActiveTab('ai-generator')}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-lg shadow-purple-600/20 flex items-center space-x-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Generate AI Quiz</span>
            </button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Total Learners Monitored', value: '2,450', change: '+14% active', icon: Users },
            { label: 'Courses Created', value: '18', change: '4 new this term', icon: BookOpen },
            { label: 'AI Assessments Generated', value: '45', change: '840 submissions', icon: Award },
            { label: 'Average Performance', value: '84%', change: '+3.2% benchmark', icon: BarChart2 },
          ].map((stat, idx) => {
            const StatIcon = stat.icon;
            return (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[11px] font-medium">{stat.label}</span>
                  <StatIcon className="w-4 h-4 text-purple-400" />
                </div>
                <p className="text-2xl font-bold font-heading text-white">{stat.value}</p>
                <span className="text-[10px] font-semibold text-emerald-400">{stat.change}</span>
              </div>
            );
          })}
        </div>


        {/* TAB 1: FACULTY DASHBOARD OVERVIEW & COURSES */}
        {(activeTab === 'dashboard' || activeTab === 'courses') && (
          <div className="space-y-8">
            
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">Course Management</h3>
                  <p className="text-xs text-slate-400">Manage statistical learning content and training modules</p>
                </div>
                <button className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>Create Course</span>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-slate-950 text-slate-400 uppercase font-semibold text-[10px] tracking-wider border-b border-slate-800">
                    <tr>
                      <th className="py-3 px-4">Course Title</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Level</th>
                      <th className="py-3 px-4">Modules</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {mockLearningCourses.map((c) => (
                      <tr key={c.id} className="hover:bg-slate-800/40 transition-colors">
                        <td className="py-3 px-4 font-semibold text-white">{c.title}</td>
                        <td className="py-3 px-4 text-slate-400">{c.category}</td>
                        <td className="py-3 px-4">
                          <span className="bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded text-[10px] font-semibold border border-purple-500/20">
                            {c.level}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-300">{c.modulesCount} Modules</td>
                        <td className="py-3 px-4 text-right space-x-2">
                          <button className="text-purple-400 hover:text-purple-300">
                            <Edit className="w-4 h-4 inline" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}


        {/* TAB 2: AI QUIZ GENERATOR */}
        {activeTab === 'ai-generator' && (
          <div className="space-y-8">
            
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AI Assessment Generator Tool</span>
                </div>
                <h2 className="font-heading text-2xl font-bold text-white">AI Assessment Generator</h2>
                <p className="text-xs text-slate-400 mt-1">Upload or paste course materials to generate domain-accurate statistical quizzes instantly.</p>
              </div>

              <form onSubmit={handleGenerateAIQuiz} className="space-y-6">
                
                {/* Learning Material Text Input */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-300">
                    Upload or Select Learning Material
                  </label>
                  <textarea
                    rows={4}
                    value={materialText}
                    onChange={(e) => setMaterialText(e.target.value)}
                    placeholder="Paste textbook chapter, survey methodology document, or lecture notes here..."
                    className="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                {/* Form Options Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300">Topic Title</label>
                    <input
                      type="text"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300">Number of Questions</label>
                    <select
                      value={questionCount}
                      onChange={(e) => setQuestionCount(Number(e.target.value))}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white"
                    >
                      <option value={2}>2 Questions</option>
                      <option value={4}>4 Questions</option>
                      <option value={10}>10 Questions</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300">Difficulty</label>
                    <select
                      value={difficulty}
                      onChange={(e) => setDifficulty(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white"
                    >
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-slate-300">Question Type</label>
                    <select
                      value={questionType}
                      onChange={(e) => setQuestionType(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white"
                    >
                      <option value="Multiple Choice">Multiple Choice</option>
                      <option value="True/False">True / False</option>
                    </select>
                  </div>

                </div>

                <button
                  type="submit"
                  disabled={isGenerating}
                  className="px-6 py-3 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-xl shadow-purple-600/20 transition-all flex items-center space-x-2 disabled:opacity-50"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Generating Quiz with AI...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Generate Quiz with AI</span>
                    </>
                  )}
                </button>

              </form>

              {/* GENERATED QUIZ PREVIEW CARD */}
              {generatedQuestions && (
                <div className="bg-slate-950 border border-purple-500/30 rounded-xl p-6 space-y-6 pt-6">
                  
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <h3 className="font-heading font-bold text-base text-white flex items-center space-x-2">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      <span>Generated Assessment Preview ({topic})</span>
                    </h3>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleGenerateAIQuiz({ preventDefault: () => {} } as any)}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center space-x-1"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Regenerate</span>
                      </button>
                      <button
                        onClick={() => alert('Assessment saved to Faculty course bank!')}
                        className="px-4 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold"
                      >
                        Save Assessment
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {generatedQuestions.map((q, i) => (
                      <div key={q.id} className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-3">
                        <p className="font-semibold text-xs text-white">Question {i + 1}: {q.question}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                          {q.options.map((opt: string, optIdx: number) => (
                            <div key={optIdx} className={`p-2.5 rounded-lg border ${optIdx === q.correct ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300 font-semibold' : 'bg-slate-950 border-slate-800'}`}>
                              {opt}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
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
