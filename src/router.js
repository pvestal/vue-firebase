import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import SignUp from "./views/SignUp.vue";
import SignIn from "./views/SignIn.vue";
import Profile from "./views/Profile.vue";
import Online from "@/components/Online.vue";
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import Settings from '@/components/Settings'
import firebase from 'firebase'
import store from "@/store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '*', 
      redirect: '/dashboard'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
          requiresAuth: true
      }
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings,
      meta: {
          requiresAuth: true
      }
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp
    },
    {
      path: "/signin",
      name: "signin",
      component: SignIn
    },
    {
      path: "/online",
      name: "online",
      component: Online
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/about",
      name: "about",
    }
  ]
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    const currentUser = firebase.auth().currentUser

    if (requiresAuth && !currentUser) {
        next('/login')
    } else if (requiresAuth && currentUser) {
        next()
    } else {
        next()
    }
})

// router.beforeEach((to, from, next) => {
//   if(to.meta.requiresAuth && !store.state.currentUser) {
//     next({
//       path: '/login'
//     })
//   } else {
//     next()
//   }
// });

export default router
