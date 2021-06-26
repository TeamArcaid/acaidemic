const logBase = (msg) => {
  console.log(msg);
};

const initializeLogger = ({ additionalInfo, ...options}}) => {
  return {
    log: logBase,
  };
};

export const GlobalLogger = initializeLogger();
