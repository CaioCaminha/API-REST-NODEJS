const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');


//é inserido em consign a pasta de controllers e todos seus módulos
//é chamado o consign e incuido(include) todos os módulos de controllers dentro(into) de app
module.exports = () => {
    const app = express();
    //permite receber dados em formulário comum 
    app.use(bodyParser.urlencoded({extended: true}))
    //permite receber dados em json    
    app.use(bodyParser.json());

    consign()
    //incluir controllers dentro de app
        .include('controllers')
        .into(app);
    
    return app;
}