<script>

import { Overlay } from 'trading-vue-js'

const CROSS =
`m512.001 84.853-84.853-84.853-171.147 171.147-171.148-171.147-84.853
84.853 171.148 171.147-171.148 171.148 84.853 84.853 171.148-171.147
171.147 171.147 84.853-84.853-171.148-171.148z`

export default {
    name: 'TradesPlus',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return {
                author: 'C451', version: '1.0.1',
                desc: 'Trades overlay with stops'
            }
        },
        draw(ctx) {
            let layout = this.$props.layout
            ctx.strokeStyle = 'black'
            for (var p of this.$props.data) {

                ctx.fillStyle = p[1] ? this.buy_color : this.sell_color
                let x = layout.t2screen(p[0]) // x - Mapping
                let y = layout.$2screen(p[2]) // y - Mapping

                if (p[3] === 'Stop') {
                    this.draw_cross(ctx, x, y)
                } else {
                    this.draw_circle(ctx, x, y)
                }

                if (this.show_label && p[3] && p[3] !== 'Stop'){
                    this.draw_label(ctx, x, y, p)
                }
            }
        },

        draw_label(ctx, x, y, p) {
            ctx.fillStyle = this.label_color
            ctx.font = this.new_font
            ctx.textAlign = 'center'
            ctx.fillText(p[3], x, y - 25)
        },
        draw_circle(ctx, x, y) {
            ctx.lineWidth = 1.5
            ctx.beginPath()
            ctx.arc(x, y, this.marker_size + 0.5, 0, Math.PI * 2, true)
            ctx.fill()
            ctx.stroke()
        },
        draw_cross(ctx, x, y) {
          	ctx.save()
            let p = new Path2D(CROSS)
            ctx.lineWidth = 150
            ctx.translate(x-5, y-5)
            ctx.scale(0.0175, 0.0175)
            ctx.stroke(p)
            ctx.fill(p)
          	ctx.scale(1, 1)
          	ctx.restore()
        },
        use_for() { return ['TradesPlus'] },

        // Defines legend format (values & colors)
        legend(values) {
            switch (values[1]) {
                case 0:
                    var pos = 'Sell'
                    break
                case 1:
                    pos = 'Buy'
                    break
                default:
                    pos = 'Unknown'
            }

            return [
                {
                    value: pos
                },
                {
                    value: values[2].toFixed(4),
                    color: this.$props.colors.colorText
                }
            ].concat(values[3] ? [
                {
                    value: values[3]
                }
            ] : [])
        }


    },
    // Define internal setting & constants here
    computed: {
        sett() {
            return this.$props.settings
        },
        default_font() {
            return '12px ' + this.$props.font.split('px').pop()
        },
        buy_color() {
            return this.sett.buyColor || '#63df89'
        },
        sell_color() {
            return this.sett.sellColor || '#ec4662'
        },
        label_color() {
            return this.sett.labelColor || this.colors.text
        },
        marker_size() {
            return this.sett.markerSize || 5
        },
        show_label() {
            return this.sett.showLabel !== false
        },
        new_font() {
            return this.sett.font || this.default_font
        }
    }
}
</script>
