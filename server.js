const app = require("./src/backend/app");
const http = require("http");

const server = http.createServer(app);
const port = process.env.PORT || 8080;
app.set("port", port);


server.listen(port, ()=>{
  console.log(`A NodeJS API on port: ${port}`)

});
