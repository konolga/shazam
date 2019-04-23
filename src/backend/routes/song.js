const express = require ("express");
const router = express.Router();

const{
  songsList,
  addToFavorites,
  getAllFavorites
} = require ("../controllers/song");

//GET
router.get("/songs", songsList)
//router.get("/songs/favorites", getAllFavorites)

//PUT
//router.put("/songs/:songId", addToFavorites)

module.exports = router;
