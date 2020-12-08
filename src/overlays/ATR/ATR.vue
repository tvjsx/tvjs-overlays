<script>

import { Overlay } from 'trading-vue-js'

export default {
    name: 'ATR',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return {
                author: 'StdSquad', version: '1.0.0',
                desc: 'Average True Range',
                preset: {
                    name: 'ATR $length',
                    side: 'offchart',
                    settings: {
                        lineWidth: 0.75,
                        color: '#e52468'
                    }
                }
            }
        },
        use_for() { return ['ATR'] },
        calc() {
            return {
                props: {
                    length: { def: 15, text: 'Length' }
                },
                conf: { renderer: 'Spline' },
                update: `
                    return atr(length)[0]
                `
            }
        }
    }
}
</script>
