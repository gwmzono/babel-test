let arr = ['a','b','c','d']
let obj = {
  a: 4,
  b: 3,
  c: 2,
  d: 1
}
let [arg1,,arg3,arg4] = arr;
console.log(arg1,arg3,arg4) //a c d
let {a, c} = obj;
console.log(a,c); //4 2
let {...o} = obj //o = obj
o.a = 1;
console.log(obj.a); // 4