import React from 'react';
import './Scoreboard.css';

const Scoreboard = (props) => {
  return (
  <div><span>Score: {props.score}</span> <span>Wins: {props.wins}</span></div>
  );
};

export default Scoreboard;