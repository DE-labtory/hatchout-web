<template>
    <div class="tx-history-view">
        <TxHistorySection v-bind:txList="txList"></TxHistorySection>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import TxHistorySection from '@/components/sections/TxHistorySection.vue';
    import {Tx} from '@/types/tx';

    @Component({
        components: {TxHistorySection},
    })
    export default class TxHistory extends Vue {
        private txList: Tx[];

        constructor() {
            super();
            this.txList = this.$store.state.myTxList;
        }
    }
</script>

<style scoped lang="scss">
    .tx-history-view {
        width: 1784px;
        height: 1443px;
        object-fit: contain;
        background-image: url('~@/assets/tx-history-view-background.png');
    }
</style>
