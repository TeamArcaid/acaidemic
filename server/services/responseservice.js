import db from '../models';
import { GlobalLogger } from './logging';

export const ResponseTypes = {
  STRING: 'Text',
};

const addResponse = async ({ question_id, user_id, response_content }) =>
  await _addResponse({
    question_id: question_id,
    user_id: user_id,
    response_type: ResponseTypes.STRING,
    response_content: response_content,
  });

const _addResponse = async ({ question_id, user_id, response_type, response_content }) => {
  const transaction = await db.sequelize.transaction();

  try {
    const response = await db.response.create(
      {
        type: response_type,
        content: response_content,
        questionId: question_id,
        userId: user_id,
      },
      {}
    );

    await transaction.commit();
  } catch (err) {
    await transaction.rollback();
    GlobalLogger.error('Rolling back new response', {
      error: err,
      additionInfo: { question_id, user_id, response_type, response_content },
    });
    throw err;
  }
};

const getResponses = async ({ user_id }) => {
  try {
    const responses = await db.response.findAll({
      where: {
        userId: user_id,
      },
    });

    return responses;
  } catch (err) {
    GlobalLogger.error('Rolling back new response', {
      error: err,
      additionInfo: { user_id },
    });

    throw err;
  }
};

export default {
  addResponse,
  getResponses,
};
