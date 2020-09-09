const state = {
    todos: []
};

const getters = {
    // todos: function (state) {
    //     return state.todos
    // };

    todos: (state) => state.todos
};

const actions = {
    add: function ({commit}, todo) {
        commit('ADD', todo);
    },

    delete: function ({commit}, todo) {
        commit('DELETE', todo);
    }
};

const mutations = {
    ADD: function (state, todo) {
        state.todos.push(todo)
    },

    DELETE: function (state, todo) {
        state.todos.filter(todo)
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
