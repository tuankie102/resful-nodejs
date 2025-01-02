const Customer = require('../models/Customer')
const aqp = require('api-query-params');

const createACustomerService = async (customerData) => {
    let customer = await Customer.create({
        name: customerData.name,
        address: customerData.address,
        phone: customerData.phone,
        email: customerData.email,
        image: customerData.image,
        description: customerData.description
    })
    return customer;
}

const createManyCustomerService = async (customers) => {
    console.log('>>>>>>>>>check customers: ', customers);
    try {
        let result = await Customer.insertMany(customers)
        return result;
    } catch (error) {
        console.log('>>>>>>>>>check error insertMany: ', error);
        return null
    }
}

const findAllCustomersService = async (limit, page, queryString) => {
    let result = null
    const { filter } = aqp(queryString)
    delete filter.page
    try {
        if (limit && page) {
            let offset = (page - 1) * limit
            result = await Customer.find(filter).limit(limit).skip(offset).exec()
            console.log('>>>>>>>>>check result: ', filter);
            return result
        }
        else {
            result = await Customer.find({})
            return result;
        }
    } catch (error) {
        console.log('>>>>>>>>>check error find all customers: ', error);
        return null
    }

}

const updateACustomerService = async (customerData) => {
    try {
        let result = await Customer.updateOne({ _id: customerData.id }, {
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            description: customerData.description
        })
        return result
    } catch (error) {
        console.log('>>>>>>>>>check error update a customer: ', error);
        return null
    }

}

const deleteACustomerService = async (id) => {
    try {
        let result = await Customer.deleteById({ _id: id })
        return result
    } catch (error) {
        console.log('>>>>>>>>>check error delete a customer: ', error);
        return null
    }
}

const deleteManyCustomerService = async (idArr) => {
    console.log('>>>>>>>>>check idArr: ', idArr);
    try {
        let result = await Customer.delete({ _id: { $in: idArr } })
        return result
    } catch (error) {
        console.log('>>>>>>>>>check error delete many customers: ', error);
        return null
    }
}

module.exports = {
    createACustomerService, createManyCustomerService, findAllCustomersService, updateACustomerService, deleteACustomerService, deleteManyCustomerService
}