const fs = require('fs')

const fileContent = fs.readFileSync('./demo.txt', "utf-8")
// this is a sync way of reading file - this can block te main thread of JS
console.log(fileContent)


// error first calback - async callback - read file take time then write.
fs.readFile('./demo.js', (error,data)=>{
    if(error){
        console.log(error)
    }else{
        console.log(data)
    }
})


fs.writeFile("./demo.txt", "Hello Bro",{flag : 'a'}, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Data written")
    }
})