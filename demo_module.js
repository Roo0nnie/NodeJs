let http = require('http'); //require() is use to call module and also you can link here the other function like datetime variable.
let datetime = require('./myfirstmodule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + datetime.myDatetime()); //this is the way how to access other file using require and . to select specific target.
    res.end();
}).listen(8080); //this is the port use in google so you can access your website.