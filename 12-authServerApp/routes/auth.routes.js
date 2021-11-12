const router = require('express').Router();
const { check } = require('express-validator');
//La funcion Router configura mi router ↑↑
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth.controller');
const { validarCampos } = require('../middlewares/validateRequest');
const { validarJWT } = require('../middlewares/validateToken');


router.post("/new",
   [
      check("name").notEmpty().withMessage("El name es requerido")
         .isLength({ min: 3 }).withMessage("Nombre: minimo 3 caracteres")
         .isLength({ max: 20 }).withMessage("Nombre: máximo 20 caracteres"),
      check("email", "El email es obligatorio").isEmail(),
      check("password").notEmpty().withMessage("El password es requerido")
         .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i")
         .withMessage("La password debe tener al menos una mayúscula,una minúscula,un número y 8 caracteres de longitud"),
      validarCampos,
   ], crearUsuario);


router.post("/", [
   check("email", "El email es obligatorio").isEmail(),
   check("password").notEmpty().withMessage("la password es requerida")
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i")
      .withMessage("La password debe tener al menos una mayúscula, una minúscula, un número y 8 caracteres de longitud"),
   validarCampos,

], loginUsuario);


router.get("/renew", validarJWT ,revalidarToken);

module.exports = router;