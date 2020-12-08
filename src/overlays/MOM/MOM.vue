<script>

import { Overlay } from 'trading-vue-js'

export default {
    name: 'MOM',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return {
                author: 'StdSquad', version: '1.0.0',
                desc: 'Momentum',
                preset: {
                    name: 'MOM $length',
                    side: 'offchart',
                    settings: {
                        lineWidth: 0.75,
                        color: '#bcc427ee'
                    }
                }
            }
        },
        use_for() { return ['MOM'] },
        calc() {
            return {
                props: {
                    length: { def: 11, text: 'Length' }
                },
                conf: { renderer: 'Spline' },
                update: `
                    return mom(close, length)[0]
                `
            }
        }
    }
}
</script>
