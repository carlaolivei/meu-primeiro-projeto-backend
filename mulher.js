const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Carla Oliveira Santos',
        imagem: 'https://avatars.githubusercontent.com/u/15464302?v=4',
        minibio: 'MSc, MBA, Líder Business Analytics e Professora no Departamento de Ciência da Computação'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta:", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)