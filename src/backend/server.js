const axios = require ("axios")
const express = require ("express")
const cors = require ("cors")

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())

app.get('/produtos/:categoria', async (req, res) => {
  const { categoria } = req.params
  try {
    const {data} = await axios.get(`https://dummyjson.com/products/category/${encodeURIComponent(categoria)}`);
    res.json(data)
  } catch (err) {
    console.error("Erro ao buscar produtos", err.message)
    res.status(500).json({Erro: "Erro ao buscar produtos"})
  }
})

app.listen(port, () => {
  console.log(`Porta rodando em http://localhost:${port}`)
})