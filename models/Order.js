const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  cliente: {
    nome: { type: String, required: true },
    telefone: { type: String, required: true },
    endereco: { type: String, required: true },
  },
  items: [
    {
      itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MenuItem",
        required: true,
      },
      nome: { type: String, required: true },
      quantidade: { type: Number, required: true },
      preco: { type: Number, required: true },
    },
  ],
  total: { type: Number, required: true },
  status: { type: String, default: "Pendente" },
  data: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", OrderSchema);
