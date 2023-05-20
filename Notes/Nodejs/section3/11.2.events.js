const EventEmitter = require("events")

// events module returns a class EventEmitter which responds to a specific event.

const emitter = new EventEmitter() // made object(instance) of EventEmitter class.


emitter.on('order-pizza', (size, topping)=>{
        console.log(`order recived making ${size} Pizza with ${topping} topping`)
}) // asuync callback which will respont to some event and execution is paused for some time till event occure.

emitter.on('order-pizza', (size)=>{
    if(size==='Large'){
        console.log('Pizza Bean large Pizza on your way.')
    }
})


console.log("Pizza Bean") // execute first cause sync and the event will not stop the execution.
emitter.emit('order-pizza', "Large", "Mushroom") // this is call of the event


//! this is event driven programming.