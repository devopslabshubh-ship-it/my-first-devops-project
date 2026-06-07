const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('🚀 Custom Node.js App Running Inside Docker Successfully, Bhai!\n');
});

server.listen(PORT, () => {
    console.log(`Server is live and listening on port ${PORT}`);
});
