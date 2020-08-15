<script>

import { Overlay } from 'trading-vue-js'

export default {
    name: 'ATR',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return {
                author: 'StdSquad', version: '1.0.0',
                desc: 'Average True Range' 
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
