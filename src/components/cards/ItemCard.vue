<template>
    <div class="item-card">
        <div class="rect">
            <div class="rect-inner">
<!--                todo: fix-->
                <div class="rect-inner-in">
                    <img v-bind:src="loadImage()">
                </div>
            </div>
        </div>

        <span class="item-name">{{item.name}}</span>
        <span class="item-price">{{item.price}}</span>
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

<style scoped lang="scss">

    .item-card {
        width: 74px;
        height: 74px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .rect {
        width: 72px;
        height: 72px;
        border-radius: 5px;
        border: solid 1px #936097;
        background-color: rgba(0, 0, 0, 0.1);
    }

    img {
        max-width: 100%;
        max-height: 100%;
    }

    .rect-inner {
        /*<!--border-radius: 50% / 20%;-->*/
        width: 72px;
        height: 72px;
        overflow: hidden;
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;
    }

    .rect-inner-in {
        width: 100px;
        height: 100px;
    }

    .item-name {
        width: 78px;
        height: 22px;
        opacity: 0.6;
        font-family: Ubuntu;
        font-size: 16px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.28px;
        color: #ffffff;
    }

    .item-price {
        width: 35px;
        height: 18px;
        opacity: 0.6;
        font-family: Ubuntu;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.28px;
        color: #ffffff;
    }
</style>
