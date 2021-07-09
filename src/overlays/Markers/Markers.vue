<script>
import { Overlay } from 'trading-vue-js'

export default {
    name: 'Markers',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return {
                author: 'C451', version: '1.0.1',
                desc: 'Interactive markers'
            }
        },
        init() {
            this.mouse.on('mousemove', () => {})
        },

        draw(ctx) {

            ctx.lineWidth = 1.5
            ctx.strokeStyle = 'black'
            document.body.style.cursor = 'auto'
            this.selected = null

            for (var p of this.$props.data) {

                this.draw_point(ctx, p)

            }

            let f = this.data.find(x => x[1].sel)
            if (f) {
                this.draw_point(ctx, f)
            }
        },

        draw_point(ctx, p) {

            let layout = this.$props.layout
            let stroke = this.colors.back

            let fill = p[1].color || 'orange'
            let radius = 2
            let height = p[1].sel ? 20 : 14
            let width = p[1].sel ? 17 : 13
            let x = layout.t2screen(p[0]) - width * 0.5
            let y = layout.$2screen(p[1].$) - (p[1].sel ? 27 : 20)

            // Collisions
            if (this.mouse.x > x && this.mouse.x < x + width &&
                this.mouse.y > y && this.mouse.y < y + height) {
                document.body.style.cursor = 'pointer'
                this.selected = p
                stroke = this.colors.text
            }

            ctx.beginPath()
            ctx.moveTo(x + radius, y)
            ctx.lineTo(x + width - radius, y)
            ctx.quadraticCurveTo(x + width, y, x + width, y + radius)
            ctx.lineTo(x + width, y + height - radius)
            ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
            ctx.lineTo(x + width * 1 / 2, y + height + height / 5)
            ctx.lineTo(x + radius, y + height);
            ctx.quadraticCurveTo(x, y + height, x, y + height - radius)
            ctx.lineTo(x, y + radius)
            ctx.quadraticCurveTo(x, y, x + radius, y)

            ctx.lineWidth = 1
            ctx.closePath()
            ctx.fillStyle = fill
            ctx.strokeStyle = stroke
            ctx.fill()
            ctx.stroke()

            ctx.textAlign ='center'
            ctx.fillStyle = p[1].textColor || this.colors.back
            ctx.font = `${ p[1].sel ? 15 : 11 }px Arial`
            ctx.fillText(p[1].text || '$', x+width/2, y + height * 0.8)

        },

        use_for() {
            return ['Markers']
        },

        legend() {
            return []
        },

        mousedown() {
            this.$emit('marker-selected', this.selected)
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
        new_font() {
            return this.sett.font || this.default_font
        }
    },
    data() {
        return {
            selected: null
        }
    }

}
</script>
