'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    let jwt = TOOLS.SERVICES.JWTService;
    return {
        decodeToken: function (previousData, req, res, next) {
            jwt.decodeJWT(req.get('accessToken')).then((result) => {
                next(null, result);
            }).catch((err) => {
                console.log(err)
                next(err, null);
            })
        }
    };
};
