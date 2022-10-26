import React, { useState, useEffect } from 'react';
import Header from './components/Header/index.js';
import Square from './components/Square/index.js';
import './App.css';

function App() {

  const [ top, setTop ] = useState(0);
  const [ left, setLeft ] = useState(0);
  const [ score, setScore ] = useState(0);
  const [ difficultly, setDifficultly ] = useState('normal');

  function getRandomValue() {
    const randomValue = Math.floor(Math.random() * 80);
    return randomValue;
  }

  function setRandomPosition() {
    setTop(getRandomValue());
    setLeft(getRandomValue());
  }

  function clicked() {
    setScore(score + 1);
    setRandomPosition();
  }

  function restart() {
    setScore(0);
    setRandomPosition();
  }

  useEffect(() => {
    setRandomPosition();
  }, []);

  return (
    <>
      <Header score={score} restart={restart} difficultly={difficultly} onChange={(e)=> setDifficultly(e.target.value)}/>
      <main>
        <h1>Can you find the square ?</h1>
        <Square top={top} left={left} onClick={clicked} difficultly={difficultly} />
      </main>
    </>
  );
}

export default App;
