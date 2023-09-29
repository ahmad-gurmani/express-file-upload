const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors(corsOptions));

global.__basedir = __dirname;

var corsOptions = {
    origin: "http://localhost:8081"
};

const initRoutes = require("./src/routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

let port = 8080;
app.listen(port, () => {
    console.log(`Running at localhost:${port}`);
});
