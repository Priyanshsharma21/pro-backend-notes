const fs = require('fs')


const readableStream = fs.createReadStream(__filename)
readableStream.close()


readableStream.on("close", () => {
    console.log("This is from readable Stream close event callback")
})

setImmediate(() => console.log("This is setImmediate event callback"))
setTimeout(() => console.log("This is setTimeout event callback"), 0)

Promise.resolve().then(() => console.log("Promise Queue"))
process.nextTick(() => console.log("Next Tick Queue"))


// Close queue executed at last after all -micro task, timer, IO, check then CloseQueue


