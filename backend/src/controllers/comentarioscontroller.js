const ComentariosModel = require("../models/comentariosmodel");

exports.guardarComentario = async (req, res) => {
    try {
        const { correo, comentario } = req.body;

        if (!correo || !comentario) {
            return res.status(400).json({ mensaje: "Faltan campos obligatorios" });
        }

        // Llamamos al modelo adaptado a Supabase
        const data = await ComentariosModel.crearComentario(correo, comentario);

        res.json({
            mensaje: "Comentario guardado correctamente",
            data: data[0]  // Supabase devuelve un array
        });

    } catch (error) {
        console.error("❌ Error al guardar comentario:", error);
        res.status(500).json({ mensaje: "Error al guardar comentario", error: error.message });
    }
};

exports.listarComentarios = async (req, res) => {
    try {
        const data = await ComentariosModel.obtenerComentarios();

        res.json(data); // Supabase ya devuelve un array limpio

    } catch (error) {
        console.error("❌ Error al obtener comentarios:", error);
        res.status(500).json({ mensaje: "Error al obtener comentarios", error: error.message });
    }
};
