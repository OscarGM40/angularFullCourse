const { DataTypes } = require("sequelize");
const { sequelize } = require("../databases/connection");


const UsuarioSQL = sequelize.define("Usuario", {
   // parece que crea una columan id autoincremental integer ??
   id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
   name: { type: DataTypes.STRING, allowNull: false },
   email: { type: DataTypes.STRING, allowNull: false, unique: true },
   password: { type: DataTypes.STRING, allowNull: false }
})

module.exports = UsuarioSQL;