const mongoose = require('mongoose');
const { Schema } = mongoose;

const inscripcionSchema = new Schema({
    evento: { type: Array, required: true },
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    email: {type: String, required: true},
    telefono: {type: Number, required: true}
});

module.exports = mongoose.model('Inscripcion', inscripcionSchema);
