import './Complexity.css';

type ComplexityProps = {
  complexity: string;
}

const Complexity: React.FC<ComplexityProps> = ({ complexity }) => {
  return (
    <div className="complexity">
      {complexity}
    </div>
  );
};

export default Complexity;