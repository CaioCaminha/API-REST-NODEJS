const conexao = require('../infraestrutura/conexao');
const moment = require('moment')

class Atendimento{
    adiciona(atendimento, res){
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')

        const dataValida = moment(data).isSameOrAfter(dataCriacao)
        const clienteValido = atendimento.cliente.length >= 5

        const validacoes = [
            {
                nome: 'data',
                valido: dataValida,
                mensagem: 'A data deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente',
                valido: clienteValido,
                mensagem: 'Cliente deve ter mais de 5 caracteres'
            }
        ]
        //se campo.valido devolver um false retorne campo
        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if(existemErros){
            res.status(400).json(erros)
        }else{
           //cria um array que tem tudo dentro de atendimento mais dataCriacao e data
            const atendimentoDatado = {...atendimento, dataCriacao, data}
            const sql = 'INSERT INTO atendimentos SET ? '
    
            conexao.query(sql, atendimentoDatado, (erro, resultado) => {
                if(erro){
                    res.status(400).json(erro)
                }else{
                    res.status(201).json(resultado)
                }
            })
        }
    }
}

module.exports = new Atendimento