import React from 'react';
import { Cpu, ShieldCheck, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenLogin: () => void;
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLogin, setActiveTab }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Col 1 */}
        <div className="md:col-span-1 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white">
              <Cpu className="w-5 h-5" />
            </div>
            <span className="font-heading font-extrabold text-xl text-white">SkillSetu</span>
          </div>
          <p className="text-xs leading-relaxed text-slate-400">
            AI-Powered Skill Intelligence & Learning Platform for India's Official Statistical Ecosystem.
          </p>
          <div className="inline-flex items-center space-x-2 text-[11px] font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Hackathon Prototype / Concept Project</span>
          </div>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-xs">
            {['hero', 'how-it-works', 'ai-engines', 'igot-integration', 'about'].map((sec) => (
              <li key={sec}>
                <a
                  href={`#${sec}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab('landing');
                    setTimeout(() => {
                      document.getElementById(sec)?.scrollIntoView({ behavior: 'smooth' });
                    }, 50);
                  }}
                  className="hover:text-blue-400 transition-colors capitalize"
                >
                  {sec.replace('-', ' ')}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Platform Roles</h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <button onClick={onOpenLogin} className="hover:text-blue-400 transition-colors text-left">
                Administrator Portal
              </button>
            </li>
            <li>
              <button onClick={onOpenLogin} className="hover:text-blue-400 transition-colors text-left">
                Statistical Official Portal
              </button>
            </li>
            <li>
              <button onClick={onOpenLogin} className="hover:text-blue-400 transition-colors text-left">
                Faculty & Trainer Portal
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Disclaimer</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            This platform is an AI hackathon demonstration prototype created to showcase intelligent skill mapping for workforce empowerment. It does not store real government credentials or claim official endorsement.
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-slate-900 text-center text-xs text-slate-400">
        <p>© 2026 SkillSetu. Built for Hackathon Demonstration. All rights reserved.</p>
      </div>
    </footer>
  );
};
