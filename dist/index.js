"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Grid = require("./Grid");

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
    function Game() {
        _classCallCheck(this, Game);

        this.grid = new _Grid2.default();
        this.stage = new createjs.Stage("demoCanvas");
    }

    _createClass(Game, [{
        key: "addCardsToStage",
        value: function addCardsToStage() {
            for (var i = 0; i < this.grid.cards.length; i++) {
                this.stage.addChild(this.grid.cards[i]);
            }
        }
    }, {
        key: "init",
        value: function init() {
            this.addCardsToStage();
            this.updateStage();
        }
    }, {
        key: "updateStage",
        value: function updateStage() {
            this.stage.update();
        }
    }, {
        key: "flipCard",
        value: function flipCard(index) {}
    }]);

    return Game;
}();

exports.default = Game;


function initGame() {
    var game = new Game();
    game.init();
}