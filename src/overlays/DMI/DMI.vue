<script>

import { Overlay } from 'trading-vue-js'

export default {
    name: 'DMI',
    mixins: [Overlay],
    methods: {
        meta_info() {
            return {
                author: 'StdSquad', version: '1.0.0',
                desc: 'Directional Movement Index',
                preset: {
                    name: 'DMI $length $smooth',
                    side: 'offchart',
                    settings: {
                        lineWidth: 0.75,
                        colors: ["#ef1360", "#3782f2", "#f48709"]
                    }
                }
            }
        },
        use_for() { return ['DMI'] },
        calc() {
            return {
                props: {
                    length: { def: 15, text: 'DI Length' },
                    smooth: { def: 15, text: 'ADX Smothing' },
                },
                conf: { renderer: 'Splines' },
                update: `
                    let [adx, dp, dn] = dmi(length, smooth)
                    return [adx[0], dp[0], dn[0]]
                `
            }
        }
    }
}
</script>
