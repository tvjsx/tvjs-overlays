<script>
//Long Short Overlay. Expected Format: [ <timestamp>, <Short:0 Long:1 ShortCover: 2 LongCover:3>, <Price Change>, <Percent Price Change>, <Open Price>, <High Price>, <Low Price>, <Close Price> ]
import { Overlay, Tool } from 'trading-vue-js'

export default {
    name: 'LongShortTrades',
    mixins: [Overlay],
    computed: {
        sett() {
            return this.$props.settings
        },
        default_font() {
            return '12px ' + this.$props.font.split('px').pop()
        },
        currency_symbol() {
            return this.sett.currency || '₹'
        },
        long_color() {
            return this.sett.longColor || '#63df89'
        },
        short_color() {
            return this.sett.shortColor || '#ffd581'
        },
        long_cover_color() {
            return this.sett.longCoverColor || '#fc7e2f'
        },
        short_cover_color() {
            return this.sett.shortCoverColor || '#ff6bd6'
        },
        label_color() {
            return '#4BECF9'
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
    },
    methods: {
        meta_info() {
            return {
                author: 'Sudeep Batra',
                version: '1.0.1'
            }
        },
        draw(ctx) {
            let layout = this.$props.layout
            ctx.lineWidth = 1.5
            ctx.strokeStyle = 'black'
            for (var p of this.$props.data) {
                let tradeTime = p[0]
                let longShortEntryExit = p[1]
                let priceChange = p[2]
                let percentPriceChange = p[3]
                let openPrice = p[4]
                let highPrice = p[5]
                let lowPrice = p[6]
                let closePrice = p[7]

                let x = layout.t2screen(tradeTime)
                let lowPriceY = layout.$2screen(lowPrice)
                let highPriceY = layout.$2screen(highPrice)

                switch (longShortEntryExit) {
                    case 0:
                        this.filledArrowDownFilledBottom(ctx, x, highPriceY - 25, 5, 5, 3, 20, this.short_color)
                        this.draw_label(ctx, x+30, highPriceY - 35, this.currency_symbol + closePrice)
                        break
                    case 1:
                        this.filledArrowUpFilledBottom(ctx, x, lowPriceY + 20, 5, 5, 3, 20, this.long_color)
                        this.draw_label(ctx, x+30, lowPriceY + 40, this.currency_symbol + closePrice)
                        break
                    case 2:
                        this.upTriangle(ctx, x, lowPriceY + 25, 5, 7, this.short_cover_color)
                        if (this.show_label && priceChange) {
                            this.draw_label(ctx, x, lowPriceY + 50, priceChange + " (" + percentPriceChange + ")")
                        }
                        break
                    case 3:
                        this.downTriangle(ctx, x, highPriceY - 25, 5, 7, this.long_cover_color)
                        if (this.show_label && priceChange) {
                            this.draw_label(ctx, x, highPriceY - 45, priceChange + " (" + percentPriceChange + ")")
                        }
                        break
                    default:
                        ctx.fillStyle = 'black'
                }

                // this.simpleArrowUp(ctx, x, z - 25, '#84e5b1')
                // this.simpleArrowDown(ctx, x, z - 25, '#84e5b1')
                // this.filledArrowUp(ctx, x, z - 25, 5, 5, 20, '#84e5b1')
                // this.filledDownArrow(ctx, x, z - 25, 5, 5, 20, '#84e5b1')
                // this.filledArrowUpFilledBottom(ctx, x, z - 25, 5, 5, 3, 20, '#84e5b1')
                // this.filledArrowDownFilledBottom(ctx, x, z - 25, 5, 5, 3, 20, '#84e5b1')
                // this.upTriangle(ctx, x, z-60, 5, 7, '#84e5b1')
                // this.downTriangle(ctx, x, z - 25, 5, 7, '#84e5b1')

            }
        },

        draw_label(ctx, x, y, labelText) {
            ctx.fillStyle = this.label_color
            ctx.font = this.new_font
            ctx.textAlign = 'center'
            ctx.fillText(labelText, x, y)
        },
        use_for() {
            return ['LongShortTrades']
        },

        legend(values) {
            switch (values[1]) {
                case 0:
                    var pos = 'Short'
                    break
                case 1:
                    pos = 'Long'
                    break
                case 2:
                    pos = 'Short Cover'
                    break
                case 3:
                    pos = 'Long Cover'
                    break
                default:
                    pos = 'Unknown'
            }
            return [{
                    value: pos
                },
                {
                    value: values[2].toFixed(4),
                    color: this.$props.colors.colorText
                }
            ].concat(values[3] ? [{
                value: values[3]
            }] : [])
        },
        simpleArrowUp(ctx, x, y, color) {
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.strokeStyle = color;
            ctx.moveTo(x - 5, y + 5);
            ctx.lineTo(x, y);
            ctx.lineTo(x + 5, y + 5);
            ctx.moveTo(x, y);
            ctx.lineTo(x, y + 15);
            ctx.stroke();
            ctx.closePath();
        },
        simpleArrowDown(ctx, x, y, color) {
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.strokeStyle = color;
            ctx.moveTo(x - 5, y - 5);
            ctx.lineTo(x, y);
            ctx.lineTo(x + 5, y - 5);
            ctx.moveTo(x, y);
            ctx.lineTo(x, y - 15);
            ctx.stroke();
            ctx.closePath();
        },
        filledArrowUp(ctx, x, y, width, height, depth, color) {
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.strokeStyle = color;
            ctx.moveTo(x - width, y + height);
            ctx.lineTo(x, y);
            ctx.lineTo(x + width, y + height);
            ctx.moveTo(x, y);
            ctx.lineTo(x, y + depth);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        },
        filledDownArrow(ctx, x, y, width, height, depth, color) {
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.strokeStyle = color;
            ctx.moveTo(x - width, y - height);
            ctx.lineTo(x, y);
            ctx.lineTo(x + width, y - height);
            ctx.moveTo(x, y);
            ctx.lineTo(x, y - depth);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        },
        filledArrowUpFilledBottom(ctx, x, y, width, height, bottom, depth, color) {
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.strokeStyle = color;
            ctx.moveTo(x - width, y + height);
            ctx.lineTo(x, y);
            ctx.lineTo(x + width, y + height);
            ctx.moveTo(x, y);
            ctx.rect(x - bottom / 2, y + height, bottom, depth);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        },
        filledArrowDownFilledBottom(ctx, x, y, width, height, bottom, depth, color) {
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.strokeStyle = color;
            ctx.moveTo(x - width, y - height);
            ctx.lineTo(x, y);
            ctx.lineTo(x + width, y - height);
            ctx.moveTo(x, y);
            ctx.rect(x - bottom / 2, y - height - depth, bottom, depth);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        },
        upTriangle(ctx, x, y, width, height, color) {
            ctx.beginPath()
            ctx.fillStyle = color
            ctx.strokeStyle = color
            ctx.moveTo(x - width, y + height)
            ctx.lineTo(x, y)
            ctx.lineTo(x + width, y + height)
            ctx.fill()
            ctx.stroke()
            ctx.closePath()
        },
        downTriangle(ctx, x, y, width, height, color) {
            ctx.beginPath()
            ctx.fillStyle = color
            ctx.strokeStyle = color
            ctx.moveTo(x - width, y - height)
            ctx.lineTo(x, y)
            ctx.lineTo(x + width, y - height)
            ctx.fill()
            ctx.stroke()
            ctx.closePath()
        }
    }
}
</script>
