const express = require("express");
const router = express.Router();

const ToughtsController = require("../controllers/ToughtController");

router.get("/", ToughtsController.showToughts);
router.get("auth/dashboard", ToughtsController.dashboard);

module.exports = router;
