import './Menu.css';
import CounterLives from './CounterLives';
import Complexity from './Complexity';
import Score from './Score';

const Menu = () => {
  return (
    <div className="menu">
      <CounterLives count={4} />
      <Complexity complexity={"Medium"}/>
      <Score score={5} />
    </div>
  );
};

export default Menu;