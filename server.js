import express from "express";

const app = express(); // função express ( app representa nosso servidor)
app.listen(3000, () => {
    console.log("Servidor escutando...");
}); // porta 3000 : servidor local

// Servidor se torna um servido quando é capaz de responder solicitações

app.get("/api", (req, res) => { // requisição e resposta com a função get
    res.status(200).send("Rota inicial.");
}); 

// http://localhost:3000/api

// AIzaSyDQ5HN6J9COAzq0xg1S4q77rZV7_mOalLU