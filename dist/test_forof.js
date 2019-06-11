"use strict";

var arr = ['a', 'b', 'c', 'd'];
console.log('------for in------');

for (var i in arr) {
  console.log(i);
}

console.log('------for of------');

for (var _i = 0, _arr = arr; _i < _arr.length; _i++) {
  var _i2 = _arr[_i];
  console.log(_i2);
}