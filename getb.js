var b = 

"<html>"+
"<body>+
"	<div id=\"browserling\"></div>"+
"</body>"+
"<script src=\"https://api.browserling.com/v1/browserling.js\"></script>+
"<script>"+
"var token = '370dafb7d946034839b88cfc194bd418';"+
"var browserling = new Browserling(token);"+
"browserling.setBrowser('"+selection+"');"+
"browserling.setVersion('"+version+"');"+
"browserling.setUrl('"+address+"');"+
"var div = document.querySelector('#browserling');"+
"div.appendChild(browserling.iframe());"+
"div.appendChild(iframe);"+
"</script>"+
"</html>";
