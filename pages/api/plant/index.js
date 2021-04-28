import nextConnect from "next-connect";
import models from "../../../db/models";

const createOne = async (req, res) => {
  console.log("create plant api called");
  const plant = {
    species: req.body.species,
    stage: req.body.stage,
    problem: req.body.problem,
    startMood: req.body.startMood,
    endMood: req.body.endMood,
    userId: "1",
  };

  await models.plant
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

const readAll = (req, res) => {
  console.log("list plants api called");
  models.plant.findAll().then((plants) => {
    res.json(plants);
  });
};

const handler = nextConnect().get(readAll).post(createOne).delete(deleteAll);

export default handler;
