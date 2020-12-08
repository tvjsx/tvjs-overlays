<script>

import { Overlay } from 'trading-vue-js'

export default {
    name: 'Area51',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return {
                author: '👽', version: '1.0.0',
                desc: 'Gradient area chart'
            }
        },
        draw(ctx) {

            const layout = this.$props.layout
            const data = this.$props.data
            const grd = ctx.createLinearGradient(0, 0, 0, layout.height)
            grd.addColorStop(0, this.back1)
            grd.addColorStop(1, this.back2)

            // Line
            ctx.lineWidth = this.line_width
            ctx.strokeStyle = this.color
            ctx.beginPath()
            for (var p of data) {
                let x = layout.t2screen(p[0])
                let y = layout.$2screen(p[1])
                ctx.lineTo(x, y)
            }
            ctx.stroke()

            // Area
            ctx.fillStyle = grd
            ctx.beginPath()
            let p0 = (data[0] || [])[0]
            let pN = (data[data.length - 1] || [])[0]
            ctx.lineTo(layout.t2screen(p0), layout.height)
            for (var p of data) {
                let x = layout.t2screen(p[0])
                let y = layout.$2screen(p[1])
                ctx.lineTo(x, y)
            }
            ctx.lineTo(layout.t2screen(pN), layout.height)
            ctx.fill()

        },
        use_for() { return ['Area51'] },
        data_colors() { return [this.color] }
    },
    // Define internal setting & constants here
    computed: {
        sett() {
            return this.$props.settings
        },
        line_width() {
            return this.sett.lineWidth || 1.25
        },
        color() {
            return this.sett.color || '#2fd68f'
        },
        back1() {
            return this.sett.back1 || this.color + '15'
        },
        back2() {
            return this.sett.back2 || this.color + '01'
        }
    },
    data() {
        return {}
    }

}
</script>
