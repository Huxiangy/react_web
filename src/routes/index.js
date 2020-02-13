/*
 * 统一管理页面路由 
*/

import loadable from '../utils/loadable.js';
import React, { Component } from 'react'


const Index = loadable(() => import('../views/Index'));
const PublicPage1 = loadable(() => import('../views/PageOne'));
const PublicPage2 = loadable(() => import('../views/PageTwo'));

const PrivatePage1 = loadable(() => import('../views/PageThree'));
const PrivatePage2 = loadable(() => import('../views/PageFour'));



// const pages = ....

const routes = [
	{path: '/index', exact: true, name: 'Index', component: Index, auth: [1] },
	{path: '/public/1', exact: false, name: 'PublicPage1', component: PublicPage1, auth: [1] },
	{path: '/public/2', exact: false, name: 'PublicPage2', component: PublicPage2, auth: [1] },

	{path: '/private/1', exact: false, name: 'PrivatePage1', component: PrivatePage1 },
	{path: '/private/2', exact: false, name: 'PrivatePage2', component: PrivatePage2 },


	// ...{}

];


export default routes