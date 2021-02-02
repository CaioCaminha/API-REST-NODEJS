//exporta o modulo app que executa um get no recurso /atendimentos
module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Voce está na rota de atendimentos'));
}