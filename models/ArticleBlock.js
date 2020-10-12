const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  title: { type: String },
  titlePosition: { type: String },
  text: { type: String },
  owner: { type: Types.ObjectId, ref: "Articles" },
});

module.exports = model("ArticleBlock", schema);
