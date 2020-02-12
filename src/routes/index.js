/*
 * 统一管理页面路由 
*/

import loadable from '../utils/loadable.js';
import React, { Component } from 'react'


const Index = loadable(() => import('../views/Index'));
const PublicPage = loadable(() => (<div>通用页面</div>));
const PrivatePage = loadable(() => (<div>权限页面（管理员才有权限访问）</div>));


// const pages = ....

const routes = [
	{path: '/index', exact: true, name: 'Index', component: Index, auth: [1] },
	{path: '/public:id', exact: false, name: 'PublicPage', component: PublicPage, auth: [1] },
	{path: '/private:id', exact: false, name: 'PrivatePage', component: PrivatePage }

	// ...{}

];


export default routes