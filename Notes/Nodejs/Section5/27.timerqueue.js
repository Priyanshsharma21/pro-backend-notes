// !scanario 1
// setTimeout(() => console.log("This is timer1"), 0)
// setTimeout(() => console.log("This is timer2"), 0)
// setTimeout(() => console.log("This is timer3"), 0)


// process.nextTick(() => console.log("Process.next1"))
// process.nextTick(() => {
//     console.log("Inner next tick 1")
//     process.nextTick(() => console.log("Inner Next Tick"))
// })
// process.nextTick(() => console.log("Process.next3"))



// Promise.resolve().then(() => console.log("This is Promise Queue 1."))
// Promise.resolve().then(() => {
//     console.log("Inner promise 1")
//     Promise.resolve().then(() => console.log("Inner Promise"))
// })
// Promise.resolve().then(() => console.log("This is Promise Queue 3."))


//* 3 callback in nexttick, 3 in promise and three in timer.
//* Nothing innside the call stack to ececute so control goes to event loop.
//* Now 1 next tick ececutes, 3 callbacks and one still remain because inner callback, then inner will execute. then promise will be executes by taking it inide the call stack and when microTask ququq is empty then evnt loop goes to timer queue and then execute it.





//!Scanario 2
// setTimeout(() => console.log("This is timer1"), 0)
// setTimeout(() => {
//     console.log("Timer 2")
//     process.nextTick(() => console.log("Process.next1"))
// }, 0)
// setTimeout(() => console.log("This is timer3"), 0)


// process.nextTick(() => {
//     console.log("Inner next tick 1")
//     process.nextTick(() => console.log("Inner Next Tick"))
// })
// process.nextTick(() => console.log("Process.next3"))



// Promise.resolve().then(() => console.log("This is Promise Queue 1."))
// Promise.resolve().then(() => {
//     console.log("Inner promise 1")
//     process.nextTick(() => console.log("Next tick 4"))
// })

// Promise.resolve().then(() => console.log("This is Promise Queue 3."))


//! Now everything is same but in setTimeout we have nexttick queue callback, so when second timeout executes then one callback will be present in nexttick and s we know in every iteration it check the micro task queue, hence it will executes first then last timeout will executes



setTimeout(() => console.log("This is timer1"), 100)
setTimeout(() => console.log("This is timer2"), 50)
setTimeout(() => console.log("This is timer3"), 0)


// timer queue execute without any order, whoever finish first will be come to call styack first.

// Timer queue is actualy heap instead of queue