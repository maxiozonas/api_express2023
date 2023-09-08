const express = require('express');

class Server {
    
    constructor() {
        this.port = process.env.PORT || 3000;
        this.app = express();

        // 1ro en orden
        this.middleware()
        // 2do en orden
        this.routes();
    }

    middleware() {
        // Una vez que se configura esta seccion publica, NO es posible utilizar esta ruta.
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use('/api/v1/demo', require('../routes/demo'))

        
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`La APP esta siendo escuchada en el puerto ${this.port}`);
        });
    }
}

module.exports = Server;


