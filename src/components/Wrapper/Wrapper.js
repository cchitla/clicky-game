import React, { useState } from 'react';
import './Wrapper.css';
import Scoreboard from '../Scoreboard/Scoreboard';
import ImageTiles from '../ImageTiles/ImageTiles';

import CardColumns from 'react-bootstrap/CardColumns';

import Characters from '../../matchChars.json';

// all state goes here
const Wrapper = () => {
  const [score, setScore] = useState(0);
  const [wins, setWins] = useState(0);

  const randomizeArray = (Characters) => {
    //return randomized array
  } 

  const setTiles = () => {
    randomizeArray(Characters)
    return (
      <>
        <ImageTiles handleClick={handleClick} img={Characters[0].img} id={Characters[0].id} isSelected={Characters[0].isSelected}/>
        <ImageTiles handleClick={handleClick} img={Characters[1].img} id={Characters[1].id} isSelected={Characters[1].isSelected}/>
        <ImageTiles handleClick={handleClick} img={Characters[2].img} id={Characters[2].id} isSelected={Characters[2].isSelected}/>
      </>
    );
  };

  const resetGame = () => {
    //setScore(0)
    //setTiles()
  };

  const handleClick = (e, isSelected, id) => {
    if (isSelected === false) {
      setScore(score + 1)
    };
    const arrIndex = Characters.findIndex(item => item.id === id);
    
    Characters[arrIndex].isSelected = true;
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