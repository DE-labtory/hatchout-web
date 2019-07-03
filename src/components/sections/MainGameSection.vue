<template>
    <div class="main-game-section">
        <p class="title">HATCH OUT</p>
        <template v-if=ghost>
            <span>{{ghost.gene}}</span>
            <span>{{ghost.name}}</span>
            <span>{{ghost.level}}</span>
            <span>{{ghost.angelPoint}}</span>
            <span>{{ghost.evilPoint}}</span>
        </template>
        <div class="gauge-section">
            <div class="gauge-set">
                <DefaultBullet v-bind:species="'angel'"></DefaultBullet>
                <AngelGuage></AngelGuage>
            </div>
            <div class="gauge-set">
                <DefaultBullet v-bind:species="'devil'"></DefaultBullet>
                <DevilGauge></DevilGauge>
            </div>
        </div>
        <div class="item-card-list">
            <ItemCard v-bind:item="item" v-for="item in items"></ItemCard>
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
import AngelGuage from '@/components/gauges/angelGauge.vue';
import DevilGauge from '@/components/gauges/devilGauge.vue';
import DefaultBullet from '@/components/bullets/DefaultBullet.vue';
@Component({
    components: {ItemCard, AngelGuage, DevilGauge, DefaultBullet},
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

    .item-card-list {
        display: flex;
        flex-direction: row;
        /*align-items: center;*/
        justify-content: center;
        /*background-image: linear-gradient(to right, #eaeaea, #eaeaea 87%, #dedede);*/
    }
    .title {
        width: 432px;
        height: 47px;
        border-radius: 100px;
        background-image: linear-gradient(to bottom, #ffc400, #ce1ec0);
    }

    .gauge-set {
        display: flex;
        flex-direction: row;
    }
</style>
