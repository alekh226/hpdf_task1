var express = require('express');
var router = express.Router();


var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhttp = new XMLHttpRequest();
var postCount=new Array();
	var objects = {};
//function getPostNumber(){
	var xhttp1 = new XMLHttpRequest();
	

	xhttp1.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       var myObj=JSON.parse(xhttp1.responseText);
	var idinit=1;
	var count =0;
	
	
	var i=0;
	for (i in myObj){
	
	if(myObj[i].userId!=idinit){
	
	postCount.push({id: idinit, counts: count});
	idinit=myObj[i].userId;
	
	count = 0;
	}
	count++;
	
	}
	postCount.push({id: idinit, counts: count});
	
    }
};
xhttp1.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
xhttp1.send();
	
		


router.get('/',function(request,response){
	xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       var myObj=JSON.parse(xhttp.responseText);
	var text="";
	var counts="counts";
	//getPostNumber();
	for (i in myObj){
		var temp=JSON.stringify(postCount[i].counts);
	text+=myObj[i].name +  '------------' + temp + '</br>';
	
	}
	response.send(text);
    }
};
xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
xhttp.send();


	
});

module.exports = router;