const greet = (name)=>{
    console.log(`Hello ${name}`)
}

const higherOrderFunction = (callback)=>{
    const name = "vishwas"

    callback(name)
}

higherOrderFunction(greet)


// * Here greetVishwas is a function which accepts another function as argumenet.
//* Any function which is passes as argument to another function is called callback function.
//* function which accepts function as argm and return function is Higher order function