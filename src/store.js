import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
Vue.config.productionTip = true;

export default new Vuex.Store({
  state: {
    currentUser: null
  },
  mutations: {
    setCurrentUser (state, payload) {
      state.currentUser = payload;
    }
  },
  actions: {}
});
