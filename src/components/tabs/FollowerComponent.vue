<template>
    <div class="follower-item">{{follower.nik_name}}</div>
    
</template>

<script>
    export default {
        name: "FollowerComponent",
        props:{
            follower: Object
        }
    }
</script>

<style scoped>

</style>