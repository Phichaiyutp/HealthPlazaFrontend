import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quiz from './pages/Quiz';
import Leaderboard from './pages/Leaderboard';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white py-4 fixed top-0 left-0 w-full z-50 shadow-md">
          <div className="container mx-auto flex items-center justify-between">
            <h1 className="pl-4 text-4xl font-bold">Quiz App</h1>
            <nav>
              <a href="/" className="text-white hover:underline mx-4">Quiz</a>
              <a href="/leaderboard" className="text-white hover:underline mx-4">Leaderboard</a>
            </nav>
          </div>
        </header>
        <main className="pt-16 container mx-auto p-6">
          <Routes>
            <Route path="/" element={<Quiz />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
