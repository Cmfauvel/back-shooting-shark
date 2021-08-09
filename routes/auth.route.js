/** @format */

const express = require("express");
const router = express.Router();

const auth = require("../controllers/auth.controller.js");

router.post("/auth/register", auth.register);

router.post("/auth/login", auth.login);

router.get(
  "/auth/check-authentication/:token",
  auth.checkAuthentication
);

module.exports = router;