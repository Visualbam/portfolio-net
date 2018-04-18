declare var require: any;
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify'
import './styles/main.styl';

Vue.use(VueRouter);
Vue.use(Vuetify);

const routes = [
    { path: '*', component: require('./components/blog/blog.vue.html').default },
    { path: '/blog', component: require('./components/blog/blog.vue.html').default },
    { path: '/blog/:category', component: require('./components/blog/category/category.vue.html').default },
    { path: '/counter', component: require('./components/counter/counter.vue.html').default },
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(require('./components/app/app.vue.html').default)
});

Vue.filter('truncate', function (text: any, stop: any, clamp: any) {
    return text.slice(0, stop) + (stop < text.length ? clamp || '...' : '')
});