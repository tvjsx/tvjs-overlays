<script>
//Ichimoku Indicator Overlay. Expected Format: [ <timestamp>, <ConversionLine>, <BaseLine>, <Lead1>, <Lead2>, <Lagging> ]
import { Overlay } from 'trading-vue-js'

export default {
    name: "Ichimoku",
    mixins: [Overlay],
    data() {
        return {
            ctxTenkan: {},
            ctxKijun: {},
            ctxSenkouSpanA: {},
            ctxSenkouSpanB: {},
            ctxChinkou: {},
            ctxFillKumo: {},
            tenkan: [],
            kijun: [],
            senkouSpanA: [],
            senkouSpanB: [],
            chinkou: [],
            offset: 26,
            tenkanLineWidth: 1,
            kijunLineWidth: 1,
            senkouSpanALineWidth: 1,
            senkouSpanBLineWidth: 1,
            chinkouLineWidth: 1,
            colorTenkan: "#52A634",
            colorKijun: "#52A59D",
            colorSenkouSpanA: "#438625",
            colorSenkouSpanB: "#bd003c",
            colorChinkou: "#BF2A64",
            colorKumoUp: "#063f0f",
            colorKumoDown: "#391c19",
            showTenkan: true,
            showKijun: true,
            showSenkouSpanA: true,
            showSenkouSpanB: true,
            showChinkou: true,
            showFillKumo: true
        };
    },
    computed: {
        sett() {
            return this.$props.settings;
        },
        tenkan_color() {
            return this.sett['tenkan-color'] || this.colorTenkan;
        },
        kijun_color() {
            return this.sett['kijun-color'] || this.colorKijun;
        },
        senkou_spanA_color() {
            return this.sett['senkou_spanA_color'] || this.colorSenkouSpanA;
        },
        senkou_spanB_color() {
            return this.sett['senkou_spanB_color'] || this.colorSenkouSpanB;
        },
        chinkou_color() {
            return this.sett['chinkou_color'] || this.colorChinkou;
        },
        kumo_up_color() {
            return this.sett['kumo_up_color'] || this.colorKumoUp;
        },
        kumo_down_color() {
            return this.sett['kumo_down_color'] || this.colorKumoDown;
        },
        tenkan_line_width() {
            return this.sett['tenkan_line_width'] || this.tenkanLineWidth;
        },
        kijun_line_width() {
            return this.sett['kijun_line_width'] || this.kijunLineWidth;
        },
        senkou_spanA_line_width() {
            return this.sett['senkou_spanA_line_width'] || this.senkouSpanALineWidth;
        },
        senkou_spanB_line_width() {
            return this.sett['senkou_spanB_line_width'] || this.senkouSpanBLineWidth;
        },
        chinkou_line_width() {
            return this.sett['chinkou_line_width'] || this.chinkouLineWidth;
        },
    },
    methods: {
        meta_info() {
            return {
                author: "Sudeep Batra",
                version: "1.0.0"
            };
        },
        draw(ctx) {
            const layout = this.$props.layout;
            const propsSub = this.$props.sub;

            this.ctxTenkan = ctx;
            this.ctxKijun = ctx;
            this.ctxSenkouSpanA = ctx;
            this.ctxSenkouSpanB = ctx;
            this.ctxChinkou = ctx;
            this.ctxFillKumo = ctx;

            var subdata = this.$props.data.slice(0, propsSub.length);
            var subdataSenkouSpan = this.$props.data.slice(0, propsSub.length + this.offset);
            var subdataChinkou = this.$props.data.slice(0, propsSub.length - this.offset);

            if (this.showFillKumo) {
                this.ctxFillKumo.beginPath();

                var ind = 0;
                for (var currItem of subdataSenkouSpan) {
                    if (ind > 1) {
                        let p1 = this.map_senkou_span_values(subdataSenkouSpan[ind - 1]);
                        let p2 = this.map_senkou_span_values(currItem);
                        this.ctxSenkouSpanB.beginPath();
                        this.ctxSenkouSpanB.moveTo(p1.x, p1.senkouSpanA);
                        this.ctxSenkouSpanB.lineTo(p2.x + 0.1, p2.senkouSpanA);
                        this.ctxSenkouSpanB.lineTo(p2.x + 0.1, p2.senkouSpanB);
                        this.ctxSenkouSpanB.lineTo(p1.x, p1.senkouSpanB);
                        if (p1.senkouSpanA >= p1.senkouSpanB) {
                            this.ctxSenkouSpanB.fillStyle = this.kumo_down_color;
                        } else {
                            this.ctxSenkouSpanB.fillStyle = this.kumo_up_color;
                        }

                        this.ctxSenkouSpanB.fill();
                    }

                    ind++;
                }
                this.ctxSenkouSpanB.stroke();
            }

            if (this.showTenkan) {
                this.ctxTenkan.beginPath();

                for (var pTenkan of subdata) {
                    this.ctxTenkan.strokeStyle = this.tenkan_color;
                    this.ctxTenkan.lineWidth = this.tenkan_line_width;
                    this.ctxTenkan.lineTo(layout.t2screen(pTenkan[0]), layout.$2screen(pTenkan[1]));
                }

                this.ctxTenkan.stroke();
            }

            if (this.showKijun) {
                this.ctxKijun.beginPath();

                for (var pKijun of subdata) {
                    this.ctxKijun.strokeStyle = this.kijun_color;
                    this.ctxKijun.lineWidth = this.kijun_line_width;
                    this.ctxKijun.lineTo(layout.t2screen(pKijun[0]), layout.$2screen(pKijun[2]));
                }

                this.ctxKijun.stroke();
            }

            if (this.showSenkouSpanA) {
                this.ctxSenkouSpanA.beginPath();
                for (var pSenkouSpanA of subdataSenkouSpan) {
                    this.ctxSenkouSpanA.strokeStyle = this.senkou_spanA_color;
                    this.ctxSenkouSpanA.lineWidth = this.senkou_spanA_line_width;
                    this.ctxSenkouSpanA.lineTo(layout.t2screen(pSenkouSpanA[0]), layout.$2screen(pSenkouSpanA[3]));
                }

                this.ctxSenkouSpanA.stroke();
            }

            if (this.colorSenkouSpanB) {
                this.ctxSenkouSpanB.beginPath();
                for (var pSenkouSpanB of subdataSenkouSpan) {
                    this.ctxSenkouSpanB.strokeStyle = this.senkou_spanB_color;
                    this.ctxSenkouSpanB.lineWidth = this.senkou_spanB_line_width;
                    this.ctxSenkouSpanB.lineTo(layout.t2screen(pSenkouSpanB[0]), layout.$2screen(pSenkouSpanB[4]));
                }

                this.ctxSenkouSpanB.stroke();
            }

            if (this.showChinkou) {
                this.ctxChinkou.beginPath();
                for (var pChikou of subdataChinkou) {
                    this.ctxChinkou.strokeStyle = this.chinkou_color;
                    this.ctxChinkou.lineWidth = this.chinkou_line_width;
                    this.ctxChinkou.lineTo(layout.t2screen(pChikou[0]), layout.$2screen(pChikou[5]));
                }

                this.ctxChinkou.stroke();
            }
        },
        map_senkou_span_values(p) {
            const layout = this.$props.layout;

            return (
                p && {
                    x: layout.t2screen(p[0]),
                    senkouSpanA: layout.$2screen(p[3]),
                    senkouSpanB: layout.$2screen(p[4])
                }
            );
        },
        use_for() {
            return ["Ichimoku"];
        },
        data_colors() {
            let colors = [];
            colors.push(this.tenkan_color)
            colors.push(this.kijun_color)
            colors.push(this.senkou_spanA_color)
            colors.push(this.senkou_spanB_color)
            colors.push(this.chinkou_color)

            return colors;
        }
    },
};
</script>
