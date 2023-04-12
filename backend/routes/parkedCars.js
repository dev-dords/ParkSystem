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
router.route('/edit/:_id').put((req, res) => {
  ParkedCar.findByIdAndUpdate({ _id: req.params._id }, req.body)
    .then(() => res.json('Parking Data Updated'))
    .catch((err) => res.status(404).json('Error ' + err));
});
router.route('/remove_park/:_id').put((req, res) => {
  ParkedCar.findByIdAndUpdate({ _id: req.params._id }, { parked: false })
    .then(() => {
      res.send('Car removed from parking garage.');
    })
    .catch((err) => res.status(404).json('Error' + err));
});
router.route('/retrieve/:_id').get((req, res) => {
  ParkedCar.findById({ plate: req.params._id })
    .then((parked) => {
      if (parked) res.send(parked);
    })
    .catch((err) => res.status(404).json('Error ' + err));
});
router.route('/delete/:_id').delete((req, res) => {
  ParkedCar.deleteOne({ _id: req.params._id }).then(() => {
    res.send('Record deleted');
  });
});
module.exports = router;
