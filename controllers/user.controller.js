/** @format */

const { User } = require("../models");

exports.findAll = (req, res) => {
  User.findAll()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
};

exports.findOne = (req, res) => {
  User.findAll({ where: { id: req.params.id }, include: ["citations"] })
    .then((users) => {
      res.send(users);
      console.log(req.params.id);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
};