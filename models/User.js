const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  email: { type: String, required: true, unique: true }, 
  password: { type: String, required: true },
  Feedbacks: [{ type: Types.ObjectId, ref: "Feedback" }],
  Works: [{ type: Types.ObjectId, ref: "Works" }],
});

module.exports = model("User", schema);
