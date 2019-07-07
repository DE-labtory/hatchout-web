<template>
    <div >
        <MarketPlaceSection v-bind:ghosts="ghosts"></MarketPlaceSection>
    </div>
    
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import MarketPlaceSection from '@/components/sections/MarketPlaceSection.vue';
import {Ghost} from '../types';

@Component({
    components: {MarketPlaceSection},
})
export default class Main extends Vue {
    private ghosts: Ghost[];

    constructor() {
        super();
        this.ghosts = this.$store.state.myGhosts;
    }

}
</script>
