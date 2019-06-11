"use strict";

//语法很简单，用反引号包住字符串，内部用${}包围变量，支持多行内容
var arg1 = 'sam';
var arg2 = 'dean';
console.log("".concat(arg1, "\n and\n  ").concat(arg2, " are\n   brothers"));