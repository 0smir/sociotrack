<template>
    <div class="sidebar">
        <div class="user-info">
            <div class="img-wrapper"><img :src="require('@/assets/img/users/' + userInfo.img)" :alt="userFullName" class="ava"></div>
            <div class="info-description">
                <div class="summary" @click="showDetails">
                    <span class="user-name">{{userFullName}}</span>
                    <span class="chevron" :class="{open: detailsShow}"></span>
                </div>
                <span class="details followers" v-show="detailsShow">{{followersInfo}} Followers</span>
            </div>
        </div>
        <nav>
            <ul class="nav-list">
                <li class="nav-item">
                    <router-link exact to="/" class="nav-link">
                        <span class="nav-icon nav-icon--dashboard"></span> <span class="link-text">Dashboard</span></router-link></li>
                <li class="nav-item">
                    <router-link exact to="/feed" class="nav-link">
                        <span class="nav-icon nav-icon--feed"></span> <span class="link-text">Social Feed</span></router-link></li>
                <li class="nav-item">
                    <router-link exact to="/friends" class="nav-link">
                        <span class="nav-icon nav-icon--friends"></span> <span class="link-text">Invite Friends</span></router-link></li>
                <li class="nav-item">
                    <router-link exact to="/settings" class="nav-link">
                        <span class="nav-icon nav-icon--settings"></span> <span class="link-text">Settings</span></router-link></li>
                <li class="nav-item">
                    <button class="btn btn-logout">
                        <span class="nav-icon nav-icon--logout"></span> <span class="link-text">Log out</span></button></li>
            </ul>
        </nav>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: "SidebarNav",
        data(){
            return{
                imgPath: '../assets/img/users/',
                detailsShow: false
            }
        },
        computed:{
            ...mapGetters({userInfo: 'userData'}),

            userFullName(){
                return this.userInfo.firstName + ' ' + this.userInfo.lastName
            },
            followersInfo(){
                return this.followersFormatted(this.userInfo.followers);
            }
        },
        methods:{
            showDetails(){
                this.detailsShow = !this.detailsShow;
            },

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
    .sidebar{
        padding: 40px 20px 0;
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end: 3;
        background: linear-gradient(180deg, #2DBC80 0.55%, #53CC71 99.33%);
    }
    .user-info{
        display: flex;
        margin-bottom: 40px;
        .img-wrapper{
            display: flex;
            height: 45px;
            width: 45px;
            border-radius: 50%;
            justify-content: center;
            align-items: center;
            background: #fff;
        }
        .ava{
            width: 45px;
            clip-path: circle(20px at center);
        }
        .info-description{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            padding-left: 10px;
            width: 100%;
            max-width: calc(100% - 55px);
            .summary{
                display: block;
            }
            .summary{
                display: flex;
                align-items: center;
                color: #fff;
                font-weight: 400;
                font-size: 14px;
                line-height: 1.14;
                cursor: pointer;
                .user-name{
                    display: flex;
                    margin-right: 5px;
                }
                .chevron{
                    display: inline-block;
                    height: 20px;
                    width: 20px;
                    background: url("../assets/img/nav/shape.svg") no-repeat 50% 50%;
                    background-size: 60%;
                    transform: rotate(180deg);
                    &.open{
                        transform: rotate(0deg);
                    }
                }
            }
            .details{
                margin-top: 5px;
                font-weight: 700;
                font-size: 12px;
                color: rgba(0, 0, 0, 0.3);
            }

        }
    }
    .btn-logout,
    .nav-link{
        display: flex;
        align-items: center;
        padding: 15px 20px;
        font-size: 14px;
        color: #fff;
        border-radius: 5px;
        &:hover{
            background: rgba(#fff, .1);
            .nav-icon--dashboard{
                transform: scale(1.15);
            }
            .nav-icon--feed{
                transform: scale(1.15) rotateZ(-15deg);
            }
            .nav-icon--friends{
                transform: rotateY(720deg);
            }
            .nav-icon--settings{
                transform: rotate(-270deg);
            }
            .nav-icon--logout{
                transform: translateX(7px) skewX(-10deg);
            }
        }
    }
    .btn-logout{
        background: transparent;
        width: 100%;
        border: none;
        cursor: pointer;
    }
    .router-link-exact-active{
        background: rgba(#fff, .1);
    }

    .nav-icon{
        display: inline-block;
        margin-right: 15px;
        height: 20px;
        width: 20px;
        &--dashboard{
            background: url('../assets/img/nav/dashboard-icon.svg') no-repeat 50% 50%;
            transition: transform .35s ease-in-out;
        }
        &--feed{
            background: url('../assets/img/nav/social-feed-icon.svg') no-repeat 50% 50%;
            transition: transform .35s ease-in-out;
        }
        &--friends{
            background: url('../assets/img/nav/invite-friends-icon.svg') no-repeat 50% 50%;
            transition: transform .35s ease-in-out;
        }
        &--settings{
            background: url('../assets/img/nav/settings-icon.svg') no-repeat 50% 50%;
            transition: transform .35s ease-in-out;
        }
        &--logout{
            background: url('../assets/img/nav/log-out-icon.svg') no-repeat 50% 50%;
            transition: transform .35s ease-in-out;
        }
    }

</style>