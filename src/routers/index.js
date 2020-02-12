/*
 * 统一管理页面路由 
*/

import loadable from './utils/loadable';


const Index = loadable(() => import('@/views/Index'));
// const pages = ....

const routes = [
	{path: '/index', exact: true, name: 'Index', component: Index, auth: [1] }
	// ...{}

];


export default routes