const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res)=>{
 
    res.writeHead(200, { 'Content-Type': 'text/html'}) // we can html response also

    fs.createReadStream(__dirname + '/18.http.html').pipe(res)
})



server.listen(3000, ()=>{
    console.log("Server running in port 3000")
})