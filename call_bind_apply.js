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