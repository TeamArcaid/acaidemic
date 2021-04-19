import Sequelize from 'sequelize'

const createQuestion = (sequalize) => {
    const Question = sequalize.define("question", {
        questionText: {
        type: Sequelize.STRING
        }
    });

    return Question;
}

export default createQuestion