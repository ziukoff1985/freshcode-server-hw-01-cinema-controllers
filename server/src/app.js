const express = require('express');

const ActorsController = require('./controllers/actorsController');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('This is the home page!');
});

app.get('/actors', ActorsController.getAllActors);
app.get('/actors/:actorId', ActorsController.getActorById);
app.post('/actors', ActorsController.createActor);
app.put('/actors', ActorsController.updateActor);
app.delete('/actors/:actorId', ActorsController.deleteActor);

module.exports = app;
