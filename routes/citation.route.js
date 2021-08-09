/** @format */

const express = require("express");
const router = express.Router();

const citation = require("../controllers/citation.controller.js");

router.post("/citation/:userId", citation.create);

router.put("/citation/:id", citation.update);

router.get("/citation", citation.findAll);

router.delete("/citation/:id", citation.delete)


module.exports = router;