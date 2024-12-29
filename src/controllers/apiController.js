const User = require('../models/User')

const getAllUsers = async (req, res) => {
    let results = await User.find({}).exec()
    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}

const createAUser = async (req, res) => {
    let { email, name, city } = req.body
    let results = await User.create({
        email,
        name,
        city
    })
    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}

module.exports = {
    getAllUsers, createAUser
}