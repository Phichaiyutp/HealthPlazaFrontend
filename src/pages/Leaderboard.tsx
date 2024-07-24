import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const colors = [
  'bg-red-500',
  'bg-yellow-500',
  'bg-green-500',
  'bg-blue-500',
  'bg-indigo-500',
  'bg-purple-500',
  'bg-pink-500',
  'bg-teal-500',
  'bg-orange-500',
  'bg-cyan-500'
];

const Leaderboard: React.FC = () => {
  const [scores, setScores] = useState<{ name: string; score: number }[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedScores = localStorage.getItem('leaderboard');
    if (storedScores) {
      const parsedScores = JSON.parse(storedScores);
      const topScores = parsedScores.sort((a: { score: number }, b: { score: number }) => b.score - a.score).slice(0, 10);
      setScores(topScores);
    }
  }, []);

  const maxScore = scores.length > 0 ? Math.max(...scores.map(score => score.score)) : 1;

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
      <ul className="list-none p-0">
        {scores.length > 0 ? (
          scores.map((score, index) => (
            <li key={index} className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-lg">{score.name}</span>
                <span className="font-bold text-primary">{score.score}</span>
              </div>
              <div className="relative w-full bg-gray-200 rounded-full h-4">
                <div
                  className={`absolute top-0 left-0 h-full rounded-full ${colors[index % colors.length]}`}
                  style={{ width: `${(score.score / maxScore) * 100}%` }}
                ></div>
              </div>
            </li>
          ))
        ) : (
          <li className="text-lg">No scores yet</li>
        )}
      </ul>
      <button
        className="btn btn-primary w-full"
        onClick={() => navigate('/')}
      >
        Take the quiz again
      </button>
    </div>
  );
};

export default Leaderboard;
