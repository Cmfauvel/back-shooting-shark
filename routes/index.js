/** @format */

const express = require("express");
const router = express.Router();

const authApi = require("./auth.route");
const citationApi = require("./citation.route");
const userApi = require("./user.route");

router.use(authApi);
router.use(citationApi);
router.use(userApi);
module.exports = router;