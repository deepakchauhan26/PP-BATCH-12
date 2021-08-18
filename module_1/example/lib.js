//code export
// functions
// variables

let a = 10;
function fn(){
    console.log("Hello I am an Function");
    return "hello";
}
function notTobeExported(){
    console.log("Hello I am not exported");
    return "hello there";
}
// code export
module.exports = {
    varName : a,
    fxn : fn, notTobeExported
}
