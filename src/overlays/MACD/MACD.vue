<script>

// TODO: pass colors from settings to the script
// TODO: hist lines => recangles (like in volbar.js)

import { Overlay } from 'trading-vue-js'

export default {
    name: 'MACD',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return {
                author: 'StdSquad', version: '1.0.0',
                desc: 'Moving Average Convergence/Divergence'
            }
        },

        draw(ctx) {
            const layout = this.$props.layout

            // HISTOGRAM

            const base = layout.$2screen(0) + 0.5
            const off = this.hist_width % 2 ? 0 : 0.5
            ctx.lineWidth = this.hist_width
            ctx.strokeStyle = this.color
            ctx.beginPath()

            // Color changed
            let changed = false
            for (var p of this.$props.data) {

                let x = layout.t2screen(p[0]) - off
                let y = layout.$2screen(p[1]) - 0.5
                let changed = false

                if (p[4]) {
                    if (ctx.strokeStyle !== p[4]) {
                        ctx.stroke()
                        changed = true
                    }
                    ctx.strokeStyle = p[4]
                } else {
                    if (ctx.strokeStyle !== this.color) {
                        ctx.stroke()
                        changed = true
                    }
                    ctx.strokeStyle = this.color
                }
                if (changed) ctx.beginPath()
                ctx.moveTo(x, base)
                ctx.lineTo(x, y)
            }
            ctx.stroke()

            // MACD LINE

            ctx.beginPath()

            ctx.lineWidth = this.macd_width
            ctx.strokeStyle = this.macd_color

            for (var p of this.$props.data) {
                let x = layout.t2screen(p[0])
                let y = layout.$2screen(p[2])
                ctx.lineTo(x, y)
            }

            ctx.stroke()

            // SIGNAL LINE

            ctx.beginPath()

            ctx.lineWidth = this.signal_width
            ctx.strokeStyle = this.signal_color

            for (var p of this.$props.data) {
                let x = layout.t2screen(p[0])
                let y = layout.$2screen(p[3])
                ctx.lineTo(x, y)
            }

            ctx.stroke()


        },
        use_for() { return ['MACD'] },
        legend(values) {
            let xs = values.slice(1,4).map(x => {
                return x.toFixed(Math.abs(x) > 0.001 ? 4 : 8)
            })
            return [
                {value: xs[0], color:values[4]},
                {value: xs[1], color: this.macd_color},
                {value: xs[2], color: this.signal_color}
            ]
        },
        calc() {
            return {
                props: {
                    fast: { def: 12, text: 'Fast Length' },
                    slow: { def: 26, text: 'Slow Length' },
                    smooth: { def: 9, text: 'Signal EMA' },
                    histColors: { def: [], text: 'Colors' }
                },
                conf: { renderer: 'Spline' },
                update: `
                    let [macd, signal, hist] =
                        macd(close, fast, slow, smooth)

                    if (hist[0] >= 0) {
                         var color = histColors[0]
                         if (hist[0] < hist[1]) color = histColors[1]
                    } else {
                        color = histColors[2]
                        if (hist[0] > hist[1]) color = histColors[3]
                    }

                    return [hist[0], macd[0], signal[0], color]
                `
            }
        }
    },
    // Define internal setting & constants here
    computed: {
        sett() {
            return this.$props.settings
        },
        hist_width() {
            return this.sett.histWidth || 4
        },
        macd_width() {
            return this.sett.macdWidth || 1
        },
        signal_width() {
            return this.sett.signalWidth || 1
        },
        color() {
            return this.sett.defColor || "#42b28a"
        },
        macd_color() {
            return this.sett.macdColor || "#3782f2"
        },
        signal_color() {
            return this.sett.signalColor || "#f48709"
        },
        hist_colors() {
            return this.sett.histColors
        }
    }
}
</script>
