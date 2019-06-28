<template>
  <div class="outer-circle"
       v-bind:style="{'border': isActive? activeColor+' solid 3px !important': inactiveColor+' solid 3px'}">
    <div class="inner-circle"
       v-bind:style="{'background': isActive? activeColor+' !important': inactiveColor}">
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class RadioBullet extends Vue {
  @Prop() private isActive!: boolean;
  @Prop() private activeColor!: string;
  @Prop() private inactiveColor!: string;
  constructor() {
    super();
  }
}
</script>

<style scoped lang="scss">
  .outer-circle {
    border-radius: 50%;
    height: 16px;
    width: 16px;
    position: relative;
    margin-top: -2px;
    margin-right: 6px;
  }

  .inner-circle {
    position: absolute;
    border-radius: 50%;
    height: 10.2px;
    width: 10.2px;
    top: 50%;
    left: 50%;
    margin: -5px 0px 0px -5px;
  }
</style>
