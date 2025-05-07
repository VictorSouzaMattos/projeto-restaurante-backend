# Sistema de Restaurante - Backend

API backend desenvolvida em Node.js, Express e MongoDB para gerenciar o sistema de pedidos online de restaurante.

## Funcionalidades

- CRUD de pratos do cardápio
- Cadastro e gerenciamento de pedidos
- Integração com frontend para envio e consulta de dados
- Seed para popular banco com dados iniciais

## Tecnologias

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- CORS

## Como rodar localmente

1. Clone o repositório: git clone https://github.com/VictorSouzaMattos/projeto-restaurante-backend.git

2. Entre na pasta do projeto: cd VictorSouzaMattos/projeto-restaurante-backend

3. Instale as dependências: npm install

4. Crie um arquivo `.env` na raiz do projeto com: MONGODB_URI=mongodb+srv://admin:admin-123@cluster0.iptsnp9.mongodb.net/restaurante?retryWrites=true&w=majority&appName=Cluster0
PORT=3000

5. Configure as variáveis de ambiente (se necessário), como a URL do MongoDB Atlas.

6. Inicie o servidor: node seed.js e node server.js

7. A API estará disponível em: http://localhost:3000

## Deploy

A API está disponível em:  
https://projeto-restaurante-backend.onrender.com

## Integração com frontend

O frontend do sistema está disponível em:  
https://sistema-de-pedidos-online.vercel.app  
Repositório: https://github.com/VictorSouzaMattos/sistema-de-pedidos-online
