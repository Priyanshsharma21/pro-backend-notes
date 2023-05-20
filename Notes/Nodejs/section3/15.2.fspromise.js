const fs = require('fs/promises')

console.log("First")

fs.readFile('demo.txt', "utf-8")
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))

console.log("Second")

// we can use async await also because it just a syntax wrapper over promises.


const getFileData =async()=>{
    try {
        const data = await fs.readFile("demo.txt", "utf-8");
        console.log(data)
    } catch (error) {
        console.log(error)
        
    }
}

// if you need some optimization in trms of executing time then you can use async await otherwise promises