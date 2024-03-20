// Import necessary dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './users/pages/HomePage';
import ProblemsPage from './users/pages/ProblemsPage';
import LoginPage from './users/pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LeaderboardPage from './users/pages/LeaderboardPage';
import DashboardPage from './admin/pages/Dashboard';
import ProblemAddPage from './admin/pages/problem/ProblemAddPage';
import TestCaseManagementPage from './admin/pages/TestCaseManagementPage';
import ProblemsListPage from './admin/pages/problem/ProblemsList';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ManageProblem from './admin/ManageProblem';
import AdminDashboard from './admin/AdminDashboard';
import AdminDashboardPage from './pages/AdminDashboardPage';
import ManageProblemsPage from './pages/ManageProblemsPage';
import ManageUsersPage from './pages/ManageUsersPage';



// Define the App component
const App = () => {
  return (

    <Router>
      <div>
        <Header/>
        {/* Navigation component or links */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/problems" element={<ProblemsPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/problem_add" element={<ProblemAddPage />} />
          <Route path="/problems_list" element={<ProblemsListPage />} />
          <Route path="/testcase" element={<TestCaseManagementPage />} />
          <Route path="/manage_problem" element={<ManageProblemsPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="/manage_user" element={<ManageUsersPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

// Export the App component
export default App;

