<template>
    <li class="tab-item" :class="{active: isActive}" @click="changeActive">
        {{tab}}
    </li>
</template>

<script>
    export default {
        name: "TabItemComponent",
        props:{
            tab:String,
            isActive: Boolean
        },
        methods:{
            changeActive(){
                this.$emit('change-active', this.tab);
            }

        }
    }
</script>

<style lang="scss" scoped>
    .tab-item{
        display: block;
        padding: 8px 0;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
        border-bottom: 4px solid transparent;
        &.active{
            border-bottom: 4px solid #B8E986;
            border-radius: 2px;
        }
    }

</style>