// Module dependencies.
var express = require('express');

var app = express.createServer();

var $ = require('jquery');

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(require('stylus').middleware({ src: __dirname + '/public' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// app.get('/', function(req, res) {
//     res.send('Hello World');
// });

app.get('/', function(req, res) {
    res.render('index.jade', { locals: {
        title: 'Pairoulette'
    }
    });
});


app.listen(process.env.PORT, process.env.IP);
//console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
