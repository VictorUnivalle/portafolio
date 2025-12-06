const API_URL = "https://portafolio-0xzw.onrender.com/api/comentarios";

// Enviar comentario
document.getElementById("comentarioForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const correo = document.getElementById("correo").value;
    const comentario = document.getElementById("comentario").value;

    const data = { correo, comentario };

    try {
        const resp = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!resp.ok) throw new Error("Error al guardar el comentario");

        alert("Comentario enviado");
        document.getElementById("comentarioForm").reset();
        cargarComentarios();

    } catch (error) {
        console.error(error);
        alert("Hubo un error al enviar el comentario");
    }
});

// Cargar comentarios
async function cargarComentarios() {
    try {
        const resp = await fetch(API_URL);
        const comentarios = await resp.json();

        const lista = document.getElementById("listaComentarios");
        lista.innerHTML = "";

        comentarios.forEach(c => {
            const div = document.createElement("div");
            div.innerHTML = `
                <p><strong>${c.correo}</strong></p>
                <p>${c.comentario}</p>
                <hr>
            `;
            lista.appendChild(div);
        });

    } catch (error) {
        console.error("Error cargando comentarios:", error);
    }
}

cargarComentarios();
