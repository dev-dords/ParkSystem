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
  const parked = req.body.parked;

  const newParkedCar = new ParkedCar({ car, owner, plate, parked });
  newParkedCar
    .save()
    .then(() => res.json('Parking Slot Occupied'))
    .catch((err) => res.status(404).json('Error ' + err));
});
router.route('/edit/:plateNumber').put((req, res) => {
  ParkedCar.findOneAndUpdate({ plate: req.params.plateNumber }, req.body)
    .then(() => res.json('Parking Data Updated'))
    .catch((err) => res.status(404).json('Error ' + err));
});
router.route('/retrieve/:plateNumber').get((req, res) => {
  ParkedCar.findOne({ plate: req.params.plateNumber })
    .then((parked) => {
      if (parked) res.send(parked);
    })
    .catch((err) => res.status(404).json('Error ' + err));
});
module.exports = router;
