<template>
  <div>
    <h1>This is an collection view</h1>
    <TokenDetailSection></TokenDetailSection>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TokenDetailSection from '@/components/section/TokenDetailSection.vue';
@Component({
  components: {TokenDetailSection}
})
export default class Collection extends Vue {}
</script>
