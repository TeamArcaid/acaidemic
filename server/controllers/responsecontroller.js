import { NotFoundApiError } from '../models/errors/notfounderror';
import { GlobalLogger } from '../services/logging';
import ResponseService from '../services/responseservice';

const addResponse = async (req, res) => {
  const { question_id, response_content } = req.body;

  const psuedo_user = {
    firstName: 'Foo',
    lastName: 'Bar',
    email: 'foobar@gmail.com',
  };

  const pseudo_question = {
    id: question_id,
    questionText: 'Foobar',
  };


  try {
    await ResponseService.addResponse({
      question: pseudo_question,
      user: psuedo_user,
      response_content: response_content,
    });

    res.status(204);
    res.send();
  } catch (err) {
    GlobalLogger.error("Error in Add Response", { error: err })
    if (err instanceof NotFoundApiError) {
      res.status(404);
      res.send('Resource not found.');
    } else {
      res.status(500);
      res.send('Internal Server Error');
    }
  }
};

export default {
  addResponse,
};
