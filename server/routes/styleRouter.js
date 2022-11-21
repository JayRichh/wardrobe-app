const express = require("express");

const router = express.Router();

const Style = require("../models/styleModel");

//newStyle new Style post to userId
router.post("wardrobe/styles/:userId", (req, res) => {
  const newStyle = new Style({
    name: req.body.name,
    styleID: req.body.styleID,
  });
  newStyle
    .save()
    .then((result) => {
      res.status(200).send({ data: result });
    })
    .catch((err) => {
      res.status(400).send({ error: err });
    });
});

// post style to wardrobe with id of userId
router.post("/wardrobe/styles/:userId", (req, res) => {
  Wardrobe.findByIdAndUpdate(req.params.userId, req.body)
    .then((result) => {
      res.status(200).send({ data: result });
    })
    .catch((err) => {
      res.status(400).send({ error: err });
    });
});
      

router.get("/wardrobe/styles/:userId", async (req, res) => {
  Style.find({ userID: req.params.userId })
    .then((result) => {
      res.status(200).send({ data: result });
    })
    .catch((err) => {
      res.status(400).send({ error: err });
    });
});

module.exports = router;
