const express = require('express');

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const trainees = require('./trainessExpress');

app.get("/readTrainees", trainees.readTrainees);
app.post("/createTrainee", trainees.createTrainee);

app.listen(4000, () => console.log("Server has started in port 4000"));