const express = require("express");
const Propertyroute = express.Router();

const PropertyModel = require("..PropertyModel.js");

router.post("/registration", function (req, res) {
  let newDocument = {
    title: req.body.title,
    description: req.body.description,
    img: req.body.img,
    location: req.body.location,
    price: req.body.price,
    dateCreated: req.body.dateCreated,
  };

  PropertyModel.create(newDocument)

    .then(function (dbDocument) {
      res.json(dbDocument);
    })
    .catch(function (error) {
      console.log("/registration error", error);

      res.send("An error occured");
    });
});

Propertyroute.put("/update", function (req, res) {
  let updates = {};

  if (req.body.title) {
    updates["title"] = req.body.title;
  }
  if (req.body.description) {
    updates["description"] = req.body.description;
  }
  if (req.body.img) {
    updates["img"] = req.body.img;
  }
  if (req.body.price) {
    updates["price"] = req.body.price;
  }

  PropertyModel.findOneAndUpdate(
    {
      email: req.body.email,
    },
    {
      $set: updates,
    },
    {
      new: true,
    }
  )
    .then(function (dbDocument) {
      res.json(dbDocument);
    })
    .catch(function (error) {
      console.log("/users/update error", error);
      res.send("An error occured");
    });
});

module.exports = Propertyroute;
