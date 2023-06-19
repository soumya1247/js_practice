//Q
//Output?
// const func = (function (a) {
//     delete a
//     console.log(a);
// })(5) //5

//Objects with keys as SPACES
// const user = {
//     title: 'A',
//     age: 24,
//     // space key : 'example',Not Possible 
//     "space key": 'example'
// }

// // console.log(user."space key");//Not Possible
// console.log(user["space key"]); //example
// delete user["space key"]
// console.log(user);//{title: 'A', age: 24}

//DYNAMIC KEY-VALUE Pairs to an Object
//Problem
// const name = 'A'
// const age = 'B'
// const user = {
//     name: age
// }
// console.log(user);//{name: 'B'}
//Solution
// const name = 'A'
// const age = 'B'
// const user = {
//     [name]: age
// }
// console.log(user);//{A: 'B'}

//LOOPING in OBJECTS
// const user = {
//     title: 'A',
//     age: 24,
// }

// for (key in user) {
//     console.log(key);//title, age
//     console.log(user[key]);//A, 24
// }

// console.log(Object.keys(user));// ['title', 'age']
// console.log(Object.values(user));// ['A', 24]
// console.log(Object.entries(user));
// [Array(2), Array(2)]
// ['title', 'A'] 
// ['age', 24]

//Q
//Output?
// const obj = {
//     a : 'one',
//     b: 'two',
//     a: 'three'
// }

// console.log(obj);//{a: 'three', b: 'two'}
//2nd a key overrides the first a and final values 'three' is kept

//Q - VVIP
//Output?
// const a = {}
// const b = {key : 'b'}
// const c = {key : 'c'}
// a[b] = 123
// a[c] = 456
// console.log(a);//{[object Object]: 456}
// console.log(a[b]);//456
//This is because Object is passed as key which forcefully when tried to convert to string in object key gives [object Object] error

//Q
//What is JSON.stringfy and JSON.parse
// const obj = {
//     a : 'one',
//     b: 'two',
// }
// const objString = JSON.stringify(obj)
// console.log(objString);//{"a":"one","b":"two"}
// console.log(objString.a);//undefined cannot access the keys

// localStorage.setItem('test', objString)
// console.log(localStorage.getItem('test'));//{"a":"one","b":"two"}
// console.log(JSON.parse(localStorage.getItem('test')));//{a: 'one', b: 'two'}

//Q
// console.log([..."TEST"]);// ['T', 'E', 'S', 'T']

//Q
// const obj = {
//     a : 'one',
//     b: 'two',
// }
// const data = JSON.stringify(obj, ["a"])
// console.log(data);//{"a":"one"}(Only the passed keys will be stringified)

//DESTRUCTURING OF OBJECTS
// const obj = {
//     a: 'one',
//     b: 'two',
//     fullname : {
//         first: 'A',
//         last: 'B'
//     }
// }

// const { a } = obj
// const { a: b } = obj //Renaming
// const { fullname: { first }} = obj //Further Destructuring
// console.log(a);//one
// console.log(b);//one
// console.log(first);//A

//Q
//Output?
// console.log({a : 1} == {a: 1}); //false
// console.log({a : 1} === {a: 1}); //false
//Both objects are created in diff memory spaces that is why false in both cases 

//Q
//Output?
// let person = { name: 'ABC' }
// const members = [person]
// const members1 = person
// person = null
// console.log(members);
// // [{…}]
// // 0: {name: 'ABC'}
// console.log(members1);//{name: 'ABC'}
//Here the whole variable is set to null not the properties inside it. That is why the values are persisting

// let person = { name: 'ABC' }
// const members1 = person
// person.name = null
// console.log(members1);//{name: null} //If properties individually set to null then they will be null