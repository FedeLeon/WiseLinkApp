import React, { useEffect, useState } from "react";
import "./Cards.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Select from 'react-select';
const axios = require("axios");

function Cards() {
  const [eventos, setEventos] = useState([]);

  //GET DE EVENTOS

  useEffect(() => {
    const obtenerEventos = async () => {
      const respuesta = await axios.get("http://localhost:8080/api/eventos");
      setEventos(respuesta.data);
      console.log(respuesta.data);
    };
    obtenerEventos();
  }, [1]);


  //SELECT

  const [select, setSelect] = useState("");

  const optionsSelect = [
    { id: 1, name: 'Fecha', adress: 'Fecha' },
    { id: 2, name: 'Estado', adress: 'Estado' },
    { id: 3, name: 'Titulo', adress: 'Titulo' },]
    
    const handleSelectChange = ( event ) => {
      setSelect(event.label)
      }
  

  if (select == "Fecha") {
    eventos.sort((a, b) => {
      if(a.date == b.date) {
        return 0; 
      }
      if(a.date < b.date) {
        return -1;
      }
      return 1;
    });
  } else if (select == "Estado") {
    eventos.sort((a, b) => {
      if (a.state == b.state) {
        return 0;
      }
      if (a.state < b.state) {
        return -1;
      }
      return 1;
    });
  } else if (select == "Titulo") {
    eventos.sort((a, b) => {
    if (a.title == b.title) {
      return 0;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 1;
  });
  }

  console.log(eventos)

//-----------RETURN

  return (
    <div className="cardsEventos">
      <div className="cardsEventos__contenedor">


      <div className = "selectContainer">
            <Select
                options = { optionsSelect.map(option => ({ label: option.name, value: option.id })) }
                onChange = { handleSelectChange }
            />
        </div>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(eventos).map((evento, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Card key={evento.id} sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://xegmenta.com/wp-content/uploads/2019/06/organizar-evento-corp-opt.jpg"
                  alt={evento.title}
                  variant="outlined"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {evento.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {evento.shortDescript}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {evento.date}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link to={`/evento/${evento._id}`}>
                    <Button size="small" variant="contained">Ver Informacion del Evento</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Cards;
