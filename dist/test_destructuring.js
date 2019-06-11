"use strict";

var arr = ['a', 'b', 'c', 'd'];
var obj = {
  a: 4,
  b: 3,
  c: 2,
  d: 1
};
var arg1 = arr[0],
    arg3 = arr[2],
    arg4 = arr[3];
console.log(arg1, arg3, arg4); //a c d

var a = obj.a,
    c = obj.c;
console.log(a, c); //4 2

var o = Object.assign({}, obj); //o = obj

o.a = 1;
console.log(obj.a); // 4