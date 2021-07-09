<script>
// Cloud renderer. (Ichimoku)

import { Overlay } from 'trading-vue-js'

export default {
    name: 'Ichi',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return {
                author: 'C451', version: '1.0.0',
                desc: 'Ichimoku Cloud based on scripts'
            }
        },
        draw(ctx) {
            ctx.lineWidth = this.line_width

            for (var i = 0; i < this.$props.data.length - 1; i++) {


                let p1 = this.mapp(this.$props.data[i])
                let p2 = this.mapp(this.$props.data[i+1])

                if (!p2) continue
                if (p1.y1 !== p1.y1) continue // Fix NaN

                // Background
                ctx.beginPath()
                ctx.fillStyle =  p1.y1 < p1.y2 ? this.back1 : this.back2
                ctx.moveTo(p1.x, p1.y1)
                ctx.lineTo(p2.x + 0.1, p2.y1)
                ctx.lineTo(p2.x + 0.1, p2.y2)
                ctx.lineTo(p1.x, p1.y2)
                ctx.fill()

                // Lines
                if (!this.draw_lines) continue
                ctx.beginPath()
                ctx.strokeStyle = this.color1
                ctx.moveTo(p1.x, p1.y1)
                ctx.lineTo(p2.x, p2.y1)
                ctx.stroke()
                ctx.beginPath()
                ctx.strokeStyle = this.color2
                ctx.moveTo(p1.x, p1.y2)
                ctx.lineTo(p2.x, p2.y2)
                ctx.stroke()

            }
        },
        mapp(p) {
            const layout = this.$props.layout
            return p && {
                x:  layout.t2screen(p[0]),
                y1: layout.$2screen(p[1]),
                y2: layout.$2screen(p[2])
            }
        },
        use_for() { return ['Ichi'] },
        data_colors() { return [this.color1, this.color2] },
        calc() {
            return {
                props: {
                    CP: { def: 9, text: 'Conversion Line Length' },
                  	BP: { def: 26, text: 'Base Line Length' },
                  	LSP: { def: 52, text: 'Lagging Span 2 Length' },
                  	DIZ: { def: 26, text: 'Displacement' },
                    baseColor: { def: 'brown', text: 'Base Line Color'},
                    conversionColor: {
                        def: 'lightblue',
                        text: 'Conversion Line Color'
                    },
                    laggingColor: {
                        def: '#66CC66',
                        text: 'Lagging Span Color'
                    }
                },
                update: `
                    let donchian = (len, id) => ts(
                        avg(lowest(low, len)[0], highest(high, len)[0]), id
                    )
                    let conversionLine = donchian(CP, 1)
                    let baseLine = donchian(BP, 2)
                    let leadLine1 = ts(avg(conversionLine[0], baseLine[0]))
                    let leadLine2 = donchian(LSP, 3)
                    let lagging = ts(close[0])


                    offset(this, DIZ - 1)
                    offset(lagging, -DIZ + 1)
                    onchart([conversionLine, baseLine], 'Base Lines', {
                        colors: [conversionColor, baseColor]
                    })
                    onchart(lagging, 'Lagging Span', {
                        color: laggingColor
                    })
                    return [leadLine1[0], leadLine2[0]]
                `
            }
        }
    },
    // Define internal setting & constants here
    computed: {
        sett() {
            return this.$props.settings
        },
        line_width() {
            return this.sett.lineWidth || 0.75
        },
        color1() {
            return this.sett.color1 || 'lightgreen'
        },
        color2() {
            return this.sett.color2 || 'orange'
        },
        back1() {
            return this.sett.back1 || '#79ff9e22'
        },
        back2() {
            return this.sett.back2 || '#ef535022'
        },
        draw_lines() {
            return this.sett.drawLines
        }
    },
    data() {
        return {
            COLORS:
            [
                '#42b28a', '#5691ce', '#612ff9',
                '#d50b90', '#ff2316'
            ]
        }
    }

}
</script>
