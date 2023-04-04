const router = require('express').Router();
let ParkedCar = require('../models/parkedCars.model');

router.route('/').get((req, res) => {
  ParkedCar.find()
    .then((parkedCars) => res.json(parkedCars))
    .catch((err) => res.status(400).json('Error: ' + err));
});
router.route('/new').post((req, res) => {
  const car = req.body.car;
  const owner = req.body.owner;
  const plate = req.body.plate;

  const newParkedCar = new ParkedCar({ car, owner, plate });
  newParkedCar
    .save()
    .then(() => res.json('Parking Slot Occupied'))
    .catch((err) => res.status(404).json('Error ' + err));
});

module.exports = router;
