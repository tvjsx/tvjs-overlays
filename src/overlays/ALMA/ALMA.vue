<script>

import { Overlay } from 'trading-vue-js'

export default {
    name: 'ALMA',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return {
                author: 'StdSquad', version: '1.0.0',
                desc: 'Arnaud Legoux Moving Average',
                preset: {
                    name: 'ALMA $length $offset $sigma',
                    side: 'onchart',
                    settings: {
                        lineWidth: 0.75,
                        color: '#559de0'
                    }
                }
            }
        },
        use_for() { return ['ALMA'] },
        calc() {
            return {
                props: {
                    length: { def: 10, text: 'Length' },
                    offset: { def: 0.9, text: 'Offset' },
                    sigma: { def: 5, text: 'Sigma' }
                },
                conf: { renderer: 'Spline' },
                update: `
                    return alma(close, length, offset, sigma)[0]
                `
            }
        }
    }
}
</script>
