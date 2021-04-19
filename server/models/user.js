import Sequelize from 'sequelize'

const createUser = (sequalize) => {
    const User = sequalize.define("user", {
        firstName: {
        type: Sequelize.STRING
        },
        lastName: {
        type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        }
    });

    return User
}

export default createUser