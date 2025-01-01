const Customer = require('../models/Customer')

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

const findAllCustomersService = async () => {
    try {
        let customers = await Customer.find({})
        return customers;
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

module.exports = {
    createACustomerService, createManyCustomerService, findAllCustomersService, updateACustomerService
}