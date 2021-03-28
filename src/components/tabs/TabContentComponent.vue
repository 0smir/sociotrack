<template>
    <div class="tab-content-wrapper">
        <FollowerComponent v-for="follower in followers"
                                :key="follower.id"
                                :follower="follower"
        ></FollowerComponent>
    </div>
</template>

<script>
    import FollowerComponent from "@/components/tabs/FollowerComponent"
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
        display: grid;
        grid-row-gap: 20px;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
        justify-items: center;
        @media(max-width: 1200px){
            grid-template-columns: repeat(3, 1fr);
        }
        @media(max-width: 768px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media(max-width: 600px){
            grid-template-columns:  1fr;
        }
    }

</style>