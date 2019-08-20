'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    let author = TOOLS.MODELS['author'];
    let book = TOOLS.MODELS['book'];
    return {
        getListWithAuthor: async function(params){
            let rows = await book.findAll({
                include:[{
                    model: author
                }],
                limit: params.perPage,
                offset: (params.page-1)*params.perPage 
            })

            let total = await book.count()
            return {rows, total}
        },
        getOneWithAuthor: function(id, cb){
            book.findByPk(id, {
                include: [{
                    model: author
                }],
            }).nodeify(cb);
        },
    };
};
