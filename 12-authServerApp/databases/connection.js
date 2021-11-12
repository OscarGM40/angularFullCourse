const mongoose = require('mongoose');
const { Sequelize } = require("sequelize");
// require("mysql2"); // parece que solo es necesario instalarlo,no hace falta instanciarlo ni requerirlo

exports.connectToMongo = async () => {
   try {
      await mongoose.connect(process.env.MONGO_URI)
      console.log(`Conectado a ${mongoose.connection.name} mediante ORM Mongoose`);
   } catch (error) {
      console.log(error)
      throw new Error('Error en la inicializacion de la BD')
   }
}


exports.sequelize = new Sequelize(process.env.MYSQL_DB,"root",process.env.MYSQL_PASS,{
   host:"localhost",
   dialect:"mysql",
   pool:{
      max:5,
      min:0,
      acquire:30000,
      idle:10000
   }
}); 
/* Parece que hay que exportar la misma instancia?? Comprobar si puedo crear varias instancias de este constructor sin problemas en otro momento
exports.connectToSequelize = () => {
   const sequelize = new Sequelize(process.env.MYSQL_DB,"root",process.env.MYSQL_PASS,{
      host:"localhost",
      dialect:"mysql",
      pool:{
         max:5,
         min:0,
         acquire:30000,
         idle:10000
      }
   });
   return sequelize; 
} */