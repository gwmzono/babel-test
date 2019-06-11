/*arrow function
省略function关键字
当参数只有一个时，可以省略小括号
当执行语句只有一条时，可以省略大括号和return关键字
arrow function没有自己的this和arguments，都是从定义环境获取
*/
var arrowPow = (num, n) => num ** n;
var arrowAdd = (num1, num2) => {var num = num1 + num2;return num;}
var bob = {
  _name: "Bob",
  _friends: ['alen','sam','dean'],
  printFriends() {
    this._friends.forEach(f => console.log(this._name + " knows " + f));
  }
};
var sam = {
  _name: "Sam",
  _friends: ['bob','alen','dean'],
  printFriends() {
    var that = this;//只能以闭包形式获取this，否则在严格模式下this undefined
    this._friends.forEach(function(f){
      console.log(that._name + " knows " + f);
    });
  }
};
function arrowSquare() {
  let example = () => {
    let numbers = [];
    for (let number of arguments) { //直接获取当前环境的arguments
      numbers.push(number * number);
    }
    return numbers;
  };
  return example();
}
function square() {
  var _args = arguments;  //闭包形式获取arguments
  let example = function() {
    let numbers = [];
    for (let number of _args) {
      numbers.push(number * number);
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
  timeout: function(){
    this.th = setInterval(() => console.log(this.a +' '+ this.b), 3000);
  }
}
//----------------------------------------------------

console.log(
  arrowAdd(5,7),
  arrowPow(5,3),
);
bob.printFriends();
sam.printFriends();
console.log(
  arrowSquare(2, 4, 7.5, 8, 11.5, 21), //[ 4, 16, 56.25, 64, 132.25, 441 ]
  square(3, 5, 8, 4, 9) //[ 9, 25, 64, 16, 81 ]
)
obj.timeout();