const MovingObject = require("./moving_object.js");
const Util = require("./util.js");
const Asteroid = require("./asteroid.js");


Game.DIM_X = 650;
Game.DIM_Y = 650;
Game.NUM_ASTEROIDS = 24;

function Game () {
    // this.asteroidPositions = [];
    this.asteroids = [];

    this.addAsteroids();

}

Game.prototype.addAsteroids = function () {
    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
        let pos = this.randomPosition();
        // this.asteroidsPositions.push(pos);
        let asteroid = new Asteroid(pos);
        this.asteroids.push(asteroid);
    };

    // for (let i = 0; i< this.asteroids.length)
}

Game.prototype.randomPosition = function () {
    const x = Math.floor(Math.random() * Game.DIM_X) + 1;
    const y = Math.floor(Math.random() * Game.DIM_Y) + 1;
    return [x, y]
}


Game.prototype.draw = function draw (ctx) { //clear rec, call draw function on each asteroid
    // this.asteroidsPositions.forEach((el) =>{
    //     let x = el[0];
    //     let y = el[1];
    //     // let pos = el.pos
    //     // console.log(pos);
    //     ctx.clearRect(x - this.radius, y + this.radius ,this.radius, this.radius);
    // })

    ctx.clearRect(0, 0, 650, 650);

    this.asteroids.forEach((ele) => {
        ele.draw(ctx);
    })
        // this.draw(ctx));

},

Game.prototype.moveObjects = function moveObjects () {
    this.asteroids.forEach((ele) => {
        ele.move;
    })
}





module.exports = Game;