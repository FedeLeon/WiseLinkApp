const Eventos = require('../models/eventoModel')

//CLASE
class Evento {
  constructor() {
  }

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
      const nuevoEvento = await Eventos.insertMany(objeto)
      return console.log(`Evento guardado correctamente: ${evento}`)
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

}

module.exports = Evento