export const state = () => ({
  data: []
})


const mutations = {
  SET_BLOGS(state, payload) {
    state.data = payload
  }
}
const actions = {
  getBlogs({commit}) {
    this.$axios.get('/blogs').then(({ data }) => {
      console.log('@data: ', data)
      commit('SET_BLOGS', data)
    })
  }
}

export default {
  mutations,
  actions
}
