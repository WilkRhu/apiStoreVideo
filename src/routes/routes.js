const express = require('express');
const router = express.Router();
const controllerMoves = require('../api/moves/controllers/controllerMoves');

router.get('/moves', controllerMoves.findAll);
router.get('/moves/:id', controllerMoves.findById);
router.post('/moves', controllerMoves.create);
router.put('/moves/:id', controllerMoves.findUpdate);
router.delete('/moves/:id', controllerMoves.destroy);

module.exports = router;