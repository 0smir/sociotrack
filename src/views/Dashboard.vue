<template>
    <div class="dashboard">
        <div class="header">
            <h2 class="title">{{user_data.id}}</h2>
            <button class="btn btn-add-profile">+ Add Social Profile</button>
        </div>
        <TabsComponent :tabs="tabsList" />

    </div>
    
</template>

<script>
    import TabsComponent from "@/components/tabs/TabsComponent"
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
                tabsList:['Last day', 'Week', 'Month']
            }
        },
        components:{
            TabsComponent
        },
        computed:{
            // userFullName(){
            //     return this.user_data.firstName + ' ' + this.user_data.lastName
            // }
        }
    }
</script>

<style scoped>

</style>