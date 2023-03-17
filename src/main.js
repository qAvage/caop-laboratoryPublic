import { createApp, h, Transition } from 'vue'
import UISVGIcon from '@/components/global/UISVGIcon'
import UISocialIcons from '@/components/global/UISocialIcons'
import UIContainer from '@/components/global/UIContainer'
import UIButton from '@/components/global/UIButton'
import UITitleIcon from '@/components/global/UITitleIcon'
import Header from '@/components/common/Header.vue'
import Catalog from '@/components/sections/Catalog.vue'
import About from '@/components/sections/About.vue'
import AboutCard from '@/components/sections/AboutCard'
import Feedback from '@/components/sections/Feedback.vue'
import Offers from '@/components/sections/Offers.vue'
import Contacts from '@/components/sections/Contacts.vue'
import Faq from '@/components/sections/Faq.vue'
import Footer from '@/components/common/Footer.vue'
import FormPopup from './components/includes/FormPopup'
import '@/assets/scss/main.scss'

createApp({
  render () {
    return [
      h(Header, { onSomeEmit: () => this.togglePop() }),
      h(Catalog, { onSomeEmit: () => this.togglePop() }),
      h(About),
      h(Feedback),
      h(Offers, { onSomeEmit: () => this.togglePop() }),
      h(Contacts),
      h(Faq),
      h(Footer, { onSomeEmit: () => this.togglePop() }),
      h(Transition, { name: 'fade' },
        () => this.showPopup ? h(FormPopup, { onSomeEmit: () => this.togglePop() }) : '')
    ]
  },
  data () {
    return {
      showPopup: false
    }
  },
  methods: {
    togglePop () {
      this.showPopup = !this.showPopup
    }
  }
})
  .component('UISVGIcon', UISVGIcon)
  .component('UISocialIcons', UISocialIcons)
  .component('UIButton', UIButton)
  .component('UITitleIcon', UITitleIcon)
  .component('UIContainer', UIContainer)
  .component('AboutCard', AboutCard)
  .mount('#app')
