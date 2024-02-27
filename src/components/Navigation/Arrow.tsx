import './Arrow.css';
import store from '../../store/MainStore';
import { useState } from 'react';

type ArrowProps = {
  typeOfArrow: string;
  newType: string; 
}

const Arrow: React.FC<ArrowProps> = ({ typeOfArrow, newType }) => {
  return (
    <div className="arrow">
      <button className="button" onClick={() => store.changeDirection(newType)}>{typeOfArrow}</button>
    </div>
  );
};

export default Arrow;