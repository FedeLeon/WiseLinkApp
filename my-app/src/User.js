import React, { useEffect, useState } from "react";
import Header from './Header'
import { Avatar } from '@mui/material'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
const axios = require("axios");



function User() {

    const user = { nombre:"Federico", apellido:"Leon" }

    const [inscripciones, setInscripciones] = useState([]);

  useEffect(() => {
    const obtenerInscripciones = async () => {
      const respuesta = await axios.get("http://localhost:8080/api/user/inscripcion");
      setInscripciones(respuesta.data);
      console.log(respuesta.data);
    };
    obtenerInscripciones();
    console.log(inscripciones)
  }, []);


  return (

    <div className='userContainer' align="center">
      <Header />
      <div className="userInfo">
                <Avatar className="userInfo__avatar" alt={user.nombre}/>
                <div className="userInfo__detalles">
                    <h6>USER:</h6>
                    <h2>{user.nombre}</h2>
                    <h2>{user.apellido}</h2>
                </div>
            </div>


    <div className="cardsEventos">
      <div className="cardsEventos__contenedor">
        <h1>Eventos a los que estoy inscripto:</h1>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(inscripciones).map((inscripcion, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Card key={inscripcion.id} sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://xegmenta.com/wp-content/uploads/2019/06/organizar-evento-corp-opt.jpg"
                  alt={inscripcion.evento[0].title}
                  variant="outlined"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {inscripcion.evento[0].title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {inscripcion.evento[0].shortDescript}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {inscripcion.evento[0].date}
                  </Typography>
                </CardContent>
                <CardActions>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
    </div>
    )}


export default User