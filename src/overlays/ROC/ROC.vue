<script>

import { Overlay } from 'trading-vue-js'

export default {
    name: 'ROC',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return {
                author: 'StdSquad', version: '1.0.0',
                desc: 'Rate of Change',
                preset: {
                    name: 'ROC $length',
                    side: 'offchart',
                    settings: {
                        lineWidth: 0.75,
                        color: '#279fc4'
                    }
                }
            }
        },
        use_for() { return ['ROC'] },
        calc() {
            return {
                props: {
                    length: { def: 9, text: 'Length' }
                },
                conf: { renderer: 'Spline' },
                update: `
                    return roc(close, length)[0]
                `
            }
        }
    }
}
</script>
