const http = require('http')
const fs = require('fs')



const server = http.createServer((req,res)=>{
    let name = "Priyansh Sharma"

    res.writeHead(200, { 'Content-Type': 'text/html'}) // we can html response also
    let html = fs.readFileSync(__dirname + '/18.http.html', 'utf-8')
    html = html.replace("{{name}}", name)
    res.end(html)
})



server.listen(3000, ()=>{
    console.log("Server running in port 3000")
})