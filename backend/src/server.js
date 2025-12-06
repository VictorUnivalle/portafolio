const express = require("express");
const cors = require("cors");
require("dotenv").config();

const comentariosRoutes = require("./routes/comentariosroutes.js");

const app = express();
app.use(
  cors({
    origin: "https://portafoliodevictortabares.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

// Ruta base para comentarios
app.use("/api/comentarios", comentariosRoutes);

app.get("/", (req, res) => {
    res.send("API funcionando correctamente");
});



app.listen(process.env.PORT || 4000, () => {
    console.log(`Servidor corriendo en puerto https://portafolio-0xzw.onrender.com${process.env.PORT}`);
});
