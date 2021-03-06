'use strict';

module.exports = [
    // add routes get list here 
    {
        method: 'get',
        endpoint: '/global',
        handlers: [
            'TokenInterface.decodeToken',
            'CRUDInterface.getList'
        ]
    },
    // add routes get by id here
    {
        method: 'get',
        endpoint: '/global/:id',
        handlers: [
            'TokenInterface.decodeToken',
            'CRUDInterface.getOne'
        ]
    },
    // add routes create data here here
    {
        method: 'post',
        endpoint: '/global',
        handlers: [
            'TokenInterface.decodeToken',
            'CRUDInterface.create'
        ]
    },
    // add routes update data here
    {
        method: 'put',
        endpoint: '/global/:id',
        handlers: [
            'TokenInterface.decodeToken',
            'CRUDInterface.update'
        ]
    },
    // add routes delete data here
    {
        method: 'delete',
        endpoint: '/global/:id',
        handlers: [
            'TokenInterface.decodeToken',
            'CRUDInterface.delete'
        ]
    }
];
