/** @format */

const { Citation } = require("../models");

exports.findAll = (req, res) => {
  Citation.findAll()
    .then((citations) => {
      res.send(citations);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
};

exports.findOne = (req, res) => {
  Citation.findAll({ where: { id: req.params.id } })
    .then((citations) => {
      res.send(citations);
      console.log(req.params.id);
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
};

exports.create = (req, res) => {
  Citation.create({
    content: req.body.content,
    UserId: req.params.userId
  }).then((resp) => {
    console.log(resp)
    res.send({message: "Citation ajoutée."});
  }).catch((err) => {
    if (err) {
      console.log(err);
      res.send({message: "L'ajout à la base de données a échoué."})
    }
  });
};

exports.update = (req, res) => {
  Citation.update({
    content: req.body.content
  }, { where: { id: req.params.id}}, {multi: true}).then((resp) => {
    res.send({message: "Citation modifiée."});
  }).catch((err) => {
    if (err) {
      console.log(err);
      res.send({message: "La modification a échoué."})
    }
  })
};

exports.delete = (req, res) => {
  Citation.destroy({ where: { id: req.params.id } });
  res.send("delete");
};