<template>
  <div class="Oval"></div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component
  export default class Bullet extends Vue {
    constructor() {
      super();
    }
  }
</script>

<style scoped lang="scss">
  .Oval {
    width: 25px;
    height: 25px;
    background-color: #602a62;
    border-radius: 50%;
  }
</style>
