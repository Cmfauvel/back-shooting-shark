const express = require("express");
const router = express.Router();

const user = require("../controllers/user.controller.js");

// router.post("/user/:userId", user.create);

// router.put("/user/:id", user.update);

router.get("/user", user.findAll);

router.get("/user/:id", user.findOne);

// router.delete("/user/:id", user.delete);


module.exports = router;