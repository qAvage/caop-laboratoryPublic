/**
 * UIContainer component
 **/

import { h } from 'vue'

const UIContainer = (props, context) => {
  return h('div', { class: 'ui-container' }, context.slots)
}

export default UIContainer
