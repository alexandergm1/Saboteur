const express = require('express');
const app = express();
const server = require('http').createServer(app);
const { Server } = require('socket.io')
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
const createRouter = require('./helpers/create_router');
app.use(cors());
app.use(express.json());


const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }, 
  maxHttpBufferSize: 1e8,
  pingTimeout: 60000,
  transports: ["websocket", "polling"],
  rememberUpgrade: true
})


MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('saboteur');
    const gameCollection = db.collection('game');
    const gameRouter = createRouter(gameCollection);
    app.use('/api/game', gameRouter);
  })
  .catch(console.err);


io.on('connection', socket => {
  console.log(`You connected with: ${socket.id}`)

  socket.on('update-grid-state', gridState => {
    io.emit('receive-grid-state', gridState)
  })

  socket.on('update-deck', deck => {
    io.emit('receive-deck', deck)
  })
  socket.on('update-hand', playerHand => {
    io.emit('receive-hand', playerHand)
  })
  socket.on('join-room', room => {
    io.join(room)
    console.log(`User with ID: ${socket.id} joined room: ${room}`);
  })
});


server.listen(5000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});