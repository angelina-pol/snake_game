import './Arrow.css';
import Arrow from './Arrow';

type NavigationProps = {
}

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <div className="navigation">
      <table>
        <tr>
          <td></td>
          <td><Arrow  typeOfArrow="&#9650;"/></td>
          <td></td>
        </tr>
        <tr>
          <td><Arrow  typeOfArrow="&#9664;"/></td>
          <td></td>
          <td><Arrow  typeOfArrow="&#9654;"/></td>
        </tr>
        <tr>
          <td></td>
          <td><Arrow  typeOfArrow="&#9660;"/></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
};

export default Navigation;