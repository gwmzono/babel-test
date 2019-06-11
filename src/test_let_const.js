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

{const a = 'foo';
a = 'bar'}
console.log(a);