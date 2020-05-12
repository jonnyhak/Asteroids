
const MovingObject = require("./moving_object.js");
const Util = require("./util.js");

Asteroid.COLOR = '#000080'; 

Asteroid.RADIUS = 20;

function Asteroid (pos) {
    // super(color, radius) 
    this.color = Asteroid.COLOR;
    this.radius = Asteroid.RADIUS;
    this.pos = pos;
    this.vel = Util.randomVec(Math.random() * 10);
};




Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;