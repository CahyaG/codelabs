'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    let models = TOOLS.MODELS;
    const Sequelize = require('sequelize')
    const op = Sequelize.Op
    return {
        doLogin: function(modelName, params){
            let opts = {
                where:{
                    [op.or]:[
                        {
                            username : params.username ? params.username : null ,
                        },
                        {
                            email : params.email ? params.email : null
                        }
                    ],
                    password : MODULES.MD5(params.password)
            }}
            return models[modelName].findOne(opts);
        }
    };
};
