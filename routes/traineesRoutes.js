const traineesControllers = require('../controllers/traineesControllers');
const router = require('express').Router();

// /readTrainees
router.get("/readTrainees", traineesControllers.readTrainees);

// /createTrainee
router.post("/createTrainee", traineesControllers.createTrainee);

// /updateTrainee
router.put("/updateTrainee", traineesControllers.updateTrainee);

// /deleteTrainee
router.delete("/deleteTrainee", traineesControllers.deleteTrainee);

module.exports = router;