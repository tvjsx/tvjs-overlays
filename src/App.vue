<template>
<trading-vue :data="chart" :width="this.width" :height="this.height"
        :overlays="overlays"
        :color-back="colors.colorBack"
        :color-grid="colors.colorGrid"
        :color-text="colors.colorText">
</trading-vue>
</template>

<script>
import TradingVue from 'trading-vue-js'
import Data from '../data/data.json'
import Overlays from './index_dev'

export default {
    name: 'app',
    components: {
        TradingVue
    },
    methods: {
        onResize() {
            this.width = window.innerWidth
            this.height = window.innerHeight
        }
    },
    mounted() {
        window.addEventListener('resize', this.onResize)
        setTimeout(() => {
            // Async data setup
            this.$set(this, 'chart', Data)
        }, 0)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize)
    },
    data() {
        return {
            chart: {}, // Data will be here,
            width: window.innerWidth,
            height: window.innerHeight,
            colors: {},
            overlays: Object.values(Overlays)
        };
    }
};
</script>

<style>
html,
body {
    background-color: #000;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
</style>
