const menu = [
    {
        key: '/index',
        title: '首页',
        icon: 'home',
        auth: [1]
    },
    {
        title: '通用',
        key: '/public',
        icon: 'appstore',
        auth: [1],
        subs: [{ title: '通用一', key: '/public/1', icon: '' }, { title: '通用二', key: '/public/2', icon: '' }]
    },
    {
        title: '权限管理',
        key: '/nav',
        icon: 'bulb',
        subs: [
            { title: '权限一', key: '/private/1', icon: '' },
            { title: '权限二', key: '/private/2', icon: '' }
        ]
    },

]

export default menu
