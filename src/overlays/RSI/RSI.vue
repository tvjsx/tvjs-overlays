<script>

import { Overlay } from 'trading-vue-js'

export default {
    name: 'RSI',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return {
                author: 'StdSquad', version: '1.0.0',
                desc: 'Relative Strength Index',
                preset: {
                    name: 'RSI $length',
                    side: 'offchart',
                    settings: {
                        lineWidth: 0.75,
                        color: '#ec206e',
                        bandColor: '#aaa',
                        backColor: '#9b9ba316',
                    }
                }
            }
        },
        use_for() { return ['RSI'] },
        calc() {
            return {
                props: {
                    length: { def: 14, text: 'Length' }
                },
                conf: { renderer: 'Range' },
                update: `return rsi(close, length)[0]`
            }
        }
    }
}
</script>
