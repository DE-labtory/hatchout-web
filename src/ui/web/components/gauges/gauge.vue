<template>
  <div id="outer-gauge">
    <div id="inner-gauge" v-bind:style="{ width: size + 'px' , backgroundImage: type.backgroundImage}">
      <div id="outer-shade" v-bind:style="{ width: size < 2 ? 0 + 'px' : (size + 2) + 'px' }">
        <div id="inner-shade"
             v-bind:style="{ width: size < 1 ? 0 + 'px' : (size - 1) + 'px',
             backgroundColor: type.backgroundColor}"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {GaugeType} from '@/types/gauge';

@Component
export default class Gauge extends Vue {
  @Prop() private ratio?: number;
  @Prop() private type!: GaugeType;
  private size: number;

  constructor() {
    super();
    if (this.ratio) {
      this.size = 208 * this.ratio;
    } else {
      this.size = 0;
    }
  }
}
</script>

<style scoped lang="scss">
  #outer-gauge {
    width: 208px;
    height: 19px;
    border-radius: 30px;
    background-color: #83307a;
  }

  #inner-gauge {
    position: relative;
    top: 2px;
    left: 2px;
    width: 172px;
    height: 15px;
    border-radius: 10px;
    background-image: linear-gradient(to bottom, #f8c1fd, #f69cfe);
  }

  #outer-shade {
    position: absolute;
    top: 8px;
    left: 0.5px;
    width: 174px;
    height: 4px;
    border-radius: 3.5px;
    background-image: linear-gradient(to right, #ffffff, rgba(0, 0, 0, 0));
  }

  #inner-shade {
    width: 171px;
    height: 3.7px;
    border-radius: 10px;
    background-color: #f29cfa;
  }
</style>