<script>

import { Overlay } from 'trading-vue-js'

export default {
    name: 'TSI',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return {
                author: 'StdSquad', version: '1.0.0',
                desc: 'True Strength Index',
                preset: {
                    name: 'TSI $long $short $signal',
                    side: 'offchart',
                    settings: {
                        lineWidth: 0.75,
                        colors: ["#3bb3e4", "#f7046d"]
                    }
                }
            }
        },
        use_for() { return ['TSI'] },
        calc() {
            return {
                props: {
                    long: { def: 25, text: 'Long Length' },
                    short: { def: 13, text: 'Short Length' },
                    signal: { def: 13, text: 'Signal Length' }
                },
                conf: { renderer: 'Splines' },
                update: `
                    let val = tsi(close, short, long)
                    let sig = ema(val, signal)
                    return [val[0] * 100, sig[0] * 100]
                `
            }
        }
    }
}
</script>
