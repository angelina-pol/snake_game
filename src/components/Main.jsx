import './Main.css';
import Menu from './Menu/Menu';
import Board from './Board/Board';
import Navigation from './Navigation/Navigation';

function Main() {
  return (
    <div className="borderBackground">
      <div className="background">
        <div>
          <Menu />
        </div>
        <div className="board">
          <Board />
        </div>
        <div>
          <Navigation />
        </div>
      </div>
    </div>
  );
}

export default Main;
