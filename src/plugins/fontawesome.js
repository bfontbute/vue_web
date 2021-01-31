import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSpinner, faStar, faAward, faCalendar, faJedi, faGlobeEurope } from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)


//se importan los iconos de uno en uno
library.add(faSpinner)
library.add(faStar)
library.add(faAward)
library.add(faSpinner)
library.add(faCalendar)
library.add(faJedi)
library.add(faGlobeEurope)



Vue.component('icons', FontAwesomeIcon)