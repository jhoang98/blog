import Vuex from 'vuex';
import Vue from 'vue';
import Create from '../components/Create';

// Load Vue
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules: {
        Create
    }
})
