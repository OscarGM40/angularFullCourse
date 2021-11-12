const { response, request } = require("express");
const UsuarioMongoose = require("../models/UsuarioMongoose");
const bcrypt = require("bcryptjs");
const UsuarioSQL = require("../models/UsuarioSequelize");
const { createToken } = require("../helpers/generateToken");

exports.crearUsuario = async (req = request, res = response) => {

   const { email, name, password } = req.body;

   try {
      // Verificar que el email esté libre.
      const usuario = await UsuarioMongoose.findOne({ email })
      // findOne devuelve un Objeto
      if (usuario) {
         return res.status(400).json({
            ok: false,
            msg: 'Ya existe un usuario con ese email'
         })
      }
      // si no hay un usuario creo uno,pero no lo guardo aun
      const usuarioMONGO = new UsuarioMongoose(req.body);
      const usuarioMYSQL = new UsuarioSQL(req.body);
      console.log(usuarioMONGO)
      console.log(usuarioMYSQL)
      // console.log(usuarioMYSQL, "aqui")

      // Encripto la contraseña
      const salt = bcrypt.genSaltSync(10);
      // la password me viene el el req.body ↓↓
      const hassedPassword = bcrypt.hashSync(password, salt)
      usuarioMONGO.password = hassedPassword;
      usuarioMYSQL.password = hassedPassword;
      // Generar el JWT
      const Mongotoken = await createToken(usuarioMONGO._id,name);
      await usuarioMONGO.save();
      // Crear el usuario en la BD
      const userSQL = await usuarioMYSQL.save();
      const MYSQLToken = await createToken(userSQL.id, name);
      // Retornar la respuesta adecuada al usuario
      return res.status(201).json({
         ok: true,
         uidMONGO: usuarioMONGO._id,
         uidSQL: userSQL.id,
         name,
         email,
         Mongotoken,
         MYSQLToken
      })
   } catch (error) {
      console.log(error)
      return res.status(500).json({
         ok: false,
         msg: "Por favor hable con el administrador"
      })
   }
}

exports.loginUsuario = async (req = request, res = response) => {
   
   const { email, password } = req.body;
   
   try {
      const dbUser = await UsuarioMongoose.findOne({ email });
      const dbUser2 = await UsuarioSQL.findOne({ where: { email } });
      // console.log(dbUser2)
      
      if (!dbUser) {
         return res.status(400).json({
            ok: false,
            msg: "email no encontrado en Mongo"
         })
      }
      // dado que es el mismo email no va a llegar aqui,ojo
      if (!dbUser2) {
         return res.status(400).json({
            ok: false,
            msg: "email no encontrado en MySQL"
         })
      }
      // confirmar si las passwords hacen match
      const validPasswordMongo = bcrypt.compareSync(password, dbUser.password);
      if (!validPasswordMongo) {
         return res.status(400).json({
            ok: false,
            msg: "Password no valido para Mongo"
         })
      }
      
      const validPasswordMySQL = await bcrypt.compare(password, dbUser2.password);
      if (!validPasswordMySQL) {
         return res.status(400).json({
            ok: false,
            msg: "Password no valido para MySQL"
         })
      }
      // Si el email y la pass eran correctas genero el JWT
      const Mongotoken = await createToken(dbUser._id,dbUser.name);
      const MYSQLToken = await createToken(dbUser2.id, dbUser2.name);
      
      //Retorno lo necesario
      return res.json({
         ok:true,
         uidMONGO: dbUser._id,
         uidSQL: dbUser2.id,
         name:dbUser2.name,
         email,
         Mongotoken,
         MYSQLToken
      })
      
      
   } catch (error) {
      console.log(error);
      return res.status(500).json({
         ok: false,
         msg: "Hable con el administrador"
      })
   }
}

exports.revalidarToken = async (req, res = response) => {
   // esto ya viene del middleware que hay en la ruta
   const { mongoid,name,mysqlid } = req;
   // console.log(req)
   // console.log(mongoid)
   const actualUser = await UsuarioMongoose.findById(mongoid);
   // console.log(actualUser)
   //vuelvo a crear dos tokens
   const Mongotoken = await createToken(mongoid,name);
   const MYSQLToken = await createToken(mysqlid, name);
   
   return res.json({
      ok:true,
      msg:"en el renew",
      mongoid,
      name,
      email:actualUser.email,
      mysqlid,
      Mongotoken,
      MYSQLToken
   })
}