const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  userName: { type: String },
  CommentDate: { type: Date, default: Date.now },
  CommentText: { type: String },
  workOwner: { type: Types.ObjectId, ref: "Works" },
  commentOwner: { type: Types.ObjectId, ref: "WorkComments" },
});

module.exports = model("WorkComments", schema);
