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
import AdminProblemsListPage from './pages/admin/problems/ProblemsListPage';
import ProblemCreatePage from './pages/admin/problems/ProblemCreatePage';
import TagsListPage from './pages/admin/tags/TagsListPage';
import TagCreatePage from './pages/admin/tags/TagCreatePage';
import CategoriesListPage from './pages/admin/categories/CategoriesListPage';
import CategoryCreatePage from './pages/admin/categories/CategoryCreatePage';
import ProblemDetailPage from './pages/users/ProblemDetailPage';
import TestCaseCreatePage from './pages/admin/testcases/TestCaseCreatePage';
import ProblemEditPage from './pages/admin/problems/ProblemEditPage';
import CategoryEditPage from './pages/admin/categories/CategoryEditPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import TagEditPage from './pages/admin/tags/TagEditPage';






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
          <Route path="/problem_list" element={<ProblemsListPage />} />
          <Route path="/testcase" element={<ManageTestcasePage />} />
          <Route path="/manage_user" element={<ManageUsersPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/admin_problem_list" element={<AdminProblemsListPage />} />
          <Route path="/problem_create" element={<ProblemCreatePage />} />

          <Route path="/tags_list" element={<TagsListPage />} />
          <Route path="/tag_create" element={<TagCreatePage />} />
          <Route path="/tag_edit/:id" element={<TagEditPage />} />


          <Route path="/categories_list" element={<CategoriesListPage />} />
          <Route path="/category_create" element={<CategoryCreatePage />} />
          <Route path="/problem_detail/:id" element={<ProblemDetailPage />} />
          <Route path="/testcase_create" element={<TestCaseCreatePage />} />
          <Route path='/problem_edit/:id' element={<ProblemEditPage/>}/>
          <Route path='/category_edit/:id' element={<CategoryEditPage/>}/>
          <Route path='/admin_dashboard' element={<AdminDashboardPage/>}/>
          
 
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

// Export the App component
export default App;

