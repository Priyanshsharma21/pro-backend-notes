const fs = require('fs')



fs.readFile(__dirname + '/25.EventLoop.txt',()=>{
    console.log("IO Queue")
})


process.nextTick(()=>console.log("Next Tick Queue"))
Promise.resolve().then(()=>console.log("Promise Queue"))
setTimeout(()=>console.log("Timer Queue"), 0)

//Check Queue
setImmediate(()=>console.log("Set Immidiate - Check Queue"))

for(let i=0; i<20000000; i++){}

// Immidiate executes before IO - So we have 1 - nexttick, 1 - promise, 1 CB in Timer, 1 in IO and 1 in check, next tick executes then promise then timer now cones intresting one.

// So Event loop has to poll to check if IO operations like fs is completed and then onlt tke it to call stack, hence when control goes to IO for first time it is empty, then it goes to polling part which ask it wether red file is completed, read file says yes and Pooling queue the CB into IO queue and now its full. but the execution is towaf check and executes it, when it see noting left in iteration then it goes to micro task then timer and then see inside the IO there is one CB and then  it executes it


// Note - IO events are polled and callback functions are addesd to IO queue only after the IO is completed.

