const  mongoose = require('mongoose');

// Connect to MongoDB
const db = mongoose.connect('mongodb://localhost:27017/customers', { useNewUrlParser: true, useUnifiedTopology: true });

// import the model
const Customer = require('./models/customer');

// Add a customer
const addCustomer = (customer) => {
    Customer.create(customer).then(customer => {
        console.info('New Customer Added');
        // db.close();
    });
}

// Update a customer
const updateCustomer = (_id, customer) => {
    Customer.updateOne({ _id }, customer)
        .then(customer => {
            console.info('Customer Updated');
            // db.close();
        }
    );
};

// Remove a customer
const removeCustomer = (_id) => {
    Customer.findByIdAndDelete({ _id })
        .then(customer => {
            console.info('Customer Removed');
            // db.close();
        }
    );
}

// List all customers
const listCustomers = () => {
    Customer.find()
        .then(customers => {
            console.info(customers);
            console.info(`${customers.length} matches`);
        });
    };

// Find a customer
const findCustomer = (name) => {
    const search = new RegExp(name, 'i');
    Customer.find({$or: [{firstname: search}, {lastname: search}]})
        .then(customer => {
            console.info(customer);
            console.info(`${customer.length} matches`);
            // db.close();
        });
};


// Export all methods

module.exports = {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomers
};