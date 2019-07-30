<template>
    <div class="market-place-section">
      <div class="top">

        <div class="title">Market Place</div>
        <div>{{getSelf()}}</div>
      </div>
      <div class="middle">
        <GhostTable v-bind:ghosts="ghosts"></GhostTable>
      </div>

      <div class="bottom">
        <div class="navigator">
          <div class="circle-out"></div>
          <div class="elliptical">
            <div class="circle-in" v-bind:class="{circle_in_active: currentNum === n}" @click="currentNum = n" v-for="n in 8">
              <div class="number">{{n}}</div>
            </div>
          </div>
          <div class="circle-out"></div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import {Ghost} from '@/types';
import GhostCard from '@/components/cards/GhostCard.vue';
import GhostTable from '@/components/tables/GhostTable.vue';

@Component({
    components: { GhostCard, GhostTable},
})
export default class MarketPlaceSection extends Vue {
  @Prop() public ghosts!: Ghost[];
  public currentNum!: number;

  constructor() {
    super();
    // todo: set config with configfile
    this.currentNum = 1;
    this.syncSelf();
  }

  private syncSelf() {
    return this.$store.dispatch('user/syncSelf');
  }

  public getSelf() {
    return this.$store.getters['user/getSelf'];
  }


}
</script>

<style scoped lang="scss">
    .market-place-section{
        background-image: url('~@/assets/market-place-section-background.png');
    }
    .top {
      height: 127px;
    }
    .title {
      margin: 0 auto;
      position: relative;
      top: 57px;
      font-family: AppleSDGothicNeo;
      font-size: 32px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: -0.56px;
      color: #ffffff;
    }
    .bottom {
        height: 179px;
    }
    .navigator {
      position: relative;
      top: 43px;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      width: 385px;
    }
    .elliptical {
      width: 293px;
      height: 38px;
      display: flex;
      flex-direction: row;
    }
    .elliptical:before {
      content: '';
      position:absolute;
      width: 293px;
      height: 38px;
      opacity: 0.3;
      border-radius: 19px;
      background-color: #000000;
    }
    .circle-in {
      position: relative;
      left: 6px;
      width: 30px;
      height: 30px;
      opacity: 0.5;
      border-radius: 15px;
      display: table;
      vertical-align: text-bottom;
      text-align: center;
      margin: 4px 2px;
    }

    .circle-in:hover {
      cursor: pointer;
      width: 30px;
      height: 30px;
      left: 6px;
      display: table;
      vertical-align: text-bottom;
      text-align: center;
      margin: 4px 2px;
      opacity: 0.75;
      border-radius: 15px;
      background-color: #4d0e44;
      font-family: Ubuntu;
      font-size: 18px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: -0.32px;
      color: #ffffff;
    }
    .circle_in_active {
      width: 30px;
      height: 30px;
      left: 6px;
      display: table;
      vertical-align: text-bottom;
      text-align: center;
      margin: 4px 2px;
      opacity: 0.75;
      border-radius: 15px;
      background-color: #4d0e44;
      font-family: Ubuntu;
      font-size: 18px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: -0.32px;
      color: #ffffff;
    }

    .circle-out {
      position: relative;
      top: 4px;
      width: 30px;
      height: 30px;
      opacity: 0.3;
      border-radius: 15px;
      background-color: #000000;
      margin-left: 8px;
      margin-right: 8px;
    }
    .number {
      display: table-cell;
      vertical-align: middle;

      font-family: Ubuntu;
      font-size: 18px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: -0.32px;
      color: #ffffff;

    }

</style>
