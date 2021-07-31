const createResponse = (sequelize, SequelizeDataTypes) => {
  const Response = sequelize.define('response', {
    type: SequelizeDataTypes.STRING,
    content: SequelizeDataTypes.STRING,
  });

  return Response;
};

export default createResponse;
