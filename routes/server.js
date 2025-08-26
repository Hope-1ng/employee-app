const express = require("express");
const Router = express.Router();
Router.use(express.json());
Router.use(express.urlencoded({ extended: true }));

let emp = [
  {
    EmployeeName: "aswanth",
    ltname: "rocky",
    EmployeeDesignation: "devloper",
    EmployeeLocation: "kannur",
    Salary: 1000,
    id: 0,
  },
  {
    EmployeeName: "aswanth2",
    ltname: "rocky",
    EmployeeDesignation: "devloper2",
    EmployeeLocation: "kannur2",
    Salary: 2000,
    id: 1,
  },
  {
    EmployeeName: "aswanth3",
    ltname: "rocky",
    EmployeeDesignation: "devloper2",
    EmployeeLocation: "kannur2",
    Salary: 2000,
    id: 3,
  },
  {
    EmployeeName: "aswanth4",
    ltname: "rocky",
    EmployeeDesignation: "devloper2",
    EmployeeLocation: "kannur2",
    Salary: 2000,
    id: 4,
  },
];

function routers(nav) {
  Router.get("/home", (req, res) => {
    res.render("home", {
      nav,
      title: "HOME",
      emp,
    });
  });

  Router.get("/form", (req, res) => {
    res.render("addemplyee", { nav, title: "New Register" });
  });

  Router.post("/add", (req, res) => {
    emp.push(req.body);
    res.redirect("/api/home");
  });

  Router.get("/update/:id", (req, res) => {
    res.render("update", {
      id: req.params.id,
      emp,
      title: "Update",
      nav
    });
  });

  Router.post("/updated/:ind", (req, res) => {
    const index = req.params.ind;
    emp.splice(index, 1, req.body);
    res.redirect("/api/home");
  });

  Router.get("/delete/:ind", (req, res) => {
    const index = req.params.ind;
    emp.splice(index, 1,);
    res.redirect("/api/home");
  });

  return Router;
}

module.exports = routers;
