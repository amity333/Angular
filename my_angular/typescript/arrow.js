//normal
function add(x, y) {
    return x + y;
}
//using arrow
var add1 = function (x, y) { return x + y; };
var add2 = function (x, y) { return x + y; };
var add3 = function (x, y) { return x + y; };
console.log("sum = " + add(10, 20));
console.log("sum = " + add1(10, 20));
console.log("sum = " + add2(10, 20));
console.log("sum = " + add3(10, 20));
var printname = function (name) { return console.log("welcome " + name); };
printname("amit");
var hi = function () { return console.log("hi"); };
hi();
