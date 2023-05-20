const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res)=>{
    // Node will handle incomming req and we have to send responce back to client.
    const heros = {
        fname : "Tony",
        lname : "Stark"
    }
    // res.writeHead(200, { 'Content-Type': 'application/json'}) // we can send http status cde
    res.writeHead(200, { 'Content-Type': 'text/html'}) // we can html response also

    fs.createReadStream(__dirname + '/18.http.html').pipe(res)
    // res.end(JSON.stringify(heros)) // end response with some message
    // res.end('<h1>Jello</h1>') // end response with some message
})




server.listen(3000, ()=>{
    console.log("Server running in port 3000")
})
// and now our programe waring for request to come.
// Now we can go to browser and see on localhost:3000
// JSON is data interchange format that we can use with HTTP to send request and response.


//JSON.parse() - JSON to object.
//JSON.stringify() - Object to JSON