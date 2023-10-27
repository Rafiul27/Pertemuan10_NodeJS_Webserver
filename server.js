const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const path = req.url;

  if (path === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(fs.readFileSync("./contact.html", "utf-8"));
  } else if (path === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(fs.readFileSync("./about.html", "utf-8"));
  }else if (path === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(fs.readFileSync("./halaman utama.html", "utf-8"));
  }else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Server is running on port 3000");
  }
});
const hostname = 'localhost';
const port = 3000;

server.listen(port, hostname, () => {
    console.log(`Server berjalan di http://${hostname}:${port}/`);
});