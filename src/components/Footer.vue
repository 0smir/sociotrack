<template>
    <footer>
        <ul class="footer-link-list">
            <li class="footer-link-item"><router-link exact to="/about" class="footer-link">About</router-link></li>
            <li class="footer-link-item"><router-link exact to="/terms" class="footer-link">Terms</router-link></li>
            <li class="footer-link-item"><router-link exact to="/privacy" class="footer-link">Privacy</router-link></li>
            <li class="footer-link-item"><router-link exact to="/help" class="footer-link">Help</router-link></li>
            <li class="footer-link-item"><router-link exact to="/report" class="footer-link">Report</router-link></li>
        </ul>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss" scoped>
    footer{
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 3;
        grid-row-end: 4;
        background: #53CC71;
        @media (max-width: 768px){
            grid-column-start: 1;
            grid-column-end: 3;
        }
    }
    .footer-link-list{
        display: flex;
        position: relative;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0 auto;
        padding: 20px 10px 0;
        width: 100%;
        max-width: 170px;
        border-top: 1px solid rgba(0, 0, 0, .07);
        @media (max-width: 768px){
            max-width: 300px;
            border-top: none;
        }
    }
    .footer-link-item{
        margin-bottom: 14px;
        width: calc(100% / 3);
        @media (max-width: 768px){
            width: calc(100% / 5);
        }
    }
    .footer-link{
        display: flex;
        justify-content: center;
        padding: 5px;
        color: #147A42;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 1.17;
        &:hover{
            text-decoration: underline;
        }
    }
</style>