const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  descr: { type: String },
  type: { type: String },
  img: { type: String },
  imgType: { type: String },
  owner: { type: Types.ObjectId, ref: "Articles" },
});

module.exports = model("ArticlesImages", schema);
