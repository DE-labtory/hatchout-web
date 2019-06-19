<template>
    <table class="tx-table">
        <thead class="tx-table-head">
        <tr class="tx-head">
            <th class="tx-head-time">
                {{Time}}
            </th>
            <th class="tx-head-hash">
                {{Hash}}
            </th>
            <th class="tx-head-from">
                {{From}}
            </th>
            <th class="tx-head-to">
                {{To}}
            </th>
            <th class="tx-head-purpose">
                {{Purpose}}
            </th>
            <th class="tx-head-txfee">
                {{TxFee}}
            </th>
            <th class="tx-head-status">
                {{Status}}
            </th>
        </tr>
        </thead>
        <tbody class="tx-table-body">
            <tr v-for="tx in txList" :class="tx-item">
                <td class="tx-item-time">
                    {{tx.timestamp}}
                </td>
                <td class="tx-item-hash">
                    {{tx.txHash}}
                </td>
                <td class="tx-item-from">
                    {{tx.fromNickname}}
                </td>
                <td class="tx-item-to">
                    {{tx.toNickname}}
                </td>
                <td class="tx-item-purpose">
                    {{tx.purpose}}
                </td>
                <td class="tx-item-txfee">
                    {{tx.txFee}}
                </td>
                <td class="tx-item-status">
                    {{tx.status}}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {Tx} from '@/types/tx';

    @Component
    export default class TxTable extends Vue {
        @Prop() private txList!: Tx[];
    }
</script>

<style scoped lang="scss">
    .tx-table {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .tx-table-head {

    }

    .tx-table-body {

    }

    .tx-head {
        width: 1140px;
        height: 64px;
        opacity: 0.3;
    }

    .tx-head-time {
        width: 125px;
        height: 18px;
        font-family: Ubuntu;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.3px;
        text-align: center;
        color: #ffffff;
    }

    .tx-head-hash {
        width: 113px;
        height: 18px;
        font-family: Ubuntu;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.3px;
        text-align: center;
        color: #ffffff;
    }

    .tx-head-from {
        width: 113px;
        height: 18px;
        font-family: Ubuntu;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.3px;
        text-align: center;
        color: #ffffff;
    }

    .tx-head-to {
        width: 90px;
        height: 18px;
        font-family: Ubuntu;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.3px;
        text-align: center;
        color: #ffffff;
    }

    .tx-head-purpose {
        width: 53px;
        height: 18px;
        font-family: Ubuntu;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.3px;
        text-align: center;
        color: #ffffff;
    }

    .tx-head-txfee {
        width: 98px;
        height: 18px;
        font-family: Ubuntu;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.3px;
        text-align: center;
        color: #ffffff;
    }

    .tx-head-status {
        width: 53px;
        height: 16px;
        font-family: Ubuntu;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: -0.3px;
        text-align: center;
        color: #ffffff;
    }

    .tx-item {
        width: 1135.9px;
        height: 48px;
        opacity: 0.3;
    }

    .tx-item-time {
        width: 125px;
        height: 18px;
        font-family: Ubuntu;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.3px;
        text-align: center;
        color: #ffffff;
    }

    .tx-item-hash {
        width: 113px;
        height: 18px;
        font-family: Ubuntu;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.3px;
        text-align: center;
        color: #ffffff;
    }

    .tx-item-from {
        width: 113px;
        height: 18px;
        font-family: Ubuntu;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.3px;
        text-align: center;
        color: #ffffff;
    }

    .tx-item-to {
        width: 90px;
        height: 18px;
        font-family: Ubuntu;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.3px;
        text-align: center;
        color: #ffffff;
    }

    .tx-item-purpose {
        width: 53px;
        height: 18px;
        font-family: Ubuntu;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.3px;
        text-align: center;
        color: #ffffff;
    }

    .tx-item-txfee {
        width: 98px;
        height: 18px;
        font-family: Ubuntu;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.3px;
        text-align: center;
        color: #ffffff;
    }

    .tx-item-status {
        width: 66px;
        height: 18px;
        background-color: #48ae3a;
    }
</style>
