import './Score.css';

type ScoreProps = {
  score: number;
}

const Score: React.FC<ScoreProps> = ({ score }) => {
  return (
    <div className="score">
      Score: {score}
    </div>
  );
};

export default Score;