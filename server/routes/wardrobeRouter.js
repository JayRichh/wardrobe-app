const express = require("express");

const router = express.Router();

const Wardrobe = require("../models/wardrobeModel");

// post request to add a new closet item to the mongoDB database
router.post("/wardrobe", (req, res) => {
  const newClothingItem = new Wardrobe({
    name: req.body.name,
    userID: req.body.userID,
    description: req.body.description,
    type: req.body.type,
    occasion: req.body.occasion,
    color: req.body.color,
    size: req.body.size,
    pricePaid: req.body.pricePaid,
    RRP: req.body.RRP,
    date: req.body.date,
    wearCount: req.body.wearCount,
    image: req.body.image,
  });
  newClothingItem
    .save()
    .then((result) => {
      res.status(200).send({ data: result });
    })
    .catch((err) => {
      res.status(400).send({ error: err });
    });
});

// get request to retrieve all closet items from the mongoDB database
router.get("/wardrobe", (req, res) => {
  Wardrobe.find()
    .then((result) => {
      res.status(200).send({ data: result });
    })
    .catch((err) => {
      res.status(400).send({ error: err });
    });
});

// get request to retrieve the closet items from the mongoDB database that match the userID
router.get("/wardrobe/:userID", (req, res) => {
  Wardrobe.find({ userID: req.params.userID })
    .then((result) => {
      res.status(200).send({ data: result });
    })
    .catch((err) => {
      res.status(400).send({ error: err });
    });
});

// put request to update a closet item that matches the _id in the mongoDB database
router.put("/wardrobe/:_id", (req, res) => {
  Wardrobe.findByIdAndUpdate(req.params._id, req.body)
    .then((result) => {
      res.status(200).send({ data: result });
    })
    .catch((err) => {
      res.status(400).send({ error: err });
    });
});

// delete request to delete a closet item that matches the _id in the mongoDB database
router.delete("/wardrobe/:_id", (req, res) => {
  Wardrobe.findByIdAndDelete(req.params._id)
    .then((result) => {
      res.status(200).send({ data: result });
    })
    .catch((err) => {
      res.status(400).send({ error: err });
    });
});

module.exports = router;
