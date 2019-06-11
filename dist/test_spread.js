"use strict";

function fn1(arg1, arg2, arg3) {
  console.log(arg1, arg2, arg3);
}

fn1.apply(void 0, ['a', 'b', 'c']); //拆分成3个参数并传入fn

function fn2(arg1) {
  var arg2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'preset2';
  var arg3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'preset3';
  console.log(arg1, arg2, arg3); //babel会操作arguments实现
}

fn2('hehe');

function fn3() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  args.forEach(function (item) {
    console.log(item);
  });
}

fn3('arg1', 'arg2', 'arg3');