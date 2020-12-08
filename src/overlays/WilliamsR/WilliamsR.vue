<script>

import { Overlay } from 'trading-vue-js'

export default {
    name: 'WilliamsR',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return {
                author: 'StdSquad', version: '1.0.0',
                desc: 'Williams %R',
                preset: {
                    name: '%R $length',
                    side: 'offchart',
                    settings: {
                        lineWidth: 0.75,
                        color: '#0980e8',
                        bandColor: '#aaa',
                        backColor: '#9b9ba316',
                        upper: -20,
                        lower: -80
                    }
                }
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
