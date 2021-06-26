const createQuestion = (sequalize, Sequelize) => {
  const Question = sequalize.define('question', {
    questionText: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
  });

  return Question;
};

export default createQuestion;
