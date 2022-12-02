const express = require("express");
const Clientroute = express.Router();

const ClientModel = require("..ClientModel.js");

Clientroute.post("/registration", function (req, res) {
  let newDocument = {
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
    avatar: req.body.avatar,
    dateCreated: req.body.dateCreated,
  };

  ClientModel.create(newDocument)

    .then(function (dbDocument) {
      res.json(dbDocument);
    })
    .catch(function (error) {
      console.log("/registration error", error);

      res.send("An error occured");
    });
});

Clientroute.put("/update", function (req, res) {
  let updates = {};

  if (req.body.userName) {
    updates["userName"] = req.body.userName;
  }
  if (req.body.email) {
    updates["email"] = req.body.email;
  }
  if (req.body.password) {
    updates["password"] = req.body.password;
  }
  if (req.body.avatar) {
    updates["avatar"] = req.body.avatar;
  }

  ClientModel.findOneAndUpdate(
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

Clientroute.put("/login", function (req, res) {
  let login = {};
  if (req.body.email) {
    login["email"] = req.body.email;

    if (req.body.password) {
      login["password"] = req.body.password;
    }
  }
});

module.exports = Clientroute;
