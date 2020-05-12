console.log("Webpack is working!");

const MovingObject = require("./moving_object.js");
const Util = require("./util.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js")
const GameView = require("./game_view.js")

window.MovingObject = MovingObject;
window.Util = Util; 
window.Asteroid = Asteroid;
window.Game = Game;
window.GameView = GameView;

document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    // ctx.fillStyle = 'crimson';
    // ctx.fill();
    window.ctx = ctx;
    const game = new Game();
    new GameView(ctx, game).start();
})