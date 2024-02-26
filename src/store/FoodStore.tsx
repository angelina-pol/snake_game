import { makeAutoObservable, observable } from "mobx";
import store from "./MainStore";

class Food {
  xCoordinateStart = 3;
  yCoordinateStart = 8;

  xCoordinate = this.xCoordinateStart;
  yCoordinate = this.yCoordinateStart;

  constructor () {
    makeAutoObservable(this, {
      xCoordinate: observable,
      yCoordinate: observable,
    })
  };

  makeFood = () => {
    const xCoordinate = Math.floor(Math.random() * (store.widthBord));
    const yCoordinate = Math.floor(Math.random() * (store.heightBoard));
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
  };

  eatingFood = () => {

  };

  deleteFood = () => {

  };

  startGenerationFood = () => {
    let timerId = setInterval(() => this.makeFood(), 3000);
    return timerId;
  };
  /*
  endGenerationFood = (timerId: any) => {
    setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
  };
  */
};

const foodStore = new Food();

export default foodStore;