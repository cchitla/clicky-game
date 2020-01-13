import React, { useState } from 'react';
import './Wrapper.css';
import Scoreboard from '../Scoreboard/Scoreboard';
import ImageTiles from '../ImageTiles/ImageTiles';

import CardColumns from 'react-bootstrap/CardColumns';

import Characters from '../../matchChars.json'

// all state goes here
const Wrapper = () => {
  const [score, setScore] = useState(0);
  const [wins, setWins] = useState(0);

  const setTiles = () => {
    //randomize array and return 
    return (
      <>
        <ImageTiles handleClick={handleClick} img={Characters[0].img} />
        <ImageTiles handleClick={handleClick} img={Characters[1].img} />
        <ImageTiles handleClick={handleClick} img={Characters[2].img} />
      </>
    )
  }

  const resetGame = () => {
    //setScore(0)


  }

  const handleClick = () => {
    // if selected !== true
    setScore(score + 1)
    //

    // else if selected === true 
    // resetGame()

  };

  return (
    <>
      <Scoreboard score={score} wins={wins} />
      <CardColumns>
        {setTiles()}
      </CardColumns>
    </>
  );
};

export default Wrapper;