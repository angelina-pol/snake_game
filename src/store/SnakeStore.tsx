class Snake {
  startCountSquare = 3; //?

  xCoordinateStart = 5;
  y1CoordinateStart = 5;
  y2CoordinateStart = 6;
  y3CoordinateStart = 7;

  snakeLocationStart: number[][] = [
    [this.xCoordinateStart, this.y1CoordinateStart], 
    [this.xCoordinateStart, this.y2CoordinateStart], 
    [this.xCoordinateStart, this.y3CoordinateStart],
  ];

  snakeLocationMove: number[][] = [
    ...this.snakeLocationStart, 
  ];

  constructor () {

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


  arraysAreEqual = (arr1: [], arr2: []) => {
    for (let i = 0; arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    };
    return true;
}

};

const snakeStore = new Snake();

export default snakeStore;