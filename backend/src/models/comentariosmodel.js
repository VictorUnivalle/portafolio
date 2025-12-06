const supabase = require("../config/db");

const ComentariosModel = {
    crearComentario: async (correo, comentario) => {
        const { data, error } = await supabase
            .from("comentarios")
            .insert([{ correo, comentario }])  
            .select(); // para devolver el registro insertado

        if (error) throw error;
        return data;
    },

    obtenerComentarios: async () => {
        const { data, error } = await supabase
            .from("comentarios")
            .select("*")
            .order("fecha", { ascending: false });

        if (error) throw error;
        return data;
    }
};

module.exports = ComentariosModel;
