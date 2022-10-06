// const hello = require('./hello');

// hello.sayHello();

// const lib = require('./lib');
// console.log( lib.halfOf(10) );
// console.log( lib.multiply(10,2) );

const http = require('http');
http.createServer( (req, res) =>{
    res.writeHead(200,{
        'Content-Type': 'text/plain'
    });
    res.end('Hello World');
}).listen(3000);

console.log('Server running at http://localhost:3000/');