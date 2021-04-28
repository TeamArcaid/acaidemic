import nextConnect from "next-connect";
import models from "../../../db/models";

const readOne = async (req, res) => {
  const id = req.params.id;
  await models.plant
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

const updateOne = async (req, res) => {
  const id = req.params.id;

  await models.plant
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

const handler = nextConnect().get(readOne).put(updateOne).delete(deleteOne);
