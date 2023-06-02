const http = require("http");

// use the Event Emitter API
const server = http.createServer();

server.on("request", (req, res) => {
  res.end("welcome to the matrix");
});

server.listen(5000);
