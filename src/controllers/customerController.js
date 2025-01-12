const { createACustomerService, createManyCustomerService, findAllCustomersService,
    updateACustomerService, deleteACustomerService, deleteManyCustomerService }
    = require('../services/CustomerService')
const { UploadSingleFile } = require('../services/fileService')
const Joi = require('joi');

module.exports = {
    postCreateACustomer: async (req, res) => {
        let { name, address, phone, email, description } = req.body

        const schema = Joi.object({
            name: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
            address: Joi.string(),
            phone: Joi.string().pattern(new RegExp('^[0-9]{8,11}$')),
            email: Joi.string().email(),
            description: Joi.string(),
        })
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({
                EC: -1,
                data: error.details[0].message
            })
        }

        let imageUrl = ""
        if (!req.files || Object.keys(req.files).length === 0) {
            //do nothing
        }
        else {
            let customerFile = req.files.image;
            let result = await UploadSingleFile(customerFile)
            imageUrl = result.data
            console.log('>>>>>>>>>check result upload file: ', result);
        }
        let customerData = {
            name,
            address,
            phone,
            email,
            description,
            image: imageUrl
        }
        let newCustomer = await createACustomerService(customerData)
        return res.status(200).json({
            EC: 0,
            data: newCustomer
        })
    },
    postCreateManyCustomer: async (req, res) => {
        let customers = req.body.customers
        let newCustomers = await createManyCustomerService(customers)
        if (newCustomers) {
            return res.status(200).json({
                EC: 0,
                data: newCustomers
            })
        }
        else {
            return res.status(200).json({
                EC: -1,
                data: newCustomers
            })
        }

    },
    getAllCustomers: async (req, res) => {
        let { limit, page, name } = req.query
        let customers = null
        if (limit && page) {
            customers = await findAllCustomersService(limit, page, req.query)
        }
        else {
            customers = await findAllCustomersService()
        }

        if (customers) {
            return res.status(200).json({
                EC: 0,
                data: customers
            })
        }
        else {
            return res.status(200).json({
                EC: -1,
                data: customers
            })
        }

    },
    putUpdateACustomers: async (req, res) => {
        let { id, name, address, email } = req.body
        customerData = {
            id,
            name,
            address,
            email
        }
        let newCustomer = await updateACustomerService(customerData)
        return res.status(200).json({
            EC: 0,
            data: newCustomer
        })
    },
    deleteACustomer: async (req, res) => {
        let id = req.body.id
        let result = await deleteACustomerService(id)
        res.status(200).json({
            EC: 0,
            data: result
        })
    },
    deleteManyCustomer: async (req, res) => {
        let ids = req.body.customerIds
        let result = await deleteManyCustomerService(ids)
        res.status(200).json({
            EC: 0,
            data: result
        })
    },
}