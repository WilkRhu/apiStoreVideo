const express = require('express');
const router = express.Router();
const controllerMovies = require('../api/movies/controllers/controllerMovies');
const controllerRentals = require('../api/rental/controllers/controllerRental');

/*
 * Router Movies
 */
router.get('/movie', controllerMovies.findAll);
router.get('/movie/:id', controllerMovies.findById);
router.post('/movie', controllerMovies.create);
router.put('/movie/:id', controllerMovies.findUpdate);
router.delete('/movie/:id', controllerMovies.destroy);


/*
 * Router Rentals
 */
router.post('/rental', controllerRentals.store);
router.get('/rental', controllerRentals.getAllRental);
router.get('/rental/expire', controllerRentals.getExpireList);
router.put('/rental/devolve', controllerRentals.devolveRental);

module.exports = router;