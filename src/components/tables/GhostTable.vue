<template>
  <div class="ghost-table-list">
    <div class="table" v-for="(ghost, index) in lineUp(4)">
      <div class="row">
        <GhostCard v-bind:ghost=ghost v-for="ghost in ghosts.slice(4*index, 4*(index + 1))">
        </GhostCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Prop} from 'vue-property-decorator';
  import {Ghost} from '@/types';
  import GhostCard from '@/components/cards/GhostCard.vue';

  @Component({
    components: {GhostCard},
  })
  export default class GhostTable extends Vue {
    @Prop() public ghosts!: Ghost[];

    public lineUp(column: number): Ghost[] {
      return this.ghosts.filter((ghost, idx) => (idx) % column === 0);
    }
  }
</script>

<style scoped lang="scss">
  .row {
    display: flex;
    flex-direction: row;
  }

  .ghost-table-list{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
