import './css/site.css';
import 'bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(VueRouter);
Vue.use(Vuetify);

const routes = [
    { path: '*', component: require('./components/blog/blog.vue.html') },
    { path: '/blog', component: require('./components/blog/blog.vue.html') },
    { path: '/blog/:category', component: require('./components/blog/category/category.vue.html') },
    { path: '/counter', component: require('./components/counter/counter.vue.html') },
    { path: '/fetchdata', component: require('./components/fetchdata/fetchdata.vue.html') }
];

new Vue({
    el: '#app-root',
    router: new VueRouter({ mode: 'history', routes: routes }),
    render: h => h(require('./components/app/app.vue.html'))
});
