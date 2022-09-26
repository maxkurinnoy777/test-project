export const state = () =>  ({
  users: []
})

export const getters = {
  users: state => state.users
}

export const actions = {
  async getUsers({commit, state}) {
    const response = await this.$repositories.user.all()
    const users = response.data

    users.forEach((user) => {
      user.active = false
    })
    commit('setUsers', users)
  },

  async updateUserStatus({commit, state}, params) {
    const user_index = state.users.findIndex(obj => obj.id === params.id)
    await commit('updateUser', user_index)
  },

  async getUser({commit, state}, params) {
    const response = await this.$repositories.user.show(params.id)
    return response.data
  }
}

export const mutations = {
  setUsers(state, users) {
    state.users = users
  },

  updateUser(state, index) {
    state.users[index].active = !state.users[index].active
  }
}
