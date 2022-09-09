import React, { useState } from 'react'
import './CardIndividual.css'
import { Modal, TextField, Button } from '@mui/material'
import axios from 'axios'

//ESTE COMPONENTE MUESTRA LA INFORMACION DETALLADA DEL EVENTO

function CardIndividual({ title , shortDescript, largeDescript, date, organizer, location }) {


  const [modal, setModal] = useState(false)

  const abrirCerrarModal = () => {
    setModal(!modal);
  }

  //CONDICIONAL PARA BLOQUEO DE INSCRIPCION SEGUN FECHA

  let botonInscribirme = ""
  const fechaActual = new Date()
  const fechaEvento = new Date(date)

  if (fechaActual < fechaEvento) {
        botonInscribirme = <Button onClick={()=> abrirCerrarModal()} variant="contained">Inscribirme al Evento</Button>
      } else {
        botonInscribirme = <Button disabled variant="contained">Inscribirme al Evento</Button> }

  //FORM QUE SE INSERTA EN EL MODAL
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");     
  const [email, setEmail] = useState("");     
  const [telefono, setTelefono] = useState("");       

  const postInscripcion = async () => {
    try {
      const url = "http://localhost:8080/api/eventos/inscripcion"
      const evento = { title , shortDescript, largeDescript, date, organizer, location }
      const resp = await axios.post(url, { evento: evento, nombre: nombre, apellido: apellido, email: email, telefono: telefono })
      console.log(`Inscripcion enviada: ${resp.data}`)
    } catch (error) {
      console.log(error.response)
    }
  }


  const body = (
    <div className='modalBody'>
      <div className='form'>
        <form onSubmit={ev => {
          ev.preventDefault()
          postInscripcion()
          abrirCerrarModal()
          alert("Suscripcion exitosa")

        }}>
        <h2>Inscribirme</h2>
        <TextField required id="nombre" name="nombre" label="Nombre" variant="filled" className='textfield' value={nombre} onChange={(e) => setNombre(e.target.value)}/>
        <TextField required id="apellido" label="Apellido" variant="filled" className='textfield' value={apellido} onChange={(e) => setApellido(e.target.value)}/>
        <TextField required id="email" label="Email" variant="filled" className='textfield' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <TextField required id="telefono" label="Telefono" variant="filled" type="number" className='textfield' value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
        <br />
        <Button type="submit" variant="contained">Inscribirme</Button>
        <br />
        <Button onClick={()=> abrirCerrarModal()} variant="contained">Cancelar</Button>
        </form>

      </div>
    </div>
  )


//RETURN

  return (
    <div className='cardIndividual__container'>
      <h1>{title}</h1>
      <img className='cardIndividual__img' src="https://xegmenta.com/wp-content/uploads/2019/06/organizar-evento-corp-opt.jpg" alt="evento"/>
      <h6>{shortDescript}</h6>
      <p>{largeDescript}</p>
      <h4>{date}</h4>
      <h4>{organizer}</h4>
      <h4>{location}</h4>
      {botonInscribirme}


      <Modal open={modal} onClose={abrirCerrarModal} >
        {body}
      </Modal>

    </div>

  )
}

export default CardIndividual