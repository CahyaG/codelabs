'use strict';

module.exports = [
    {
        method: 'post',
        endpoint: '/login',
        handlers: [
            'AuthInterface.doLogin'
        ]
    },
    {
        method: 'get',
        endpoint: '/me',
        handlers: [
            'TokenInterface.decodeToken',
            'AuthInterface.showProfile'
        ]
    }
];
