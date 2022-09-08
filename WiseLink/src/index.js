 const express = require ('express')
 const morgan = require('morgan')
 const path = require('path')
 const cors = require('cors');

const { mongoose } = require('./database');

 const app = express()

//Configs
app.set('port', process.env.PORT || 8080 )

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//Rutas
app.use('/api', require('./routes/routes'))

//Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));


//Iniciar servidor
 app.listen(app.get('port'), () => {
    console.log(`Servidor escuchando puerto ${app.get('port')}`);
 });
