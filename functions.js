//Function Declaration, definition, statement
// function square(n) {
//     return n * n
// }

//Function Expression
// const square = function (n) {
//     return n * n
// }

//Anonymous Function - Assigned to a variable
//function (n) {
//     return n * n
// }

//First Class Functions - Functions treated as variables
// function square(n) {
//     return n * n
// }

// function display(fn) {
//     console.log('VALUE', fn(5))
// }

// display(square)

//IIFE
// console.log((function square(n) {
//     return n * n
// })(5))

//Q

// (function (x) {
//     return (function(y) {
//         console.log(x)
//     })(2)
// })(1) //1 (Searching in outer scope - Closure)

//Function Scope
// The following variables are defined in the global scope
// var num1 = 20;
// var num2 = 3;
// var name = "Chamakh";

// // This function is defined in the global scope
// function multiply() {
//   return num1 * num2;
// }

// console.log(multiply()); // 60

// // A nested function example
// function getScore() {
//   var num1 = 2;
//   var num2 = 3;

//   function add() {
//     return `${name} scored ${num1 + num2}`; //Shadowing the global num1 and num2
//   }

//   return add();
// }

// console.log(getScore()); // "Chamakh scored 5"//Taking from local scope for function in case of var


// hoisted() //HERE (Functions are Hoisted as a whole. Unlike variables where they are hoisted with undefined values)
// function hoisted() {
//     console.log('HERE');
// }

// hoisted()
// function hoisted() {
//     console.log(a);//undefined
//     var a = 5
//     console.log('HERE');
// }

//Q
// var x = 21
// var fun = function() {
//     console.log(x);//undefined - Here a separate execution context is created for that function/local scope. So x is found here as 'undefined'.Otherwise it would have been 21
//     var x = 20
// } 
// fun()

// var x = 21
// var fun = function() {
//     console.log(x);//undefined - Temporal Dead Zone Error
//     let x = 20
// } 
// fun()

// var x = 21
// var fun = function() {
//     console.log(x);//21
// } 
// fun()

//PARAMS vs ARGUMENTS
// function example(num) { //num is param
//     console.log(num * num)
// }

// example(5)//Arguments

//SPREAD vs REST OPERATORS
// function example(num1 , num2) { //passed as 2 and 3
//     console.log(num1 * num2) //6
// }

// var spread = [2, 3]
// example(...spread)//Spread Operator

// function example(...nums) { //passed as [2, 3] //REST Operator
//     console.log(nums)
//     console.log(nums[0], nums[1])//2, 3
// }

// var spread = [2, 3]
// example(...spread)//[2, 3]
// example(4, 5)//[4, 5]

// const fn = (a, ...nums, x, y) => {
//     console.log(x, y);//Uncaught SyntaxError: Rest parameter must be last formal parameter
// }
// fn(5, 6, 7, 8)

//CALLBACK function
// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
// function greeting(name) {
//     alert(`Hello, ${name}`);
//   }

//   function processUserInput(callback) {
//     const name = 'HI';
//     callback(name);
//   }

//   processUserInput(greeting);//Hello, HI 

//Examples of Callback - Map, Filter, reduce, setTimeout or above Example 

//NORMAL Functions vs ARROW Functions
//1.Syntax
//2.Implicit Return Keyword(Normal Function return is required, arrow function not necessary like () => ()) 
//3.Arguments Keyword

// function fn() {
//     console.log(arguments);//Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
//     console.log(arguments[0]);//1
// }
// fn(1, 2, 3)

// const fnArr = () => {
//     console.log(arguments);//Uncaught ReferenceError: arguments is not defined
// }
// fnArr(1, 2, 3)

//4.'this' keyword(ARROW Function has same scope as outer parent Normal Function.Normal Function has scope of outer Block)
// var u1 = 'HELLO'
// let user = {
//     u1: 'HI',
//     fnArr: () => {
//         console.log('ARROW', this.u1) 
//     },
//     fn: function() {
//         console.log('NORMAL', this.u1); 
//     }
// }

// user.fnArr()//ARROW HELLO
// user.fn()//NORMAL HI

// var u1 = 'GLOBAL HELLO'
// let user1 = {
//     u1: 'HELLO',
//     parent: function example() {
//         let user = {
//             u1: 'HI',
//             fnArr: () => {
//                 console.log('ARROW', this.u1) //Here Arrow has scope same as example/parent. The scope of parent has u1 as 'HI'. That is why ARROW HELLO islogged instead of ARROW GLOBAL HELLO
//             },
//             fn: function () {
//                 console.log('NORMAL', this.u1);
//             }
//         }
//         user.fnArr()//ARROW HELLO
//         user.fn()//NORMAL HI
//     }
// }

// user1.parent()

