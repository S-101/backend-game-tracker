// routes/routes.js
import express from "express";
import juegoRoutes from "./juegos.js";
import resenaRoutes from "./resenas.js";

const router = express.Router();

// agrupar las rutas
router.use("/juegos", juegoRoutes);
router.use("/resenas", resenaRoutes);

export default router;
