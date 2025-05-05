require("dotenv").config(); // Carrega variáveis do .env
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const menuRoutes = require("./routes/menuRoutes");
const orderRoutes = require("./routes/orderRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middlewares
app.use(
  cors({ origin: "https://https://sistema-de-pedidos-online.vercel.app/" })
);
app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:3001" }));
app.use(express.json());

// Conexão com MongoDB usando variável de ambiente
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado ao MongoDB Atlas!"))
  .catch((error) => console.error("Erro na conexão com MongoDB:", error));

// Rotas
app.use("/api/admin", menuRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", authRoutes);

// Rota de saúde
app.get("/", (req, res) => {
  res.status(200).json({
    status: "online",
    version: "1.0.0",
  });
});

// Porta dinâmica para ambientes de deploy
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🟢 Servidor rodando na porta ${PORT}`);
});
