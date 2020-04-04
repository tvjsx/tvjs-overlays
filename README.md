

<div align="center">
  <img width="318" heigth="256" src="assets/README-e6a22b27.png" alt="trading-vue logo">
</div>

# TVJS Overlay Pack ![npm](https://img.shields.io/npm/v/tvjs-overlays.svg?color=brightgreen&label=version) ![license](https://img.shields.io/badge/license-MIT-blue.svg) ![GRUGLIKE](https://img.shields.io/badge/GRUG-LIKE-yellow.svg) ![build](https://img.shields.io/badge/build-passing-brightgreen.svg) ![size](https://img.shields.io/github/size/tvjsx/tvjs-overlays/dist/tvjs-overlays.min.js.svg)

**TVJS Overlays** is a collection of overlays made by the [TradingVue.js](https://github.com/tvjsx/trading-vue-js) community.

## Install

**NPM**
```
npm i tvjs-overlays
```
**In browser**

```
<script src="tvjs-overlays.min.js"></script>
```

## How to use

**NPM**

```html
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
            overlays: Object.values(Overlays)
        }
    }
}

</script>

```

**In browser**

```html
<div id="app">
    <trading-vue :overlays="overlays">
    </trading-vue>
</div>
<script>
app = new Vue({
    el: '#app',
    data: {
        overlays: Object.values(TvjsOverlays),
    }
})
</script>
```

## Adding new overlay

1. Create a folder in `src/overlays` named just like your overlay: `YourOverlayName`
2. Your main code must be in `YourOverlayName.vue`, but you can use .js and .json imports
3. Add your data sample `data.json`
4. Make sure that the following conditions are met:
```
    * folder name === .vue file name === overlay name
    * required functions: draw, use_for
    * use_for includes the name
    * use_for.length === 1
    * name is unique (format: CapitalizedWords, Numbers_123)
    * required meta: author, version
    * data.json < 1MB
```

5. `npm run check` to check that everything is OK
6. `npm run compile` to build the development index
7. `npm run dev` to test your overlays
8. Submit a PR request to this repo
