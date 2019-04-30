const express = require ("express");
const router = express.Router();

const{
  songsList,
  addToFavorites,
  getAllFavorites
} = require ("../controllers/song");


//GET
router.get("/", songsList)
router.get("/api/getAllFavorites", getAllFavorites)

//POST
router.post("/api/addToFavorites", addToFavorites)

module.exports = router;
