import './Main.css';
import Board from './Board/Board';
import Navigation from './Navigation/Navigation';

function Main() {
  return (
    <div className="borderBackground">
      <div className="background">
        <div>
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
