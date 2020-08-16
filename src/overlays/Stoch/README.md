
# Stoch

<table><tr><td>
  <img width="800" heigth="480" src="screen.png" alt="screen">
</td></tr></table>

## Info

| Author | Type | Description | Version |
| ------ | ---- | ----------- | ------- |
| StdSquad | OV+Script | Stochastic | 1.0.0 |


## Settings

| Name | Description | Default |
| ---- | ----------- | ------- |
| param_k | K | 14 |
| param_d | D | 3 |
| smooth | Smooth | 3 |
| upper | Upper |  |
| lower | Lower |  |
| upper | Upper |  |
| lower | Lower |  |
| lineWidth | Line Width |  |
| kColor | K Color |  |
| dColor | D Color |  |
| bandColor | Band Color |  |
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
            overlays: [Overlays['Stoch']]
        }
    }
}

</script>

```

## Overlay data example

```json
[]
```

## Read more about Stoch

[Investopedia: Stoch](https://www.investopedia.com/search?q=Stoch)<br>
[Investopedia: Stochastic](https://www.investopedia.com/search?q=Stochastic)

