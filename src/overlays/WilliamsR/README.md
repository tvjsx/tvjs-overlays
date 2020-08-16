
# WilliamsR

<table><tr><td>
  <img width="800" heigth="480" src="screen.png" alt="screen">
</td></tr></table>

## Info

| Author | Type | Description | Version |
| ------ | ---- | ----------- | ------- |
| StdSquad | OV+Script | Williams %R | 1.0.0 |


## Settings

| Name | Description | Default |
| ---- | ----------- | ------- |
| length | Length | 14 |
| upper | Upper |  |
| lower | Lower |  |
| upper | Upper |  |
| lower | Lower |  |
| lineWidth | Line Width |  |
| color | Color |  |
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
            overlays: [Overlays['WilliamsR']]
        }
    }
}

</script>

```

## Overlay data example

```json
[]
```

## Read more about WilliamsR

[Investopedia: WilliamsR](https://www.investopedia.com/search?q=WilliamsR)<br>
[Investopedia: Williams %R](https://www.investopedia.com/search?q=Williams%20%R)

