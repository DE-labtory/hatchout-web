<template>
  <div class="ghost-detail-section">
    <template v-if=ghost>
      <div style="width:500px">
        <div class="vertical-center-align content" style="width: 300px;">
          <span class="token-name-h1" style="padding-bottom: 10px">{{ghost.name}}</span>
          <span class="token-id">{{ghost.gene}}</span>
          <div class="horizontal-left-align">
            <Bullet></Bullet>
            <Gauge v-bind:ratio=0.7 v-bind:type=angelType() style="margin-top: 3px"></Gauge>
          </div>
          <div class="horizontal-left-align">
            <Bullet></Bullet>
            <Gauge v-bind:ratio=0.3 v-bind:type=ghostType() style="margin-top: 3px"></Gauge>
          </div>
          <button class="button">
            <span>FOSTER</span>
          </button>
        </div>
        <div class="sidebar" style="width: 200px; max-width:200px; min-width:200px">
          <img v-bind:src="loadImage()">
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import Gauge from '@/ui/web/components/gauges/gauge.vue';
import Bullet from '@/ui/web/components/bullets/Bullet.vue';
import {Ghost} from '@/domain/types';
import {GaugeType} from '@/domain/types/gauge';

@Component({
  components: {Gauge, Bullet},
})
export default class GhostDetailSection extends Vue {
  @Prop() private ghost?: Ghost;

  public loadImage(): string {
    return require(`@/assets/characters/${(Math.floor(Math.random() * 10) + 1).toString()}.png`);
  }

  public angelType(): GaugeType {
    return GaugeType.Angel;
  }

  public ghostType(): GaugeType {
    return GaugeType.Ghost;
  }
}
</script>

<style scoped lang="scss">
  @font-face {
    font-family: 'NexaRustSans';
    src: url('~@/assets/fonts/nexa-rust/NexaRustSans-Black.otf')
  }

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

  .content {
    width: 67%;
    float: left;
  }

  .sidebar {
    width: 33%;
    float: right;
  }

  .vertical-center-align {
    display: flex;
    flex-direction: column;
    vertical-align: middle;
  }

  .vertical-center-align > * {
    margin: 10px 0;
  }

  .horizontal-left-align {
    display: flex;
    flex-direction: row;
    vertical-align: middle;
  }

  .horizontal-left-align > * {
    margin: 0 5px;
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
    width: 274px;
    height: 50px;
    border-radius: 20px;
    padding: 5px;
    outline: none;
    border: transparent;
    background: url('~@/assets/buttons/group-2-copy-9@2x.png') no-repeat;
    background-size: 270px 48px;
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
