<template>
    <div class="tx-table">
        <div style="width:1140px;">
            <div class="tx-table-head" style="padding: 8px 0;">
                <div class="time-header">
                    <span class="header-text">TIME</span>
                </div>
                <div class="hash-header">
                    <span class="header-text">TXN Hash</span>
                </div>
                <div class="from-header">
                    <span class="header-text">From</span>
                </div>
                <div class="to-header">
                    <span class="header-text">To</span>
                </div>
                <div class="purpose-header">
                    <span class="header-text">Purpose</span>
                </div>
                <div class="fee-header">
                    <span class="header-text">TxFee(eth/eos)</span>
                </div>
                <div class="status-header">
                    <span class="header-text">Status</span>
                </div>
            </div>
            <div class="tx-table-body">
                <div class="table-item" v-for="tx in txList">
                    <div class="item">
                        <div class="time-body">
                            <span class="body-text">{{tx.timestamp}}</span>
                        </div>
                        <div class="hash-body">
                            <span class="body-text">{{tx.txHash}}</span>
                        </div>
                        <div class="from-body">
                            <span class="body-text">{{tx.fromNickname}}</span>
                        </div>
                        <div class="to-body">
                            <span class="body-text">{{tx.toNickname}}</span>
                        </div>
                        <div class="purpose-body">
                            <span class="body-text">{{tx.purpose}}</span>
                        </div>
                        <div class="fee-body">
                            <span class="body-text">{{tx.txFee}}</span>
                        </div>
                        <div class="status-body">
                            <StatusBox v-bind:status="tx.status"></StatusBox>
                        </div>
                    </div>
                    <div class="item-line"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {Tx} from '@/types/tx';
    import StatusBox from "@/components/boxes/StatusBox.vue";

    @Component({
        components: {StatusBox},
    })
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

        &-head {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            .header-text {
                font-family: Ubuntu;
                font-size: 16px;
                font-weight: bold;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: -0.28px;
                text-align: center;
                color: #ffffff;
            }

            .time-header {
                width: 152px;
                height: 48px;
                border-radius: 28px;
                background-color: rgba(255, 255, 255, 0.2);

                margin-right: 8px;
            }

            .hash-header {
                width: 192px;
                height: 48px;
                border-radius: 28px;
                background-color: rgba(255, 255, 255, 0.2);

                margin-right: 8px;

            }

            .from-header {
                width: 152px;
                height: 48px;
                border-radius: 28px;
                background-color: rgba(255, 255, 255, 0.2);

                margin-right: 8px;
            }

            .to-header {
                width: 152px;
                height: 48px;
                border-radius: 28px;
                background-color: rgba(255, 255, 255, 0.2);

                margin-right: 8px;
            }

            .purpose-header {
                width: 192px;
                height: 48px;
                border-radius: 28px;
                background-color: rgba(255, 255, 255, 0.2);

                margin-right: 8px;
            }

            .fee-header {
                width: 152px;
                height: 48px;
                border-radius: 28px;
                background-color: rgba(255, 255, 255, 0.2);

                margin-right: 8px;
            }

            .status-header {
                width: 100px;
                height: 48px;
                border-radius: 28px;
                background-color: rgba(255, 255, 255, 0.2);
            }
        }

        &-body {
            .table-item {
                .item {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;

                    .body-text {
                        font-family: Ubuntu;
                        font-size: 16px;
                        font-weight: normal;
                        font-style: normal;
                        font-stretch: normal;
                        line-height: normal;
                        letter-spacing: -0.28px;
                        text-align: center;
                        color: #ffffff;
                    }

                    .time-body {
                        width: 152px;
                        height: 48px;

                        margin-right: 8px;
                    }

                    .hash-body {
                        width: 192px;
                        height: 48px;

                        margin-right: 8px;
                    }

                    .from-body {
                        width: 152px;
                        height: 48px;

                        margin-right: 8px;
                    }

                    .to-body {
                        width: 152px;
                        height: 48px;

                        margin-right: 8px;
                    }

                    .purpose-body {
                        width: 192px;
                        height: 48px;

                        margin-right: 8px;
                    }

                    .fee-body {
                        width: 152px;
                        height: 48px;

                        margin-right: 8px;
                    }

                    .status-body {
                        width: 100px;
                        height: 48px;
                    }
                }

                .item-line {
                    width: 1140px;
                    height: 1px;
                    opacity: 0.3;
                    background-color: #ffffff;
                }
            }
        }
    }
</style>
