<template>
  <div class="ghost-card">
    <div class="rect">
      <div class="rect-inner">
        <div class="rect-inner-in" :style="{'background-image': 'url(' + require('../../assets/ghost-detail-section-background.png') + ')'}">
          <img v-bind:src="loadImage()">
        </div>
      </div>
    </div>
    <span class="token-name">{{ghost.name}}</span>
    <span class="token-id">{{ghost.gene}}</span>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {Ghost} from '@/types';

@Component
export default class GhostCard extends Vue {
  @Prop() private ghost!: Ghost;

  public loadImage(): string {
    return require(`@/assets/characters/${(Math.floor(Math.random() * 10) + 1).toString()}.png`);
  }
}
</script>

<style scoped lang="scss">
  .ghost-card {
    width: 123px;
    height: 189px;
    margin: 20px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .ghost-image {
    border-radius: 20px;
    width: 120px;
    height: 114px;
    border: solid 1px #ecceff;
    background-color: #7d4dbd;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  .token-name {
    width: 120px;
    height: 20px;
    margin-top: 15px;
    font-family: Ubuntu;
    font-size: 18px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.3px;
    text-align: center;
    color: #4c4c4c;
  }

  .token-id {
    width: 70px;
    height: 18px;
    margin-top: 3px;
    font-family: Ubuntu;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.3px;
    text-align: center;
    color: #4c4c4c;
  }

  .rect {
    border-radius: 20% / 50%;
    overflow: hidden;
    width: 100px;
    height: 100px;
  }

  .rect-inner {
    border-radius: 50% / 20%;
    width: 100px;
    height: 100px;
    overflow: hidden;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
  }

  .rect-inner-in {
    border-radius: 32%;
    width: 100px;
    height: 100px;
  }
</style>
