const http = require('http')
const fs = require('fs')


const server = http.createServer((req,res)=>{

    // req.method - GET, POST, PUT, DELETE - In real life we use express - web app framework.
   if(req.url === '/'){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end("Home Page")
   }else if(req.url==='/about'){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end("About Page")
   }
   else if(req.url==='/work'){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end("Work Page")
   }else if(req.url==='/projects'){
    res.write(200, {'Content-Type':'text/plain'})
    res.end("Project Page")    
   }else{
    res.write(500, {'Content-Type':'text/plain'})
    res.end("No Data Found")
   }
})



server.listen(3000, ()=>{
    console.log("Server running in port 3000")
})