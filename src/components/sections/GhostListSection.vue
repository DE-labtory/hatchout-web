<template>
  <div>
    <h2>GhostListSection</h2>
    <h3>획득시간순서</h3>
    <div class="horizontal-list" >
      <div v-for="ghost in ghosts">
        <GhostCard v-bind:ghost="ghost"></GhostCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {Ghost} from '@/types';
import GhostCard from '@/components/cards/GhostCard.vue';

@Component({
  components: {GhostCard},
})
export default class GhostListSection extends Vue {
  @Prop() private ghosts!: Ghost[];
}
</script>

<style scoped lang="scss">
  .horizontal-list {
    display: flex;
    flex-direction: row;
    align-item: center;
    justify-content: space-around;
  }
</style>
