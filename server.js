var express = require('express'),
    marked = require('marked');
var app = express();

var sharepath = "/static";

app.configure(function () {
    app.use(express.favicon(__dirname+'/static/favicon.ico', {maxAge: 100 }));
    app.use(sharepath, express.static(__dirname + sharepath));
    app.use(sharepath, express.directory(__dirname + sharepath));

    app.get("/", 
        function(req, res, next) {
            res.writeHead(200,{ "Content-Type":"text/html"})
            res.end(marked("# Hello World!  \n  \npewpewpew  "));
        }
    );

    app.get("*",
        function(req, res, next) {
            res.writeHead(200,{ "Content-Type":"text/html"})
            res.end(marked("# 404'd, bro"));
        }
    );
});

var server= app.listen(8080,"");
