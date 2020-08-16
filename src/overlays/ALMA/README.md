
# ALMA

<table><tr><td>
  <img width="800" heigth="480" src="screen.png" alt="screen">
</td></tr></table>

## Info

| Author | Type | Description | Version |
| ------ | ---- | ----------- | ------- |
| StdSquad | OV+Script | Arnaud Legoux Moving Average | 1.0.0 |


## Settings

| Name | Description | Default |
| ---- | ----------- | ------- |
| length | Length | 10 |
| offset | Offset | 0.9 |
| sigma | Sigma | 5 |
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
            overlays: [Overlays['ALMA']]
        }
    }
}

</script>

```

## Overlay data example

```json
[]
```

## Read more about ALMA

[Investopedia: ALMA](https://www.investopedia.com/search?q=ALMA)<br>
[Investopedia: Arnaud Legoux Moving Average](https://www.investopedia.com/search?q=Arnaud%20Legoux%20Moving%20Average)

