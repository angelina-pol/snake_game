import './Navigation.css';
import Arrow from './Arrow';
import { useState } from 'react';

type NavigationProps = {

}

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <div className="navigation">
      <table>
        <tr>
          <td></td>
          <td><Arrow  typeOfArrow="&#9650;" newType="up"/></td>
          <td></td>
        </tr>
        <tr>
          <td><Arrow  typeOfArrow="&#9664;" newType="left"/></td>
          <td></td>
          <td><Arrow  typeOfArrow="&#9654;" newType="right"/></td>
        </tr>
        <tr>
          <td></td>
          <td><Arrow  typeOfArrow="&#9660;" newType="down"/></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
};

export default Navigation;