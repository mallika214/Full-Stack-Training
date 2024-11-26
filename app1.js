
const http = require('http');
const hostname = '127.0.0.1' ; //local host

const port =3000;


//creating server
const server = http.createServer((req, res)=>{
    res.statusCode =200;
    res.setHeader('Contect-Type', 'text/plain');
    res.end('Hello World!\n');
});


//start the server
server.listen(port, hostname, ()=>{
    console.log(`server running at http:\\${hostname} :${port}`);
});