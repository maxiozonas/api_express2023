const getPeliculas = (req, res) => {
    res.json({name: "Peliculas"});
}

const getPelicula = (req, res) => {
    const {id} = req.params;
    console.log(id);
    res.json({name: `Pelicula con ID: ${id}`});
}

const getEstrenos = (req, res) => {
    res.json({name: "Estrenos"});
}

const getActores = (req, res) => {
    res.json({name: "Actores"});
}

module.exports = {
    getPeliculas,
    getActores,
    getEstrenos,
    getPelicula
}