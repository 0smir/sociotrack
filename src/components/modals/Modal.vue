<template>
    <div class="modal-wrapper">
        <div class="modal">
            <button class="btn close" @click="close"></button>
            <div class="modal-header">
                <h2 class="modal-title">Add Social Profile</h2>
            </div>
            <div class="modal-content">
                <div class="modal-description">
                    <p class="modal-description-text">Add new social profile for tracking</p>
                </div>
                <label for="social-url">URL</label>
                <input id="social-url" type="text" placeholder="https://twitter.com/username">
                <button class="btn btn-add-profile">Lookup</button>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Modal",
        props:{
            isOpen:Boolean
        },
        methods:{
            close(){
                this.$emit('close-modal');
            }
        },
        watch:{
            isOpen(){
                if(!this.isOpen){
                    this.$el.getElementsByTagName('input')[0].blur();
                }else{
                    this.$el.getElementsByTagName('input')[0].focus();
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .modal-wrapper{
        height: auto;
        padding: 15px 30px;
        margin: 115px auto 20px;
        width: 100%;
        max-width: 600px;
    }

    .modal{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        padding: 22px 25px 30px;
        border-radius: 4px;
        background: #fff;
    }
    .modal-content{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
    }

    .close{
        position: absolute;
        right: 10px;
        top: 10px;
        display: block;
        width: 30px;
        height: 30px;
        border: none;
        background: url("../../assets/img/close.svg") transparent no-repeat 50% 50%;
        background-size: 35%;
    }
    .modal-title{
        margin-bottom: 25px;
        text-align: left;
    }
    .modal-description-text{
        font-size: 14px;
        line-height: 1.2;
        color: #4F4F4F;
        text-align: left;
        margin: 0 0 20px;
    }
    label{
        display: block;
        margin-bottom: 12px;
        font-weight: 700;
        text-align: left;
    }
    input{
        display: block;
        padding: 10px 20px 10px 15px;
        border: 1px solid #C5CFC9;
        border-radius: 6px;
        margin-bottom: 20px;
        &::placeholder{
            color: #B6B6B6;
        }
        &:focus{
            outline-color: #1CAF5E;
        }
    }
    .btn-add-profile{
        width: 100%;
        max-width: 115px;
        align-self: flex-end;
        height: 40px;
        background: linear-gradient(180deg, #53CD72 0%, #1CAF5E 100%);
        border-radius: 6px;
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