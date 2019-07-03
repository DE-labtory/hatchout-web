<template>
    <div class="ghost-rank-first-card">
        <span id="ghost-name">{{ghost.name}}</span>
        <span id="ghost-id">{{ghost.gene}}</span>
<!--        <span id="ghost-owner">{{ghost.owner}}</span>-->
        <span id="ghost-owner">owner</span>
        <span id="ghost-angel-point">Good level {{ghost.angelPoint}}</span>
        <span id="ghost-evil-point">Good level {{ghost.evilPoint}}</span>
        <img id="img" v-bind:src="loadImage()">
    </div>
    
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {Ghost} from '@/types';

@Component
export default class GhostRankFirstCard extends Vue {
    @Prop() private ghost!: Ghost;

    public loadImage(): string {
        // todo: fix
        return require('@/assets/characters/1.png');
    }

}
</script>

<style scoped lang="css">
    .ghost-rank-first-card {
        position: relative;
        top: 149px;
        left: 493px;
        width: 370px;
        height: 217px;
        opacity: 0.37;
        border-radius: 10px;
        box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.2);
        background-color: #000000;
    }

    #ghost-name {
        position: absolute;
        top: 37px;
        left: 27px;
        width: 182px;
        height: 36px;
        font-family: Ubuntu;
        font-size: 32px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.56px;
        color: #ffffff;
    }



    #ghost-id {
        position: absolute;
        top: 79px;
        left: 27px;
        width: 65px;
        height: 18px;
        font-family: Ubuntu;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.28px;
        color: #ffffff;
    }

    #ghost-owner {
        position: absolute;
        top: 104px;
        left: 27px;
        width: 48px;
        height: 18px;
        font-family: Ubuntu;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.28px;
        color: #ffffff;
    }

    #ghost-angel-point {
        position: absolute;
        top: 158px;
        left: 27px;
        /*width: 106px;*/
        height: 16px;
        opacity: 0.3;
        font-family: Ubuntu;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.25px;
        color: #ffffff;
    }

    #ghost-evil-point {
        position: absolute;
        top: 182px;
        left: 27px;
        /*width: 94px;*/
        height: 16px;
        opacity: 0.3;
        font-family: Ubuntu;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.25px;
        color: #ffffff;
    }

    img {
        max-width: 100%;
        max-height: 100%;
    }

    #img {
        position: absolute;
        top: 28px;
        left: 199px;
    }
</style>
