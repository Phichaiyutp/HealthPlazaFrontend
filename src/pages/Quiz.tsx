import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Question from "../components/Question";
import {
  Question as QuestionType,
  questions,
  explanation,
} from "../data/questions";

const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const [shuffledQuestions, setShuffledQuestions] = useState<QuestionType[]>(
    []
  );
  const [answers, setAnswers] = useState<Record<number, string | null>>({});
  const [showResults, setShowResults] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    const shuffledQuestions = [...questions]
      .map((q) => ({
        ...q,
        answers: [...q.answers].sort(() => Math.random() - 0.5),
      }))
      .sort(() => Math.random() - 0.5)
      .slice(0, 20); //limit 20 questions

    setShuffledQuestions(shuffledQuestions);
    setAnswers(
      shuffledQuestions.reduce(
        (acc, _, index) => ({ ...acc, [index]: null }),
        {}
      )
    );
  }, []);

  const handleAnswerChange = (questionIndex: number, answer: string) => {
    setAnswers({ ...answers, [questionIndex]: answer });
  };

  const handleSubmit = () => {
    let finalScore = 0;
    shuffledQuestions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        finalScore++;
      }
    });
    setScore(finalScore);
    saveScore(finalScore);
    setShowResults(true);
  };

  const saveScore = (finalScore: number) => {
    const playerName = prompt("Enter your name:") || "Anonymous";
    const newScore = { name: playerName, score: finalScore };
    const storedScores = localStorage.getItem("leaderboard");
    const scores = storedScores ? JSON.parse(storedScores) : [];
    scores.push(newScore);
    localStorage.setItem("leaderboard", JSON.stringify(scores));
  };

  if (showResults) {
    return (
      <div className="p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Quiz Finished!</h2>
        <p className="text-lg mb-6">Your score: <span className="text-primary font-semibold">{score}</span></p>
        <button
          className="btn btn-primary w-full mb-4"
          onClick={() => navigate("/leaderboard")}
        >
          View Leaderboard
        </button>
        <button
          className="btn btn-outline w-full"
          onClick={() => navigate("/")}
        >
          Take the Quiz Again
        </button>
      </div>
    );
  }

  if (shuffledQuestions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      {explanation && (
        <div className="mb-6 p-4 bg-gray-100 border border-gray-300 rounded-lg">
          <p className="text-gray-800">{explanation}</p>
        </div>
      )}
      {shuffledQuestions.map((question, index) => (
        <div key={index} className="mb-6">
          <Question
            question={question.question}
            answers={question.answers}
            onAnswer={(answer) => handleAnswerChange(index, answer)}
            questionIndex={index}
            totalQuestions={shuffledQuestions.length}
          />
          <hr className="my-4 border-gray-300" />
        </div>
      ))}
      <button className="btn btn-primary w-full mt-4" onClick={handleSubmit}>
        Submit Quiz
      </button>
    </div>
  );
};

export default Quiz;
