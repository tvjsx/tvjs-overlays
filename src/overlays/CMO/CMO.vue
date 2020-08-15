<script>

import { Overlay } from 'trading-vue-js'

export default {
    name: 'CMO',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return {
                author: 'StdSquad', version: '1.0.0',
                desc: 'Chande Momentum Oscillator'
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
