<template>
    <div class="follower-item">
<!--        <router-link to="/" class="nav-link"></router-link>-->
        <div class="network-info" :class="`${getNetworkName}`">
            <div class="network-logo"></div>
            <div class="followers-info">
                <span class="followers-count">{{followersCount}}</span>
                <span class="text">followers</span>
            </div>
            <div class="followers-update"></div>
        </div>
        <div class="user-info">
            <div class="avatar-wrapper">

                <img :src="require('@/assets/img/users/' + follower.img)" alt="avatar" class="avatar">
            </div>
            <span class="network-name">{{follower.social_network}}</span>
            <span class="user-nik">{{follower.nik_name}}</span>
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
                let name = (this.follower.social_network).toLowerCase();
                let chartPos = name.indexOf('+', 0);
                 if(chartPos > 0){
                   name = name.slice(0, chartPos);
                 }
                return name;
            },
            followersCount(){
                return this.followersFormatted(this.follower.followers_info.total_count);
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
        box-sizing: border-box;
        padding: 20px;
        width: 200px;
        height: 200px;

        box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.03);
        border-radius: 10px;
    }
    .facebook{
        background: linear-gradient(180deg, #39579A 0%, #2C4479 97.23%), #39579A;
    }
    .twitter{
        background: linear-gradient(180deg, #059FF5 0%, #059FC3 100%), #059FF5;
    }
    .instagram{

    }
    .linkedin{
    background: linear-gradient(180deg, #059FF5 0%, #059FC3 100%), #059FF5;
    }
    .youtube{
        background: linear-gradient(180deg, #CE1312 0%, #B01312 100%), #CE1312;
    }
    .snapchat{
        background: linear-gradient(180deg, #FFFE00 0%, #F3F200 96.43%), #FFFE00;
    }
    .google{
        background: linear-gradient(180deg, #F93F2D 0%, #C73F2D 100%), #F93F2D;
    }
    .vine{
        background: linear-gradient(180deg, #00B687 0%, #008E87 100%), #00B687;
    }

</style>