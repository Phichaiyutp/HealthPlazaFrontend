import React, { useState } from "react";

interface QuestionProps {
  question: string;
  answers: string[];
  onAnswer: (answer: string) => void;
  questionIndex: number;
  totalQuestions: number;
}

const Question: React.FC<QuestionProps> = ({
  question,
  answers,
  onAnswer,
  questionIndex,
  totalQuestions,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    setSelectedAnswer(selectedValue);
    onAnswer(selectedValue);
  };

  const optionLabels = ["A", "B", "C", "D"];

  return (
    <div className="p-4 border border-gray-300 rounded-lg bg-white shadow-sm">
      <h2 className="text-xl font-semibold mb-2">
        คำถามข้อที่ {questionIndex + 1}/{totalQuestions}
      </h2>
      <p className="mb-4">{question}</p>
      <div className="space-y-2">
        {answers.map((answer, index) => (
          <label
            key={index}
            className={`flex items-center space-x-2 ${
              selectedAnswer === answer ? "text-primary" : ""
            }`}
          >
            <input
              type="radio"
              name={`question-${questionIndex}`}
              value={answer}
              checked={selectedAnswer === answer}
              onChange={handleAnswerChange}
              className="radio checked:bg-primary"
            />
            <span className="font-medium">{optionLabels[index]}:</span>
            <span>{answer}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Question;
