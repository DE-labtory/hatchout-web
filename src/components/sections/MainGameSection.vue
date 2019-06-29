<template>
    <div class="main-game-section">
        <div>HATCH OUT</div>
        <template v-if=ghost>
            <span>{{ghost.gene}}</span>
            <span>{{ghost.name}}</span>
            <span>{{ghost.level}}</span>
            <span>{{ghost.angelPoint}}</span>
            <span>{{ghost.evilPoint}}</span>
        </template>
        <div class="item-card-list">
            <ItemCard v-bind:item="item" v-for="item in items"></ItemCard>>
        </div>
        <div class="menu-list">
            <div>Collection</div>
            <div>Bidding</div>
            <div>History</div>
            <div>My page</div>
        </div>
    </div>
</template>

<script lang="ts">
import {Ghost} from '../../types';
import {Component, Prop, Vue} from 'vue-property-decorator';
import {Item} from '@/types/item';
import ItemCard from '@/components/cards/ItemCard.vue';
@Component({
    components: {ItemCard},
})
export default class MainGameSection extends Vue {
    @Prop() private ghost?: Ghost;
    @Prop() private items?: Item[];

}
</script>

<style scoped lang="scss">
    .main-game-section {
        height: 697.5px;
        background-image: url('~@/assets/ghost-detail-section-background.png')
    }
</style>
