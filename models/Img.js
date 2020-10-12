const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  name: { type: String, required: true },
  descr: { type: String, required: true },
  type: { type: String, required: true },
  img: { type: String, required: true },
  imgType: { type: String, required: true },
  owner: { type: Types.ObjectId, ref: "Works" },
});

schema.virtual("imgSrc").get(function () {
  if (this.img !== null && this.imgType !== null) {
    return `data:${this.imgType};charset=utf-8;base64,${this.img.toString(base64)}`;
  }
});

module.exports = model("Img", schema);
