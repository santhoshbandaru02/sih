import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LandingPage } from './components/LandingPage';
import { RoleLoginModal } from './components/RoleLoginModal';
import { AdminDashboard } from './components/AdminDashboard';
import { OfficialDashboard } from './components/OfficialDashboard';
import { FacultyDashboard } from './components/FacultyDashboard';
import { UserProfile } from './types';
import { ShieldCheck } from 'lucide-react';

const mockAdminUser: UserProfile = {
  id: 'adm-001',
  name: 'Dr. Rajesh Sharma',
  email: 'admin.nso@skillsetu.gov.in',
  role: 'admin',
  department: 'Ministry of Statistics & PI',
  designation: 'Director General (Data Analytics)',
};

const mockOfficialUser: UserProfile = {
  id: 'off-102',
  name: 'Ananya Verma',
  email: 'official.nso@skillsetu.gov.in',
  role: 'official',
  department: 'National Statistical Office (NSO)',
  designation: 'Senior Statistical Officer',
};

const mockFacultyUser: UserProfile = {
  id: 'fac-304',
  name: 'Prof. K. R. Venkat',
  email: 'faculty.isi@skillsetu.gov.in',
  role: 'faculty',
  department: 'Indian Statistical Institute',
  designation: 'Professor & Lead Trainer',
};

export function App() {
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [activeTab, setActiveTab] = useState<string>('landing');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Sync route based on URL path or hash
  const syncRouteFromUrl = () => {
    const hash = window.location.hash.replace('#', '');
    const pathname = window.location.pathname.replace('/', '');
    const search = window.location.search;

    if (hash === 'admin-dashboard' || pathname === 'admin-dashboard' || search.includes('role=admin')) {
      setCurrentUser(mockAdminUser);
      setActiveTab('admin-dashboard');
    } else if (hash === 'official-dashboard' || pathname === 'official-dashboard' || search.includes('role=official')) {
      setCurrentUser(mockOfficialUser);
      setActiveTab('official-dashboard');
    } else if (hash === 'faculty-dashboard' || pathname === 'faculty-dashboard' || search.includes('role=faculty')) {
      setCurrentUser(mockFacultyUser);
      setActiveTab('faculty-dashboard');
    } else if (hash === 'login' || search.includes('login')) {
      setIsLoginModalOpen(true);
    }
  };

  useEffect(() => {
    syncRouteFromUrl();
    window.addEventListener('hashchange', syncRouteFromUrl);
    return () => window.removeEventListener('hashchange', syncRouteFromUrl);
  }, []);

  const handleOpenLogin = () => {
    window.location.hash = 'login';
    setIsLoginModalOpen(true);
  };

  const handleSuccessLogin = (user: UserProfile) => {
    setCurrentUser(user);
    const targetTab = `${user.role}-dashboard`;
    setActiveTab(targetTab);
    window.location.hash = targetTab;
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setActiveTab('landing');
    window.location.hash = 'landing';
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.location.hash = tab;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Hackathon Prototype Top Banner */}
      <div className="bg-slate-900 border-b border-slate-800 py-1.5 px-4 text-center text-[11px] font-semibold text-slate-400 flex items-center justify-center space-x-2">
        <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
        <span>
          SkillSetu Prototype Demonstration — AI Skill Intelligence Platform for India's Official Statistical System
        </span>
      </div>

      {/* Main Navbar */}
      <Navbar
        currentUser={currentUser}
        onOpenLogin={handleOpenLogin}
        onLogout={handleLogout}
        activeTab={activeTab}
        setActiveTab={handleTabChange}
      />

      {/* Views Router */}
      <div className="flex-1">
        {activeTab === 'landing' && (
          <LandingPage
            onOpenLogin={handleOpenLogin}
            setActiveTab={handleTabChange}
          />
        )}

        {activeTab === 'admin-dashboard' && (
          <AdminDashboard
            currentUser={currentUser || mockAdminUser}
            onLogout={handleLogout}
          />
        )}

        {activeTab === 'official-dashboard' && (
          <OfficialDashboard
            currentUser={currentUser || mockOfficialUser}
            onLogout={handleLogout}
          />
        )}

        {activeTab === 'faculty-dashboard' && (
          <FacultyDashboard
            currentUser={currentUser || mockFacultyUser}
            onLogout={handleLogout}
          />
        )}
      </div>

      {/* Footer */}
      <Footer
        onOpenLogin={handleOpenLogin}
        setActiveTab={handleTabChange}
      />

      {/* Role Login Modal */}
      <RoleLoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSuccessLogin={handleSuccessLogin}
      />

    </div>
  );
}

export default App;
