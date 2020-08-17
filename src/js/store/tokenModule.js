export default {
    state: {
        token: null,
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        }
    },
    getters: {
        getToken(state) {
           return state.token
        }
    },
}