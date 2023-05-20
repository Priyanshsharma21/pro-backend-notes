const {PizzaShop,DrinkMachine} = require('./11.3.pizzashop')

const pizza = new PizzaShop()
const drinkMachine = new DrinkMachine()

pizza.on('order', (size, topping)=>{
    console.log(`A ${size} Pizze with ${topping} on your way sir.`);
    drinkMachine.serveDrink(size)
})

pizza.order("large", "maggie")
pizza.displayOrderNumber()
