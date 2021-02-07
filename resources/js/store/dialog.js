export default {
    namespaced: true,
    state: {
        status: false,
        components: "search",  //Utk search Login atau yg lainya
    },
    mutations: {
        setStatus: (state, status) => {
            state.status = status
        },
        setComponent: (state, components) => {
            state.component = components
        }
    },
    actions: {
        setStatus: ({ commit }, status) => {
            commit('setStatus', status)
        },
        setComponent: ({ commit }, component) => {
            commit('setComponent', component);
            commit('setStatus', true);
        }
    },
    getters: {
        status: state => state.status,
        component: state => state.component,
    }
}
