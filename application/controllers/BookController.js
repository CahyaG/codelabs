'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    const  bookService = TOOLS.SERVICES.BookService;
    return {
        getListWithAuthor: async function(params, callback){
            let data = await bookService.getListWithAuthor(params)
            let total = data.total
            let current_page = params.page
            let per_page = params.perPage
            let last_page = Math.ceil(total/per_page)
            let next_page_url = (current_page != last_page) ? process.env.APP_URL + 'v1/author/' + (params.page+1) : undefined

            let res = {
                content:data.rows,
                pagginate:{
                    total,
                    current_page,
                    last_page,
                    per_page,
                    next_page_url
                }
            }
            callback(null, {code:200, message:'OK',content:res}, true)
        },
        getOneWithAuthor: function(id, callback){
            bookService.getOneWithAuthor(id, (err, result)=>{
                if (err) {
                    callback(err, null);
                } else {
                    if (!result) {
                        callback(null, { code: 404, message: 'data not found'},true);
                    } else {
                        callback(null, { result: result }, true);
                    }
                }
            })
        }

    };
};