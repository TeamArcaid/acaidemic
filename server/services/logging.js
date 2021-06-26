const logBase = (msg, { additionalInfo }) => {
  console.log(msg);
};

const initializeLogger = (options) => ({
  log: logBase,
});

export const GlobalLogger = initializeLogger({});
