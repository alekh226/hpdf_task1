
var express = require('express');
var app =express();
var path =require('path');
var cookieParser = require('cookie-parser');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhttp = new XMLHttpRequest();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
var postCount=new Array();
	var objects = {};
//function getPostNumber(){
	var xhttp1 = new XMLHttpRequest();
	
	
	
	var routes= require('./authors');
	//var routes1= require('./setcookie');
	//var routes2= require('./getcookies');
app.get('/',function(request,response){
	response.send('hell0-world Alekh!');
});
app.use(cookieParser());
app.get('/getcookies',function(request,response){
	 
    
	response.send("cookie:"+request.cookies.cookieName);

	
});

app.get('/setcookie',function(request,response){
	 var randomNumber=Math.random().toString();
    randomNumber=randomNumber.substring(2,randomNumber.length);
    response.cookie('cookieName',randomNumber, { maxAge: 900000, httpOnly: true });
	response.send("cookie is set");

	
});
app.get('/robots.txt',function(request,response){
		response.redirect('http://httpbin.org/deny');

	
});

app.get('/image',function(request,response){
		response.send('<html><title>image</title><body><h2>image</h2><br><img src="http://httpbin.org/image" alt="Dog"></body></html>');

	
});


app.get('/input',function(request,response){
		response.sendFile('./form.html',{root: __dirname});
});

app.post('/input',function(request,response){
	
	response.send('Welcome   '+ request.body.username);
});
app.use('/authors',routes);
//app.use('/setcookie',routes1);
//app.use('/getcookies',routes2);
app.listen(8080);