/**
 * Created by rakhmatullahyoga on 29/09/17.
 */

'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    
    // Deklarasikan crud controller disini
    const crudController = TOOLS.CONTROLLERS.CRUDController;
    const authorController = TOOLS.CONTROLLERS.AuthorController;
    const model = "author";
    return {
        getListWithBooks: function(previousData, req, res, next){
            let params = {
                page: req.params.page ? req.params.page : 1,
                perPage: req.query.perPage ? req.query.perPage : 10, 
            }
            params.page = Number.parseInt(params.page)
            params.perPage = Number.parseInt(params.perPage)
            authorController.getListWithBooks(params, next)
        },
        // add interface get list here
        getList: function (previousData, req, res, next) {
            crudController.getList(model, next);
        },
        // add interface get list here
        getOne: function (previousData, req, res, next) {
            const id = req.params.id
            authorController.getOneWithBooks(id, next);
        },
        // add interface post/create here
        create: function (previousData, req, res, next) {
            const data = req.body
             crudController.create(model, data, next);
        },
        // add interface update here
        update: function (previousData, req, res, next) {
            var id = req.params.id;
            var data = req.body;
            crudController.update(model, id, data, next);    
        },
        // add interface delete here
        delete: function (previousData, req, res, next) {
            var id = req.params.id;
            crudController.delete(model, id, next);
        }
    };
};
