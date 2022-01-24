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
  }
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
});

server.listen(5000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});