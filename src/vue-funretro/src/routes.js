import Home from './view/home.vue'
import Board from './view/board.vue'

import NotFound from './view/404.vue'

const routes = [
	{
		path: '/404',
		component: NotFound,
		name: 'notFound',
		hidden: true
	},
	{
		path: '/',
		component: Home,
		name: 'home',
	},
	{
		path: '/board/:boardGuid',
		component: Board,
		name: 'board',
	},
	{
		path: '*',
		hidden: true,
		redirect: {
			path: '/404'
		}
	}
];

export default routes;
