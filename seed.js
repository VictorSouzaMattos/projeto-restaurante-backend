const mongoose = require("mongoose");
const MenuItem = require("./models/MenuItem");

const menuItems = [
  {
    nome: "Bife Acebolado",
    descricao: "Acompanha arroz, feijão, fritas, salada",
    preco: 30.0,
    categoria: "Pratos principais",
    imagem:
      "https://res.cloudinary.com/dbl5xfcyq/image/upload/v1746064992/pf-bife-acebolado_rkwb1h.jpg",
  },
  {
    nome: "Lasanha de Frango",
    descricao: "Lasanha caseira com molho branco",
    preco: 28.0,
    categoria: "Pratos principais",
    imagem:
      "https://res.cloudinary.com/dbl5xfcyq/image/upload/v1746064992/lasanha-frango_ao_molho_branco_twyqsf.jpg",
  },
  {
    nome: "Pudim de Leite",
    descricao: "Sobremesa clássica brasileira",
    preco: 10.0,
    categoria: "Sobremesas",
    imagem:
      "https://res.cloudinary.com/dbl5xfcyq/image/upload/v1746064993/pudim-de-leite_oj4lwn.webp",
  },
  {
    nome: "Coca-Cola Lata",
    descricao: "350ml gelada",
    preco: 6.0,
    categoria: "Bebidas",
    imagem:
      "https://res.cloudinary.com/dbl5xfcyq/image/upload/v1746064992/coca-lata-350ml_snvmsm.png",
  },
  {
    nome: "Filé Mignon ao Molho Madeira",
    descricao: "Acompanha arroz e batata palha",
    preco: 45.0,
    categoria: "Pratos especiais",
    imagem:
      "https://res.cloudinary.com/dbl5xfcyq/image/upload/v1746064992/prato_feito_-_fil%C3%A9_mignon_ao_molho_madeira_xj86dr.jpg",
  },
];

async function seedDatabase() {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin-123@cluster0.iptsnp9.mongodb.net/restaurante?retryWrites=true&w=majority&appName=Cluster0"
    );
    await MenuItem.deleteMany();
    await MenuItem.insertMany(menuItems);
    console.log("Dados inseridos com sucesso!");
    process.exit(0);
  } catch (error) {
    console.error("Erro ao popular o banco:", error);
    process.exit(1);
  }
}

seedDatabase();
