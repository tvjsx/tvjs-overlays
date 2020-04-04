const vm = require('vm')
const fs = require('fs')
const colors = require('colors')
const minimist = require('minimist')
const pathmod = require('path')


const argv = minimist(process.argv.slice(2))

/* Overlay checks:

[+] file name === name === folder name
[ ] file name < some length (symbols)
[+] only one .vue file
[+] required functions: draw, use_for
[+] use_for includes name
[+] use_for.length === 1
[+] name is unique (CapitalizedWords, ALL_CAPS, Numbers_123)
[+] each use_for is unique
[+] required meta: author, version
[+] data.json < 1MB
[ ] updated version > the version in overlays.lock

*/

const OVERLAYS = './src/overlays/'
const ES6_IMPORT = /\bimport\s+(?:(.+)\s+from\s+)?[\'"]([^"\']+)["\']/g
const ES6_EXPDEF = /\bexport default\s+(?:(.+))/g

var names = []
// 'undefined' means parse/compile all
const LIST = argv.list ? argv.list.split(',') : undefined
const SL = argv.silent
const NAME = argv.name

function parse() {

    let overlays = []

    for (var f of fs.readdirSync(OVERLAYS)) {

        if (f === '.DS_Store') continue
        if (f[0] === '_') continue

        let path = `${OVERLAYS}${f}/`
        if (LIST && !LIST.includes(f)) continue
        if (fs.statSync(path).isDirectory()) {
            if (!SL) process.stdout.write('Parsing '.gray + f)
            try {
                overlays.push(read_overlay(path))
                if (!SL) console.log(' [OK]'.green)
            } catch(e) {

                if (!SL) {
                    console.log(' ⚠️  '.yellow + e)
                    console.log(f + ' excluded from the index'.red)
                }
            }
        }
    }

    // Name-checker
    if (NAME) name_checker()

    return overlays
}

function name_checker() {

    try {
        if (!name_format_check(NAME)) return
        if (names.includes(NAME)) {
            throw `Name ${NAME.yellow} already exists`
        }
        console.log(`The name is cool`, '[OK]'.green)
    } catch(e) {
        console.log(' ⚠️  '.yellow + e)
    }

}

function read_overlay(path) {

    let dotvue = []

    let folder = path.split(pathmod.sep).reverse()[1]

    for (var f of fs.readdirSync(path)) {
        if (f === '.DS_Store') continue
        //console.log('   ', f)
        let arr = f.split('.')
        if (arr[0] === folder && arr[1] === 'vue') {
            dotvue.push({
                path: path + f,
                name: arr[0]
            })
        }
    }

    if (dotvue.length !== 1) {
        throw "Overlay folder should contain main .vue file"
    }

    let info = extract_info(dotvue[0].path)
    let name = dotvue[0].name
    info.path = path

    if (name !== info.name) throw "File name !== overlay name"

    if (name !== folder) throw "Folder name !== overlay name"

    checks(info)
    return info
}

function checks(info) {

    if (names.includes(info.name))
        throw "Overlay's name is not unique"

    if (typeof info.methods.use_for !== 'function')
        throw "use_for() method is required"

    if (typeof info.methods.draw !== 'function')
        throw "draw() method is required"

    if (!info.methods.use_for().includes(info.name))
        throw "use_for() doesn't include overlay's name"

    if (info.methods.use_for().length !== 1)
        throw "use_for() should use have length === 1"

    if (!name_format_check(info.name))
        throw "Overlay name has wrong format"

    if (!info.methods.meta_info().author)
        throw "Overlay's meta_info contains no 'author'"

    if (!info.methods.meta_info().version)
        throw "Overlay's meta_info contains no 'version'"

    if (!data_json_check(info))
        throw "Problem with data.json"


    names.push(info.name)

}

function name_format_check(name) {
     if (!/^[a-zA-Z_0-9]*$/.test(name)) {
         console.log("⚠️  Only a-Z, 0-9 and _ are alowed")
         return false
     }
     if (name[0] !== name[0].toUpperCase()) {
         console.log("⚠️  First latter should be capital")
         return false
     }
     return true
}

function data_json_check(info) {

    let path = info.path + 'data.json'

    if (!fs.existsSync(path)) {
        throw `The folder should contain data.json (sample of data)`
    }

    let stats = fs.statSync(path)
    let size = stats.size / 1000000.0

    if (size > 1) {
        throw `data.json should be less than 1MB`
    }

    return true

}

function extract_info(file) {

    let content = fs.readFileSync(file, 'utf8')

    content = content.replace(/<\/?script>/g, '')
    content = content.replace(/export\s+default/g, 'Export_Default = ')

    content = parse_imports(content)

    try {
        // We use vm as a safe way to parse the overlay
        // structure. It doesn't support full ES6, so
        // the code must be cleaned before the exec.
        let struct = vm.runInNewContext(content)
        return struct
    } catch(e) {
        console.log(e)
        return {}
    }

}

function parse_imports(src) {
    let rex = regex_clone(ES6_IMPORT)
    let symbols = []
    do {
        var m = rex.exec(src)
        if (m) {
            let imp = m[1].replace(/\{|\}|\s/g, '')
            symbols.push(...imp.split(','))
        }
    } while (m)
    let pre = ''
    symbols.forEach(x => {
        pre += `let ${x} = {}\n`
    })
    return pre + remove_imports(src)
}

function vers_greater(v1, v2) {
    v1 = v1.split('.')
    v2 = v2.split('.')
    for (var i = 0; i < v1.length; i++) {
        let a = ~~v1[i]
        let b = ~~v2[i]
        if (a > b) return true
        if (a < b) return false
    }
    return false
}

function regex_clone(rex) {
    return new RegExp(rex.source, rex.flags)
}

function remove_imports(src) {
    ES6_IMPORT.lastIndex = 0
    return src.replace(ES6_IMPORT, '')
}

if (require.main === module) {
    parse()
}

module.exports.parse = parse
