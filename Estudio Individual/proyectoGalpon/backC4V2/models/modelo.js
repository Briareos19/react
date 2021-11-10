const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let modeloDatos = new Schema(
  {
    name: {
      type: String,
    },
    Apellido: {
      type: String,
    },
    email: {
      type: String,
      required:true,
      min:8,
      max:1024
    },
    phone: {
      type: Number,
    },
    pais: {
      type: String,
    },
    ciudad: {
      type: String,
    },
    direccion: {
      type: String,
    },
    clasificacion: {
      type: String,
    },
    password: {
        type: String,
        required:true,
        minlenght:4,
      },
  },
  {
    collection: "Usuarios",
  }
);

module.exports = mongoose.model("modeloDatos", modeloDatos);