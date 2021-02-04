const Atendimento = require('../models/atendimentos')

//exporta o modulo app que executa um get no recurso /atendimentos
module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Voce está na rota de atendimentos e está enviando um get'));

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body
        Atendimento.adiciona(atendimento, res);
    });
}