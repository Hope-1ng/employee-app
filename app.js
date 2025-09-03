const express = require("express");
const app = new express();
const ejs = require("ejs");
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static("public"));
app.use(
  "/icons",
  express.static(__dirname + "/node_modules/bootstrap-icons/font")
);
require('dotenv').config();
require('./database/connection')


const nav = [
  { name: "Home", link: "/api/home", icon: "bi-house-fill " },
  { name: "Add Employee ", link: "/api/form", icon: "bi-person-fill-add " },
];

const server = require("./routes/server")(nav);
app.use("/api", server);

app.listen(4500, () => {
  console.log("server is running");
});
