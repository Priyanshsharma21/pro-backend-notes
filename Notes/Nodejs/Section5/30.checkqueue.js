const fs = require('fs')


//! Scanario 1
// fs.readFile(__dirname + '/25.EventLoop.txt', () => {
//     console.log("IO Queue - File 1")
//     setImmediate(() => console.log("Set Immidiate Inner inside IO- Check Queue"))
// })


// process.nextTick(() => console.log("Next Tick Queue"))
// Promise.resolve().then(() => console.log("Promise Queue"))
// setTimeout(() => console.log("Timer Queue"), 0)

// //Check Queue
// setImmediate(() => console.log("Set Immidiate - Check Queue"))

// for (let i = 0; i < 20000000; i++) {}


//* -> Check queue are executed after Micro Task callbacks, TImer callbacks and I/o Callbacks are ececuted

//* -> 1. Micro Task Queue executes, then Timer then Goes to IO but there is nothing, Goes to polling - there it completed read file operation and callback fucton pushed to IO queue., event loop goes to check queue which is empty right now.

//*-> 2. Secnd iteration -   Micro queue, timer and then IO in IO it see the callback - execute it and one callback push into Check queue - And then finally callback inside the check queue is executes






//! Scanario 2
// fs.readFile(__dirname + '/25.EventLoop.txt', () => {
//     console.log("IO Queue - File 1")
//     setImmediate(() => console.log("Set Immidiate Inner inside IO- Check Queue 2"))
//     process.nextTick(() => console.log("Next Tick Queue 2"))
//     Promise.resolve().then(() => console.log("Promise Queue 2"))
// })


// process.nextTick(() => console.log("Next Tick Queue 1"))
// Promise.resolve().then(() => console.log("Promise Queue 1"))
// setTimeout(() => console.log("Timer Queue 1"), 0)

// //Check Queue
// setImmediate(() => console.log("Set Immidiate - Check Queue 1"))

// for (let i = 0; i < 20000000; i++) {}




//!Note -> MicroTask queue callbacks are executed after IO callbacks and before Check Queue

// - Initially - 1 in nexttick, 1 in promise, 1 in timer.
//! Execute nexttick
//! Execute Promise
//! Execute Timer
//! Goes to IO - No CB
//! Goes to IO - Pooling Phase - Complete Read File and CB in IO puched.
//! Goes to Check and Close - empty
//! Second Iteration - No nexttick, promise, Timer
//! Second Iteration - See CB in IO - executed.
//! Second Iteration - CB in Nexttick, Promise and Check again.
//! Second Iteration - See CB in netticl, promise execute it, and then timer - io and then check - execute it.









//! Scanario 3


// setImmediate(() => console.log("Set Immidiate 1"))
// setImmediate(() => {    
//     console.log("Set Immidiate 2")
//     process.nextTick(() => console.log("Next Tick Queue 2"))
//     Promise.resolve().then(() => console.log("Promise Queue 2"))
// })


// setImmediate(() => console.log("Set Immidiate 3"))


// O/P - immidiate 1 - 2 - nexttick1 - promise1 - immidiate 3

// Notes - Microtask queue executes in between check queue callbacks.




//! Scanario 3

setTimeout(() => console.log("Timer Queue"), 0)
setImmediate(() => console.log("Set Immidiate 3"))

// we get timer first then immediate and in next run we will see vise versa.
//Note- when running timeout with 0ms delay and setImmidiate the order of executon can never be gurrentiied.

