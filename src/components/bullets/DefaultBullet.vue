<template>
    <div class="default-bullet">
        <div id="circle">
        </div>
        <span>{{species}}</span>
    </div>


    
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class DefaultBullet extends Vue {
    @Prop() private species!: string;
    constructor() {
        super();
    }

}
</script>

<style scoped lang="scss">
    #circle {
        border-radius: 50%;
        position: relative;
        width: 25px;
        height: 25px;
        background-color: #602a62;
    }

</style>
