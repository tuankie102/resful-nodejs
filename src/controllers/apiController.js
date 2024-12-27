const User = require('../models/User')

const getAllUsers = async (req, res) => {
    let results = await User.find({}).exec()
    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}

module.exports = {
    getAllUsers
}