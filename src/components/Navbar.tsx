import React, { useState } from 'react';
import { Cpu, Menu, X, LogIn, ChevronRight, Sparkles, Shield, UserCheck } from 'lucide-react';
import { UserProfile } from '../types';

interface NavbarProps {
  currentUser: UserProfile | null;
  onOpenLogin: () => void;
  onLogout: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentUser,
  onOpenLogin,
  onLogout,
  activeTab,
  setActiveTab,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setActiveTab('landing');
    setMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => setActiveTab('landing')}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform duration-300">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-heading font-extrabold text-2xl tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  SkillSetu
                </span>
                <span className="text-[10px] font-semibold tracking-widest px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase">
                  AI Platform
                </span>
              </div>
              <p className="text-[11px] text-slate-400 -mt-1 font-medium hidden sm:block">
                Statistical Ecosystem Skill Intelligence
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {[
              { id: 'hero', label: 'Home' },
              { id: 'how-it-works', label: 'How It Works' },
              { id: 'ai-engines', label: 'AI Features' },
              { id: 'igot-integration', label: 'Learning' },
              { id: 'about', label: 'About' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* User Auth Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {currentUser ? (
              <div className="flex items-center space-x-3 bg-slate-900/90 border border-slate-800 rounded-xl p-1.5 pr-4">
                <div className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-sm">
                  {currentUser.name.charAt(0)}
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-white leading-tight">{currentUser.name}</p>
                  <p className="text-[10px] text-blue-400 font-medium capitalize">{currentUser.role} Dashboard</p>
                </div>
                <button
                  onClick={() => setActiveTab(`${currentUser.role}-dashboard`)}
                  className="ml-2 text-xs text-slate-300 hover:text-white underline underline-offset-2"
                >
                  Dashboard
                </button>
                <button
                  onClick={onLogout}
                  className="px-2.5 py-1 text-xs rounded-md bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={onOpenLogin}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-800/80 transition-colors border border-slate-800 flex items-center space-x-2"
                >
                  <LogIn className="w-4 h-4 text-blue-400" />
                  <span>Login</span>
                </button>
                <button
                  onClick={onOpenLogin}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/20 transition-all flex items-center space-x-1.5 group"
                >
                  <span>Get Started</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {[
              { id: 'hero', label: 'Home' },
              { id: 'how-it-works', label: 'How It Works' },
              { id: 'ai-engines', label: 'AI Features' },
              { id: 'igot-integration', label: 'Learning' },
              { id: 'about', label: 'About' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-800 flex flex-col space-y-2">
            {currentUser ? (
              <button
                onClick={() => {
                  setActiveTab(`${currentUser.role}-dashboard`);
                  setMobileMenuOpen(false);
                }}
                className="w-full text-center py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm"
              >
                Go to Dashboard ({currentUser.role})
              </button>
            ) : (
              <button
                onClick={() => {
                  onOpenLogin();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm flex items-center justify-center space-x-2"
              >
                <LogIn className="w-4 h-4" />
                <span>Select Role & Login</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
