// Import necessary dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/common/RegisterPage';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ManageUsersPage from './pages/admin/ManageUsersPage';
import TestPage from './pages/users/Testpage';
import HomePage from './pages/users/HomePage';
import ProblemsListPage from './pages/users/ProblemListPage';
import LoginPage from './pages/common/LoginPage';
import LeaderboardPage from './pages/users/LeaderboardPage';
import ManageTestcasePage from './pages/admin/ManageTestcasePage';
import ManageProblemsPage from './pages/admin/ManageProblemsPage';
import AddProblem from './components/admin/AddProblem';







// Define the App component
const App = () => {
  return (

    <Router>
      <div>
        <Header/>
        {/* Navigation component or links */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/manage_problem" element={<ManageProblemsPage />} />
          <Route path="/problems" element={<ProblemsListPage />} />
          <Route path="/testcase" element={<ManageTestcasePage />} />
          <Route path="/manage_user" element={<ManageUsersPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/add_problem" element={<AddProblem />} />

        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

// Export the App component
export default App;

