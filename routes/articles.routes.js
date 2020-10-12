const { Router } = require("express");
const Articles = require("../models/Articles");
const ArticlesImages = require("../models/ArticlesImages");
const ArticleBlock = require("../models/ArticleBlock");
const BlocksImages = require("../models/BlocksImages");
const BlocksLists = require("../models/BlocksLists");
const BlocksTextAreas = require("../models/BlocksTextAreas");
const ArticleComment = require("../models/ArticleComment");
const router = Router();

// Creating main routes for Articles Model.

// /api/articles/create
router.post("/create", async (req, res) => {
  try {
    const Article = new Articles(req.body);
    await Article.save();

    res.status(201).json({ Article });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/articles/:id (update data for current work(by id))
router.patch("/:id", async (req, res) => {
  try {
    const Article = await Articles.updateOne({ _id: req.params.id }, { $set: req.body });
    res.json({ Article });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/ (get all data about all works)
router.get("/", async (req, res) => {
  try {
    const ArticlesData = await Articles.find();
    res.json(ArticlesData);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/:id (get work data by work name)
router.get("/getArticle/:url", async (req, res) => {
  try {
    console.log(req.params.url);
    const Article = await Articles.find({ urlAdress: req.params.url });
    res.json(Article);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

router.post("/createArticleBlock", async (req, res) => {
  try {
    const Block = new ArticleBlock(req.body);
    await Block.save();

    res.status(201).json({ Block });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

router.post("/createArticleBlockList", async (req, res) => {
  try {
    const BlockList = new BlocksLists(req.body);
    await BlockList.save();

    res.status(201).json({ BlockList });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

router.post("/createArticleBlockTextArea", async (req, res) => {
  try {
    const BlockTextArea = new BlocksTextAreas(req.body);
    await BlockTextArea.save();

    res.status(201).json({ BlockTextArea });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/ (get all data about all works)
router.get("/getArticleBlockData", async (req, res) => {
  try {
    const ArticleBlockData = await ArticleBlock.find();
    res.json(ArticleBlockData);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/ (get all data about all works)
router.get("/getArticleBlockData/:id", async (req, res) => {
  try {
    const ArticleBlockData = await ArticleBlock.find({ owner: req.params.id });
    res.json(ArticleBlockData);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/ (get all data about all works)
router.get("/getArticleBlockLists/:id", async (req, res) => {
  try {
    const ArticleBlockListsData = await BlocksLists.find({ articleOwner: req.params.id });
    res.json(ArticleBlockListsData);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/ (get all data about all works)
router.get("/getArticleBlockTextAreas/:id", async (req, res) => {
  try {
    const ArticleBlockTextAreasData = await BlocksTextAreas.find({ articleOwner: req.params.id });
    res.json(ArticleBlockTextAreasData);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/ (get all data about all works)
router.get("/getArticleMainImages", async (req, res) => {
  try {
    const ArticleBlockImages = await ArticlesImages.find();
    res.json(ArticleBlockImages);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/ (get all data about all works)
router.get("/getArticleMainImages/:id", async (req, res) => {
  try {
    const ArticleBlockImages = await ArticlesImages.find({ owner: req.params.id });
    res.json(ArticleBlockImages);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/works/ (get all data about all works)
router.get("/getArticleBlockImages/:id", async (req, res) => {
  try {
    const ArticleBlockImages = await BlocksImages.find({ articleOwner: req.params.id });
    res.json(ArticleBlockImages);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

//  ARTICLE COOMMENTS ROUTES
// create comment for an article /api/articles/createArticleComment
router.post("/createArticleComment", async (req, res) => {
  try {
    const newArticleComment = new ArticleComment(req.body);
    await newArticleComment.save();

    res.status(201).json({ newArticleComment });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/articles/getArticleComments/:id (get all comments for current article)
router.get("/getArticleComments/:id", async (req, res) => {
  try {
    const ArticleCommentsResponse = await ArticleComment.find({ articleOwner: req.params.id });
    res.json(ArticleCommentsResponse);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

// /api/articles/addPhoto
router.post("/addPhoto", async (req, res) => {
  const { descr, type, img, owner } = req.body;
  const imageData = new ArticlesImages({
    descr,
    type,
    owner,
  });
  saveImage(imageData, img);
  try {
    const newImg = await imageData.save();
    res.redirect("/admin/update-latest-article");
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please, try again" });
  }
});

router.post("/block/addPhoto", async (req, res) => {
  const { descr, type, img, imgPositioning, imgWidth, articleOwner, blockOwner } = req.body;
  const imageData = new BlocksImages({
    descr,
    type,
    imgPositioning,
    imgWidth,
    articleOwner,
    blockOwner,
  });
  saveImage(imageData, img);
  try {
    const newImg = await imageData.save();
    res.redirect("/admin/update-latest-article");
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

module.exports = router;
