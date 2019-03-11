<!--<template>-->
<!--    <div>-->
<!--        <h1>Profile</h1>-->
<!--        <p>Current User: {{currentUser}}</p>-->
        
<!--    </div>-->
<!--</template>-->
<template>
    <p>Current User: {{currentUser}}</p>-->
  <v-form>
    <v-container>
      <v-layout row wrap>

        <v-flex xs12 sm6>
          <v-text-field
          
            label="UID"
            disabled
          >{{currentUser.uid}}</v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
          <v-text-field
            label="Display Name"
            readonly
          >{{currentUser.displayName</v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
          <v-text-field
            value="John Doe"
            label="Solo"
            solo
            disabled
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
          <v-text-field
            value="John Doe"
            label="Solo"
            solo
            readonly
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
          <v-text-field
            value="John Doe"
            label="Box"
            box
            disabled
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
          <v-text-field
            value="John Doe"
            label="Box"
            box
            readonly
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
          <v-text-field
            value="John Doe"
            label="Outline"
            outline
            disabled
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6>
          <v-text-field
            value="John Doe"
            label="Outline"
            outline
            readonly
          ></v-text-field>
        </v-flex>

      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
    export default {
        name: 'profile',
        computed: {
            currentUser() {
                return this.$store.state.currentUser;
            }
        }
    };
    
</script>