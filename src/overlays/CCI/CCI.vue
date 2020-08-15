<script>

import { Overlay } from 'trading-vue-js'

export default {
    name: 'CCI',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return {
                author: 'StdSquad', version: '1.0.0',
                desc: 'Commodity Channel Index'
            }
        },
        use_for() { return ['CCI'] },
        calc() {
            return {
                props: {
                    length: { def: 21, text: 'Length' }
                },
                conf: { renderer: 'Range' },
                update: `return cci(close, length)[0]`
            }
        }
    }
}
</script>
