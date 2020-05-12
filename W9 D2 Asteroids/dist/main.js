/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nAsteroid.COLOR = '#000080'; \n\nAsteroid.RADIUS = 20;\n\nfunction Asteroid (pos) {\n    // super(color, radius) \n    this.color = Asteroid.COLOR;\n    this.radius = Asteroid.RADIUS;\n    this.pos = pos;\n    this.vel = Util.randomVec(Math.random() * 10);\n};\n\n\n\n\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n\n\nGame.DIM_X = 650;\nGame.DIM_Y = 650;\nGame.NUM_ASTEROIDS = 24;\n\nfunction Game () {\n    // this.asteroidPositions = [];\n    this.asteroids = [];\n\n    this.addAsteroids();\n\n}\n\nGame.prototype.addAsteroids = function () {\n    for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {\n        let pos = this.randomPosition();\n        // this.asteroidsPositions.push(pos);\n        let asteroid = new Asteroid(pos);\n        this.asteroids.push(asteroid);\n    };\n\n    // for (let i = 0; i< this.asteroids.length)\n}\n\nGame.prototype.randomPosition = function () {\n    const x = Math.floor(Math.random() * Game.DIM_X) + 1;\n    const y = Math.floor(Math.random() * Game.DIM_Y) + 1;\n    return [x, y]\n}\n\n\nGame.prototype.draw = function draw (ctx) { //clear rec, call draw function on each asteroid\n    // this.asteroidsPositions.forEach((el) =>{\n    //     let x = el[0];\n    //     let y = el[1];\n    //     // let pos = el.pos\n    //     // console.log(pos);\n    //     ctx.clearRect(x - this.radius, y + this.radius ,this.radius, this.radius);\n    // })\n\n    ctx.clearRect(0, 0, 650, 650);\n\n    this.asteroids.forEach((ele) => {\n        ele.draw(ctx);\n    })\n        // this.draw(ctx));\n\n},\n\nGame.prototype.moveObjects = function moveObjects () {\n    this.asteroids.forEach((ele) => {\n        ele.move;\n    })\n}\n\n\n\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction GameView(ctx, game) {\n    this.game = game;\n    this.ctx = ctx;\n};\n\nGameView.prototype.start = function () {\n    // const boundDraw = this.game.draw.bind(this.ctx);\n// return setInterval(this.game.moveObjects(() => {this.game.moveObjects()}), this.game.draw(() => {this.game.draw(this.ctx)}), 20)\n\n// MovingObject.draw(this.ctx);\n    setInterval((this.game.draw(this.ctx), this.game.moveObjects()), 0020)\n// function callback () {\n//     this.game.moveObjects();\n//     this.game.draw(this.ctx);\n// }\n// return setInterval(callback, 20)\n// console.log(this.ctx);\n// moveObjects()\n// console.log(this);\n\n\n// console.log(this.game.draw);\n}\n\n\nmodule.exports = GameView;\n\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log(\"Webpack is working!\");\n\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\")\n\nwindow.MovingObject = MovingObject;\nwindow.Util = Util; \nwindow.Asteroid = Asteroid;\nwindow.Game = Game;\nwindow.GameView = GameView;\n\ndocument.addEventListener('DOMContentLoaded', function() {\n    const canvas = document.getElementById(\"game-canvas\");\n    const ctx = canvas.getContext(\"2d\");\n    // ctx.fillStyle = 'crimson';\n    // ctx.fill();\n    window.ctx = ctx;\n    const game = new Game();\n    new GameView(ctx, game).start();\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nfunction MovingObject(options) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n};\n\nconst mo = new MovingObject({\n    pos: [30, 30],\n    vel: [10, 10],\n    radius: 5,\n    color: \"#00FF00\"\n});\n\nMovingObject.prototype.draw = function (ctx) {\n    ctx.fillStyle = this.color;\n\n    ctx.beginPath();\n\n    ctx.arc(\n        this.pos[0],\n        this.pos[1],\n        this.radius,\n        0,\n        2 * Math.PI,\n        false\n    );\n\n    ctx.fill();\n};\n\nMovingObject.prototype.move = function () {\n    console.log(this);\n    let x1 = this.pos[0];\n    let y1 = this.pos[1];\n    let x2 = this.vel[0];\n    let y2 = this.vel[1];\n\n    // let num = sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)\n\n    this.pos = [x1 + x2, y1 + y2];\n\n\n\n    console.log(this.pos);\n}\n\n// Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)\n// The norm of a velocity vector is a speed\n// Norm([x_1, y_1]) = Dist([0, 0], [x_1, y_1])\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n    inherits(childClass, parentClass) {\n        function Surrogate () {}\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n        \n    },\n\n    randomVec (length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });