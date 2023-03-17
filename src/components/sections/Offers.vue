<template lang="pug">
section#offers
  UIContainer
    .title
      UITitleIcon Спецпредложения
      h2 Комплексные программы
      p
        | Наши пациенты знают, что наша миссия — забота о здоровье.
        | Каждый человек для нас уникален. Приходите к нам и почувствуйте это
    .slider.u-no-select
      .buttonSlider
        UISVGIcon(icon="arrow" @click="previous()")
        UISVGIcon(icon="arrow" @click="next()")
      flickity.carousel(
          v-if="Object.keys(offers).length > 0"
          ref="flickity"
          :options="flickityOptions")
        .carousel-cell(v-for="i in offers")
          .header
            h4 {{ i.name }}
          .body
            .item(
              :class="[i.children.length === 1 ? '' : multipleClassItem]"
              v-for="e in i.children"
              )
              .content
                p(
                  :class="[e.content.length === 1 ? '' : multipleClassP]"
                  v-for="p in e.content"
                  ) {{ p.name }}
              span {{ e.price }} ₽
          .bottom
            UIButton(@click="$emit('someEmit')") Узнать подробнее
</template>

<script>
import Flickity from 'vue-flickity'
import axios from 'axios'

export default {
  name: 'appOffers',
  components: {
    Flickity
  },
  data () {
    return {
      flickityOptions: {
        wrapAround: true,
        cellAlign: 'left',
        prevNextButtons: false,
        adaptiveHeight: true
      },
      offers: [],
      multipleClassItem: 'multiple',
      multipleClassP: 'several'
    }
  },
  methods: {
    next () {
      this.$refs.flickity.next()
    },
    previous () {
      this.$refs.flickity.previous()
    }
  },
  mounted () {
    axios
      .get('offers.json')
      .then(response => (this.offers = response.data.list))
  }
}
</script>
