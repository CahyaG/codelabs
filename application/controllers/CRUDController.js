'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    
    //deklarasikan CRUDService disini
    const CRUDService = TOOLS.SERVICES.CRUDService;
    return {
        // add controller getList here
        getList: function (model, callback) {
            CRUDService.findAll(model, function (err, result) {
                if (err) {
                    callback(err, null);
                } else {
                    if (!result) {
                        callback(null, { code: 404, message: 'data not found'},true);
                    } else {
                        callback(null, { result: result }, true);
                    }
                }
            });
        },
        // add controller getOne here
        getOne: function (model, id, callback) {
            CRUDService.findById(model, id, function (err, result) {
                if (err) {
                    callback(err, null);
                } else {
                    if (!result) {
                        callback(null, { code: 404, message: 'data not found'},true);
                    } else {
                        callback(null, { result: result }, true);
                    }
                }
            });
        },
        // add controller create here
        create: function (model, data, callback) {
            CRUDService.create(model, data, function (err, result) {
                if (err) {
                    callback(err, null);
                } else {
                    if (!result) {
                        callback(null, { code: 400, message: 'data failed to create'}, true);
                    } else {
                        callback(null, { result: result }, true);
                    }
                }
            });
        },
        // add controller update here
        update: function (model, id, data, callback) {
            CRUDService.update(model, id, data, function (err, result) {
                if (err) {
                    callback(err, null);
                } else {
                    if (!result) {
                        callback(null, { code: 404, message: 'id not found'},true);
                    } else {
                        callback(null, { message: 'update success' }, true);
                    }
                }
            });
        },
        // add controller delete here
        delete: function (model, id, callback) {
            CRUDService.destroy(model, id, function (err, result) {
                if (err) {
                    callback(err, null);
                } else {
                    if (!result) {
                        callback(null, { code: 404, message: 'id not found'},true);
                    } else {
                        callback(null, { message: 'delete success' }, true);
                    }
                }
            });
        }
    };
};
