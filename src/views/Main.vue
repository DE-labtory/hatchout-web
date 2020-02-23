<template>
    <div >
      <GameSection></GameSection>
      <MarketPlaceSection v-bind:ghosts="ghosts"></MarketPlaceSection>
    </div>
    
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import MarketPlaceSection from '@/components/sections/MarketPlaceSection.vue';
import {Ghost} from '../types';
import {Store} from "@/store/store";
import {useStore} from "vuex-simple";
import GameSection from "@/components/sections/GameSection.vue";

@Component({
    components: {GameSection, MarketPlaceSection},
})
export default class Main extends Vue {
    private ghosts: Ghost[];
    private store: Store = useStore(this.$store);

    constructor() {
        super();
        this.ghosts = this.store.ghostModule.getGhosts;
    }

}
</script>
