<script>

import { Overlay } from 'trading-vue-js'

export default {
    name: 'BB',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return {
                author: 'StdSquad', version: '1.0.0',
                desc: 'Bollinger Bands',
                preset: {
                    name: 'BB $length $stddev',
                    side: 'onchart',
                    settings: {
                        lineWidth: 0.75,
                        color: '#2cc6c9ab',
                        showMid: true,
                        backColor: '#2cc6c90a'
                    }
                }
            }
        },
        use_for() { return ['BB'] },
        calc() {
            return {
                props: {
                    length: { def: 21, text: 'Length' },
                    stddev: { def: 2, text: 'StdDev' }
                },
                conf: { renderer: 'Channel' },
                update: `
                    let [m, h, l] = bb(close, length, stddev)
                    return [h[0], m[0], l[0]]
                `
            }
        }
    }
}
</script>
