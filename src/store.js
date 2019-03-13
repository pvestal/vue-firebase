import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
Vue.config.productionTip = true;
Vue.config.devTools = true;

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
  getters: {
    getUsers (state) {
      // return state.users.sort((userA, userB) => {
      //   return userA.displayName > userB.displayName;
      // });
      return state.users;
    },
    getOnlineUsers (state, getters) {
      return getters.getUsers.online = true;
    },
    getOnlineUsersLength (state, getters) {
      return getters.getOnlineUsers.length;
    },
    getUser (state) {
      return (userId) => {
        return state.users.find((user) => {
          return user.uid === userId;  
        });
      };
    },
    getUserById: state => uid => {
      return state.users.find(user => user.uid === uid);
    }
    
  },
  mutations: {
    SET_CURRENT_USER (state, payload) {
      state.currentUser = payload;
      state.currentUser.online = true;
      state.users.push(state.currentUser);
    },
    ADD_TO_FIREBASE(state, userId) {
      const date = new Date;
      const user = state.currentUser;
      user.online = true;
      const registration = {
        uid: userId,
        displayName: user.displayName,
        date: date.getMonth() + '/' + date.getDay()
      };
      state.users.push(registration);
    }
  },
  actions: {},

  
});
