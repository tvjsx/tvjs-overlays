
# TSI

<table><tr><td>
  <img width="800" heigth="480" src="screen.png" alt="screen">
</td></tr></table>

## Info

| Author | Type | Description | Version |
| ------ | ---- | ----------- | ------- |
| StdSquad | OV+Script | True Strength Index | 1.0.0 |


## Settings

| Name | Description | Default |
| ---- | ----------- | ------- |
| long | Long Length | 25 |
| short | Short Length | 13 |
| signal | Signal Length | 13 |
| lineWidth | Line Width |  |
| lineWidths | Line Widths |  |
| colors | Colors |  |

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
            overlays: [Overlays['TSI']]
        }
    }
}

</script>

```

## Overlay data example

```json
[]
```

## Read more about TSI

[Investopedia: TSI](https://www.investopedia.com/search?q=TSI)<br>
[Investopedia: True Strength Index](https://www.investopedia.com/search?q=True%20Strength%20Index)

