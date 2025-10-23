import mongoose from "mongoose";

const reseñaSchema = new mongoose.Schema({
  juegoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Juego",
    required: true,
  },
  puntuacion: { type: Number, required: true, min: 1, max: 5 },
  textoReseña: { type: String, trim: true },
  horasJugadas: { type: Number, default: 0 },
  dificultad: {
    type: String,
    enum: ["Fácil", "Normal", "Difícil"],
    default: "Normal",
  },
  recomendaria: { type: Boolean, default: true },
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now },
});

export default mongoose.model("Reseña", reseñaSchema);
