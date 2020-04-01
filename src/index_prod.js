

// -------- Production overlay index ---------
//      ! THIS FILE WAS AUTO-GENERATED !
//
// Do not commit this file, the final index is
// compiled by the repo owner, use index_dev.js to
// experiment: 'npm run compile'

import TestOverlay1 from './overlays/TestOverlay1/TestOverlay1.vue'
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