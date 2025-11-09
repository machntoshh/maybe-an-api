import express from "express";
// node --watch .\api.js <- reseta o server a cada CTRL+S  

const app = express(); // API recebe req e dá uma resposta
const PORT = 3000;
const arrayResponse = [{
    name: "Seraphim",
    field: "Hymms"
},
{
    name: "Cherub",
    field: "Glory and presence"
},
{
    name: "Archangel",
    field: "War"
}]

app.use(express.json());

// tratar rotas
app.get('/', (req, res) => {
    res.json(arrayResponse) // toda requisição feita pela URL do nav é tipo GET
})

app.post('/', (req, res) => {
    const newAngel = req.body // corpo enviado para req
    arrayResponse.push(newAngel)
    res.status(201).json({ message: "Anjo add com sucesso: ", data: newAngel });
})

app.listen(PORT, () => console.log(`Server ta rodando na ${PORT}`))
// funções callback são melhor usadas em operações assincrónas