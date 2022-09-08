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
const axios = require("axios");

function Cards() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const obtenerEventos = async () => {
      const respuesta = await axios.get("http://localhost:8080/api/eventos");
      setEventos(respuesta.data);
      console.log(respuesta.data);
    };
    obtenerEventos();
  }, []);

  return (
    <div className="cardsEventos">
      <div className="cardsEventos__contenedor">
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
                    <Button size="small">Ver Informacion del Evento</Button>
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
