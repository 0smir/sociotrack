<template>
    <div class="modal-wrapper">
        <div class="modal">
            <button class="btn close" @click="close"></button>
            <div class="modal-header">
                <h2 class="modal-title">Logout?</h2>
            </div>
            <div class="modal-content">
                <div class="modal-description">
                    <p class="modal-description-text">Stay with us ;)</p>
                </div>
                <div class="btn-wrapper">
                    <button class="btn btn-logout">Logout</button>
                    <button class="btn btn-cancel" @click="close">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LogoutModal",
        props:{
            isOpen:Boolean
        },methods:{
            close(){
                this.$emit('close-modal');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .modal-title{
        color: #000;
        text-align: center;
    }
    .modal-description-text{
        text-align: center;
    }
    .btn-wrapper{
        display: flex;
        justify-content: center;
    }
    .btn-logout,
    .btn-cancel{
        width: 100%;
        align-self: flex-end;
        height: 40px;
        border-radius: 6px;
    }

    .btn-logout{
        margin-right: 20px;
        color: #1CAF5E;
        border: 1px solid #1CAF5E;
        max-width: 115px;
        transition: background .35s ease-in;
        &:hover{
            color: #fff;
            background: rgba(#1CAF5E, .5);
            transition: background .35s ease-in;
        }
    }
    .btn-cancel{
        background: linear-gradient(180deg, #53CD72 0%, #1CAF5E 100%);
        max-width: 155px;
        color: #fff;
        border: 1px solid transparent;
        transition: all .35s ease;
        &:hover{
             background: transparent;
             border: 1px solid #1CAF5E;
             color: #1CAF5E;
             transition: all .35s ease;
         }
    }

</style>