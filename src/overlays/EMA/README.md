
# EMA

<table><tr><td>
  <img width="800" heigth="480" src="screen.png" alt="screen">
</td></tr></table>

## Info

| Author | Type | Description | Version |
| ------ | ---- | ----------- | ------- |
| StdSquad | OV+Script | Exponential Moving Average | 1.0.0 |


## Settings

| Name | Description | Default |
| ---- | ----------- | ------- |
| length | Length | 12 |
| lineWidth | Line Width |  |
| color | Color |  |
| dataIndex | Data Index |  |

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
            overlays: [Overlays['EMA']]
        }
    }
}

</script>

```

## Overlay data example

```json
[]
```

## Read more about EMA

[Investopedia: EMA](https://www.investopedia.com/search?q=EMA)<br>
[Investopedia: Exponential Moving Average](https://www.investopedia.com/search?q=Exponential%20Moving%20Average)

