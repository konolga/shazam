const express = require ('express');
const app = express();
const cors = require('cors')

//bring in routes
const songRoutes = require("./routes/song");

app.use(cors())
app.use("/", songRoutes);

/* app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers","*");
  res.setHeader(
    "Access-Control-Allow-Methods","*");
  next();
});
 */



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
