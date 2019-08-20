'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    
    // deklarasikan model disini
    let models = TOOLS.MODELS;
    var CRUDService = {
        //add CRUDService GET all here
        findAll: function (modelName, cb) {
            models[modelName].findAndCountAll().nodeify(cb);
        },
        //add CRUDService GET by id here
        findById: function (modelName, id, cb){
            models[modelName].findByPk(id).nodeify(cb);
        },
        //add CRUDService POST here
        create: function (modelName, opts, cb) {
            models[modelName].create(opts).nodeify(cb);
        },
        //add CRUDService UPDATE by id here
        update: function (modelName, id, opts, cb) {
            var whereOpts = { where: { id: id } };
            models[modelName].update(opts, whereOpts).nodeify(cb);
        },
        //add CRUDService DELETE by id here
        destroy: function (modelName, opts, cb) {
            var whereOpts = { where: { id: opts } };
            models[modelName].destroy(whereOpts).nodeify(cb);
        },
    };

    return CRUDService;
};
