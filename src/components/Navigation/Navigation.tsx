import './Navigation.css';
import Arrow from './Arrow';
import { useState } from 'react';

type NavigationProps = {

}

const Navigation: React.FC<NavigationProps> = () => {
  const [typeBefore, setTypeBefore] = useState<string>('right');
  return (
    <div className="navigation">
      <table>
        <tr>
          <td></td>
          <td><Arrow  typeOfArrow="&#9650;" newType="up" typeBefore={typeBefore} setTypeBefore={setTypeBefore}/></td>
          <td></td>
        </tr>
        <tr>
          <td><Arrow  typeOfArrow="&#9664;" newType="left" typeBefore={typeBefore} setTypeBefore={setTypeBefore}/></td>
          <td></td>
          <td><Arrow  typeOfArrow="&#9654;" newType="right" typeBefore={typeBefore} setTypeBefore={setTypeBefore}/></td>
        </tr>
        <tr>
          <td></td>
          <td><Arrow  typeOfArrow="&#9660;" newType="down" typeBefore={typeBefore} setTypeBefore={setTypeBefore}/></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
};

export default Navigation;