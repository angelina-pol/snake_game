import './Board.css';
import Square from './Square';
import store from '../../store/MainStore';

const Board = () => {

  const column = <div>{Array(store.heightBoard).fill(0).map((item, index) => <Square key={index} />)}</div>;
  
  return (
    <div className="main">
      <div className="board">
        {Array(store.widthBord).fill(column)}
      </div>
    </div>
  );
};

export default Board;