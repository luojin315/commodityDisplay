
import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/homePage/index'

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
		component: () => import('@/views/homePage/test')
	}
]
const router = new VueRouter({
	mode: 'history',
	routes
})
export default router;