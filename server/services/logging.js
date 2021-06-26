const logBase = (msg, { additionalInfo }) => {
  console.log(msg);
};

const logError = (msg, { error, ...additionInfo }) => {
  logBase(`Error occured with message: ${msg}. Error Info: ${error}`);
}

const initializeLogger = (options) => ({
  log: logBase,
  error: logError,
});

export const GlobalLogger = initializeLogger({});
