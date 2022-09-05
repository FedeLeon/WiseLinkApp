const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventoSchema = new Schema({
    title: { type: String, required: true },
    shortDescript: {type: String, required: true},
    largeDescript: {type: String, required: true},
    date: {type: String, required: true},
    organizer: {type: String, required: true},
    location: {type: String, required: true},
    state: {type: String, required: true}
});


module.exports = mongoose.model('Evento', eventoSchema);
