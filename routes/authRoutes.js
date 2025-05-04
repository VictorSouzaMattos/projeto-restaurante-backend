const express = require("express");
const router = express.Router();

// Usuário e senha de exemplo
const ADMIN_USER = "admin";
const ADMIN_PASS = "admin123";

// Rota de login
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    // Em produção, gere um token JWT
    res.json({ success: true, token: "fake-jwt-token" });
  } else {
    res.status(401).json({ success: false, message: "Credenciais inválidas" });
  }
});

module.exports = router;
