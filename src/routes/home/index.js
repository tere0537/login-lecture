"use strict"

const express = require("express");
const { hello , login } = require("./home.ctrl");
const router = express.Router();

router.get("/", hello)

router.get("/login", login)

module.exports = router;