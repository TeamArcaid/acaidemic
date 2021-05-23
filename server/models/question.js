const createQuestion = (sequalize, Sequelize) => {
  const Question = sequalize.define('question', {
    questionText: {
      type: Sequelize.STRING,
    },
  });

  return Question;
};

export default createQuestion;
