<template>
    <div>
        <div id="tvjs-header">
            <h1><img src="/assets/logo.png"/></h1>
            <span id="overlays-lbl">Overlays</span>
            <std-input name="Overlay" type="select"
                :list="overlay_names"
                v-model="current"
            ></std-input>
            <span class="night-mode">
                <input type="checkbox" v-model="night">
                <label>NM</label>
            </span>
        </div>
        <div id="tvjs-tvjs" :style="{top: top+'px'}">
            <trading-vue :data="chart" :width="this.width" :height="this.height"
                title-txt="TVJS Overlays"
                ref="tvjs"
                :chart-config="{DEFAULT_LEN:70}"
                :overlays="overlays"
                :color-back="colors.colorBack"
                :color-grid="colors.colorGrid"
                :color-text="colors.colorText">
            </trading-vue>
        </div>
    </div>
</template>

<script>
import TradingVue from 'trading-vue-js'
import { DataCube } from 'trading-vue-js'
import StdInput from './components/StdInput.vue'
import Data from '../data/data.json'
import Overlays from './index_dev'

export default {
    name: 'app',
    components: {
        TradingVue, StdInput
    },
    methods: {
        onResize() {
            this.width = window.innerWidth
            this.height = window.innerHeight - this.top
        },
        win_query() {
            let qs = (function(a) {
                if (a == "") return {};
                var b = {};
                for (var i = 0; i < a.length; ++i) {
                    var p=a[i].split('=', 2);
                    if (p.length == 1)
                        b[p[0]] = "";
                    else
                        b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
                }
                return b;
            })(window.location.search.substr(1).split('&'));
            return qs
        }
    },
    mounted() {
        window.addEventListener('resize', this.onResize)
        this.$set(this, 'chart', Data)
        let q = this.win_query()
        if (q.nm === 'false') this.night = false
        if (q.ov) this.current = q.ov
        if (q.header === 'false') this.top = 0
        this.onResize()
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize)
    },
    data() {
        return {
            chart: {}, // Data will be here,
            width: window.innerWidth,
            height: window.innerHeight,
            overlays: Object.values(Overlays),
            overlay_names: ['Default', ...Object.keys(Overlays)],
            night: true,
            current: 'Default',
            top: 50
        }
    },
    computed: {
        colors() {
            return this.night ? {} : {
                colorBack: '#fff',
                colorGrid: '#eee',
                colorText: '#333'
            }
        }
    },
    watch: {
        current(nv) {
            if (nv === 'Default') {
                this.$set(this, 'chart', new DataCube(Data))
                this.$refs.tvjs.resetChart()
                return
            }
            let origin = document.location.origin
            let path = `${origin}/src/overlays/${nv}/data.json`
            fetch(path).then(response => {
                return response.json()
            }).then(data => {
                this.$set(this, 'chart', new DataCube(data))
                this.$refs.tvjs.resetChart()
                window.data = data
                window.dc = this.chart
            }).catch(e => {
                console.log(e)
            })
        }
    }
}
</script>

<style>
html,
body {
    background-color: #000;
    margin: 0;
    padding: 0;
    overflow: hidden;
    font: 11px -apple-system,BlinkMacSystemFont,
        Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,
        Fira Sans,Droid Sans,Helvetica Neue,
        sans-serif
}
#tvjs-header {
    position: absolute;
    height: 49px;
    color: #ddd;
    width: 100%;
    background-color: #121826;
    border-bottom: 1px solid black;
}
#tvjs-header img{
    width: 49px;
    height: 49px;
    margin: 0;
}

#tvjs-tvjs {
    position: absolute;
}
#tvjs-header h1 {
    color: #9b9ca0;
    margin: 0px 0 0 3px;
}
#tvjs-header p {
    position: absolute;
    width: 100%;
    top: 1px;
    text-align: center;
    font-family: -apple-system,BlinkMacSystemFont,
    Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,
    Fira Sans,Droid Sans,Helvetica Neue,
    sans-serif;
    font-weight: 200;
}
#overlays-lbl {
    position: absolute;
    top: 17px;
    color: #5e6061;
    right: 290px;
    font-weight: 600;
}
.night-mode {
    position: absolute;
    top: 15px;
    right: 20px;
}
.std-input {
    position: absolute;
    top: 5px;
    right: 70px;
    width: 200px;
    font-size: 1.2em;
}
</style>
