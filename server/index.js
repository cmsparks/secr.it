const app = require('express')();
const http = require('http').Server(app);
const path = require('path');
const fs = require('fs')
const io = require('socket.io')(http);
const MongoClient = require('mongodb').MongoClient;
const dburl = 'mongodb://127.0.0.1:27017/';
const assert = require('assert');
const dbName = 'secritdb';
const Room = require('./Room.js');
const crypto = require('crypto');

let db;

let clients = [];
let rooms = [];

/*MongoClient.connect(dburl, function(err,client) {
  console.log('MongoDB connected');
  assert.equal(null,err);

  db = client.db(dbName);

  client.close()
})*/

fs.readdir('./dist', function(err,files) {
  if(err) {
    console.error("Could not loop through directory", err);
    process.exit(1);
  }
  files.forEach(function(file,index) {
    let servePath = path.join('/dist', file);
    let distPath = path.join('./dist', file);
    app.get(servePath, function(req, res) {
      res.sendFile(path.resolve(distPath));
    });
  });
});


app.get('/', function(req, res){
  res.sendFile(path.resolve('./dist/index.html'));
});
/*
app.get('/dist/579d20485106d1e6eae7e4431ee914f7.js', function(req, res) {
  res.sendFile(path.resolve('./dist/579d20485106d1e6eae7e4431ee914f7.js'))
})

app.get('/dist/579d20485106d1e6eae7e4431ee914f7.css', function(req, res) {
  res.sendFile(path.resolve('./dist/579d20485106d1e6eae7e4431ee914f7.css'))
})
*/
http.listen(8080, function(){
  console.log('listening on *:8080');
});

io.on('connection', function(socket){
  console.log('a user connected');
  console.log(socket.id);
  clients[socket.id] = socket;

  socket.on('login-user', function(msg) {
    console.log(msg);
    let msgData = JSON.parse(msg);
    let user = new User(false, msgData, socket, db);
    clients[socket.id] = user;
  });

  socket.on('login-chat', function(msg) {
    console.log(msg)
    let msgData = JSON.parse(msg);
    isNew = isNewRoom(msg.room);
    if(isNew) {
      //check if the room exists in the database and is not initialized
      roomExists = isExistingRoom(msg.room);
      if(roomExists) {
        //ack callback init room
      }
      else {
        //ack callback room fail
      }
    }
    else {
      //add user to room, ack callback added to room
    }

  })

  socket.on('message', function(msg, ack) {
    console.log(msg);
    let msgData = JSON.parse(msg);

  });

  socket.on('create-chat', function(msg, ack){
    let msgData = JSON.parse(msg);

  });

  socket.on('create-user', function(msg, ack) {
    //add ack 
    let msgData = JSON.parse(msg);
    let user = new User(true, msgData, socket, db);
    clients[socket.id] = user;
  });

  socket.on('disconnect', function() {
    clients.splice(socket.id,1);
  })
});

function isNewRoom(roomId) {

}
