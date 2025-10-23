import mongoose from "mongoose";

const juegoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  genero: { type: String, required: true },
  plataforma: { type: String, required: true },
  fechaLanzamiento: { type: Number, required: true },
  desarrollador: { type: String },
  imagenPortada: { type: String },
  descripcion: { type: String },
  completado: { type: Boolean, default: false },
  fechaCreacion: { type: Date, default: Date.now },
});

export default mongoose.model("Juego", juegoSchema);
