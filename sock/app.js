var express = require('express');
var app = express();
app.get('/',function(req,res){
	res.status(200);
	res.send('欢迎来到IT世界');
})
app.get('/index',function(req,res){
	res.sendFile('index.html',{root:__dirname});
})
var server =require('http').createServer(app);

var io = require('socket.io')(server);
var name='xxx';
io.use(function(socket){
     var query = socket.request._query;
     var sid = query.sid; 
     	console.log(query)
});
io.on('connection',function(socket){
	socket.join(name);
	console.log('欢迎来到'+name+'房间');
	socket.on('message',function(data){
		socket.broadcast.emit('DATA',data);
	})
	socket.broadcast.to('xxx').emit('DATA','你是禽兽吗');
});
server.listen(80);
console.log('欢迎来到IT世界，访问端口号为80')