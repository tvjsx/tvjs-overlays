
// Auto overlay list (auto-gen .md table)
const minimist = require('minimist')
const argv = minimist(process.argv.slice(2))

// For the parser
//process.argv.push('--silent')

let parser = require('../webpack/overlay-parser.js')

let list = parser.parse()

const HEAD = `
| Name | Author | Type | Description | Version |
|---|---|---|---|---|\n`

let body = ``

for (var ov of list) {
    let n = ov.name
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
    body += `| ${n} | ${a} | ${t} | ${d} | ${v} |\n`
}

console.log(HEAD + body)
