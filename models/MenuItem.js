const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  preco: { type: Number, required: true },
  categoria: { type: String, required: true },
  imagem: { type: String, required: false },
});

module.exports = mongoose.model("MenuItem", MenuItemSchema);
