<template>
    <div>
        <h1>Profile</h1>
        <p>Current User: {{currentUser}}</p>
    </div>
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