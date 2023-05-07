import React, { useState } from 'react';
import '../App.css';

const App = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const questions = [
    {
      questionText: 'The correct print statement in C is "printf()"?',
      answerOptions: [
        { answerText: 'True', isCorrect: false },
        { answerText: 'False', isCorrect: true },
      ],
    },
    {
      questionText: 'The correct print statement in Python is "print()"?',
      answerOptions: [
        { answerText: 'True', isCorrect: true },
        { answerText: 'False', isCorrect: false },
      ],
    },
    {
      questionText: 'The correct print statement in Java is "System.out.println()"?',
      answerOptions: [
        { answerText: 'True', isCorrect: true },
        { answerText: 'False', isCorrect: false },
      ],
    },
  ];

  const handleAnswer = (questionIndex, answerIndex) => {
    const updatedAnswers = { ...selectedAnswers, [questionIndex]: answerIndex };
    setSelectedAnswers(updatedAnswers);
  };

  return (
    <div className='app'>
      <div className='quiz'>
        {questions.map((question, questionIndex) => (
          <div key={questionIndex} className='question'>
            <div className='question-count'>Question {questionIndex + 1} of {questions.length}</div>
            <div className='question-text'>{question.questionText}</div>
            <div className='answer-options'>
              {question.answerOptions.map((answerOption, answerIndex) => {
                const isSelected = selectedAnswers[questionIndex] === answerIndex;
                return (
                  <button
                    key={answerIndex}
                    className={`answer-option${isSelected ? ' selected' : ''}`}
                    onClick={() => handleAnswer(questionIndex, answerIndex)}
                  >
                    {answerOption.answerText}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div>
        <h3>Selected Answers:</h3>
        <ul>
          {Object.entries(selectedAnswers).map(([questionIndex, answerIndex]) => {
            const question = questions[questionIndex];
            const selectedAnswer = question.answerOptions[answerIndex].answerText;
            return (
              <li key={questionIndex}>
                Question {Number(questionIndex) + 1}: {selectedAnswer}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
