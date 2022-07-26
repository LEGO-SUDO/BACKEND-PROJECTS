const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Must provide a name!"],
      trim: true,
      maxlength: [20, "Name cannot be greater than 20!"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    writeConcern: {
      w: "majority",
      j: true,
      wtimeout: 1000,
    },
  }
);

module.exports = mongoose.model("Task", TaskSchema);
