import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//DEFINE ROUTE
const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            alias: '/home',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/donations',
            name: 'donations',
            component: () => import('./views/Donations.vue')
        },
        {
            path: '/campaigns',
            name: 'campaigns',
            component: () => import('./views/campaigns.vue')
        },
        {
            path: '/campaign/:id',
            name: 'campaign',
            component: () => import('./views/dcampaign.vue')
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
});

export default router
