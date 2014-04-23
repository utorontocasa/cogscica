var express = require('express')

var app = express();

app.configure(function () {
    app.all("*", //things that should happen for every possible url
        function(req, res, next) {
            res.writeHead(200,{ "Content-Type":"text/plain"})
            res.end("hello world!");
        }
    );
});

var server= app.listen(8080,"");
