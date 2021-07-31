import db from '../models';
import { NotFoundApiError } from '../models/errors/notfounderror';

const createAll = (req, res) => {
  const questions = [
    { questionText: 'How is this affecting me' },
    { questionText: 'What is within my control, and what is not?' },
    { questionText: 'What will bring me comfort right now?' },
    { questionText: 'If there is a person/s tied to the stress, how should I deal with that situation?' },
    { questionText: 'What will I do to succeed?' },
  ];

  db.question
    .bulkCreate(questions)
    .then(() => {
      return db.question.findAll();
    })
    .then((questions) => {
      console.log(questions);
      res.send(questions);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error',
      });
    });
};

const addQuestion = (req, res) => {
  const promises = [findPlant(req.params.plant_id), findQuestion(req.params.question_id)];

  Promise.all(promises).then(([plant, question]) => {
    plant.addQuestion(question);
    const NO_CONTENT_STATUS_CODE = 204;
    res.status(NO_CONTENT_STATUS_CODE);
    res.send();
  });
};

const findPlant = (plant_id) =>
  db.plant.findByPk(plant_id).then((plant) => {
    if (!plant) {
      throw new NotFoundApiError('Plant was not found');
    }

    return plant;
  });

const findQuestion = (question_id) =>
  db.question.findPk(question_id).then((question) => {
    if (!question) {
      throw new NotFoundApiError('Question was not found');
    }

    return question;
  });

const addResponse = (req, res) => {
  return db.plant
    .findByPk(req.params.plant_id)
    .then((plant) => {
      if (!plant) {
        res.status(404);
        res.send('Plant not found');
      }

      return db.question.findByPk(req.params.question_id).then((question) => {
        if (!question) {
          console.log('Question not found');
          return null;
        }
        const response = {
          response: req.body.response,
          userId: '1',
          plantId: plant.id,
          questionId: question.id,
        };

        db.response
          .create(response)
          .then((data) => {
            res.send(data);
          })
          .catch((err) => {
            res.status(500).send({
              message: err.message || 'Some error',
            });
          });
      });
    })

    .catch((err) => {
      console.log('>> Error while adding Response: ', err);
    });
};

const readResponse = (req, res) => {
  return db.response
    .findByPk(req.params.response_id, { include: ['question'] })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log('Error while finding response: ', err);
    });
};

export default {
  createAll,
  addQuestion,
  addResponse,
};
