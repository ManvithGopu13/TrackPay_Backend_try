const express = require("express");
const {
  getLends,
  addLend,
  updateLend,
  deleteLend,
} = require("../controllers/lendingController");

const router = express.Router();

// API Routes
router.get("/getLends", getLends);
router.post("/addLend", addLend);
router.put("/Lends/:id", updateLend);
router.delete("/Lends/:id", deleteLend);

module.exports = router;
