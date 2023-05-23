//!Most of the build in methods in fs modiules are I/O qeue, let's take fs for instance.
const fs = require('fs')



//!scanario 1
// fs.readFile(__dirname + '/25.EventLoop.txt',()=>{
//     console.log("IO 1")
// })

// process.nextTick(()=>console.log("Next Tick 1"))
// Promise.resolve().then(()=>console.log("Promise 1"))

// next tick then promise then IO.
// When call stack is empty after executing the sync code and we have 3 callback function in our 1 - Nexttick, 1- Promise, 1 - IO. - constol goes to event loop. Next tick 1st priotity executes, now next tick is empty, ev check in nect tick, nothing then goes to promise execute it, now check next tick, promise all empty then goes to timer - empty then goes to IO, oh there is one callback, so execute it


// setTimeout(()=>console.log("Timer Queue"), 0)

// fs.readFile(__dirname + '/25.EventLoop.txt',()=>{
//     console.log("IO 1")
// })

// timer then io, but this o/p is not consistent, after serval times of execution we will see IO and then timer.

// But why 
// If you go to google and type - cromium cpp fom timer we can see the code of it. Now search for
// ! DOM Timer::DOM Timer
// this code tell you that when we set the timer to 0 ms then sometimes it taks more time which lead to control goes to IO, and in next iteration Timer executed
// So this thing depends on How Buxy CPU is, 0ms Delay and !ms delay we cannot tell which will execute.



//!scanario 3 - 



fs.readFile(__dirname + '/25.EventLoop.txt',()=>{
    console.log("IO 1")
})


process.nextTick(()=>console.log("Next Tick 1"))
Promise.resolve().then(()=>console.log("Promise 1"))
setTimeout(()=>console.log("Timer Queue"), 0)

for(let i=0; i<20000000; i++){}

// Nexttick, Promise, Timer, IO
