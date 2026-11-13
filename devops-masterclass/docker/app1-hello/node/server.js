const http = require('http');
const server = http.createServer((req,res) =>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello world from Node.js\n');
});
server.listen(8080,()=>{
    console.log('Node app running on http://localhost:8080');
});