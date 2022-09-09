//-----IMPORTS
const Eventos = require('../class/eventosClass')
const Evento = new Eventos

//---------CONTROLERS

// Recibe un evento nuevo y lo guarda en la base de datos
const saveInscripcion = async (req, res) => {
    const { evento, nombre, apellido, email, telefono } = req.body;
    const nuevaInscripcion = { evento, nombre, apellido, email, telefono }
    await Evento.saveInscripcion(nuevaInscripcion);
    res.json({ status: 'Inscripcion guardado' })
}

const getAllInscripciones = async (req, res) => {
    try {
        res.json(await Evento.getAllInscripciones());
    } catch (e) { 
        res.status(500).json({ error: e });
    }
}

module.exports = { saveInscripcion, getAllInscripciones }
