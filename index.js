var a = "hello" || ""; // a = 'hello'
var b = "" || []; // b = []
var c = "" || undefined; // c = undefined
var d = 1 || 5; // d = 1
var e = 0 || {}; // e = {}
var f = 0 || "" || 5; // f = 5
var g = "" || "yay" || "boo"; // g = 'yay'

var a = "hello" && ""; // a = ''
var b = "" && []; // b = ''
var c = undefined && 0; // c = undefined
var d = 1 && 5; // d = 5
var e = 0 && {}; // e = 0
var f = "hi" && [] && "done"; // f = 'done'
var g = "bye" && undefined && "adios"; // g = undefined

var foo = function (val) {
  // if val evaluates to falsey, 'default' will be returned instead.
  return val || "default";
};
console.log(foo("burger")); // burger
console.log(foo(100)); // 100
console.log(foo([])); // []
console.log(foo(0)); // default
console.log(foo(undefined)); // default
