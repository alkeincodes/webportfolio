export const state = () => ({
  authenticated: false,
  user: null
})


const mutations = {
  SET_USER (state, payload) {
    state.user = payload
  },
  SET_AUTHENTICATED (state, payload) {
    state.authenticated = payload
  }
}
const actions = {
  authenticate({commit}, payload) {
    return new Promise((resolve, reject) => {
      this.$axios.post('/user-check', payload).then((res) => {
        commit('SET_AUTHENTICATED', true)
        // commit('SET_USER', data)

        resolve(true)
      }).catch((err) => {
        commit('SET_AUTHENTICATED', false)
        commit('SET_USER', null)
        this.$router.push('/')
        reject(err)
      })
    })
  }
}
const getters = {}

export default {
  mutations,
  actions,
  getters
}
