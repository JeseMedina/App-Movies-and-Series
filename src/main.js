import './sass/style.scss'

import { router } from './router/index.routes'
// import { navegar } from './router/index.routes'

router(window.location.hash);
window.addEventListener('hashchange', () =>{
    router(window.location.hash);
})