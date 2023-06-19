//MAP Method executes the callback function provided for each individual element of the array and pushes the executes the executed result to a new array. Thus a new array is returned with the new values

// //MAP
// arr = [1, 2, 3]
// const a = arr.map((el, idx) => (
//     el * 2
// ))

// console.log(a);//[2, 4, 6]

//PolyFill MAP
// Array.prototype.myMap = function (cb) {
//     let res = []
//     for (let i = 0; i < this.length; i++) {
//         res.push(cb(this[i], i, this))
//     }
//     return res
// }

// const b = arr.myMap((el, idx) => (
//     el * 2
// ))

// console.log(b);//[2, 4, 6]

//FILTER Method executes the callback function provided for each individual element of the array and pushes the prev array values if result of execution is true .Thus a new array is returned with the new values

//FILTER
// arr = [1, 2, 3]
// const a = arr.filter((el, idx) => (
//     el > 1
// ))
// console.log(a);//[2, 3]

//PolyFill Filter
// Array.prototype.myFilter = function(cb) {
//     let res = []
//     for(i = 0; i < this.length; i++) {
//         if (cb(this[i], i, this)) {
//             res.push(this[i])
//         }
//     }
//     return res
// }
// const b = arr.myFilter((el, idx) => (
//     el > 1
// ))
// console.log(b);//[2, 3]

//REDUCE Method executes the callback function provided for each individual element of the array accumulates the value .Thus a single accumulated value is returned

//REDUCE
// arr = [1, 2, 3]
// const a = arr.reduce((acc, el, idx) => (
//     acc + el
// ), 0)
// console.log(a);//6

//PolyFill Reduce
// Array.prototype.myReduce = function(cb, initialValue) {
//     var accumulator = initialValue
//     for(let i = 0; i < this.length; i++) {
//         accumulator = accumulator ? cb(accumulator, this[i], this) : this[i]//if initialValue is not given then first value of array is taken(Note 0 is not taken if no value is provided)
//     }
//     return accumulator
// }
// const b = arr.myReduce((acc, el, idx) => (
//     acc + el
// ), 0)
// console.log(b);//6

//MAP vs forEach

//1.MAP returns a new Array , forEach does not return anything
// arr = [1, 2, 3]
// const a = arr.map((el) => { return el * 2})
// const b = arr.forEach(el => { return el * 2});
// console.log(a, b)// [2, 4, 6] undefined

//2.forEach will modify the original Array
// const a = arr.map((el) => { return el * 2})
// const b = arr.forEach((el, i) => { arr[i] = el * 3});
// console.log(a, b, arr)// [2, 4, 6] undefined (3) [3, 6, 9]

//3.Map can be chained forEach Cannot like .map().filter()

//Q
//Return total marks of students with marks > 60 after 20 marks have been added to those who scored less than 60
// let students = [
//     { name: 'A', marks: 80},
//     { name: 'B', marks: 69},
//     { name: 'C', marks: 35},
//     { name: 'D', marks: 55},
// ]

// const totalMarks = students.map((stu) => {
//     if (stu.marks < 60) stu.marks += 20
//     return stu
// }).filter((stu) => stu.marks > 60).reduce((acc, cur) => (acc + cur.marks) , 0)

// console.log(totalMarks)//224