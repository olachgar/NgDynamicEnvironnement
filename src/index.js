var http = require('http');
var server = http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "application/json" });
    var result = {};
    result.someAppSetting = process.env.APPINSIGHTS_INSTRUMENTATIONKEY;
    var jsonResult = JSON.stringify(result);
    response.end(jsonResult);
});
var port = process.env.PORT || 1337;
server.listen(port);
console.log("Server exposing api for reading application settings running at http://localhost:%d", port);
