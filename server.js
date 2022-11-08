const jsonServer = require('json-server')
    
// Import the library:
const cors = require('cors');

const server = jsonServer.create();       
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults()
// Then use it before your routes are set up:
server.use(cors());
server.use(middlewares);
server.use((req, _res, next) => { console.log(req); next();})
server.use(router);

server.listen(5001, () => {
    console.log('JSON server ready to go!');
})