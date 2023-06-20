const express = require("express");
const {
  getState,
  getStateByCountry,
} = require("../controller/stateController");
const router = express.Router();

router.get("/states", getState).post("/statesbycountry", getStateByCountry);

module.exports = router;
