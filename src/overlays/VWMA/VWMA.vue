<script>

import { Overlay } from 'trading-vue-js'

export default {
    name: 'VWMA',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return {
                author: 'StdSquad', version: '1.0.0',
                desc: 'Volume Weighted Moving Average',
                preset: {
                    name: 'VWMA $length',
                    side: 'onchart',
                    settings: {
                        lineWidth: 0.75,
                        color: '#db0670'
                    }
                }
            }
        },
        use_for() { return ['VWMA'] },
        calc() {
            return {
                props: {
                    length: { def: 20, text: 'Length' }
                },
                conf: { renderer: 'Spline' },
                update: `
                    return vwma(close, length)[0]
                `
            }
        }
    }
}
</script>
