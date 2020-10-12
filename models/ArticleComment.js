const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  userName: { type: String },
  CommentDate: { type: Date, default: Date() },
  CommentText: { type: String },
  articleOwner: { type: Types.ObjectId, ref: "Articles" },
  commentOwner: { type: Types.ObjectId, ref: "ArticleComments" },
});

module.exports = model("ArticleComments", schema);
