<template>
    <div class="ghost-rank-card">
        <span id="ghost-name">{{ghost.name}}</span>
        <img id="img" v-bind:src="loadImage()">
    </div>
    
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {Ghost} from '@/types';

@Component
export default class GhostRankCard extends Vue {
    @Prop() private ghost!: Ghost;

        public loadImage(): string {
            // todo: fix
            return require('@/assets/characters/1.png');
        }

}
</script>

<style scoped lang="scss">
    .ghost-rank-card {
        position: relative;
        width: 310px;
        height: 181px;
        opacity: 0.18;
        border-radius: 10px;
        box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.2);
        background-color: #000000;
    }

    #ghost-name {
        position: absolute;
        top: 39px;
        left: 32px;
        font-family: Ubuntu;
        font-size: 32px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.56px;
        color: #ffffff;
    }

    img {
        max-width: 100%;
        max-height: 100%;
    }
    #img {
        position: absolute;
        top: 20px;
        left: 137px;
    }


</style>
