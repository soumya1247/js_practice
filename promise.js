//Async Code
// console.log('start');
// setTimeout(() => {
//     console.log(`Message`);
// }, 0)
// console.log('stop');
// start
// stop
// Message

//Q
//Output?
// console.log('start');
// function imp(msg) {
//     setTimeout(() => {
//         return msg;
//     }, 0)
// }
// const message = imp(`Message`)
// console.log(message);

// console.log('stop');
// start
// undefined
// stop

//Transform so that output comes
// console.log('start');
// function imp(msg, cb) {
//     setTimeout(() => {
//         cb(msg);
//     }, 0)
// }
// const message = imp(`Message`, function (msg) {
//     console.log(msg);
// })

// console.log('stop');
// start
// stop
// Message

//CALLBACK HELL
// console.log('start');
// function imp(msg, cb) {
//     setTimeout(() => {
//         cb(msg);
//     }, 0)
// }

// function imp1(msg, cb) {
//     setTimeout(() => {
//         cb(msg);
//     }, 0)
// }

// const message = imp(`Message`, function (msg) {
//     console.log(msg);
//     imp1(`Message1`, function(msg1) {
//         console.log(msg1);
//     })
// })

// console.log('stop');
// start
// stop
// Message
// Message1

//Q
//Output?
// console.log('start');
// function imp(msg, cb) {
//     setTimeout(() => {
//         cb(msg);
//     }, 1000)
// }

// function imp1(msg, cb) {
//     setTimeout(() => {
//         cb(msg);
//     }, 500)
// }

// const message = imp(`Message`, function (msg) {
//     console.log(msg);
//     imp1(`Message1`, function(msg1) {
//         console.log(msg1);
//     })
// })

// console.log('stop');
// start
// stop
// Message
// Message1
//Only after 1000 the 1st first cb is executed and then 2nd function is pushed to stack after another 500

//Q
//Output?
// console.log('start');
// function imp(msg, cb) {
//     setTimeout(() => {
//         cb(msg);
//     }, 1000)
// }

// function imp1(msg, cb) {
//     setTimeout(() => {
//         cb(msg);
//     }, 500)
// }

// imp(`Message`, function (msg) {
//     console.log(msg);

// })
// imp1(`Message1`, function(msg1) {
//     console.log(msg1);
// })

// console.log('stop');
// start
// stop
// Message1
// Message

//Q
//Output?
// console.log('start');
// function imp(msg, cb) {
//     setTimeout(() => {
//         cb(msg);
//     }, 1000)
// }

// function imp1(msg, cb) {
//     setTimeout(() => {
//         cb(msg);
//     }, 1000)
// }

// function imp2(msg, cb) {
//     setTimeout(() => {
//         cb(msg);
//     }, 1000)
// }

// const message = imp(`Message`, function (msg) {
//     console.log(msg);
//     imp1(`Message1`, function (msg1) {
//         console.log(msg1);
//         imp2(`Message2`, function (msg2) {
//             console.log(msg2);
//         })
//     })
// })

// console.log('stop');
// start
// stop
// Message
// Message1
// Message2
//This is CALLBACK HELL

//PROMISE
//Promise basically represents the upcoming completion or failure of an async event and its resulting value or error

// console.log('start');

// const sub = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const result = true
//         if (result) resolve('PROMISE FULFILLED')
//         else reject(new Error('PROMISE REJECTED'))
//     }, 0);
// })
// console.log(sub); //Promise<>

// sub.then((res) => console.log(res)).catch((e) => console.error(e))

// console.log('stop');
// start
// stop
// PROMISE FULFILLED

//Q
//Output?
// console.log('start');
// const sub = Promise.resolve('PROMISE FULFILLED').reject('PROMISE REJECTED')// Uncaught TypeError: Promise.resolve(...).reject is not a function
// sub.then((res) => console.log(res)).catch((e) => console.error(e))
// console.log('stop');


//IMPLEMENTING PROMISE FOR CALLBACK HELL
//CALLBACK HELL
// console.log('start');
// function imp(msg, cb) {
//     setTimeout(() => {
//         cb(msg);
//     }, 1000)
// }

// function imp1(msg, cb) {
//     setTimeout(() => {
//         cb(msg);
//     }, 1000)
// }

// function imp2(msg, cb) {
//     setTimeout(() => {
//         cb(msg);
//     }, 1000)
// }

// const message = imp(`Message`, function (msg) {
//     console.log(msg);
//     imp1(`Message1`, function (msg1) {
//         console.log(msg1);
//         imp2(`Message2`, function (msg2) {
//             console.log(msg2);
//         })
//     })
// })

// console.log('stop'); 

//PROMISE
// console.log('start');
// function imp(msg) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(msg);
//         }, 1000)
//     })
// }

// function imp1(msg) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(msg);
//         }, 1000)
//     })
// }

// function imp2(msg) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(msg);
//         }, 1000)
//     })
// }

//1st way
// imp('Message').then((res) => {
//     console.log(res);
//     imp1('Message1').then((res1) => {
//         console.log(res1);
//         imp2('Message2').then((res2) => {
//             console.log(res2);
//         })
//     })
// }).catch((e) => console.error(e))

//2nd way(Promises CHAINING)
// imp('Message')
//     .then((res) => {
//         console.log(res);
//         return imp1('Message1')
//     })
//     .then((res1) => {
//         console.log(res1);
//         return imp2('Message2')
//     })
//     .then((res2) => {
//         console.log(res2);
//     })
//     .catch((e) => console.error(e))
// console.log('stop');
// start
// stop
// Message
// Message1
// Message2

//3rd way(Promise Combinators)

//A.Promise.all(If any Promise fails all of the promises will fail)
//It does not depend on order.So if 2nd fails , all will fail. 1st will not return as well
// Promise.all([
//     imp('Message'),
//     imp1('Message1'), 
//     imp2('Message2')
// ]).then((res) => console.log(res)).catch((e) => console.error(e))

// console.log('stop');
// start
// stop
//['Message', 'Message1', 'Message2']

//B.Promise.race(It returns the 1st Promise that is resolved or rejected)
// Promise.race([
//     imp('Message'),
//     imp1('Message1'), 
//     imp2('Message2')
// ]).then((res) => console.log(res)).catch((e) => console.error(e))

// console.log('stop');
// start
// stop
// Message

//C.Promise.allSettled(Works like Promise.all. But here even if any promise fails , it will return rest of promises)
// Promise.allSettled([
//     imp('Message'),
//     imp1('Message1'), 
//     imp2('Message2')
// ]).then((res) => console.log(res)).catch((e) => console.error(e))

// console.log('stop');

// start
// stop
// (3) [{…}, {…}, {…}]
// {status: 'fulfilled', value: 'Message'}
// {status: 'rejected', reason: 'Message1'}
// {status: 'fulfilled', value: 'Message2'}

//D.Promise.any(Works like Promise.race. But here it returns 1st fulfilled Promise ignoring the rejected ones. So if 1st rejected 2nd Fulfilled. SO it will return 2nd one. If all promises failed only then it will give rejected error)
// Promise.any([
//     imp('Message'),
//     imp1('Message1'), 
//     imp2('Message2')
// ]).then((res) => console.log(res)).catch((e) => console.error(e))

// console.log('stop');
// start
// stop
//Message1

//4th way
//ASYNC AWAIT(Here like Promise.all if any Promise fails all will be failed)
// const asyncFunc = async () => {
//     try {
//         const res1 = await imp('Message')
//         console.log(res1);
//         const res2 = await imp1('Message1')
//         console.log(res2);
//         const res3 = await imp2('Message2')
//         console.log(res3);
//         console.log([res1, res2, res3]);

//     } catch (e) {
//         console.error(e)
//     }
// }

// asyncFunc()
// console.log('stop');
// start
// stop
//Message
//Message1
//Message2
//['Message', 'Message1', 'Message2']

//start
//stop
//Error Message1(For reject in 2nd Func)

//Q
//Output?
// console.log('start');
// const promise = new Promise((res, rej) => {
//     console.log(1);
//     res(2)
//     console.log(3);
// })
// promise.then((res) => console.log(res))
// console.log('end');
//start
//1
//3
//end 
//2
//When Promise is initialized it will find all sync code inside it and execute it like console.log(1)

//Q
//Output?
// console.log('start');
// const promise = new Promise((res, rej) => {
//     console.log(1);
//     console.log(3);
// })
// promise.then((res) => console.log('RETURN' + res))
// console.log('end');
//start
//1
//3
//end 
//Here no resolve is there so it will not be passed to .then. So 'RETURN' undefined is not printed

//Q
//Output?
console.log('start');
const promise = () => new Promise((res, rej) => {
    console.log(1);
    res(2)
})
console.log('middle');
promise().then((res) => console.log(res))
console.log('end');
//start
//middle
//1
//end
//2