'use strict';

module.exports = [
    {
        method: 'get',
        endpoint: '/global',
        handlers: [
            'TokenInterface.decodeToken',
            'BookInterface.getList'
        ]
    },
    // add routes get by id here
    {
        method: 'get',
        endpoint: '/global/:id',
        handlers: [
            'TokenInterface.decodeToken',
            'BookInterface.getOne'
        ]
    },
    // add routes create data here here
    {
        method: 'post',
        endpoint: '/global',
        handlers: [
            'TokenInterface.decodeToken',
            'BookInterface.create'
        ]
    },
    // add routes update data here
    {
        method: 'put',
        endpoint: '/global/:id',
        handlers: [
            'TokenInterface.decodeToken',
            'BookInterface.update'
        ]
    },
    // add routes delete data here
    {
        method: 'delete',
        endpoint: '/global/:id',
        handlers: [
            'TokenInterface.decodeToken',
            'BookInterface.delete'
        ]
    },
    {
        method: 'get',
        endpoint: '/',
        handlers: [
            'TokenInterface.decodeToken',
            'BookInterface.getListWithAuthor'
        ]
    },
    {
        method: 'get',
        endpoint: '/:page',
        handlers: [
            'TokenInterface.decodeToken',
            'BookInterface.getListWithAuthor'
        ]
    },
];
