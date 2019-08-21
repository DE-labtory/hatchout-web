<template>
  <div>
    <TokenDetailSection v-bind:ghost="selectedGhost"></TokenDetailSection>
    <TokenListSection v-bind:ghosts="ghosts"></TokenListSection>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import TokenDetailSection from '@/components/sections/GhostDetailSection.vue';
import TokenListSection from '@/components/sections/GhostListSection.vue';
import {Ghost} from '@/types';
import {Store} from "@/store/store";
import {useStore} from "vuex-simple";

@Component({
  components: {TokenDetailSection, TokenListSection},
})
export default class Collection extends Vue {
  private ghosts: Ghost[];
  private selectedGhost: Ghost | null;
  private store: Store = useStore(this.$store);

  constructor() {
    super();
    this.ghosts = this.store.ghostModule.getGhosts;
    if (this.store.ghostModule.getGhosts.length > 0) {
      this.selectedGhost = this.store.ghostModule.getGhosts[0];
    } else {
      this.selectedGhost = null;
    }
  }
}
</script>
