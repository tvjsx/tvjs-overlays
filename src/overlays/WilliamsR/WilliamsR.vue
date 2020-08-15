<script>

import { Overlay } from 'trading-vue-js'

export default {
    name: 'WilliamsR',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return {
                author: 'StdSquad', version: '1.0.0',
                desc: 'Williams %R'
            }
        },
        use_for() { return ['WilliamsR'] },
        calc() {
            return {
                props: {
                    length: { def: 14, text: 'Length' }
                },
                conf: { renderer: 'Range' },
                update: `
                    return wpr(length)[0]
                `
            }
        }
    }
}
</script>
