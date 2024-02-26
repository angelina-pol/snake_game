import './Arrow.css';
import store from '../../store/MainStore';

type ArrowProps = {
  typeOfArrow: string;
  newType: string;
  typeBefore: string;
  setTypeBefore: (newType: string) => void;
}

const Arrow: React.FC<ArrowProps> = ({ typeOfArrow, newType, typeBefore, setTypeBefore }) => {
  setTypeBefore(newType);
  return (
    <div className="arrow">
      <button className="button" onClick={() => store.changeDirection(newType, typeBefore)}>{typeOfArrow}</button>
    </div>
  );
};

export default Arrow;