<script>

import { Overlay } from 'trading-vue-js'

export default {
    name: 'HMA',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return {
                author: 'StdSquad', version: '1.0.0',
                desc: 'Hull Moving Average',
                preset: {
                    name: 'HMA $length',
                    side: 'onchart',
                    settings: {
                        lineWidth: 0.75,
                        color: '#3af475'
                    }
                }
            }
        },
        use_for() { return ['HMA'] },
        calc() {
            return {
                props: {
                    length: { def: 10, text: 'Length' }
                },
                conf: { renderer: 'Spline' },
                update: `
                    return hma(close, length)[0]
                `
            }
        }
    }
}
</script>
