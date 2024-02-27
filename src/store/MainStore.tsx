import foodStore from "./FoodStore";
import snakeStore from "./SnakeStore";
class MainStore {
  widthBord = 12;
  heightBoard = 12;

  constructor () {

  }

  direction = () => snakeStore.moveRight();
  typeBefore = 'right';

  snakeMove = () => {
    setInterval(() => {
      this.direction();
    }, 400)
  }

  changeDirection = (type: string) => {
    if (type === 'up' && this.typeBefore !== 'down') {
      this.direction = () => snakeStore.moveUp();
      this.typeBefore = 'up';
    }
    if (type === "left" && this.typeBefore !== 'right') {
      this.direction = () => snakeStore.moveLeft();
      this.typeBefore = 'left';
    }
    if (type === "right" && this.typeBefore !== 'left') {
      this.direction = () => snakeStore.moveRight();
      this.typeBefore = 'right';
    }
    if (type === "down" && this.typeBefore !== 'up') {
      this.direction = () => snakeStore.moveDown();
      this.typeBefore = 'down';
    }
  }
}

foodStore.startGenerationFood();
//foodStore.endGenerationFood(timerId);

const store = new MainStore();

store.snakeMove();

export default store;