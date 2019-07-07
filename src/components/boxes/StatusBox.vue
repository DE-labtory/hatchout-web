<template>
    <div class="status-box">
        <span v-bind:status="status"
              :class="{'success': status==='success', 'fail': status==='fail'}">
            {{status}}
        </span>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {Tx} from '@/types/tx';

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

        .success {
            width: 66px;
            height: 18px;

            background-color: #48ae3a;

            font-family: Ubuntu;
            font-size: 16px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1;
            letter-spacing: -0.28px;
            text-align: center;
            color: #ffffff;
        }

        .fail {
            width: 66px;
            height: 18px;

            background-color: #fecb00;

            font-family: Ubuntu;
            font-size: 16px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1;
            letter-spacing: -0.28px;
            text-align: center;
            color: #aa4c4c;
        }
    }
</style>
