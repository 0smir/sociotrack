<template>
    <div class="dashboard container">
        <div class="dashboard-header">
            <h2 class="title">{{userInfo.nik_name}}</h2>
            <button class="btn btn-add-profile">+ Add Social Profile</button>
        </div>
        <TabsComponent :tabs="tabsList"
                        :initialActiveTab="initialTab"
                        @change-sort="changeReport"/>
        <TabContentComponent :followers="followers"></TabContentComponent>


    </div>
    
</template>

<script>
    import TabsComponent from "@/components/tabs/TabsComponent";
    import TabContentComponent from "@/components/tabs/TabContentComponent";
    import { mapGetters } from 'vuex';
    export default {
        name: "Dashboard",
        data(){
            return{
                user_data:{
                    firstName: "Abhisek",
                    lastName: "Das",
                    id: "@abhisek.das",
                    followers: "10968"
                },
                tabsList:['Last day', 'Week', 'Month'],
                initialTab: null
            }
        },
        computed:{
           ...mapGetters({userInfo: 'userData', followers: "userFollowers"})
        },
        components:{
            TabsComponent,
            TabContentComponent
        },
        methods:{
            changeReport(tab){
                this.initialTab = tab;
                console.log('will sort data some how');
            }
        }

    }
</script>

<style lang="scss" scoped>
    .dashboard{
        &-header{
            display: flex;
            align-items: center;
            .title{
                margin-right: auto;
                font-family: 'Roboto', sans-serif;
                font-weight: 700;
                font-size: 24px;
                line-height: 28px;
                color: #1CAF5E;
            }
        }
        .btn-add-profile{
            display: flex;
            padding: 10px 15px;
            background: transparent;
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 14px;
            line-height: 1.142;
            color: #1CAF5E;
            border: 1px solid #1CAF5E;
            border-radius: 4px;
            width: 100%;
            max-width: 155px;
        }
    }

</style>