var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//app.use(express.static(__dirname + '/public'));
/*
var fs = require('fs');
var dir ='tmp';

  fs.mkdirSync(__dirname + '/public/' + dir);
  fs.writeFile(__dirname+'/public/'+dir+'/index.html', 'Hey there!', function(err) {
     if(err){
	return console.log(err);
     }
     console.log('File was saved!');
  });
    
*/
var file = null;
var css = null;
var js = null;
var broswer = null;
var versionNumber = null;
var fs = require('fs');
app.use(bodyParser());

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
  var html = fs.readFileSync('index.html');
  res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
});

app.post('/', function(req, res){
    console.log('POST /');
    //console.log(req.body.name);
    file = req.body.name;
    css =req.body.css;
    js = req.body.js;
    
    broswer = req.body.broswer;
    versionNumber = req.body.selection;
    console.log('Broswer is: '+broswer);
    console.log('versionNumber is: '+ versionNumber);
    res.writeHead(200, {'Content-Type': 'text/html'});
    //res.end('thanks');
    if(file != null){
      /* generate random number */
      var random = randomResult();

      
      fs.mkdirSync(__dirname + '/public/' + random);
      fs.writeFile(__dirname+'/public/'+random+'/index.html', file, function(err) {
        if(err){
          return console.log(err);
        }
      console.log('File was saved!');
    });

      // write css
      fs.writeFile(__dirname+'/public/'+random+'/style.css', css, function(err) {
        if(err){
          return console.log(err);
        }
      console.log('File was saved!');
    });

      // write js
      fs.writeFile(__dirname+'/public/'+random+'/main.js', js, function(err) {
        if(err){
          return console.log(err);
        }
      console.log('File was saved!');
    });

      var address = "http://localhost/"+
        random+"/";
      var version = versionNumber;
      var b =

"<html>"+
"<body>"+
"<a>Remember your Diffpage ID is: " + random +" </a>"+
"       <div id=\"browserling\"></div>"+
"</body>"+
"<script src=\"https://api.browserling.com/v1/browserling.js\"></script>"+
"<script>"+
"var token = '370dafb7d946034839b88cfc194bd418';"+
"var browserling = new Browserling(token);"+
"browserling.setBrowser('"+broswer+"');"+
"browserling.setVersion('"+version+"');"+
"browserling.setUrl('"+address+"');"+
"var div = document.querySelector('#browserling');"+
"div.appendChild(browserling.iframe());"+
"div.appendChild(iframe);"+
"</script>"+
"</html>";

 
      res.end(
	b
      );
}
   
});


var selections = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", 
"2", "3", "4", "5", "6", "7", "8", "9" ]
function randomResult(){
	
	var limit = 8;
	var result = "";	
	//runs 8 times for 8 chars
	for (i = 0; i < 8; i++) {
		var index = random(0, selections.length - 1);
		result +=  selections[index];
	}
	return result;
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/*
if(dir != null){
  app.use(express.static(__dirname + '/public'));
  fs.mkdirSync(__dirname + '/public/' + dir);
  fs.writeFile(__dirname+'/public/'+dir+'/index.html', 'Hey there!', function(err) {
     if(err){
        return console.log(err);
     }
     console.log('File was saved!');
  });

}
*/

var server = app.listen(80, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
