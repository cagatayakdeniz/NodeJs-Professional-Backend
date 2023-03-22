const express = require("express");
const app = express();
const config = require("./config/index");
const db = require("./db/index");
const helmet = require("helmet");
const cors = require("cors");
const middlewares = require("./middlewares/index");

const personRouter = require("./router/personRouter");
const titleRouter = require("./router/titleRouter");
const commonRouter = require("./router/commonRouter");
const companyRouter = require("./router/companyRouter");
const authRouter = require("./router/authRouter");

// Select Database;
db.mongooseConnection.connection();
// db.mySqlConnection;

app.use(middlewares.isAuth);
app.use(middlewares.infoLog);

config.serverConfig.initialize();
const PORT = process.env.PORT;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/person",personRouter);
app.use("/api/title",titleRouter);
app.use("/api/company",companyRouter);
app.use("/api/common",commonRouter);
app.use("/api/auth",authRouter);

app.listen(PORT, console.log(`Server running at: http://127.0.0.1:${PORT}`));