
import home from '../components/homePage/index'

const routes = [
	{
		path: '/',
		redirect:'/home'
	},
	{
		path: '/home',
		name: 'Home',
		component: home
	},
	{
		path: '/test',
		name: 'test',
		component: () => import('../components/homePage/test')
	}
]
export default routes;