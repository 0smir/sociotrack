<template>
    <ul class="tabs-list">
        <TabItemComponent v-for="tab in tabs"
                          :tab="tab"
                          :isActive="tab == currentTab"
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
        }
    }
</script>

<style scoped>

</style>