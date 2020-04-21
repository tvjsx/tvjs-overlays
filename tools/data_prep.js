
const fs = require('fs')
const path = require('path')
const argv = require('minimist')(process.argv.slice(2))

if (!argv._.length) {
    console.log(`Usage: data_prep.js <data_path>
    Commands & settings:
    --slice=<N>      :: Slice the last N candles (and filter overlays)
    --filter=<t1,t2> :: Slice by timestamp t1 & t2
    --out=<path>     :: Output file (./~<filename> by default)
    --overlay=<Name> :: Remove all overlays except <Name>
    `)
    process.exit()
}


const raw = fs.readFileSync(argv._[0], 'utf-8')
const data = JSON.parse(raw)

if (argv.slice) {

    if (data.ohlcv) {
        data.ohlcv =  data.ohlcv.slice(-argv.slice)
        var src = data.ohlcv
    } else {
        data.chart.data = data.chart.data.slice(-argv.slice)
        src = data.chart.data
    }

    let t1 = src[0][0]

    for (var ov of data.onchart || []) {
        ov.data = ov.data.filter(x => x[0] >= t1)
    }

    for (var ov of data.offchart || []) {
        ov.data = ov.data.filter(x => x[0] >= t1)
    }

}

if (argv.filter) {

    let range = argv.filter.split(',')

    let t1 = parseInt(range[0])
    let t2 = parseInt(range[1])

    if (data.ohlcv) {
        data.ohlcv = data.ohlcv.filter(
            x => x[0] >= t1 && x[0] <= t2
        )
    } else {
        data.chart.data = data.chart.data.filter(
            x => x[0] >= t1 && x[0] <= t2
        )
    }

    for (var ov of data.onchart || []) {
        ov.data = ov.data.filter(
            x => x[0] >= t1 && x[0] <= t2
        )
    }

    for (var ov of data.offchart || []) {
        ov.data = ov.data.filter(
            x => x[0] >= t1 && x[0] <= t2
        )
    }
}

if (argv.overlay) {

    var i = (data.onchart || []).length
    while (i--) {
        let ov = data.onchart[i]
        if (ov.name !== argv.overlay) {
            data.onchart.splice(i, 1)
        }
    }

    var i = (data.offchart || []).length
    while (i--) {
        let ov = data.offchart[i]
        if (ov.name !== argv.overlay) {
            data.offchart.splice(i, 1)
        }
    }

}

let d = path.dirname(argv._[0])
let out = argv.out || (`${d}/~` + path.basename(argv._[0]))
fs.writeFileSync(out, JSON.stringify(data, null, 4))
