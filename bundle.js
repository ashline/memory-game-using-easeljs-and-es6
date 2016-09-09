(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Grid = _interopRequire(require("./Grid"));

var Game = (function () {
    function Game() {
        _classCallCheck(this, Game);

        this.grid = new Grid();
        this.stage = new createjs.Stage("demoCanvas");
    }

    _createClass(Game, {
        addCardsToStage: {
            value: function addCardsToStage() {
                for (var i = 0; i < this.grid.cards.length; i++) {
                    this.stage.addChild(this.grid.cards[i]);
                }
            }
        },
        init: {
            value: function init() {
                this.addCardsToStage();
                this.updateStage();
            }
        },
        updateStage: {
            value: function updateStage() {
                this.stage.update();
            }
        },
        flipCard: {
            value: function flipCard(index) {}
        }
    });

    return Game;
})();

module.exports = Game;

function initGame() {
    var game = new Game();
    game.init();
}

},{"./Grid":3}],2:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Shape = window.createjs.Shape;

var Card = (function (_Shape) {
    function Card(options) {
        _classCallCheck(this, Card);

        _get(Object.getPrototypeOf(Card.prototype), "constructor", this).call(this);
        Object.assign(this, options);
        this.init();
        return this;
    }

    _inherits(Card, _Shape);

    _createClass(Card, {
        flipCard: {
            value: function flipCard() {
                if (!this.isMatched) {
                    this.faceUp = !this.faceUp;
                }
                //grid should check state of other cards
                // if 2 cards are up check colors
                // if they match then set their isMatched to true  || visible false
                // check if there are still unmatched cards
                // if not game over
                // if not then set their faceUp to false
                // card face down automatic after ~1 second
            }
        },
        setMatched: {
            value: function setMatched() {
                if (this.faceUp) {
                    this.isMatched = true;
                }
            }
        },
        init: {
            value: function init() {
                this.faceUp = false;
                this.isMatched = false;
            }
        }
    });

    return Card;
})(Shape);

module.exports = Card;

},{}],3:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var COLORS = require("./constants").COLORS;

var Card = _interopRequire(require("./Card"));

var Grid = (function () {
    function Grid() {
        _classCallCheck(this, Grid);

        this.size = 16;
        this.cards = [];
        this.fillCards();
    }

    _createClass(Grid, {
        fillCards: {
            value: function fillCards() {
                for (var i = 0; i < this.size; i++) {
                    var row = Math.floor(i / 4);
                    var color = Math.floor(i % 8);
                    var column = Math.floor(i % 4);
                    var x = this.calculatePosition(column);
                    var y = this.calculatePosition(row);

                    var card = new Card({
                        color: COLORS[color],
                        height: 90,
                        width: 90,
                        x: x,
                        y: y
                    });

                    this.cards.push(card);
                }
            }
        },
        calculatePosition: {
            value: function calculatePosition(index) {
                return index * 90 + index * 5 + (index + 1) * 5;
            }
        }
    });

    return Grid;
})();

module.exports = Grid;

},{"./Card":2,"./constants":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var COLORS = ["red", "blue", "green", "pink", "violet", "olive", "magenta", "yellow"];
exports.COLORS = COLORS;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9hc2hsaW5lL3NjcmF0Y2gvbWVtb3J5X2Vhc2VsanMvc3JjL2luZGV4LmpzIiwiL2hvbWUvYXNobGluZS9zY3JhdGNoL21lbW9yeV9lYXNlbGpzL3NyYy9DYXJkLmpzIiwiL2hvbWUvYXNobGluZS9zY3JhdGNoL21lbW9yeV9lYXNlbGpzL3NyYy9HcmlkLmpzIiwiL2hvbWUvYXNobGluZS9zY3JhdGNoL21lbW9yeV9lYXNlbGpzL3NyYy9jb25zdGFudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztJQ0FPLElBQUksMkJBQU0sUUFBUTs7SUFFSixJQUFJO0FBQ1YsYUFETSxJQUFJLEdBQ1A7OEJBREcsSUFBSTs7QUFFakIsWUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ3ZCLFlBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ2pEOztpQkFKZ0IsSUFBSTtBQU1yQix1QkFBZTttQkFBQSwyQkFBRztBQUNkLHFCQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzdDLHdCQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMzQzthQUNKOztBQUVELFlBQUk7bUJBQUEsZ0JBQUc7QUFDSCxvQkFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBQ3ZCLG9CQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDdEI7O0FBRUQsbUJBQVc7bUJBQUEsdUJBQUc7QUFDVixvQkFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUN2Qjs7QUFFRCxn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RyxDQUFDLENBQUEsR0FBSSxDQUFDLENBQUM7YUFDbkQ7Ozs7V0E3QmdCLElBQUk7OztpQkFBSixJQUFJOzs7Ozs7OztBQ0hsQixJQUFNLE1BQU0sR0FBRyxDQUNsQixLQUFLLEVBQ0wsTUFBTSxFQUNOLE9BQU8sRUFDUCxNQUFNLEVBQ04sUUFBUSxFQUNSLE9BQU8sRUFDUCxTQUFTLEVBQ1QsUUFBUSxDQUNYLENBQUM7UUFUVyxNQUFNLEdBQU4sTUFBTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgR3JpZCBmcm9tICcuL0dyaWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ncmlkID0gbmV3IEdyaWQoKTtcbiAgICAgICAgdGhpcy5zdGFnZSA9IG5ldyBjcmVhdGVqcy5TdGFnZShcImRlbW9DYW52YXNcIik7XG4gICAgfVxuXG4gICAgYWRkQ2FyZHNUb1N0YWdlKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZ3JpZC5jYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5zdGFnZS5hZGRDaGlsZCh0aGlzLmdyaWQuY2FyZHNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5hZGRDYXJkc1RvU3RhZ2UoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTdGFnZSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZVN0YWdlKCkge1xuICAgICAgICB0aGlzLnN0YWdlLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGZsaXBDYXJkKGluZGV4KSB7XG5cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluaXRHYW1lKCkge1xuICAgIHZhciBnYW1lID0gbmV3IEdhbWUoKTtcbiAgICBnYW1lLmluaXQoKTtcbn1cbiIsImxldCBTaGFwZSA9IHdpbmRvdy5jcmVhdGVqcy5TaGFwZTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIFNoYXBlIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmbGlwQ2FyZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzTWF0Y2hlZCkge1xuICAgICAgICAgICAgdGhpcy5mYWNlVXAgPSAhdGhpcy5mYWNlVXA7XG4gICAgICAgIH1cbiAgICAgICAgLy9ncmlkIHNob3VsZCBjaGVjayBzdGF0ZSBvZiBvdGhlciBjYXJkc1xuICAgICAgICAgICAgLy8gaWYgMiBjYXJkcyBhcmUgdXAgY2hlY2sgY29sb3JzXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhleSBtYXRjaCB0aGVuIHNldCB0aGVpciBpc01hdGNoZWQgdG8gdHJ1ZSAgfHwgdmlzaWJsZSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiB0aGVyZSBhcmUgc3RpbGwgdW5tYXRjaGVkIGNhcmRzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBub3QgZ2FtZSBvdmVyXG4gICAgICAgICAgICAgICAgLy8gaWYgbm90IHRoZW4gc2V0IHRoZWlyIGZhY2VVcCB0byBmYWxzZVxuICAgICAgICAgICAgICAgIC8vIGNhcmQgZmFjZSBkb3duIGF1dG9tYXRpYyBhZnRlciB+MSBzZWNvbmRcbiAgICB9XG5cbiAgICBzZXRNYXRjaGVkKCkge1xuICAgICAgICBpZiAodGhpcy5mYWNlVXApIHtcbiAgICAgICAgICAgIHRoaXMuaXNNYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuZmFjZVVwID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNNYXRjaGVkID0gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ09MT1JTIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi9DYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2l6ZSA9IDE2O1xuICAgICAgICB0aGlzLmNhcmRzID0gW107XG4gICAgICAgIHRoaXMuZmlsbENhcmRzKCk7XG4gICAgfVxuXG4gICAgZmlsbENhcmRzKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcm93ID0gTWF0aC5mbG9vcihpLzQpO1xuICAgICAgICAgICAgdmFyIGNvbG9yID0gTWF0aC5mbG9vcihpICUgOCk7XG4gICAgICAgICAgICB2YXIgY29sdW1uID0gTWF0aC5mbG9vcihpICUgNCk7XG4gICAgICAgICAgICBsZXQgeCA9IHRoaXMuY2FsY3VsYXRlUG9zaXRpb24oY29sdW1uKTtcbiAgICAgICAgICAgIGxldCB5ID0gdGhpcy5jYWxjdWxhdGVQb3NpdGlvbihyb3cpO1xuXG4gICAgICAgICAgICBsZXQgY2FyZCA9IG5ldyBDYXJkKHtcbiAgICAgICAgICAgICAgICBjb2xvcjogQ09MT1JTW2NvbG9yXSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkwLFxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCxcbiAgICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICAgIHlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmNhcmRzLnB1c2goY2FyZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYWxjdWxhdGVQb3NpdGlvbihpbmRleCkge1xuICAgICAgICByZXR1cm4gaW5kZXggKiA5MCArIGluZGV4ICogNSArIChpbmRleCArIDEpICogNTtcbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgQ09MT1JTID0gW1xuICAgICdyZWQnLFxuICAgICdibHVlJyxcbiAgICAnZ3JlZW4nLFxuICAgICdwaW5rJyxcbiAgICAndmlvbGV0JyxcbiAgICAnb2xpdmUnLFxuICAgICdtYWdlbnRhJyxcbiAgICAneWVsbG93J1xuXTtcbiJdfQ==
