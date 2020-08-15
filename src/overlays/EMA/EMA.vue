<script>

import { Overlay } from 'trading-vue-js'

export default {
    name: 'EMA',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return {
                author: 'StdSquad', version: '1.0.0',
                desc: 'Exponential Moving Average'
            }
        },
        use_for() { return ['EMA'] },
        calc() {
            return {
                props: {
                    length: { def: 12, text: 'Length' }
                },
                conf: { renderer: 'Spline' },
                update: `
                    return ema(close, length)[0]
                `
            }
        }
    }
}
</script>
