"use strict";
//Not a good way to do this
// function addTwo(num){
//     return num + 2
// }
// addTwo(5);
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // return num + 2
    return "hello";
}
addTwo(5);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
function signUpser(name, email, password) {
}
loginUser('h', 'm@m.com');
signUpser("Mayur", "mayur@12.com", 3);
// function getValue(myVal: number): string{
//     if(myVal>5){
//         return true;
//     }
//     return "200 OK"
// }
var getHello = function (s) {
    return "";
};
var heros = ['thor', 'spiderman', 'ironman'];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
