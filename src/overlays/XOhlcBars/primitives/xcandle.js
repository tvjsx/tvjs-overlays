
// Candle object for Candles overlay

export default class XCandle {

    constructor(overlay, ctx, data) {
        this.ctx = ctx
        this.self = overlay
        this.style = data.raw[6] || this.self
        this._draw(data)
    }

    _draw(data) {
        // Line width = 1 or 2?
        const line_width = this.style.lineWidth
        const up_hollow = this.style.upCandleHollow
        //console.log("line_width", line_width)
        //console.log("up_hollow", up_hollow)

        // bar color
        const body_color = data.c <= data.o ?
            this.style.upBarColor :
            this.style.downBarColor

        // wick color
        const wick_color = data.c <= data.o ?
            this.style.upBarColor :
            this.style.downBarColor

        // what is this?
        const wick_color_sm = this.style.upBarColor

        let width = Math.max(data.w, 1)
        let halfwidth = Math.max(Math.floor(width * 0.5), 1)
        let height = Math.abs(data.o - data.c)
        let max_h = data.c === data.o ? 1 : 2

        let line_width_half = line_width / 2

        // Draw the wick from low to high of 1px wide as a line
        this.ctx.strokeStyle = width > 1 ? wick_color : wick_color_sm
        this.ctx.lineWidth = line_width

        this.ctx.beginPath()
        // Higher wick
        this.ctx.moveTo(Math.floor(data.x) - line_width_half, Math.floor(data.h))
        this.ctx.lineTo(Math.floor(data.x) - line_width_half, Math.floor(Math.min(data.o, data.c)))
        // Lower wick
        this.ctx.moveTo(Math.floor(data.x) - line_width_half, Math.floor(Math.max(data.o, data.c)))
        this.ctx.lineTo(Math.floor(data.x) - line_width_half, Math.floor(data.l))
        this.ctx.stroke()


        // Draw the body
        if (data.w > line_width + 0.5 || data.o === data.c) {
            // Draw a body as a rectangle if it is thick (>1.5).

            let hollow = false
            if (up_hollow && data.c <= data.o)
                hollow = true

            if (hollow) {
                this.ctx.strokeStyle = body_color
                this.ctx.lineWidth = line_width
                let s = data.c >= data.o ? 1 : -1
                this.ctx.beginPath()
                this.ctx.rect(
                    Math.floor(data.x - halfwidth - line_width),
                    Math.floor(data.o),
                    Math.floor(halfwidth * 2 + line_width),
                    Math.floor(s * Math.max(height, max_h))
                )
                this.ctx.stroke()
            } else {
                this.ctx.fillStyle = body_color
                let s = data.c >= data.o ? 1 : -1
                this.ctx.fillRect(
                    Math.floor(data.x - halfwidth - line_width),
                    Math.floor(data.o),
                    Math.floor(halfwidth * 2 + line_width),
                    Math.floor(s * Math.max(height, max_h))
                )
            }

        } else {
            // Draw a body as a line if it is too thin.
            // The line will be drawn of wick_width.

            this.ctx.strokeStyle = body_color
            this.ctx.lineWidth = line_width
            this.ctx.beginPath()
            this.ctx.moveTo(Math.floor(data.x) - line_width_half, Math.floor(Math.min(data.o, data.c)),)
            this.ctx.lineTo(Math.floor(data.x) - line_width_half, Math.floor(Math.max(data.o, data.c)),)
            this.ctx.stroke()

        }

    }

}
