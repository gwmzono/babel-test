"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

/*
let 块级作用域，无法重复声明
const 
*/
// console.log(a);  //undefined
// let a = 'foo';
// let a = 'foo';
// let a = 'bar';  //无法babel
// {let a = 'foo';}
// console.log(a);  //a is not defined
{
  var _a = 'foo';
  _a = (_readOnlyError("a"), 'bar');
}
console.log(a);