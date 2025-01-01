const Customer = require('../models/Customer')

const createAUser = async (customerData) => {
    console.log('>>>>>>>>>check customerData: ', customerData);
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

module.exports = {
    createAUser
}