<template>
    <li class="tab-item" :class="{active: isActive}">
        {{tab}}
    </li>
</template>

<script>
    export default {
        name: "TabItemComponent",
        props:{
            tab:String,
            isActive: Boolean
        }
    }
</script>

<style scoped>

</style>