const logBase = (msg) => {
  console.log(msg);
};

const initializeLogger = (options) => {
  return {
    log: logBase,
  };
};

export const GlobalLogger = initializeLogger();
