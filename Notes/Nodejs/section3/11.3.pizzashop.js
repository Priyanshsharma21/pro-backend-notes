const EventEmitter = require('events')


class PizzaShop extends EventEmitter{
    constructor(){
        super();
        this.orderNumber = 0
    }

    order(size,topping){
        this.orderNumber++
        this.emit("order", size, topping)
    }

    displayOrderNumber(){
        console.log(`Order Number ${this.orderNumber}`)
    }
}


class DrinkMachine{
    serveDrink(size){
    if(size==='large'){
        console.log("Serving Large Drink")
    }
   }
}


module.exports = {DrinkMachine, PizzaShop}