
# Ribbon

<table><tr><td>
  <img width="800" heigth="480" src="screen.png" alt="screen">
</td></tr></table>

## Info

| Author | Type | Description | Version |
| ------ | ---- | ----------- | ------- |
| StdSquad | OV+Script | Moving Average Ribbon | 1.0.0 |


## Settings

| Name | Description | Default |
| ---- | ----------- | ------- |
| start | Start Length | 10 |
| number | Number of Lines | 5 |
| step | Length Step | 10 |
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
            overlays: [Overlays['Ribbon']]
        }
    }
}

</script>

```

## Overlay data example

```json
[]
```

## Read more about Ribbon

[Investopedia: Ribbon](https://www.investopedia.com/search?q=Ribbon)<br>
[Investopedia: Moving Average Ribbon](https://www.investopedia.com/search?q=Moving%20Average%20Ribbon)

