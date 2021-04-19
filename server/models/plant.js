import Sequelize from 'sequelize'

const createPlant = (sequalize) => {
    const Plant = sequalize.define("plant", {
        species: {
        type: Sequelize.STRING
        },
        stage: {
        type: Sequelize.INTEGER
        },
        problem: {
            type: Sequelize.INTEGER
        },
        startMood: {
            type: Sequelize.INTEGER
        },
        endMood: {
            type: Sequelize.INTEGER
        }
    });

    return Plant;
}

export default createPlant