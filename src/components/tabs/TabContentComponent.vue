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
        grid-column-gap: 30px;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }

</style>