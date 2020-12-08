
// Ohlc object for Ohlcs overlay

export default class XOhlcBar {

    constructor(overlay, ctx, data) {
        this.ctx = ctx
        this.self = overlay
        this.style = data.raw[6] || this.self
        this._draw(data)
    }

    _draw(data) {

        const line_width = this.style.lineWidth
        const hlc_only = (this.style.chartType == "HLC")
        const line_width_half = line_width / 2

        // Bar color
        const bar_color = data.c <= data.o ?
            this.style.upBarColor :
            this.style.downBarColor

        let width = Math.max(data.w, 1)
        let halfwidth = Math.max(Math.floor(width * 0.5), 1)
        let height = Math.abs(data.o - data.c)
        let max_h = data.c === data.o ? 1 : 2
        let s = line_width % 2 === 0 ? 0 : 0.5

        // Draw the line from low to high and open and close also
        this.ctx.strokeStyle = bar_color
        this.ctx.lineWidth = line_width

        this.ctx.beginPath()
        // Draw high to low
        this.ctx.moveTo(Math.floor(data.x - line_width_half)+s, Math.floor(data.h))
        this.ctx.lineTo(Math.floor(data.x - line_width_half)+s, Math.floor(data.l))

        if (width > 1) {
            // Draw open notch
            if (hlc_only) {
                // No open price in consideration
                // Draw open notch with close price
                this.ctx.moveTo(Math.floor(data.x - halfwidth - line_width_half - 1), Math.floor(data.c)-s)
                this.ctx.lineTo(Math.floor(data.x - line_width_half), Math.floor(data.c)-s)
            } else {
                // Draw open notch with open price
                this.ctx.moveTo(Math.floor(data.x - halfwidth - line_width_half - 1), Math.floor(data.o)-s)
                this.ctx.lineTo(Math.floor(data.x - line_width_half), Math.floor(data.o)-s)
            }

            // Draw close notch
            this.ctx.moveTo(Math.floor(data.x - line_width_half), Math.floor(data.c)-s)
            this.ctx.lineTo(Math.floor(data.x + halfwidth - line_width_half + 1), Math.floor(data.c)-s)
        }

        this.ctx.stroke()
    }
}
