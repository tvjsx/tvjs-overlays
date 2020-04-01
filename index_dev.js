

// -------- Development overlay index ---------
//      ! THIS FILE WAS AUTO-GENERATED !
//
// You can overwrite it and have fun, to restore
// the default state: 'npm run compile'

import TestOverlay1 from './overlays/TestOverlay1/TestOverlay1.vue',
import TestOverlay2 from './overlays/TestOverlay2/TestOverlay2.vue'

const Pack = {
    TestOverlay1,
    TestOverlay2
}

if (typeof window !== 'undefined' && window.Vue) {
    window.TvjsOverlays = Pack
}

export default Pack

export {
    TestOverlay1,
    TestOverlay2
}