<script>

import { Overlay } from 'trading-vue-js'

export default {
    name: 'SWMA',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return {
                author: 'StdSquad', version: '1.0.0',
                desc: 'Symmetrically Weighted Moving Average'
            }
        },
        use_for() { return ['SWMA'] },
        calc() {
            return {
                props: {},
                conf: { renderer: 'Spline' },
                update: `
                    return swma(close)[0]
                `
            }
        }
    }
}
</script>
