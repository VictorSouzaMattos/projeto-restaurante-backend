const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// Criar novo pedido
router.post("/", async (req, res) => {
  try {
    const { cliente, items, total } = req.body;
    const novoPedido = new Order({ cliente, items, total });
    await novoPedido.save();
    res.status(201).json(novoPedido);
  } catch (error) {
    res
      .status(500)
      .json({ mensagem: "Erro ao salvar pedido", erro: error.message });
  }
});

// Listar todos os pedidos
router.get("/", async (req, res) => {
  try {
    const pedidos = await Order.find().populate("items.itemId");
    res.status(200).json(pedidos);
  } catch (error) {
    res
      .status(500)
      .json({ mensagem: "Erro ao buscar pedidos", erro: error.message });
  }
});

module.exports = router;
