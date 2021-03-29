<template>
    <div class="follower-item">
<!--        <router-link to="/" class="nav-link"></router-link>-->
        <div class="network-info" :class="`${getNetworkName}`">
            <div class="network-logo">
                <img :src="require('@/assets/img/social_icons/' + networkLogo)" :alt="getNetworkName">
            </div>
            <div class="followers-info">
                <span class="followers-count">{{followersCount}}</span>
                <span class="text">{{followers}}</span>
            </div>
            <div class="followers-update" v-if="followersUpdates">
                <span class="update update--add" v-if="followersUpdates.add > 0">+{{followersUpdates.add}}</span>
                <span class="update update--loss" v-if="followersUpdates.loss > 0">-{{followersUpdates.loss}}</span>
            </div>
        </div>
        <div class="user-info">
            <div class="avatar-wrapper">
                <img :src="require('@/assets/img/users/' + follower.img)" alt="avatar" class="avatar">
            </div>
            <div class="user-description">
                <span class="network-name">{{follower.social_network.title}}</span>
                <span class="user-nik">{{follower.nik_name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FollowerComponent",
        props:{
            follower: Object
        },
        computed:{
            getNetworkName(){
                let name = (this.follower.social_network.title).toLowerCase();
                let chartPos = name.indexOf('+', 0);
                 if(chartPos > 0){
                   name = name.slice(0, chartPos);
                 }
                return name;
            },
            followersCount(){
                return this.followersFormatted(this.follower.social_network.followers_info.total_count);
            },
            networkLogo(){
                return this.follower.social_network.logo;
            },
            followers(){
                return this.follower.social_network.followers_info.followers;
            },
            followersUpdates(){
                return this.follower.social_network.followers_info.followers_updates;
            }
        },
        methods:{
            followersFormatted(followersNum){
                let followersCountConverted;
                let followersCountStr = followersNum.toString().split('');
                followersCountStr.reverse();
                followersCountStr.splice(3, 0, ",").reverse();
                followersCountStr.reverse();
                followersCountConverted = followersCountStr.join('');

                return followersCountConverted;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .network-info{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        box-sizing: border-box;
        padding: 20px 10px 20px 20px;
        margin-bottom: 10px;
        width: 200px;
        height: 200px;
        color: #fff;
        box-shadow: 0 2px 9px rgba(0, 0, 0, 0.03);
        border-radius: 10px;
        transition: transform .35s ease;
        &:hover{
            transform: scale(1.04);
            transition: transform .35s ease;
        }
        @media(max-width: 992px){
            width: 175px;
            height: 175px;
        }
    }
    .facebook{
        background: linear-gradient(180deg, #39579A 0%, #2C4479 97.23%), #39579A;
    }
    .twitter{
        background: linear-gradient(180deg, #059FF5 0%, #059FC3 100%), #059FF5;
    }
    .instagram{
        background: linear-gradient(195deg, rgba(146,45,253,1) 1%, rgba(253,45,175,1) 37%, rgba(253,118,45,1) 74%, rgba(253,184,45,1) 96%, rgba(253,233,45,1) 100%), rgb(146,45,253);
    }
    .linkedin{
        background: linear-gradient(180deg, #059FF5 0%, #059FC3 100%), #059FF5;
    }
    .youtube{
        background: linear-gradient(180deg, #CE1312 0%, #B01312 100%), #CE1312;
    }
    .snapchat{
        background: linear-gradient(180deg, #FFFE00 0%, #F3F200 96.43%), #FFFE00;
        color: #000;
    }
    .google{
        background: linear-gradient(180deg, #F93F2D 0%, #C73F2D 100%), #F93F2D;
    }
    .vine{
        background: linear-gradient(180deg, #00B687 0%, #008E87 100%), #00B687;
    }
    .network-logo{
        height: 20px;
        margin-bottom: 20px;
        @media(max-width: 992px){
            margin-bottom: 15px;
        }
    }
    .followers-info{
        display: flex;
        flex-direction: column;
        margin-bottom: auto;
        font-family: 'Oswald', sans-serif;
        font-weight: normal;
    }
    .followers-count{
        font-size: 42px;
        font-weight: 700;
        font-family: 'Oswald', sans-serif;
        line-height: 1.48;
        @media(max-width: 992px){
            font-size: 42px;
        }
    }
    .text{
        font-size: 11px;
        line-height: 1.45;
        letter-spacing: 2.5px;
        text-transform: uppercase;
        text-align: left;
    }
    .followers-update{
        font-size: 26px;
        line-height: 1;
        align-self: flex-end;
        .update{
            display: inline-flex;
            position: relative;
            padding-right: 12px;
            &::after{
                display: block;
                position: absolute;
                right: 0;
                bottom: 5px;
                width: 7px;
                height: 12px;
                content: '';
                background: url('../../assets/img/arrow.svg') no-repeat 50% 50%;
            }
            &--add{
                &::after{
                    transform: rotate(180deg);
                }
            }
        }
    }

    .user-info{
        display: flex;
        width: 200px;
        @media(max-width: 992px){
            width: 175px;
        }
        .avatar-wrapper{
            width: 35px;
            height: 35px;
            margin-right: 10px;
            border-radius: 4px;
            img {
                object-fit: cover;
            }
        }
    }
    .user-description{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 13px;
        color: #333;
        width: 100%;
        .network-name,
        .user-nik{
            display: block;
            width: 100%;
            max-width: calc(100% - 10px);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: left;
        }
        .network-name{
            color: rgba(#333, .5);
        }
    }


</style>