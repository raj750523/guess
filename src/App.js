import React, { useEffect, useState } from "react";




const App = () => {

  const [currChar] = useState({
    name: "",
    role: "",
    abilities: [],
    options: [],
  });

  const [score, setScore] = useState(0);

  const changeChar = (e) => {
    setScore(score-1);
  };

  const scoreHandler = (e) => {
    setScore(score+1)
   
  };

  useEffect(() => {
   
  });
  return (
    <div id="main">
      <div className="container">
        <h1 className="header">Guess the Character</h1>
        <div className="ques-area">
          <div className="score" id='score'>Score: {score}</div>
          <h3>The character has the following abilities:</h3>
          <h4>Role: Controller </h4>
          {currChar.abilities.join()}
          <div className="options">
             <button onClick={changeChar}>Sova</button>
              <button onClick={changeChar}>Breach</button>
              <button onClick={changeChar}>Raze</button>
              <button   onClick={scoreHandler}>Viper</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;