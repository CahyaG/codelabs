'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    let author = TOOLS.MODELS['author'];
    let book = TOOLS.MODELS['book'];
    return {
        getListWithBooks: async function(params){
            let rows = await author.findAll({
                include:[{
                    model: book
                }],
                limit: params.perPage,
                offset: (params.page-1)*params.perPage 
            })

            let total = await author.count()
            return {rows, total}
        },
        getOneWithBooks: function(id, cb){
            author.findByPk(id, {
                include: [{
                    model: book
                }],
            }).nodeify(cb);
        },
    };
};
