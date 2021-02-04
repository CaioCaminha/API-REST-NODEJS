const Atendimento = require('../models/atendimentos')

//exporta o modulo app que executa um get no recurso /atendimentos
module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res)
    });

    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Atendimento.buscarPorId(id, res)
    })

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body
        Atendimento.adiciona(atendimento, res);
    });

    
    app.patch('/atendimentos/:id', ( req, res) => {
        const valores = req.body
        const id = parseInt(req.params.id)

        Atendimento.altera(id, valores, res)

    })

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.deleta(id, res)
    })
}