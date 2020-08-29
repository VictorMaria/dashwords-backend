import http from 'http';
import app from './app';
import socketConnection from './sockets';


const server = http.createServer(app);
socketConnection(server);


const PORT = process.env.PORT || 2000;

server.listen(PORT, () => console.log(`The Magic of DASHWORDS is live on Port ${PORT}`));