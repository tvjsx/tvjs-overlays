

<div align="center">
  <img width="318" heigth="256" src="assets/README-e6a22b27.png" alt="trading-vue logo">
</div>

# TVJS Overlay Pack ![npm](https://img.shields.io/npm/v/tvjs-overlays.svg?color=brightgreen&label=version) ![license](https://img.shields.io/badge/license-MIT-blue.svg) ![GRUGLIKE](https://img.shields.io/badge/GRUG-LIKE-yellow.svg) ![build](https://img.shields.io/badge/build-passing-brightgreen.svg) ![size](https://img.shields.io/github/size/tvjsx/tvjs-overlays/dist/tvjs-overlays.min.js.svg)

**TVJS Overlays** is a collection of overlays made by the [TradingVue.js](https://github.com/tvjsx/trading-vue-js) community.

## List

| Name | Author | Type | Description | Version |
|---|---|---|---|---|
| ALMA | StdSquad | OV+Script | Arnaud Legoux Moving Average | 1.0.0 |
| ATR | StdSquad | OV+Script | Average True Range | 1.0.0 |
| ATRp | StdSquad | OV+Script | Average True Range, % | 1.0.0 |
| BB | StdSquad | OV+Script | Bollinger Bands | 1.0.0 |
| BBW | StdSquad | OV+Script | Bollinger Bands Width | 1.0.0 |
| CCI | StdSquad | OV+Script | Commodity Channel Index | 1.0.0 |
| CMO | StdSquad | OV+Script | Chande Momentum Oscillator | 1.0.0 |
| COG | StdSquad | OV+Script | Center of Gravity | 1.0.0 |
| DMI | StdSquad | OV+Script | Directional Movement Index | 1.0.0 |
| EMA | StdSquad | OV+Script | Exponential Moving Average | 1.0.0 |
| HMA | StdSquad | OV+Script | Hull Moving Average | 1.0.0 |
| Histogram | StdSquad | OV | Histogram plot | 1.0.0 |
| Ichimoku | Sudeep Batra | OV |  | 1.0.0 |
| KC | StdSquad | OV+Script | Keltner Channels | 1.0.0 |
| KCW | StdSquad | OV+Script | Keltner Channels Width | 1.0.0 |
| LongShortTrades | Sudeep Batra | OV |  | 1.0.1 |
| MACD | StdSquad | OV+Script | Moving Average Convergence/Divergence | 1.0.0 |
| MFI | StdSquad | OV+Script | Money Flow Index | 1.0.0 |
| MOM | StdSquad | OV+Script | Momentum | 1.0.0 |
| PlotCross | StdSquad | OV | Plot line with crosses | 1.0.0 |
| ROC | StdSquad | OV+Script | Rate of Change | 1.0.0 |
| RSI | StdSquad | OV+Script | Relative Strength Index | 1.0.0 |
| Ribbon | StdSquad | OV+Script | Moving Average Ribbon | 1.0.0 |
| SAR | StdSquad | OV+Script | Parabolic SAR | 1.0.0 |
| SMA | StdSquad | OV+Script | Symmetrically Weighted Moving Average | 1.0.0 |
| SWMA | StdSquad | OV+Script | Symmetrically Weighted Moving Average | 1.0.0 |
| Stoch | StdSquad | OV+Script | Stochastic | 1.0.0 |
| TSI | StdSquad | OV+Script | True Strength Index | 1.0.0 |
| VWMA | StdSquad | OV+Script | Volume Weighted Moving Average | 1.0.0 |
| WilliamsR | StdSquad | OV+Script | Williams %R | 1.0.0 |

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
8. Add a short README.md ([example](https://github.com/tvjsx/tvjs-overlays/tree/master/src/overlays/TestOverlay1))
9. Submit a PR request to this repo
