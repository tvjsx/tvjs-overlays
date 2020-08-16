<script>

import { Overlay } from 'trading-vue-js'

export default {
    name: 'Histogram',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return {
                author: 'StdSquad', version: '1.0.0',
                desc: 'Histogram plot' 
            }
        },

        draw(ctx) {
            ctx.lineWidth = this.line_width
            ctx.strokeStyle = this.color
            ctx.beginPath()

            const layout = this.$props.layout
            const base = layout.$2screen(0) + 0.5
            const off = this.line_width % 2 ? 0 : 0.5

            // Color changed
            let changed = false
            for (var p of this.$props.data) {

                let x = layout.t2screen(p[0]) - off
                let y = layout.$2screen(p[1]) - 0.5
                let changed = false

                if (p[2]) {
                    if (ctx.strokeStyle !== p[2]) {
                        ctx.stroke()
                        changed = true
                    }
                    ctx.strokeStyle = p[2]
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
        },
        use_for() { return ['Histogram'] },
        legend(values) {
            let x = values[1]
            if (typeof x === "number") {
                x = x.toFixed(Math.abs(x) > 0.001 ? 4 : 8)
            }
            return [{
                value: x,
                color:values[2] || this.color
            }]
        },
    },
    // Define internal setting & constants here
    computed: {
        sett() {
            return this.$props.settings
        },
        line_width() {
            return this.sett.lineWidth || 2
        },
        color() {
            const n = this.$props.num % 5
            return this.sett.color || this.COLORS[n]
        }
    },
    data() {
        return {
            COLORS:
            [
                '#888888', '#42b28a', '#5691ce', '#612ff9',
                '#d50b90', '#ff2316'
            ]
        }
    }

}
</script>
