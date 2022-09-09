const Eventos = require('../models/eventoModel')
const Inscripcion = require('../models/inscripcionModel')

//CLASE
class Evento {
  constructor() {
  }


  //METODOS DE EVENTOS
  async getAll() {
    try {
      const docs = await Eventos.find({}, { __v: 0 })
      console.log(docs)
      return docs
    } catch (error) {
      return console.log(error)
    }
  }
  async getById(id) {
    try {
      const doc = await Eventos.findById(id, { __v: 0 })
      return doc
    } catch (error) {
      return console.log(error)
    }
  }

  async save(evento) {
    try {
      const nuevoEvento = await Eventos.insertMany(evento)
      return console.log(`Evento guardado correctamente: ${nuevoEvento}`)
    } catch (error) {
      return console.log(error)
    }
  }

  async update(id, evento) {
  try {
    await Eventos.updateOne({ '_id': id }, evento)
    return console.log(`Evento actualizado: ${evento}`)
  } catch (error) {
    return console.log(error)
  }
}

  async deleteById(id) {
  try {
    await Eventos.deleteOne({ '_id': id })
    return console.log("Evento eliminado")
  } catch (error) {
    return console.log(error)
  }
}
  //METODOS DE INSCRIPCION

  async saveInscripcion(inscripcion) {
    try {
      const nuevaInscripcion = await Inscripcion.insertMany(inscripcion)
      return console.log(`Inscripcion guardada correctamente: ${nuevaInscripcion}`)
    } catch (error) {
      return console.log(error)
    }
  }

  async getAllInscripciones() {
    try {
      const docs = await Inscripcion.find({}, { __v: 0 })
      console.log(docs)
      return docs
    } catch (error) {
      return console.log(error)
    }
  }
}



module.exports = Evento