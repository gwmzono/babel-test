"use strict";

/*arrow function
省略function关键字
当参数只有一个时，可以省略小括号
当执行语句只有一条时，可以省略大括号和return关键字
arrow function没有自己的this和arguments，都是从定义环境获取
*/
var arrowPow = function arrowPow(num, n) {
  return Math.pow(num, n);
};

var arrowAdd = function arrowAdd(num1, num2) {
  var num = num1 + num2;
  return num;
};

var bob = {
  _name: "Bob",
  _friends: ['alen', 'sam', 'dean'],
  printFriends: function printFriends() {
    var _this = this;

    this._friends.forEach(function (f) {
      return console.log(_this._name + " knows " + f);
    });
  }
};
var sam = {
  _name: "Sam",
  _friends: ['bob', 'alen', 'dean'],
  printFriends: function printFriends() {
    var that = this; //只能以闭包形式获取this，否则在严格模式下this undefined

    this._friends.forEach(function (f) {
      console.log(that._name + " knows " + f);
    });
  }
};

function arrowSquare() {
  var _arguments = arguments;

  var example = function example() {
    var numbers = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = _arguments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var number = _step.value;
        //直接获取当前环境的arguments
        numbers.push(number * number);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return numbers;
  };

  return example();
}

function square() {
  var _args = arguments; //闭包形式获取arguments

  var example = function example() {
    var numbers = [];
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = _args[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var number = _step2.value;
        numbers.push(number * number);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return numbers;
  };

  return example();
}

var obj = {
  a: 'a',
  b: 'b',
  // timeout: setInterval(function(){
  //   console.log(this.a +' '+ this.b);
  // }, 3000),//undefined undefined
  timeout: function timeout() {
    var _this2 = this;

    this.th = setInterval(function () {
      return console.log(_this2.a + ' ' + _this2.b);
    }, 3000);
  } //----------------------------------------------------

};
console.log(arrowAdd(5, 7), arrowPow(5, 3));
bob.printFriends();
sam.printFriends();
console.log(arrowSquare(2, 4, 7.5, 8, 11.5, 21), //[ 4, 16, 56.25, 64, 132.25, 441 ]
square(3, 5, 8, 4, 9) //[ 9, 25, 64, 16, 81 ]
);
obj.timeout();