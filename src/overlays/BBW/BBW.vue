<script>

import { Overlay } from 'trading-vue-js'

export default {
    name: 'BBW',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return {
                author: 'StdSquad', version: '1.0.0',
                desc: 'Bollinger Bands Width'
            }
        },
        use_for() { return ['BBW'] },
        calc() {
            return {
                props: {
                    length: { def: 21, text: 'Length' },
                    stddev: { def: 2, text: 'StdDev' }
                },
                conf: { renderer: 'Spline' },
                update: `
                    return bbw(close, length, stddev)[0]
                `
            }
        }
    }
}
</script>
