import models from "../models";

const createOne = (req, res) => {
  console.log("create plant api called");
  const plant = {
    species: req.body.species,
    stage: req.body.stage,
    problem: req.body.problem,
    startMood: req.body.startMood,
    endMood: req.body.endMood,
    userId: "1",
  };

  models.plant
    .create(plant)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error",
      });
    });
};

const readOne = (req, res) => {
  const id = req.params.id;
  models.plant
    .findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Plant with id=" + id,
      });
    });
};

const readAll = (req, res) => {
  console.log("list plants api called");
  models.plant.findAll().then((plants) => {
    res.json(plants);
  });
};

const updateOne = (req, res) => {
  const id = req.params.id;

  models.plant
    .update(req.body, {
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Plant updated",
        });
      } else {
        res.send({
          message: `Cannot update Plant with id=${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Plant with id=" + id,
      });
    });
};

const deleteOne = (req, res) => {
  const id = req.params.id;
  models.plant
    .destroy({
      where: { id: id },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Plant successfully deleted",
        });
      } else {
        res.send({
          message: `Cannot delete Plant with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Plant with id=" + id,
      });
    });
};

const deleteAll = (req, res) => {
  models.plant
    .destroy({
      where: {},
      truncate: false,
    })
    .then((nums) => {
      res.send({ message: `${nums} Plants deleted` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error",
      });
    });
};

export default {
  createOne,
  readOne,
  readAll,
  updateOne,
  deleteOne,
  deleteAll,
};
