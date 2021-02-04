 class Tabelas{
     init(conexao) {
         this.conexao = conexao
         this.criarAtendimento()
     }

     criarAtendimento(){
        const sql = 
        'CREATE TABLE IF NOT EXISTS atendimentos (id int NOT NULL AUTO_INCREMENT, cliente VARCHAR(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, status VARCHAR(20) NOT NULL, observacoes text, data DATETIME NOT NULL, dataCriacao DATETIME NOT NULL, PRIMARY KEY(id) )'
        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log(erro);
            }else{
                console.log('tabela criada com sucesso');
            }
        })
     }
 }

 module.exports = new Tabelas;