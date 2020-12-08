<script>

import { Overlay } from 'trading-vue-js'

export default {
    name: 'CMO',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return {
                author: 'StdSquad', version: '1.0.0',
                desc: 'Chande Momentum Oscillator',
                preset: {
                    name: 'CMO $length',
                    side: 'offchart',
                    settings: {
                        lineWidth: 0.75,
                        color: '#559de0'
                    }
                }
            }
        },
        use_for() { return ['CMO'] },
        calc() {
            return {
                props: {
                    length: { def: 10, text: 'Length' }
                },
                conf: { renderer: 'Spline' },
                update: `return cmo(close, length)[0]`
            }
        }
    }
}
</script>
