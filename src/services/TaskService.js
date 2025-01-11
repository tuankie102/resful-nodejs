const Task = require("../models/Task");
const aqp = require("api-query-params");

const createATaskService = async (data) => {
    console.log(">>> check data: ", data);
    if (data.type === "EMPTY-TASK") {
        try {
            let result = await Task.create(data);
            return result;
        } catch (error) {
            console.log(">>> createATaskService -> error: ", error);
            return null;
        }
    }
    return "nothing updated"

};

const getAllTaskService = async (queryString) => {
    console.log(">>> check queryString: ", queryString);
    const { filter, limit } = aqp(queryString);
    let offset = (filter.page - 1) * limit;
    delete filter.page;
    try {
        let task = await Task.find(filter)
            .limit(limit)
            .skip(offset)
            .exec();
        return task;
    } catch (error) {
        console.log(">>>>>>>>>check error find all task: ", error);
        return null;
    }
};

const updateATaskService = async (taskData) => {
    let { name, startDate, endDate, description, status } = taskData
    try {
        let result = await Task.updateOne({ _id: taskData.id }, {
            name,
            startDate,
            endDate,
            description,
            status
        })
        return result
    } catch (error) {
        console.log('>>>>>>>>>check error update a task: ', error);
        return null
    }

}

const deleteATaskService = async (id) => {
    try {
        let result = await Task.deleteById({ _id: id })
        return result
    } catch (error) {
        console.log('>>>>>>>>>check error delete a task: ', error);
        return null
    }
}

module.exports = {
    createATaskService,
    getAllTaskService,
    deleteATaskService,
    updateATaskService,
};
