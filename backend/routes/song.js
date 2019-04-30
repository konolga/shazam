const express = require ("express");
const router = express.Router();

const{
  songsList,
  addToFavorites,
  getAllFavorites
} = require ("../controllers/song");

router.use((req, res, next) =>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();
});

//GET
router.get("/", songsList)
router.get("/api/getAllFavorites", getAllFavorites)

//POST
router.post("/api/addToFavorites", addToFavorites)

module.exports = router;
