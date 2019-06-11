//babel 可以转译模块，但是不能打包模块(这是module loader的活)，所以浏览器不能直接执行
//浏览器端想使用模块化的话，要么在浏览器端引入一个loader，要么在生产阶段用webpack
import obj1 from './test_module1'

obj1.fn1();