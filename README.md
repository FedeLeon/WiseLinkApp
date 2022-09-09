# WiseLinkApp
Repositorio del ejercicio para WiseLink

---Para su ejecucion---
- Iniciar el servidor Express junto a la base de datos desde la terminal en la carpeta API con el comando "npm start"
- Iniciar la App de React desde la terminal en la carpeta My-app con el comando "npm start"
- (En ambas partes del proyecto tanto el front como el back se deberan descargar las dependencias necesarias del package.json)

---ACLARACIONES---

- El proyecto lo desarrolle con una estructura MERN en Javascript, MongoDB para la base de datos(en la nube), Express para ejecutar el servidor local para la API, React para el front y NodeJs para la ejecucion de todo el entorno.
- Todas las rutas del CRUD de administrador fueron probadas y funcionan correctamente (alta, baja, modificacion, eliminar), pero pueden ser probadas desde peticiones(PostMan,RapidAPI,etc..) ya que no llegué con el tiempo a hacer el crud de admin desde front.
- En toda la app se respeta la estructura JSON de los eventos (titulo, descripcion corta, descripcion larga, fecha y hora, lugar, etc.. ).
- Por cuestiones de tiempo no llegue a hacer la funcion de que solo el admin pueda ver los eventos con estado borrador, mi idea era poder ejecutar el entorno bajo dos variables de entorno (una para usuarios y otra para administradores), en este caso todas las funciones pueden ser probadas libremente.
- Los usuarios pueden visualizar todos los eventos pero solo inscribirse en eventos futuros, en los eventos ya pasados se deshabilita el boton de inscripcion.
- Todos los eventos a los que el usuario se inscribe se guardan en una coleccion aparte en la base de datos.
- Desde la home se pueden filtrar todos los eventos disponibles por fecha, titulo o estado.
- Desde el menu de usuario se pueden visualizar los eventos inscriptos, no llegue a ponerle el filtro por completados o activos pero mi idea era poner un filtro igual al de la home pero con una logica igual a la del boton de inscripcion que filtre si son eventos pasados o futuros.
- La funcionalidad general de la App fue testeada manualmente y funciona correctamente, con mas tiempo podria testearla con librerias de testing y agregarle validaciones 

---Dependencias usadas---
- Backend: cors, express, mongoose, morgan
- Frontend: react, material-ui, axios, react-router-dom

---Detalle del desarrollo---
- Estructura MERN
- Servidor con Express
- Conexion a Base de Datos en Mongo Atlas
- Crud de la Api con Mongo
- Agregada la clase para la conexion con la base de datos
- Agregados los controladores de las rutas
- Middleware de CheckAdmin
- Hecho el Home mostrando cada evento en una card por separado
- Visualizacion detallada del evento al abrirlo
- Boton de inscripcion lleva a un modal con el formulario
- Boton de inscripcion se bloquea si el evento es pasado
- Agregados los metodos, controladores y rutas para las inscripciones a eventos del formulario
- Agregados modelos de mongoose para inscripciones
- Correcta conexion con la base de datos
- Agregado menu de usuario
- Agregadas las tarjetas a menu de usuario para visualizar los eventos inscriptos
- Agregados los filtros en Home, se pueden filtrar los eventos por nombre, fecha y estado
