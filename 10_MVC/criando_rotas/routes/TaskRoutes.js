const express = require("express");
const router = require(express.Router());

const TaskController = require("../controllers/TaskController");

/* route: home */
router.get("/", TaskController.createTask);

module.exports = router;
