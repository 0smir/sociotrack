<template>
    <div class="overlay" :class="{'open': isOpen}" @click="hideModal">
        <slot></slot>
    </div>
</template>

<script>

    export default {
        name: "ModalOverlay",
        props:{
            open: Boolean
        },
        computed:{
            isOpen(){
                return this.open;
            }
        },
        methods:{
            hideModal(e){
                let target = e.target;
                if(target === this.$el){
                    this.$emit('close-modal');
                }
            }
        }

    }
</script>

<style lang="scss" scoped>
    .overlay{
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 100;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background: rgba(0, 0, 0, 0.5);
        &.open{
            display: flex;
        }
    }

</style>