<template>
    
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import GhostCard from '@/components/cards/GhostCard.vue';

@Component
export default class MainListSectionSection extends Vue {
    @Prop() private ghosts?: GhostCard[];
}
</script>

<style scoped lang="scss">

.main-ranking-section {
    height: 1683px;
    background-color: #eaeaea;
}

</style>
