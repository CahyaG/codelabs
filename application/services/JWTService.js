'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    return {
        generateToken: function (payload) {
            return new Promise((resolve,reject) => {
                MODULES.JWT.sign(JSON.stringify(payload), process.env.JWT_SECRET,function (err,token) {
                    if (err) {
                        reject(err);
                    }else{
                        var data = {
                            token : token,
                            payload : payload
                        };
                        resolve(data);
                    }
                });
            });
        },
        decodeJWT: (token) => {
            return new Promise( (resolve,reject) => {
                MODULES.JWT.verify(token,process.env.JWT_SECRET,function (err,decoded) {
                    if (err){
                        reject({code: 401, message: 'Invalid token'});
                    }else{
                        resolve(decoded);
                    }
                })
            });
        }
    }
}