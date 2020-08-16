
# CMO

<table><tr><td>
  <img width="800" heigth="480" src="screen.png" alt="screen">
</td></tr></table>

## Info

| Author | Type | Description | Version |
| ------ | ---- | ----------- | ------- |
| StdSquad | OV+Script | Chande Momentum Oscillator | 1.0.0 |


## Settings

| Name | Description | Default |
| ---- | ----------- | ------- |
| length | Length | 10 |
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
            overlays: [Overlays['CMO']]
        }
    }
}

</script>

```

## Overlay data example

```json
[]
```

## Read more about CMO

[Investopedia: CMO](https://www.investopedia.com/search?q=CMO)<br>
[Investopedia: Chande Momentum Oscillator](https://www.investopedia.com/search?q=Chande%20Momentum%20Oscillator)

