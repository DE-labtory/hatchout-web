<template>
    <div class="tx-history-section">
        <div class="tx-filter-section" style="width: 1140px; height: 48px;">
            <div class="tx-list-filters">
                <div class="sort-method-item" @click="activeSortMethod = 'allTxList'"
                     v-bind:class="{active: activeSortMethod ==='allTxList' }">
                    <TxRadioBullet v-bind:isActive="activeSortMethod ==='allTxList'"></TxRadioBullet>
                    <div class="radio-name">All transaction list</div>
                </div>
                <div class="sort-method-item" @click="activeSortMethod = 'myTxList'"
                     v-bind:class="{active: activeSortMethod ==='myTxList' }">
                    <TxRadioBullet v-bind:isActive="activeSortMethod ==='myTxList'"></TxRadioBullet>
                    <div>My transaction list</div>
                </div>
            </div>
            <div class="tx-purpose-filters">
                <SelectBox></SelectBox>
                <div class="vertical-center-align">
                    <span class="select-name">Purpose</span>
                </div>
            </div>
        </div>
        <TxTable v-bind:txList="txList"></TxTable>
    </div>
</template>


<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import TxTable from '@/ui/web/components/tables/TxTable.vue';
    import TxRadioBullet from '@/ui/web/components/bullets/TxRadioBullet.vue';
    import SelectBox from '@/ui/web/components/boxes/SelectBox.vue';
    import {Tx} from '@/domain/types/tx';

    enum MenuType {
        ALL_TX_LIST = 'allTxList',
        MY_TX_LIST = 'myTxList',
    }

    @Component({
        components: {SelectBox, TxTable, TxRadioBullet},
    })
    export default class TxHistorySection extends Vue {
        @Prop() private txList!: Tx[];
        private activeSortMethod: MenuType;

        constructor() {
            super();
            this.activeSortMethod = MenuType.ALL_TX_LIST;
        }
    }
</script>

<style scoped lang="scss">
    .tx-history-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .tx-filter-section {
            display: flex;
            flex-direction: row;
            vertical-align: middle;
            justify-content: space-between;

            .tx-list-filters {
                width: 430px;
                height: 48px;

                display: flex;
                flex-direction: row;
                vertical-align: middle;

                .sort-method-item {
                    width: 215px;
                    height: 48px;
                    opacity: 0.3;
                    color: #ffffff;

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;

                    font-family: Ubuntu;
                    font-size: 18px;
                    font-weight: normal;
                    font-style: normal;
                    font-stretch: normal;
                    line-height: normal;
                    letter-spacing: -0.3px;

                    .radio-name {
                        opacity: 1;
                    }
                }

                .sort-method-item:hover {
                    opacity: 1;
                }

                .active {
                    opacity: 1;
                }
            }

            .tx-purpose-filters {
                display: flex;
                flex-direction: row-reverse;
                vertical-align: middle;
                justify-content: space-between;

                width: 295px;
                height: 48px;

                font-family: Ubuntu;
                font-size: 16px;
                font-weight: normal;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: -0.02px;
                color: #ffffff;

                .vertical-center-align {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    .select-name {
                        width: 60px;
                        height: 18px;
                    }
                }


            }
        }
    }
</style>
