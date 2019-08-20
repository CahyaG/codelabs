'use strict';

module.exports = [
    {
        method: 'get',
        endpoint: '/global',
        handlers: [
            'TokenInterface.decodeToken',
            'AuthorInterface.getList'
        ]
    },
    // add routes get by id here
    {
        method: 'get',
        endpoint: '/global/:id',
        handlers: [
            'TokenInterface.decodeToken',
            'AuthorInterface.getOne'
        ]
    },
    // add routes create data here here
    {
        method: 'post',
        endpoint: '/global',
        handlers: [
            'TokenInterface.decodeToken',
            'AuthorInterface.create'
        ]
    },
    // add routes update data here
    {
        method: 'put',
        endpoint: '/global/:id',
        handlers: [
            'TokenInterface.decodeToken',
            'AuthorInterface.update'
        ]
    },
    // add routes delete data here
    {
        method: 'delete',
        endpoint: '/global/:id',
        handlers: [
            'TokenInterface.decodeToken',
            'AuthorInterface.delete'
        ]
    },
    {
        method: 'get',
        endpoint: '/',
        handlers: [
            'TokenInterface.decodeToken',
            'AuthorInterface.getListWithBooks'
        ]
    },
    {
        method: 'get',
        endpoint: '/:page',
        handlers: [
            'TokenInterface.decodeToken',
            'AuthorInterface.getListWithBooks'
        ]
    },
];
