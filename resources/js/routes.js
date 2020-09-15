import NotFound from './components/NotFound';
import Home from './components/Home';
import Show from './components/Show';
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
            path: '/show/:id',
            name: 'Show',
            props: true,
            component: () =>
                import(/*webpackChunkName: "Categories"*/"./components/Show")
        }
    ]
}
