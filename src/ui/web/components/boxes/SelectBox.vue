<template>
    <div class="select-box">
        <select v-model="selected">
            <option>All</option>
            <option>Bidding</option>
            <option>Getting NFT</option>
            <option>Fostering NFT</option>
            <option>Combining NFT</option>
            <option>Trading NFT</option>
        </select>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
    export default class TxSelect extends Vue {
    private selected: string;

    constructor() {
        super();
        this.selected="All";
    }
}
</script>

<style scoped lang="scss">
    .select-box {
        display: inline-block;
        width: 205px;
        height: 48px;
        padding: 6px 20px 6px 10px;

        select {
            width: 175px;
            height: 36px;
            border: solid 1px #ffffff;
            border-radius: 0px;

            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background: url('~@/assets/groups/group-5-copy.png') no-repeat 90% 50%;

            font-family: Ubuntu;
            font-size: 14px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: -0.02px;
            color: #ffffff;

            padding: 9px 0px 9px 20px;
        }
    }
</style>
