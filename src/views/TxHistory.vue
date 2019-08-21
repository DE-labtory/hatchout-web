<template>
    <div class="tx-history-view">
        <TxHistorySection v-bind:txList="txList"></TxHistorySection>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import TxHistorySection from '@/components/sections/TxHistorySection.vue';
    import {Tx} from '@/types/tx';
    import {Store} from "@/store/store";
    import {useStore} from "vuex-simple";

    @Component({
        components: {TxHistorySection},
    })
    export default class TxHistory extends Vue {
      private txList: Tx[];
      private store: Store = useStore(this.$store);

      constructor() {
          super();
          this.txList = this.store.txModule.getTxList;
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
