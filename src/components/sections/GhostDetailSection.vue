<template>
  <div class="ghost-detail-section">
    <template v-if=ghost>
      <span>{{ghost.gene}}</span>
      <span>{{ghost.name}}</span>
      <span>{{ghost.level}}</span>
      <span>{{ghost.angelPoint}}</span>
      <span>{{ghost.evilPoint}}</span>
    </template>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {Ghost} from '@/types';

@Component
export default class GhostDetailSection extends Vue {
  @Prop() private ghost?: Ghost;
}
</script>

<style scoped lang="scss">
.ghost-detail-section {
  height: 386px;
  background-image: url('~@/assets/ghost-detail-section-background.png')
}
</style>
