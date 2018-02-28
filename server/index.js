var app = require('express')();
var http = require('http').Server(app);
var path = require('path');
var io = require('socket.io')(http);

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
  socket.on('login', function(msg) {
  	
  });
  socket.on('message', function(msg) {
  	console.log(msg);
  });
});