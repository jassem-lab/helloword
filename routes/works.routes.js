const { Router } = require("express");
const Works = require("../models/Works");
const Colors = require("../models/Colors");
const textStyles = require("../models/TextStyles");
const whatIDid = require("../models/WhatIDid");
const Img = require("../models/Img");
const router = Router();
const WorkComments = require("../models/WorkComment");

// /api/works/create (create work)
router.post("/create", async (req, res) => {
  try {
    let Work = new Works(req.body);
    console.log(Work);
    await Work.save();

    res.status(201).json({ Work });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/:id (update data for current work(by id))
router.patch("/:id", async (req, res) => {
  try {
    const Work = await Works.updateOne({ _id: req.params.id }, { $set: req.body });
    res.json({ Work });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/ (get all data about all works)
router.get("/", async (req, res) => {
  try {
    const WorksData = await Works.find();
    res.json(WorksData);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/:id (get work data by work name)
router.get("/getWork/:url", async (req, res) => {
  try {
    console.log(req.params.url);
    const Work = await Works.find({ urlAdress: req.params.url });
    res.json(Work);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/:id (get work data by id)
router.get("/:id", async (req, res) => {
  try {
    const Work = await Works.findById(req.params.id);
    res.json(Work);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/:id (get work data by work name)
router.get("/getWork/:name", async (req, res) => {
  try {
    const Work = await Works.findById({ workName: req.params.name });
    res.json(Work);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/create-color
router.post("/create-color", async (req, res) => {
  try {
    const Work = await Works.findOne({ _id: req.body.id });
    const workId = Work._id;
    const Color = new Colors({ color: req.body.color, owner: workId });
    await Color.save();

    res.status(201).json({ Color });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/colors/:urlAdress
router.get("/colors/:id", async (req, res) => {
  try {
    const Work = await Works.findOne({ _id: req.params.id });
    const workId = Work._id;
    console.log(workId);
    const colorsData = await Colors.find({ owner: workId });
    res.json(colorsData);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/create-textStyle
router.post("/create-textStyle", async (req, res) => {
  try {
    const Work = await Works.findOne({ _id: req.body.id });
    const workId = Work._id;
    const { name, size, weight } = req.body;
    const textStyle = new textStyles({ name, size, weight, owner: workId });

    await textStyle.save();

    res.status(201).json({ textStyle });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/textStyles/:id
router.get("/textStyles/:id", async (req, res) => {
  try {
    const Work = await Works.findOne({ _id: req.params.id });
    const workId = Work._id;
    const textStyle = await textStyles.find({ owner: workId });
    res.json(textStyle);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/create-didPoint
router.post("/create-didPoint", async (req, res) => {
  try {
    const Work = await Works.findOne({ _id: req.body.id });
    const workId = Work._id;
    const didPoint = new whatIDid({ name: req.body.newPoint, owner: workId });

    await didPoint.save();

    res.status(201).json({ didPoint });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/textStyles/:id
router.get("/didPoint/:id", async (req, res) => {
  try {
    const Work = await Works.findOne({ _id: req.params.id });
    const workId = Work._id;
    const textStyle = await whatIDid.find({ owner: workId });
    res.json(textStyle);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

//  WORK COOMMENTS ROUTES
// create comment for an work /api/works/createWorkComment
router.post("/createWorkComment", async (req, res) => {
  try {
    const newWorkComment = new WorkComments(req.body);
    await newWorkComment.save();

    res.status(201).json({ newWorkComment });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/getWorkComments/:id (get all comments for current work)
router.get("/getWorkComments/:id", async (req, res) => {
  try {
    const WorkCommentsResponse = await WorkComments.find({ workOwner: req.params.id });
    res.json(WorkCommentsResponse);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/addPhoto
router.post("/addPhoto/:id", async (req, res) => {
  const { name, descr, type, img } = req.body;
  const imageData = new Img({
    name,
    descr,
    type,
    owner: req.params.id,
  });
  saveImage(imageData, img);
  try {
    const newImg = await imageData.save();
    res.redirect("/admin/create-new-work");
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// accessable mimetypes
const imageMimeTypes = ["image/jpeg", "image/png", "image/gif"];

// creating function for decoding to utf-8 type for economy space in the database
function saveImage(imageData, imgEncoded) {
  if (imgEncoded == null) {
    return;
  }

  const img = JSON.parse(imgEncoded);
  if (img !== null && imageMimeTypes.includes(img.type)) {
    imageData.img = new Buffer.from(img.data, "utf-8");
    imageData.imgType = img.type;
  }
}

// /api/works/getPhotos/:owner (get images for only current work)
router.get("/getPhotos/:owner", async (req, res) => {
  try {
    const img = await Img.find({ owner: req.params.owner });
    res.json(img);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/getPhotos/:owner (get only work covers)
router.get("/getMainPhotos/:type", async (req, res) => {
  try {
    const img = await Img.find({ type: req.params.type });
    res.json(img);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

module.exports = router;
