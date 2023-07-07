const express = require("express");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const app = express();

const dbconfig = require("./db");

const EmployeeRoute = require("./routes/employeeRoute");

app.use(express.json());
app.use(cors());

app.use("/", EmployeeRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
