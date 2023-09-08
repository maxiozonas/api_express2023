const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello Word');
});

app.get('/home', (req, res) => {
    res.json({text: "Estamos en casaaaaa"})
})

app.listen(port, () => {
    console.log(`La APP esta siendo escuchada en el puesto ${port}`);
})