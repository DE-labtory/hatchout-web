<template>
  <div id="outer-circle" v-bind:class="{'active-outer-circle': isActive}">
    <div id="inner-circle" v-bind:class="{'active-inner-circle': isActive}">
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class RadioBullet extends Vue {
  @Prop() private isActive: boolean;
  constructor() {
    super();
  }
}
</script>

<style scoped lang="scss">
  #outer-circle {
    border-radius: 50%;
    height: 16px;
    width: 16px;
    position: relative;
    border: solid 3px #9f9f9f;
    margin-top: -2px;
    margin-right: 6px;
  }

  #inner-circle {
    position: absolute;
    background: #9f9f9f;
    border-radius: 50%;
    height: 10.2px;
    width: 10.2px;
    top: 50%;
    left: 50%;
    margin: -5px 0px 0px -5px;
  }

  .active-outer-circle {
    border: solid 3px #a05acb !important;
  }

  .active-inner-circle {
    background: #a05acb !important;
  }
</style>
