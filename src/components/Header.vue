<template>
    <header>
        <div class="logo-wrapper">
            <router-link to="/" class="logo">
                <img src="../assets/img/sociotrack-logo.svg" alt="logo">
            </router-link>
        </div>
        <div class="right-header-content">
            <router-link to="/" class="notification">
                <span class="notification_indicator" v-if="notification">{{notification}}</span>
            </router-link>
            <button class="btn btn-search"></button>
        </div>
    </header>
    
</template>

<script>
    export default {
        name: "Header",
        data(){
            return{
                notification: 22
            }
        }
    }
</script>

<style lang="scss" scoped>
    header{
        display: flex;
        box-sizing: border-box;
        grid-column-start: 1;
        grid-column-end: 3;
        padding-right: 15px;
        .logo-wrapper{
            display: flex;
            position: relative;
            justify-content: center;
            align-items: center;
            width: 100%;
            max-width: 240px;
            background:  #2DBC80;
            margin-right: auto;
            &::after{
                display: block;
                position: absolute;
                content: '';
                height: 100%;
                width: 100%;
                background: rgba(#fff, 0.1);
            }
            @media(max-width: 992px){
                max-width: 180px;
            }
            @media(max-width: 768px){
                max-width: 160px;
            }
        }
        .right-header-content{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .notification{
            position: relative;
            display: block;
            margin-right: 20px;
            height: 30px;
            width: 30px;
            border-radius: 3px;
            &:after{
                position: absolute;
                display: block;
                content: '';
                height: 30px;
                width: 30px;
                background: url("../assets/img/sub_nav/notification-icon.svg") no-repeat 50% 50%;
                background-size: 60%;
                transform: rotate(0);
                will-change: transform;
            }

            &:hover{
                &:after{
                    animation: bell .3s linear 2;
                }
            }
            &_indicator{
                position: absolute;
                right: -4px;
                z-index: 1;
                display: block;
                height: 17px;
                width: 17px;
                border-radius: 50%;
                color: #fff;
                background: #1DCE6C;
                font-size: 10px;
                font-weight: 700;
                line-height: 17px;
                text-align: center;
                vertical-align: middle;
            }
        }
        .btn-search{
            position: relative;
            display: block;
            margin-right: 20px;
            height: 30px;
            width: 30px;
            background: url("../assets/img/sub_nav/search-icon.svg") no-repeat 50% 50%;
            background-size: 60%;
            border: none;
            border-radius: 3px;
            &:hover{
                background-color: rgba(#1CAF5E, .3);
            }
        }
    }
    @keyframes bell{
        from{transform: rotate(0);}
        25%{ transform: rotate(-25deg);}
        50%{transform: rotate(25deg);}
        to{ transform: rotate(0);}

    }

</style>