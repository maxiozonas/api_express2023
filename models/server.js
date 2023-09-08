const express = require('express');

class Server {
    
    constructor() {
        this.port = process.env.PORT || 3000;
        this.app = express();

        this.routes();
    }

    routes() {
        // Define una ruta GET para la raíz
        this.app.get('/', (req, res) => {
            res.send("Hello World!");
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`La APP esta siendo escuchada en el puerto ${this.port}`);
        });
    }
}

module.exports = Server;


