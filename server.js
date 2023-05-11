require('dotenv').config()
const express = require("express")
const User = require("./model/User");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./db');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

const PORT = 10000;

app.listen(PORT, () => console.log(`Server in ascolto sulla porta ${PORT}`));


app.get("/",function(request,response){
  response.send("Hello World!")
})

async function createUser(name, surname, birthdate, mail, password, address) {
  const newUser = new User({
    name: name,
    surname: surname,
    birthdate: new Date(birthdate),
    email: email,
    password: passw,
    address: address
  });

  return newUser;
}

async function findUserByEmail(email) {    
 //TODO 
}


