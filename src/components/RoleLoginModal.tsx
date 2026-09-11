import React, { useState } from 'react';
import { 
  Shield, 
  UserCheck, 
  GraduationCap, 
  ArrowLeft, 
  Eye, 
  EyeOff, 
  Lock, 
  Mail, 
  User, 
  Loader2, 
  AlertCircle,
  Sparkles,
  X
} from 'lucide-react';
import { RoleType, UserProfile } from '../types';

interface RoleLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessLogin: (user: UserProfile) => void;
}

export const RoleLoginModal: React.FC<RoleLoginModalProps> = ({
  isOpen,
  onClose,
  onSuccessLogin,
}) => {
  const [selectedRole, setSelectedRole] = useState<RoleType | null>(null);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const handleRoleSelect = (role: RoleType) => {
    setSelectedRole(role);
    setErrorMsg('');
    setSuccessMsg('');
    // Pre-fill demo emails for seamless reviewer experience
    if (role === 'admin') setIdentifier('admin.nso@skillsetu.gov.in');
    else if (role === 'official') setIdentifier('officials.csO@skillsetu.gov.in');
    else if (role === 'faculty') setIdentifier('faculty.isi@skillsetu.gov.in');
    setPassword('demo1234');
  };

  const handleBackToRoles = () => {
    setSelectedRole(null);
    setErrorMsg('');
    setSuccessMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!identifier.trim()) {
      setErrorMsg('Please enter your official email or ID.');
      return;
    }
    if (!password) {
      setErrorMsg('Please enter your password.');
      return;
    }

    setIsLoading(true);

    // Simulate backend auth call
    setTimeout(() => {
      setIsLoading(false);
      
      let userObj: UserProfile;

      if (selectedRole === 'admin') {
        userObj = {
          id: 'adm-001',
          name: 'Dr. Rajesh Sharma',
          email: identifier,
          role: 'admin',
          department: 'Ministry of Statistics & PI',
          designation: 'Director General (Data Analytics)',
        };
      } else if (selectedRole === 'official') {
        userObj = {
          id: 'off-102',
          name: 'Ananya Verma',
          email: identifier,
          role: 'official',
          department: 'National Statistical Office (NSO)',
          designation: 'Senior Statistical Officer',
        };
      } else {
        userObj = {
          id: 'fac-304',
          name: 'Prof. K. R. Venkat',
          email: identifier,
          role: 'faculty',
          department: 'Indian Statistical Institute',
          designation: 'Professor & Lead Trainer',
        };
      }

      setSuccessMsg(`Authentication successful! Logging in as ${userObj.name}...`);
      setTimeout(() => {
        onSuccessLogin(userObj);
        onClose();
        handleBackToRoles();
      }, 700);

    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl shadow-blue-950/50 overflow-hidden my-8">
        
        {/* Decorative Top Accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-10">
          
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SkillSetu Unified Access</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              {selectedRole ? `${selectedRole.toUpperCase()} LOGIN` : 'Welcome to SkillSetu'}
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              {selectedRole 
                ? 'Enter your credentials to access your personalized role dashboard.' 
                : 'Choose your role to continue to the AI Skill Intelligence Platform.'}
            </p>
          </div>

          {/* VIEW 1: ROLE SELECTION CARDS */}
          {!selectedRole ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* CARD 1: ADMINISTRATOR */}
              <div 
                onClick={() => handleRoleSelect('admin')}
                className="group relative bg-slate-950/60 border border-slate-800 hover:border-blue-500/50 rounded-xl p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white group-hover:text-blue-400 transition-colors">
                      Administrator
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mt-2">
                      Manage users, competencies, courses, analytics, and the overall SkillSetu platform.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <button className="w-full py-2.5 px-4 rounded-lg bg-slate-800 group-hover:bg-blue-600 text-slate-200 group-hover:text-white font-semibold text-xs transition-colors text-center">
                    Login as Administrator
                  </button>
                </div>
              </div>

              {/* CARD 2: OFFICIAL */}
              <div 
                onClick={() => handleRoleSelect('official')}
                className="group relative bg-slate-950/60 border border-slate-800 hover:border-indigo-500/50 rounded-xl p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white group-hover:text-indigo-400 transition-colors">
                      Official
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mt-2">
                      Assess your skills, discover competency gaps, follow personalized learning paths, and track your progress.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <button className="w-full py-2.5 px-4 rounded-lg bg-slate-800 group-hover:bg-indigo-600 text-slate-200 group-hover:text-white font-semibold text-xs transition-colors text-center">
                    Login as Official
                  </button>
                </div>
              </div>

              {/* CARD 3: FACULTY */}
              <div 
                onClick={() => handleRoleSelect('faculty')}
                className="group relative bg-slate-950/60 border border-slate-800 hover:border-purple-500/50 rounded-xl p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-white group-hover:text-purple-400 transition-colors">
                      Faculty
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mt-2">
                      Create and manage learning content, monitor learners, conduct assessments, and analyze training performance.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <button className="w-full py-2.5 px-4 rounded-lg bg-slate-800 group-hover:bg-purple-600 text-slate-200 group-hover:text-white font-semibold text-xs transition-colors text-center">
                    Login as Faculty
                  </button>
                </div>
              </div>

            </div>
          ) : (
            
            /* VIEW 2: LOGIN FORM FOR SELECTED ROLE */
            <div className="max-w-md mx-auto bg-slate-950/80 border border-slate-800 rounded-xl p-6 sm:p-8">
              
              {/* Back Button */}
              <button
                type="button"
                onClick={handleBackToRoles}
                className="inline-flex items-center space-x-1.5 text-xs text-slate-400 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to role selection</span>
              </button>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Error Banner */}
                {errorMsg && (
                  <div className="flex items-center space-x-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs animate-shake">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Success Banner */}
                {successMsg && (
                  <div className="flex items-center space-x-2 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs">
                    <Loader2 className="w-4 h-4 animate-spin flex-shrink-0" />
                    <span>{successMsg}</span>
                  </div>
                )}

                {/* Input 1: Email / Employee ID / Username */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-300">
                    {selectedRole === 'admin' && 'Official Email / Username'}
                    {selectedRole === 'official' && 'Official Email / Employee ID'}
                    {selectedRole === 'faculty' && 'Email / Faculty ID'}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      placeholder={
                        selectedRole === 'admin' ? 'admin@skillsetu.gov.in' :
                        selectedRole === 'official' ? 'official.nso@skillsetu.gov.in' :
                        'faculty.isi@skillsetu.gov.in'
                      }
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* Input 2: Password */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-300">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Lock className="w-4 h-4" />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-10 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-200"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Options: Remember me & Forgot Password */}
                <div className="flex items-center justify-between text-xs">
                  <label className="flex items-center space-x-2 text-slate-400 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="rounded bg-slate-900 border-slate-700 text-blue-600 focus:ring-blue-500"
                    />
                    <span>Remember me</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => alert('Demo prototype: Use default password to login.')}
                    className="text-blue-400 hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-4 rounded-lg font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Authenticating...</span>
                    </>
                  ) : (
                    <span>Login as {selectedRole?.toUpperCase()}</span>
                  )}
                </button>

                {/* Demo Credentials hint */}
                <div className="pt-2 text-center text-[11px] text-slate-500">
                  <span>Demo Mode: Pre-filled credentials ready. Click Login.</span>
                </div>

              </form>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
