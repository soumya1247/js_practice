//CALL, APPLY, BIND
// var obj = { name: 'A'}
// function sayH(b) {
//     return `${this.name} ${b}` 
// }
// console.log(sayH('b'));//undefined b
// console.log(sayH.call(obj, 'b'));//A b
// // console.log(sayH.apply(obj, 'b'));//Uncaught TypeError: CreateListFromArrayLike called on non-object
// console.log(sayH.apply(obj, ['b']));//A b 
//1.For apply All the arguments need to be passed in the form of an array.
//2.For apply if no arguments is passed then it will not cause any issue
// const bind = sayH.bind(obj, 'b')
// console.log(bind());//A b //Bind returns another function which can be executed later. This function execution returns the result of our original functions execution

//Q
//Output?
// var status = 'A';
// setTimeout(() => {
//     var status = 'B';
//     const data = {
//         status: 'C',
//         getStatus() {
//             return this.status
//         }
//     }

//     console.log(data.getStatus());//C (this will print C normally. Even though inside the setTimeout whole block is callback function, But still it will have access to data obj as it is inside the callback function)
//     console.log(data.getStatus.call(this));//A (this refers to the scope of this for the arrow function which has scope of window)
// }, 0)

//Q
//Output?
// const animals = [
//     {name: 'A'},
//     {name: 'B'}
// ]

// function printA(i) {
//     this.print = function() {
//         console.log("#" + i + " " + this.name);
//     };
//     this.print()
// }

// printA()//#undefined
// for(let i = 0; i < animals.length; i++) {
//     printA.call(animals[i], i)
// }

//Q
//Append an Array to another Array
// const a = [1, 2, 3]
// const b = [4, 5, 6]
// a.push.apply(a, b)
// console.log(a);//[1, 2, 3, 4, 5, 6]
// a.push(7, 8, 9)
// console.log(a);//[1, 2, 3, 4, 5, 6, 7, 8, 9]

//Q
//Find Min Max of a number in an array
// const a = [1, 2, 3]
// console.log(Math.max(1,2,3));//3
// console.log(Math.max(a));//NaN
// console.log(Math.max.apply(null, a));//3

//Q
//Output?
// function f() {
//     console.log(this);
// }

// let user = {
//     g: f.bind(null)
// }

// user.g()//window

//Q
//Bind Chaining
// function f() {
//     console.log(this.name);
// }
// g = f.bind({ name: 'A'}).bind({ name: 'B'})
// g()//A (There is no such thing as Bind Chaining)

//Q
//Output?
// function checkP(success, failure) {
//     let password = prompt("Password" , "")
//     if(password === 'password') success()
//     else failure()
// }

// let user = {
//     name: 'A',
//     loggedSuccess() {
//         console.log(this.name, " Logged IN");//Logged IN
//     },
//     loggedFailure() {
//         console.log(this.name, " Logged Failure");
//     }
// }

// checkP(user.loggedSuccess, user.loggedFailure)// Logged IN, Logged Failure(Dont have access to name)
// checkP(user.loggedSuccess.bind(user), user.loggedFailure(user))//A  Logged IN, A Logged Failure

//Q
//Arrow Function Call, Bind, Apply
// const age = 10;
// var age2 = 20;
// var person1 = {
//     name: 'A',
//     age: 20,
//     getAgeArrow: () => console.log(this.age),
//     getAgeArrow1: () => console.log(this.age2),
//     getAge() {
//         console.log(this.age);
//     }
// }
// const person2 = { age: 24}
// person1.getAgeArrow.call(person2) //undefined (This is because arrow points to outer normal function. As it is not there then it points to window)
// person1.getAgeArrow1.call(person2) //20 (var is tagged to window like window.age, while const is not)
// person1.getAge.call(person2) //24 

//POLYFILL CALL
// let car1 = {
//     color: 'RED',
//     car: 'FERRARI'
// }

// function purchaseCar(currency, price) {
//     console.log(`I have purchased this ${this.color} ${this.car} for ${price} ${currency}`);
// }

// Function.prototype.myCall = function (context, ...args) {
//     if (typeof this !== 'function') {
//         throw new Error('This is not a Function')
//     }
//     context.fn = this
//     context.fn(...args)
//     delete context.fn
// }

// purchaseCar.call(car1, '500000', 'rupees') //I have purchased this RED FERRARI for rupees 500000
// purchaseCar.myCall(car1, '600000', 'dollars') //I have purchased this RED FERRARI for dollars 600000

//POLYFILL APPLY
// let car1 = {
//     color: 'RED',
//     car: 'FERRARI'
// }

// function purchaseCar(currency, price) {
//     console.log(`I have purchased this ${this.color} ${this.car} for ${price} ${currency}`);
// }

// Function.prototype.myApply = function (context, args = []) {
//     if (typeof this !== 'function') {
//         throw new Error('This is not a Function')
//     }

//     if(!Array.isArray(args)) {
//         throw new Error('CreateListFromArrayLike called on non-object')
//     }

//     context.fn = this
//     context.fn(...args)
//     delete context.fn
// }

// purchaseCar.apply(car1, ['500000', 'rupees']) //I have purchased this RED FERRARI for rupees 500000
// purchaseCar.myApply(car1, ['600000', 'dollars']) //I have purchased this RED FERRARI for dollars 600000
// purchaseCar.myApply(car1, '600000', 'dollars') //Uncaught Error: CreateListFromArrayLike called on non-object

//POLYFILL BIND
// let car1 = {
//     color: 'RED',
//     car: 'FERRARI'
// }

// function purchaseCar(currency, price) {
//     console.log(`I have purchased this ${this.color} ${this.car} for ${price} ${currency}`);
// }

// Function.prototype.myBind = function (context, ...args) {
//     if (typeof this !== 'function') {
//         throw new Error('Cannot be bound as This is not a Function')
//     }
//     context.fn = this
//     return function (...newArgs) {
//         context.fn(...args, ...newArgs)
//         delete context.fn
//     }
// }

// purchaseCar.bind(car1, '500000', 'rupees')() //I have purchased this RED FERRARI for rupees 500000
// purchaseCar.myBind(car1, '600000', 'dollars')() //I have purchased this RED FERRARI for dollars 600000
// const example = purchaseCar.myBind(car1, '700000')
// example('euros')//I have purchased this RED FERRARI for euros 700000