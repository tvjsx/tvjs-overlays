
# COG

<table><tr><td>
  <img width="800" heigth="480" src="screen.png" alt="screen">
</td></tr></table>

## Info

| Author | Type | Description | Version |
| ------ | ---- | ----------- | ------- |
| StdSquad | OV+Script | Center of Gravity | 1.0.0 |


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
            overlays: [Overlays['COG']]
        }
    }
}

</script>

```

## Overlay data example

```json
[]
```

## Read more about COG

[Investopedia: COG](https://www.investopedia.com/search?q=COG)<br>
[Investopedia: Center of Gravity](https://www.investopedia.com/search?q=Center%20of%20Gravity)

