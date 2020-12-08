<script>

import { Overlay } from 'trading-vue-js'

export default {
    name: 'Ribbon',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return {
                author: 'StdSquad', version: '1.0.0',
                desc: 'Moving Average Ribbon',
                preset: {
                    name: 'EMA x $number',
                    side: 'onchart',
                    settings: {
                        lineWidth: 0.75,
                        colors: ["#3aaaf4ee"]
                    }
                }
            }
        },
        use_for() { return ['Ribbon'] },
        calc() {
            return {
                props: {
                    start: { def: 10, text: 'Start Length' },
                    number: { def: 5, text: 'Number of Lines' },
                    step: { def: 10, text: 'Length Step' }
                },
                conf: { renderer: 'Splines' },
                update: `
                    this[0] = []
                    for (var i = 0; i < number; i++) {
                        let l = start + i * step
                        this[0].push(ema(close, l)[0])
                    }
                `
            }
        }
    }
}
</script>
