const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use({
    extended: true
})

app.use(express.json())

app.get('/', (req, res) => {

    res.json( {message: "Olá seu bucefaloS"})
})

app.listen(3000)



mongoose.connect('mongodb+srv://BrLacerda:KSNKKSNK@apirestmovie.5ry2gej.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('conectados!!')
    })
    .catch((err) => { console.log(err) })