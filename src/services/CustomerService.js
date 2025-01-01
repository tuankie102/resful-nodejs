const Customer = require('../models/Customer')

const createACustomer = async (customerData) => {
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

const createManyCustomer = async (customers) => {
    console.log('>>>>>>>>>check customers: ', customers);
    try {
        let result = await Customer.insertMany(customers)
        return result;
    } catch (error) {
        console.log('>>>>>>>>>check error insertMany: ', error);
        return null
    }
}

module.exports = {
    createACustomer, createManyCustomer
}