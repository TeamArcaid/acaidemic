import { NotFoundApiError } from '../models/errors/notfounderror';
import ResponseService from '../services/responseservice';

const addResponse = async (req, res) => {
  const psuedo_user = {
    id: 1,
    firstName: 'Foo',
    lastName: 'Bar',
    email: 'foobar@gmail.com',
  };

  const pseudo_question = {
    id: 1,
    questionText: 'Foobar',
  };

  const { question_id, response_content } = req.body;

  try {
    await ResponseService.addResponse({
      question: pseudo_question,
      user: psuedo_user,
      response_content: response_content,
    });

    res.status(204);
    res.send();
  } catch (err) {
    if (err instanceof NotFoundApiError) {
      res.status(404);
      res.send('Resource not found.');
    }
  }
};

export default {
  addResponse,
};
