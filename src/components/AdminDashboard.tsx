import React, { useState } from 'react';
import { 
  Users, 
  BookOpen, 
  BarChart2, 
  Shield, 
  Settings, 
  FileText, 
  Award, 
  TrendingUp, 
  LogOut, 
  Plus, 
  Search, 
  Filter, 
  CheckCircle,
  AlertTriangle,
  BrainCircuit,
  PieChart
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line 
} from 'recharts';
import { UserProfile } from '../types';
import { mockAnalyticsSummary, mockAdminDistribution, mockCompletionTrends } from '../data/mockData';

interface AdminDashboardProps {
  currentUser: UserProfile;
  onLogout: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ currentUser, onLogout }) => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');

  const usersList = [
    { id: 'usr-1', name: 'Ananya Verma', email: 'ananya.verma@skillsetu.gov.in', role: 'Official', dept: 'NSO - Survey Div', status: 'Active', gap: 'High' },
    { id: 'usr-2', name: 'Dr. Rajesh Sharma', email: 'rajesh.sharma@skillsetu.gov.in', role: 'Administrator', dept: 'MOSPI Headquarters', status: 'Active', gap: 'Low' },
    { id: 'usr-3', name: 'Prof. K. R. Venkat', email: 'venkat.kr@skillsetu.gov.in', role: 'Faculty', dept: 'ISI Kolkata', status: 'Active', gap: 'None' },
    { id: 'usr-4', name: 'Suresh Kumar', email: 'suresh.k@skillsetu.gov.in', role: 'Official', dept: 'CSO Economic Statistics', status: 'Active', gap: 'Medium' },
    { id: 'usr-5', name: 'Priya Sundaram', email: 'priya.s@skillsetu.gov.in', role: 'Official', dept: 'DES Tamil Nadu', status: 'Active', gap: 'High' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col lg:flex-row">
      
      {/* Sidebar */}
      <aside className="w-full lg:w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col justify-between flex-shrink-0">
        <div className="space-y-6">
          
          <div className="flex items-center space-x-3 pb-4 border-b border-slate-800">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-white text-sm">Admin Portal</h3>
              <p className="text-[11px] text-blue-400">SkillSetu Management</p>
            </div>
          </div>

          <nav className="space-y-1 text-xs font-semibold">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: BarChart2 },
              { id: 'users', label: 'User Management', icon: Users },
              { id: 'competencies', label: 'Competency Management', icon: BrainCircuit },
              { id: 'courses', label: 'Course Management', icon: BookOpen },
              { id: 'skill-gaps', label: 'Skill Gap Analytics', icon: PieChart },
              { id: 'assessments', label: 'Assessments', icon: Award },
              { id: 'reports', label: 'Reports', icon: FileText },
              { id: 'settings', label: 'Settings', icon: Settings },
            ].map((item) => {
              const IconComp = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl transition-colors text-left ${
                    isActive 
                      ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/20' 
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
            <span>Logout System</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 sm:p-8 overflow-y-auto space-y-8">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">System Overview</span>
            <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              Welcome, Administrator
            </h1>
            <p className="text-xs text-slate-400 mt-1">{currentUser.name} • {currentUser.department}</p>
          </div>

          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/20 flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Add New User</span>
            </button>
          </div>
        </div>

        {/* Dashboard Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          {[
            { label: 'Total Users', value: mockAnalyticsSummary.totalUsers.toLocaleString(), change: '+8.4%', icon: Users },
            { label: 'Officials', value: mockAnalyticsSummary.officialsCount.toLocaleString(), change: '+10.2%', icon: Users },
            { label: 'Faculty', value: mockAnalyticsSummary.facultyCount.toLocaleString(), change: '+4.1%', icon: Users },
            { label: 'Courses', value: mockAnalyticsSummary.coursesCount, change: '+12', icon: BookOpen },
            { label: 'Assessments', value: mockAnalyticsSummary.assessmentsCount, change: '+45', icon: Award },
            { label: 'Skill Gaps', value: mockAnalyticsSummary.skillGapsIdentified.toLocaleString(), change: '-5.2%', icon: TrendingUp },
          ].map((stat, idx) => {
            const StatIcon = stat.icon;
            return (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-2">
                <div className="flex items-center justify-between text-slate-400">
                  <span className="text-[11px] font-medium">{stat.label}</span>
                  <StatIcon className="w-4 h-4 text-blue-400" />
                </div>
                <p className="text-xl font-bold font-heading text-white">{stat.value}</p>
                <span className="text-[10px] font-semibold text-emerald-400">{stat.change} vs last month</span>
              </div>
            );
          })}
        </div>

        {/* Recharts Data Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Chart 1 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-heading font-bold text-base text-white">Competency Score Distribution</h3>
                <p className="text-xs text-slate-400">Average score (%) across statistical domains</p>
              </div>
            </div>
            <div className="h-64 w-full pt-2">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockAdminDistribution}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="category" stroke="#94a3b8" fontSize={11} />
                  <YAxis stroke="#94a3b8" fontSize={11} domain={[0, 100]} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                  />
                  <Bar dataKey="level" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart 2 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-heading font-bold text-base text-white">Learning Completion Trends</h3>
                <p className="text-xs text-slate-400">Monthly course completions vs enrollments</p>
              </div>
            </div>
            <div className="h-64 w-full pt-2">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockCompletionTrends}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} />
                  <YAxis stroke="#94a3b8" fontSize={11} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                  />
                  <Line type="monotone" dataKey="completed" stroke="#10b981" strokeWidth={2} />
                  <Line type="monotone" dataKey="enrolled" stroke="#6366f1" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

        {/* User Management Section Table */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-heading font-bold text-lg text-white">User Management</h3>
              <p className="text-xs text-slate-400">Registered officers, administrators, and faculty across India</p>
            </div>

            <div className="flex items-center space-x-3">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search user..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9 pr-4 py-1.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950 text-slate-400 uppercase font-semibold text-[10px] tracking-wider border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">User</th>
                  <th className="py-3 px-4">Role</th>
                  <th className="py-3 px-4">Department</th>
                  <th className="py-3 px-4">Skill Gap Priority</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {usersList
                  .filter(u => u.name.toLowerCase().includes(searchTerm.toLowerCase()) || u.dept.toLowerCase().includes(searchTerm.toLowerCase()))
                  .map((usr) => (
                  <tr key={usr.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-semibold text-white">{usr.name}</p>
                        <p className="text-[11px] text-slate-400">{usr.email}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                        usr.role === 'Administrator' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' :
                        usr.role === 'Faculty' ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' :
                        'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                      }`}>
                        {usr.role}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-300">{usr.dept}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                        usr.gap === 'High' ? 'bg-red-500/10 text-red-400' :
                        usr.gap === 'Medium' ? 'bg-amber-500/10 text-amber-400' :
                        'bg-emerald-500/10 text-emerald-400'
                      }`}>
                        {usr.gap}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center space-x-1 text-emerald-400 font-semibold">
                        <CheckCircle className="w-3 h-3" />
                        <span>{usr.status}</span>
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button className="text-blue-400 hover:text-blue-300 font-semibold">
                        Manage
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

      </main>

    </div>
  );
};
