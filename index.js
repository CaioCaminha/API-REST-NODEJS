const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')

conexao.connect(erro =>{
    if(erro){
        console.log(erro);
    }else{
        console.log('Database connect in port: 3307')
        const app = customExpress()
        //sobe o servidor na porta 3000
        app.listen(3000, () => console.log('Servidor rodando, tudo ok'))
    }
})



