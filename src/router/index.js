import VueRouter from 'vue-router'
import Vue from 'vue'

// 安装插件
Vue.use(VueRouter)

const home = () =>
    import ('../views/home/Home.vue')
const category = () =>
    import ('../views/category/Category.vue')
const profile = () =>
    import ('../views/profile/Profile.vue')
const shopcart = () =>
    import ('../views/shopcart/Shopcart.vue')

const Detail = () =>
    import ('../views/detail/Detail.vue')

const routes = [{
    path: '',
    redirect: '/home'
}, {
    path: '/home',
    component: home
}, {
    path: '/category',
    component: category
}, {
    path: '/shopcart',
    component: shopcart
}, {
    path: '/profile',
    component: profile
}, {
    path: '/detail/:iid',
    component: Detail
}]

const router = new VueRouter({
    routes,
    // mode: 'history' 在npm run build 之后要把这个注释掉，不然网页上的路径显示不出来
})

export default router