<template>
    <div class="dashboard container">
        <div class="dashboard-header">
            <h2 class="title">{{userInfo.nik_name}}</h2>
            <button class="btn btn-add-profile" @click="toggleModal">+ Add Social Profile</button>
        </div>
        <TabsComponent :tabs="tabsList"
                        :initialActiveTab="initialTab"
                        @change-sort="changeReport"/>
        <TabContentComponent :followers="followers" :sorting="initialTab"></TabContentComponent>
        <ModalOverlay :open="isOpenModal"
                      @close-modal="toggleModal">
            <Modal @close-modal="closeModal"
                   :isOpen="isOpenModal">
            </Modal>
        </ModalOverlay>
    </div>
    
</template>

<script>
    import TabsComponent from "@/components/tabs/TabsComponent";
    import TabContentComponent from "@/components/tabs/TabContentComponent";
    import ModalOverlay from "@/components/modals/ModalOverlay";
    import Modal from "@/components/modals/Modal"

    import { mapGetters } from 'vuex';
    export default {
        name: "Dashboard",
        data(){
            return{
                tabsList: ['Last day', 'Week', 'Month'],
                initialTab: null,
                followers: Array,
                isOpenModal: false
            }
        },
        components:{
            TabsComponent,
            TabContentComponent,
            ModalOverlay,
            Modal
        },
        computed:{
           ...mapGetters({userInfo: 'userData', followersData: "userFollowers", weekUserInfo: 'weekFollowersInfo', monthUserInfo: 'monthFollowersInfo'}),
            isOpen(){
                return this.open;
            }
        },

        created() {
            this.followers = this.followersData
        },
        methods:{
            changeReport(tab){
                this.initialTab = tab;
                if(tab === 'Week'){
                   this.followers = this.weekUserInfo;
                }else if(tab === 'Month'){
                    this.followers =  this.monthUserInfo;
                }else{
                    this.followers = this.followersData;
                }
            },
            toggleModal(){
                this.isOpenModal = !this.isOpenModal;
            },
            closeModal(){
                this.toggleModal();
            }
        }

    }
</script>

<style lang="scss" scoped>
    .dashboard{
        &-header{
            display: flex;
            align-items: center;
            @media(max-width: 600px){
                flex-direction: column;
            }
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
            color: #1CAF5E;
            border: 1px solid #1CAF5E;
            width: 100%;
            max-width: 155px;
            transition: background .35s ease-in;
            span{
                margin-right: 3px;
            }
            &:hover{
                color: #fff;
                background: rgba(#1CAF5E, .5);
                transition: background .35s ease-in;
            }
            @media(max-width: 600px){
                margin: 0 auto 30px;
            }
        }
    }

</style>