//CLOSURES - A Closure is a function that references variables from its outer scope to its inner scope
//LEXICAL SCOPE - A Lexical scope in js means a variable defined outside a function can be accesible inside a function. But opposite is not true (a variable defined inside a function cannot be accesible outside a function)

// var username = 'A'

// //Global Scope
// function test() {
//     //Local Scope
// console.log(username); //A (no issues)
// }

//CLOSURE FUNCTION
//Example 1
//Global Scope
// function sub() {
//     var userName = 'A'
//     //Inner Scope 2
//     function closure() {
//         //Inner Scope
//         alert(userName)
//     }
//     closure()
// }
// sub()//A

//Example 2
// function sub() {
//     var userName = 'A'
//     function closure() {
//         console.log(userName);
//     }
//     return closure
// }

// const out = sub()
// sub()()//A
// out()//A

//CLOSURE SCOPE CHAIN - Access to all variables in outer scope and not only of parent
// global scope
// const e = 10;
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       // outer functions scope
//       return function (d) {
//         // local scope
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// console.log(sum(1)(2)(3)(4)); // 20

//Q
// let countN = 0
// function printCount() {
//     if (countN === 0) {
//         let count = 1//Shadowing
//         console.log(count);//1
//     }
//     console.log(countN)//0 referencing outside scope
// }
// printCount()

//Q 
//Write code for this:
// var addSix = createBase(6)
// addSix(10)//returns 16
// addSix(21)//returns 27

// function createBase(base) {
//     return function(n) {
//         console.log(base + n);
//     }
// }
// var addSix = createBase(6)
// addSix(10)//16
// addSix(21)//27

//Q
//TIME OPTIMIZATION
//EXPENSIVE CODE:
// function find(index) {
//     let a = []
//     for (let i = 0; i <= 10000; i++) {
//         a[i] = i * i
//     }
//     console.log(a[index]);
// }
// console.time("6")
// find(6) //36 6: 0.43896484375 ms
// console.timeEnd("6")
// console.time("12")
// find(12) // 144 12: 0.425048828125 ms
// console.timeEnd("12")

//OPTIMIZED CODE
// function find() {
//     let a = []
//     for (let i = 0; i <= 10000; i++) {
//         a[i] = i * i
//     }
//     return function(index) {
//         console.log(a[index]);
//     }
// }
// const findIndex = find()
// console.time("6")
// findIndex(6) //36 6: 0.114990234375 ms
// console.timeEnd("6")
// console.time("12")
// findIndex(12) //144 12: 0.023681640625 ms
// console.timeEnd("12")

//Q (VVIP)
//BLOCK SCOPE and setTimeout
// function a() {
//     for(var i = 0; i < 3; i++) {
//         setTimeout(function log() {
//             console.log(i);
//         }, 0)
//     }
// }

// a() //3 3 times
// i i i
//This is because var does not have a block scope but a function scope
//Initially var value is 0 . But it will not be printed right away as setTimeout runs after complete code has run.So we have reference to i variable in our memory.After last time loop runs setTimeout will run. At that time it will check current value of i = 3.This will print 3.As var has no block scope the values are not checked individually. 

//Solution 1. Using Let 
// function a() {
//     for (let i = 0; i < 3; i++) {
//         setTimeout(function log() {
//             console.log(i);
//         }, i * 1000)
//     }
// }

// a() //0 1 2
// {
//     i = 0
// }
// {
//     i = 1
// }
// {
//     i = 2
// }
//This is due to let having block scope. So diff memory space will be created for each running of the loop

//Solution 2. Using var and CLOSURES
// function a() {
//     for (var i = 0; i < 3; i++) {
//         function inner(i) {
//             setTimeout(function log() {
//                 console.log(i);
//             }, i * 1000)
//         }
//         inner(i)
//     }
// }

// a() // 0 1 2
// //This works because a Function scope is created here. So it will not reference the same memory space. But a whole diff memory space will be created for each running of the loop

//Q
//PRIVATE VARIABLES (Create a private Counter)
// function Counter() {
//     var _counter = 0

//     function increment(inc) {
//         _counter += inc
//     }
//     function retrive() {
//         console.log('COUNTER =', _counter);
//     }
//     function privateFunction() { }

//     return {
//         increment,
//         retrive,
//         publicFunction: function () {
//             //can call privateFunction
//         }
//     }
// }

// const count = Counter()
// count.increment(6)
// count.increment(8)
// count.retrive()
//_counter cannot be accesed from outside
//This is a Private Counter as we are not directly manipulating the value from outside but using functions to maipulate the values

//Q
//Module Pattern
// var Module = (function () {
//     function privateFunction() {
//         //do something (Like an Api call)
//     }

//     return {
//         publicFunction: function () {
//             //can call privateFunction (wants the results of the Api call. But dont want to maipulate the privateFunction)
//         }
//     }
// })()
// //privateFunction is not returned. So they will not accesible from outside the Module

//Q
//Make this run only once
// let view
// function like() {
//     view = 'A'
//     console.log('OUT', view);
// }
// like()

//SOLUTION
// let view
// function like() {
//     let count = 0
//     return function () {
//         if (count > 0) console.log('Already Ran');
//         else {
//             view = 'A'
//             console.log('OUT', view);
//             count++
//         }
//     }
// }
// const likeOut = like()
// likeOut()
// likeOut()
// likeOut()
// likeOut()
// OUT A
// Already Ran
// Already Ran
// Already Ran

//Q
//Create a more Generic Function of above
//Library LoadAsh already has implementation
//Once - Polyfill

// function runOnlyOnce (fn, context) {
//     let out
//     return function () {
//         if(fn) {
//             out = fn.apply(context || this, arguments)
//             fn = null
//         }
//         return out
//     }
// }

// const output = runOnlyOnce((a, b) => console.log('RAN', a, b))
// output(1, 2)
// output(1, 2)
// output(1, 2)
// output(1, 2)
//RAN 1 2(Only 1 time)

//Q
//Memoize/Caching Implementation
// function memoize(fn, context) {
//     let res = {}
//     return function(...arguments) {
//         let argsCache = JSON.stringify(arguments)
//         if(!res[argsCache]) {
//             res[argsCache] = fn.call(context || this, ...arguments)
//         }
//         return res[argsCache]
//     }
// }

// function expensive (num1, num2) {
//     for (let i = 0; i < 10000; i++) {}
//     console.log(num1, num2);
// }

// const memoizeOut = memoize(expensive)
// console.time("5, 6")
// memoizeOut(5, 6);
// console.timeEnd("5, 6")
// console.time("7, 8")
// memoizeOut(7, 8);
// console.timeEnd("7, 8")
//5, 6: 0.2919921875 ms
//7, 8: 0.156005859375 ms