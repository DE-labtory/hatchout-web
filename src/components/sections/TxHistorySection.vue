<template>
    <div class="tx-history-section">
        <div class="tx-filter-section">
            <div class="tx-list-filters">
                <div class="sort-method-item" @click="activeSortMethod = 'allTxList'"
                     v-bind:class="{active: activeSortMethod ==='allTxList' }">
                    <RadioBullet v-bind:isActive="activeSortMethod ==='allTxList'"></RadioBullet>
                    <div>All transaction list</div>
                </div>
                <div class="sort-method-item" @click="activeSortMethod = 'myTxList'"
                     v-bind:class="{active: activeSortMethod ==='myTxList' }">
                    <RadioBullet v-bind:isActive="activeSortMethod ==='myTxList'"></RadioBullet>
                    <div>My transaction list</div>
                </div>
            </div>
            <!--<div class="tx-purpose-filters"></div>-->
        </div>
        <TxTable v-bind:txList="txList"></TxTable>
    </div>
</template>


<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import TxTable from '@/components/tables/TxTable.vue';
    import RadioBullet from '@/components/bullets/RadioBullet.vue';
    import {Tx} from '@/types/tx';

    enum MenuType {
        ALL_TX_LIST = 'allTxList',
        MY_TX_LIST = 'myTxList',
    }

    @Component({
        components: {TxTable, RadioBullet},
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
    .tx-filter-section {
        .tx-list-filters {
            .sort-method-item {
                width: 215px;
                height: 48px;
                opacity: 0.3;
                color: #ffffff;

                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: 12px;
                font-family: Ubuntu;
                font-size: 18px;
                font-weight: normal;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: -0.3px;
            }

            .sort-method-item:hover {
                opacity: 1;
            }

            .active {
                opacity: 1;
            }

            #outer-circle {
                border: solid 3px #ffffff;
                opacity: 0.3;

                border-radius: 50%;
                height: 16px;
                width: 16px;
                position: relative;
                margin-top: -2px;
                margin-right: 6px;
            }

            #inner-circle {
                background: #ffffff;

                position: absolute;
                border-radius: 50%;
                height: 10.2px;
                width: 10.2px;
                top: 50%;
                left: 50%;
                margin: -5px 0px 0px -5px;
            }

            .active-outer-circle {
                border: solid 3px #ffffff;
                opacity: 1;
            }

            .active-inner-circle {
                background: #ffffff;
                opacity: 1;
            }
        }
    }


</style>
