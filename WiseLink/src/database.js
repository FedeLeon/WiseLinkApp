const mongoose = require('mongoose');

const url = 'mongodb+srv://fededev:352031550@cluster0.7hx62mo.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url)
    .then(db = console.log('DB conectada'))
    .catch(err => console.error(err))

module.exports = mongoose;
