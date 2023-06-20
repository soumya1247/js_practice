//This keyword in CLASS
// class User {
//     constructor(name) {
//         this.name = name
//     }
//     getName() {
//        console.log(this.name);
//     }
// }

// const user = new User('A')
// console.log(user);//User {name: 'A'}
// user.getName()//A

//Q
// const user = {
//     firstName: 'A',
//     getName() {
//         const firstName = 'B'
//         console.log(this.firstName);
//     }
// }

// user.getName()//A

//Q
//Output?
// function getUser () {
//     return {
//         name: 'A',
//         ref: this
//     }
// }
// let user = getUser()
// console.log(user.ref.name);//Nothing as ref is pointing to window
// console.log(user.ref);//Window

//Whenever function is executing all the 'this' will have scope = scope of function 

//SOLUTION
// function getUser () {
//     return {
//         name: 'A',
//         ref() { return this}
//     }
// }
// let user = getUser()
// console.log(user.ref().name);//A

//Q
//Output?
// const user = {
//     name: 'A',
//     logMessage() {
//         console.log(this.name);
//     }
// }

// setTimeout(user.logMessage, 1000)//undefined
//Here user.logMessage is not passed as a method but as a callback function due to setTimeout.So user.logMessage will execute independently and will not have access to user object

//SOLUTION
// const user = {
//     name: 'A',
//     logMessage() {
//         console.log(this.name);
//     }
// }

// setTimeout(function() {user.logMessage()}, 1000)//A //Here it is passed as method and has access to user object

//Q
//Object Calculator
// const Calculator = {
//     read() {
//         this.a = +prompt("a =", 0)
//         this.b = +prompt("b=", 0)
//     },
//     sum() {
//         return this.a + this.b
//     },
//     mul() {
//         return this.a * this.b
//     }
// }

// Calculator.read()
// console.log(Calculator.sum());//10
// console.log(Calculator.mul());//25

//Q
//Output?
// var length = 4
// function callback() {
//     console.log(this.length);
// }

// const obj = {
//     length: 5,
//     method(fn) {
//         fn()
//     }
// }

// obj.method(callback)//4 (This is because callback function and it is executed independently and does not have access to obj.So window length is taken)

// Q
// Output?
// var length = 4
// function callback() {
//     console.log(this.length);
// }

// const obj = {
//     length: 5,
//     method() {
//         console.log(arguments);//Arguments(3) [ƒ, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
//         arguments[0]()
//     }
// }

// obj.method(callback, 2, 3)//3 Here it is also passed as a callback function. But it is executed in context of arguments array which is of length 3.So 3 printed
//It is executed like arguments.fn() [like an object]

//Q
//implement following:
// calc.add(10).mul(10).sub(10).div(10)

// let calc = {
//     total: 0,
//     add(a) {
//         this.total += a
//         return this
//     },
//     mul(a) {
//         this.total *= a
//         return this
//     },
//     sub(a) {
//         this.total -= a
//         return this
//     },
//     div(a) {
//         this.total /= a
//     }
// }

// const result = calc.add(10).mul(10).sub(10).div(10)
// console.log(calc.total);//9