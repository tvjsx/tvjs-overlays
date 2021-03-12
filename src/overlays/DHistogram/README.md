
# Histogram

<table><tr><td>
  <img width="800" heigth="480" src="screen.png" alt="screen">
</td></tr></table>

## Info

| Author     | Type | Description                                            | Version |
| ---------- | ---- | ------------------------------------------------------ | ------- |
| Acid3croco | OV   | Double histogram allowing positive and negative values | 1.0.0   |


## Settings

| Name          | Description                      | Default |
| ------------- | -------------------------------- | ------- |
| lineWidth     | Line Width                       | 4       |
| thresholdSize | Minimum size to draw             | 0       |
| posColor      | Color first value (above base)   | #35a776 |
| negColor      | Color second value (bellow base) | #e54150 |

## How to use

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
            overlays: [Overlays['DHistogram']]
        }
    }
}

</script>

```

## Overlay data example

```js
[<time>, <positive>, <negative>]
```

```json
[
    [
        1597302000000,
        2286.6716306055764,
        -8144.793641227576
    ],
    [
        1597309200000,
        6437.031138207451,
        -846.5262646150916
    ],
    [
        1597330800000,
        2353.808888843231,
        -118.68427048220721
    ],
    [
        1597338000000,
        2512.6243994801744,
        -2978.1436249382264
    ],
    [
        1597356000000,
        1112.4455494976044,
        -628.2787596274463
    ],
    [
        1597363200000,
        968.1686190341243,
        -8502.108470466474
    ],
    [
        1597374000000,
        2133.947242323985,
        -286.7731679587944
    ],
    [
        1597377600000,
        7391.574786230975,
        -4379.107602181067
    ],
    [
        1597384800000,
        1247.4285872468588,
        -8390.740641456414
    ],
    [
        1597402800000,
        3824.138619960904,
        -68.77610457615121
    ]
]
```

## Read more about Histogram

[Investopedia: Histogram](https://www.investopedia.com/search?q=Histogram)<br>
[Investopedia: Histogram plot](https://www.investopedia.com/search?q=Histogram%20plot)

