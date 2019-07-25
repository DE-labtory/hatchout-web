<template>
    <div id="outer-circle">
        <div id="inner-circle" v-bind:class="{'active-inner-circle': isActive}">
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class RadioBullet extends Vue {
        @Prop() private isActive!: boolean;
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
        border: solid 3px #ffffff;
        margin-top: -2px;
        margin-right: 6px;
    }

    #inner-circle {
        position: absolute;
        background: #ffffff;
        border-radius: 50%;
        height: 10.2px;
        width: 10.2px;
        top: 50%;
        left: 50%;
        margin: -5px 0px 0px -5px;
        opacity: 0;
    }

    .active-inner-circle {
        opacity: 1.0 !important;
    }
</style>
