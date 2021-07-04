const createResponse = (sequalize, Sequelize) => {
  const Response = sequalize.define('response', {
    type: Sequelize.STRING,
    content: Sequelize.STRING,
  });

  return Response;
};

export default createResponse;
