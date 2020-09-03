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

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
    router,
    mode: 'history'
});

const app = new Vue({
    el: '#app',
    router: new VueRouter(routes)
});