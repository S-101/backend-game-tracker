// app.js ---- Hola mundo!!!
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch((err) => console.error("❌ Error de conexión:", err));

// Importar rutas
// Rutas
import mainRoutes from "./routes/routes.js";
app.use("/api", mainRoutes);

//import gameRoutes from "./routes/routes.js";
//app.use("/api", gameRoutes);

// 👉 Ruta de prueba
app.get("/", (req, res) => {
  res.send("🌍 API Game Tracker funcionando correctamente");
});

export default app;
