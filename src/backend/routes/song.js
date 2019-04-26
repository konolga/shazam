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
router.get("/api/songs", songsList)
//router.get("/songs/favorites", getAllFavorites)

//PUT
//router.put("/songs/:songId", addToFavorites)

module.exports = router;
