const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  text: { type: String },
  articleOwner: { type: Types.ObjectId, ref: "Articles" },
  blockOwner: { type: Types.ObjectId, ref: "ArticleBlock" },
});

module.exports = model("BlocksTextAreas", schema);
