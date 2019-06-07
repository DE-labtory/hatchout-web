<template>
  <div>
    <h2>GhostDetailSection</h2>
    <template v-if=ghost>
      <h5>{{ghost.gene}}</h5>
      <h5>{{ghost.name}}</h5>
      <h5>{{ghost.level}}</h5>
      <h5>{{ghost.angelPoint}}</h5>
      <h5>{{ghost.evilPoint}}</h5>
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
