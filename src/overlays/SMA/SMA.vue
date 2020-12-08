<script>

import { Overlay } from 'trading-vue-js'

export default {
    name: 'SMA',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return {
                author: 'StdSquad', version: '1.0.0',
                desc: 'Simple Moving Average',
                preset: {
                    name: 'SMA $length',
                    side: 'onchart',
                    settings: {
                        lineWidth: 0.75,
                        color: '#d1385c'
                    }
                }
            }
        },
        use_for() { return ['SMA'] },
        calc() {
            return {
                props: {
                    length: { def: 25, text: 'Length' }
                },
                conf: { renderer: 'Spline' },
                update: `
                    return sma(close, length)[0]
                `
            }
        }
    }
}
</script>
