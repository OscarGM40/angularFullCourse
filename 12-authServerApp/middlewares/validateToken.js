const { request, response } = require("express");
const jwt = require("jsonwebtoken");

exports.validarJWT = (req=request,res=response,next) => {

   const mongoToken = req.header("mongo-token");
   const mysqlToken = req.header("mysql-token");

   if(!mongoToken || !mysqlToken) {
      return res.status(401).json({
         ok: false,
         msg:"error en los tokens"
        })
    }
    
    try {
        const {uid} = jwt.verify(mongoToken,process.env.JWT_SIGNATURE);
        // console.log(uid,name)
        req.mongoid=uid;
        const payload = jwt.verify(mysqlToken,process.env.JWT_SIGNATURE);
        console.log(payload)
        req.mysqlid=payload.uid;
        req.name=payload.name;
        
    } catch (error) {
        return res.status(401).json({
          ok: false,
          msg:"tokens no validos"
      }) 
   }
    //  todo ok
    next();
}