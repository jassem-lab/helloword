const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  articleName: { type: String },
  articleDate: { type: String },
  articleSmallDescription: { type: String },
  urlAdress: { type: String },
  comments: { type: String },
  likes: { type: String },
});

module.exports = model("Articles", schema);
