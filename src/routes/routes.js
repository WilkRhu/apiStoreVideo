const express = require('express');
const router = express.Router();
const controllerMovies = require('../api/movies/controllers/controllerMovies');

router.get('/movie', controllerMovies.findAll);
router.get('/movie/:id', controllerMovies.findById);
router.post('/movie', controllerMovies.create);
router.put('/movie/:id', controllerMovies.findUpdate);
router.delete('/movie/:id', controllerMovies.destroy);

module.exports = router;