const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Carla Oliveira Santos',
        imagem: 'https://avatars.githubusercontent.com/u/15464302?v=4',
        minibio: 'Cientista de Dados e Professora de Ciência da Computação'
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://l1nq.com/yxiHP',
        minibio: 'Fundadora da Programaria'
    },
    {
        nome: 'Nina da Hora',
        imagem: 'https://acesse.dev/xDSpj',
        minibio: 'Hacker antirracista'
    }
]

function mostraMulheres(request, response){
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta:", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)