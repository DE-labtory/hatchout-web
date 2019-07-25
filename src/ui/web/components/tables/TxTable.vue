<template>
    <div class="tx-table">
        <div style="width:1140px;">
            <div class="tx-table-head" style="padding: 8px 0;">
                <div class="time-header">
                    <div class="vertical-center-align">
                        <span class="header-text">TIME</span>
                    </div>
                </div>
                <div class="hash-header">
                    <div class="vertical-center-align">
                        <span class="header-text">TXN Hash</span>
                    </div>
                </div>
                <div class="from-header">
                    <div class="vertical-center-align">
                        <span class="header-text">From</span>
                    </div>
                </div>
                <div class="to-header">
                    <div class="vertical-center-align">
                        <span class="header-text">To</span>
                    </div>
                </div>
                <div class="purpose-header">
                    <div class="vertical-center-align">
                        <span class="header-text">Purpose</span>
                    </div>
                </div>
                <div class="fee-header">
                    <div class="vertical-center-align">
                        <span class="header-text">TxFee(eth/eos)</span>
                    </div>
                </div>
                <div class="status-header">
                    <div class="vertical-center-align">
                        <span class="header-text">Status</span>
                    </div>
                </div>
            </div>
            <div class="tx-table-body">
                <div class="table-item" v-for="tx in txList">
                    <div class="item">
                        <div class="time-body">
                            <div class="vertical-center-align">
                                <span class="body-text">{{tx.timestamp}}</span>
                            </div>
                        </div>
                        <div class="hash-body">
                            <div class="vertical-center-align">
                                <span class="body-text">{{tx.txHash}}</span>
                            </div>
                        </div>
                        <div class="from-body">
                            <div class="vertical-center-align">
                                <span class="body-text">{{tx.fromNickname}}</span>
                            </div>
                        </div>
                        <div class="to-body">
                            <div class="vertical-center-align">
                                <span class="body-text">{{tx.toNickname}}</span>
                            </div>
                        </div>
                        <div class="purpose-body">
                            <div class="vertical-center-align">
                                <span class="body-text">{{tx.purpose}}</span>
                            </div>
                        </div>
                        <div class="fee-body">
                            <div class="vertical-center-align">
                                <span class="body-text">{{tx.txFee}}</span>
                            </div>
                        </div>
                        <div class="status-body">
                            <div class="vertical-center-align">
                                <StatusBox v-bind:status="tx.status"></StatusBox>
                            </div>
                        </div>
                    </div>
                    <div class="item-line"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import StatusBox from "@/ui/web/components/boxes/StatusBox.vue";
    import {Tx} from '@/domain/types/tx';

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

        .vertical-center-align {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .horizontal-center-align {
            display: flex;
            flex-direction: row;
            vertical-align: middle;
            justify-content: center;
        }

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
                @extend .horizontal-center-align;

                width: 152px;
                height: 48px;
                border-radius: 28px;
                background-color: rgba(255, 255, 255, 0.2);

                margin-right: 8px;
            }

            .hash-header {
                @extend .horizontal-center-align;

                width: 192px;
                height: 48px;
                border-radius: 28px;
                background-color: rgba(255, 255, 255, 0.2);

                margin-right: 8px;

            }

            .from-header {
                @extend .horizontal-center-align;

                width: 152px;
                height: 48px;
                border-radius: 28px;
                background-color: rgba(255, 255, 255, 0.2);

                margin-right: 8px;
            }

            .to-header {
                @extend .horizontal-center-align;

                width: 152px;
                height: 48px;
                border-radius: 28px;
                background-color: rgba(255, 255, 255, 0.2);

                margin-right: 8px;
            }

            .purpose-header {
                @extend .horizontal-center-align;

                width: 192px;
                height: 48px;
                border-radius: 28px;
                background-color: rgba(255, 255, 255, 0.2);

                margin-right: 8px;
            }

            .fee-header {
                @extend .horizontal-center-align;

                width: 152px;
                height: 48px;
                border-radius: 28px;
                background-color: rgba(255, 255, 255, 0.2);

                margin-right: 8px;
            }

            .status-header {
                @extend .horizontal-center-align;

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
                        @extend .horizontal-center-align;

                        width: 152px;
                        height: 48px;

                        margin-right: 8px;
                    }

                    .hash-body {
                        @extend .horizontal-center-align;

                        width: 192px;
                        height: 48px;

                        margin-right: 8px;
                    }

                    .from-body {
                        @extend .horizontal-center-align;

                        width: 152px;
                        height: 48px;

                        margin-right: 8px;
                    }

                    .to-body {
                        @extend .horizontal-center-align;

                        width: 152px;
                        height: 48px;

                        margin-right: 8px;
                    }

                    .purpose-body {
                        @extend .horizontal-center-align;

                        width: 192px;
                        height: 48px;

                        margin-right: 8px;
                    }

                    .fee-body {
                        @extend .horizontal-center-align;

                        width: 152px;
                        height: 48px;

                        margin-right: 8px;
                    }

                    .status-body {
                        @extend .horizontal-center-align;

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
