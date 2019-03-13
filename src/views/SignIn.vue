<template>
    <div id="app">
  <v-app id="inspire">
    <v-content >
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="email" label="Email" v-model="email" type="email"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" v-model="password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click.stop="googleSignIn">Google</v-btn>
                <v-btn color="primary" @click.stop="signIn">Login</v-btn>
              </v-card-actions>
            </v-card>
            <div class="message is-danger" v-if="error">
                <div class="message-body">
                    {{error}}
                </div>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</div>

</template>

<script>
import database from '@/services/database';

    export default {
      name: 'signin',
      data() {
          return {
              email: '',
              password: '',
              error: '',
              google: false,
          };
      },
      components: {
      },
      methods:  {
          async signIn () {
              let result = await database.signIn(this.email, this.password);
              
              if (result.message) {
                  this.error = result.message;
              } else {
                  console.log('User is signed in.');
                  this.$router.push('/profile');
              }
          },
          async googleSignIn() {
            let result = await database.googleLogin();
              if (result.message) {
                  this.error = result.message;
              } else {
                  console.log('User is signed in.');
                  this.$router.push('/profile');
              }
          }
      }
    };
</script>