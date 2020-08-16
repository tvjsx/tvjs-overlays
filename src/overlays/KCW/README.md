
# KCW

<table><tr><td>
  <img width="800" heigth="480" src="screen.png" alt="screen">
</td></tr></table>

## Info

| Author | Type | Description | Version |
| ------ | ---- | ----------- | ------- |
| StdSquad | OV+Script | Keltner Channels Width | 1.0.0 |


## Settings

| Name | Description | Default |
| ---- | ----------- | ------- |
| length | Length | 20 |
| mult | Multiplier | 1 |
| use_tr | Use True Range | true |
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
            overlays: [Overlays['KCW']]
        }
    }
}

</script>

```

## Overlay data example

```json
[]
```

## Read more about KCW

[Investopedia: KCW](https://www.investopedia.com/search?q=KCW)<br>
[Investopedia: Keltner Channels Width](https://www.investopedia.com/search?q=Keltner%20Channels%20Width)

