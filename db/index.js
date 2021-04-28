import config from "../config";
import express from "express";
import bodyParser from "body-parser";
//import cookieParser from' cookie-parser'
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import Template from "./../template";
import userRoutes from "./routes/user.routes";
import plantRoutes from "./routes/plant.routes";
import questionRoutes from "./routes/question.routes";

import db from "./models";
db.sequelize.sync();

/* comment out before building for production */
import devBundle from "./devBundle";

const app = express();

/* comment out before building for production */
devBundle.compile(app);

/* parse body params and attach them to req.body*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(cookieParser())
app.use(compress());
/* secure apps by setting various HTTP headers */
app.use(helmet());
/* enable CORS - Cross Origin Resource Sharing*/
app.use(cors());

/* mount routes */
app.use("/", userRoutes);
app.use("/", plantRoutes);
app.use("/", questionRoutes);

/* catch unauthorized errors */
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ": " + err.message });
  } else if (err) {
    res.status(400).json({ error: err.name + ": " + err.message });
    console.log(err);
  }
});

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s. ", config.port);
});
