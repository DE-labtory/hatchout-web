<template>
  <div id="game-section">
    <div id="editor" ref="editor"></div>
    <div id="iframe-wrapper" :style="iframe.wrapperStyle">
      <iframe
        :src="iframe.src"
        :style="iframe.style"
        :height="iframe.style.height"
        :width="iframe.style.width"
        type="text/html"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class GameSection extends Vue {
  iframe: any;

  data() {
    return {
      loaded: true,
      iframe: {
        src: "web-desktop/index.html",
        style: null,
        wrapperStyle: null,
      }
    }
  }
  mounted() {
    let editor = this.$refs.editor;
    this.iframe.style = {
      position: 'relative',
      width: window.innerWidth,
      height: window.innerHeight,
      top: 0,
      left: 0,
    };
    this.iframe.wrapperStyle = {
      overflow: 'hidden',
      height: "696.5px",
      width: "1440px",
    }

  }
}
</script>

<style scoped>

</style>
