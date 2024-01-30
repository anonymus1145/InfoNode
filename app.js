// Add .env files requirments
require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const aboutRouter = require("./routes/about");
const error = require("./routes/error");

const app = express();

//Configuration and connecting to the database -------------------------------------

// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
// eslint-disable-next-line no-undef
const mongoDB = process.env.CONNECTION_STRING;

main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(mongoDB);
}
/* This code creates the default connection to the database and reports any errors to the console. */
// -------------------------------------------------------------------------------

// view engine setup
// eslint-disable-next-line no-undef
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/about", aboutRouter);
app.use("/*", error);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
