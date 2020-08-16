
# ROC

<table><tr><td>
  <img width="800" heigth="480" src="screen.png" alt="screen">
</td></tr></table>

## Info

| Author | Type | Description | Version |
| ------ | ---- | ----------- | ------- |
| StdSquad | OV+Script | Rate of Change | 1.0.0 |


## Settings

| Name | Description | Default |
| ---- | ----------- | ------- |
| length | Length | 9 |
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
            overlays: [Overlays['ROC']]
        }
    }
}

</script>

```

## Overlay data example

```json
[]
```

## Read more about ROC

[Investopedia: ROC](https://www.investopedia.com/search?q=ROC)<br>
[Investopedia: Rate of Change](https://www.investopedia.com/search?q=Rate%20of%20Change)

