//! Scanario 1 - This tells all sync code get's more priority over async.
// console.log("1")
// process.nextTick(()=>console.log("Process.next1"))
// console.log("2")

// 1. console.log(1) - into callstack -execute - print - pooped.
/// 2. next tick into callstack - async - given into microqueue.
// 3. console.log(2) - print - popper.
// No sync code to execute - control to event loop, now nextTick result pushed into call stack, executed and corrosponding message logged into console.




//! Scanario 2 - Promise

// Promise.resolve().then(()=>console.log("This is Promise Queue."))
// process.nextTick(()=>console.log("Process.next1"))

// next tick print first then promise.

// 1. Promise comes into callstack and send it to microQuue - promisequeue.
// 2. callstack send nexttick to nextTick quwue.

// No code to execute - so control to event loop - event loop execute nextTick function log it into console and then promise ueue function and log it to console.





//!scanario 3 

process.nextTick(()=>console.log("Process.next1"))
process.nextTick(()=>{
    process.nextTick(()=>console.log("Inner Next Tick"))
})
process.nextTick(()=>console.log("Process.next3"))



Promise.resolve().then(()=>console.log("This is Promise Queue 1."))
Promise.resolve().then(()=>{
    Promise.resolve().then(()=>console.log("Inner Promise"))
})
Promise.resolve().then(()=>console.log("This is Promise Queue 3."))



// Process.next1
// Process.next3
// Inner Next Tick
// This is Promise Queue 1.
// This is Promise Queue 3.
// Inner Promise


// Note we should use process.nextTick - to handle error in better way instead of nextTick directly