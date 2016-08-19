var express = require('express');
var app=express();

app.set( 'view engine', 'html' );
app.engine( '.html', require( 'ejs' ).__express );
app.set('views', require('path').join(__dirname, 'views'));	
app.use(express.static(require('path').join(__dirname, 'public')));

app.get('/',function(req,res){
	res.render('index.html');
})
app.use(express.static(require('path').join(__dirname,'public')))
app.listen(80);
console.log('启动成功，端口号为80')