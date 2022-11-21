const express = require("express");

const router = express.Router();

const User = require("../models/userModel");

router.post("/create-user", (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    id: req.body.id,
  });
  user
    .save()
    .then((result) => {
      res.status(200).send({ data: result });
    })
    .catch((err) => {
      res.status(400).send({ error: err });
    });
});

module.exports = router;
