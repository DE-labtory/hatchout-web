<template>
    <div class="main-ranking-section">
<!--        <GhostRankFirstCard v-bind:ghost="firstGhost"></GhostRankFirstCard>-->
        <div class="ghost-rank-card-list">
            <GhostRankCard v-bind:ghost="ghost" v-for="ghost in ghosts"></GhostRankCard>
        </div>
    </div>
    
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import GhostCard from '@/components/cards/GhostCard.vue';
import {Ghost} from '@/types';
import GhostRankFirstCard from '@/components/cards/GhostRankFirstCard.vue';
import GhostRankCard from '@/components/cards/GhostRankCard.vue';
@Component({
    components: {GhostRankCard, GhostRankFirstCard},
})
export default class MainRankingSectionSection extends Vue {
    @Prop() private firstGhost?: Ghost;
    @Prop() private ghosts?: Ghost[];

}
</script>

<style scoped lang="scss">

.main-ranking-section {
    height: 465px;
    background-color: #eaeaea;
}

</style>
