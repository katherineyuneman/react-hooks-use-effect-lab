import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

useEffect(() => {
  const timer = setTimeout(() => timeoutCallback(), 1000);

  function timeoutCallback () {
    if (timeRemaining >0) {
      console.log("insidetime remaining if:", timeRemaining)
      const updatedTimeRemaining = timeRemaining - 1
      setTimeRemaining(updatedTimeRemaining)
    } else {
      console.log("inside else cleanup:", timeRemaining)
      return function cleanup(){
        clearTimeout(timer);
        onAnswered(false);
        setTimeRemaining(10);
        
      }
    }
  }
});

  

  function handleAnswer(isCorrect) {
    console.log(isCorrect)
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
