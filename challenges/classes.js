// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker{
    constructor(obj){
    this.length = obj.length;
    this.width = obj.width;
    this.height = obj.height;
    }
    volume = function(){
        return this.length * this.width * this.height;
    }
    surfaceArea = function(){
        return 2 * (this.length * this.width + this.height * this.height + this.width * this.height);
    }
}

let cuboid = new CuboidMaker({length: 4, width: 5, height: 5});
// console.log(cuboid);

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker{
    constructor(obj){
        super(obj);
        this.allSides = obj.width;
    }
    volume = function(){
        return Math.pow(this.allSides, 3);
    }
    surfaceArea = function(){
        return 6 * Math.pow(this.allSides, 3);
    }
}

let cube = new CubeMaker({length: 5, width: 5, height: 5});
// console.log(cube);

// console.log(cube.volume()); // 100
// console.log(cube.surfaceArea()); // 130