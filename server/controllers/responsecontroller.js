import { NotFoundApiError } from '../models/errors/notfounderror';
import { GlobalLogger } from '../services/logging';
import ResponseService from '../services/responseservice';

const addResponse = async (req, res) => {
  const { question_id, response_content } = req.body;

  try {
    await ResponseService.addResponse({
      question_id: question_id,
      user_id: req.params.user_id,
      response_content: response_content,
    });

    res.status(204);
    res.send();
  } catch (err) {
    GlobalLogger.error('Error in Add Response', { error: err });
    if (err instanceof NotFoundApiError) {
      res.status(404);
      res.send('Resource not found.');
    } else {
      res.status(500);
      res.send('Internal Server Error');
    }
  }
};

const getResponses = async (req, res) => {
  try {
    const responses = await ResponseService.getResponses({ user_id: req.params.user_id });
    res.status(200);
    res.send(responses);
  } catch (err) {
    GlobalLogger.error('Error in Get Response', { error: err });
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
  getResponses
};
