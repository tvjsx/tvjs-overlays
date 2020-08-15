<script>

import { Overlay } from 'trading-vue-js'

export default {
    name: 'KCW',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return {
                author: 'StdSquad', version: '1.0.0',
                desc: 'Keltner Channels Width'
            }
        },
        use_for() { return ['KCW'] },
        calc() {
            return {
                props: {
                    length: { def: 20, text: 'Length' },
                    mult: { def: 1, text: 'Multiplier' },
                    use_tr: { def: true, text: 'Use True Range' },
                },
                conf: { renderer: 'Spline' },
                update: `
                    return kcw(close, length, mult, use_tr)[0]
                `
            }
        }
    }
}
</script>
