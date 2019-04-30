const express = require ('express');
const app = express();
const cors = require('cors')
const path = require('path');

//bring in routes
const songRoutes = require("./routes/song");

app.use(cors())
app.use("/", express.static(path.join(__dirname,"mean")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname,"mean","index.html"))
});


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
