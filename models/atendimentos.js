const conexao = require('../infraestrutura/conexao');
const moment = require('moment')

class Atendimento{
    adiciona(atendimento){
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        //cria um array que tem tudo dentro de atendimento mais dataCriacao e data
        const atendimentoDatado = {...atendimento, dataCriacao, data}
        const sql = 'INSERT INTO atendimentos SET ? '

        conexao.query(sql, atendimentoDatado, (erro, resultado) => {
            if(erro){
                console.log(erro);
            }else{
                console.log(resultado);
            }
        })
    }
}

module.exports = new Atendimento