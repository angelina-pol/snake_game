import { makeAutoObservable, observable } from "mobx";
import store from "./MainStore";

class Snake {
  startCountSquare = 3; //?

  xCoordinateStart = 5;
  y1CoordinateStart = 7;
  y2CoordinateStart = 6;
  y3CoordinateStart = 5;
  y4CoordinateStart = 4;
  y5CoordinateStart = 3;

  snakeLocationStart: number[][] = [                
    [this.xCoordinateStart, this.y1CoordinateStart], 
    [this.xCoordinateStart, this.y2CoordinateStart], 
    [this.xCoordinateStart, this.y3CoordinateStart], 
    [this.xCoordinateStart, this.y4CoordinateStart], 
    [this.xCoordinateStart, this.y5CoordinateStart], 
  ];

  snakeLocationMove: number[][] = [
    ...this.snakeLocationStart, 
  ];

  constructor () {
    makeAutoObservable(this, {
      snakeLocationMove: observable,
    });
  };

  snakeGrows = (el: number[]) => {
    this.snakeLocationMove.push(el);
  };

  deathOfSnake = () => {
    /*
    let dublicate: number[][] = [];
    dublicate = 
    if (dublicate.length !== this.snakeLocationMove) {
      return (alert("game over"));
    };
    */
  };
  /*
  arraysAreEqual = (arr1: [], arr2: []) => {
    for (let i = 0; arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    };
    return true;
  }
  */
  moveUp = () => {
    let coordinate = this.snakeLocationMove[0][0];
    if (coordinate <= 0) {
      coordinate = store.heightBoard - 1;
    } else {
      coordinate = this.snakeLocationMove[0][0] - 1;
    }
    this.snakeLocationMove.unshift([coordinate, this.snakeLocationMove[0][1]]);
    this.snakeLocationMove.pop();
  }

  moveLeft = () => {
    let coordinate = this.snakeLocationMove[0][1];
    if (coordinate <= 0) {
      coordinate = store.widthBord - 1;
    } else {
      coordinate = this.snakeLocationMove[0][1] - 1;
    }
    this.snakeLocationMove.unshift([this.snakeLocationMove[0][0], coordinate]);
    this.snakeLocationMove.pop();
  }

  moveRight = () => {
    let coordinate = this.snakeLocationMove[0][1];
    if (coordinate >= store.widthBord - 1) {
      coordinate = 0;
    } else {
      coordinate = this.snakeLocationMove[0][1] + 1;
    }
    this.snakeLocationMove.pop();
    this.snakeLocationMove.unshift([this.snakeLocationMove[0][0], coordinate]);
  }

  moveDown = () => {
    let coordinate = this.snakeLocationMove[0][0];
    if (coordinate >= store.heightBoard - 1) {
      coordinate = 0;
    } else {
      coordinate = this.snakeLocationMove[0][0] + 1;
    }
    this.snakeLocationMove.pop();
    this.snakeLocationMove.unshift([coordinate, this.snakeLocationMove[0][1]]);
  }
};

const snakeStore = new Snake();

export default snakeStore;
/*
let coordinate = this.snakeLocationMove[0][1];
if (coordinate < store.widthBord) {
  coordinate = this.snakeLocationMove[0][1] + 1;
} else {
  coordinate = 0;
}
*/