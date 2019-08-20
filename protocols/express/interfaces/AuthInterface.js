'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    let authController = TOOLS.CONTROLLERS.AuthController;
    let crudController = TOOLS.CONTROLLERS.CRUDController;
    return {
        doLogin: function (previousData, req, res, next) {
            var model = 'user'
            let params = req.body
            authController.doLogin(model, params, next)
        },
        showProfile: function (previousData, req, res, next) {
            var model = 'user'
            crudController.getOne(model, previousData.id, next)
        }
    };
};
