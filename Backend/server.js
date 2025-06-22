const app = require('./app');
const http = require('http');
const port =  process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port,(req,res) => {
    console.log(`Server listening on port ${port}`);
})