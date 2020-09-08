/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import routes from './routes';
import Vue from 'vue';
import Vuex from 'vuex';
import store from './store/index';

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
    router,
    mode: 'history',
    routes: [
        { path: '/create', redirect: '/home'}
    ]
});

const app = new Vue({
    store: new Vuex.Store(store),
    el: '#app',
    router: new VueRouter(routes)
});
