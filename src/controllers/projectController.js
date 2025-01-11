const {
  createAProjectService,
  getAllProjectService,
  deleteAProjectService,
  updateAProjectService,
} = require("../services/ProjectService");

const postCreateAProject = async (req, res) => {
  let result = await createAProjectService(req.body);
  return res.status(200).json({
    EC: 0,
    data: result,
  });
};

const getAllProjects = async (req, res) => {
  let result = await getAllProjectService(req.query);
  return res.status(200).json({
    EC: 0,
    data: result,
  });
};

const putUpdateAProject = async (req, res) => {
  let newProject = await updateAProjectService(req.body)
  return res.status(200).json({
    EC: 0,
    data: newProject
  })
}
const deleteAProject = async (req, res) => {
  let id = req.body.id
  let result = await deleteAProjectService(id)
  res.status(200).json({
    EC: 0,
    data: result
  })
}

module.exports = {
  postCreateAProject,
  getAllProjects,
  deleteAProject,
  putUpdateAProject
};
