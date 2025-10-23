import express from "express";
import Juego from "../models/juego.js";

const router = express.Router();

// ✅ GET - Todos los juegos
router.get("/", async (req, res) => {
  try {
    const juegos = await Juego.find();
    res.json(juegos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET - Juego por ID
router.get("/:id", async (req, res) => {
  try {
    const juego = await Juego.findById(req.params.id);
    if (!juego) return res.status(404).json({ error: "Juego no encontrado" });
    res.json(juego);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ POST - Agregar juego
router.post("/", async (req, res) => {
  try {
    const nuevoJuego = new Juego(req.body);
    const guardado = await nuevoJuego.save();
    res.status(201).json(guardado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ PUT - Actualizar juego
router.put("/:id", async (req, res) => {
  try {
    const actualizado = await Juego.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!actualizado)
      return res.status(404).json({ error: "Juego no encontrado" });
    res.json(actualizado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ DELETE - Eliminar juego
router.delete("/:id", async (req, res) => {
  try {
    const eliminado = await Juego.findByIdAndDelete(req.params.id);
    if (!eliminado)
      return res.status(404).json({ error: "Juego no encontrado" });
    res.json({ message: "Juego eliminado correctamente" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
