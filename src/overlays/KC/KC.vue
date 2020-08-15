<script>

import { Overlay } from 'trading-vue-js'

export default {
    name: 'KC',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return {
                author: 'StdSquad', version: '1.0.0',
                desc: 'Keltner Channels'
            }
        },
        use_for() { return ['KC'] },
        calc() {
            return {
                props: {
                    length: { def: 20, text: 'Length' },
                    mult: { def: 1, text: 'Multiplier' },
                    use_tr: { def: true, text: 'Use True Range' },
                },
                conf: { renderer: 'Channel' },
                update: `
                    let [m, h, l] = kc(close, length, mult, use_tr)
                    return [h[0], m[0], l[0]]
                `
            }
        }
    }
}
</script>
