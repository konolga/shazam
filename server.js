const express = require ('express');
const server = express();


//bring in routes
const songRoutes = require("./src/backend/routes/song");


//middleware


//bring in routs
server.use("/", songRoutes);


//api docs
server.get('/', (req, res)=>{
  fs.readFile('docs/apiDocs.json', (err, data)=>{
    if(err){
      res.status(400).json({
        error: err
      })
    }
    const docs =JSON.parse(data);
    res.json(docs);
  })
})

let port = process.env.PORT || 8080;
server.listen(port, ()=>{
  console.log(`A NodeJS API on port: ${port}`)

});
