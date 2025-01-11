const express = require("express");
const {
  getAllUsers,
  createAUser,
  updateAUser,
  deleteAUser,
  postUploadSingleFile,
  postUploadMultipleFile,
} = require("../controllers/apiController");

const {
  postCreateACustomer,
  postCreateManyCustomer,
  getAllCustomers,
  putUpdateACustomers,
  deleteACustomer,
  deleteManyCustomer,
} = require("../controllers/customerController");

const {
  postCreateAProject,
  getAllProjects,
  putUpdateAProject,
  deleteAProject,
} = require("../controllers/projectController");

const {
  postCreateATask,
  getAllTasks,
  putUpdateATask,
  deleteATask,
} = require("../controllers/taskController");

const RouterAPI = express.Router();

RouterAPI.get("/", (req, res) => {
  res.send("Hello World Api!");
});

RouterAPI.get("/users", getAllUsers);
RouterAPI.post("/users", createAUser);
RouterAPI.put("/users", updateAUser);
RouterAPI.delete("/users", deleteAUser);

RouterAPI.post("/file", postUploadSingleFile);
RouterAPI.post("/files", postUploadMultipleFile);

RouterAPI.post("/customers", postCreateACustomer);
RouterAPI.post("/customers-many", postCreateManyCustomer);
RouterAPI.get("/customers", getAllCustomers);
RouterAPI.put("/customers", putUpdateACustomers);
RouterAPI.delete("/customers", deleteACustomer);
RouterAPI.delete("/customers-many", deleteManyCustomer);

RouterAPI.post("/projects", postCreateAProject);
RouterAPI.get("/projects", getAllProjects);
RouterAPI.put("/projects", putUpdateAProject);
RouterAPI.delete("/projects", deleteAProject);

RouterAPI.post("/tasks", postCreateATask);
RouterAPI.get("/tasks", getAllTasks);
RouterAPI.put("/tasks", putUpdateATask);
RouterAPI.delete("/tasks", deleteATask);


module.exports = RouterAPI;
