import socketIO from 'socket.io';
import { addRackToAnagramBank } from './anagram';


const socketConnection = (server) => {
  const io = socketIO(server);
  io.on('connection', (socket) => {
    console.log('The DASHWORDS sockets are 5 Alive');
    socket.emit('greetings', { message: 'Welcome Aboard' });
    addRackToAnagramBank(socket);
  });
};

export default socketConnection;
