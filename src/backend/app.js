const express = require ('express');
const app = express();


//bring in routes
const songRoutes = require("./routes/song");


//middleware


//bring in routs
app.use("/", songRoutes);


//api docs
app.get('/', (req, res)=>{
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


module.exports = app;
