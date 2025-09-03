
const mongoose =require('mongoose')
const newSchema = mongoose.Schema({
  EmployeeName: String,
  ltname: String,
  EmployeeDesignation: String,
  EmployeeLocation: String,
  Salary: Number,
});

const employeedata = mongoose.model("employee", newSchema);
module.exports = employeedata;
