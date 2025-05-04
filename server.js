const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const menuRoutes = require("./routes/menuRoutes");
const orderRoutes = require("./routes/orderRoutes");
const authRoutes = require("./routes/authRoutes");

// 1. Inicialização do Express
const app = express();

// 2. Middlewares
app.use(cors({ origin: "http://localhost:3001" }));
app.use(express.json());

// 3. Conexão com MongoDB
mongoose
  .connect(
    "mongodb+srv://admin:admin-123@cluster0.iptsnp9.mongodb.net/restaurante?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Conectado ao MongoDB Atlas!"))
  .catch((error) => console.error("Erro ao conectar ao MongoDB Atlas:", error));

// 4. Rotas
app.use("/api/admin", menuRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", authRoutes);

// 5. Rota raiz
app.get("/", (req, res) => {
  res.send("API do Restaurante está funcionando!");
});

// 6. Inicialização do servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
