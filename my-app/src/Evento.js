import React from 'react'
import Header from './Header'
import CardIndividual from './CardIndividual'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
const axios = require("axios");

function Evento() {

  const { id } = useParams()
  console.log(id)

  const [evento, setEvento] = useState([]);

  useEffect(() => {
    const obtenerEvento = async () => {
      const respuesta = await axios.get(`http://localhost:8080/api/evento/${id}`);
      setEvento(respuesta.data);
    };
    obtenerEvento();
  }, []);

  return (
    <div>
        <Header />
        <CardIndividual 
        title={evento.title}
        shortDescript={evento.shortDescript}
        largeDescript={evento.largeDescript}
        date={evento.date}
        organizer={evento.organizer}
        location={evento.location}
        />
    </div>
  )
}

export default Evento