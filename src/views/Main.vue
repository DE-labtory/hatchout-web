<template>
    <div>
        <MainGameSection v-bind:ghost="unbornGhost" v-bind:items="items"></MainGameSection>
<!--        <MainRankingSection v-bind:ranking="ranking"></MainRankingSection>-->
<!--        <MainListSection v-bind:list="list"></MainListSection>-->
    </div>
    
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Ghost} from '@/types';
import MainGameSection from '@/components/sections/MainGameSection.vue';
import MainRankingSection from '@/components/sections/MainRankingSection.vue';
import MainListSection from '@/components/sections/MainListSection.vue';
import {Item} from '@/types/item';

@Component({
    components: {MainRankingSection, MainGameSection, MainListSection},
})
export default class Main extends Vue {
    private ghosts: Ghost[];
    private unbornGhost: Ghost | null;
    private items: Item[] | null;

    constructor() {
        super();
        this.ghosts = this.$store.state.myGhosts;
        if (this.$store.state.myGhosts.length > 0) {
            this.unbornGhost = this.$store.state.myGhosts[0];
        } else {
            this.unbornGhost = null;
        }
        this.items = this.$store.state.myItems;

    }
}
</script>
