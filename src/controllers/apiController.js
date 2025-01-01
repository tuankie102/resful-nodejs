const User = require('../models/User')
const { UploadSingleFile } = require('../services/fileService')

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

const updateAUser = async (req, res) => {
    let { userId, email, name, city } = req.body
    let results = await User.updateOne({ _id: userId }, {
        email: email,
        name: name,
        city: city
    })
    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}

const deleteAUser = async (req, res) => {
    let userId = req.body.userId
    let results = await User.deleteOne({ _id: userId })
    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}

const postUploadSingleFile = async (req, res) => {
    let sampleFile = req.files.image;

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let result = await UploadSingleFile(sampleFile)
    console.log(">>> check result: ", result)

    return res.send("ok single")
}

module.exports = {
    getAllUsers, createAUser, updateAUser, deleteAUser, postUploadSingleFile
}