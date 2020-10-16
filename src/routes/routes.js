const express = require('express');
const router = express.Router();
const controllerMoves = require('../api/moves/controllers/controllerMoves');

router.post('/moves', controllerMoves.create);

module.exports = router;