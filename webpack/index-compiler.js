const fs = require('fs')
const parser = require('./overlay-parser.js')
const minimist = require('minimist')

const argv = minimist(process.argv.slice(2))

const PROD_BANNER = `
// -------- Production overlay index ---------
//      ! THIS FILE WAS AUTO-GENERATED !
//
// Do not commit this file, the final index is
// compiled by the repo owner, use index_dev.js to
// experiment: 'npm run compile'
`

const DEV_BANNER = `
// -------- Development overlay index ---------
//      ! THIS FILE WAS AUTO-GENERATED !
//
// You can overwrite it and have fun, to restore
// the default state: 'npm run compile'
`

const TEMPLATE = (banner, imports, exports) => `
${banner}
${imports}

const Pack = {
    ${exports}
}

if (typeof window !== 'undefined' && window.Vue) {
    window.TvjsOverlays = Pack
}

export default Pack

export {
    ${exports}
}`

function compile() {

    let overlays = parser.parse()

    process.stdout.write(
        'Compiling '.gray + `${overlays.length} overlays...`)

    let banner = argv.prod ? PROD_BANNER : DEV_BANNER
    let imports = []
    let exports = []
    let output = argv.prod ? 'index_prod.js' : 'index_dev.js'

    for (var info of overlays) {
        let imp = info.path.replace('/src', '') + info.name + '.vue'
        imports.push(`import ${info.name} from '${imp}'`)
        exports.push(info.name)
    }

    let source = TEMPLATE(
        banner,
        imports.join('\n'),
        exports.join(',\n    ')
    )

    fs.writeFileSync('./src/' + output, source)

    console.log(' [OK]'.green)

    let type = argv.prod ? '👑 Production index' : 'Development index'

    if (argv.prod) lock_versions(overlays)

    console.log(type, '[Ready]'.green)

}

function lock_versions(overlays) {

    process.stdout.write('Locking current versions...')

    let obj = { overlays: {} }

    overlays = overlays.forEach(x => {
        let meta = x.methods.meta_info()
        obj.overlays[x.name] = {
            version: meta.version,
            author: meta.author,
            is_tool: !!x.methods.tool
        }
    })

    let json = JSON.stringify(obj, null, 4)

    fs.writeFileSync('overlay-lock.json', json)

    console.log(' [OK]'.green)
}

if (require.main === module) {
    compile()
}

module.exports.compile = compile
