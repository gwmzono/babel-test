function fn1(arg1, arg2, arg3){
console.log(arg1, arg2, arg3)
}
fn1(...['a', 'b', 'c'])  //拆分成3个参数并传入fn

function fn2(arg1, arg2 = 'preset2', arg3 = 'preset3'){
console.log(arg1, arg2, arg3)  //babel会操作arguments实现
}
fn2('hehe');
function fn3(...args){
  args.forEach(function(item){
    console.log(item);
  })
}
fn3('arg1', 'arg2', 'arg3')