const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  workingHours: {
    start: { type: String, required: true },
    end: { type: String, required: true },
  },
}, { timestamps: true });

module.exports = mongoose.model("Doctor", doctorSchema);
