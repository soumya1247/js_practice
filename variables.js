//Scope - A scope is a certain region of a program where a defined variable can be recognized and beyond that it cannot be recognized

// {
//     var vara = 5
// }
// console.log(vara)//5 (No issues as var do not have block scope)

// {
//     let leta = 5
// }
// console.log(leta) //uncaught ReferenceError: leta is not defined(Due to block scope)

// function func() {
//     var varb = 6
// }
// console.log(varb) // Uncaught ReferenceError: varb is not defined(Due to var having function scope)

// function func() {
//     let letb = 6
// }
// console.log(letb) //Uncaught ReferenceError: letb is not defined

// console.log(a) //undefined due to hoisting
// var a = 5

// function test() {
//     let letb = 'Hi'

//     if (true) {
//         let letb = 'Hello'
//         console.log(letb); //Hello (Shadowing due to block scope)
//     }

//     console.log(letb);//Hi
// }

// test()

//var can be shadowed but let but let cannot be shadowed by var

// function test() {
//     let letb = 'Hi'
//     var varb = 'Hi'

//     if (true) {
//         let varb = 'Hello' //Shadowing
//         var letb = 'Hello' //Illegal Shadowing
//         console.log(varb); //Hello (Shadowing due to block scope)
//     }

//     console.log(varb);//Hi
// }

// test()

// var varc
// var varc //This is fine

// let letc
// let letc //This cannot be done(Same as const)

// const constc //cannot be done. A value needs to be declared
// const constc = 7 //This is Fine

// var vard = 5
// vard = 6 // This is Fine(Same as let)

// const constd = 5
// constd = 6 //Uncaught TypeError: Assignment to constant variable.


//JAVASCRIPT EXECUTION CONTEXT

//1.CREATION PHASE:
//A.Creates a Window Object
//B.Assigns a Memory Heap for Variables and Functions
//C.Initializes variables as undefined and initializes whole functions

//EXECUTION PHASE:
//Assigns values to vaiables and Executes teh Functions

// console.log(count);//undefined(var is Hoisted with value as 'undefined')
// var count = 1//(var is assigned value here)

//let , const is also Hoisted but they are in Temporal Dead Zones which will be causing issues
// console.log(count);//Uncaught ReferenceError: Cannot access 'count' before initialization
// let count = 1

//Q 
// function abc() {
//     console.log(a)//undefined due to Hoisting
//     var a = 5 
// }

// abc()

//Q
// function abc() {
//     console.log(a, b, c) //b, c will be Hoisted to Temporal Dead Zones
//     var a = 5 
//     let b = 6
//     const c = 7
// }

// abc()

//var, let , const diff
// 1.Scope(Block and Function)
// 2.Hoisting(Hoised and Temporal Dead Zones)
// 3.Redeclaration in same scope(var(var a var a) vs let, const )
// 4.Initialization with value(const(const a not fine const a = 5 fine) vs var, let)
// 5.Changing values(const(const constd = 5 constd = 6 not fine) vs let, var)
// 6.Shadowing
// 4 and 5 let vs const