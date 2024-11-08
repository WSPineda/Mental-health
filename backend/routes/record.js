const express = require("express");

const recordRoutes = express.Router();

const dbo = require("../db/conn");

const crypto = require('crypto');

const ObjectId = require('mongodb').ObjectId;


module.exports = recordRoutes;