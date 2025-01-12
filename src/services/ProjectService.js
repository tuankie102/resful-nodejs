const Project = require("../models/Project");
const aqp = require("api-query-params");

const createAProjectService = async (data) => {
  console.log(">>> check data: ", data);
  if (data.type === "EMPTY-PROJECT") {
    try {
      let result = await Project.create(data);
      return result;
    } catch (error) {
      console.log(">>> createAProjectService -> error: ", error);
      return null;
    }
  }
  if (data.type === "ADD-USERS") {
    let newProject = await Project.findOne({ _id: data.projectId });
    if (newProject) {
      for (let i = 0; i < data.usersArr.length; i++) {
        newProject.usersInfor.push(data.usersArr[i]);
      }
      try {
        let result = await newProject.save();
        return result;
      } catch (error) {
        console.log(">>> add user to userarr -> error: ", error);
        return null;
      }
    }
    return null;
  }

  if (data.type === "REMOVE-USERS") {
    let newProject = await Project.findOne({ _id: data.projectId });
    if (newProject) {
      for (let i = 0; i < data.usersArr.length; i++) {
        newProject.usersInfor.pull(data.usersArr[i]);
      }
      try {
        let result = await newProject.save();
        return result;
      } catch (error) {
        console.log(">>> remove user to userarr -> error: ", error);
        return null;
      }
    }
    return null;
  }

  if (data.type === "ADD-TASKS") {
    let newProject = await Project.findOne({ _id: data.projectId });
    if (newProject) {
      for (let i = 0; i < data.taskArr.length; i++) {
        newProject.tasks.push(data.taskArr[i]);
      }
      try {
        let result = await newProject.save();
        return result;
      } catch (error) {
        console.log(">>> add taskArr -> error: ", error);
        return null;
      }
    }
    return null;
  }

};

const getAllProjectService = async (queryString) => {
  console.log(">>> check queryString: ", queryString);
  const { filter, limit, population } = aqp(queryString);
  let offset = (filter.page - 1) * limit;
  delete filter.page;
  try {
    let projects = await Project.find(filter)
      .limit(limit)
      .skip(offset)
      .populate(population)
      .exec();
    return projects;
  } catch (error) {
    console.log(">>>>>>>>>check error find all projects: ", error);
    return null;
  }
};

const updateAProjectService = async (projectData) => {
  let { name, startDate, endDate, description } = projectData
  try {
    let result = await Project.updateOne({ _id: projectData.id }, {
      name,
      startDate,
      endDate,
      description
    })
    return result
  } catch (error) {
    console.log('>>>>>>>>>check error update a project: ', error);
    return null
  }

}

const deleteAProjectService = async (id) => {
  try {
    let result = await Project.deleteById({ _id: id })
    return result
  } catch (error) {
    console.log('>>>>>>>>>check error delete a project: ', error);
    return null
  }
}

module.exports = {
  createAProjectService,
  getAllProjectService,
  deleteAProjectService,
  updateAProjectService,
};
