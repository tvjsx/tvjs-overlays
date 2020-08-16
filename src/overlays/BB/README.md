
# BB

<table><tr><td>
  <img width="800" heigth="480" src="screen.png" alt="screen">
</td></tr></table>

## Info

| Author | Type | Description | Version |
| ------ | ---- | ----------- | ------- |
| StdSquad | OV+Script | Bollinger Bands | 1.0.0 |


## Settings

| Name | Description | Default |
| ---- | ----------- | ------- |
| length | Length | 21 |
| stddev | StdDev | 2 |
| lineWidth | Line Width |  |
| color | Color |  |
| showMid | Show Mid |  |
| backColor | Back Color |  |

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
            overlays: [Overlays['BB']]
        }
    }
}

</script>

```

## Overlay data example

```json
[]
```

## Read more about BB

[Investopedia: BB](https://www.investopedia.com/search?q=BB)<br>
[Investopedia: Bollinger Bands](https://www.investopedia.com/search?q=Bollinger%20Bands)

