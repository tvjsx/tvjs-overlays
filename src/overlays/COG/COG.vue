<script>

import { Overlay } from 'trading-vue-js'

export default {
    name: 'COG',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return {
                author: 'StdSquad', version: '1.0.0',
                desc: 'Center of Gravity',
                preset: {
                    name: 'COG $length',
                    side: 'offchart',
                    settings: {
                        lineWidth: 0.75,
                        color: '#559de0'
                    }
                }
            }
        },
        use_for() { return ['COG'] },
        calc() {
            return {
                props: {
                    length: { def: 10, text: 'Length' }
                },
                conf: { renderer: 'Spline' },
                update: `return cog(close, length)[0]`
            }
        }
    }
}
</script>
