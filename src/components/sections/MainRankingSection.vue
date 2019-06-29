<template>
    <div class="main-ranking-section"></div>
    
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import GhostCard from '@/components/cards/GhostCard.vue';

@Component
export default class MainRankingSectionSection extends Vue {
    @Prop() private ghosts?: GhostCard[];

}
</script>

<style scoped lang="scss">

.main-ranking-section {
    height: 465px;
    background-color: #eaeaea;
}

</style>
