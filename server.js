var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket){
	console.log('User Connected using Scoket.io');

	socket.on('message', function (message){
		console.log('Message recevied: ' + message.text);
		io.emit('message', message);
	});

	socket.emit('message',{
		text: 'Welcome to the chat'
	});
});

http.listen(PORT, function (){
	console.log('Server Started');
});