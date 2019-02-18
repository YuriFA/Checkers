(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = require('./constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cell = function () {
  function Cell(x, y) {
    var _this = this;

    _classCallCheck(this, Cell);

    this.x = x;
    this.y = y;
    this.id = 'cell_' + x + '_' + y;
    this.color = _constants.COLORS.cell[x % 2 === y % 2];
    this.checker = null;
    this.cellDOM = function () {
      var cell = document.createElement('div');
      cell.id = _this.id;
      cell.className = 'cell cell__' + _this.color;
      cell.style.width = _constants.WH + '%';
      cell.style.height = _constants.WH + '%';
      if (!cell.hasOwnProperty('obj')) {
        cell.obj = _this;
      }
      return cell;
    }();
  }

  _createClass(Cell, [{
    key: 'getPosition',
    value: function getPosition() {
      return {
        x: this.x,
        y: this.y
      };
    }
  }, {
    key: 'containChecker',
    value: function containChecker(checker) {
      this.checker = checker;
    }
  }, {
    key: 'hasChecker',
    value: function hasChecker() {
      return this.checker != null;
    }
  }, {
    key: 'removeChecker',
    value: function removeChecker() {
      if (this.checker) {
        this.cellDOM.removeChild(this.checker.checkerDOM);
        this.checker = null;
      }
    }
  }, {
    key: 'highlight',
    value: function highlight() {
      this.cellDOM.classList.toggle('highlight');
    }
  }, {
    key: 'unhighlight',
    value: function unhighlight() {
      this.cellDOM.classList.remove('highlight');
    }
  }, {
    key: 'isHighlighted',
    value: function isHighlighted() {
      return this.cellDOM.classList.contains('highlight');
    }
  }]);

  return Cell;
}();

exports.default = Cell;

},{"./constants":7}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Chat = function () {
  function Chat() {
    _classCallCheck(this, Chat);

    this.chat = document.getElementById('chat');
    this.chatMessages = [];
    this.chatContent = document.getElementById('chat_content');
    this.messageField = document.getElementById('message');
    this.sendBtn = document.getElementById('send');
    this.bindEvents();
  }

  _createClass(Chat, [{
    key: 'show',
    value: function show() {
      if (this.chat) {
        this.chat.style.display = 'block';
      }
      return this;
    }
  }, {
    key: 'clearField',
    value: function clearField() {
      this.messageField.value = '';
      return this;
    }
  }, {
    key: 'bindEvents',
    value: function bindEvents() {
      this.onSend = this.onSend.bind(this);
      this.onKeyUp = this.onKeyUp.bind(this);
      this.sendBtn.addEventListener('click', this.onSend);
      this.messageField.addEventListener('keyup', this.onKeyUp);
      return this;
    }
  }, {
    key: 'changeSendEvent',
    value: function changeSendEvent(clickHandler) {
      this.sendBtn.removeEventListener('click', this.onSend);
      this.sendBtn.addEventListener('click', clickHandler);
      return this;
    }
  }, {
    key: 'onSend',
    value: function onSend(e) {
      var text = this.messageField.value;
      if (text.length) {
        text = 'You: ' + text;
        this.clearField().addMessage(text);
      }
    }
  }, {
    key: 'onKeyUp',
    value: function onKeyUp(e) {
      if (e.keyCode === 13) {
        this.sendBtn.click();
      }
    }
  }, {
    key: 'addMessage',
    value: function addMessage(message) {
      this.chatMessages.push(message);
      var html = '';
      for (var i = 0; i < this.chatMessages.length; i++) {
        html += this.chatMessages[i] + '<br />';
      }
      if (this.chatContent) {
        this.chatContent.innerHTML = html;
      }
      return this;
    }
  }]);

  return Chat;
}();

exports.default = Chat;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _QUEEN_LINE;

var _constants = require('./constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var QUEEN_LINE = (_QUEEN_LINE = {}, _defineProperty(_QUEEN_LINE, _constants.COLORS.checker.dark, _constants.N), _defineProperty(_QUEEN_LINE, _constants.COLORS.checker.light, 1), _QUEEN_LINE);

var Checker = function () {
  function Checker(color) {
    var _this = this;

    _classCallCheck(this, Checker);

    this.color = color;
    this.cell = null;
    this.marked = false;
    this.queen = false;
    this.checkerDOM = function () {
      var checker = document.createElement('div');
      checker.className = 'checker checker__' + _this.color;
      if (!checker.hasOwnProperty('obj')) {
        checker.obj = _this;
      }
      return checker;
    }();
  }

  _createClass(Checker, [{
    key: 'activate',
    value: function activate() {
      this.checkerDOM.classList.toggle('active');
    }
  }, {
    key: 'belongsTo',
    value: function belongsTo(cell) {
      this.cell = cell;
      if (cell) {
        cell.cellDOM.appendChild(this.checkerDOM);
      }
    }
  }, {
    key: 'mark',
    value: function mark() {
      var selfTurn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      this.marked = true;
      if (selfTurn) {
        this.checkerDOM.classList.toggle('marked');
      }
    }
  }, {
    key: 'unmark',
    value: function unmark() {
      this.marked = false;
      this.checkerDOM.classList.remove('marked');
    }
  }, {
    key: 'isMarked',
    value: function isMarked() {
      return this.marked;
    }
  }, {
    key: 'isMovePossible',
    value: function isMovePossible(currentChecker, currentTurnColor) {
      return this.color === currentTurnColor && this.isMarked() && (currentChecker == null || currentChecker !== this);
    }
  }, {
    key: 'moveTo',
    value: function moveTo(cell) {
      this.cell.removeChecker();
      this.belongsTo(cell);
      cell.containChecker(this);
    }
  }, {
    key: 'canQueened',
    value: function canQueened() {
      return !this.queen && this.cell.x === QUEEN_LINE[this.color];
    }
  }, {
    key: 'makeQueen',
    value: function makeQueen() {
      this.queen = true;
      this.checkerDOM.classList.toggle('queen');
    }
  }, {
    key: 'isQueen',
    value: function isQueen() {
      return this.queen;
    }
  }]);

  return Checker;
}();

exports.default = Checker;

},{"./constants":7}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckersOnline = exports.Checkers = undefined;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = require('./constants');

var _GameBoard = require('./GameBoard');

var _GameBoard2 = _interopRequireDefault(_GameBoard);

var _GameState = require('./GameState');

var _GameState2 = _interopRequireDefault(_GameState);

var _Cell = require('./Cell');

var _Cell2 = _interopRequireDefault(_Cell);

var _Chat = require('./Chat');

var _Chat2 = _interopRequireDefault(_Chat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Checkers = exports.Checkers = function () {
  function Checkers(boardDOM) {
    _classCallCheck(this, Checkers);

    this.board = new _GameBoard2.default(boardDOM);
    boardDOM.addEventListener('click', this.boardEventHandler.bind(this));
    this.state = new _GameState2.default();
    this.playerColor = _constants.COLORS.checker.light;
    this._test();
  }

  _createClass(Checkers, [{
    key: 'start',
    value: function start() {
      if (!this.state.gameStarted) {
        this.board.show();
        this.state.startGame();
        this.markAvailableCheckers();
      }
      console.log('game started');
    }
  }, {
    key: 'restart',
    value: function restart() {
      var boardDOM = this.board.boardDOM;
      boardDOM.innerHTML = '';
      this.board = new _GameBoard2.default(boardDOM);
      this.state.endGame();
      this.state = new _GameState2.default();
    }
  }, {
    key: 'markAvailableCheckers',
    value: function markAvailableCheckers() {
      var result = this.board.markAvailableCheckers(this.state.currentTurn);
      console.log(result);
      if (!result) {
        this.state.setWinner(this.state.prevTurn);
      }
    }
  }, {
    key: 'boardEventHandler',
    value: function boardEventHandler(e) {
      var elClass = e.target.getAttribute('class');
      if (elClass) {
        if (elClass.indexOf('cell') !== -1) {
          this.cellClickHandle(e);
        } else if (elClass.indexOf('checker') !== -1) {
          this.checkerClickHandle(e);
        }
      }
      return false;
    }
  }, {
    key: 'checkerClickHandle',
    value: function checkerClickHandle(e) {
      var checker = e.target.obj;
      this.board.deactivateCheckers();
      if (checker !== undefined && checker.isMovePossible(this.state.currentChecker, this.state.currentTurn)) {
        var availableMoves = this.board.getAvailableMoves(checker);
        checker.activate();
        this.board.showMoves(availableMoves.moves);
        this.state.currentChecker = checker;
      } else {
        this.state.currentChecker = null;
      }

      return true;
    }
  }, {
    key: 'cellClickHandle',
    value: function cellClickHandle(e) {
      var cell = e.target.obj;
      var checker = this.state.currentChecker;
      if (cell instanceof _Cell2.default && checker && cell.isHighlighted()) {
        this.move(checker, cell);
      }
      return true;
    }
  }, {
    key: 'move',
    value: function move(checker, toCell) {
      var moveResult = this.board.move(checker, toCell);
      if (moveResult === _constants.MOVES.MOVE_COMPLETED) {
        this.state.setNexnTurn();
        this.markAvailableCheckers(this.state.currentTurn);
      }
      this.state.updateInfo();
    }

    // TEST

  }, {
    key: '_test',
    value: function _test() {
      console.log('TESTING');
      this._deleteCheckers([{ x: 1, y: 1 }, { x: 1, y: 3 }, { x: 1, y: 5 }, { x: 1, y: 7 }, { x: 2, y: 2 }, { x: 2, y: 4 }, { x: 2, y: 6 }, { x: 2, y: 8 }]);
      this._testCheckers([{ x: 2, y: 2, color: _constants.COLORS.checker.light }
      // {x: 4, y: 6, color: COLORS.checker.dark}
      ]);
    }
  }, {
    key: '_testCheckers',
    value: function _testCheckers(checkers) {
      var _this = this;

      checkers.forEach(function (checker) {
        var testCell = document.getElementById('cell_' + checker.x + '_' + checker.y).obj;
        _this.board.createChecker(checker.color, testCell);
      });
    }
  }, {
    key: '_deleteCheckers',
    value: function _deleteCheckers(positions) {
      positions.forEach(function (pos) {
        var cell = document.getElementById('cell_' + pos.x + '_' + pos.y).obj;
        if (!cell || !cell.checker) return false;
        cell.removeChecker();
      });
      return true;
    }
  }]);

  return Checkers;
}();

var CheckersOnline = exports.CheckersOnline = function (_Checkers) {
  _inherits(CheckersOnline, _Checkers);

  function CheckersOnline(boardDOM) {
    _classCallCheck(this, CheckersOnline);

    var _this2 = _possibleConstructorReturn(this, (CheckersOnline.__proto__ || Object.getPrototypeOf(CheckersOnline)).call(this, boardDOM));

    _this2.socket = io();
    _this2.bindSocketEvents();
    _this2.socket.emit('add player');
    _this2.chat = new _Chat2.default();
    _this2.chat.changeSendEvent(_this2.chatClickHandler.bind(_this2));
    return _this2;
  }

  _createClass(CheckersOnline, [{
    key: 'start',
    value: function start() {
      _get(CheckersOnline.prototype.__proto__ || Object.getPrototypeOf(CheckersOnline.prototype), 'start', this).call(this);
      this.chat.show();
    }
  }, {
    key: 'canMove',
    value: function canMove() {
      return this.playerColor === this.state.currentTurn;
    }
  }, {
    key: 'markAvailableCheckers',
    value: function markAvailableCheckers() {
      if (this.canMove()) {
        _get(CheckersOnline.prototype.__proto__ || Object.getPrototypeOf(CheckersOnline.prototype), 'markAvailableCheckers', this).call(this, this.state.currentTurn);
      }
    }
  }, {
    key: 'move',
    value: function move(checker, toCell) {
      var isEnemyMove = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (!isEnemyMove && this.canMove() || isEnemyMove && !this.canMove()) {
        _get(CheckersOnline.prototype.__proto__ || Object.getPrototypeOf(CheckersOnline.prototype), 'move', this).call(this, checker, toCell);
      }
    }
  }, {
    key: 'bindSocketEvents',
    value: function bindSocketEvents() {
      this.socket.on('can play', this.onCanPlay.bind(this)).on('message', this.onMessage.bind(this)).on('enemy player connected', this.onEnemyPlayerConnected.bind(this)).on('enemy player moved', this.onEnemyPlayerMoved.bind(this)).on('chat message', this.onChatMessage.bind(this)).on('restart game', this.onRestartGame.bind(this));
    }
  }, {
    key: 'cellClickHandle',
    value: function cellClickHandle(e) {
      var cell = e.target.obj;
      var checker = this.state.currentChecker;
      if (cell instanceof _Cell2.default && checker && cell.isHighlighted()) {
        this.socket.emit('move', {
          from: checker.cell.getPosition(),
          to: cell.getPosition()
        });
        this.move(checker, cell);
      }
      return true;
    }
  }, {
    key: 'chatClickHandler',
    value: function chatClickHandler(e) {
      if (this.chat && this.socket) {
        var text = this.chat.messageField.value;
        if (text.length) {
          text = this.playerColor + ': ' + text;
          this.socket.emit('send', { message: text });
          this.chat.clearField().addMessage(text);
        }
      }
    }
    // todo FIX THIS SHIT

  }, {
    key: 'onCanPlay',
    value: function onCanPlay(data) {
      if (data && data.hasOwnProperty('id')) {
        console.log('you can play');
        this.playerColor = _constants.PLAYER_COLOR[data.id];
        if (data.id === 2) {
          this.board.boardDOM.style.transform = 'rotate(180deg)';
          this.start();
        } else {
          this.board.boardDOM.style.transform = 'rotate(0deg)';
        }
      } else {
        console.log('cant play');
      }
    }
  }, {
    key: 'onMessage',
    value: function onMessage(data) {
      console.log('message: ' + data.message);
    }
  }, {
    key: 'onEnemyPlayerConnected',
    value: function onEnemyPlayerConnected() {
      this.start();
      console.log('all players ready to start game');
    }
  }, {
    key: 'onEnemyPlayerMoved',
    value: function onEnemyPlayerMoved(data) {
      var checker = this.board.getCell(data.from).checker;
      var cell = this.board.getCell(data.to);
      if (checker && cell) {
        this.move(checker, cell, true);
        console.log('enemy moved from: ' + data.from.x + ',' + data.from.y + ' to: ' + data.to.x + ',' + data.to.y);
      }
    }
  }, {
    key: 'onChatMessage',
    value: function onChatMessage(data) {
      if (data.message) {
        this.chat.addMessage(data.message);
      } else {
        console.log('there is a problem: ' + data);
      }
    }
  }, {
    key: 'onRestartGame',
    value: function onRestartGame(data) {
      this.onCanPlay(data);
      this.restart();
      console.log('restarting game...\nwait for players...');
    }
  }]);

  return CheckersOnline;
}(Checkers);

},{"./Cell":1,"./Chat":2,"./GameBoard":5,"./GameState":6,"./constants":7}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MOVE_MAP;

var _constants = require('./constants');

var _Checker = require('./Checker');

var _Checker2 = _interopRequireDefault(_Checker);

var _Cell = require('./Cell');

var _Cell2 = _interopRequireDefault(_Cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LEFT = 0;
var RIGHT = 1;

var MOVE_MAP = (_MOVE_MAP = {}, _defineProperty(_MOVE_MAP, _constants.COLORS.checker.light, {
  fw: [{ x: -1, y: -1 }, { x: -1, y: 1 }],
  bw: [{ x: 1, y: -1 }, { x: 1, y: 1 }]
}), _defineProperty(_MOVE_MAP, _constants.COLORS.checker.dark, {
  fw: [{ x: 1, y: -1 }, { x: 1, y: 1 }],
  bw: [{ x: -1, y: -1 }, { x: -1, y: 1 }]
}), _MOVE_MAP);

var MOVE_TYPE = {
  FREE: 0,
  EAT: 1
};

var GameBoard = function () {
  function GameBoard(boardDOM) {
    _classCallCheck(this, GameBoard);

    this.boardDOM = boardDOM;
    this.draw();
  }

  _createClass(GameBoard, [{
    key: 'show',
    value: function show() {
      this.boardDOM.style.display = 'block';
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.boardDOM.style.display = 'none';
    }
  }, {
    key: 'draw',
    value: function draw() {
      for (var i = 1; i <= _constants.N; i++) {
        for (var j = 1; j <= _constants.N; j++) {
          var cell = new _Cell2.default(i, j);
          this.boardDOM.appendChild(cell.cellDOM);
          this.drawChecker(cell);
        }
      }
    }
  }, {
    key: 'drawChecker',
    value: function drawChecker(cell) {
      if (cell.y % 2 === cell.x % 2 && (cell.x < _constants.TOP_UP || cell.x > _constants.BOTTOM_FROM)) {
        this.createChecker(cell.x < _constants.TOP_UP ? _constants.COLORS.checker.dark : _constants.COLORS.checker.light, cell);
      }
    }
  }, {
    key: 'createChecker',
    value: function createChecker(color, cell) {
      var checker = new _Checker2.default(color);
      checker.belongsTo(cell);
      cell.containChecker(checker);
      return checker;
    }
  }, {
    key: 'move',
    value: function move(checker, cell) {
      var moveResult = '';
      var wasEaten = this.eatIfItPossible(checker, cell);
      checker.moveTo(cell);
      if (checker.canQueened()) {
        checker.makeQueen();
      }

      var mustEat = this.getAvailableMoves(checker, true);
      this.deactivateCheckers();
      if (wasEaten && mustEat) {
        checker.activate();
        this.showMoves(mustEat.moves);
        moveResult = _constants.MOVES.CAN_EAT_MORE;
      } else {
        var checkers = this.getCheckers(checker.color, true);
        checkers.forEach(function (checker) {
          return checker.unmark();
        });
        moveResult = _constants.MOVES.MOVE_COMPLETED;
      }
      return moveResult;
    }
  }, {
    key: 'getCell',
    value: function getCell(pos) {
      var cell = document.getElementById('cell_' + pos.x + '_' + pos.y);
      return cell ? cell.obj : null;
    }
  }, {
    key: 'getCheckers',
    value: function getCheckers(color) {
      var marked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var checkersDOM = document.querySelectorAll('.checker.checker__' + color + (marked ? '.marked' : ''));
      return Object.keys(checkersDOM).map(function (i) {
        return checkersDOM[i].obj;
      });
    }
  }, {
    key: 'showMoves',
    value: function showMoves(moves) {
      if (moves) {
        moves.forEach(function (move) {
          if (move && move.cell) {
            move.cell.highlight();
          }
        });
      }
    }
  }, {
    key: 'getAvailableMoves',
    value: function getAvailableMoves(checker) {
      var onlyEat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var checkerMoves = MOVE_MAP[checker.color];
      var enemyEatingFilter = function enemyEatingFilter(mv) {
        return mv && mv.cell && mv.type === MOVE_TYPE.EAT;
      };
      var freeMoveFilter = function freeMoveFilter(mv) {
        return mv && mv.cell && mv.type === MOVE_TYPE.FREE;
      };
      var moves = [];
      if (checker.isQueen()) {
        var _moves;

        console.log('searching moves for queen');
        (_moves = moves).push.apply(_moves, _toConsumableArray(this.getAvailableCellsForQueen(checker, checkerMoves.fw[LEFT], onlyEat)).concat(_toConsumableArray(this.getAvailableCellsForQueen(checker, checkerMoves.fw[RIGHT], onlyEat)), _toConsumableArray(this.getAvailableCellsForQueen(checker, checkerMoves.bw[LEFT], onlyEat)), _toConsumableArray(this.getAvailableCellsForQueen(checker, checkerMoves.bw[RIGHT], onlyEat))));
      } else {
        // console.log('searching moves for checker')
        moves.push(this.getAvailableCell(checker, checkerMoves.fw[LEFT], onlyEat), this.getAvailableCell(checker, checkerMoves.fw[RIGHT], onlyEat), this.getAvailableCell(checker, checkerMoves.bw[LEFT], true), this.getAvailableCell(checker, checkerMoves.bw[RIGHT], true));
      }
      if (moves.some(enemyEatingFilter)) {
        moves = {
          type: MOVE_TYPE.EAT,
          moves: moves.filter(enemyEatingFilter)
        };
      } else {
        moves = {
          type: MOVE_TYPE.FREE,
          moves: moves.filter(freeMoveFilter)
        };
      }
      return moves.moves.length ? moves : null;
    }
  }, {
    key: 'getAvailableCellsForQueen',
    value: function getAvailableCellsForQueen(checker, direction, onlyEat) {
      var aCell = {};
      var ret = [];
      var eatDirection = false;
      var curDirection = direction;
      do {
        aCell = this.getAvailableCell(checker, curDirection, eatDirection ? false : onlyEat);
        if (aCell) {
          var isEat = aCell.type === MOVE_TYPE.EAT;
          if (eatDirection && isEat) {
            break;
          }
          eatDirection = isEat ? true : eatDirection;
          curDirection = this.calcNextDirectionCell(curDirection, direction, isEat ? 2 : 1);
          if (eatDirection) {
            aCell.type = MOVE_TYPE.EAT;
          }
          ret.push(aCell);
        } else {
          break;
        }
      } while (aCell !== null);

      return ret;
    }
  }, {
    key: 'getAvailableCell',
    value: function getAvailableCell(checker, direction) {
      var onlyEat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var curPos = checker.cell.getPosition();
      var cell = this.getCell({ x: curPos.x + direction.x, y: curPos.y + direction.y });
      if (cell && !cell.hasChecker() && !onlyEat) {
        return {
          type: MOVE_TYPE.FREE,
          cell: cell
        };
      }
      if (cell && cell.hasChecker() && checker.color !== cell.checker.color) {
        var cellAfterEat = this.cellAfterEating(cell.getPosition(), direction);
        if (cellAfterEat) {
          return {
            type: MOVE_TYPE.EAT,
            cell: cellAfterEat
          };
        }
      }

      return null;
    }
  }, {
    key: 'cellAfterEating',
    value: function cellAfterEating(enemyPosition, direction) {
      var cell = this.getCell({
        x: enemyPosition.x + Math.sign(direction.x),
        y: enemyPosition.y + Math.sign(direction.y)
      });
      return cell && !cell.hasChecker() ? cell : null;
    }
  }, {
    key: 'eatIfItPossible',
    value: function eatIfItPossible(checker, nextCell) {
      var curCell = checker.cell;
      if (Math.abs(curCell.x - nextCell.x) >= 2) {
        var direction = this.calcDirectionOfMove(curCell, nextCell);
        var enemyCell = !checker.isQueen() ? this.getCell({ x: curCell.x + direction.x, y: curCell.y + direction.y }) : this.findEnemyCell(curCell, nextCell, direction);
        if (enemyCell && enemyCell.checker) {
          enemyCell.checker.belongsTo(null);
          enemyCell.removeChecker();
          return true;
        }
      }
      return false;
    }
  }, {
    key: 'findEnemyCell',
    value: function findEnemyCell(cellFrom, cellTo, direction) {
      var enemy = null;
      var curDirection = this.calcNextDirectionCell(cellFrom, direction);
      while (enemy !== cellTo) {
        enemy = this.getCell(curDirection);
        if (!enemy || enemy && enemy.hasChecker()) {
          break;
        }
        curDirection = this.calcNextDirectionCell(curDirection, direction);
      }
      return enemy;
    }
  }, {
    key: 'calcNextDirectionCell',
    value: function calcNextDirectionCell(curDirection, direction) {
      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

      return {
        x: curDirection.x + direction.x * offset,
        y: curDirection.y + direction.y * offset
      };
    }
  }, {
    key: 'calcDirectionOfMove',
    value: function calcDirectionOfMove(curCell, nextCell) {
      return {
        x: Math.sign(nextCell.x - curCell.x),
        y: Math.sign(nextCell.y - curCell.y)
      };
    }
  }, {
    key: 'markAvailableCheckers',
    value: function markAvailableCheckers(color) {
      var _this = this;

      var checkers = this.getCheckers(color);
      var eatMoves = false;
      var freeMoves = [];
      checkers.forEach(function (checker) {
        var moves = _this.getAvailableMoves(checker);
        if (moves) {
          if (moves.type === MOVE_TYPE.EAT) {
            checker.mark();
            eatMoves = true;
          } else {
            freeMoves.push(checker);
          }
        }
      });
      if (!eatMoves && freeMoves.length) {
        freeMoves.forEach(function (checker) {
          return checker.mark();
        });
      }

      return eatMoves || freeMoves.length > 0;
    }
  }, {
    key: 'deactivateCheckers',
    value: function deactivateCheckers() {
      var activeCheckers = document.getElementsByClassName('checker active');
      if (activeCheckers.length) {
        Object.keys(activeCheckers).map(function (i) {
          return activeCheckers[i].classList.remove('active');
        });
        var highlights = document.querySelectorAll('.cell.highlight');
        Object.keys(highlights).map(function (i) {
          return highlights[i].obj.unhighlight();
        });
      }
    }
  }]);

  return GameBoard;
}();

exports.default = GameBoard;

},{"./Cell":1,"./Checker":3,"./constants":7}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = require('./constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameState = function () {
  function GameState() {
    _classCallCheck(this, GameState);

    this.infoDOM = document.getElementById('info');
    this.TURNS = [_constants.COLORS.checker.light, _constants.COLORS.checker.dark];
    this.gameStarted = false;
    this.currentTurn = this.TURNS[0];
    this.prevTurn = null;
    this.turnsCount = 0;
    this.currentChecker = null;
  }

  _createClass(GameState, [{
    key: 'startGame',
    value: function startGame() {
      this.gameStarted = true;
      this.showInfo();
    }
  }, {
    key: 'endGame',
    value: function endGame() {
      if (this.gameStarted) {
        this.gameStarted = false;
        this.currentChecker = null;
        this.currentTurn = null;
      }
    }
  }, {
    key: 'setWinner',
    value: function setWinner(color) {
      var winnerDOM = document.createElement('div');
      winnerDOM.className = 'winner winner_' + color;
      winnerDOM.innerHTML = color + ' WIN!!!';
      document.body.appendChild(winnerDOM);
      this.endGame();
    }
  }, {
    key: 'setNexnTurn',
    value: function setNexnTurn() {
      if (this.gameStarted) {
        this.turnsCount++;
        this.prevTurn = this.currentTurn;
        this.currentTurn = this.TURNS[this.turnsCount % 2];
      }
    }
  }, {
    key: 'showInfo',
    value: function showInfo() {
      this.infoDOM.style.display = 'block';
      this.updateInfo();
    }
  }, {
    key: 'updateInfo',
    value: function updateInfo() {
      if (this.gameStarted) {
        var turnsCountDOM = document.getElementById('turns_count');
        var turnColorDOM = document.getElementById('current_turn_color');
        this.infoDOM.style.visibility = 'visible';
        turnsCountDOM.textContent = this.turnsCount;
        turnColorDOM.style.backgroundColor = _constants.BG_COLORS[this.currentTurn];
      } else {
        this.infoDOM.style.visibility = 'hidden';
      }
    }
  }]);

  return GameState;
}();

exports.default = GameState;

},{"./constants":7}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var N = exports.N = 8;
var WH = exports.WH = 100 / N;
var TOP_UP = exports.TOP_UP = 4;
var BOTTOM_FROM = exports.BOTTOM_FROM = N - 3;
var BG_COLORS = exports.BG_COLORS = {
  red: '#d74545',
  blue: '#448aff'
};
var COLORS = exports.COLORS = {
  checker: {
    light: 'red',
    dark: 'blue'
  },
  cell: {
    true: 'black',
    false: 'white'
  }
};
var PLAYER_COLOR = exports.PLAYER_COLOR = {
  1: COLORS.checker.light,
  2: COLORS.checker.dark
};
var MOVES = exports.MOVES = {
  MOVE_COMPLETED: 0,
  CAN_EAT_MORE: 1
};

},{}],8:[function(require,module,exports){
'use strict';

var _Checkers = require('./Checkers');

window.onload = function () {
  var homeDOM = document.getElementById('home');
  var gameDOM = document.getElementById('game');
  var boardDOM = document.getElementById('board');
  var newGamePopup = document.getElementById('new_game_popup');
  var showGame = function showGame() {
    homeDOM.style.height = '0';
    gameDOM.style.height = '100%';
  };
  var createSoloBtn = document.getElementById('create_solo');
  var createOnlineBtn = document.getElementById('create_online');
  var createOnlineRoom = document.getElementById('create_room');

  createSoloBtn.addEventListener('click', function (e) {
    window.game = new _Checkers.Checkers(boardDOM);
    window.game.start();
    showGame();
  });

  createOnlineBtn.addEventListener('click', function (e) {
    newGamePopup.style.left = '0';
    newGamePopup.style.opacity = '1';
    document.body.classList.toggle('popup_showing');
  });

  document.body.addEventListener('click', function (e) {
    var className = this.getAttribute('class');
    if (className && className.indexOf('popup_showing') !== -1 && e.target === newGamePopup) {
      newGamePopup.style.left = '-100%';
      newGamePopup.style.opacity = '0';
      document.body.classList.remove('popup_showing');
    }
  });

  createOnlineRoom.addEventListener('click', function (e) {
    var name = newGamePopup.querySelector('#game_name').value || 'Без названия';
  });

  // window.game = online ? new CheckersOnline(boardDOM) : new Checkers(boardDOM)
};

},{"./Checkers":4}]},{},[8])
