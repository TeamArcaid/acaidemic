import db from '../../models';
import { NotFoundApiError } from '../models/errors/notfounderror';
import { GlobalLogger } from './logging';

export const ResponseTypes = {
  STRING: 1,
};

const addResponse = ({ question, user, response_content }) =>
  _addResponse({
    question: question,
    user: user,
    response_type: ResponseTypes.STRING,
    response_content: response_content,
  });

const _addResponse = async ({ question, user, response_type, response_content }) => {
  if (!question || !user) {
    throw new NotFoundApiError('Resource could not be found.');
  }

  const new_response = {
    type: response_type,
    content: response_content,
  };

  try {
    db.response.create(new_response, {
      include: [question],
    });
  } catch (err) {
    GlobalLogger.error('Error adding response', { error: err, additionInfo: [arguments] });
  }
};

export default {
  addResponse,
};
