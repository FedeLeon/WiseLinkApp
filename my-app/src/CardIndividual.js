import React, { useState } from 'react'
import './CardIndividual.css'
import { Modal, TextField, Button } from '@mui/material'

//MUESTRA LA INFORMACION DETALLADA DEL EVENTO

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
        botonInscribirme = <h1>Hola</h1>    }

  //BODY DEL FORM QUE SE INSERTA EN EL MODAL
  const body = (
    <div className='modalBody'>
      <div className='form'>
        <form onSubmit={ev => {
          ev.preventDefault()

        }}>
        <h2>Inscribirme</h2>
        <TextField required id="nombre" label="Nombre" variant="filled" className='textfield'/>
        <TextField required id="apellido" label="Apellido" variant="filled" className='textfield'/>
        <TextField required id="email" label="Email" variant="filled" className='textfield'/>
        <TextField required id="telefono" label="Telefono" variant="filled" type="number" className='textfield'/>
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
      <img className='cardIndividual__img' src="https://xegmenta.com/wp-content/uploads/2019/06/organizar-evento-corp-opt.jpg"/>
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