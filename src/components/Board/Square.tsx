import './Square.css';

type SquareProps = React.PropsWithChildren<{
  
}>;

const Square: React.FC<SquareProps> = ({ children }) => {
  return (
    <div className="square">
      {children}
    </div>
  );
};

export default Square;