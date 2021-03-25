<template>
    <ul class="tabs-list">
        <TabItemComponent v-for="tab in tabs"
                          :tab="tab"
                          :isActive="tab == currentTab"
                          @change-active="changeElement"
        >
        </TabItemComponent>
    </ul>
    
</template>

<script>
    import TabItemComponent from "@/components/tabs/TabItemComponent"
    export default {
        name: "TabsComponent",
        components:{
            TabItemComponent
        },
        props:{
            tabs: Array,
            initialActiveTab: String
        },
        computed:{
            currentTab(){
                return this.initialActiveTab ? this.tabs.find((tab) => tab === this.initialActiveTab) : this.tabs[0]
            }
        },
        methods:{
            changeElement(tab){
                this.$emit('change-sort', tab);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tabs-list{
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
        width: 100%;
        max-width: 250px;
    }

</style>