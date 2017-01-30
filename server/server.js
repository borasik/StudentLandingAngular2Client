var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('./')); // Current directory is root
//app.use(express.static(path.join(__dirname, ''))); //  "public" off of current is root

var port = 8000;

// app.get('/', function(request, response) {
//     // response.write(request.body.user);
//     console.log(request.body + ' / ' + response.body);
//     // response.end();
// });

app.listen(port);
console.log('Listening on port: ' + port);