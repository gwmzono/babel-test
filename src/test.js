// let o = {
//   a:1,
//   b:2,
//   c:3,
//   d:4
// };
// let {b, ...obj} = o;
// let hehe = o.c ** 5;
// (val) => (val ** 6);
class Person {
  constructor(fname, lname){
    this.fname = fname;
    this.lname = lname;
    this.a = 'hehe';
  }
  toString(){
  console.log(this.fname + this.lname);
  }
}
let test = new Person('zhang', "yu");
test.toString();

let arr = ['a', 'b', 'c', 'd', 'e'];
for(let i of arr){
  console.log(i);
}
