import React from 'react';
import { 
  Sparkles, 
  Brain, 
  Target, 
  BookOpen, 
  Award, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  Zap, 
  ShieldCheck, 
  Activity,
  ChevronRight,
  TrendingUp,
  FileCheck,
  Building2,
  Users
} from 'lucide-react';

interface LandingPageProps {
  onOpenLogin: () => void;
  setActiveTab: (tab: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onOpenLogin, setActiveTab }) => {
  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <section id="hero" className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
        
        {/* Background Glow Patterns */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/30 text-blue-400 text-xs font-semibold shadow-lg shadow-blue-500/10">
                <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
                <span>AI-Powered Skill Intelligence Platform</span>
              </div>

              {/* Main Heading */}
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Build Skills. <br />
                <span className="gradient-text">Close Gaps.</span> <br />
                Empower India's Workforce.
              </h1>

              {/* Description */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                SkillSetu uses AI to assess competencies, identify skill gaps, recommend personalized learning paths, and generate intelligent assessments for India's official statistical ecosystem.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
                <button
                  onClick={onOpenLogin}
                  className="px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-xl shadow-blue-600/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
                >
                  <span>Explore Platform</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="#how-it-works"
                  className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 transition-colors text-center"
                >
                  How It Works
                </a>
              </div>

              {/* Metric stats */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80">
                <div>
                  <p className="text-2xl font-bold font-heading text-white">94%</p>
                  <p className="text-xs text-slate-400">Gap Accuracy</p>
                </div>
                <div>
                  <p className="text-2xl font-bold font-heading text-white">12,000+</p>
                  <p className="text-xs text-slate-400">Officials Assessed</p>
                </div>
                <div>
                  <p className="text-2xl font-bold font-heading text-white">3.5x</p>
                  <p className="text-xs text-slate-400">Faster Skill Gain</p>
                </div>
              </div>

            </div>

            {/* Right Dashboard Animated Preview */}
            <div className="lg:col-span-5 relative">
              
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Glass Card Preview */}
                <div className="glass-card rounded-2xl p-6 shadow-2xl space-y-6 relative overflow-hidden border-slate-700/50">
                  
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                        <Activity className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-sm text-white">Live Competency Profile</h4>
                        <p className="text-[11px] text-slate-400">National Statistical Service</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
                      Active Profile
                    </span>
                  </div>

                  {/* Overall Competency Ring */}
                  <div className="flex items-center justify-between bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                    <div>
                      <p className="text-xs text-slate-400 font-medium">Overall Competency Score</p>
                      <p className="text-3xl font-extrabold text-white font-heading mt-0.5">78%</p>
                    </div>
                    <div className="w-16 h-16 rounded-full border-4 border-slate-800 border-t-blue-500 border-r-indigo-500 flex items-center justify-center font-bold text-xs text-blue-400">
                      +12%
                    </div>
                  </div>

                  {/* Skill Gap Analysis Bar */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-slate-300">Data Analytics & Inference</span>
                      <span className="text-blue-400">Gap: 20%</span>
                    </div>
                    <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full w-[65%]" />
                    </div>

                    <div className="flex justify-between text-xs font-medium pt-1">
                      <span className="text-slate-300">Machine Learning & Modeling</span>
                      <span className="text-purple-400">Gap: 30%</span>
                    </div>
                    <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full w-[45%]" />
                    </div>
                  </div>

                  {/* Recommended Learning Floating Badge */}
                  <div className="bg-blue-950/40 border border-blue-500/30 p-3.5 rounded-xl flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <BookOpen className="w-4 h-4 text-blue-400" />
                      <span className="text-xs font-medium text-slate-200">Recommended: Advanced Sampling</span>
                    </div>
                    <span className="text-[10px] font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded">
                      AI MATCH
                    </span>
                  </div>

                </div>

                {/* Floating Card 1 */}
                <div className="absolute -bottom-6 -left-6 bg-slate-900/90 border border-slate-700/80 p-4 rounded-xl shadow-xl backdrop-blur-xl flex items-center space-x-3 text-left animate-float">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Assessment Score</p>
                    <p className="text-sm font-bold text-white">92/100 (Pass)</p>
                  </div>
                </div>

                {/* Floating Card 2 */}
                <div className="absolute -top-6 -right-4 bg-slate-900/90 border border-slate-700/80 p-4 rounded-xl shadow-xl backdrop-blur-xl flex items-center space-x-3 text-left">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">AI Gap Analyzer</p>
                    <p className="text-xs font-semibold text-purple-300">4 Gaps Identified</p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </section>


      {/* 2. PROBLEM SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
            Learning content is not enough. <br />
            <span className="gradient-text">Intelligence makes learning personal.</span>
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Traditional training programs struggle with high heterogeneity in public sector workforce skills.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "One-size-fits-all learning",
              desc: "Generic curriculum ignores individual skill backgrounds, forcing experienced officers into repetitive basic courses.",
              icon: Layers,
            },
            {
              title: "Hidden competency gaps",
              desc: "Without diagnostic profiling, critical gaps in modern data analytics & GIS remain unnoticed.",
              icon: Target,
            },
            {
              title: "Difficult progress tracking",
              desc: "Fragmented systems lack centralized real-time tracking of workforce capability growth.",
              icon: BarChart3,
            },
            {
              title: "Manual assessment",
              desc: "Creating high-quality domain-specific assessments takes excessive faculty effort and time.",
              icon: FileCheck,
            },
          ].map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-6 hover:border-slate-700 transition-colors text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-base text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>


      {/* 3. HOW SKILLSETU WORKS */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            End-to-End Workflow
          </span>
          <h2 className="font-heading text-3xl font-extrabold text-white mt-3">
            How SkillSetu Works
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            A seamless four-step intelligent skill development cycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {[
            { step: '01', title: 'Build Learner Profile', desc: 'Captures current role, experience, educational background, and self-assessment data.' },
            { step: '02', title: 'Identify Skill Gaps', desc: 'AI engine compares profile against target competency matrix to isolate weak areas.' },
            { step: '03', title: 'Recommend Learning', desc: 'Generates structured personalized learning paths matching exact skill needs.' },
            { step: '04', title: 'Assess & Improve', desc: 'Provides automated AI quizzes, measures performance, and updates competency scores.' },
          ].map((st, i) => (
            <div key={i} className="relative bg-slate-900 border border-slate-800 rounded-xl p-6 text-left space-y-3">
              <span className="text-3xl font-extrabold text-blue-500/40 font-heading">{st.step}</span>
              <h3 className="font-heading font-bold text-lg text-white">{st.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{st.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* 4. FOUR AI ENGINES */}
      <section id="ai-engines" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-heading text-3xl font-extrabold text-white">
            Four AI Engines. <span className="gradient-text">One Intelligent Learning Platform.</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Purpose-built intelligence algorithms designed for domain-specific skill analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "1. Competency Profiler",
              desc: "Builds an intelligent profile of learner capabilities using self-assessments, past training history, and manager evaluations.",
              icon: Brain,
              tag: "Profiling Engine",
            },
            {
              title: "2. Skill-Gap Analyzer",
              desc: "Identifies missing and underdeveloped competencies by benchmarking against target role requirements.",
              icon: Target,
              tag: "Gap Detection",
            },
            {
              title: "3. Recommendation Engine",
              desc: "Creates personalized learning paths based on competency gaps, curating modules for maximum growth.",
              icon: Zap,
              tag: "Adaptive Learning",
            },
            {
              title: "4. AI Assessment Engine",
              desc: "Generates quizzes and assessments dynamically from uploaded learning materials and statistical textbooks.",
              icon: FileCheck,
              tag: "Automated Evaluation",
            },
          ].map((engine, idx) => {
            const EngineIcon = engine.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/40 transition-all text-left space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                    <EngineIcon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    {engine.tag}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl text-white">{engine.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{engine.desc}</p>
              </div>
            );
          })}
        </div>
      </section>


      {/* 5. iGOT INTEGRATION CONCEPT */}
      <section id="igot-integration" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 sm:p-12 text-center space-y-8">
          
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full">
              Architecture Concept
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-white">
              SkillSetu + iGOT Karmayogi
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              SkillSetu is designed as an intelligent AI layer that can work with existing digital learning ecosystems to enhance competency mapping and assessment precision.
            </p>
          </div>

          {/* Diagram Flow */}
          <div className="py-6 px-4 bg-slate-950/80 rounded-xl border border-slate-800 overflow-x-auto">
            <div className="flex items-center justify-between min-w-[700px] space-x-2 text-center">
              {[
                'Learner Profile',
                'SkillSetu AI Layer',
                'Competency Analysis',
                'Personalized Recommendations',
                'Learning Content',
                'AI Assessment',
                'Progress Analytics'
              ].map((step, index, arr) => (
                <React.Fragment key={index}>
                  <div className="px-3 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-xs font-semibold text-slate-200">
                    {step}
                  </div>
                  {index < arr.length - 1 && (
                    <ChevronRight className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <p className="text-[11px] text-slate-400 italic">
            * Conceptual integration architecture for hackathon prototype demonstration.
          </p>

        </div>
      </section>


      {/* 6. ABOUT SECTION */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
              Why SkillSetu?
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
              Transforming Statistical Capacity with AI Intelligence.
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              SkillSetu brings competency intelligence, personalized learning, assessment, and analytics together in one platform.
            </p>

            <div className="space-y-3 pt-2">
              {[
                'Personalized learning adapted to each official’s role',
                'AI-powered skill analysis for instant gap identification',
                'Continuous assessment with instant performance feedback',
                'Workforce analytics for ministry and departmental decision makers',
                'Scalable learning intelligence for statistical officers across India'
              ].map((benefit, i) => (
                <div key={i} className="flex items-start space-x-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-8 text-left space-y-6">
            <h3 className="font-heading text-xl font-bold text-white">Platform Overview</h3>
            <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
              <p>
                India's official statistical ecosystem handles critical national surveys, economic censuses, and macro indicator computations. Ensuring workforce capability aligns with modern data science, GIS, and statistical machine learning is essential.
              </p>
              <p>
                SkillSetu bridges traditional training with AI-driven precision, ensuring every official receives targeted, high-impact learning.
              </p>
            </div>
            <button
              onClick={onOpenLogin}
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors text-center"
            >
              Select Role & Launch Demo
            </button>
          </div>

        </div>
      </section>


      {/* 7. FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-purple-900/40 border border-blue-500/30 rounded-3xl p-10 sm:p-16 text-center space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
            Make learning smarter with SkillSetu.
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed">
            Turn competency data into personalized learning and measurable growth across all statistical cadres.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
            <button
              onClick={onOpenLogin}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-500/25 transition-all"
            >
              Get Started Now
            </button>
            <button
              onClick={onOpenLogin}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white bg-slate-900/80 border border-slate-700 transition-colors"
            >
              Explore Role Dashboards
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
