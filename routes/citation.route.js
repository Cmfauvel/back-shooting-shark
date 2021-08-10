/** @format */

const express = require("express");
const router = express.Router();

const citation = require("../controllers/citation.controller.js");

router.post("/citation/:userId", citation.create);

router.put("/citation/:id", citation.update);

router.get("/citation/:id", citation.findOne);

router.get("/citation", citation.findAll);

router.get("/citations/:userId", citation.findAllByUser);

router.delete("/citation/:id", citation.delete);

router.get("/random", citation.findARandom);


module.exports = router;