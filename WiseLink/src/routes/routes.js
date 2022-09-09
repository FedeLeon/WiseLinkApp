//IMPORTS
const express = require('express');
const router = express.Router();
const { getAll, getById, saveEvento, deleteEvento } = require('../controllers/eventosController.js')
const { saveInscripcion, getAllInscripciones } = require('../controllers/inscripcionController')

//MONGOOSE
const Eventos = require('../models/eventoModel');
const { checkAdmin } = require('../middlewares/checkAdmin');




//RUTAS EVENTOS
router.get('/eventos', getAll);

router.get('/eventos/:id', getById);

router.post('/eventos', saveEvento);

router.put('/eventos/:id', async (req, res) => {
    const { title, shortDescript, largeDescript, date, organizer, location, state } = req.body;
    const updateEvento = { title, shortDescript, largeDescript, date, organizer, location, state }
    await Eventos.findByIdAndUpdate(req.params.id, updateEvento)
    res.json({ status: 'Evento actualizado' })
})

router.delete('/eventos/:id', deleteEvento);


//RUTAS INSCRIPCION
router.post('/eventos/inscripcion', saveInscripcion);

router.get('/user/inscripcion', getAllInscripciones);



module.exports = router;