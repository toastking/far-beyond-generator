//Simple web server to get file saving working
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));


app.use('/images',express.static('images'));
//Store all HTML files in view folder.
app.use('/js',express.static('js'));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.sendFile(__dirname+'/index.html');
});

app.listen(app.get('port'), function () {
  console.log('Server running on port ' + app.get('port');
});
