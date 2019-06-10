const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o app
const app = express();

//iniciando o db
mongoose.connect(
    'mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true }
);
requireDir('./src/models');

const Product = mongoose.model('Produt');

//primeira rota
app.get('/', (req, res) => {
    Product.create({
        title: 'React Native',
        description: 'Build Native apps with React',
        url: ' http://github.com/facebook/react-native'
    })

    return res.send('ROCKETSEAT - Semana Omnistack!!!');
});

app.listen(3001);