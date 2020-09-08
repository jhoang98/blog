import NotFound from './components/NotFound';
import Home from './components/Home';
import About from './components/About';
import Show from './components/Show';
import Hello from './components/Hello';
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
            name: 'Categories',
            component: () =>
                import(/*webpackChunkName: "Categories"*/"./components/Categories")
        },

        {
            path: '/create',
            name: 'Create',
            // route level code-splitting (lazyload)
            component: () =>
                import(/*webpackChunkName: "Create"*/"./components/Create")
        },

        {
            path: '/about',
            name: 'About',
            component: About
        },

        {
            path: '/show/:id',
            name: 'Show',
            component: () =>
                import(/*webpackChunkName: "Categories"*/"./components/Show")
        }
    ]
}
