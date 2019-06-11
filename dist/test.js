"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// let o = {
//   a:1,
//   b:2,
//   c:3,
//   d:4
// };
// let {b, ...obj} = o;
// let hehe = o.c ** 5;
// (val) => (val ** 6);
var Person =
/*#__PURE__*/
function () {
  function Person(fname, lname) {
    _classCallCheck(this, Person);

    this.fname = fname;
    this.lname = lname;
    this.a = 'hehe';
  }

  _createClass(Person, [{
    key: "toString",
    value: function toString() {
      console.log(this.fname + this.lname);
    }
  }]);

  return Person;
}();

var test = new Person('zhang', "yu");
test.toString();
var arr = ['a', 'b', 'c', 'd', 'e'];

for (var _i = 0, _arr = arr; _i < _arr.length; _i++) {
  var i = _arr[_i];
  console.log(i);
}