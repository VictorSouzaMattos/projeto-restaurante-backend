const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem");

// Listar todos os pratos
router.get("/menu", async (req, res) => {
  try {
    const pratos = await MenuItem.find();
    res.status(200).json(pratos);
  } catch (error) {
    res
      .status(500)
      .json({ mensagem: "Erro ao buscar pratos", erro: error.message });
  }
});

// Criar um prato
router.post("/menu", async (req, res) => {
  try {
    const { nome, descricao, preco, categoria, imagem } = req.body;
    const novoPrato = new MenuItem({
      nome,
      descricao,
      preco,
      categoria,
      imagem,
    });
    await novoPrato.save();
    res.status(201).json(novoPrato);
  } catch (error) {
    res
      .status(500)
      .json({ mensagem: "Erro ao criar prato", erro: error.message });
  }
});

// Atualizar um prato
router.put("/menu/:id", async (req, res) => {
  try {
    const { nome, descricao, preco, categoria, imagem } = req.body;
    const pratoAtualizado = await MenuItem.findByIdAndUpdate(
      req.params.id,
      { nome, descricao, preco, categoria, imagem },
      { new: true }
    );
    res.status(200).json(pratoAtualizado);
  } catch (error) {
    res
      .status(500)
      .json({ mensagem: "Erro ao atualizar prato", erro: error.message });
  }
});

// Excluir um prato
router.delete("/menu/:id", async (req, res) => {
  try {
    await MenuItem.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensagem: "Prato excluído com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ mensagem: "Erro ao excluir prato", erro: error.message });
  }
});

module.exports = router;
