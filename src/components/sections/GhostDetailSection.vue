<template>
  <div class="ghost-detail-section">
    <template v-if=ghost>
      <div class="vertical-center-align" style="width: 250px;">
        <span class="token-name-h1" style="padding-bottom: 10px">{{ghost.name}}</span>
        <span class="token-id">{{ghost.gene}}</span>
        <div>
          good
        </div>
        <div>
          evil
        </div>
      </div>
      <div style="width: 250px; max-width:250px; min-width:250px">
        <img v-bind:src="loadImage()">
      </div>
      <div class="vertical-center-align" style="width: 250px; margin-top:20px">
        <button class="button">
          <span>Foster</span>
        </button>
        <button class="button">
          <span>Combine</span>
        </button>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {Ghost} from '@/types';

@Component
export default class GhostDetailSection extends Vue {
  @Prop() private ghost?: Ghost;

  public loadImage(): string {
    return require(`@/assets/characters/${(Math.floor(Math.random() * 10) + 1).toString()}.png`);
  }
}
</script>

<style scoped lang="scss">
  .ghost-detail-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 419px;
    background-image: url('~@/assets/ghost-detail-section-background.png')
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  .vertical-center-align {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .token-name-h1 {
    width: 182px;
    height: 36px;
    font-family: Ubuntu;
    font-size: 32px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.6px;
    color: #ffffff;
  }

  .token-id {
    width: 54px;
    height: 16px;
    font-family: Ubuntu;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.2px;
    color: #ffffff;
  }

  .button {
    width: 200px;
    height: 48px;
    border-radius: 16px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    background-color: #ec8d16;
    margin: 10px;
  }

  .button span {
    width: 102px;
    height: 24px;
    font-family: NexaRustSans;
    font-size: 24px;
    font-weight: 900;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: -0.4px;
    text-align: center;
    color: #794402;
  }

  .oval {
    width: 25px;
    height: 25px;
    background-color: #602a62;
  }
</style>
