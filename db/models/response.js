const createResponse = (sequalize, Sequelize) => {
  const Response = sequalize.define("response", {
    response: {
      type: Sequelize.STRING,
    },
  });

  return Response;
};

export default createResponse;
