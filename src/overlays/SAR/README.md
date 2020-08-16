
# SAR

<table><tr><td>
  <img width="800" heigth="480" src="screen.png" alt="screen">
</td></tr></table>

## Info

| Author | Type | Description | Version |
| ------ | ---- | ----------- | ------- |
| StdSquad | OV+Script | Parabolic SAR | 1.0.0 |


## Settings

| Name | Description | Default |
| ---- | ----------- | ------- |
| start | Start | 0.02 |
| inc | Increment | 0.02 |
| max | Maximum | 0.2 |
| lineWidth | Line Width |  |
| color | Color |  |

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
            overlays: [Overlays['SAR']]
        }
    }
}

</script>

```

## Overlay data example

```json
[]
```

## Read more about SAR

[Investopedia: SAR](https://www.investopedia.com/search?q=SAR)<br>
[Investopedia: Parabolic SAR](https://www.investopedia.com/search?q=Parabolic%20SAR)

