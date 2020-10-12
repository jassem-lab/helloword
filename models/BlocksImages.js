const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  descr: { type: String },
  type: { type: String },
  img: { type: String },
  imgType: { type: String },
  imgPositioning: { type: String },
  imgWidth: { type: String },
  articleOwner: { type: Types.ObjectId, ref: "Articles" },
  blockOwner: { type: Types.ObjectId, ref: "ArticleBlock" },
});

module.exports = model("BlocksImages", schema);
