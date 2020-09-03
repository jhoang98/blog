import NotFound from './components/NotFound';
import Home from './components/Home';
import Categories from './components/Categories';
import Create from './components/Create';
import Axios from "axios";

export default {
    mode: 'history',
    linkActiveClass: 'font-semibold',

    routes: [
        {
            path: '*',
            component: NotFound
        },

        {
            path: '/',
            component: Home
        },

        {
            path: '/categories',
            component: Categories
        },

        {
            path: '/create',
            component: Create
        }

    ]
}
