
import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/homePage/index'

Vue.use(VueRouter);


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
const router = new VueRouter({
	mode: 'hash',
	routes
})
export default router;