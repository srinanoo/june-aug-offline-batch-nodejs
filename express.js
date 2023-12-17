const express = require('express');

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// const trainees = require('./routes/traineesRoutes');
// app.get("/readTrainees", trainees.readTrainees);
// app.post("/createTrainee", trainees.createTrainee);
// app.put("/updateTrainee", (req, res) => {
//     res.send("This is for update trainee route");
// });

const traineesRoutes = require('./routes/traineesRoutes');
app.use("/api/v1/trainees", traineesRoutes); // http://localhost:4000/api/v1/trainees/

// const classRoutes = require('./routes/classRoutes');
// app.use("/api/v1/classes", classRoutes); // http://localhost:4000/api/v1/classes/

// const trainersRoutes = require('./routes/traineesRoutes');
// app.use("/api/v1/trainers", trainersRoutes); // http://localhost:4000/api/v1/trainers/

app.listen(4000, () => console.log("Server has started in port 4000"));