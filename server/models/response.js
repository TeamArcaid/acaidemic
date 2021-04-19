import Sequelize from 'sequelize'

const createResponse = (sequalize) => {
    const Response = sequalize.define("response", {
        response: {
        type: Sequelize.STRING
        }
    });

    return Response;
}

export default createResponse