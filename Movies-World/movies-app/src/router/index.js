import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Landing from '@/components/Landing'
import MovieDetails from '@/components/MovieDetails'

Vue.use(Router);
Vue.use(VueResource);

const router = new Router({
    base: __dirname,
    routes: [{
        path: '/',
        name: 'Landing',
        component: Landing
    },
    {
        path: '/moviedetails/:movieId',
        name: 'MovieDetails',
        component: MovieDetails,
        props: true
    }]
});

export default router