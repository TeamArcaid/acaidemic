import db from '../models';
import { GlobalLogger } from './logging';

export const ResponseTypes = {
  STRING: 'Text',
};

const addResponse = ({ question, user, response_content }) =>
  _addResponse({
    question: question,
    user: user,
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
  }
};

export default {
  addResponse,
};
