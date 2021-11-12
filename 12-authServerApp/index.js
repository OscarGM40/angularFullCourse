
require("dotenv").config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { connectToMongo, sequelize } = require("./databases/connection");

// Configurar el servidor 
const app = express();
connectToMongo();

(async () => {
   // await sequelize.authenticate();
   // await sequelize.sync({ alter: true });
   await sequelize.sync();
   console.log(`Conectado a ${process.env.MYSQL_DB} mediante ORM Sequelize`)
})();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rutas que manejará Express-Router
app.use("/api/auth", require("./routes/auth.routes"));

// Rutas que manejará Angular-Router
app.get('*',(req,res) => {
   res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(process.env.API_PORT, () => {
   console.clear();
   console.log(`Server on port ${process.env.API_PORT}`)
});