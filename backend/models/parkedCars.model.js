const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const parkedCarSchema = new Schema(
  {
    car: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      minlength: 3,
    },
    parked: {
      type: Boolean,
      required: true,
      unique: false,
    },
    owner: {
      type: String,
      required: true,
      unique: false,
      trim: true,
      minlength: 3,
    },
    plate: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
);

const parkedCar = mongoose.model('ParkedCar', parkedCarSchema);

module.exports = parkedCar;
