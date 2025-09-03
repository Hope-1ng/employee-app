const express = require("express");
const employeedata = require("../model/employee_model");
const Router = express.Router();
Router.use(express.json());
Router.use(express.urlencoded({ extended: true }));

function routers(nav) {
  Router.get("/home", async (req, res) => {
    try {
      const emp = await employeedata.find();
      res.render("home", {
        nav,
        title: "HOME",
        emp,
      });
    } catch (error) {
      res.send("failled");
    }
  });

  Router.get("/form", (req, res) => {
    res.render("addemplyee", { nav, title: "New Register" });
  });

  Router.post("/add", async (req, res) => {
    try {
      let index = req.body;
      let data = new employeedata(index);
      await data.save();
      res.redirect("/api/home");
    } catch (error) {
      console.log(error);
    }
  });

  Router.get("/update/:id", async (req, res) => {
     const id = req.params.id;
    try {
      const emp = await employeedata.findById(id);
      res.render("update", {
        id: req.params.id,
        emp,
        title: "Update",
        nav,
      });
    } catch (error) {
      console.log(error);
      
    }
  });

  Router.post("/updated/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const emp = await employeedata.findByIdAndUpdate(id, req.body);
      res.redirect("/api/home");
    } catch (error) {
      console.log(error);
    }
  });

  Router.get("/delete/:id", async (req, res) => {
    const index = req.params.id;

    try {

      let data=await employeedata.findByIdAndDelete(index);
    res.redirect("/api/home");

      
      
    } catch (error) {
      console.log(error);
      
      
    }
    
    
  });

  return Router;
}

module.exports = routers;
