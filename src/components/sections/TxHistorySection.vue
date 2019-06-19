<template>
    <div class="tx-history-section">
        <div class="tx-filter-section">
            <div class="tx-list-filter">
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
            <div class="tx-purpose-filter"></div>
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
        width: 1116px;
        height: 48px;
        opacity: 0.3;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .tx-list-filter {
        width: 428px;
        height: 48px;
        opacity: 0.3;
    }

    .tx-purpose-filter {

    }

    .sort-method-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 12px;
        width: 145px;
        height: 20px;
        font-family: Ubuntu;
        font-size: 18px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.3px;
        color: #ffffff;
    }

    .sort-method-item:hover {
        cursor: pointer;
        color: #ffffff;
    }

    .active-outer-circle {
        border: solid 3px #ffffff !important;
    }

    .active-inner-circle {
        background: #ffffff !important;
    }
</style>
