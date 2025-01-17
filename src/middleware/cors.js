const cors = require("cors");
const express = require("express");
const app = express();

// Configure o middleware CORS
app.use(
  cors({
    origin: "http://localhost:5173", // Permita apenas o frontend
  })
);

app.listen(8000, () => {
  console.log("Servidor rodando na porta 8000");
});
