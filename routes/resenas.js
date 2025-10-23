import express from "express";
import Resena from "../models/resena.js"; // renombrado para evitar la ñ

const router = express.Router();

// ✅ GET - Todas las reseñas
router.get("/", async (req, res) => {
  try {
    const resenas = await Resena.find().populate("juegoId");
    res.json(resenas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ GET - Reseñas por juego
router.get("/juego/:juegoId", async (req, res) => {
  try {
    const resenas = await Resena.find({ juegoId: req.params.juegoId });
    res.json(resenas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ POST - Nueva reseña
router.post("/", async (req, res) => {
  try {
    const nueva = new Resena(req.body);
    const guardada = await nueva.save();
    res.status(201).json(guardada);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ PUT - Actualizar reseña
router.put("/:id", async (req, res) => {
  try {
    req.body.fechaActualizacion = new Date();
    const actualizada = await Resena.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!actualizada)
      return res.status(404).json({ error: "Reseña no encontrada" });
    res.json(actualizada);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ DELETE - Eliminar reseña
router.delete("/:id", async (req, res) => {
  try {
    const eliminada = await Resena.findByIdAndDelete(req.params.id);
    if (!eliminada)
      return res.status(404).json({ error: "Reseña no encontrada" });
    res.json({ message: "Reseña eliminada correctamente" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
