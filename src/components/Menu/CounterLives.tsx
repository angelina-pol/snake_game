import './CounterLives.css';

type CounterLivesProps = {
  count: number;
}

const CounterLives: React.FC<CounterLivesProps> = ({ count }) => {
  return (
    <div className="counterLives">
      &nbsp;<span className="heart">♥</span> &nbsp;x {count}
    </div>
  );
};

export default CounterLives;