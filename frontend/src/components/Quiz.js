import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const Quiz = (props) => {

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [questions, setQuestions] = useState([]);

  

  //useEffect to quesitons
  //after submit clicked, get all Selected asnwers u had

  /*
  const questions = [
    {
      questionText: 'Is the correct print statement in C equal to printf()',
      answerOptions: [
        { answerText: 'Yes', isCorrect: true },
        { answerText: 'No', isCorrect: false },
      ],
    },
    {
      questionText: 'Is the correct print statement in Python System.out.println()',
      answerOptions: [
        { answerText: 'Yes', isCorrect: false },
        { answerText: 'No', isCorrect: true },
      ],
    },
    {
      questionText: 'Is the correct print statement in Java System.out.println()',
      answerOptions: [
        { answerText: 'Yes', isCorrect: true },
        { answerText: 'No', isCorrect: false },
      ],
    },
  ];*/

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = JSON.stringify({
          username: props.username,
          topic: props.topic.UserAnswer,
          difficulty: props.topic.difficulty,
        });
        const response = await axios.post(
          'http://localhost:5000/dashboard',
          data,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        return response.data;
      } catch (error) {
        console.error(error);
        return [];
      }
    };
  
    const fetchQuestions = async () => {
      const data = await fetchData();
      setQuestions(
        data.map((jsonObj) => ({
          questionText: jsonObj.questionText,
          answerOptions: [
            { answerText: 'Yes', isCorrect: true },
            { answerText: 'No', isCorrect: false },
          ],
        }))
      );
    };
  
    fetchQuestions();
  }, []);
  

  const handleAnswer = (questionIndex, answerIndex) => {
    const updatedAns = { ...selectedAnswers, [questionIndex]: answerIndex };
    setSelectedAnswers(updatedAns);
  };

  const handleSubmit = async () => {
    const data = {
      selectedAnswers: selectedAnswers,
    };

    try {
      const response = await axios.post('/submit-quiz', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='app'>
      <div className='quiz'>
            {questions.map((question, questionIndex) => (
              <div key={questionIndex} className='question'>
                <div className='question-count'>Question {questionIndex + 1} of {questions.length}</div>
                <div className='question-text'>{question.questionText}</div>
                <div className='answer-options'>
                  {question.answerOptions.map((answerOption, answerIndex) => (
                    <button
                      key={answerIndex}
                      className={`answer-option ${selectedAnswers[questionIndex] === answerIndex ? 'selected' : ''}`}
                      onClick={() => handleAnswer(questionIndex, answerIndex)}
                    >
                      {answerOption.answerText}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <div className='btn-container'>
              <button className='show-score-btn' onClick={handleSubmit}>
                Submit
              </button>
            </div>
      </div>
    </div>
  );
};

export default Quiz;
