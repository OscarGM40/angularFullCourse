 const jwt = require("jsonwebtoken");

 exports.createToken = (uid,name) => {

    const payload = { uid, name };

    return new Promise( (resolve, reject) => {
        jwt.sign(payload,process.env.JWT_SIGNATURE,{
            expiresIn: "24h"
        },(err,token) => {
            if(err) {
                console.log(err)
                reject(err)
            }else{
                resolve(token)
            }
        })
    })
 }

exports.imprimirCLI = (body) => {
     return new Promise( (resolve) => {
         resolve(console.log(body))
     })
 }