<template>
  <div>
    <h1>This is an collection view</h1>
    <TokenDetailSection v-bind:ghost="selectedGhost"></TokenDetailSection>
    <TokenListSection v-bind:ghosts="ghosts"></TokenListSection>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import TokenDetailSection from '@/components/section/GhostDetailSection.vue';
import TokenListSection from '@/components/section/GhostListSection.vue';
import {Ghost} from '@/types';

@Component({
  components: {TokenDetailSection, TokenListSection},
})
export default class Collection extends Vue {
  private ghosts: Ghost[];
  private selectedGhost: Ghost | null;

  constructor() {
    super();
    this.ghosts = this.$store.state.myGhosts;
    if (this.$store.state.myGhosts.length > 0) {
      this.selectedGhost = this.$store.state.myGhosts[0];
    } else {
      this.selectedGhost = null;
    }
  }
}
</script>
