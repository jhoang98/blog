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

    delete: function ({commit}, id) {
        commit('DELETE', id);
    }
};

const mutations = {
    ADD: function (state, todo) {
        state.todos.push(todo);
    },

    DELETE: function (state, id) {
        state.todos = state.todos.filter(function (todo) {
            return todo.id !== id;
        });
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
