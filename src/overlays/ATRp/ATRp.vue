<script>

import { Overlay } from 'trading-vue-js'

export default {
    name: 'ATRp',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return {
                author: 'StdSquad', version: '1.0.0',
                desc: 'Average True Range, %',
                preset: {
                    name: 'ATR% $length',
                    side: 'offchart',
                    settings: {
                        lineWidth: 0.75,
                        color: '#f44336'
                    }
                }
            }
        },
        use_for() { return ['ATRp'] },
        calc() {
            return {
                props: {
                    length: { def: 15, text: 'Length' }
                },
                conf: { renderer: 'Spline' },
                update: `
                    return 100 * atr(length)[0] / close[0]
                `
            }
        }
    }
}
</script>
