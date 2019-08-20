'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    const  authService = TOOLS.SERVICES.AuthService;
    const  JWTService = TOOLS.SERVICES.JWTService;
    return {
        doLogin: function (model, params, callback){
            authService.doLogin(model, params, callback)
            .then((result)=>{
                if(!result) return { code: 401, message: 'invalid username or password'}
                return JWTService.generateToken(result)
            })
            .then((token)=>{
                callback(null, token)
            })
            .catch(err=>callback(err, null))
        }
    };
};