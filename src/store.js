import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
Vue.config.productionTip = true;

export default new Vuex.Store({
  state: {
    currentUser: null,
    users: [
      {uid: 'oiaud873498732', displayName: 'Patrick', online: true, avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg'},
      {uid: '67asd8a76sdadc', displayName: 'Dean', online: false, avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg'},
      {uid: '798sd7fsdf7vlk', displayName: 'Logan', online: false, avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg'},
      {uid: 'hj34l3u2n34iu2', displayName: 'Sofi', online: true, avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg'},
      {uid: 's8df9dfbvsjher', displayName: 'Anna', online: false, avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg'},
      
    ]
  },
  mutations: {
    SET_CURRENT_USER (state, payload) {
      state.currentUser = payload;
      state.users.push(state.currentUser);
    }
  },
  actions: {}
});
