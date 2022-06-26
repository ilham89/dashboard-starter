import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    drawer: null,
    drawerImage: true,
    mini: false,
    items: [
      {
        title: "Dashboard",
        icon: "mdi-view-dashboard",
      },
    ],
    isLogged: false,
  },
  getters: {},
  mutations: {
    HANDLE_MINI(state, update) {
      state.mini = !update;
    },
    HANDLE_DRAWER(state, update) {
      state.drawer = !update;
    },
    HANDLE_LOGIN(state, update) {
      state.isLogged = !update;
    },
  },
  actions: {
    handleMini({ commit }, update) {
      commit("HANDLE_MINI", update);
    },
    handleDrawer({ commit }, update) {
      commit("HANDLE_DRAWER", update);
    },
    handleLogin({ commit }, update) {
      commit("HANDLE_LOGIN", update);
    },
  },
});

export default store;
