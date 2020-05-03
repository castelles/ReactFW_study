const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o app

const app = express();

// Iniciando o DB

mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});
requireDir('./src/models');

// Rotas
try {
    app.use("/api",require("./src/routes"));
} catch (err) {
    console.log(err);
}


app.listen(3001);