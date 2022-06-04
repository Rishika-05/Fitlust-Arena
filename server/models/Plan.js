const mongoose = require("mongoose");

const planSchema = new mongoose.Schema(
  {
    gender: {
      type: String,
      require: true,
    },
    age: {
      type: String,
      require: true,
    },
    height: {
      type: String,
      require: true,
    },
    weight: {
      type: String,
      require: true,
    },
    activity: {
      type: String,
      require: true,
    },
    bodyFat: {
      type: String,
      require: true,
    },
    situation: {
      type: String,
      require: true,
    },
    idealPhysique: {
      type: String,
      require: true,
    },
    experience: {
      type: String,
      require: true,
    },
    sp: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);
const Plan = mongoose.model("CustomPlan", planSchema);

module.exports = Plan;
