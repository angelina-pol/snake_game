import './Board.css';
import { observer } from 'mobx-react-lite';
import Square from './Square';
import store from '../../store/MainStore';
import Food from '../Food/Food';
import Snake from '../Snake/Snake';
import foodStore from '../../store/FoodStore';
import snakeStore from '../../store/SnakeStore';

type BoardProps = {

};

const Board: React.FC<BoardProps> = () => {

  const renderSquereContent = (i: number, j: number) => {
    if (i === foodStore.xCoordinate && j === foodStore.yCoordinate) {
      return <Food />;
    };
    for (let k = 0; k < snakeStore.snakeLocationMove.length; k++) {
      if (i === snakeStore.snakeLocationMove[k][1] && j === snakeStore.snakeLocationMove[k][0]) {
        return <Snake />;
      };
    }
  };

  const board = Array(store.widthBord)
    .fill(0)
    .map((item, i) => (
      <div>
        {Array(store.heightBoard)
          .fill(0)
          .map((item, j) => (
            <Square key={j + i} >
              {renderSquereContent(i, j)}
            </Square>
          ))}
      </div>
    ));

  return (
    <div className="main">
      <div className="board">
        {board}
      </div>
    </div>
  );
};

export default observer(Board);