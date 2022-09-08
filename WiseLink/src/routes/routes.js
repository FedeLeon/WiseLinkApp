//IMPORTS
const express = require('express');
const router = express.Router();
const { getAll, getById } = require('../controllers/eventosController.js')

//MONGOOSE
const Eventos = require('../models/eventoModel');
const { checkAdmin } = require('../middlewares/checkAdmin');




//RUTAS
router.get('/eventos', getAll);

router.get('/evento/:id', getById);

router.post('/eventos', async (req, res) => {
    const { title, shortDescript, largeDescript, date, organizer, location, state } = req.body;
    const nuevoEvento = new Eventos({ title, shortDescript, largeDescript, date, organizer, location, state })
    await nuevoEvento.save();
    res.json({ status: 'Evento guardado' })
})

router.put('/eventos/:id', async (req, res) => {
    const { title, shortDescript, largeDescript, date, organizer, location, state } = req.body;
    const updateEvento = { title, shortDescript, largeDescript, date, organizer, location, state }
    await Eventos.findByIdAndUpdate(req.params.id, updateEvento)
    res.json({ status: 'Evento actualizado' })
})

router.delete('/eventos/:id', async (req, res) => {
    await Eventos.findByIdAndDelete(req.params.id)
    res.json({ status: 'Evento eliminado' })
})

module.exports = router;