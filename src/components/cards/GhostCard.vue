<template>
  <div>
    <h5>Ghost Card</h5>
    <h5>{{ghost.gene}}</h5>
    <h5>{{ghost.name}}</h5>
    <h5>image</h5>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {Ghost} from '@/types';

@Component
export default class GhostCard extends Vue {
  @Prop() private ghost!: Ghost;
}
</script>
