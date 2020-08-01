export const state = () => ({
  authenticated: false
})

export const mutations = {
  authenticate(state) {
    state.authenticated = true
  },
  logout(state){
    state.authenticated = false
  }

}