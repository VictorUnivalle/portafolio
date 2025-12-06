const express = require("express");
const router = express.Router();
const controller = require("../controllers/comentarioscontroller");

router.post("/", controller.guardarComentario);
router.get("/", controller.listarComentarios);

module.exports = router;
