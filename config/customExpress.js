const express = require('express');
const consign = require('consign');


//é inserido em consign a pasta de controllers e todos seus módulos
//é chamado o consign e incuido(include) todos os módulos de controllers dentro(into) de app
module.exports = () => {
    const app = express();
    consign()
        .include('controllers')
        .into(app);
    
    return app;
}