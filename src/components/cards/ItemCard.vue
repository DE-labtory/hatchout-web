<template>
    <div class="item-card">
        <img v-bind:src="loadImage()">
        <span>{{item.name}}</span>
        <span>{{item.price}}</span>
    </div>
</template>

<script lang="ts">
import {Item} from '../../types/item';
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class ItemCard extends Vue {
    @Prop() private item!: Item;

    public loadImage(): string {
        // todo: fix
        return require('@/assets/characters/1.png');
    }

}
</script>

<style scoped>

</style>
