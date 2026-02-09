const express = require('express');

const app = express();
const PORT = 3000;

// Rota GET "/"
app.get('/', (req, res) => {
  res.json({
    mensagem: "Bem-vindo ao backend simples com Node.js e Express!",
    status: "ativo"
  });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});