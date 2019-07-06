<template>
  <div id="outer-gauge">
    <div id="inner-gauge">
      <div id="outer-shade">
        <div id="inner-shade"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  @Component
  export default class AngelGuage extends Vue {
    constructor() {
      super();
    }
  }
</script>

<style scoped lang="scss">
  #outer-gauge {
    width: 208px;
    height: 19px;
    opacity: 0.48;
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
