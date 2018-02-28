const app = require('express')();
const http = require('http').Server(app);
const path = require('path');
const io = require('socket.io')(http);
const MongoClient = require('mongodb').MongoClient;
const dburl = 'mongodb://127.0.0.1:27017/';
const assert = require('assert');
const dbName = 'secritdb';
const Room = require('./Room.js');
let db;

let clients = [];

MongoClient.connect(dburl, function(err,client) {
  console.log('MongoDB connected');
  assert.equal(null,err);

  db = client.db(dbName);

  insertDocuments(db, function() {
    client.close();
  });
})

app.get('/', function(req, res){
    res.sendFile(path.resolve('./dist/index.html'));
});

app.get('/dist/68fd74551c72fc2fbcd5bf41dc2a465b.js', function(req, res) {
    res.sendFile(path.resolve('./dist/68fd74551c72fc2fbcd5bf41dc2a465b.js'))
})

app.get('/dist/68fd74551c72fc2fbcd5bf41dc2a465b.css', function(req, res) {
    res.sendFile(path.resolve('./dist/68fd74551c72fc2fbcd5bf41dc2a465b.css'))
})

http.listen(8080, function(){
  console.log('listening on *:8080');
});

io.on('connection', function(socket){
  console.log('a user connected');
  clients.push(socket)

  socket.on('login', function(msg) {
    console.log(msg);
    let msgData = JSON.parse(msg);
    if(isNewRoom(msgData.room)) {
      socket.join(msgData.room);
    }
    else {
      console.log('not a room')
    }

  });

  socket.on('message', function(msg) {
    console.log(msg);
    let msgData = JSON.parse(msg);

    socket.to()
  });

  socket.on('create-chat', function(msg){

  });

  socket.on('disconnect', function() {
    clients.splice(clients.indexOf(client),1);
  })
});
