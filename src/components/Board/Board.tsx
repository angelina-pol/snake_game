import './Board.css';
import Square from './Square';

const Board = () => {
  const widthBord = 12;
  const heightBoard = 12;

  const column = <div>{Array(heightBoard).fill(0).map((item, index) => <Square key={index} />)}</div>;
  
  return (
    <div className="main">
      <div className="borderBackground">
        <div className="background">
          <div className="board">
            {Array(widthBord).fill(column)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;