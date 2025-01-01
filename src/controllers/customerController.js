const { createACustomer, createManyCustomer } = require('../services/CustomerService')
const { UploadSingleFile } = require('../services/fileService')

module.exports = {
    postCreateACustomer: async (req, res) => {
        let { name, address, phone, email, description } = req.body
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
        let newCustomer = await createACustomer(customerData)
        return res.status(200).json({
            EC: 0,
            data: newCustomer
        })
    },
    postCreateManyCustomer: async (req, res) => {
        let customers = req.body.customers
        let newCustomers = await createManyCustomer(customers)
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

    }
}