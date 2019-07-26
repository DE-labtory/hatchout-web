<template>
    <div class="status-box">
        <div v-bind:status="status" :class="{'success': status==='success', 'fail': status==='fail'}">
            <span class="status-font">{{status}}</span>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class StatusBox extends Vue {
        @Prop() private status!: string;
    }
</script>

<style scoped lang="scss">
    .status-box {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        .horizontal-center-align {
            display: flex;
            flex-direction: column;
            vertical-align: middle;
            justify-content: center;
        }

        .status-font {
            font-family: Ubuntu;
            font-size: 16px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1;
            letter-spacing: -0.28px;
            text-align: center;
        }

        .success {
            @extend .horizontal-center-align;
            @extend .status-font;

            width: 66px;
            height: 20px;

            color: #ffffff;
            background-color: #48ae3a;
        }

        .fail {
            @extend .horizontal-center-align;
            @extend .status-font;

            width: 66px;
            height: 20px;

            color: #aa4c4c;
            background-color: #fecb00;
        }
    }
</style>
