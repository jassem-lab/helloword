const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  title: { type: String },
  articleOwner: { type: Types.ObjectId, ref: "Articles" },
  blockOwner: { type: Types.ObjectId, ref: "ArticleBlock" },
});

module.exports = model("BlocksLists", schema);
