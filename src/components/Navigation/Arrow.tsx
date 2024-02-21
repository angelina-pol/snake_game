import './Arrow.css';

type ArrowProps = {
  typeOfArrow: string;
}

const Arrow: React.FC<ArrowProps> = ({ typeOfArrow  }) => {
  return (
    <div className="arrow">
      {typeOfArrow}
    </div>
  );
};

export default Arrow;