/**
 * UISVGIcon component
 *
 * @description - Watch for the appropriate icon name from the sprite.svg
 */

import { h } from 'vue'

const UISVGIcon = (props) => {
  const use = h('use', { 'xlink:href': require('@/assets/img/sprite.svg') + `#${props.icon}` })
  return h('i', { class: 'ui-svg-icon' }, h('svg', use))
}

UISVGIcon.props = {

  // Icon name from SVG sprite
  icon: {
    type: String,
    default: 'cross'
  }

}

export default UISVGIcon
