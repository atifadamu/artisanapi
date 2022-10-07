const { Router } = require("express");
const {
  createArtisan,
  getArtisans,
} = require("../controllers/artisanController");

const { protect, admin } = require("../middlewares/authMiddleware");

const router = Router();

router.route("/").post( createArtisan).get(getArtisans);

module.exports = router;
