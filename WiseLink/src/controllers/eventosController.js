//-----IMPORTS
const Eventos = require('../class/eventosClass')
const Evento = new Eventos




//----CONTROLLERS

//Devuelve todos los eventos
const getAll = async (req, res) => {
    try {
        res.json(await Evento.getAll());
    } catch (e) { 
        res.status(500).json({ error: e });
    }
}

// Devuelve un evento según su id
const getById = async (req, res) => {
    try {
        const id = String(req.params.id);
        const eventoEncontrado = await Evento.getById(id)
        if (eventoEncontrado) {
            res.status(200).json(eventoEncontrado);
        } else {
            res.status(200).json(null);
        }

    } catch (e) { 
        res.status(500).json({ error: e });
    }
}

module.exports = { getAll, getById }

