const http = require("http");
const { readFileSync, readFile } = require("fs");

// get all files
const homePage = readFileSync("./navbar-app/index.html");

// the problem is that you would have to repeat the above process for all different endpoints for styles and logos
// and you would have to add in every case for the urls below (this is where express becomes useful)

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>about page</h1");
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>page not found</h1");
    res.end();
  }
});

server.listen(5000);
