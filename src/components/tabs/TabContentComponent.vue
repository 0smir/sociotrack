<template>
    <ul class="tab-content-wrapper">
        <FollowerComponent v-for="follower in followers"
                                :key="follower.id"
                                :follower="follower"
        ></FollowerComponent>
    </ul>
</template>

<script>
    import FollowerComponent from "@/components/tabs/FollowerComponent.vue"
    export default {
        name: "TabContentComponent",
        props:{
            followers: Array
        },
        components: {
            FollowerComponent
        }
    }
</script>

<style lang="scss" scoped>
    .tab-content-wrapper{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        background: lightpink;
        @media(max-width: 768px){
            justify-content: space-between;
        }
        @media(max-width: 480px){
            width: 100%;
            max-width: 250px;
            margin: 0 auto;
        }

    }

</style>