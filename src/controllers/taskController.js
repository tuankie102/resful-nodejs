const {
    createATaskService,
    getAllTaskService,
    deleteATaskService,
    updateATaskService,
} = require("../services/TaskService");

const postCreateATask = async (req, res) => {
    let result = await createATaskService(req.body);
    return res.status(200).json({
        EC: 0,
        data: result,
    });
};

const getAllTasks = async (req, res) => {
    let result = await getAllTaskService(req.query);
    return res.status(200).json({
        EC: 0,
        data: result,
    });
};

const putUpdateATask = async (req, res) => {
    let newTask = await updateATaskService(req.body)
    return res.status(200).json({
        EC: 0,
        data: newTask
    })
}
const deleteATask = async (req, res) => {
    let id = req.body.id
    let result = await deleteATaskService(id)
    res.status(200).json({
        EC: 0,
        data: result
    })
}

module.exports = {
    postCreateATask,
    getAllTasks,
    deleteATask,
    putUpdateATask
};
