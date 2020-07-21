
const mongoose = require('mongoose');



const URI ='mongodb://localhost/databasetest';

mongoose.connect(URI, {
    useNewUrlParser: true,
   
});

const connection  = mongoose.connection;

connection.once('open', ()=>{
    console.log('la DB esta conectada')
})