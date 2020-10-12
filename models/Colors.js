const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  color: { type: String, required: false, unique: false },
  owner: { type: Types.ObjectId, ref: "Works" },
});

module.exports = model("colors", schema);