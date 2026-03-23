const express = require('express');

const ActorsController = require('./controllers/actorsController');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('This is the home page!');
});

app.get('/actors', ActorsController.getAllActors);
app.get('/actors/:actorId', ActorsController.getActorById);

module.exports = app;
