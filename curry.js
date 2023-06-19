//CURRY FUNCTION
// const curry = function(a) {
//     return function(b) {
//         return function(c) {
//             return a + b + c
//         }
//     }
// }

// console.log(curry(4)(3)(3));//10

//Q
//Implement evaluate
// evaluate("sum")(4)(2) => 6 
// evaluate("mul")(4)(2) => 8
// evaluate("sub")(4)(2) => 2
// evaluate("div")(4)(2) => 2   

// function evaluate(op) {
//     return function (a) {
//         return function(b) {
//             if (op === 'sum') return a + b
//             else if (op === 'mul') return a * b
//             else if (op === 'sub') return a - b
//             else if (op === 'div') return a / b
//             else return "Invalid Operation"
//         }
//     }
// }

// const evaluateOut = evaluate("sum")
// console.log(evaluateOut(4)(5));//9
// console.log(evaluateOut(5)(6));//11
// console.log(evaluate("sum")(4)(2));//6
// console.log(evaluate("mul")(4)(2));//8
// console.log(evaluate("sub")(4)(2));//2
// console.log(evaluate("div")(4)(2));//2

//Q
//INFINITE CURRYING - sum(1)(2)(3)...(n)
// function sumInfinite(a) {
//     return function(b) {
//         if (b) {
//             return sumInfinite(a + b)
//         }
//         return a
//     }
// }

// console.log(sumInfinite(1)(2)(3)(4)(5)());//15

//Q
//CURRY vs PARTIAL APPLICATION (No of function >= passed arguments is Curry, Less than that is partial)
//1.CURRY
// const curry = function(a) {
//     return function(b) {
//         return function(c) {
//             return a + b + c
//         }
//     }
// }

//2.PARTIAL APPLICATION
// const partialApplication = function (a) {
//     return function (b, c) {
//         return a + b + c
//     }
// }
// console.log(partialApplication(2)(3, 4));//9


//Q
//REAL WORLD EXAMPLE OF CURRYING
//MANIPULATING DOM
// function updateElementText(id) {
//     return function(content) {
//         document.querySelector("#" + id).innerText = content
//     }
// }

// const update = updateElementText("heading")
// update("HELLO NEW")
//Here document.querySelector is not needed multiple times. Just calling updateElementText will work and this can be used multiple times to update the text

//Q
//Convert f(a, b, c) to f(a)(b)(c)
// function curry (fn) {
//     return function curriedFunc(...args) {
//         if (args.length >= fn.length) {
//             return fn(...args)
//         } else {
//             return function (...next) {
//                 return curriedFunc(...args, ...next)
//             }
//         }
//     }
// }

// //1st case args = 1
// //2nd case args = 1 next = 2 curriedFunc(1, 2)
// //3rd case args = 1, 2 next = 3 curriedFunc(1, 2, 3)
// //4th case args = 1, 2, 3 next = 4 curriedFunc(1, 2, 3, 4)
// //curriedFunc(1, 2, 3, 4) called after args.length >= fn.length and 10 returned

// const sum = (a, b, c, d) => a + b + c + d
// const sumCurry = curry(sum)
// console.log(sumCurry(1)(2)(3)(4));//10