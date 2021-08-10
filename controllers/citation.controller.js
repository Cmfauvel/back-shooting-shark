/** @format */

const { Citation, Sequelize } = require("../models");
const Op = Sequelize.Op;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

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

exports.findAllByUser = (req, res) => {
  Citation.findAll({ where: { UserId: req.params.userId}})
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

exports.findARandom = async (req, res) => {
  let count;
  await Citation.count().then((resp) => {
    count = resp
  });
  Citation.findAll().then((citation) => {
    res.send(citation[getRandomInt(count)]);
  })
  .catch((err) => {
    if (err) {
      console.log(err);
    }
  });
}

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
  Citation.destroy({ where: { id: req.params.id } }).then((resp) => {
    res.send({message: "Citation supprimée."})}).catch((err) => {
      if (err) {
        console.log(err);
        res.send({message: "La suppression a échoué."})
      }
    })
};