const express = require('express');
const app = express();
const cors = require('cors');
//setting: nos permite confiiurar el sevidor
app.set('port', process.env.PORT || 4000);


app.use(express.urlencoded({extended: false}));
//nos permite que dos servidores puedan comunicarse
app.use(cors());


//midelware:  nos permite definir algunas 
//funciones antes que se ejecunten antes que a las rutas
app.use(cors());
app.use(express.json());

//routes
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));

module.exports = app;