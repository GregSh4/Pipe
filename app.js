
const http = require ('http');

const server = http.createServer((req, res) => {
    if (req.url === '/ping')
    {
        res.write('pong');
        console.log('status code:' , res.statusCode);
        res.end();
    }

    if(req.url === '/status')
    {
        res.write(JSON.stringify(process.uptime()));
        console.log('Up time - (seconds)',process.uptime());
        res.end();
    }
});

server.listen(3000);

console.log('listening port 3000');