"use strict";

var _test_module = _interopRequireDefault(require("./test_module1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//babel 不能转译模块
_test_module.default.fn1();