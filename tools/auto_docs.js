
// Auto documentation for overlays

// Auto overlay list (auto-gen .md table)
const minimist = require('minimist')
const argv = minimist(process.argv.slice(2))
const fetch = require('node-fetch')
const puppeteer = require('puppeteer')
const fs = require('fs')

// For the parser
//process.argv.push('--silent')

const BASE = `https://api.github.com/repos/tvjsx/trading-vue-js/contents/`
const OVLIST = `src/components/overlays`
const TEMP = (name, info, sett, data, desc) =>
`
# ${name}

<table><tr><td>
  <img width="800" heigth="480" src="screen.png" alt="screen">
</td></tr></table>

## Info

${info}

## Settings

${sett}

## How to use

\`\`\`html
<template>
<trading-vue :overlays="overlays"></trading-vue>
</template>
<script>

import TradingVue from 'trading-vue-js'
import Overlays from 'tvjs-overlays'

export default {
    name: 'app',
    components: { TradingVue },
    data() {
        return {
            overlays: [Overlays['${name}']]
        }
    }
}

</script>

\`\`\`

## Overlay data example

\`\`\`json
${data}
\`\`\`

## Read more about ${name}

[Investopedia: ${name}](https://www.investopedia.com/search?q=${name})<br>
[Investopedia: ${desc}](https://www.investopedia.com/search?q=${desc})

`

let parser = require('../webpack/overlay-parser.js')
let list = parser.parse()
let std = [...list]

console.log(`Loading std renderer list`.gray)

fetch(BASE + OVLIST).then(res => res.json()).then(async res => {
    for (var ov of res) {
        console.log(`Loading `.gray + `'${ov.name}'`)
        let r = await fetch(ov.download_url)
        let src = await r.text()
        let out = parser.extract_info(null, src)
        std.push(out)
    }

    parse()
})

async function parse() {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setViewport({
        width: 800,
        height: 480,
        deviceScaleFactor: 1
    })

    for (var ov of list) {

        console.log(`Making docs for `.gray + ov.name)

        // Screen
        let p = '8080' || argv.port
        let url = `http://localhost:${p}/?ov=${ov.name}&nm=false&header=false`
        await page.goto(url)

        await new Promise((rs, rj) => setTimeout(rs, 1000))
        await page.screenshot({path: ov.path + '/screen.png'})

        try {
            var data = null
            let df = fs.readFileSync(ov.path + '/data.json', 'utf-8')
            let ds = JSON.parse(df)
            let f1 = (ds.onchart || []).find(x => x.type === ov.name)
            let f2 = (ds.offchart || []).find(x => x.type === ov.name)
            if (f1) data = f1.data.slice(0, 10)
            if (f2) data = f2.data.slice(0, 10)
        } catch(e) {
            console.log(`Couldn't load data for ${ov.name}`, e)
        }

        let txt = TEMP(
            ov.name,
            format_info(ov),
            format_sett(ov),
            JSON.stringify(data || [], null, 4),
            (ov.methods.meta_info().desc || '')
                .replace(/\s/g, '%20')
        )

        fs.writeFileSync(ov.path + '/README.md', txt)
    }

    await browser.close();
}



function format_info(ov) {

    const HEAD =
        '| Author | Type | Description | Version |\n' +
        '| ------ | ---- | ----------- | ------- |\n'

    let a = ov.methods.meta_info().author
    if (ov.methods.tool) {
        var t = 'Tool'
    } else {
        var t = "OV"
        if (ov.methods.calc) {
            t += '+Script'
        }
    }
    let d = ov.methods.meta_info().desc || ''
    let v = ov.methods.meta_info().version
    let body = `| ${a} | ${t} | ${d} | ${v} |\n`

    return HEAD + body

}

function format_sett(ov) {

    const HEAD =
        '| Name | Description | Default |\n' +
        '| ---- | ----------- | ------- |\n'
    let all = []

    if (ov.methods.calc) {
        let calc = ov.methods.calc()
        for (var k in calc.props) {
            all.push({
                name: k,
                desc: calc.props[k].text || sett2desc(k),
                def: calc.props[k].def || ''
            })
        }
        if (calc.conf && calc.conf.renderer) {
            let type
            if (typeof calc.conf.renderer === 'string') {
                type = calc.conf.renderer
            } else {
                type = calc.conf.renderer.type
            }
            let f = std.find(x => x.name === type)
            if (f) {
                for (var m of get_all_sett(f.raw_src)) {
                    all.push({
                        name: m,
                        desc: sett2desc(m),
                        def: ''
                    })
                }
            }
        }
    }

    let sett = get_all_sett(ov.raw_src)

    for (var k of sett) {
        all.push({
            name: k,
            desc: sett2desc(k),
            def: ''
        })
    }


    return HEAD +
        all.map(x => `| ${x.name} | ${x.desc} | ${x.def} |`)
           .join('\n')
}

function get_all_sett(src) {
    let R1 = /(\$props\.settings|this\.sett).([$A-Z_][0-9A-Z_$\.]+)/gmi
    let R2 = /(\$props\.settings|this\.sett)\[(?:'|")(.+)(?:'|")\]/gmi

    let sett = []

    do {
        var m = R1.exec(src)
        if (m) {
            sett.push(m[2])
        }
    } while (m)

    do {
        var m = R2.exec(src)
        if (m) {
            sett.push(m[2])
        }
    } while (m)

    return sett
}

function sett2desc(sett) {

    function setCharAt(str,index,chr) {
        if(index > str.length-1) return str
        return str.substring(0,index) + chr + str.substring(index+1)
    }

    sett = sett.replace(/([^A-Z])([A-Z])/g, '$1 $2')
    sett = sett.replace(/-|_/g, ' ')
    let tuple = sett.split(' ')
    tuple = tuple
        .filter(x => x.length)
        .map(x => setCharAt(x, 0, x[0].toUpperCase()))
    return tuple.join(' ')
}
