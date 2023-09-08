const { Router } = require('express');
const { getPeliculas, getEstrenos, getActores, getPelicula } = require('../controllers/demo');

const rutas = Router();

rutas.get('/peliculas', getPeliculas);
rutas.get('/pelicula/:id', getPelicula);

rutas.get('/estrenos', getEstrenos);

rutas.get('/actores', getActores);

module.exports = rutas;