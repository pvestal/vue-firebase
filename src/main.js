import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";
const fb = require('./firebaseConfig.js')

Vue.config.productionTip = true;
Vue.config.devTools = true;

// handle page reloads
let app;

const initialize = () => {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }

};

fb.auth().onAuthStateChanged(user => {
  if (user) {
    store.commit('setCurrentUser', user);
  } else {
    store.commit('setCurrentUser', null);
  }
  
  initialize();
  
});
