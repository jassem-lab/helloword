const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  name: { type: String, required: true, unique: false },
  number: { type: String, required: false, unique: false },
  email: { type: String, required: true, unique: true },
  message: { type: String, required: true, unique: false },
  owner: { type: Types.ObjectId, ref: "Works" },
});

module.exports = model("Feedback", schema);
