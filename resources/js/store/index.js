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
    }
};

const mutations = {
    ADD: function (state, todo) {
        state.todos.push(todo)
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
