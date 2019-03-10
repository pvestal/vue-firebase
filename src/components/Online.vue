<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="indigo" dark>
          <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->

          <v-toolbar-title>Users ({{totalOnline}}) Online</v-toolbar-title>

          <v-spacer></v-spacer>

          <!--<v-btn icon>-->
          <!--  <v-icon>search</v-icon>-->
          <!--</v-btn>-->

          <!--<v-btn icon>-->
          <!--  <v-icon>more_vert</v-icon>-->
          <!--</v-btn>-->
        </v-toolbar>
        <v-list>
          <v-list-tile
            v-for="user in users"
            :key="user.uid"
            avatar
            @click=""
          >
            <v-list-tile-action>
              <v-icon v-if="user.online" color="pink">star</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title v-text="user.displayName"></v-list-tile-title>
              <span @click.prevent="addOnline(user)">Make Online</span>
            </v-list-tile-content>

            <v-list-tile-avatar>
              <img :src="user.avatar">
            </v-list-tile-avatar>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>
    <!--<ul>-->
        <!--<li v-for="user in users" class="user" :key="user['.key']">-->
    <!--    <li v-for="user in users" :key="user.uid">-->
          <!--<span>{{user.name}} - {{user.email}}</span>-->
    <!--      N:{{user.displayName}}-Online{{user.online}} <button @click.prevent="addOnline(user)">Make Online</button>-->
    <!--    </li>-->
    <!--</ul>-->

<script>
    export default {
        name: 'online',
        computed: {
            users() {
                return this.$store.state.users;
            },
            totalOnline() {
                return this.$store.getters.getNumberUsersOnline;
            }
        },
        methods: {
            addOnline(user) {
                this.$store.state.users.push({uid: user.uid, displayName: user.displayName, online: true, 
                avatar: user.avatar});
                //this.$store.mutations.MAKE_ONLINE(user);
            },
            
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
