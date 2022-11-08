const jsonServer = require('json-server')
    
// Import the library:
const cors = require('cors');

const server = jsonServer.create();       
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults()
// Then use it before your routes are set up:
server.use(middlewares);
server.use(router);
server.use(cors());
server.listen(5001, () => {
    console.log('JSON server ready to go!');
})