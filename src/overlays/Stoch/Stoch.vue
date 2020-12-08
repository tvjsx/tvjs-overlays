<script>

import { Overlay } from 'trading-vue-js'

export default {
    name: 'Stoch',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return {
                author: 'StdSquad', version: '1.0.0',
                desc: 'Stochastic',
                preset: {
                    name: 'Stoch $param_k $param_d $smooth',
                    side: 'offchart',
                    settings: {
                        lineWidth: 0.75,
                        kColor: '#3782f2',
                        dColor: '#f48709',
                        bandColor: '#ddd',
                        backColor: '#381e9c16'
                    }
                }
            }
        },
        draw(ctx) {

            const layout = this.$props.layout
            const upper = layout.$2screen(this.sett.upper || 80)
            const lower = layout.$2screen(this.sett.lower || 20)

            // K
            ctx.lineWidth = this.line_width
            ctx.strokeStyle = this.k_color
            ctx.beginPath()

            for (var p of this.$props.data) {
                let x = layout.t2screen(p[0])
                let y = layout.$2screen(p[1])
                ctx.lineTo(x, y)
            }

            ctx.stroke()

            // D
            ctx.lineWidth = this.line_width
            ctx.strokeStyle = this.d_color
            ctx.beginPath()

            for (var p of this.$props.data) {
                let x = layout.t2screen(p[0])
                let y = layout.$2screen(p[2])
                ctx.lineTo(x, y)
            }

            ctx.stroke()

            ctx.strokeStyle = this.band_color
            ctx.setLineDash([5]) // Will be removed after draw()
            ctx.beginPath()

            // Fill the area between the bands
            ctx.fillStyle = this.back_color
            ctx.fillRect(0, upper, layout.width, lower - upper)

            // Upper band
            ctx.moveTo(0, upper)
            ctx.lineTo(layout.width, upper)

            // Lower band
            ctx.moveTo(0, lower)
            ctx.lineTo(layout.width, lower)

            ctx.stroke()
        },
        use_for() { return ['Stoch'] },
        data_colors() { return [this.color] },
        y_range(hi, lo) {
            return [
                Math.max(hi, this.sett.upper || 80),
                Math.min(lo, this.sett.lower || 20)
            ]
        },
        calc() {
            return {
                props: {
                    param_k: { def: 14, text: 'K' },
                    param_d: { def: 3, text: 'D' },
                    smooth: { def: 3, text: 'Smooth' },
                },
                update: `
                    let k = sma(stoch(close, high, low, param_k), smooth)
                    let d = sma(k, param_d)
                    return [k[0], d[0]]
                `
            }
        }
    },
    computed: {
        sett() {
            return this.$props.settings
        },
        line_width() {
            return this.sett.lineWidth || 0.75
        },
        k_color() {
            return this.sett.kColor || '#3782f2'
        },
        d_color() {
            return this.sett.dColor || '#f48709'
        },
        band_color() {
            return this.sett.bandColor || '#ddd'
        },
        back_color() {
            return this.sett.backColor || '#381e9c16'
        }
    }

}
</script>
