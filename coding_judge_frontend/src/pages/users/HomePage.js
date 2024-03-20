// Import necessary dependencies
import React from 'react';

// Define the HomePage component
const HomePage = () => {
  return (
    <div>
       {/* Hero Section */}
       <section className="bg-blue-500 text-white text-center py-20">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome to Coding Judge</h1>
          <p className="text-lg mb-8">Solve coding problems, improve your skills, and compete with others!</p>
          <a href="/" className="bg-white text-blue-500 py-2 px-6 rounded-lg hover:bg-blue-400 hover:text-white">Get Started</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg">
              <i className="bi bi-code-slash text-6xl mb-4"></i>
              <h3 className="text-2xl font-bold mb-2">Solve Problems</h3>
              <p>Choose from a variety of coding problems and sharpen your skills.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg">
              <i className="bi bi-bar-chart text-6xl mb-4"></i>
              <h3 className="text-2xl font-bold mb-2">Track Progress</h3>
              <p>Monitor your progress and see how you're improving over time.</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg">
              <i className="bi bi-trophy text-6xl mb-4"></i>
              <h3 className="text-2xl font-bold mb-2">Compete</h3>
              <p>Participate in contests and climb up the leaderboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Discussion Section */}
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Join the Discussion</h2>
          <p className="text-lg mb-8">Connect with fellow coders, ask questions, share tips, and collaborate on projects.</p>
          <a href="/" className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 hover:text-white">Join Now</a>
        </div>
      </section>
    </div>
  );
};

// Export the HomePage component
export default HomePage;
