var express = require('express'),
    fs = require('fs'),
    path = require('path'),
    favicon = require('serve-favicon'),
    bodyParser  = require('body-parser'),
    logger = require('morgan'),
    mdEngine = require('marked-engine'),
    marked = require('marked');

var app = express();
var router = express.Router();

//simple logger for this router's requests
//all requests to this router will first hit this middleware
router.use(function(req, res, next) {
    console.log('%s %s %s', req.method, req.url, req.path);
    next();
});

// setup marked as engine
/*
app.engine('md', function(path, options, fn){
    fs.readFile(path, 'utf8', function(err, str){
      if (err) return fn(err);
      try {
        var html = marked(str);
        html = html.replace(/\{([^}]+)\}/g, function(_, name){
          return options[name] || '';
        })
        fn(null, html);
      } catch(err) {
        fn(err);
      }
    });
  }
);
*/

var viewsDir = path.join(__dirname, 'views'),
    staticDir = path.join(__dirname, 'static');

// or use marked-engine
app.engine('md', mdEngine.renderFile);
app.set('view engine', 'md');
app.set('views', viewsDir);

// middleware
app.use(favicon(path.join(staticDir, 'favicon.ico')));
app.use(logger('[:date] :remote-addr :remote-user ":method :url" :status'));

// routes
app.use('/static', express.static(staticDir));

app.route('/')
    .get(function(req, res, next) {
            res.render("index.md");
    });

app.route('/markdown')
    .get(function(req, res, next) {
            res.render("markdown.md");
    });

app.route('/readme')
    .get(function(req, res, next) {
            res.render(path.join(__dirname, "README.md"));
    });

app.route('*')
    .get(function(req, res, next) {
        res.writeHead(200,{ "Content-Type":"text/html"});
        res.end(marked("# 404'd, bro"));
    });

var port = 8080;
app.listen(port);
console.log("Listening on " + port);
