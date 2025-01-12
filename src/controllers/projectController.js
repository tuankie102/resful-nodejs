const {
  createAProjectService,
  getAllProjectService,
  deleteAProjectService,
  updateAProjectService,
} = require("../services/ProjectService");
const Joi = require('joi');

const postCreateAProject = async (req, res) => {
  let { name, startDate, endDate, type } = req.body

  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .max(30)
      .required(),
    startDate: Joi.date().min('now').required(),
    endDate: Joi.date().min(Joi.ref('startDate')).required(),
    type: Joi.required(),
  })

  const { error } = schema.validate({ name, startDate, endDate, type });
  if (error) {
    return res.status(400).json({
      EC: -1,
      data: error.details[0].message
    })
  }

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
