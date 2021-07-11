import config from './../config/config';
import app from './express';
import { GlobalLogger } from './services/logging';

app.listen(config.port, (err) => {
  if (err) {
    GlobalLogger.log(err);
  }
  GlobalLogger.info(`Server started on port ${config.port}. `);
});
