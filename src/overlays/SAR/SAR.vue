<script>

import { Overlay } from 'trading-vue-js'

export default {
    name: 'SAR',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return {
                author: 'StdSquad', version: '1.0.0',
                desc: 'Parabolic SAR',
                preset: {
                    name: 'SAR $start $inc $max',
                    side: 'onchart',
                    settings: {
                        lineWidth: 2,
                        color: '#35a9c6'
                    }
                }
            }
        },
        use_for() { return ['SAR'] },
        calc() {
            return {
                props: {
                    start: { def: 0.02, text: 'Start' },
                    inc: { def: 0.02, text: 'Increment' },
                    max: { def: 0.2, text: 'Maximum' }
                },
                conf: { renderer: 'PlotCross' },
                update: `
                    return sar(start, inc, max)[0]
                `
            }
        }
    }
}
</script>
