import foodStore from "./FoodStore";
import snakeStore from "./SnakeStore";
class MainStore {
  widthBord = 12;
  heightBoard = 12;

  constructor () {

  }

  changeDirection = (type: string) => {
    if (type === 'up') {
      this.moveUp();
    }
    if (type === "left") {
      this.moveLeft();
    }
    if (type === "right") {
      this.moveRight();
    }
    if (type === "down") {
      this.moveDown();
    }
  }

  moveUp = () => {
    
  }

  moveLeft = () => {

  }

  moveRight = () => {
    
  }

  moveDown = () => {
    
  }
}

foodStore.startGenerationFood();
//foodStore.endGenerationFood(timerId);

const store = new MainStore();

export default store;