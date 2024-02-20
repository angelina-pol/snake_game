import store from "./MainStore";
class Food {

  constructor () {

  }

  makeFood = () => {
    const xCoordinate = Math.floor(Math.random() * (store.widthBord + 1));
    const yCoordinate = Math.floor(Math.random() * (store.heightBoard + 1));
    return [xCoordinate, yCoordinate];
  }

  eatingFood = () => {

  }

  deleteFood = () => {
    
  }

}

const food = new Food();

export default food;